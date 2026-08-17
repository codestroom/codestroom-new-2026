import { useEffect, useRef, useState } from 'react';

/* Tracks 0 -> 1 progress of an element scrolling through the viewport.
   0 when the element's top is at `startVh` of viewport height from the top,
   1 once its bottom has passed `endVh` of viewport height from the top. */
export default function useScrollProgress({ startVh = 0.85, endVh = 0.3 } = {}) {
  const ref = useRef(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    let raf = null;
    function update() {
      raf = null;
      const rect = el.getBoundingClientRect();
      const vh = window.innerHeight;
      const start = vh * startVh;
      const end = vh * endVh;
      const range = rect.height + start - end;
      const traveled = start - rect.top;
      const p = Math.max(0, Math.min(1, traveled / range));
      setProgress(p);
    }
    function onScroll() {
      if (raf === null) raf = requestAnimationFrame(update);
    }

    update();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
      if (raf !== null) cancelAnimationFrame(raf);
    };
  }, [startVh, endVh]);

  return [ref, progress];
}
