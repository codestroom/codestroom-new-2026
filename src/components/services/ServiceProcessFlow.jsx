import Reveal from '../Reveal';

export default function ServiceProcessFlow({ service }) {
  return (
    <section className="service-process-section" id="process-flow">
      <div className="wrap">
        <Reveal className="section-head">
          <span className="kicker">Execution Framework</span>
          <h2>How we deliver from zero to production.</h2>
          <p>
            A transparent 4-stage sprint methodology with zero guesswork, bi-weekly reviews, and strict automated quality checks.
          </p>
        </Reveal>

        <div className="service-process-timeline">
          {service.process.map((step, idx) => (
            <Reveal as="div" key={step.step} delay={idx * 80} className="process-flow-card">
              <div className="process-step-indicator">
                <span className="step-num-bubble">{step.step}</span>
                {idx < service.process.length - 1 && <div className="step-connector-line"></div>}
              </div>
              <div className="process-flow-details">
                <h3>{step.title}</h3>
                <p>{step.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>

        {/* Case Study Spotlight */}
        {service.caseStudy && (
          <Reveal className="service-case-spotlight">
            <div className="spotlight-card">
              <div className="spotlight-header">
                <span className="spotlight-badge">Case Study Spotlight</span>
                <h3>{service.caseStudy.client}</h3>
              </div>
              <div className="spotlight-body">
                <div className="spotlight-col">
                  <span className="spotlight-label">The Challenge</span>
                  <p>{service.caseStudy.problem}</p>
                </div>
                <div className="spotlight-col">
                  <span className="spotlight-label">The Solution</span>
                  <p>{service.caseStudy.solution}</p>
                </div>
                <div className="spotlight-col result-col">
                  <span className="spotlight-label">The Outcome</span>
                  <p className="result-highlight">{service.caseStudy.result}</p>
                </div>
              </div>
            </div>
          </Reveal>
        )}
      </div>
    </section>
  );
}
