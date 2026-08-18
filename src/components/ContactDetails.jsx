import Reveal from './Reveal';

const CARDS = [
  {
    emoji: '📨',
    title: 'Email',
    tint: 'tile-pink',
    desc: 'For new projects, partnerships, or just to say hello.',
    links: [{ href: 'mailto:contact@codestroom.com', label: 'contact@codestroom.com' }],
  },
  {
    emoji: '📞',
    title: 'Phone',
    tint: 'tile-purple',
    desc: 'Prefer to talk it through? We are reachable during business hours.',
    links: [
      { href: 'tel:+919464529126', label: 'Primary: +91 94645 29126' },
      { href: 'tel:+917973937507', label: 'Alternate: +91 79739 37507' },
    ],
  },
  {
    emoji: '💬',
    title: 'WhatsApp',
    tint: 'tile-blue',
    desc: 'The fastest way to reach us. Voice notes entirely acceptable.',
    links: [{ href: 'https://wa.me/919464529126', label: 'Start a chat →', external: true }],
  },
  {
    emoji: '🧑‍💻',
    title: 'Careers',
    tint: 'tile-mixed',
    desc: 'Distributed team, three continents. Always open to meeting good people, even without a listed opening.',
    links: [{ href: 'mailto:contact@codestroom.com', label: 'Pitch yourself →' }],
  },
];

const HOURS = [
  { region: 'India (HQ)', time: 'Mon–Sat · 10:00–19:00 IST', flag: '🇮🇳' },
  { region: 'Canada & USA', time: 'Async + scheduled calls', flag: '🇨🇦' },
  { region: 'UK & Europe', time: 'Async + scheduled calls', flag: '🇪🇺' },
];

export default function ContactDetails() {
  return (
    <section className="contact-details-section">
      <div className="wrap">
        <Reveal className="funky-section-header">
          <div className="funky-pill-badge badge-warning">
            <span className="pulsing-neon-dot dot-pink"></span>
            <span>REACH US</span>
          </div>
          <h2 className="funky-title">However you&apos;d rather start the conversation.</h2>
          <p className="funky-subtitle">
            Form, inbox, phone or WhatsApp — every one of them reaches the same small team. Pick
            whichever you will actually use.
          </p>
        </Reveal>

        <div className="contact-tiles">
          {CARDS.map((card) => (
            <Reveal as="div" key={card.title} className={`contact-tile ${card.tint}`}>
              <span className="contact-tile-emoji" aria-hidden="true">
                {card.emoji}
              </span>
              <h3>{card.title}</h3>
              <p>{card.desc}</p>
              <div className="contact-tile-links">
                {card.links.map((link) => (
                  <a
                    href={link.href}
                    key={link.href}
                    {...(link.external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                  >
                    {link.label}
                  </a>
                ))}
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal className="contact-hours">
          <div className="contact-hours-head">
            <span className="contact-hours-emoji" aria-hidden="true">
              🕒
            </span>
            <div>
              <h3>When you&apos;ll actually hear back</h3>
              <p>We are spread across time zones, so something is almost always awake.</p>
            </div>
          </div>

          <div className="contact-hours-grid">
            {HOURS.map((row) => (
              <div key={row.region}>
                <span className="hours-flag" aria-hidden="true">
                  {row.flag}
                </span>
                <strong>{row.region}</strong>
                <span>{row.time}</span>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
