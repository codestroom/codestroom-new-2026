import { useEffect, useRef, useState } from 'react';
import Reveal from '../Reveal';

const FLOATERS = ['💬', '📨', '⚡', '🤝', '🚀', '☕'];

const CHANNELS = [
  {
    id: 'email',
    emoji: '📨',
    label: 'Email us',
    value: 'contact@codestroom.com',
    hint: 'Best for briefs & scope',
    href: 'mailto:contact@codestroom.com',
    copy: 'contact@codestroom.com',
    tint: 'ch-pink',
  },
  {
    id: 'whatsapp',
    emoji: '💬',
    label: 'WhatsApp',
    value: '+91 94645 29126',
    hint: 'Fastest reply, honestly',
    href: 'https://wa.me/919464529126',
    external: true,
    tint: 'ch-purple',
  },
  {
    id: 'call',
    emoji: '📞',
    label: 'Call us',
    value: '+91 94645 29126',
    hint: 'Business hours, IST',
    href: 'tel:+919464529126',
    tint: 'ch-blue',
  },
  {
    id: 'form',
    emoji: '📝',
    label: 'Send a brief',
    value: 'Use the form below',
    hint: '2 minutes, no login',
    href: '#contact-form',
    tint: 'ch-mixed',
  },
];

const STATUS_STRIP = [
  { emoji: '⚡', text: '48-hour reply promise' },
  { emoji: '🌍', text: 'India · Canada · USA · Europe' },
  { emoji: '🔒', text: 'NDA on request, no questions' },
  { emoji: '🙅', text: 'Zero sales scripts' },
];

// Rotates through the ways people actually open a message to us.
const OPENERS = [
  'we have an idea…',
  'our site is embarrassing',
  'can you fix our ads?',
  'we need this live by Friday',
  'is AI worth it for us?',
  'just saying hi 👋',
];

export default function ContactHero() {
  const [copied, setCopied] = useState(null);
  const [openerIndex, setOpenerIndex] = useState(0);
  const stageRef = useRef(null);

  useEffect(() => {
    const id = setInterval(() => setOpenerIndex((i) => (i + 1) % OPENERS.length), 2600);
    return () => clearInterval(id);
  }, []);

  // Cursor-tracked spotlight, written straight to CSS vars so we never re-render on move.
  useEffect(() => {
    const stage = stageRef.current;
    if (!stage) return;
    if (window.matchMedia?.('(prefers-reduced-motion: reduce)').matches) return;

    let raf = null;
    let next = { x: 50, y: 40 };

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

  const handleCopy = (channel) => (e) => {
    if (!channel.copy || !navigator.clipboard?.writeText) return;
    e.preventDefault();
    navigator.clipboard.writeText(channel.copy);
    setCopied(channel.id);
    setTimeout(() => setCopied(null), 2200);
  };

  return (
    <section className="contact-hero" ref={stageRef}>
      <div className="contact-hero-spotlight" aria-hidden="true"></div>
      <div className="contact-blob contact-blob-a" aria-hidden="true"></div>
      <div className="contact-blob contact-blob-b" aria-hidden="true"></div>
      <div className="contact-hero-grid" aria-hidden="true"></div>

      <div className="contact-floaters" aria-hidden="true">
        {FLOATERS.map((emoji, i) => (
          <span key={emoji} className="contact-floater" style={{ '--f': i }}>
            {emoji}
          </span>
        ))}
      </div>

      <div className="wrap contact-hero-inner">
        <Reveal immediate className="funky-pill-badge">
          <span className="pulsing-neon-dot dot-pink"></span>
          <span>SAY HELLO 👋</span>
        </Reveal>

        <h1 className="funky-title contact-hero-title">
          Let’s build something <span className="funky-gradient-text">worth bragging about</span>.
        </h1>

        <p className="funky-subtitle contact-hero-sub">
          Tell us what is broken, what is missing, or what you are dreaming about. You get a real
          human, a straight answer on scope and timeline, and absolutely no 47-slide deck.
        </p>

        <div className="contact-opener" aria-hidden="true">
          <span className="contact-opener-label">Most messages start with</span>
          <span className="contact-opener-slot">
            {OPENERS.map((opener, i) => (
              <span key={opener} className={`contact-opener-line ${i === openerIndex ? 'is-active' : ''}`}>
                “{opener}”
              </span>
            ))}
          </span>
        </div>

        <div className="channel-grid">
          {CHANNELS.map((channel) => (
            <Reveal
              as="a"
              key={channel.id}
              href={channel.href}
              className={`channel-tile ${channel.tint}`}
              onClick={channel.copy ? handleCopy(channel) : undefined}
              {...(channel.external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
            >
              <span className="channel-emoji" aria-hidden="true">
                {channel.emoji}
              </span>
              <span className="channel-label">{channel.label}</span>
              <span className="channel-value">{channel.value}</span>
              <span className="channel-hint">{copied === channel.id ? 'Copied! 🚀' : channel.hint}</span>
              <span className="channel-arrow" aria-hidden="true">
                →
              </span>
            </Reveal>
          ))}
        </div>

        <div className="contact-status-strip">
          {STATUS_STRIP.map((item) => (
            <span key={item.text}>
              <span aria-hidden="true">{item.emoji}</span> {item.text}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
