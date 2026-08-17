import { useState } from 'react';
import useScrollProgress from '../hooks/useScrollProgress';

export default function RobotOutro() {
  const [skip] = useState(() => window.matchMedia('(prefers-reduced-motion: reduce)').matches);
  const [ref, progress] = useScrollProgress({ startVh: 0.9, endVh: 0.25 });

  if (skip) return null;

  const crack = Math.min(1, progress / 0.6);
  const fade = progress < 0.6 ? 1 : Math.max(0, 1 - (progress - 0.6) / 0.35);

  return (
    <section className="robot-outro" ref={ref} aria-hidden="true">
      <div className="robot-foot-stage" style={{ opacity: fade }}>
        <div className="robot-foot">
          <div
            className="robot-foot-half left"
            style={{ transform: `translateX(${-crack * 34}px) rotate(${-crack * 9}deg)` }}
          ></div>
          <div
            className="robot-foot-half right"
            style={{ transform: `translateX(${crack * 34}px) rotate(${crack * 9}deg)` }}
          ></div>
          <div className="robot-foot-crack" style={{ opacity: crack > 0.05 ? Math.min(1, crack * 3) : 0 }}></div>
        </div>
        <p className="robot-outro-caption">You've reached the bottom. Here's how to reach us.</p>
      </div>
    </section>
  );
}
