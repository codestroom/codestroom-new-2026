import { Link } from 'react-router-dom';
import Reveal from '../Reveal';

export default function ServiceDetailHero({ service }) {
  return (
    <section className="service-detail-hero">
      <div className="service-hero-glow"></div>
      <div className="wrap">
        <div className="service-hero-breadcrumb">
          <Link to="/services">Services</Link>
          <span className="crumb-sep">/</span>
          <span className="crumb-active">{service.category}</span>
        </div>

        <div className="service-hero-grid">
          <div className="service-hero-content">
            <Reveal>
              <div className="service-badge-pill">
                <span className="badge-dot"></span>
                <span>{service.heroBadge}</span>
              </div>
            </Reveal>

            <Reveal delay={80}>
              <h1 className="service-hero-title">{service.headline}</h1>
            </Reveal>

            <Reveal delay={160}>
              <p className="service-hero-tagline">{service.tagline}</p>
            </Reveal>

            <Reveal delay={240}>
              <div className="service-hero-actions">
                <Link to="/contact" className="btn btn-gradient btn-lg">
                  Get Project Scope &amp; Quote →
                </Link>
                <a href="#deliverables" className="btn btn-outline">
                  Explore Capabilities ↓
                </a>
              </div>
            </Reveal>
          </div>

          <Reveal delay={200} className="service-hero-stats-card">
            <div className="stats-glass-panel">
              <div className="stats-panel-header">
                <span className="stats-kicker">Performance Benchmarks</span>
                <span className="stats-live-tag">Verified Results</span>
              </div>
              <div className="stats-grid-2x2">
                {service.stats.map((stat, i) => (
                  <div key={i} className="stat-box">
                    <span className="stat-val">{stat.val}</span>
                    <span className="stat-lbl">{stat.label}</span>
                  </div>
                ))}
              </div>
              <div className="stats-footer-note">
                <span className="shield-icon">🛡️</span>
                <span>Production-grade engineering &amp; dedicated SLA</span>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
