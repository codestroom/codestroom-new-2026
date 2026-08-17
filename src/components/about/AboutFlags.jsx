import Reveal from '../Reveal';

const GREEN = [
  'You want the thing built properly, not just quickly',
  'You can tell us what success looks like in numbers',
  'You would rather hear "that is a bad idea" than a yes-man',
  'You have a real budget and want real value for it',
  'You are okay with us asking annoying questions in week one',
];

const RED = [
  '"Can you make it like Uber but for X, by next Friday?"',
  'The scope is a secret until after we sign',
  'Payment is "exposure" or a percentage of a future exit',
  'Six stakeholders, none of whom can approve anything',
  'You want us to add AI because the board said the word',
];

export default function AboutFlags() {
  return (
    <section className="about-flags-section">
      <div className="wrap">
        <Reveal className="about-section-head about-section-head-center">
          <span className="kicker">Radical honesty corner</span>
          <h2>
            We are great for some people and <span className="about-strike">terrible</span> for others.
          </h2>
          <p>
            Most agencies pretend to be a fit for everyone. Here is the actual filter, so neither of
            us wastes a discovery call.
          </p>
        </Reveal>

        <div className="about-flags-grid">
          <Reveal as="div" className="about-flag-card about-flag-green">
            <div className="about-flag-head">
              <span className="about-flag-emoji">🟢</span>
              <h3>We will get along famously if…</h3>
            </div>
            <ul>
              {GREEN.map((item, i) => (
                <li key={item} style={{ '--g': i }}>
                  <span className="about-flag-tick" aria-hidden="true">
                    ✓
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal as="div" className="about-flag-card about-flag-red" style={{ transitionDelay: '140ms' }}>
            <div className="about-flag-head">
              <span className="about-flag-emoji">🚩</span>
              <h3>We will politely decline if…</h3>
            </div>
            <ul>
              {RED.map((item, i) => (
                <li key={item} style={{ '--g': i }}>
                  <span className="about-flag-cross" aria-hidden="true">
                    ✕
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
