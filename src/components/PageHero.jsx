import Reveal from './Reveal';

/**
 * Shared hero band for the secondary pages (portfolio, case studies, blog).
 * Keeps the gradient-wash treatment consistent without each page re-rolling it.
 */
export default function PageHero({ kicker, title, lead, stats = [], children }) {
  return (
    <section className="page-hero">
      <div className="page-hero-glow page-hero-glow-a" aria-hidden="true"></div>
      <div className="page-hero-glow page-hero-glow-b" aria-hidden="true"></div>
      <div className="page-hero-grid-lines" aria-hidden="true"></div>

      <div className="wrap page-hero-inner">
        <Reveal immediate className="page-hero-copy">
          {kicker && <span className="kicker">{kicker}</span>}
          <h1>{title}</h1>
          {lead && <p className="page-hero-lead">{lead}</p>}
          {children}
        </Reveal>

        {stats.length > 0 && (
          <Reveal immediate className="page-hero-stats">
            {stats.map((stat) => (
              <div key={stat.lbl}>
                <div className="page-hero-stat-num">{stat.val}</div>
                <div className="page-hero-stat-lbl">{stat.lbl}</div>
              </div>
            ))}
          </Reveal>
        )}
      </div>
    </section>
  );
}
