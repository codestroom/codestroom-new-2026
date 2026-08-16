import { useCallback, useEffect, useRef, useState } from 'react';
import Reveal from './Reveal';

const COPY = {
  eng: "Engineering-led: this team leans build-first. We'll staff more product engineers, with a lean growth function running in support once the platform is live.",
  balanced:
    'A balanced team: equal parts product engineering and demand generation, working from the same roadmap.',
  growth:
    "Growth-led: this team leans acquisition-first. We'll staff more growth specialists, with engineering focused on funnel performance and conversion.",
};

function readoutFor(value) {
  if (value < 38) return COPY.eng;
  if (value > 62) return COPY.growth;
  return COPY.balanced;
}

export default function BlendLab() {
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

  const engPct = Math.round(100 - value);
  const growPct = Math.round(value);

  return (
    <section id="blend-lab">
      <div className="wrap">
        <Reveal className="section-head">
          <span className="kicker">Try it yourself</span>
          <h2>Drag to find your team's blend.</h2>
          <p>
            Every engagement leans differently toward build and grow. Slide the handle to see
            how we'd staff yours — and where the two disciplines overlap.
          </p>
        </Reveal>
        <Reveal className="lab">
          <div
            className={`lab-track ${dragging ? 'dragging' : ''}`}
            ref={trackRef}
            onPointerDown={handleTrackPointerDown}
          >
            <div className="lab-fill-left" style={{ width: `${value}%` }}></div>
            <div className="lab-fill-right" style={{ width: `${100 - value}%` }}></div>
            <div className="lab-overlap" style={{ left: `calc(${value}% - 45px)` }}></div>
            <div
              className="lab-handle"
              ref={handleRef}
              tabIndex={0}
              role="slider"
              aria-valuemin={15}
              aria-valuemax={85}
              aria-valuenow={Math.round(value)}
              aria-label="Balance between engineering and growth"
              style={{ left: `${value}%` }}
              onPointerDown={handlePointerDown}
              onKeyDown={handleKeyDown}
            >
              <span className="lab-pct">
                {engPct}/{growPct}
              </span>
            </div>
          </div>
          <div className="lab-labels">
            <div className="lab-label-left">
              <strong>Engineering</strong>
              <span>Build, ship, scale</span>
            </div>
            <div className="lab-label-right">
              <strong>Growth</strong>
              <span>Reach, convert, retain</span>
            </div>
          </div>
          <p className="lab-readout">{readoutFor(value)}</p>
        </Reveal>
      </div>
    </section>
  );
}
