import { Link } from 'react-router-dom';
import Reveal from './Reveal';

export default function CTA() {
  return (
    <section id="contact">
      <div className="wrap">
        <Reveal className="cta-band">
          <h2>Tell us about your business. We promise not to yawn.</h2>
          <p>No 47-slide decks. No "let's circle back." Just a straight answer on scope, timeline and team — within 48 hours.</p>
          <div className="hero-ctas">
            <a href="mailto:contact@codestroom.com" className="btn btn-primary">
              contact@codestroom.com
            </a>
            <Link to="/contact" className="btn btn-ghost">
              Book an intro call
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
