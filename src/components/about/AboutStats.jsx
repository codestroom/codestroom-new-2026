import { useEffect, useRef, useState } from 'react';

const STATS = [
  { value: 190, suffix: '+', label: 'projects shipped', joke: 'and exactly zero shipped "next week"', tint: 'grad-1' },
  { value: 12, suffix: '', label: 'countries served', joke: 'we have a timezone spreadsheet. it is beautiful.', tint: 'grad-2' },
  { value: 4283, suffix: '', label: 'cups of chai', joke: 'this metric is audited weekly', tint: 'grad-3' },
  { value: 98, suffix: '%', label: 'clients who return', joke: 'the other 2% got acquired. we take credit.', tint: 'grad-1' },
  { value: 11, suffix: 'min', label: 'avg reply time', joke: 'yes, even on a Sunday. send help.', tint: 'grad-2' },
  { value: 0, suffix: '', label: 'projects ghosted', joke: 'a streak we intend to keep forever', tint: 'grad-3' },
];

function useCountUp(target) {
  const ref = useRef(null);
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setDisplay(target);
      return;
    }

    let raf = null;
    let start = null;
    const duration = 1600;

    const tick = (now) => {
      if (start === null) start = now;
      const p = Math.min(1, (now - start) / duration);
      // easeOutExpo — fast out of the gate, lands softly
      const eased = p === 1 ? 1 : 1 - Math.pow(2, -10 * p);
      setDisplay(Math.round(target * eased));
      if (p < 1) raf = requestAnimationFrame(tick);
    };

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            io.unobserve(entry.target);
            raf = requestAnimationFrame(tick);
          }
        });
      },
      { threshold: 0.4 }
    );
    io.observe(el);

    return () => {
      io.disconnect();
      if (raf !== null) cancelAnimationFrame(raf);
    };
  }, [target]);

  return [ref, display];
}

function StatTile({ stat, index }) {
  const [ref, display] = useCountUp(stat.value);

  return (
    <div className={`about-stat-tile ${stat.tint}`} ref={ref} style={{ '--s': index }}>
      <span className="about-stat-value">
        {display.toLocaleString()}
        <em>{stat.suffix}</em>
      </span>
      <span className="about-stat-label">{stat.label}</span>
      <span className="about-stat-joke">{stat.joke}</span>
      <span className="about-stat-shine" aria-hidden="true"></span>
    </div>
  );
}

export default function AboutStats() {
  return (
    <section className="about-stats-section">
      <div className="wrap">
        <div className="about-section-head">
          <span className="kicker">Numbers we are weirdly proud of</span>
          <h2>
            Receipts, <span className="about-squiggle">not vibes</span>.
          </h2>
        </div>

        <div className="about-stats-grid">
          {STATS.map((stat, i) => (
            <StatTile key={stat.label} stat={stat} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
