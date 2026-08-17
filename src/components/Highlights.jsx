import { Link } from 'react-router-dom';
import Reveal from './Reveal';

const ITEMS = [
  {
    to: '/services',
    title: 'Services',
    desc: 'Social, search, ads and content — everything you need to grow your audience, minus the headache of hiring five different agencies.',
    tag: 'What we do',
  },
  {
    to: '/global-reach',
    title: 'Global Reach',
    desc: 'Serving restaurants, entrepreneurs and brands across India, Canada, the USA and Europe — the jet lag is our problem, not yours.',
    tag: 'Who we are',
  },
  {
    to: '/process',
    title: 'Process',
    desc: 'One engagement, four checkpoints — from discovery to compounding results.',
    tag: 'How we work',
  },
  {
    to: '/work',
    title: 'Work',
    desc: 'Restaurants, religious organizations, entrepreneurs, public leaders and e-commerce — see who we work with.',
    tag: 'Who we work with',
  },
  {
    to: '/contact',
    title: 'Contact',
    desc: "Tell us about your business — we'll tell you what it takes to grow it. Fast replies, we promise.",
    tag: 'Get in touch',
  },
];

export default function Highlights() {
  return (
    <section>
      <div className="wrap">
        <Reveal className="section-head">
          <span className="kicker">Explore Codestroom</span>
          <h2>Everything you need, one click away.</h2>
          <p>A quick map of what we do, how we work, and where to find us — no treasure map required.</p>
        </Reveal>
        <div className="service-grid">
          {ITEMS.map((item) => (
            <Reveal as={Link} to={item.to} key={item.to} className="service-card highlight-card">
              <div className="icon-blend">
                <i></i>
                <i></i>
              </div>
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
              <span className="tag">{item.tag} →</span>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
