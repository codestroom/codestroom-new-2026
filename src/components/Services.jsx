import Reveal from './Reveal';

const SERVICES = [
  {
    title: 'Web & Product Engineering',
    desc: 'Custom web apps, e-commerce platforms and internal tools built on modern, maintainable stacks — designed to scale past launch day.',
    tag: 'Full-stack delivery',
  },
  {
    title: 'Mobile App Development',
    desc: 'Native and cross-platform apps for iOS and Android, from first prototype to App Store launch and post-release iteration.',
    tag: 'iOS · Android · Cross-platform',
  },
  {
    title: 'Cloud & IT Infrastructure',
    desc: 'Architecture, migration, and managed DevOps so your systems stay fast, secure and online — wherever your team logs in from.',
    tag: 'AWS · Azure · GCP',
  },
  {
    title: 'Performance Marketing',
    desc: 'Paid search, paid social and programmatic campaigns run against real revenue targets, not vanity impressions.',
    tag: 'Search · Social · Programmatic',
  },
  {
    title: 'SEO & Content Strategy',
    desc: 'Technical SEO, editorial content and structured data that compound — building organic visibility that outlasts any single campaign.',
    tag: 'Technical + editorial',
  },
  {
    title: 'Brand & Creative',
    desc: 'Identity systems, design language and campaign creative that hold together across every market you operate in.',
    tag: 'Identity · Design · Campaigns',
  },
];

export default function Services() {
  return (
    <section id="services">
      <div className="wrap">
        <Reveal className="section-head">
          <span className="kicker">What we do</span>
          <h2>Two disciplines, engineered to overlap.</h2>
          <p>
            Most agencies hand you off between a dev shop and a marketing shop. We run both
            under one team, so the site that gets built is the site that gets found — and the
            campaign that gets planned is technically possible to ship.
          </p>
        </Reveal>
        <div className="service-grid">
          {SERVICES.map((service) => (
            <Reveal as="div" key={service.title} className="service-card">
              <div className="icon-blend">
                <i></i>
                <i></i>
              </div>
              <h3>{service.title}</h3>
              <p>{service.desc}</p>
              <span className="tag">{service.tag}</span>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
