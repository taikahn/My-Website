import { useState, useEffect, useCallback } from 'react';
import { Link, useLocation } from 'react-router-dom';
import ThemeToggle from './ThemeToggle';

const navLinks = [
  { label: 'Case Studies', to: '/#case-studies' },
  { label: 'About', to: '/#about' },
  { label: 'Expertise', to: '/#services' },
  { label: 'Gallery', to: '/#gallery' },
  { label: 'Skills', to: '/#skills' },
  { label: 'Contact', to: '/#contact' },
];

export default function Header({ theme, onToggleTheme }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  const closeMenu = useCallback(() => {
    setMenuOpen(false);
    document.body.classList.remove('menu-open');
  }, []);

  const toggleMenu = () => {
    setMenuOpen((prev) => {
      const next = !prev;
      document.body.classList.toggle('menu-open', next);
      return next;
    });
  };

  useEffect(() => {
    const handleResize = () => closeMenu();
    const handleEscape = (e) => { if (e.key === 'Escape') closeMenu(); };
    window.addEventListener('resize', handleResize);
    document.addEventListener('keydown', handleEscape);
    return () => {
      window.removeEventListener('resize', handleResize);
      document.removeEventListener('keydown', handleEscape);
    };
  }, [closeMenu]);

  const handleNavClick = (e, to) => {
    closeMenu();
    if (to.startsWith('/#')) {
      const hash = to.slice(1);
      if (location.pathname === '/') {
        e.preventDefault();
        const el = document.querySelector(hash);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <header className="site-header">
      <div className="container nav">
        <Link className="brand" to="/">Tai Kahn</Link>
        <button
          className="menu-toggle"
          type="button"
          aria-expanded={menuOpen}
          aria-controls="site-nav"
          aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
          onClick={toggleMenu}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
        <nav id="site-nav" className={`site-nav${menuOpen ? ' is-open' : ''}`}>
          {navLinks.map(({ label, to }) => (
            <Link key={to} to={to} onClick={(e) => handleNavClick(e, to)}>
              {label}
            </Link>
          ))}
          <ThemeToggle theme={theme} onToggle={onToggleTheme} />
        </nav>
      </div>
    </header>
  );
}
