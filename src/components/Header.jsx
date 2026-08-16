import { useEffect, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';

const NAV_LINKS = [
  { to: '/services', label: 'Services' },
  { to: '/global-reach', label: 'Global Reach' },
  { to: '/blend-lab', label: 'Blend Lab' },
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

  return (
    <header className={scrolled ? 'scrolled' : ''}>
      <nav className="wrap">
        <Link to="/" className="brand">
          <img className="mark" src="/assets/logo.png" alt="Codestroom logo" width="34" height="34" />
          Codestroom
        </Link>
        <ul className={`nav-links ${menuOpen ? 'mobile-open' : ''}`}>
          {NAV_LINKS.map((link) => (
            <li key={link.to}>
              <NavLink
                to={link.to}
                className={({ isActive }) => (isActive ? 'active' : undefined)}
                onClick={() => setMenuOpen(false)}
              >
                {link.label}
              </NavLink>
            </li>
          ))}
        </ul>
        <Link to="/contact" className="btn btn-gradient nav-cta">
          Start a project
        </Link>
        <button
          className="menu-toggle"
          aria-label="Toggle menu"
          onClick={() => setMenuOpen((open) => !open)}
        >
          <span></span>
        </button>
      </nav>
    </header>
  );
}
