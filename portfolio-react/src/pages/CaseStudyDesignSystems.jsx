import { Link } from 'react-router-dom';
import useLightbox from '../hooks/useLightbox';

const galleryImages = [
  { src: '/assets/design-elements-items.jpg', alt: 'Design elements items' },
  { src: '/assets/design-elements-nav-icons.jpg', alt: 'Design elements navigation icons dark and light' },
  { src: '/assets/color-system-variables.jpg', alt: 'Variable color system dark and light' },
  { src: '/assets/design-elements-icons.jpg', alt: 'Design elements icons' },
  { src: '/assets/design-elements-search-card.jpg', alt: 'Design elements search card' },
  { src: '/assets/monogram-badges.jpg', alt: 'Monogram badges' },
  { src: '/assets/modals-dialogs.jpg', alt: 'Modals and dialogs' },
  { src: '/assets/search-range-filter.jpg', alt: 'Search range filter dark and light' },
  { src: '/assets/complex-color-systems.jpg', alt: 'Complex color systems' },
];

export default function CaseStudyDesignSystems() {
  const { openAt, lightboxElement } = useLightbox({ images: galleryImages });

  return (
    <>
    <main>
      <section className="hero case-hero">
        <div className="container case-hero-layout">
          <div className="hero-copy">
            <p className="eyebrow">Case Study</p>
            <h1>Complex Design Systems</h1>
            <p className="lede">
              Building design systems that serve both product design and engineering requires more than a UI library.
              It requires structure, naming discipline, states, theming logic, and practical documentation.
            </p>
            <div className="hero-actions">
              <Link className="button button-primary" to="/#case-studies">Back to portfolio</Link>
            </div>
          </div>
          <div className="hero-visual card spotlight">
            <img src="/assets/color-system-dark-light.jpg" alt="Design systems dark and light mode preview" />
          </div>
        </div>
      </section>

      <section className="section case-intro">
        <div className="container">
          <div className="metrics-strip">
            <div className="metric card"><span className="metric-label">Scope</span><strong>Multi-system UI library</strong></div>
            <div className="metric card"><span className="metric-label">Modes</span><strong>Dark / Light variables</strong></div>
            <div className="metric card"><span className="metric-label">Tools</span><strong>Figma + React reference</strong></div>
            <div className="metric card"><span className="metric-label">Audience</span><strong>Design + Engineering</strong></div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container story-grid">
          <aside className="summary card">
            <div className="summary-inner">
              <img className="mini-logo" src="/assets/strata-logo.svg" alt="Strata logo" />
              <div><p className="summary-label">Role</p><p>Design systems, Figma architecture, UI documentation, engineering alignment</p></div>
              <div><p className="summary-label">Focus</p><p>Variables, dark/light modes, shared patterns, live component states</p></div>
              <div><p className="summary-label">Deliverable</p><p>Designer-facing systems plus a React-specific developer version with commented live elements</p></div>
              <div><p className="summary-label">Goal</p><p>Reduce design inconsistency and make implementation more understandable and efficient</p></div>
            </div>
          </aside>

          <div className="story-content">
            <div className="section-heading left">
              <p className="eyebrow">Overview</p>
              <h2>Creating systems that reduce friction</h2>
            </div>
            <p>
              At Strata Identity I created multiple Figma-based design systems that helped organize the product UI into
              reusable, predictable, and scalable patterns. A major part of the work involved variables and token-like
              structures that made dark and light mode management far more efficient.
            </p>
            <p>
              Beyond the design library, I also built a React-oriented system view focused on what was actually live.
              That meant engineering could reference the most relevant elements in their current states rather than
              sorting through an overly abstract system disconnected from production reality.
            </p>

            <div className="editorial-block card">
              <p className="quote-mark">"</p>
              <p className="editorial-quote">
                A useful design system is not just organized. It is interpretable, maintainable, and close enough to
                production that teams can actually trust it.
              </p>
            </div>

            <div className="section-heading left top-gap">
              <p className="eyebrow">Problem</p>
              <h2>Bridging the gap between design libraries and shipped UI</h2>
            </div>
            <p>
              Many systems fail because they become either too abstract for developers or too incomplete for designers.
              The challenge here was to create a system that felt flexible enough for exploration while still being
              concrete enough to support implementation, theming, and daily product decisions.
            </p>

            <div className="section-heading left top-gap">
              <p className="eyebrow">System principles</p>
              <h2>Useful, documented, and close to implementation</h2>
            </div>
            <div className="detail-grid">
              <article className="detail-card card">
                <h3>Theme flexibility</h3>
                <p>Variables allowed visual updates to cascade cleanly across components, improving consistency and making multi-mode design much easier to manage.</p>
              </article>
              <article className="detail-card card">
                <h3>State coverage</h3>
                <p>Components were organized with attention to hover, selected, disabled, empty, and other real product states that often get overlooked in superficial systems.</p>
              </article>
              <article className="detail-card card">
                <h3>Developer clarity</h3>
                <p>A more practical, commented React version made it easier for engineering to understand intent, locate live UI pieces, and align implementation with design decisions.</p>
              </article>
            </div>

            <div className="section-heading left top-gap">
              <p className="eyebrow">What the system included</p>
              <h2>Structures that made the work reusable</h2>
            </div>
            <div className="check-grid">
              <div className="check-item card"><strong>Variables and modes</strong><p>Theme-aware foundations that supported fast transitions between dark and light interfaces.</p></div>
              <div className="check-item card"><strong>Component states</strong><p>Coverage for real-world interaction scenarios instead of idealized UI only.</p></div>
              <div className="check-item card"><strong>Live references</strong><p>A React-oriented version that reflected current implementation reality.</p></div>
              <div className="check-item card"><strong>Documentation value</strong><p>Clearer system communication for designers and engineers working together.</p></div>
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
            <h2>A design system that worked for both design and code</h2>
          </div>
          <p>
            The most valuable systems are the ones people actually use. This work aimed to make the system practical,
            navigable, and directly useful to multiple audiences: designers shaping new work and developers building and
            maintaining the shipped interface.
          </p>
          <p>
            The result was better consistency, more understandable component logic, and a stronger shared foundation for
            collaboration between design and engineering.
          </p>
          <p>
            By pairing visual consistency with implementation awareness, the system became more than a style guide. It
            became a shared product language.
          </p>
        </div>
      </section>

      <footer className="case-footer">
        <div className="container case-footer-grid">
          <Link className="case-nav-card card" to="/case-study-maverics">
            <span className="case-nav-label">Previous case study</span>
            <strong>Maverics Product Design</strong>
          </Link>
          <Link className="case-nav-card card" to="/case-study-ai-ui">
            <span className="case-nav-label">Next case study</span>
            <strong>Using AI Tools for Live UI</strong>
          </Link>
        </div>
      </footer>
    </main>
    {lightboxElement}
    </>
  );
}
