import { useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import PageHero from '../components/PageHero';
import Reveal from '../components/Reveal';
import CTA from '../components/CTA';
import SEOHead from '../components/SEOHead';
import { PORTFOLIO_CATEGORIES, PRODUCTS, PROJECTS } from '../data/portfolioData';

const portfolioSchema = {
  '@context': 'https://schema.org',
  '@type': 'CollectionPage',
  name: 'Codestroom Portfolio & Products',
  description:
    'In-house software products and selected client projects across AI, web, mobile, e-commerce and performance marketing.',
  url: 'https://codestroom.com/portfolio',
  hasPart: PRODUCTS.map((product) => ({
    '@type': 'SoftwareApplication',
    name: product.name,
    applicationCategory: 'BusinessApplication',
    description: product.tagline,
    operatingSystem: 'Web'
  }))
};

const HERO_STATS = [
  { val: `${PRODUCTS.length}`, lbl: 'products of our own' },
  { val: `${PROJECTS.length}+`, lbl: 'projects shipped' },
  { val: '4', lbl: 'regions served' },
  { val: '48h', lbl: 'reply on new briefs' }
];

export default function PortfolioPage() {
  const [filter, setFilter] = useState('all');

  const visibleProducts = useMemo(
    () => (filter === 'all' || filter === 'product' ? PRODUCTS : []),
    [filter]
  );

  const visibleProjects = useMemo(
    () => (filter === 'product' ? [] : PROJECTS.filter((p) => filter === 'all' || p.category === filter)),
    [filter]
  );

  const nothingMatched = visibleProducts.length === 0 && visibleProjects.length === 0;

  return (
    <>
      <SEOHead
        title="Portfolio & Products | Codestroom"
        description="See what we build: in-house software products like StroomDesk, LedgerLite and PulseBoard, plus client projects spanning AI agents, SaaS portals, mobile apps, e-commerce and growth marketing."
        canonicalPath="/portfolio"
        keywords="software portfolio, SaaS products, AI projects, web development portfolio, mobile app portfolio, ecommerce projects, marketing work"
        schemas={[portfolioSchema]}
      />

      <PageHero
        kicker="Portfolio & products"
        title="The things we've built — and the things we keep building."
        lead="Two kinds of work live here. Products we own and run ourselves, and client projects we designed, engineered and shipped. Filter by what you're actually here for."
        stats={HERO_STATS}
      />

      <section className="portfolio-section">
        <div className="wrap">
          <div className="filter-bar" role="group" aria-label="Filter portfolio">
            {PORTFOLIO_CATEGORIES.map((cat) => (
              <button
                key={cat.id}
                type="button"
                aria-pressed={filter === cat.id}
                className={`filter-chip ${filter === cat.id ? 'is-active' : ''}`}
                onClick={() => setFilter(cat.id)}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {visibleProducts.length > 0 && (
            <div className="portfolio-block">
              <Reveal className="portfolio-block-head">
                <span className="kicker">Built and owned by us</span>
                <h2>Our products</h2>
                <p>
                  Software we fund, run and support ourselves. Most of it started as something a
                  client needed and we could not buy anywhere.
                </p>
              </Reveal>

              <div className="product-grid">
                {visibleProducts.map((product) => (
                  <Reveal as="article" className="product-card" key={product.slug}>
                    <div className="product-card-top">
                      <span className={`product-mark ${product.tint}`} aria-hidden="true">
                        {product.name.slice(0, 2)}
                      </span>
                      <span className={`product-status status-${product.status.toLowerCase().replace(/\s+/g, '-')}`}>
                        {product.status}
                      </span>
                    </div>

                    <h3>{product.name}</h3>
                    <p className="product-tagline">{product.tagline}</p>
                    <p className="product-desc">{product.description}</p>

                    <ul className="product-highlights">
                      {product.highlights.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>

                    <div className="tag-list">
                      {product.tags.map((tag) => (
                        <span className="tag" key={tag}>
                          {tag}
                        </span>
                      ))}
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>
          )}

          {visibleProjects.length > 0 && (
            <div className="portfolio-block">
              <Reveal className="portfolio-block-head">
                <span className="kicker">Client work</span>
                <h2>Selected projects</h2>
                <p>
                  Described by sector rather than name where an NDA applies. Happy to walk through
                  any of these properly on a call.
                </p>
              </Reveal>

              <div className="project-grid">
                {visibleProjects.map((project) => (
                  <Reveal as="article" className="project-card" key={project.slug}>
                    <div className="project-card-meta">
                      <span className="project-industry">{project.industry}</span>
                      <span className="project-year">{project.year}</span>
                    </div>

                    <h3>{project.title}</h3>
                    <p className="project-summary">{project.summary}</p>

                    <div className="project-metrics">
                      {project.metrics.map((metric) => (
                        <div key={metric.lbl}>
                          <div className="project-metric-num">{metric.val}</div>
                          <div className="project-metric-lbl">{metric.lbl}</div>
                        </div>
                      ))}
                    </div>

                    <div className="project-scope">
                      {project.scope.map((item) => (
                        <span key={item}>{item}</span>
                      ))}
                    </div>

                    <div className="tag-list">
                      {project.stack.map((tech) => (
                        <span className="tag" key={tech}>
                          {tech}
                        </span>
                      ))}
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>
          )}

          {nothingMatched && (
            <p className="portfolio-empty">
              Nothing in that category yet — try <button type="button" onClick={() => setFilter('all')}>everything</button>.
            </p>
          )}

          <Reveal className="portfolio-crosslink">
            <div>
              <h3>Want the full story behind a project?</h3>
              <p>The case studies go into the challenge, the approach and the numbers afterwards.</p>
            </div>
            <Link to="/case-studies" className="btn btn-gradient">
              Read the case studies →
            </Link>
          </Reveal>
        </div>
      </section>

      <CTA />
    </>
  );
}
