import Reveal from '../Reveal';

const TEAM = [
  {
    role: 'Founder & Principal Engineer',
    handle: 'the architect',
    calm: '🧑‍💼',
    chaos: '🤯',
    superpower: 'Turns a vague WhatsApp voice note into a system diagram',
    fight: 'Tabs vs spaces (has strong, documented opinions)',
    tint: 'grad-1',
  },
  {
    role: 'AI & Machine Learning Lead',
    handle: 'the model whisperer',
    calm: '🧑‍🔬',
    chaos: '🤖',
    superpower: 'Makes an LLM behave without a 3,000-word prompt',
    fight: 'Whether your problem actually needs AI (usually: no)',
    tint: 'grad-2',
  },
  {
    role: 'Frontend & Design Lead',
    handle: 'the pixel gremlin',
    calm: '🧑‍🎨',
    chaos: '👾',
    superpower: 'Spots a 1px misalignment from across the room',
    fight: 'Border radius. Do not start.',
    tint: 'grad-3',
  },
  {
    role: 'Backend & Cloud Architect',
    handle: 'the plumber',
    calm: '🧑‍🔧',
    chaos: '🚰',
    superpower: 'Cuts your cloud bill in half and calls it a slow Tuesday',
    fight: 'Microservices for a five-user app',
    tint: 'grad-1',
  },
  {
    role: 'Performance Marketing Lead',
    handle: 'the numbers goblin',
    calm: '🧑‍💻',
    chaos: '📈',
    superpower: 'Finds the one ad set quietly burning your budget',
    fight: 'Vanity metrics, at any volume',
    tint: 'grad-2',
  },
  {
    role: 'Delivery & Client Happiness',
    handle: 'the deadline enforcer',
    calm: '🧑‍✈️',
    chaos: '⏰',
    superpower: 'Has never once let a project quietly drift',
    fight: 'Meetings that could have been a message',
    tint: 'grad-3',
  },
];

export default function AboutTeam() {
  return (
    <section className="about-team-section" id="team">
      <div className="wrap">
        <Reveal className="about-section-head">
          <span className="kicker">The humans</span>
          <h2>
            Small team. <span className="about-squiggle">Unreasonable standards.</span>
          </h2>
          <p>
            No bench of interns, no mystery offshore layer. The people you meet in the kickoff call
            are the people who build the thing. Hover a card to see them lose composure.
          </p>
        </Reveal>

        <div className="about-team-grid">
          {TEAM.map((member, i) => (
            <Reveal as="article" key={member.role} className="about-team-card" style={{ '--t': i }}>
              <div className={`about-avatar ${member.tint}`}>
                <span className="about-avatar-calm" aria-hidden="true">
                  {member.calm}
                </span>
                <span className="about-avatar-chaos" aria-hidden="true">
                  {member.chaos}
                </span>
                <span className="about-avatar-ring" aria-hidden="true"></span>
              </div>

              <span className="about-team-handle">{member.handle}</span>
              <h3>{member.role}</h3>

              <dl className="about-team-meta">
                <div>
                  <dt>Superpower</dt>
                  <dd>{member.superpower}</dd>
                </div>
                <div>
                  <dt>Will argue about</dt>
                  <dd>{member.fight}</dd>
                </div>
              </dl>
            </Reveal>
          ))}
        </div>

        <Reveal className="about-team-note">
          <span className="about-team-note-emoji" aria-hidden="true">
            🪑
          </span>
          <p>
            There is a spare chair and a suspiciously good coffee machine. If you build things
            properly and explain them clearly,{' '}
            <a href="mailto:contact@codestroom.com">email us your work</a> — no cover letter, no
            buzzword bingo.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
