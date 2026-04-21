export default function ThemeToggle({ theme, onToggle }) {
  const isLight = theme === 'light';

  return (
    <button
      className="theme-toggle"
      type="button"
      onClick={onToggle}
      aria-label={isLight ? 'Switch to dark mode' : 'Switch to light mode'}
      aria-pressed={isLight}
      title={isLight ? 'Switch to dark mode' : 'Switch to light mode'}
    >
      <span className={`theme-toggle-track${isLight ? ' is-light' : ''}`}>
        <span className="theme-toggle-icon theme-toggle-icon-moon" aria-hidden="true">
          <svg viewBox="0 0 24 24" focusable="false">
            <path d="M15.2 2.75a8.95 8.95 0 0 0-4.37 1.79 9.2 9.2 0 0 0-3.71 7.36c0 5.08 4.12 9.2 9.2 9.2 2.63 0 5-1.1 6.68-2.87a8.5 8.5 0 0 1-2.84.48c-4.77 0-8.64-3.87-8.64-8.64 0-2.83 1.37-5.33 3.48-6.89.06-.14.12-.28.2-.43Z" fill="currentColor" />
          </svg>
        </span>
        <span className="theme-toggle-thumb" aria-hidden="true">
          {isLight ? (
            <svg viewBox="0 0 24 24" focusable="false">
              <circle cx="12" cy="12" r="5" fill="currentColor" />
              <path d="M12 2.75v2.1M12 19.15v2.1M5.45 5.45l1.48 1.48M17.07 17.07l1.48 1.48M2.75 12h2.1M19.15 12h2.1M5.45 18.55l1.48-1.48M17.07 6.93l1.48-1.48" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
            </svg>
          ) : (
            <svg viewBox="0 0 24 24" focusable="false">
              <path d="M14.9 2.8c-1.08.1-2.15.47-3.14 1.12a9.2 9.2 0 0 0-3.97 7.59c0 5.08 4.12 9.2 9.2 9.2 2.24 0 4.3-.8 5.9-2.13-1.06.1-2.12-.03-3.13-.38a8.82 8.82 0 0 1-5.96-8.34c0-2.49.99-4.76 2.6-6.44-.49-.37-.98-.58-1.5-.62Z" fill="currentColor" />
            </svg>
          )}
        </span>
        <span className="theme-toggle-icon theme-toggle-icon-sun" aria-hidden="true">
          <svg viewBox="0 0 24 24" focusable="false">
            <circle cx="12" cy="12" r="4.25" fill="currentColor" />
            <path d="M12 1.75v2.5M12 19.75v2.5M4.75 4.75l1.8 1.8M17.45 17.45l1.8 1.8M1.75 12h2.5M19.75 12h2.5M4.75 19.25l1.8-1.8M17.45 6.55l1.8-1.8" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
          </svg>
        </span>
      </span>
    </button>
  );
}
