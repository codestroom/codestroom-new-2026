import { Link, useParams } from 'react-router-dom';
import Reveal from '../components/Reveal';
import CTA from '../components/CTA';
import SEOHead from '../components/SEOHead';
import NotFound from './NotFound';
import { CASE_STUDIES, getCaseStudy } from '../data/caseStudiesData';

export default function CaseStudyDetailPage() {
  const { slug } = useParams();
  const study = getCaseStudy(slug);

  if (!study) return <NotFound />;

  const others = CASE_STUDIES.filter((item) => item.slug !== study.slug).slice(0, 3);

  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: study.title,
    description: study.excerpt,
    datePublished: `${study.year}-01-01`,
    author: { '@type': 'Organization', name: 'Codestroom' },
    publisher: { '@id': 'https://codestroom.com/#organization' },
    mainEntityOfPage: `https://codestroom.com/case-studies/${study.slug}`
  };

  return (
    <>
      <SEOHead
        title={`${study.title} | Codestroom Case Study`}
        description={study.excerpt}
        canonicalPath={`/case-studies/${study.slug}`}
        keywords={`${study.industry} case study, ${study.service}, ${study.stack.join(', ')}`}
        ogType="article"
        schemas={[schema]}
      />

      <article className="case-detail">
        <header className={`case-detail-hero ${study.tint}`}>
          <div className="wrap">
            <nav className="crumbs" aria-label="Breadcrumb">
              <Link to="/case-studies">Case studies</Link>
              <span aria-hidden="true">/</span>
              <span>{study.industry}</span>
            </nav>

            <span className="case-badge">{study.service}</span>
            <h1>{study.title}</h1>
            <p className="case-detail-lead">{study.headline}</p>

            <dl className="case-detail-facts">
              <div>
                <dt>Client</dt>
                <dd>{study.client}</dd>
              </div>
              <div>
                <dt>Sector</dt>
                <dd>{study.industry}</dd>
              </div>
              <div>
                <dt>Engagement</dt>
                <dd>{study.duration}</dd>
              </div>
              <div>
                <dt>Year</dt>
                <dd>{study.year}</dd>
              </div>
            </dl>
          </div>
        </header>

        <section className="case-detail-body">
          <div className="wrap">
            <Reveal className="case-results-band">
              {study.stats.map((stat) => (
                <div key={stat.lbl}>
                  <div className="case-stat-num">{stat.val}</div>
                  <div className="case-stat-lbl">{stat.lbl}</div>
                </div>
              ))}
            </Reveal>

            <div className="case-detail-grid">
              <div className="case-detail-main">
                <Reveal as="section" className="case-block">
                  <span className="kicker">The challenge</span>
                  <h2>What was actually going wrong</h2>
                  <p>{study.challenge}</p>
                </Reveal>

                <Reveal as="section" className="case-block">
                  <span className="kicker">The approach</span>
                  <h2>How we worked through it</h2>
                  <ol className="case-steps">
                    {study.approach.map((step, idx) => (
                      <li key={step.title}>
                        <span className="case-step-num">{String(idx + 1).padStart(2, '0')}</span>
                        <div>
                          <h3>{step.title}</h3>
                          <p>{step.detail}</p>
                        </div>
                      </li>
                    ))}
                  </ol>
                </Reveal>

                <Reveal as="section" className="case-block">
                  <span className="kicker">The solution</span>
                  <h2>What we shipped</h2>
                  <p>{study.solution}</p>
                  <div className="tag-list case-stack">
                    {study.stack.map((tech) => (
                      <span className="tag" key={tech}>
                        {tech}
                      </span>
                    ))}
                  </div>
                </Reveal>

                <Reveal as="section" className="case-block">
                  <span className="kicker">The results</span>
                  <h2>What changed afterwards</h2>
                  <ul className="case-results-list">
                    {study.results.map((result) => (
                      <li key={result}>{result}</li>
                    ))}
                  </ul>
                </Reveal>

                {study.quote && (
                  <Reveal as="blockquote" className="case-quote">
                    <p>“{study.quote.text}”</p>
                    <footer>
                      <strong>{study.quote.author}</strong>
                      <span>{study.quote.role}</span>
                    </footer>
                  </Reveal>
                )}
              </div>

              <aside className="case-detail-aside">
                <div className="case-aside-card">
                  <h3>Recognise the problem?</h3>
                  <p>
                    If any of this sounds like your week, a 30-minute call is usually enough for us
                    to tell you whether it is worth doing at all.
                  </p>
                  <Link to="/contact" className="btn btn-gradient">
                    Start a conversation →
                  </Link>
                  <a href="mailto:contact@codestroom.com" className="case-aside-mail">
                    contact@codestroom.com
                  </a>
                </div>
              </aside>
            </div>
          </div>
        </section>

        {others.length > 0 && (
          <section className="case-more">
            <div className="wrap">
              <Reveal className="section-head">
                <span className="kicker">Keep reading</span>
                <h2>More case studies</h2>
              </Reveal>

              <div className="case-grid">
                {others.map((item) => (
                  <Reveal as="article" className="case-card" key={item.slug}>
                    <div className="case-card-meta">
                      <span className="case-card-service">{item.service}</span>
                      <span className="case-card-year">{item.year}</span>
                    </div>
                    <h3>
                      <Link to={`/case-studies/${item.slug}`}>{item.title}</Link>
                    </h3>
                    <p className="case-card-excerpt">{item.excerpt}</p>
                    <Link to={`/case-studies/${item.slug}`} className="case-card-link">
                      Read the study →
                    </Link>
                  </Reveal>
                ))}
              </div>
            </div>
          </section>
        )}
      </article>

      <CTA />
    </>
  );
}
