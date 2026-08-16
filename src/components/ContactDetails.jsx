import Reveal from './Reveal';

const CARDS = [
  {
    title: 'Email',
    desc: 'For new projects, partnerships or just to say hello.',
    href: 'mailto:hello@codestroom.com',
    label: 'hello@codestroom.com',
  },
  {
    title: 'Phone',
    desc: "Prefer to talk it through? We're reachable during business hours.",
    href: 'tel:+10000000000',
    label: '+1 (000) 000-0000',
  },
  {
    title: 'Careers',
    desc: "Distributed team, three continents. We're always meeting good people.",
    href: '/contact',
    label: 'See open roles →',
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
              <a className="tag" href={card.href}>
                {card.label}
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
