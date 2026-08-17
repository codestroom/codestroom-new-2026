const ROW_ONE = [
  'AI that ships 🤖',
  'no jargon 🙅',
  'deadlines respected ⏰',
  'pixel gremlins 👾',
  'ROAS go brrr 📈',
  'dark mode by default 🌙',
];

const ROW_TWO = [
  'we read the brief 📄',
  'chai > meetings ☕',
  'Slack replies in minutes ⚡',
  'refactor addicts 🧹',
  'zero ghosting 👻',
  'your KPIs, our problem 🎯',
];

function Row({ items, className }) {
  return (
    <div className={`about-marquee-row ${className}`}>
      {/* duplicated twice so the loop never shows a seam */}
      {[0, 1].map((copy) => (
        <div className="about-marquee-track" key={copy} aria-hidden={copy === 1 ? 'true' : undefined}>
          {items.map((item) => (
            <span className="about-marquee-item" key={`${copy}-${item}`}>
              {item}
              <span className="about-marquee-star">✦</span>
            </span>
          ))}
        </div>
      ))}
    </div>
  );
}

export default function AboutMarquee() {
  return (
    <section className="about-marquee" aria-label="What people say about working with us">
      <Row items={ROW_ONE} className="about-marquee-left" />
      <Row items={ROW_TWO} className="about-marquee-right" />
    </section>
  );
}
