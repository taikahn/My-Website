import { Link } from 'react-router-dom';
import ThemeToggle from './ThemeToggle';

export default function Header({ theme, onToggleTheme }) {
  return (
    <header className="portfolio-header">
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
