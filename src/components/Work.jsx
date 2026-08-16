import Reveal from './Reveal';

export default function Work() {
  return (
    <section id="work">
      <div className="wrap">
        <Reveal className="section-head">
          <span className="kicker">Recent results</span>
          <h2>Built to move the number that matters.</h2>
          <p>A snapshot of the outcomes behind the work — across fintech, retail and healthtech clients.</p>
        </Reveal>
        <div className="work-grid">
          <Reveal as="div" className="work-card work-1 large">
            <span className="kicker">Fintech · Platform rebuild</span>
            <h3>Rebuilding a payments dashboard for scale</h3>
            <p>
              A full-stack rebuild of a legacy admin platform, cutting page load times and
              enabling real-time reconciliation across 14 markets.
            </p>
            <div className="metrics">
              <div>
                <div className="m-num">-68%</div>
                <div className="m-lbl">Load time</div>
              </div>
              <div>
                <div className="m-num">14</div>
                <div className="m-lbl">Markets live</div>
              </div>
              <div>
                <div className="m-num">99.98%</div>
                <div className="m-lbl">Uptime</div>
              </div>
            </div>
          </Reveal>
          <Reveal as="div" className="work-card work-2">
            <span className="kicker">Retail · Growth</span>
            <h3>Scaling paid acquisition profitably</h3>
            <p>
              Restructured campaign architecture and landing funnels for a DTC retailer entering
              three new markets.
            </p>
            <div className="metrics">
              <div>
                <div className="m-num">3.4x</div>
                <div className="m-lbl">ROAS</div>
              </div>
              <div>
                <div className="m-num">+61%</div>
                <div className="m-lbl">Conversions</div>
              </div>
            </div>
          </Reveal>
          <Reveal as="div" className="work-card work-3">
            <span className="kicker">Healthtech · SEO</span>
            <h3>Organic traffic, rebuilt from zero</h3>
            <p>
              Technical SEO overhaul and content system for a healthtech platform re-entering
              search after a domain migration.
            </p>
            <div className="metrics">
              <div>
                <div className="m-num">+212%</div>
                <div className="m-lbl">Organic traffic</div>
              </div>
              <div>
                <div className="m-num">340</div>
                <div className="m-lbl">Keywords ranked</div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
