import Reveal from './Reveal';

const TESTIMONIALS = [
  {
    quote:
      '"Codestroom is the first partner where our dev team and marketing team stopped blaming each other for missed deadlines. They just ran both."',
    name: 'Head of Growth',
    role: 'Fintech, Singapore',
  },
  {
    quote:
      '"They rebuilt our platform and our funnel in the same quarter. Traffic had somewhere fast to land, for once."',
    name: 'Founder',
    role: 'DTC Retail, UK',
  },
  {
    quote:
      '"Communication across time zones was never the bottleneck I expected it to be. Something was always moving."',
    name: 'VP Engineering',
    role: 'Healthtech, Canada',
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials">
      <div className="wrap">
        <Reveal className="section-head">
          <span className="kicker">Client voices</span>
          <h2>What it's like to work with us.</h2>
        </Reveal>
        <div className="testi-grid">
          {TESTIMONIALS.map((t) => (
            <Reveal as="div" key={t.name} className="testi-card">
              <p className="testi-quote">{t.quote}</p>
              <div className="testi-person">
                <div className="avatar"></div>
                <div>
                  <div className="name">{t.name}</div>
                  <div className="role">{t.role}</div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
