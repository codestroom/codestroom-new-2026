import { lazy, Suspense } from 'react';
import { Link } from 'react-router-dom';
import Reveal from './Reveal';

// three.js is ~180kb gzipped — keep it out of the entry chunk, the flat mark
// stands in until the 3d one is ready
const HeroLogo3D = lazy(() => import('./HeroLogo3D'));

export default function Hero() {
  return (
    <section className="hero">
      <div className="wrap hero-grid">
        <div>
          <Reveal as="span" immediate className="eyebrow">
            <span className="dot"></span>IT &amp; Digital Marketing, Under One Roof
          </Reveal>
          <Reveal as="h1" immediate>
            Where engineering meets <span className="grad">demand.</span>
          </Reveal>
          <Reveal as="p" immediate className="lead">
            Codestroom builds the software that runs your business and the marketing that grows
            it — one international team, one roadmap, no handoffs lost in translation.
          </Reveal>
          <Reveal as="div" immediate className="hero-ctas">
            <Link to="/contact" className="btn btn-primary">
              Talk to our team →
            </Link>
            <Link to="/services" className="btn btn-ghost">
              See what we do
            </Link>
          </Reveal>
          <Reveal as="div" immediate className="hero-meta">
            <div>
              <span className="num">140+</span>
              <span className="lbl">Products shipped</span>
            </div>
            <div>
              <span className="num">27</span>
              <span className="lbl">Countries served</span>
            </div>
            <div>
              <span className="num">4.9/5</span>
              <span className="lbl">Average client rating</span>
            </div>
          </Reveal>
        </div>
        <Reveal as="div" immediate className="blend-stage" aria-hidden="true">
          <Suspense fallback={<img className="hero-logo" src="/assets/logo.png" alt="" />}>
            <HeroLogo3D />
          </Suspense>
        </Reveal>
      </div>
    </section>
  );
}
