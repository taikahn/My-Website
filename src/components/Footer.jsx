import ContactForm from './ContactForm';

export default function Footer() {
  return (
    <footer id="contact" className="site-footer">
      <div className="container footer-shell card">
        <div className="footer-grid footer-grid-form">
          <div className="footer-copy">
            <p className="eyebrow">Start a conversation</p>
            <h2>Let's make something thoughtful and useful.</h2>
            <p className="footer-lede">
              Share a little about your project, team, or timeline and I'll have a clear starting point for the conversation.
            </p>
            <div className="contact-list contact-list-muted">
              <a href="https://www.linkedin.com/in/taikahn/" target="_blank" rel="noreferrer" aria-label="LinkedIn">
                <svg className="contact-icon" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                  <path fill="currentColor" d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.86 0-2.14 1.45-2.14 2.95v5.66H9.34V9h3.42v1.56h.05c.48-.9 1.64-1.85 3.38-1.85 3.62 0 4.29 2.38 4.29 5.48v6.26zM5.34 7.43a2.07 2.07 0 1 1 0-4.14 2.07 2.07 0 0 1 0 4.14zM7.12 20.45H3.56V9h3.56v11.45zM22.22 0H1.77C.79 0 0 .77 0 1.72v20.56C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.72V1.72C24 .77 23.2 0 22.22 0z"/>
                </svg>
                <span>LinkedIn</span>
              </a>
              <a href="https://github.com/taikahn" target="_blank" rel="noreferrer" aria-label="GitHub">
                <svg className="contact-icon" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                  <path fill="currentColor" d="M12 .5C5.65.5.5 5.65.5 12c0 5.08 3.29 9.39 7.86 10.91.58.11.79-.25.79-.56 0-.27-.01-1-.02-1.96-3.2.69-3.87-1.54-3.87-1.54-.52-1.33-1.28-1.68-1.28-1.68-1.04-.71.08-.7.08-.7 1.15.08 1.76 1.18 1.76 1.18 1.03 1.76 2.7 1.25 3.36.96.1-.74.4-1.25.73-1.54-2.55-.29-5.24-1.28-5.24-5.69 0-1.26.45-2.28 1.18-3.09-.12-.29-.51-1.46.11-3.05 0 0 .97-.31 3.18 1.18.92-.26 1.91-.39 2.9-.39.99 0 1.98.13 2.9.39 2.21-1.49 3.17-1.18 3.17-1.18.63 1.59.24 2.76.12 3.05.74.81 1.18 1.83 1.18 3.09 0 4.42-2.7 5.39-5.27 5.68.41.36.78 1.06.78 2.14 0 1.54-.01 2.78-.01 3.16 0 .31.21.68.8.56C20.22 21.39 23.5 17.08 23.5 12 23.5 5.65 18.35.5 12 .5z"/>
                </svg>
                <span>GitHub</span>
              </a>
            </div>
          </div>
          <ContactForm />
        </div>
      </div>
    </footer>
  );
}
