import Reveal from './Reveal';

const STATS = [
  { num: '27', lbl: 'Countries with active clients' },
  { num: '3', lbl: 'Delivery hubs, 3 continents' },
  { num: '18hrs', lbl: 'Average daily coverage' },
  { num: '92%', lbl: 'Client retention rate' },
];

export default function Reach() {
  return (
    <section id="reach">
      <div className="wrap">
        <Reveal className="reach">
          <svg className="globe-dots" viewBox="0 0 200 200" aria-hidden="true">
            <circle cx="100" cy="100" r="90" fill="none" stroke="rgba(255,255,255,0.25)" strokeWidth="1" />
            <circle cx="100" cy="100" r="60" fill="none" stroke="rgba(255,255,255,0.2)" strokeWidth="1" />
            <circle cx="100" cy="100" r="30" fill="none" stroke="rgba(255,255,255,0.15)" strokeWidth="1" />
            <ellipse cx="100" cy="100" rx="90" ry="30" fill="none" stroke="rgba(255,255,255,0.15)" strokeWidth="1" />
          </svg>
          <div className="reach-inner">
            <div>
              <span className="kicker" style={{ color: '#FF8FC4' }}>
                Global delivery
              </span>
              <h2>Time zones aren't a limitation — they're our shift schedule.</h2>
              <p>
                With teams distributed across three continents, Codestroom runs projects around
                the clock. Overlap hours for live collaboration, async handoffs for continuous
                progress.
              </p>
            </div>
            <div className="reach-stats">
              {STATS.map((stat) => (
                <div key={stat.lbl}>
                  <div className="stat-num">{stat.num}</div>
                  <div className="stat-lbl">{stat.lbl}</div>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
