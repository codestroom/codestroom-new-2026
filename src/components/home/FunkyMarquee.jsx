export default function FunkyMarquee() {
  const track1 = [
    { text: 'Autonomous AI Agents', badge: 'AI-Native', emoji: '🤖', glow: 'glow-pink' },
    { text: 'Full-Stack Velocity', badge: 'React • FastAPI', emoji: '⚡', glow: 'glow-blue' },
    { text: 'Slick Mobile Apps', badge: 'Flutter • Native', emoji: '📱', glow: 'glow-purple' },
    { text: 'Hyper-Growth Marketing', badge: '+340% ROAS', emoji: '📈', glow: 'glow-pink' },
    { text: 'Cloud & API Architecture', badge: '99.99% Uptime', emoji: '☁️', glow: 'glow-blue' },
    { text: 'Zero Corporate Fluff', badge: '100% Signal', emoji: '💥', glow: 'glow-purple' },
    { text: 'Global Delivery', badge: '4 Continents', emoji: '🌍', glow: 'glow-pink' },
  ];

  const track2 = [
    { text: 'Restaurants to Fintech', icon: '🍕', tag: 'Omnichannel' },
    { text: '48-Hour Sprint Kickoffs', icon: '⏱️', tag: 'Fast-Track' },
    { text: 'Senior Devs Only', icon: '🧠', tag: 'No Intern Roulette' },
    { text: 'Transparent Deliverables', icon: '💎', tag: 'Clear Roadmaps' },
    { text: 'Direct Slack Access', icon: '💬', tag: 'Zero Bottlenecks' },
    { text: 'High-Impact Brand Design', icon: '✨', tag: 'Award-Ready' },
  ];

  const items1 = [...track1, ...track1, ...track1];
  const items2 = [...track2, ...track2, ...track2];

  return (
    <div className="funky-marquee-wrap">
      {/* Top Track: Forward Motion */}
      <div className="funky-ticker ticker-forward">
        <div className="funky-ticker-track">
          {items1.map((item, idx) => (
            <div key={`t1-${idx}`} className={`funky-ticker-item ${item.glow}`}>
              <span className="ticker-emoji">{item.emoji}</span>
              <span className="ticker-text">{item.text}</span>
              <span className="ticker-badge">{item.badge}</span>
              <span className="ticker-sparkle">✦</span>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Track: Reverse Motion */}
      <div className="funky-ticker ticker-reverse">
        <div className="funky-ticker-track">
          {items2.map((item, idx) => (
            <div key={`t2-${idx}`} className="funky-ticker-item-alt">
              <span className="ticker-icon">{item.icon}</span>
              <span className="ticker-text">{item.text}</span>
              <span className="ticker-tag-pill">{item.tag}</span>
              <span className="ticker-dot">•</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
