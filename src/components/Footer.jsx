import { useRef } from 'react';
import ContactForm from './ContactForm';
import useHatchClear from './useHatchClear';

export default function Footer() {
  const footerRef = useRef(null);
  const clearRef = useRef(null);
  useHatchClear(footerRef, clearRef);

  return (
    <footer id="contact" className="portfolio-footer" ref={footerRef}>
      <span className="hatch-texture" aria-hidden="true"><span className="hatch-clear" ref={clearRef}><span className="hatch-blob" /></span></span>
      <div className="page-width">
        <div className="contact-editorial">
          <div className="contact-copy">
            <h2>Let’s talk.</h2>
            <p>I’m available for product design, interface work, and design systems. If you have a project in mind, send me a note.</p>
            <div className="footer-socials"><a href="https://www.linkedin.com/in/taikahn/" target="_blank" rel="noreferrer">LinkedIn ↗</a><a href="https://github.com/taikahn" target="_blank" rel="noreferrer">GitHub ↗</a></div>
          </div>
          <ContactForm />
        </div>
        <div className="footer-colophon"><span>Tai Kahn 2027</span><a href="#main-content">Back to top ↑</a></div>
      </div>
    </footer>
  );
}
