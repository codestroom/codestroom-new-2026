import { useCallback, useEffect, useRef, useState } from 'react';
import Reveal from './Reveal';

const COPY = {
  organic:
    'Organic-led: this plan leans into content, local SEO and community trust — building visibility that compounds over time.',
  balanced: 'A balanced mix: organic content and paid campaigns working together from the same strategy.',
  paid: "Paid-led: this plan leans into ads and performance campaigns — built for fast, measurable results.",
};

function readoutFor(value) {
  if (value < 38) return COPY.organic;
  if (value > 62) return COPY.paid;
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

  const organicPct = Math.round(100 - value);
  const paidPct = Math.round(value);

  return (
    <section id="blend-lab">
      <div className="wrap">
        <Reveal className="section-head">
          <span className="kicker">Try it yourself</span>
          <h2>Drag to find your marketing mix. No math required.</h2>
          <p>
            Every business leans differently toward organic trust-building and paid
            performance. Slide the handle and find out where yours lands.
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
              aria-label="Balance between organic and paid marketing"
              style={{ left: `${value}%` }}
              onPointerDown={handlePointerDown}
              onKeyDown={handleKeyDown}
            >
              <span className="lab-pct">
                {organicPct}/{paidPct}
              </span>
            </div>
          </div>
          <div className="lab-labels">
            <div className="lab-label-left">
              <strong>Organic</strong>
              <span>Content, SEO, community</span>
            </div>
            <div className="lab-label-right">
              <strong>Paid</strong>
              <span>Ads, campaigns, performance</span>
            </div>
          </div>
          <p className="lab-readout">{readoutFor(value)}</p>
        </Reveal>
      </div>
    </section>
  );
}
