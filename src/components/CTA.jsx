import Reveal from './Reveal';

export default function CTA() {
  return (
    <section id="contact">
      <div className="wrap">
        <Reveal className="cta-band">
          <h2>Tell us what you're building. We'll tell you what it takes.</h2>
          <p>No discovery calls that go nowhere — just a straight answer on scope, timeline and team within 48 hours.</p>
          <div className="hero-ctas">
            <a href="mailto:hello@codestroom.com" className="btn btn-primary">
              hello@codestroom.com
            </a>
            <a href="#" className="btn btn-ghost">
              Book an intro call
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
