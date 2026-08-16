import Reveal from './Reveal';

const STEPS = [
  {
    idx: '01',
    title: 'Discover',
    desc: 'We audit your product, market and stack to find where engineering and growth are leaving value on the table.',
  },
  {
    idx: '02',
    title: 'Design the roadmap',
    desc: 'A single plan covering build and go-to-market, with milestones you can hold us to.',
  },
  {
    idx: '03',
    title: 'Build & launch',
    desc: 'Sprints ship in two-week cycles with working demos, not slide decks, at every check-in.',
  },
  {
    idx: '04',
    title: 'Measure & compound',
    desc: 'Post-launch, we optimize against real metrics — performance, conversion, retention — on a standing cadence.',
  },
];

export default function Process() {
  return (
    <section id="process">
      <div className="wrap">
        <Reveal className="section-head">
          <span className="kicker">How we work</span>
          <h2>One engagement, four checkpoints.</h2>
          <p>
            Every project — software or campaign — runs through the same disciplined loop, so
            you always know what's shipping and when.
          </p>
        </Reveal>
        <div className="process">
          {STEPS.map((step) => (
            <Reveal as="div" key={step.idx} className="process-step">
              <div className="idx">{step.idx}</div>
              <h3>{step.title}</h3>
              <p>{step.desc}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
