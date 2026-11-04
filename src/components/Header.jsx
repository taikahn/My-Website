import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import ThemeToggle from './ThemeToggle';
import useHatchClear from './useHatchClear';

export default function Header({ theme, onToggleTheme }) {
  const headerRef = useRef(null);
  const clearRef = useRef(null);

  // Show the header's shadow once anything is scrolling under it.
  useEffect(() => {
    const header = headerRef.current;
    const update = () => header?.classList.toggle('is-scrolled', window.scrollY > 4);
    update();
    window.addEventListener('scroll', update, { passive: true });
    return () => window.removeEventListener('scroll', update);
  }, []);

  useHatchClear(headerRef, clearRef);

  return (
    <header className="portfolio-header" ref={headerRef}>
      <span className="hatch-texture" aria-hidden="true"><span className="hatch-clear" ref={clearRef}><span className="hatch-blob" /></span></span>
      <a className="skip-link" href="#main-content">Skip to content</a>
      <div className="page-width header-inner">
        <Link className="portfolio-brand" to="/" aria-label="Tai Kahn home">tai kahn<span aria-hidden="true">.</span></Link>
        <nav className="portfolio-nav" aria-label="Main navigation">
          <Link to="/#work">Work</Link>
          <Link to="/#about">About</Link>
          <Link to="/#contact">Contact</Link>
          <ThemeToggle theme={theme} onToggle={onToggleTheme} />
        </nav>
      </div>
    </header>
  );
}
