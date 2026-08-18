import { Link } from 'react-router-dom';
import PageHero from '../components/PageHero';
import Reveal from '../components/Reveal';
import CTA from '../components/CTA';
import SEOHead from '../components/SEOHead';
import { CASE_STUDIES } from '../data/caseStudiesData';

const caseStudyListSchema = {
  '@context': 'https://schema.org',
  '@type': 'ItemList',
  name: 'Codestroom Case Studies',
  itemListElement: CASE_STUDIES.map((study, idx) => ({
    '@type': 'ListItem',
    position: idx + 1,
    name: study.title,
    url: `https://codestroom.com/case-studies/${study.slug}`
  }))
};

const HERO_STATS = [
  { val: `${CASE_STUDIES.length}`, lbl: 'studies published' },
  { val: '9–20', lbl: 'weeks typical build' },
  { val: '4.1x', lbl: 'best blended ROAS' },
  { val: '100%', lbl: 'numbers from real dashboards' }
];

export default function CaseStudiesPage() {
  const [featured, ...rest] = CASE_STUDIES;

  return (
    <>
      <SEOHead
        title="Case Studies — Real Projects, Real Numbers | Codestroom"
        description="Detailed case studies from Codestroom: AI intake automation for healthcare, a D2C checkout rebuild, local growth for a restaurant group and a logistics control tower — with the challenge, approach and measured results."
        canonicalPath="/case-studies"
        keywords="case studies, client results, AI automation case study, ecommerce CRO case study, local SEO case study, custom software case study"
        schemas={[caseStudyListSchema]}
      />

      <PageHero
        kicker="Case studies"
        title="What we changed, how we changed it, and what happened next."
        lead="No screenshot dumps. Each study covers the actual problem, the calls we made, the things that did not work, and the numbers six months later."
        stats={HERO_STATS}
      />

      <section className="case-section">
        <div className="wrap">
          <Reveal as="article" className={`case-featured ${featured.tint}`}>
            <div className="case-featured-body">
              <span className="case-badge">Featured study</span>
              <h2>{featured.headline}</h2>
              <p>{featured.excerpt}</p>

              <div className="case-featured-stats">
                {featured.stats.map((stat) => (
                  <div key={stat.lbl}>
                    <div className="case-stat-num">{stat.val}</div>
                    <div className="case-stat-lbl">{stat.lbl}</div>
                  </div>
                ))}
              </div>

              <div className="case-featured-foot">
                <div className="case-meta">
                  <span>{featured.industry}</span>
                  <span>{featured.service}</span>
                  <span>{featured.duration}</span>
                </div>
                <Link to={`/case-studies/${featured.slug}`} className="btn btn-primary">
                  Read the full study →
                </Link>
              </div>
            </div>
          </Reveal>

          <div className="case-grid">
            {rest.map((study) => (
              <Reveal as="article" className="case-card" key={study.slug}>
                <div className="case-card-meta">
                  <span className="case-card-service">{study.service}</span>
                  <span className="case-card-year">{study.year}</span>
                </div>

                <h3>
                  <Link to={`/case-studies/${study.slug}`}>{study.title}</Link>
                </h3>
                <p className="case-card-client">{study.client}</p>
                <p className="case-card-excerpt">{study.excerpt}</p>

                <div className="case-card-stats">
                  {study.stats.slice(0, 3).map((stat) => (
                    <div key={stat.lbl}>
                      <div className="case-stat-num">{stat.val}</div>
                      <div className="case-stat-lbl">{stat.lbl}</div>
                    </div>
                  ))}
                </div>

                <Link to={`/case-studies/${study.slug}`} className="case-card-link">
                  Read the study →
                </Link>
              </Reveal>
            ))}
          </div>

          <Reveal className="portfolio-crosslink">
            <div>
              <h3>Looking for the shorter version?</h3>
              <p>The portfolio lists everything we have shipped, plus the products we run ourselves.</p>
            </div>
            <Link to="/portfolio" className="btn btn-gradient">
              Browse the portfolio →
            </Link>
          </Reveal>
        </div>
      </section>

      <CTA />
    </>
  );
}
