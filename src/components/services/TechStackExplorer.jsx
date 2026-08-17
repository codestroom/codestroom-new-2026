import { useState } from 'react';
import Reveal from '../Reveal';
import { TechIcon } from './ServiceIconsFull';

export default function TechStackExplorer({ service }) {
  const [activeCategory, setActiveCategory] = useState(0);

  return (
    <section className="tech-stack-section" id="tech-stack">
      <div className="wrap">
        <Reveal className="section-head">
          <span className="kicker">Technology Ecosystem</span>
          <h2>Battle-tested frameworks &amp; modern tooling.</h2>
          <p>
            We don't compromise on architecture. We select optimal, high-performance technology stacks tailored to your throughput, security, and velocity requirements.
          </p>
        </Reveal>

        {/* Core Pillar Cards */}
        <div className="core-pillars-grid">
          {service.coreTechnologies.map((tech, idx) => (
            <Reveal as="div" key={tech.name} delay={idx * 60} className="core-pillar-card">
              <div className="pillar-top">
                <div className={`pillar-icon-box ${service.tint}`}>
                  <TechIcon name={tech.icon} />
                </div>
                <h3>{tech.name}</h3>
              </div>
              <p>{tech.desc}</p>
              <div className="pillar-tags">
                {tech.tags.map((tag) => (
                  <span key={tag} className="tech-pill">{tag}</span>
                ))}
              </div>
            </Reveal>
          ))}
        </div>

        {/* Deep Dive Category Tabs */}
        {service.techStack && service.techStack.length > 0 && (
          <div className="tech-deep-dive-panel">
            <div className="tech-tab-headers">
              {service.techStack.map((cat, idx) => (
                <button
                  key={cat.category}
                  type="button"
                  className={`tech-tab-btn ${activeCategory === idx ? 'active' : ''}`}
                  onClick={() => setActiveCategory(idx)}
                >
                  {cat.category}
                </button>
              ))}
            </div>

            <div className="tech-tab-body">
              <div className="tech-items-grid">
                {service.techStack[activeCategory]?.items.map((item, idx) => (
                  <div key={idx} className="tech-item-row">
                    <div className="tech-item-main">
                      <h4>{item.name}</h4>
                      <span className="tech-level-badge">{item.level}</span>
                    </div>
                    <p>{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
