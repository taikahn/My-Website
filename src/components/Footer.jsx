import ContactForm from './ContactForm';

export default function Footer() {
  return (
    <footer id="contact" className="portfolio-footer">
      <div className="page-width">
        <div className="contact-editorial">
          <div className="contact-copy">
            <h2>Something<br />worth making?</h2>
            <p>Tell me what you’re working on, where it’s getting complicated, or what you’d like to make better.</p>
            <div className="footer-socials"><a href="https://www.linkedin.com/in/taikahn/" target="_blank" rel="noreferrer">LinkedIn ↗</a><a href="https://github.com/taikahn" target="_blank" rel="noreferrer">GitHub ↗</a></div>
          </div>
          <ContactForm />
        </div>
        <div className="footer-colophon"><span>© {new Date().getFullYear()} Tai Kahn</span><span>Designed with judgment. Built with agents.</span><a href="#main-content">Back to top ↑</a></div>
      </div>
    </footer>
  );
}
