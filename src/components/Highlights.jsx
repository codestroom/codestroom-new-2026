import { Link } from 'react-router-dom';
import Reveal from './Reveal';

const ITEMS = [
  {
    to: '/services',
    title: 'Services',
    desc: 'Web, mobile, cloud, and the marketing engine that drives demand — everything under one roof.',
    tag: 'What we do',
  },
  {
    to: '/global-reach',
    title: 'Global Reach',
    desc: 'Delivery hubs across three continents, running your project around the clock.',
    tag: 'Who we are',
  },
  {
    to: '/blend-lab',
    title: 'Blend Lab',
    desc: "Drag to find your team's blend between engineering and growth — try it yourself.",
    tag: 'Try it',
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
    desc: 'Recent results across fintech, retail and healthtech clients.',
    tag: 'Recent results',
  },
  {
    to: '/contact',
    title: 'Contact',
    desc: "Tell us what you're building — we'll tell you what it takes, within 48 hours.",
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
          <p>A quick map of what we do, how we work, and where to find us — dive into any of it.</p>
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
