import { Link } from 'react-router-dom';
import useLightbox from '../hooks/useLightbox';

const galleryImages = [
  { src: '/assets/maverics-agent-entry.jpg', alt: 'Maverics entry flow' },
  { src: '/assets/agentic-interface-dark-light.jpg', alt: 'Maverics dashboard concepts' },
  { src: '/assets/maverics-data-visualization.jpg', alt: 'Maverics data visualization' },
  { src: '/assets/maverics-ai-webscreen.jpg', alt: 'Maverics AI web screen' },
  { src: '/assets/maverics-cards-ui.jpg', alt: 'Maverics cards UI' },
  { src: '/assets/agent-fabric-dark-full.jpg', alt: 'Agent fabric dark mode' },
];

export default function CaseStudyMaverics() {
  const { openAt, lightboxElement } = useLightbox({ images: galleryImages });

  return (
    <>
    <main>
      <section className="hero case-hero">
        <div className="container case-hero-layout">
          <div className="hero-copy">
            <p className="eyebrow">Case Study</p>
            <h1>Maverics Product Design</h1>
            <p className="lede">
              Over five years at Strata Identity, I helped shape the interface direction for Maverics Identity,
              a cloud-based security and identity orchestration platform used by enterprise customers.
            </p>
            <div className="hero-actions">
              <Link className="button button-primary" to="/#case-studies">Back to portfolio</Link>
            </div>
          </div>
          <div className="hero-visual card spotlight">
            <img src="/assets/agentic-interface-dark-light.jpg" alt="Maverics interface overview" />
          </div>
        </div>
      </section>

      <section className="section case-intro">
        <div className="container">
          <div className="metrics-strip">
            <div className="metric card"><span className="metric-label">Timeline</span><strong>5 years</strong></div>
            <div className="metric card"><span className="metric-label">Role</span><strong>Product Design / UX / UI</strong></div>
            <div className="metric card"><span className="metric-label">Platform</span><strong>Enterprise Identity SaaS</strong></div>
            <div className="metric card"><span className="metric-label">Customers</span><strong>Kroger, Motorola, Nokia, 3M</strong></div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container story-grid">
          <aside className="summary card">
            <div className="summary-inner">
              <img className="mini-logo" src="/assets/maverics-logo.svg" alt="Maverics logo" />
              <div><p className="summary-label">Role</p><p>Product Design, UX/UI, system thinking, interface evolution</p></div>
              <div><p className="summary-label">Focus</p><p>Enterprise SaaS, navigation, workflows, dashboards, production-ready design</p></div>
              <div><p className="summary-label">Responsibilities</p><p>Page layouts, hierarchy, flows, component behavior, consistency, and product maturity</p></div>
              <div><p className="summary-label">Impact</p><p>Supported a platform used by enterprise customers and helped move work from wireframes into shipped UI</p></div>
            </div>
          </aside>

          <div className="story-content">
            <div className="section-heading left">
              <p className="eyebrow">Overview</p>
              <h2>Designing for a complex enterprise product</h2>
            </div>
            <p>
              Maverics Identity required interface design that could support highly technical use cases while still
              feeling understandable, approachable, and consistent. My work helped move the product from exploratory
              wireframes into polished high-fidelity design and eventually into a live customer-facing experience.
            </p>
            <p>
              The challenge was not just making screens look better. It was creating a more usable product structure:
              clearer information hierarchy, more intentional navigation, stronger page layouts, and a repeatable visual
              language that could scale across new product areas as the platform evolved.
            </p>

            <div className="editorial-block card">
              <p className="quote-mark">"</p>
              <p className="editorial-quote">
                The work was less about decorating screens and more about helping a difficult product feel organized,
                learnable, and trustworthy at enterprise scale.
              </p>
            </div>

            <div className="section-heading left top-gap">
              <p className="eyebrow">Problem</p>
              <h2>Making technical workflows easier to understand</h2>
            </div>
            <p>
              Identity orchestration products contain dense information, multi-step setup paths, and deeply contextual
              controls. Without deliberate design structure, these experiences can quickly become visually noisy and hard
              to learn. A key challenge was finding ways to reduce cognitive load while still exposing the flexibility
              advanced users needed.
            </p>

            <div className="section-heading left top-gap">
              <p className="eyebrow">Approach</p>
              <h2>From rough concepts to scalable product patterns</h2>
            </div>
            <div className="detail-grid">
              <article className="detail-card card">
                <h3>Workflow clarity</h3>
                <p>I focused on making complex orchestration flows feel easier to understand through cleaner visual grouping, stronger hierarchy, better spacing, and more explicit layout decisions.</p>
              </article>
              <article className="detail-card card">
                <h3>Interface consistency</h3>
                <p>Reusable patterns across forms, panels, tables, navigation, and status-driven components helped create a more coherent product experience over time.</p>
              </article>
              <article className="detail-card card">
                <h3>Design to production</h3>
                <p>The work was done with an eye toward what could actually be built, maintained, and expanded by engineering as the live platform matured.</p>
              </article>
            </div>

            <div className="section-heading left top-gap">
              <p className="eyebrow">What I designed</p>
              <h2>Product areas and decisions</h2>
            </div>
            <div className="check-grid">
              <div className="check-item card"><strong>Navigation systems</strong><p>Improved orientation across product areas and more predictable wayfinding.</p></div>
              <div className="check-item card"><strong>Page structure</strong><p>More intentional hierarchy for dashboards, setup flows, forms, and dense admin views.</p></div>
              <div className="check-item card"><strong>Status-driven UI</strong><p>Patterns for feedback, state visibility, and operational confidence.</p></div>
              <div className="check-item card"><strong>Reusable components</strong><p>Shared visual language across panels, inputs, content groups, and layouts.</p></div>
            </div>
          </div>
        </div>
      </section>

      <section className="section section-muted">
        <div className="container">
          <div className="section-heading">
            <p className="eyebrow">Screens</p>
            <h2>Selected visuals</h2>
          </div>
          <div className="gallery-grid case-gallery">
            {galleryImages.map((img, i) => (
              <figure key={i} className="gallery-item card">
                <button className="gallery-button" type="button" onClick={() => openAt(i)}>
                  <img src={img.src} alt={img.alt} />
                </button>
              </figure>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container narrow-copy case-ending">
          <div className="section-heading left">
            <p className="eyebrow">Outcome</p>
            <h2>A more mature and production-ready design language</h2>
          </div>
          <p>
            This work helped establish a stronger visual and structural foundation for the product. Instead of isolated
            screen designs, the focus became a broader system of patterns that improved usability, reinforced brand and
            product quality, and supported enterprise customer expectations.
          </p>
          <p>
            The result was a more coherent interface language, stronger internal consistency across product surfaces,
            and a clearer foundation for future product growth.
          </p>
          <p>
            It also reinforced an important principle in product design: good interface work is not only about aesthetics.
            It is about helping complex products become easier to learn, easier to use, and easier to expand.
          </p>
        </div>
      </section>

      <footer className="case-footer">
        <div className="container case-footer-grid">
          <Link className="case-nav-card card" to="/case-study-design-systems">
            <span className="case-nav-label">Next case study</span>
            <strong>Complex Design Systems</strong>
          </Link>
          <div className="case-footer-cta card">
            <p className="eyebrow">Interested in this kind of work?</p>
            <h3>Let's talk about product design, systems, and interface strategy.</h3>
            <div className="hero-actions compact-actions">
              <Link className="button button-primary" to="/#contact">Contact me</Link>
              <Link className="button button-secondary" to="/#case-studies">Back to portfolio</Link>
            </div>
          </div>
        </div>
      </footer>
    </main>
    {lightboxElement}
    </>
  );
}
