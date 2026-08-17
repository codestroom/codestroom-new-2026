import Reveal from '../Reveal';

// Front = what we tell your CFO. Back = what we actually say in Slack.
const VALUES = [
  {
    emoji: '🔍',
    title: 'Radical clarity',
    front: 'You will always know what we are building, why, what it costs and when it lands. No surprise line items, ever.',
    backTitle: 'Translation',
    back: 'If we cannot explain it to your mum, the estimate is probably nonsense and we rewrite it.',
    tint: 'grad-1',
  },
  {
    emoji: '🛠️',
    title: 'Craft over speed',
    front: 'Anyone can ship fast once. We build systems that are still maintainable eighteen months and three developers later.',
    backTitle: 'Translation',
    back: 'We have all inherited someone\'s cursed codebase. We refuse to be that someone.',
    tint: 'grad-2',
  },
  {
    emoji: '📊',
    title: 'Numbers or it did not happen',
    front: 'Every engagement carries metrics agreed up front — conversion, latency, ROAS, retention. We report on them whether or not they flatter us.',
    backTitle: 'Translation',
    back: 'Screenshots of "engagement" are not results. Revenue is a result.',
    tint: 'grad-3',
  },
  {
    emoji: '🗣️',
    title: 'Plain English only',
    front: 'No synergy. No leverage. No paradigms. We explain technical trade-offs in sentences you can repeat in a board meeting.',
    backTitle: 'Translation',
    back: 'Jargon is usually someone hiding. There is a jar. It costs ₹50 per buzzword.',
    tint: 'grad-1',
  },
  {
    emoji: '🤝',
    title: 'Annoyingly reachable',
    front: 'Direct line to the people doing the work — no account manager relay race, no ticket purgatory.',
    backTitle: 'Translation',
    back: 'Yes, that is the actual developer replying at 11pm. No, we did not ask them to. They are like that.',
    tint: 'grad-2',
  },
  {
    emoji: '🧯',
    title: 'We own the mess',
    front: 'If something breaks on our watch, we fix it first and discuss blame never. Post-mortems are about systems, not people.',
    backTitle: 'Translation',
    back: 'Someone once deployed on a Friday at 6pm. We do not name them. We did buy them dinner.',
    tint: 'grad-3',
  },
];

export default function AboutValues() {
  return (
    <section className="about-values-section" id="values">
      <div className="wrap">
        <Reveal className="about-section-head">
          <span className="kicker">What we actually believe</span>
          <h2>
            Six values. <span className="about-highlight">Flip them for the honest version.</span>
          </h2>
          <p>
            Most value pages are wallpaper. Ours have a back side — hover (or tap) any card to see
            what that value sounds like in our Slack at 4pm on a deadline day.
          </p>
        </Reveal>

        <div className="about-values-grid">
          {VALUES.map((value, i) => (
            <Reveal as="div" key={value.title} className="about-flip" style={{ '--v': i }}>
              <button type="button" className="about-flip-inner" aria-label={`Flip card: ${value.title}`}>
                <span className="about-flip-face about-flip-front">
                  <span className={`about-value-icon ${value.tint}`}>{value.emoji}</span>
                  <span className="about-value-title">{value.title}</span>
                  <span className="about-value-copy">{value.front}</span>
                  <span className="about-flip-cue">flip me →</span>
                </span>
                <span className="about-flip-face about-flip-back">
                  <span className="about-value-back-kicker">{value.backTitle}</span>
                  <span className="about-value-back-copy">{value.back}</span>
                  <span className="about-value-back-emoji" aria-hidden="true">
                    {value.emoji}
                  </span>
                </span>
              </button>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
