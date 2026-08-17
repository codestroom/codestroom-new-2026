import Reveal from '../Reveal';

const CHAPTERS = [
  {
    year: '2019',
    title: 'Two laptops and a lot of nerve',
    emoji: '💻',
    desc: 'Codestroom started as two developers building websites at night for local businesses who had been quoted absurd numbers by "agencies". We charged less and cared more. Word travelled.',
    aside: 'Office: one kitchen table. Snacks: unlimited.',
  },
  {
    year: '2021',
    title: 'We learned to say no',
    emoji: '🙅',
    desc: 'Growth got real, and so did the bad-fit projects. We started turning down work we could not do brilliantly. Revenue dipped for a quarter, then doubled. Turns out focus is a business strategy.',
    aside: 'First official no: a crypto casino. Still proud.',
  },
  {
    year: '2023',
    title: 'AI stopped being a buzzword',
    emoji: '🤖',
    desc: 'While everyone was posting about LLMs, we were shipping them — retrieval systems, internal copilots, automated support that customers actually liked. Boring, production-grade, quietly transformative.',
    aside: 'Models trained: many. Demos that broke live: two.',
  },
  {
    year: '2024',
    title: 'Four countries, one Slack',
    emoji: '🌍',
    desc: 'India, Canada, the USA and Europe. Different accents, same standards. We built a delivery process that survives timezones, holidays and the occasional heroic overnight deploy.',
    aside: 'Longest standup: 9 minutes. We are trying.',
  },
  {
    year: '2026',
    title: 'Still the same weirdos',
    emoji: '✨',
    desc: 'Bigger team, sharper craft, identical obsession: build the thing properly, explain it in plain English, and make the client look like a genius to their boss.',
    aside: 'You are here. Hi. Scroll on.',
  },
];

export default function AboutStory() {
  return (
    <section className="about-story-section" id="story">
      <div className="wrap">
        <Reveal className="about-section-head">
          <span className="kicker">The origin story</span>
          <h2>
            Seven years, zero <span className="about-strike">pivots to blockchain</span>.
          </h2>
          <p>
            Every agency has a founding myth involving a garage. Ours involves a kitchen table, a
            questionable router, and a client who paid in installments. Here is the honest timeline.
          </p>
        </Reveal>

        <div className="about-timeline">
          <span className="about-timeline-rail" aria-hidden="true"></span>
          {CHAPTERS.map((chapter, i) => (
            <Reveal
              as="article"
              key={chapter.year}
              className={`about-chapter ${i % 2 === 0 ? 'is-left' : 'is-right'}`}
            >
              <div className="about-chapter-node" aria-hidden="true">
                <span className="about-chapter-emoji">{chapter.emoji}</span>
                <span className="about-chapter-ring"></span>
              </div>
              <div className="about-chapter-card">
                <span className="about-chapter-year">{chapter.year}</span>
                <h3>{chapter.title}</h3>
                <p>{chapter.desc}</p>
                <span className="about-chapter-aside">{chapter.aside}</span>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
