import { Link } from 'react-router-dom';

export default function CaseStudyAiUi() {
  return (
    <main>
      <section className="hero case-hero">
        <div className="container case-hero-layout">
          <div className="hero-copy">
            <p className="eyebrow">Case Study</p>
            <h1>Using AI Tools for Live User Interfaces</h1>
            <p className="lede">
              This experiment explored what happens when interface design moves directly into code using AI-assisted
              workflows, real components, and live responsive behavior instead of static mockups alone.
            </p>
            <div className="hero-actions">
              <a className="button button-primary" href="https://taikahn.github.io/ui-via-ai-react/" target="_blank" rel="noreferrer">View live project</a>
              <Link className="button button-secondary" to="/#case-studies">Back to portfolio</Link>
            </div>
          </div>
          <div className="hero-visual card spotlight">
            <img src="/assets/ai-assisted-react-workflow.jpg" alt="AI assisted live UI design preview" />
          </div>
        </div>
      </section>

      <section className="section case-intro">
        <div className="container">
          <div className="metrics-strip">
            <div className="metric card"><span className="metric-label">Workflow</span><strong>AI-assisted prototyping</strong></div>
            <div className="metric card"><span className="metric-label">Environment</span><strong>Cursor / VSCode</strong></div>
            <div className="metric card"><span className="metric-label">Build</span><strong>React / Vite</strong></div>
            <div className="metric card"><span className="metric-label">Value</span><strong>Faster design-to-dev handoff</strong></div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container story-grid">
          <aside className="summary card">
            <div className="summary-inner">
              <div><p className="summary-label">Role</p><p>Design exploration, AI-assisted prototyping, React-based interface iteration</p></div>
              <div><p className="summary-label">Tools</p><p>Cursor, VSCode, Claude, Gemini, Opus, React, Vite</p></div>
              <div><p className="summary-label">Focus</p><p>Real layouts, breakpoints, menus, interactions, and faster design-to-dev handoff</p></div>
              <div><p className="summary-label">Outcome</p><p>A practical demonstration of how designers can iterate in code without losing design intent</p></div>
            </div>
          </aside>

          <div className="story-content">
            <div className="section-heading left">
              <p className="eyebrow">Overview</p>
              <h2>Designing interfaces directly in the medium of the product</h2>
            </div>
            <p>
              Rather than relying only on static mockups or extensive Figma prototypes, this experiment used AI tools
              inside a coding environment to quickly generate, refine, and test live interface ideas in React.
            </p>
            <p>
              That made it easier to focus on the things that matter in actual use: mobile and desktop layouts,
              breakpoints, grid behavior, hover states, menus, navigation systems, and interactions. Instead of
              describing behavior abstractly, the interface could be experienced directly.
            </p>

            <div className="editorial-block card">
              <p className="quote-mark">"</p>
              <p className="editorial-quote">
                The most exciting part was not speed alone. It was the ability to think like a designer while shaping
                something engineering could immediately inspect, understand, and extend.
              </p>
            </div>

            <div className="section-heading left top-gap">
              <p className="eyebrow">Problem</p>
              <h2>Static design artifacts can hide real interaction behavior</h2>
            </div>
            <p>
              Traditional design workflows often require multiple translation steps between concept, prototype, handoff,
              and implementation. Important qualities like responsiveness, interaction edge cases, and real navigation
              behavior can remain partially unresolved until late in development. This experiment explored a more direct
              path.
            </p>

            <div className="section-heading left top-gap">
              <p className="eyebrow">Why it matters</p>
              <h2>A faster and more transparent workflow</h2>
            </div>
            <div className="detail-grid">
              <article className="detail-card card">
                <h3>Live responsiveness</h3>
                <p>Working in code makes it possible to immediately validate how layouts behave across breakpoints rather than guessing from static frames.</p>
              </article>
              <article className="detail-card card">
                <h3>Shared output</h3>
                <p>Designers can hand off something engineering can inspect, understand, and directly build from without translating every decision back out of screenshots.</p>
              </article>
              <article className="detail-card card">
                <h3>New design leverage</h3>
                <p>AI helps accelerate repetitive setup and variation exploration, leaving more time to focus on product judgment, interaction quality, and overall system coherence.</p>
              </article>
            </div>

            <div className="section-heading left top-gap">
              <p className="eyebrow">What this workflow unlocked</p>
              <h2>Design advantages beyond mockups</h2>
            </div>
            <div className="check-grid">
              <div className="check-item card"><strong>Responsive validation</strong><p>Immediate testing of layout behavior across desktop and mobile contexts.</p></div>
              <div className="check-item card"><strong>Interaction realism</strong><p>Menus, hover states, navigation, and structure could be experienced instead of inferred.</p></div>
              <div className="check-item card"><strong>Better handoff</strong><p>Engineering receives something inspectable and structurally meaningful.</p></div>
              <div className="check-item card"><strong>Designer autonomy</strong><p>Designers can push further into implementation-aware exploration on their own.</p></div>
            </div>
          </div>
        </div>
      </section>



      <section className="section">
        <div className="container narrow-copy case-ending">
          <div className="section-heading left">
            <p className="eyebrow">Outcome</p>
            <h2>A meaningful shift in how designers can work</h2>
          </div>
          <p>
            The biggest takeaway is not that code replaces design tools. It is that designers now have more viable ways
            to explore, validate, and communicate interface decisions using the actual medium of the final product.
          </p>
          <p>
            The experiment showed how responsive validation, interaction realism, and implementation awareness can all
            move earlier into the design process instead of waiting for handoff or development.
          </p>
          <p>
            For designers willing to learn and experiment, AI-assisted coding workflows can create faster iteration,
            better understanding of implementation realities, and a more direct collaboration path with engineering.
          </p>
        </div>
      </section>

      <footer className="case-footer">
        <div className="container case-footer-grid">
          <Link className="case-nav-card card" to="/case-study-design-systems">
            <span className="case-nav-label">Previous case study</span>
            <strong>Complex Design Systems</strong>
          </Link>
          <div className="case-footer-cta card">
            <p className="eyebrow">Want to work together?</p>
            <h3>I'm available for interface, systems, and modern product design work.</h3>
            <div className="hero-actions compact-actions">
              <Link className="button button-primary" to="/#contact">Contact me</Link>
              <Link className="button button-secondary" to="/">View full portfolio</Link>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}
