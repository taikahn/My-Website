import { Link } from 'react-router-dom';

export default function CaseStudyAiUi() {
  return (
    <main id="main-content">
      <section className="hero case-hero">
        <div className="container case-hero-layout">
          <div className="hero-copy">
            <p className="eyebrow">Case Study</p>
            <h1>Designing interfaces with AI and code</h1>
            <p className="lede">
              This was an experiment in designing directly in code. I used AI tools to build a responsive interface, then reviewed the result myself and kept changing the parts that did not work.
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
            <div className="metric card"><span className="metric-label">Value</span><strong>Faster iteration</strong></div>
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
              <h2>Designing in the medium of the product</h2>
            </div>
            <p>
              Rather than stopping at static mockups, I used AI tools inside a coding environment to build and revise interface ideas in React.
            </p>
            <p>
              That made it easier to check the things that are easy to miss in a static frame: mobile layouts, breakpoints, menus, navigation, and the small interactions that make an interface feel finished.
            </p>

            <div className="editorial-block card">
              <p className="quote-mark">"</p>
              <p className="editorial-quote">
                The useful part was not speed by itself. It was being able to make a design decision, see it working, and give engineering something they could inspect and extend.
              </p>
            </div>

            <div className="section-heading left top-gap">
              <p className="eyebrow">Problem</p>
              <h2>Static screens leave important questions unanswered</h2>
            </div>
            <p>
              A screenshot cannot show how a layout behaves at another width, how a menu opens, or what happens when a user takes an unexpected path. Building the interface earlier made those questions visible sooner.
            </p>

            <div className="section-heading left top-gap">
              <p className="eyebrow">What changed</p>
              <h2>Less guessing, earlier feedback</h2>
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
                <h3>More room to explore</h3>
                <p>AI helped with repetitive setup and variations. The decisions about hierarchy, behavior, and quality were still mine.</p>
              </article>
            </div>

            <div className="section-heading left top-gap">
              <p className="eyebrow">What I learned</p>
              <h2>Some design questions are easier to answer in code</h2>
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
            <h2>A more practical way to explore interface decisions</h2>
          </div>
          <p>
            The point is not that code replaces design tools. It gives designers another place to think, test, and communicate decisions using the medium people will actually use.
          </p>
          <p>
            The experiment moved responsive behavior, interaction details, and implementation questions earlier in the process. It also made clear that generated code still needs a designer to review, edit, and sometimes throw away.
          </p>
          <p>
            For designers willing to learn the basics of code, AI can make that exploration faster. It does not remove the need for taste, testing, or good judgment.
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
