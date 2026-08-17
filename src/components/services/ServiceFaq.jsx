import { useState } from 'react';
import Reveal from '../Reveal';

export default function ServiceFaq({ service }) {
  const [openIndex, setOpenIndex] = useState(0);

  const toggleFaq = (idx) => {
    setOpenIndex((prev) => (prev === idx ? null : idx));
  };

  return (
    <section className="service-faq-section" id="faq">
      <div className="wrap">
        <Reveal className="section-head">
          <span className="kicker">Frequently Asked Questions</span>
          <h2>Everything you need to know about our {service.title}.</h2>
        </Reveal>

        <div className="faq-accordion-list">
          {service.faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <Reveal as="div" key={idx} delay={idx * 50} className={`faq-card-item ${isOpen ? 'open' : ''}`}>
                <button
                  type="button"
                  className="faq-question-bar"
                  onClick={() => toggleFaq(idx)}
                  aria-expanded={isOpen}
                >
                  <span className="faq-q-text">{faq.q}</span>
                  <span className="faq-toggle-icon">{isOpen ? '−' : '+'}</span>
                </button>
                {isOpen && (
                  <div className="faq-answer-content">
                    <p>{faq.a}</p>
                  </div>
                )}
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
