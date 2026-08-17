import { useEffect, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';

const NAV_LINKS = [
  { to: '/services', label: 'Services' },
  { to: '/global-reach', label: 'Global Reach' },
  { to: '/process', label: 'Process' },
  { to: '/work', label: 'Work' },
  { to: '/contact', label: 'Contact' },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className={scrolled ? 'scrolled' : ''}>
      <svg className="header-motif" viewBox="0 0 200 240" aria-hidden="true" focusable="false">
        <defs>
          <linearGradient id="headMotifGrad" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" style={{ stopColor: 'var(--pink)' }} />
            <stop offset="55%" style={{ stopColor: 'var(--purple)' }} />
            <stop offset="100%" style={{ stopColor: 'var(--blue)' }} />
          </linearGradient>
        </defs>
        <path d="M78 168 Q76 200 68 236 L132 236 Q124 200 122 168 Z" fill="url(#headMotifGrad)" />
        <ellipse cx="100" cy="94" rx="62" ry="78" fill="url(#headMotifGrad)" />
      </svg>
      <nav className="wrap">
        <Link to="/" className="brand" onClick={closeMenu}>
          <img className="mark" src="/assets/logo.png" alt="Codestroom logo" width="34" height="34" />
          Codestroom
        </Link>
        <ul className={`nav-links ${menuOpen ? 'mobile-open' : ''}`}>
          {NAV_LINKS.map((link) => (
            <li key={link.to}>
              <NavLink
                to={link.to}
                className={({ isActive }) => (isActive ? 'active' : undefined)}
                onClick={closeMenu}
              >
                {link.label}
              </NavLink>
            </li>
          ))}
          <li className="nav-links-cta">
            <Link to="/contact" className="btn btn-gradient" onClick={closeMenu}>
              Start a project →
            </Link>
          </li>
        </ul>
        <Link to="/contact" className="btn btn-gradient nav-cta">
          Start a project
        </Link>
        <button
          className={`menu-toggle ${menuOpen ? 'open' : ''}`}
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((open) => !open)}
        >
          <span></span>
        </button>
      </nav>
    </header>
  );
}
