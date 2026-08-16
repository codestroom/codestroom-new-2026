import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer>
      <div className="wrap">
        <div className="footer-top">
          <div className="footer-brand">
            <Link to="/" className="brand">
              <img className="mark" src="/assets/logo.png" alt="Codestroom logo" width="34" height="34" />
              Codestroom
            </Link>
            <p>An international IT and digital marketing company — one team for what you build and how you grow.</p>
          </div>
          <div className="footer-col">
            <h4>Services</h4>
            <ul>
              <li><Link to="/services">Web &amp; Product Engineering</Link></li>
              <li><Link to="/services">Mobile Apps</Link></li>
              <li><Link to="/services">Cloud &amp; IT Infrastructure</Link></li>
              <li><Link to="/services">Performance Marketing</Link></li>
              <li><Link to="/services">SEO &amp; Content</Link></li>
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
              <li><a href="mailto:hello@codestroom.com">hello@codestroom.com</a></li>
              <li><a href="tel:+10000000000">+1 (000) 000-0000</a></li>
              <li><Link to="/contact">Careers</Link></li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <span>© 2026 Codestroom. All rights reserved.</span>
          <div className="socials">
            <a href="#" aria-label="LinkedIn">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                <path
                  d="M4.98 3.5C4.98 4.88 3.87 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1 4.98 2.12 4.98 3.5zM.5 8h4V23h-4V8zM8.5 8h3.8v2.05h.05c.53-1 1.83-2.05 3.77-2.05C20.5 8 22 10.13 22 14.09V23h-4v-8.02c0-1.91-.03-4.37-2.66-4.37-2.66 0-3.07 2.08-3.07 4.23V23h-4V8z"
                  fill="currentColor"
                />
              </svg>
            </a>
            <a href="#" aria-label="Twitter / X">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                <path
                  d="M18.9 2H22l-7.6 8.7L23.3 22h-7.1l-5.6-6.9L4.2 22H1l8.2-9.3L1 2h7.3l5 6.3L18.9 2zM17.6 20h1.9L7.5 4H5.4L17.6 20z"
                  fill="currentColor"
                />
              </svg>
            </a>
            <a href="#" aria-label="Instagram">
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
    </footer>
  );
}
