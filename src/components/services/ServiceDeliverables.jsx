import Reveal from '../Reveal';

export default function ServiceDeliverables({ service }) {
  return (
    <section className="deliverables-section" id="deliverables">
      <div className="wrap">
        <Reveal className="section-head">
          <span className="kicker">Core Deliverables &amp; Capabilities</span>
          <h2>What we engineer &amp; deliver for your business.</h2>
          <p>
            No vague promises or unfinished handoffs. Every engagement comes with clear specifications, battle-hardened code, and verifiable deliverables.
          </p>
        </Reveal>

        <div className="deliverables-grid">
          {service.deliverables.map((item, idx) => (
            <Reveal as="div" key={item.title} delay={idx * 50} className="deliverable-card">
              <div className="deliverable-num">{(idx + 1).toString().padStart(2, '0')}</div>
              <div className="deliverable-content">
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
                <div className="deliverable-metric-tag">
                  <span className="metric-check">✓</span>
                  <span>{item.metric}</span>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
