import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import Reveal from '../Reveal';

const HEADLINE = ['Hello.', 'We', 'are', 'Codestroom.'];

const STICKERS = [
  { text: '100% human-made', emoji: '🧑‍💻', className: 'sticker-1' },
  { text: 'chai-powered', emoji: '☕', className: 'sticker-2' },
  { text: 'no jargon allowed', emoji: '🚫', className: 'sticker-3' },
  { text: 'ships on Fridays', emoji: '😬', className: 'sticker-4' },
];

const FLOATERS = ['🚀', '✨', '🧠', '💡', '🎯', '🛠️', '📈', '🍕'];

// Rotates through the many things clients have (affectionately) called us.
const ALIASES = [
  'a digital engineering studio',
  'the people who fixed the website',
  'suspiciously fast',
  'your unfair advantage',
  'that AI team from Chandigarh',
  'available on WhatsApp, apparently',
];

export default function AboutHero() {
  const stageRef = useRef(null);
  const [aliasIndex, setAliasIndex] = useState(0);

  // Cursor-tracked spotlight. Written straight to CSS vars so we never re-render on move.
  useEffect(() => {
    const stage = stageRef.current;
    if (!stage) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    let raf = null;
    let next = { x: 50, y: 50 };

    const apply = () => {
      raf = null;
      stage.style.setProperty('--mx', `${next.x}%`);
      stage.style.setProperty('--my', `${next.y}%`);
    };

    const onMove = (e) => {
      const rect = stage.getBoundingClientRect();
      next = {
        x: ((e.clientX - rect.left) / rect.width) * 100,
        y: ((e.clientY - rect.top) / rect.height) * 100,
      };
      if (raf === null) raf = requestAnimationFrame(apply);
    };

    stage.addEventListener('mousemove', onMove);
    return () => {
      stage.removeEventListener('mousemove', onMove);
      if (raf !== null) cancelAnimationFrame(raf);
    };
  }, []);

  useEffect(() => {
    const id = setInterval(() => {
      setAliasIndex((i) => (i + 1) % ALIASES.length);
    }, 2600);
    return () => clearInterval(id);
  }, []);

  let letterIndex = 0;

  return (
    <section className="about-hero" ref={stageRef}>
      <div className="about-hero-spotlight" aria-hidden="true"></div>
      <div className="about-blob about-blob-a" aria-hidden="true"></div>
      <div className="about-blob about-blob-b" aria-hidden="true"></div>
      <div className="about-blob about-blob-c" aria-hidden="true"></div>
      <div className="about-hero-grid-lines" aria-hidden="true"></div>

      <div className="about-floaters" aria-hidden="true">
        {FLOATERS.map((emoji, i) => (
          <span key={emoji} className="about-floater" style={{ '--f': i }}>
            {emoji}
          </span>
        ))}
      </div>

      <div className="wrap about-hero-inner">
        <Reveal className="about-eyebrow">
          <span className="about-eyebrow-dot"></span>
          <span>About us — the long version, but fun</span>
          <span className="about-eyebrow-wave">👋</span>
        </Reveal>

        <h1 className="about-hero-title" aria-label={HEADLINE.join(' ')}>
          {HEADLINE.map((word, w) => (
            <span className="about-word" key={word}>
              {[...word].map((char, c) => (
                <span
                  className="about-char"
                  key={`${word}-${c}`}
                  style={{ '--c': letterIndex++ }}
                  aria-hidden="true"
                >
                  {char}
                </span>
              ))}
              {w === 1 && <span className="about-word-space"> </span>}
            </span>
          ))}
        </h1>

        <div className="about-alias-line">
          <span className="about-alias-label">Also known as</span>
          <span className="about-alias-slot">
            {ALIASES.map((alias, i) => (
              <span key={alias} className={`about-alias ${i === aliasIndex ? 'is-active' : ''}`}>
                {alias}
              </span>
            ))}
          </span>
        </div>

        <Reveal className="about-hero-copy" style={{ transitionDelay: '340ms' }}>
          <p>
            We are a small, loud, deeply caffeinated team of engineers, designers and marketers
            spread across India, Canada, the USA and Europe. We build AI systems, web and mobile
            apps, custom software and campaigns that actually move numbers — and we do it without
            the 40-slide deck, the mystery invoice, or the phrase "let's circle back."
          </p>
        </Reveal>

        <div className="about-hero-actions">
          <Link to="/contact" className="btn btn-gradient btn-lg about-wiggle-btn">
            Say hi (we reply fast) →
          </Link>
          <a href="#team" className="btn btn-outline about-bounce-btn">
            Meet the humans ↓
          </a>
        </div>

        <div className="about-stickers" aria-hidden="true">
          {STICKERS.map((sticker) => (
            <span key={sticker.text} className={`about-sticker ${sticker.className}`}>
              <span className="about-sticker-emoji">{sticker.emoji}</span>
              {sticker.text}
            </span>
          ))}
        </div>
      </div>

      <div className="about-scroll-hint" aria-hidden="true">
        <span className="about-scroll-mouse"></span>
        <span>keep scrolling, it gets weirder</span>
      </div>
    </section>
  );
}
