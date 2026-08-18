import { useCallback, useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import Reveal from '../Reveal';

const COPY = {
  organic:
    'Organic-led: this plan leans into content, local SEO and community trust — building visibility that compounds over time.',
  balanced:
    'A balanced mix: organic content and paid campaigns working together from the same strategy.',
  paid:
    'Paid-led: this plan leans into ads and performance campaigns — built for fast, measurable results.',
};

const PRESETS = [
  { name: '🌱 Long-term Organic Compounding', val: 25, label: 'SEO & Brand Trust' },
  { name: '⚡ Balanced Omni-Channel Growth', val: 50, label: 'Hybrid High-Velocity' },
  { name: '🚀 Aggressive Paid Acquisition', val: 75, label: 'Fast ROAS & Blitz' },
];

function readoutFor(value) {
  if (value < 38) return COPY.organic;
  if (value > 62) return COPY.paid;
  return COPY.balanced;
}

function getVibeTitle(value) {
  if (value < 38) return 'The Organic Flywheel 🌿';
  if (value > 62) return 'The Growth Rocket 🚀';
  return 'The Golden Ratio ⚡';
}

function getSprintEstimate(value) {
  if (value < 38) return 'Sprint 1: Technical SEO & Authority Engine (2-3 Weeks)';
  if (value > 62) return 'Sprint 1: High-Converting Funnel & Ad Matrix (7-10 Days)';
  return 'Sprint 1: Dual-Track Content + Performance Pilot (14 Days)';
}

export default function FunkyProjectLab() {
  const trackRef = useRef(null);
  const handleRef = useRef(null);
  const draggingRef = useRef(false);

  const [value, setValue] = useState(50); // 15 - 85
  const [dragging, setDragging] = useState(false);

  const setFromClientX = useCallback((clientX) => {
    const track = trackRef.current;
    if (!track) return;
    const rect = track.getBoundingClientRect();
    let ratio = (clientX - rect.left) / rect.width;
    ratio = Math.max(0.15, Math.min(0.85, ratio));
    setValue(ratio * 100);
  }, []);

  useEffect(() => {
    const onMove = (e) => {
      if (!draggingRef.current) return;
      setFromClientX(e.clientX);
    };
    const onUp = () => {
      draggingRef.current = false;
      setDragging(false);
    };
    window.addEventListener('pointermove', onMove);
    window.addEventListener('pointerup', onUp);
    return () => {
      window.removeEventListener('pointermove', onMove);
      window.removeEventListener('pointerup', onUp);
    };
  }, [setFromClientX]);

  const handlePointerDown = (e) => {
    draggingRef.current = true;
    setDragging(true);
    handleRef.current?.setPointerCapture(e.pointerId);
  };

  const handleTrackPointerDown = (e) => {
    if (e.target === handleRef.current) return;
    setFromClientX(e.clientX);
  };

  const handleKeyDown = (e) => {
    if (e.key === 'ArrowLeft') setValue((v) => Math.max(15, v - 5));
    if (e.key === 'ArrowRight') setValue((v) => Math.min(85, v + 5));
  };

  const organicPct = Math.round(100 - value);
  const paidPct = Math.round(value);

  return (
    <section id="blend-lab" className="funky-lab-section">
      <div className="wrap">
        <Reveal className="funky-section-header">
          <div className="funky-pill-badge">
            <span className="pulsing-neon-dot"></span>
            <span>STRATEGY SYNTHESIZER</span>
          </div>
          <h2 className="funky-title">
            Drag to find your marketing mix. No math required.
          </h2>
          <p className="funky-subtitle">
            Every business leans differently toward organic trust-building and paid
            performance. Slide the interactive synthesizer to discover your optimal formula.
          </p>
        </Reveal>

        {/* Quick Presets */}
        <Reveal className="lab-presets-bar">
          <span className="preset-label">Quick Presets:</span>
          <div className="preset-pills">
            {PRESETS.map((p) => (
              <button
                key={p.name}
                type="button"
                className={`preset-btn ${Math.abs(value - p.val) < 5 ? 'active' : ''}`}
                onClick={() => setValue(p.val)}
              >
                {p.name}
              </button>
            ))}
          </div>
        </Reveal>

        {/* The Interactive Synthesizer Console */}
        <Reveal className="funky-lab-console">
          <div className="console-hud-bar">
            <div className="hud-status">
              <span className="hud-live-dot"></span>
              <span>TACTICAL MIX ENGAGED</span>
            </div>
            <div className="hud-strategy-badge">{getVibeTitle(value)}</div>
          </div>

          <div
            className={`lab-track funky-track-styled ${dragging ? 'dragging' : ''}`}
            ref={trackRef}
            onPointerDown={handleTrackPointerDown}
          >
            <div className="lab-fill-left funky-fill-organic" style={{ width: `${value}%` }}></div>
            <div className="lab-fill-right funky-fill-paid" style={{ width: `${100 - value}%` }}></div>
            <div className="lab-overlap" style={{ left: `calc(${value}% - 45px)` }}></div>
            
            <div
              className="lab-handle funky-handle-styled"
              ref={handleRef}
              tabIndex={0}
              role="slider"
              aria-valuemin={15}
              aria-valuemax={85}
              aria-valuenow={Math.round(value)}
              aria-label="Balance between organic and paid marketing"
              style={{ left: `${value}%` }}
              onPointerDown={handlePointerDown}
              onKeyDown={handleKeyDown}
            >
              <div className="handle-glow-halo"></div>
              <span className="lab-pct">
                {organicPct}% / {paidPct}%
              </span>
            </div>
          </div>

          <div className="lab-labels funky-labels-grid">
            <div className="lab-label-card card-organic">
              <div className="label-header">
                <span className="label-icon">🌱</span>
                <strong>Organic Growth ({organicPct}%)</strong>
              </div>
              <p>Content architecture, local SEO maps, technical authority, and sustainable brand recall.</p>
            </div>
            <div className="lab-label-card card-paid">
              <div className="label-header">
                <span className="label-icon">🚀</span>
                <strong>Paid Performance ({paidPct}%)</strong>
              </div>
              <p>High-ROAS Meta & Google ads, precision retargeting, conversion landers & rapid testing.</p>
            </div>
          </div>

          <div className="lab-insight-box">
            <div className="insight-badge">STRATEGY BREAKDOWN</div>
            <p className="lab-readout funky-readout-text">{readoutFor(value)}</p>
            <div className="insight-sprint-footer">
              <span className="sprint-icon">⚡</span>
              <span className="sprint-text">{getSprintEstimate(value)}</span>
              <Link to="/contact" className="btn btn-primary sprint-btn">
                Launch Blueprint →
              </Link>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
