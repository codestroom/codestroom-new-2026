import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer>
      <svg className="footer-motif" viewBox="0 0 200 300" aria-hidden="true" focusable="false">
        <defs>
          <linearGradient id="footerMotifGrad" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" style={{ stopColor: 'var(--pink)' }} />
            <stop offset="55%" style={{ stopColor: 'var(--purple)' }} />
            <stop offset="100%" style={{ stopColor: 'var(--blue)' }} />
          </linearGradient>
        </defs>
        <ellipse cx="100" cy="190" rx="55" ry="95" fill="url(#footerMotifGrad)" />
        <circle cx="55" cy="70" r="16" fill="url(#footerMotifGrad)" />
        <circle cx="81" cy="47" r="18" fill="url(#footerMotifGrad)" />
        <circle cx="107" cy="39" r="19" fill="url(#footerMotifGrad)" />
        <circle cx="133" cy="46" r="17" fill="url(#footerMotifGrad)" />
        <circle cx="155" cy="61" r="14" fill="url(#footerMotifGrad)" />
      </svg>
      <div className="wrap">
        <div className="footer-top">
          <div className="footer-brand">
            <Link to="/" className="brand">
              <img className="mark" src="/assets/logo.png" alt="Codestroom logo" width="34" height="34" />
              Codestroom
            </Link>
            <p>An international digital marketing company — one team across India, Canada, the USA and Europe.</p>
          </div>
          <div className="footer-col">
            <h4>Services</h4>
            <ul>
              <li><Link to="/services">Social Media Marketing</Link></li>
              <li><Link to="/services">Paid Advertising</Link></li>
              <li><Link to="/services">Local SEO &amp; Google Business</Link></li>
              <li><Link to="/services">Website &amp; Landing Pages</Link></li>
              <li><Link to="/services">Branding &amp; Content Creation</Link></li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>Company</h4>
            <ul>
              <li><Link to="/global-reach">Global Reach</Link></li>
              <li><Link to="/process">Our Process</Link></li>
              <li><Link to="/work">Work</Link></li>
              <li><Link to="/contact">Contact</Link></li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>Get in touch</h4>
            <ul>
              <li><a href="mailto:contact@codestroom.com">contact@codestroom.com</a></li>
              <li><a href="tel:+919464529126">+91 94645 29126</a></li>
              <li><a href="tel:+917973937507">+91 79739 37507</a></li>
              <li><Link to="/contact">Careers</Link></li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <span>© 2026 Codestroom. All rights reserved.</span>
          <div className="footer-bottom-right">
            <button
              type="button"
              className="back-to-top"
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            >
              ↑ Back to top
            </button>
            <div className="socials">
            <a href="#" aria-label="LinkedIn">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                <path
                  d="M4.98 3.5C4.98 4.88 3.87 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1 4.98 2.12 4.98 3.5zM.5 8h4V23h-4V8zM8.5 8h3.8v2.05h.05c.53-1 1.83-2.05 3.77-2.05C20.5 8 22 10.13 22 14.09V23h-4v-8.02c0-1.91-.03-4.37-2.66-4.37-2.66 0-3.07 2.08-3.07 4.23V23h-4V8z"
                  fill="currentColor"
                />
              </svg>
            </a>
            <a href="https://www.facebook.com/profile.php?id=61573358163342" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                <path
                  d="M22 12.06C22 6.5 17.52 2 12 2S2 6.5 2 12.06c0 5.02 3.66 9.18 8.44 9.94v-7.03H7.9v-2.91h2.54V9.85c0-2.51 1.49-3.89 3.77-3.89 1.09 0 2.24.2 2.24.2v2.46h-1.26c-1.24 0-1.63.77-1.63 1.56v1.88h2.78l-.44 2.91h-2.34V22c4.78-.76 8.44-4.92 8.44-9.94z"
                  fill="currentColor"
                />
              </svg>
            </a>
            <a href="https://www.instagram.com/codestroom/" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                <path
                  d="M12 2c2.7 0 3.06.01 4.12.06 1.06.05 1.79.22 2.43.47.66.26 1.21.6 1.76 1.15.5.5.85 1.05 1.14 1.71.25.63.42 1.36.47 2.43.05 1.06.06 1.42.06 4.18s-.01 3.06-.06 4.12c-.05 1.06-.22 1.79-.47 2.43a4.9 4.9 0 01-1.15 1.76c-.5.5-1.05.85-1.71 1.14-.63.25-1.36.42-2.43.47-1.06.05-1.42.06-4.18.06s-3.06-.01-4.12-.06c-1.06-.05-1.79-.22-2.43-.47a4.9 4.9 0 01-1.76-1.15 4.9 4.9 0 01-1.14-1.71c-.25-.63-.42-1.36-.47-2.43C2.01 15.06 2 14.7 2 12s.01-3.06.06-4.12c.05-1.06.22-1.79.47-2.43.26-.66.6-1.21 1.15-1.76A4.9 4.9 0 015.39 2.55c.63-.25 1.36-.42 2.43-.47C8.88 2.01 9.24 2 12 2zm0 5a5 5 0 100 10 5 5 0 000-10zm0 8.2a3.2 3.2 0 110-6.4 3.2 3.2 0 010 6.4zm5.2-8.4a1.17 1.17 0 100-2.34 1.17 1.17 0 000 2.34z"
                  fill="currentColor"
                />
              </svg>
            </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
