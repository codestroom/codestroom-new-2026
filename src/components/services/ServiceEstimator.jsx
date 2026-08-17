import { useState } from 'react';
import { Link } from 'react-router-dom';
import Reveal from '../Reveal';

export default function ServiceEstimator({ service }) {
  const cfg = service.calculatorConfig;
  const [selectedIdx, setSelectedIdx] = useState(1);
  const [urgency, setUrgency] = useState(1); // 1: standard, 1.25: accelerated

  if (!cfg || !cfg.options) return null;

  const currentOption = cfg.options[selectedIdx] || cfg.options[0];
  const adjustedPrice = Math.round(currentOption.price * urgency);
  const adjustedWeeks = urgency === 1.25 ? Math.max(1, Math.round(currentOption.weeks * 0.75)) : currentOption.weeks;

  return (
    <section className="estimator-section" id="estimator">
      <div className="wrap">
        <Reveal className="section-head">
          <span className="kicker">Scope &amp; Budget Planner</span>
          <h2>Instant scope &amp; timeline estimate.</h2>
          <p>
            Select your target scope to review typical engagement timelines and transparent investment tiers.
          </p>
        </Reveal>

        <Reveal className="estimator-container">
          <div className="estimator-grid">
            <div className="estimator-controls">
              <label className="estimator-label">1. Select Implementation Tier</label>
              <div className="estimator-options-list">
                {cfg.options.map((opt, i) => (
                  <button
                    key={opt.label}
                    type="button"
                    className={`estimator-tier-btn ${selectedIdx === i ? 'selected' : ''}`}
                    onClick={() => setSelectedIdx(i)}
                  >
                    <div className="tier-btn-radio">
                      <div className="radio-inner"></div>
                    </div>
                    <div className="tier-btn-info">
                      <span className="tier-btn-title">{opt.label}</span>
                      <span className="tier-btn-meta">~{opt.weeks} weeks delivery</span>
                    </div>
                    <span className="tier-btn-price">${opt.price.toLocaleString()}</span>
                  </button>
                ))}
              </div>

              <div className="estimator-urgency-toggle">
                <label className="estimator-label">2. Delivery Velocity</label>
                <div className="urgency-buttons">
                  <button
                    type="button"
                    className={`urgency-btn ${urgency === 1 ? 'active' : ''}`}
                    onClick={() => setUrgency(1)}
                  >
                    Standard Sprint Pace
                  </button>
                  <button
                    type="button"
                    className={`urgency-btn ${urgency === 1.25 ? 'active' : ''}`}
                    onClick={() => setUrgency(1.25)}
                  >
                    ⚡ Fast-Track / Accelerated
                  </button>
                </div>
              </div>
            </div>

            <div className="estimator-summary-card">
              <div className="summary-header">
                <span className="summary-kicker">Estimated Engagement</span>
                <h3>{currentOption.label}</h3>
              </div>

              <div className="summary-metrics">
                <div className="summary-metric-block">
                  <span className="summary-metric-val">${adjustedPrice.toLocaleString()}</span>
                  <span className="summary-metric-lbl">Estimated Investment</span>
                </div>
                <div className="summary-metric-divider"></div>
                <div className="summary-metric-block">
                  <span className="summary-metric-val">{adjustedWeeks} {adjustedWeeks === 1 ? 'Week' : 'Weeks'}</span>
                  <span className="summary-metric-lbl">Target Timeframe</span>
                </div>
              </div>

              <ul className="summary-perks">
                <li>✓ Full source code &amp; IP ownership</li>
                <li>✓ 60-day post-launch warranty &amp; support</li>
                <li>✓ Dedicated Project Lead &amp; weekly demos</li>
                <li>✓ Automated CI/CD &amp; cloud deployment</li>
              </ul>

              <Link
                to={`/contact?service=${service.slug}&tier=${encodeURIComponent(currentOption.label)}`}
                className="btn btn-gradient btn-block"
              >
                Lock In This Project Scope →
              </Link>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
