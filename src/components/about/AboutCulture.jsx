import { useCallback, useEffect, useRef, useState } from 'react';
import Reveal from '../Reveal';

const TRUTHS = [
  {
    emoji: '🕘',
    rule: 'No meetings before 10am',
    reveal: 'Good code is not written by someone who has not had breakfast. The calendar is locked and the lock is respected.',
  },
  {
    emoji: '🚀',
    rule: 'Nothing ships on a Friday evening',
    reveal: 'We learned this the memorable way, in 2022, at 11:40pm, on a payment gateway. Never again. Probably.',
  },
  {
    emoji: '📵',
    rule: 'Deep-work blocks are sacred',
    reveal: 'Four hours a day, no pings, no calls. It is why your feature arrives on Tuesday instead of "sometime after the sprint".',
  },
  {
    emoji: '🧹',
    rule: 'Leave the codebase tidier than you found it',
    reveal: 'Every PR is allowed one small unrelated cleanup. Over a year that quietly becomes a codebase people want to work in.',
  },
  {
    emoji: '🎤',
    rule: 'Demo day every second Friday',
    reveal: 'Everyone shows something, including the failures. The best demo wins a genuinely terrible trophy shaped like a bug.',
  },
  {
    emoji: '🍕',
    rule: 'The pizza rule for scope',
    reveal: 'If a feature cannot be explained over one slice, it is not one feature. It is three, and we will price it honestly.',
  },
];

const CONFETTI_EMOJI = ['🎉', '✨', '🚀', '💡', '🧠', '📈', '🎯', '🍕', '☕', '🐛'];

export default function AboutCulture() {
  const [openTruth, setOpenTruth] = useState(0);
  const [bursts, setBursts] = useState([]);
  const [pressCount, setPressCount] = useState(0);
  const timers = useRef([]);

  useEffect(
    () => () => {
      timers.current.forEach(clearTimeout);
    },
    []
  );

  const fireConfetti = useCallback(() => {
    setPressCount((n) => n + 1);
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    const id = Date.now();
    const pieces = Array.from({ length: 26 }, (_, i) => ({
      key: `${id}-${i}`,
      emoji: CONFETTI_EMOJI[Math.floor(Math.random() * CONFETTI_EMOJI.length)],
      x: (Math.random() - 0.5) * 460,
      lift: 180 + Math.random() * 220,
      spin: (Math.random() - 0.5) * 720,
      delay: Math.random() * 180,
      scale: 0.7 + Math.random() * 0.8,
    }));

    setBursts((current) => [...current, { id, pieces }]);
    timers.current.push(
      setTimeout(() => {
        setBursts((current) => current.filter((burst) => burst.id !== id));
      }, 2200)
    );
  }, []);

  const buttonLabel =
    pressCount === 0
      ? 'Do not press this'
      : pressCount === 1
        ? 'You pressed it. Again?'
        : pressCount < 5
          ? 'Okay, you clearly like this'
          : 'This is our whole personality now';

  return (
    <section className="about-culture-section" id="culture">
      <div className="wrap">
        <Reveal className="about-section-head">
          <span className="kicker">House rules</span>
          <h2>
            Six rules we <span className="about-highlight">genuinely enforce</span>.
          </h2>
          <p>
            Culture is not a foosball table. It is the handful of rules a team refuses to break when
            things get busy. Click any rule for the story behind it.
          </p>
        </Reveal>

        <div className="about-truths">
          {TRUTHS.map((truth, i) => {
            const open = openTruth === i;
            return (
              <Reveal as="div" key={truth.rule} className={`about-truth ${open ? 'is-open' : ''}`}>
                <button
                  type="button"
                  className="about-truth-head"
                  aria-expanded={open}
                  onClick={() => setOpenTruth(open ? -1 : i)}
                >
                  <span className="about-truth-emoji">{truth.emoji}</span>
                  <span className="about-truth-rule">{truth.rule}</span>
                  <span className="about-truth-plus" aria-hidden="true"></span>
                </button>
                <div className="about-truth-body">
                  <p>{truth.reveal}</p>
                </div>
              </Reveal>
            );
          })}
        </div>

        <Reveal className="about-button-zone">
          <div className="about-button-copy">
            <h3>The completely unnecessary button</h3>
            <p>
              Every site needs one thing that exists purely for joy. This is ours. It does nothing
              for your conversion rate and we are keeping it anyway.
            </p>
            {pressCount > 0 && (
              <span className="about-press-count">
                pressed {pressCount} {pressCount === 1 ? 'time' : 'times'} this visit
              </span>
            )}
          </div>

          <div className="about-button-stage">
            <button type="button" className="about-big-button" onClick={fireConfetti}>
              <span className="about-big-button-face">{buttonLabel}</span>
            </button>

            {bursts.map((burst) => (
              <div className="about-confetti" key={burst.id} aria-hidden="true">
                {burst.pieces.map((piece) => (
                  <span
                    key={piece.key}
                    className="about-confetti-piece"
                    style={{
                      '--cx': `${piece.x}px`,
                      '--cy': `${-piece.lift}px`,
                      '--cr': `${piece.spin}deg`,
                      '--cs': piece.scale,
                      animationDelay: `${piece.delay}ms`,
                    }}
                  >
                    {piece.emoji}
                  </span>
                ))}
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
