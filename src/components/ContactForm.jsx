import { useState } from 'react';
import Reveal from './Reveal';

const FORMSPREE_ENDPOINT = import.meta.env.VITE_FORMSPREE_ENDPOINT;

const SERVICE_OPTIONS = [
  'Social Media Marketing',
  'Paid Advertising',
  'Local SEO & Google Business',
  'Website & Landing Pages',
  'Branding & Content Creation',
  'E-commerce Marketing',
  'Something else',
];

const REASSURANCE = [
  {
    title: 'A real person replies',
    desc: 'No bots, no auto-responders — someone on the team reads every query.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 5.5C4 4.67 4.67 4 5.5 4h13c.83 0 1.5.67 1.5 1.5v9c0 .83-.67 1.5-1.5 1.5H10l-4 3.5v-3.5H5.5C4.67 15 4 14.33 4 13.5v-8z" />
      </svg>
    ),
  },
  {
    title: 'Within 48 hours',
    desc: "That's our promise — we don't consider a slow reply an acceptable one.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="8.5" />
        <path d="M12 7.5V12l3 2" />
      </svg>
    ),
  },
  {
    title: 'Zero pressure',
    desc: 'No aggressive sales calls — just a straight answer so you can decide.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 3.5l7 3v5.2c0 4.3-2.9 7.5-7 8.8-4.1-1.3-7-4.5-7-8.8V6.5l7-3z" />
        <path d="M9.2 12l1.9 1.9 3.7-3.9" />
      </svg>
    ),
  },
];

export default function ContactForm() {
  const [status, setStatus] = useState('idle'); // idle | sending | success | error

  async function handleSubmit(e) {
    e.preventDefault();

    if (!FORMSPREE_ENDPOINT) {
      setStatus('error');
      return;
    }

    const form = e.target;
    setStatus('sending');

    try {
      const res = await fetch(FORMSPREE_ENDPOINT, {
        method: 'POST',
        headers: { Accept: 'application/json' },
        body: new FormData(form),
      });

      if (res.ok) {
        setStatus('success');
        form.reset();
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  }

  return (
    <section>
      <div className="wrap">
        <Reveal className="section-head">
          <span className="kicker">Send a query</span>
          <h2>Tell us a bit about what you need.</h2>
        </Reveal>

        <div className="contact-form-grid">
          <Reveal as="form" className="contact-form" onSubmit={handleSubmit}>
            <div className="form-row">
              <div className="form-field">
                <label htmlFor="name">Name</label>
                <input id="name" name="name" type="text" required autoComplete="name" />
              </div>
              <div className="form-field">
                <label htmlFor="email">Email</label>
                <input id="email" name="email" type="email" required autoComplete="email" />
              </div>
            </div>
            <div className="form-row">
              <div className="form-field">
                <label htmlFor="phone">Phone (optional)</label>
                <input id="phone" name="phone" type="tel" autoComplete="tel" />
              </div>
              <div className="form-field">
                <label htmlFor="service">What are you looking for?</label>
                <select id="service" name="service" required defaultValue="">
                  <option value="" disabled>
                    Select a service
                  </option>
                  {SERVICE_OPTIONS.map((option) => (
                    <option key={option} value={option}>
                      {option}
                    </option>
                  ))}
                </select>
              </div>
            </div>
            <div className="form-field">
              <label htmlFor="message">Your query</label>
              <textarea id="message" name="message" rows="5" required />
            </div>

            <button type="submit" className="btn btn-gradient" disabled={status === 'sending'}>
              {status === 'sending' ? 'Sending…' : 'Send message'}
            </button>

            {status === 'success' && (
              <p className="form-status form-status-success">Thanks — we'll get back to you within 48 hours.</p>
            )}
            {status === 'error' && (
              <p className="form-status form-status-error">
                Something went wrong. Please email us directly at{' '}
                <a href="mailto:contact@codestroom.com">contact@codestroom.com</a>.
              </p>
            )}
          </Reveal>

          <Reveal className="contact-aside">
            <div className="contact-aside-card">
              <h3>What happens next</h3>
              <ul className="aside-steps">
                {REASSURANCE.map((item) => (
                  <li key={item.title}>
                    <div className="aside-icon">{item.icon}</div>
                    <div>
                      <strong>{item.title}</strong>
                      <span>{item.desc}</span>
                    </div>
                  </li>
                ))}
              </ul>
              <div className="aside-direct">
                <span>Prefer to skip the form?</span>
                <a href="mailto:contact@codestroom.com">contact@codestroom.com</a>
                <a href="tel:+919464529126">+91 94645 29126</a>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
