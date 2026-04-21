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
              <a href="https://www.linkedin.com/in/taikahn/" target="_blank" rel="noreferrer">LinkedIn</a>
            </div>
          </div>
          <ContactForm />
        </div>
      </div>
    </footer>
  );
}
