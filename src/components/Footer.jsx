import ContactForm from './ContactForm';

export default function Footer() {
  return (
    <footer id="contact" className="portfolio-footer">
      <div className="page-width">
        <div className="contact-editorial">
          <div className="contact-copy">
            <h2>Let’s talk.</h2>
            <p>I’m available for product design, interface work, and design systems. If you have a project in mind, send me a note.</p>
            <div className="footer-socials"><a href="https://www.linkedin.com/in/taikahn/" target="_blank" rel="noreferrer">LinkedIn ↗</a><a href="https://github.com/taikahn" target="_blank" rel="noreferrer">GitHub ↗</a></div>
          </div>
          <ContactForm />
        </div>
        <div className="footer-colophon"><span>© {new Date().getFullYear()} Tai Kahn</span><a href="#main-content">Back to top ↑</a></div>
      </div>
    </footer>
  );
}
