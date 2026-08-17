import { useState } from 'react';
import useScrollProgress from '../hooks/useScrollProgress';

export default function RobotIntro() {
  const [skip] = useState(() => window.matchMedia('(prefers-reduced-motion: reduce)').matches);
  const [ref, progress] = useScrollProgress({ startVh: 0, endVh: 0.15 });

  if (skip) return null;

  const openDeg = Math.min(1, progress / 0.55) * 78;
  const fade = progress < 0.55 ? 1 : Math.max(0, 1 - (progress - 0.55) / 0.4);
  const lift = Math.min(1, progress / 0.9) * -70;
  const hintOpacity = Math.max(0, 1 - progress / 0.12);

  return (
    <section className="robot-intro" ref={ref} aria-hidden="true">
      <div
        className="robot-stage"
        style={{ opacity: fade, transform: `translateY(${lift}px) scale(${1 - progress * 0.08})` }}
      >
        <div className="robot">
          <span className="robot-antenna">
            <span className="robot-antenna-tip"></span>
          </span>
          <div className="robot-head">
            <div className="robot-head-half left" style={{ transform: `perspective(700px) rotateY(${-openDeg}deg)` }}>
              <span className="robot-eye"></span>
            </div>
            <div className="robot-head-half right" style={{ transform: `perspective(700px) rotateY(${openDeg}deg)` }}>
              <span className="robot-eye"></span>
            </div>
          </div>
          <div className="robot-body">
            <img src="/assets/logo.png" alt="" className="robot-logo" />
          </div>
          <div className="robot-arm left"></div>
          <div className="robot-arm right"></div>
          <div className="robot-legs">
            <span className="robot-leg"></span>
            <span className="robot-leg"></span>
          </div>
        </div>
      </div>

      <div className="robot-hint" style={{ opacity: hintOpacity }}>
        <span>Scroll</span>
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M6 9l6 6 6-6" />
        </svg>
      </div>
    </section>
  );
}
