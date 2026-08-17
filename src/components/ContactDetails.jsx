import Reveal from './Reveal';

const CARDS = [
  {
    title: 'Email',
    desc: 'For new projects, partnerships or just to say hello.',
    links: [{ href: 'mailto:contact@codestroom.com', label: 'contact@codestroom.com' }],
  },
  {
    title: 'Phone',
    desc: "Prefer to talk it through? We're reachable during business hours.",
    links: [
      { href: 'tel:+919464529126', label: 'Primary: +91 94645 29126' },
      { href: 'tel:+917973937507', label: 'Alternate: +91 79739 37507' },
    ],
  },
  {
    title: 'Careers',
    desc: "Distributed team, three continents. We're always open to meeting good people, even without a listed opening.",
    links: [{ href: 'mailto:contact@codestroom.com', label: 'Reach out →' }],
  },
];

export default function ContactDetails() {
  return (
    <section>
      <div className="wrap">
        <Reveal className="section-head">
          <span className="kicker">Reach us</span>
          <h2>However you'd rather start the conversation.</h2>
        </Reveal>
        <div className="service-grid">
          {CARDS.map((card) => (
            <Reveal as="div" key={card.title} className="service-card">
              <div className="icon-blend">
                <i></i>
                <i></i>
              </div>
              <h3>{card.title}</h3>
              <p>{card.desc}</p>
              <div className="tag-list">
                {card.links.map((link) => (
                  <a className="tag" href={link.href} key={link.href}>
                    {link.label}
                  </a>
                ))}
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
