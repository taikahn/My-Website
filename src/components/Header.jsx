import { useState, useEffect, useCallback, useRef } from 'react';
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
  const [hoveredIndex, setHoveredIndex] = useState(-1);
  const location = useLocation();
  const navRef = useRef(null);
  const linkRefs = useRef([]);
  const indicatorRef = useRef(null);
  const isMobileNav = useRef(false);

  const NAV_BREAKPOINT = 1200;

  const checkMobileNav = useCallback(() => {
    isMobileNav.current = window.innerWidth <= NAV_BREAKPOINT;
  }, []);

  useEffect(() => {
    checkMobileNav();
    window.addEventListener('resize', checkMobileNav);
    return () => window.removeEventListener('resize', checkMobileNav);
  }, [checkMobileNav]);

  const updateIndicator = useCallback((index) => {
    const link = linkRefs.current[index];
    const indicator = indicatorRef.current;
    if (!link || !indicator) return;

    if (isMobileNav.current) {
      indicator.style.left = '16px';
      indicator.style.right = '16px';
      indicator.style.width = '';
      indicator.style.marginTop = '0';
      indicator.style.top = `${link.offsetTop}px`;
      indicator.style.height = `${link.offsetHeight}px`;
    } else {
      indicator.style.top = '50%';
      indicator.style.marginTop = '-18px';
      indicator.style.height = '36px';
      indicator.style.left = `${link.offsetLeft}px`;
      indicator.style.width = `${link.offsetWidth}px`;
    }
    indicator.style.opacity = '1';
  }, []);

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
    const handleResize = () => { closeMenu(); checkMobileNav(); };
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
        <div className="header-theme-toggle">
          <ThemeToggle theme={theme} onToggle={onToggleTheme} />
        </div>
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
        <nav
          id="site-nav"
          ref={navRef}
          className={`site-nav${menuOpen ? ' is-open' : ''}`}
          onMouseLeave={() => { setHoveredIndex(-1); if (indicatorRef.current) indicatorRef.current.style.opacity = '0'; }}
        >
          {navLinks.map(({ label, to }, i) => (
            <Link
              key={to}
              ref={(el) => { linkRefs.current[i] = el; }}
              to={to}
              onMouseEnter={() => { setHoveredIndex(i); updateIndicator(i); }}
              onClick={(e) => handleNavClick(e, to)}
            >
              {label}
            </Link>
          ))}
          <div className="nav-indicator" ref={indicatorRef} />
          <ThemeToggle theme={theme} onToggle={onToggleTheme} />
        </nav>
      </div>
    </header>
  );
}
