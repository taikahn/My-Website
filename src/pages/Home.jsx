import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import Footer from '../components/Footer';
import useLightbox from '../hooks/useLightbox';
import useHeroTyping from '../hooks/useHeroTyping';

const HERO_TITLE = 'Design for complex software, systems, and modern web experiences.';

const galleryImages = [
  { src: '/assets/maverics-agent-entry.jpg', alt: 'Maverics agentic entry flow' },
  { src: '/assets/agentic-interface-dark-light.jpg', alt: 'Agentic interface dark and light mode' },
  { src: '/assets/agent-fabric-dark.jpg', alt: 'Agent fabric dark mode' },
  { src: '/assets/maverics-data-visualization.jpg', alt: 'Maverics data visualization' },
  { src: '/assets/maverics-ai-webscreen.jpg', alt: 'Maverics AI web screen' },
  { src: '/assets/maverics-cards-ui.jpg', alt: 'Maverics cards UI' },
  { src: '/assets/agent-fabric-dark-full.jpg', alt: 'Agent fabric dark mode full' },
  { src: '/assets/total-energy-group.jpg', alt: 'Total Energy Group website' },
  { src: '/assets/signet-capital-advisors.jpg', alt: 'Signet Capital Advisors website' },
  { src: '/assets/design-elements-items.jpg', alt: 'Design elements items' },
  { src: '/assets/complex-color-systems.jpg', alt: 'Complex color systems' },
  { src: '/assets/color-system-variables.jpg', alt: 'Variable color system dark and light' },
  { src: '/assets/artwork-three.jpg', alt: 'Artwork sample one', portrait: true },
  { src: '/assets/artwork-one.jpg', alt: 'Artwork sample two', portrait: true },
  { src: '/assets/design-elements-nav-icons.jpg', alt: 'Design elements navigation icons', portrait: true },
  { src: '/assets/design-elements-icons.jpg', alt: 'Design elements icons', portrait: true },
  { src: '/assets/design-exploration-one.png', alt: 'Design exploration one', portrait: true },
  { src: '/assets/design-exploration-two.png', alt: 'Design exploration two', portrait: true },
  { src: '/assets/design-elements-search-card.jpg', alt: 'Design elements search card', portrait: true },
  { src: '/assets/monogram-badges.jpg', alt: 'Monogram badges', portrait: true },
  { src: '/assets/unsplash-photography-views.jpg', alt: 'Unsplash photography views' },
  { src: '/assets/colorado-snow-guitar.jpg', alt: 'Colorado snow guitar photography' },
  { src: '/assets/landscape-photography.jpg', alt: 'Landscape photography' },
  { src: '/assets/modals-dialogs.jpg', alt: 'Modals and dialogs', portrait: true },
  { src: '/assets/search-range-filter.jpg', alt: 'Search range filter', portrait: true },
  { src: '/assets/artwork-two.jpg', alt: 'Artwork sample three', portrait: true },
];

export default function Home() {
  const { openAt, lightboxElement } = useLightbox({ images: galleryImages });
  const { titleRef, baseRef, overlayRef } = useHeroTyping(HERO_TITLE);

  return (
    <>
      <main id="top">
        {/* Hero */}
        <section className="hero premium-hero">
          <div className="container hero-grid premium-hero-grid">
            <div className="hero-copy">
              <p className="eyebrow">Visual Design Portfolio 2026</p>
              <h1 className="hero-title" ref={titleRef}>
                <span className="hero-title-base" ref={baseRef}>{HERO_TITLE}</span>
                <span className="hero-title-overlay" ref={overlayRef} aria-hidden="true"></span>
              </h1>
              <p className="lede">
                I help turn complicated products into clearer, more usable experiences through interface design,
                systems thinking, responsive execution, and close alignment with how things actually get built.
              </p>
              <div className="hero-actions">
                <a className="button button-primary" href="#case-studies">View case studies</a>
                <a className="button button-secondary" href="#about">About me</a>
              </div>
              <div className="hero-proof">
                <span>Apple</span>
                <span>Ping Identity</span>
                <span>Strata Identity</span>
                <span>Enterprise SaaS</span>
              </div>
            </div>
            <div className="hero-visual-stack">
              <div className="hero-visual card spotlight hero-main-visual">
                <img src="/assets/agentic-interface-dark-light.jpg" alt="Agentic interface designs in dark and light mode" />
              </div>
              <div className="hero-side-stat card">
                <span className="metric-label">Focus</span>
                <strong>UX/UI, design systems, product thinking, responsive interfaces</strong>
              </div>
            </div>
          </div>
        </section>

        {/* Case Studies */}
        <section id="case-studies" className="section">
          <div className="container">
            <div className="section-heading section-heading-split">
              <div>
                <p className="eyebrow">Featured work</p>
                <h2>Selected case studies</h2>
              </div>
              <p className="section-intro">
                A selection of product, systems, and AI workflow work focused on complex software, implementation-aware design,
                and clearer user experience at scale.
              </p>
            </div>
            <div className="case-study-grid">
              <article className="case-card card premium-case-card">
                <div className="case-image">
                  <img src="/assets/agentic-interface-dark-light.jpg" alt="Maverics product design case study preview" />
                </div>
                <div className="case-body">
                  <div className="case-meta-row"><span>Enterprise SaaS</span><span>5 years</span></div>
                  <img className="mini-logo" src="/assets/maverics-logo.svg" alt="Maverics logo" />
                  <h3>Case Study: Maverics Product Design</h3>
                  <p>
                    Led interface evolution for a next-generation identity orchestration platform, helping move the product
                    from exploratory wireframes into a more mature, production-ready enterprise experience.
                  </p>
                  <ul className="case-highlights">
                    <li>Navigation and workflow clarity</li>
                    <li>Reusable product patterns</li>
                    <li>Design decisions aligned with implementation</li>
                  </ul>
                  <Link className="button button-primary" to="/case-study-maverics">Read case study →</Link>
                </div>
              </article>

              <article className="case-card card premium-case-card">
                <div className="case-image">
                  <img src="/assets/color-system-dark-light.jpg" alt="Complex design systems preview" />
                </div>
                <div className="case-body">
                  <div className="case-meta-row"><span>Design Systems</span><span>Figma + React</span></div>
                  <img className="mini-logo" src="/assets/strata-logo.svg" alt="Strata logo" />
                  <h3>Case Study: Complex Design Systems</h3>
                  <p>
                    Built scalable design systems with variables, theme logic, component state coverage, and a more useful
                    developer-facing reference tied closely to shipped product reality.
                  </p>
                  <ul className="case-highlights">
                    <li>Dark / light mode variables</li>
                    <li>Component state coverage</li>
                    <li>Shared language for design and engineering</li>
                  </ul>
                  <Link className="button button-primary" to="/case-study-design-systems">Read case study →</Link>
                </div>
              </article>

              <article className="case-card card premium-case-card">
                <div className="case-image">
                  <img src="/assets/ai-assisted-react-workflow.jpg" alt="AI tools for live user interfaces preview" />
                </div>
                <div className="case-body">
                  <div className="case-meta-row"><span>AI Workflow</span><span>React / Vite</span></div>
                  <img className="mini-logo" src="/assets/strata-logo.svg" alt="Strata logo" />
                  <h3>Case Study: Using AI Tools for Live User Interfaces</h3>
                  <p>
                    Explored an AI-assisted workflow for designing directly in code, making responsive behavior,
                    interactions, and implementation intent far more visible during the design process.
                  </p>
                  <ul className="case-highlights">
                    <li>Live responsive prototyping</li>
                    <li>Stronger design-to-dev handoff</li>
                    <li>Implementation-aware exploration and freedom</li>
                  </ul>
                  <Link className="button button-primary" to="/case-study-ai-ui">Read case study →</Link>
                </div>
              </article>
            </div>
          </div>
        </section>

        {/* About */}
        <section id="about" className="section section-muted">
          <div className="container about-grid">
            <div className="about-copy">
              <div className="section-heading left">
                <p className="eyebrow">About</p>
                <h2>Adaptive, experienced, and deeply comfortable with complex products</h2>
              </div>
              <p>
                I am a highly adaptive and experienced creative whose career began at Apple, where I helped implement
                designs using code into products like iTunes and Mac OS X. At Ping Identity, I designed the interface for
                and provided front-end code for an industry-first GUI of PingFederate, their flagship identity product.
              </p>
              <p>
                Over the last five years at Strata Identity, I designed the interface for their cloud-based Maverics
                Identity Orchestration Platform in Figma, helping progress the product from wireframes through hi-fi pages
                and ultimately into a live customer-facing platform.
              </p>
              <p>
                Across that work I designed each stage of the interface, organized complex pathways, built prototypes,
                created multiple design systems, maintained variable color systems for dark and light modes, and helped the
                team continually improve user experience through iteration, research, feedback, and testing.
              </p>
              <p>
                Outside of work I enjoy the mountains, riding bicycles, skateboarding, making music, and flying FPV
                drones.
              </p>
            </div>
            <aside className="about-panel card">
              <div className="about-panel-inner">
                <div>
                  <p className="summary-label">Background</p>
                  <p>Apple, Ping Identity, Strata Identity, startups, product interfaces, web, and visual design.</p>
                </div>
                <div>
                  <p className="summary-label">Strengths</p>
                  <p>Complex software, design systems, implementation awareness, visual quality, and cross-functional collaboration.</p>
                </div>
                <div>
                  <p className="summary-label">Availability</p>
                  <p>Currently available for product design, UX/UI, systems, and modern web interface work.</p>
                </div>
              </div>
            </aside>
          </div>
        </section>

        {/* Testimonials */}
        <section className="section">
          <div className="container">
            <div className="section-heading">
              <p className="eyebrow">Recommendations</p>
              <h2>What collaborators have said</h2>
            </div>
            <div className="testimonial-grid">
              <article className="testimonial card">
                <p className="testimonial-quote">
                  Over the past four+ years, Tai has been one of the most impactful and reliable Senior UX/UI Designers I've
                  had the privilege of working with. He quickly became indispensable—designing clean, scalable, and
                  thoughtful user experiences for an exceptionally complex product.
                </p>
                <p className="testimonial-credit">Jason Bowers — Lead Experience &amp; Creative Designer at Strata Identity</p>
              </article>
              <article className="testimonial card">
                <p className="testimonial-quote">
                  What sets Tai apart is that he thinks like both a designer and a builder. He cares deeply about how
                  something looks and feels, but he's equally focused on whether it works, scales, and delivers value.
                </p>
                <p className="testimonial-credit">Michel Khalil — Principal, Creative Director at theDESIGNsnobs</p>
              </article>
              <article className="testimonial card">
                <p className="testimonial-quote">
                  Tai has an expert level understanding of the Identity domain and excellent design skills, always
                  delivering with high-quality aesthetics while adapting to products that evolve rapidly.
                </p>
                <p className="testimonial-credit">Darren Platt — VP of Engineering at Strata Identity</p>
              </article>
            </div>
          </div>
        </section>

        {/* Expertise */}
        <section id="services" className="section section-muted">
          <div className="container">
            <div className="section-heading">
              <p className="eyebrow">What I do</p>
              <h2>Core areas of expertise</h2>
            </div>
            <div className="three-up">
              <article className="info-card card">
                <h3>Product Design</h3>
                <p>
                  I design interfaces and product flows with a strong focus on clarity, usability, hierarchy, navigation,
                  and systems that can scale as products grow more complex.
                </p>
              </article>
              <article className="info-card card">
                <h3>Web Design</h3>
                <p>
                  I build and design websites across platforms including WordPress, Elementor, Shopify, Squarespace,
                  HTML/CSS, and modern front-end workflows, balancing communication, speed, quality, and practicality.
                </p>
              </article>
              <article className="info-card card">
                <h3>Photography</h3>
                <p>
                  I use product and landscape photography as part of the overall design toolkit, helping bring visual
                  originality and stronger storytelling into digital experiences.
                </p>
              </article>
            </div>
          </div>
        </section>

        {/* Gallery */}
        <section id="gallery" className="section">
          <div className="container">
            <div className="section-heading section-heading-split">
              <div>
                <p className="eyebrow">Visual examples</p>
                <h2>Portfolio gallery</h2>
              </div>
              <p className="section-intro">
                A broader mix of interface explorations, web work, systems thinking, and visual experiments across product,
                photography, and digital design.
              </p>
            </div>
            <div className="gallery-grid lightbox-gallery">
              {galleryImages.map((img, i) => (
                <figure key={i} className={`gallery-item card${img.portrait ? ' portrait' : ''}`}>
                  <button className="gallery-button" type="button" onClick={() => openAt(i)}>
                    <img src={img.src} alt={img.alt} />
                  </button>
                </figure>
              ))}
            </div>
          </div>
        </section>

        {/* Skills */}
        <section id="skills" className="section section-muted">
          <div className="container skills-layout">
            <div>
              <div className="section-heading left">
                <p className="eyebrow">Toolkit</p>
                <h2>Software experience</h2>
              </div>
              <div className="pill-group">
                {[
                  'MacOS',
                  'Windows',
                  'Linux',
                  'Claude',
                  'Figma',
                  'Adobe Creative Cloud',
                  'Affinity',
                  'Cursor',
                  'VSCode',
                  'WordPress',
                  'HTML',
                  'CSS',
                  'JS',
                  'GitHub',
                  'Git',
                  'NPM',
                  'Node',
                  'Vite',
                  'React',
                  'Terminal',
                  'CLI',
                  'Rust',
                  'Tauri',
                  'Glint',
                  'Virtual Machines',
                  'Docker',
                  'Miro',
                  'Canva',
                  'Adobe Photoshop',
                  'Adobe Illustrator',
                  'Adobe XD',
                  'Adobe Premiere',
                  'Final Cut',
                  'Logic Pro'
                ].map((s) => (
                  <span key={s}>{s}</span>
                ))}
              </div>
            </div>
            <div>
              <div className="section-heading left">
                <p className="eyebrow">Capabilities</p>
                <h2>Skills and experience</h2>
              </div>
              <div className="pill-group">
                {['Product Design','Design Systems','User Experience','User Interfaces','Agentic Software Design','AI Agents','UI Prototyping','Systems and Stacks','Graphic Design','Visual Communication','Color Theory','Design Systems','Design Principles','Communication','Collaboration','Accessibility','Best Practices','Web Design & Development','Responsive Design','Mobile Web','Typography','Photography','Videography','Video Editing','3D Printing'].map((s) => (
                  <span key={s}>{s}</span>
                ))}
              </div>
            </div>
          </div>
        </section>


      </main>

      <Footer />
      {lightboxElement}
    </>
  );
}
