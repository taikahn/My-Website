import { Link } from 'react-router-dom';

export default function NotFound() {
  return (
    <main id="top">
      <section className="hero premium-hero notfound-hero">
        <div className="container">
          <div className="notfound-inner">
            <p className="eyebrow">Error 404</p>
            <h1 className="notfound-title">This page doesn’t exist</h1>
            <p className="lede">
              The link is broken, the page was moved, or you took a wrong turn. Either way, there’s plenty to explore starting from the homepage.
            </p>
            <div className="hero-actions">
              <Link className="button button-primary" to="/">Back to case studies</Link>
              <Link className="button button-secondary" to="/#about">About me</Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
