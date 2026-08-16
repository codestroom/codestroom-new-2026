/* Regenerates src/components/logoOutlines.js from public/assets/logo.png.
   Run with:  node scripts/trace-logo.mjs

   The mark is two overlapping rounded shapes. Colour alone can't tell you which
   pixels belong to which — the artwork also carries fold shading, so each shape
   is painted in two tones and one shaded patch of the pink reads as the same
   purple as the overlap. So instead of thresholding colours, this:

     1. splits the mark into faces along its sharp colour edges,
     2. searches subsets of those faces for the ones that are convex — the two
        shapes are rounded rectangles, so each is convex, and so is their
        overlap, while any wrong grouping is visibly not,
     3. takes the largest convex union as one shape and the largest convex union
        that completes the cover as the other,
     4. contour-traces both and simplifies, checking IoU against the mask.

   It asserts |pink| + |blue| - |overlap| == |mark|, which pins the decomposition
   down: if the shapes were wrong, the areas would not reconcile. */

import { readFileSync, writeFileSync } from 'fs';
import zlib from 'zlib';

// minimal PNG decoder (8-bit, non-interlaced, colour type 2/6)
function decodePng(path) {
  const buf = readFileSync(path);
  let pos = 8;
  let w, h, bitDepth, colorType;
  const idat = [];

  while (pos < buf.length) {
    const len = buf.readUInt32BE(pos);
    const type = buf.toString('ascii', pos + 4, pos + 8);
    const data = buf.subarray(pos + 8, pos + 8 + len);
    if (type === 'IHDR') {
      w = data.readUInt32BE(0);
      h = data.readUInt32BE(4);
      bitDepth = data[8];
      colorType = data[9];
      if (data[12] !== 0) throw new Error('interlaced png unsupported');
    } else if (type === 'IDAT') {
      idat.push(data);
    } else if (type === 'IEND') break;
    pos += 12 + len;
  }
  if (bitDepth !== 8 || (colorType !== 6 && colorType !== 2)) {
    throw new Error(`unsupported png: depth ${bitDepth} colorType ${colorType}`);
  }

  const ch = colorType === 6 ? 4 : 3;
  const raw = zlib.inflateSync(Buffer.concat(idat));
  const stride = w * ch;
  const out = Buffer.alloc(w * h * 4);
  let prev = Buffer.alloc(stride);

  for (let y = 0; y < h; y++) {
    const filter = raw[y * (stride + 1)];
    const line = Buffer.from(raw.subarray(y * (stride + 1) + 1, (y + 1) * (stride + 1)));
    for (let x = 0; x < stride; x++) {
      const a = x >= ch ? line[x - ch] : 0;
      const b = prev[x];
      const c = x >= ch ? prev[x - ch] : 0;
      let v = line[x];
      if (filter === 1) v += a;
      else if (filter === 2) v += b;
      else if (filter === 3) v += (a + b) >> 1;
      else if (filter === 4) {
        const p = a + b - c;
        const pa = Math.abs(p - a), pb = Math.abs(p - b), pc = Math.abs(p - c);
        v += pa <= pb && pa <= pc ? a : pb <= pc ? b : c;
      }
      line[x] = v & 0xff;
    }
    prev = line;
    for (let x = 0; x < w; x++) {
      out[(y * w + x) * 4 + 0] = line[x * ch + 0];
      out[(y * w + x) * 4 + 1] = line[x * ch + 1];
      out[(y * w + x) * 4 + 2] = line[x * ch + 2];
      out[(y * w + x) * 4 + 3] = ch === 4 ? line[x * ch + 3] : 255;
    }
  }
  return { w, h, rgba: out };
}

const { w, h, rgba } = decodePng(new URL('../public/assets/logo.png', import.meta.url));
const alphaAt = (x, y) => rgba[(y * w + x) * 4 + 3];
const rgbAt = (x, y) => [rgba[(y * w + x) * 4], rgba[(y * w + x) * 4 + 1], rgba[(y * w + x) * 4 + 2]];

function gradient(x, y) {
  if (x < 4 || y < 4 || x >= w - 4 || y >= h - 4 || alphaAt(x, y) < 220) return Infinity;
  const a = rgbAt(x - 2, y), b = rgbAt(x + 2, y), c = rgbAt(x, y - 2), d = rgbAt(x, y + 2);
  return Math.hypot(
    Math.hypot(a[0] - b[0], a[1] - b[1], a[2] - b[2]),
    Math.hypot(c[0] - d[0], c[1] - d[1], c[2] - d[2])
  );
}

/* ---- 1. faces between the sharp edges ---- */
const onEdge = new Uint8Array(w * h);
for (let y = 1; y < h - 1; y++) {
  for (let x = 1; x < w - 1; x++) {
    if (gradient(x, y) <= 18) continue;
    for (let dy = -2; dy <= 2; dy++) for (let dx = -2; dx <= 2; dx++) onEdge[(y + dy) * w + x + dx] = 1;
  }
}

const face = new Int32Array(w * h).fill(-1);
const faces = [];
for (let seed = 0; seed < w * h; seed++) {
  if (face[seed] !== -1 || onEdge[seed] || rgba[seed * 4 + 3] < 220) continue;
  const id = faces.length;
  const stack = [seed];
  face[seed] = id;
  let n = 0, r = 0, g = 0, b = 0;
  while (stack.length) {
    const p = stack.pop();
    const x = p % w, y = (p / w) | 0;
    n++; r += rgba[p * 4]; g += rgba[p * 4 + 1]; b += rgba[p * 4 + 2];
    for (const [dx, dy] of [[1, 0], [-1, 0], [0, 1], [0, -1]]) {
      const nx = x + dx, ny = y + dy;
      if (nx < 0 || ny < 0 || nx >= w || ny >= h) continue;
      const q = ny * w + nx;
      if (face[q] !== -1 || onEdge[q] || rgba[q * 4 + 3] < 220) continue;
      face[q] = id;
      stack.push(q);
    }
  }
  faces.push({ id, n, hex: '#' + [r, g, b].map((v) => Math.round(v / n).toString(16).padStart(2, '0')).join('') });
}

// hand every edge pixel to its nearest face so the faces tile the mark with no seams
const owner = Int32Array.from(face);
{
  const queue = [];
  for (let p = 0; p < w * h; p++) if (owner[p] >= 0) queue.push(p);
  for (let i = 0; i < queue.length; i++) {
    const p = queue[i], x = p % w, y = (p / w) | 0;
    for (const [dx, dy] of [[1, 0], [-1, 0], [0, 1], [0, -1]]) {
      const nx = x + dx, ny = y + dy;
      if (nx < 0 || ny < 0 || nx >= w || ny >= h) continue;
      const q = ny * w + nx;
      if (owner[q] !== -1 || rgba[q * 4 + 3] < 200) continue;
      owner[q] = owner[p];
      queue.push(q);
    }
  }
}

const big = faces.filter((f) => f.n > 3000).sort((a, b) => b.n - a.n);
const keep = new Set(big.map((f) => f.id));
console.log('faces:', big.map((f) => `${f.hex}(${f.n})`).join(' '));

/* ---- 2. which unions of faces are convex? ---- */
const samples = new Map(big.map((f) => [f.id, []]));
const areas = new Map(big.map((f) => [f.id, 0]));
let markArea = 0;
for (let y = 0; y < h; y++) {
  for (let x = 0; x < w; x++) {
    const id = owner[y * w + x];
    if (!keep.has(id)) continue;
    markArea++;
    areas.set(id, areas.get(id) + 1);
    if ((x & 3) === 0 && (y & 3) === 0) samples.get(id).push([x, y]);
  }
}

function hull(points) {
  const pts = points.slice().sort((a, b) => a[0] - b[0] || a[1] - b[1]);
  const cross = (o, a, b) => (a[0] - o[0]) * (b[1] - o[1]) - (a[1] - o[1]) * (b[0] - o[0]);
  const lower = [], upper = [];
  for (const p of pts) {
    while (lower.length >= 2 && cross(lower[lower.length - 2], lower[lower.length - 1], p) <= 0) lower.pop();
    lower.push(p);
  }
  for (let i = pts.length - 1; i >= 0; i--) {
    const p = pts[i];
    while (upper.length >= 2 && cross(upper[upper.length - 2], upper[upper.length - 1], p) <= 0) upper.pop();
    upper.push(p);
  }
  lower.pop(); upper.pop();
  return lower.concat(upper);
}

function solidity(ids) {
  const pts = [];
  let area = 0;
  for (const id of ids) { pts.push(...samples.get(id)); area += areas.get(id); }
  const ring = hull(pts);
  let a2 = 0;
  for (let i = 0; i < ring.length; i++) {
    const [x1, y1] = ring[i], [x2, y2] = ring[(i + 1) % ring.length];
    a2 += x1 * y2 - x2 * y1;
  }
  return { area, sol: area / (Math.abs(a2) / 2) };
}

const convex = [];
for (let mask = 1; mask < 1 << big.length; mask++) {
  const ids = big.filter((_, i) => mask & (1 << i)).map((f) => f.id);
  const { area, sol } = solidity(ids);
  if (sol > 0.98) convex.push({ ids: new Set(ids), area, sol });
}
convex.sort((a, b) => b.area - a.area);

/* ---- 3. the two shapes ---- */
const shapeA = convex[0];
const shapeB = convex.find((c) => c !== shapeA && big.every((f) => shapeA.ids.has(f.id) || c.ids.has(f.id)));
if (!shapeB) throw new Error('no pair of convex face-unions covers the mark');

const overlapIds = [...shapeA.ids].filter((id) => shapeB.ids.has(id));
const overlapArea = overlapIds.reduce((s, id) => s + areas.get(id), 0);
const reconciles = shapeA.area + shapeB.area - overlapArea === markArea;
console.log(`shape A: ${shapeA.area}px (solidity ${(100 * shapeA.sol).toFixed(1)}%)`);
console.log(`shape B: ${shapeB.area}px (solidity ${(100 * shapeB.sol).toFixed(1)}%)`);
console.log(`overlap: ${overlapArea}px, mark: ${markArea}px — areas reconcile: ${reconciles}`);
if (!reconciles) throw new Error('decomposition does not reconcile; the artwork is not two overlapping shapes');

// name them by the hue of their largest exclusive face
const exclusiveHue = (shape, other) => {
  const own = big.filter((f) => shape.ids.has(f.id) && !other.ids.has(f.id)).sort((a, b) => b.n - a.n)[0];
  const [r, g, b] = [1, 3, 5].map((i) => parseInt(own.hex.slice(i, i + 2), 16));
  return r > b ? 'pink' : 'blue';
};
const named = { [exclusiveHue(shapeA, shapeB)]: shapeA, [exclusiveHue(shapeB, shapeA)]: shapeB };
if (!named.pink || !named.blue) throw new Error('could not tell the two shapes apart by hue');

/* ---- 4. trace ---- */
function maskOf(shape) {
  const m = new Uint8Array(w * h);
  for (let p = 0; p < w * h; p++) if (shape.ids.has(owner[p])) m[p] = 1;
  return m;
}

function contour(m) {
  let start = -1;
  for (let p = 0; p < w * h && start < 0; p++) if (m[p]) start = p;
  const sx = start % w, sy = (start / w) | 0;
  const nb = [[-1, -1], [0, -1], [1, -1], [1, 0], [1, 1], [0, 1], [-1, 1], [-1, 0]];
  const dirOf = (dx, dy) => nb.findIndex(([a, b]) => a === dx && b === dy);
  const solid = (x, y) => x >= 0 && y >= 0 && x < w && y < h && m[y * w + x] === 1;

  const pts = [];
  let px = sx, py = sy, bx = sx - 1, by = sy, guard = 0;
  do {
    pts.push([px, py]);
    const k = dirOf(bx - px, by - py);
    let nextX = -1, nextY = -1, prevX = bx, prevY = by;
    for (let i = 1; i <= 8; i++) {
      const [dx, dy] = nb[(k + i) % 8];
      const cx = px + dx, cy = py + dy;
      if (solid(cx, cy)) { nextX = cx; nextY = cy; break; }
      prevX = cx; prevY = cy;
    }
    if (nextX < 0) break;
    bx = prevX; by = prevY; px = nextX; py = nextY;
  } while ((px !== sx || py !== sy) && ++guard < 8 * (w + h) * 4);
  return pts;
}

function simplify(ring, eps) {
  const perp = ([x, y], [x1, y1], [x2, y2]) => {
    const dx = x2 - x1, dy = y2 - y1;
    const t = Math.max(0, Math.min(1, ((x - x1) * dx + (y - y1) * dy) / (dx * dx + dy * dy || 1)));
    return Math.hypot(x - (x1 + t * dx), y - (y1 + t * dy));
  };
  const dp = (list) => {
    if (list.length < 3) return list;
    let idx = 0, max = 0;
    for (let i = 1; i < list.length - 1; i++) {
      const d = perp(list[i], list[0], list[list.length - 1]);
      if (d > max) { max = d; idx = i; }
    }
    if (max <= eps) return [list[0], list[list.length - 1]];
    return dp(list.slice(0, idx + 1)).slice(0, -1).concat(dp(list.slice(idx)));
  };
  const half = Math.floor(ring.length / 2);
  return dp(ring.slice(0, half + 1)).slice(0, -1).concat(dp(ring.slice(half).concat([ring[0]])).slice(0, -1));
}

function iou(poly, m) {
  const inside = (x, y) => {
    let c = false;
    for (let i = 0, j = poly.length - 1; i < poly.length; j = i++) {
      const [xi, yi] = poly[i], [xj, yj] = poly[j];
      if ((yi > y) !== (yj > y) && x < ((xj - xi) * (y - yi)) / (yj - yi) + xi) c = !c;
    }
    return c;
  };
  let inter = 0, uni = 0;
  for (let y = 0; y < h; y += 2) for (let x = 0; x < w; x += 2) {
    const a = !!m[y * w + x], b = inside(x, y);
    if (a || b) uni++;
    if (a && b) inter++;
  }
  return inter / uni;
}

const outlines = {};
for (const key of ['pink', 'blue']) {
  const m = maskOf(named[key]);
  const ring = contour(m);
  const simplified = simplify(ring, 0.8); // finer facets the big corner radii
  const quality = iou(simplified, m);
  if (quality < 0.99) throw new Error(`${key} outline only scores IoU ${quality.toFixed(4)}`);
  console.log(`${key}: ${ring.length} boundary px -> ${simplified.length} pts, IoU=${quality.toFixed(4)}`);
  outlines[key] = simplified;
}

const S = 1000 / w;
const fmt = (pts) => pts.map(([x, y]) => [
  +((x - w / 2) * S).toFixed(1),
  +((h / 2 - y) * S).toFixed(1),
]);

writeFileSync(new URL('../src/components/logoOutlines.js', import.meta.url),
`/* Outlines traced from public/assets/logo.png by scripts/trace-logo.mjs — do not hand-edit.
   Origin is the mark's centre, y points up, 1000 units = the source image width.
   The two shapes overlap; their intersection is the logo's dark blend zone. */

export const LOGO_OUTLINES = {
  blue: ${JSON.stringify(fmt(outlines.blue))},
  pink: ${JSON.stringify(fmt(outlines.pink))},
};
`);
console.log('wrote src/components/logoOutlines.js');
