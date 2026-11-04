import { Link } from 'react-router-dom';
import Footer from '../components/Footer';
import PearbarStudy from '../components/PearbarStudy';

// A short, deliberate tool list for scanning; the case studies carry the skills.
const toolkit = [
  ['Design', ['Figma', 'Variables', 'Prototyping', 'Photoshop', 'Illustrator', 'Affinity']],
  ['Build', ['React', 'Astro', 'Vite', 'Rust', 'Tauri', 'Git', 'GitHub']],
  ['AI', ['Claude', 'Codex', 'Gemini', 'DeepSeek', 'MCP', 'Local models']],
  ['Studio', ['Logic Pro', 'Final Cut Pro', 'Teenage Engineering', 'Korg']],
];

// Music first (made things that link out), then photographs (shown, not linked).
const sideWork = [
  { title: 'FistMeetsGlass', note: 'Music, images, and noise', href: 'https://fistmeetsglass.com', src: '/assets/fistmeetsglass-preview.jpg', width: 1800, height: 1118, alt: 'FistMeetsGlass website: the name in bold white blocks beside a video player, over a cracked-glass texture' },
  { title: 'TAIROM', note: 'Dark electronic music and a DIY site', href: 'https://tairom.com', src: '/assets/tairom-preview.jpg', width: 1800, height: 1118, alt: 'TAIROM website: a glowing green sigil above the TA^ROM wordmark on black' },
  { title: 'Civic Center Park, Denver', note: 'Photograph', src: '/assets/denver-civic-center-park.jpg', width: 1400, height: 1050, alt: 'A bed of yellow and purple tulips in Civic Center Park, Denver, with the colonnade and downtown towers behind' },
  { title: 'Summit County, Colorado', note: 'Photograph', src: '/assets/colorado-snow-guitar.jpg', width: 1600, height: 1000, alt: 'A lone figure carrying a guitar across a frozen lake in Summit County, Colorado, under heavy storm clouds' },
];

export default function Home() {
  return (
    <>
      <main id="main-content" className="portfolio-home">
        <section className="intro-section page-width" aria-labelledby="intro-title">
          <h1 id="intro-title">I design digital products.<br /><em>And help build them.</em></h1>
          <div className="intro-bottom">
            <p className="intro-role">Tai Kahn<br /><span>Product and interface<br />designer</span></p>
            <div className="intro-statement">
              <p>I work from interface and interaction through code, testing, and release, with AI tools in the mix.</p>
              <a className="editorial-link" href="#work">Explore the work <span aria-hidden="true">↓</span></a>
            </div>
          </div>
        </section>

        <section id="work" className="work-section page-width" aria-labelledby="work-title">
          <span id="case-studies" className="anchor-alias" aria-hidden="true" />
          <div className="section-rule"><h2 id="work-title">Selected work</h2></div>

          <article className="featured-project">
            <div className="project-heading"><div><h3>Zide<span className="project-dot">.</span></h3></div><p>A development workspace.<br />Designed down to the details.</p></div>
            <Link className="zide-stage project-image-link" to="/work/zide" aria-label="Read the Zide case study">
              <div className="stage-label"><span>Zide / Native desktop software</span><span>Interface · Interaction · Implementation</span></div>
              <img src="/assets/zide-workspace.webp" width="1440" height="901" alt="Zide’s published workspace overview, with Git staging and an Assist conversation side by side" fetchPriority="high" />
            </Link>
            <div className="project-summary"><p>Shaping how a complex workspace feels and behaves: staging interactions, theme hierarchy, everyday navigation, and the website that introduces the product.</p><Link className="editorial-link" to="/work/zide">Read the case study <span aria-hidden="true">→</span></Link></div>
          </article>

          <article className="pearbar-project">
            <div className="pearbar-copy"><h3>Pearbar<span className="project-dot">.</span></h3><p className="project-deck">A shorter trip<br />to the menu.</p><p>A Mac utility built around a small, persistent friction: the distance between the window you’re working in and its menus. Product idea, native behavior, visual identity, and a website that lets you try the idea.</p><Link className="editorial-link" to="/work/pearbar">Read the case study <span aria-hidden="true">→</span></Link></div>
            <PearbarStudy />
          </article>

          <div className="supporting-projects">
            <article className="supporting-project"><Link className="supporting-project-media maverics-stage project-image-link" to="/work/maverics" aria-label="Read the Maverics case study"><img src="/assets/agentic-interface-dark-light.jpg" width="1600" height="1000" loading="lazy" alt="Maverics agent fabric overview in dark and light themes" /></Link><div className="supporting-project-copy"><h3>Maverics<span className="project-dot">.</span></h3><p>Five years designing interfaces and design systems for Strata Identity, from early flows and wireframes to the product enterprise customers used.</p><Link className="editorial-link" to="/work/maverics">Read the case study <span aria-hidden="true">→</span></Link></div></article>
            <article className="supporting-project"><Link className="supporting-project-media audioglass-stage project-image-link" to="/work/audioglass" aria-label="Read the AudioGlass case study"><img src="/assets/audioglass-workspace.webp" width="1446" height="1206" loading="lazy" alt="AudioGlass comparing cyan and amber audio waveforms, with timestamped mix notes" /></Link><div className="supporting-project-copy"><h3>AudioGlass<span className="project-dot">.</span></h3><p>Compare takes, listen in sync, and leave notes at exact moments. A software project rooted in my own music practice.</p><Link className="editorial-link" to="/work/audioglass">Read the case study <span aria-hidden="true">→</span></Link></div></article>
          </div>
          <article className="more-work"><h3>Designing in the browser<span className="project-dot">.</span></h3><div><p>An early experiment in using AI tools and code to test responsive behavior and interaction sooner.</p><Link className="editorial-link" to="/work/ai-ui">Read the case study <span aria-hidden="true">→</span></Link></div></article>
        </section>

        <section id="practice" className="practice-section" aria-labelledby="practice-title">
          <div className="page-width practice-layout"><div><h2 id="practice-title">The tools changed.<br /><em>The work still needs judgment.</em></h2></div><div className="practice-copy"><p className="large-copy">I like seeing the design become real.</p><p>AI tools let me move from an idea to a working interaction quickly. I can try it in the browser, inspect the result, check the awkward cases, and change it where it matters.</p><p>That still requires judgment. I decide what belongs in the product, what can be simpler, and when the work is ready to ship.</p></div></div>
        </section>

        <section id="about" className="about-editorial page-width" aria-labelledby="about-title">
          <div className="section-rule"><h2 id="about-title">A little background</h2></div>
          <div className="background-grid"><div><p className="background-heading">From pixels<br />to products.<br /><em>Still curious.</em></p><p className="background-personal">Away from the screen: mountains, bicycles, skateboards, music, and FPV drones.</p></div><div className="background-copy"><p>My career began at Apple, helping implement designs in products including iTunes and Mac OS X. At Ping Identity, I designed interfaces and contributed front-end code for PingFederate.</p><p>At Strata Identity, I spent five years shaping Maverics: product flows, interface patterns, prototypes, and the design systems underneath them.</p><p>Today, that experience informs my work on Zide and my own software projects. I’m interested in the whole path from noticing a problem to putting something useful in someone’s hands.</p><div className="career-line"><span>Apple</span><span>Ping Identity</span><span>Strata Identity</span><span>Zide</span></div><dl className="toolkit" aria-label="Tools">{toolkit.map(([group, tools]) => <div key={group}><dt>{group}</dt><dd>{tools.join(' · ')}</dd></div>)}</dl></div></div>
          <blockquote className="collaborator-quote"><p>“He thinks like both a designer and a builder.”</p><cite>Michel Khalil, Principal and Creative Director at theDESIGNsnobs</cite></blockquote>
        </section>

        <section id="gallery" className="visual-section page-width" aria-labelledby="visual-title">
          <div className="section-rule"><h2 id="visual-title">Music and photography</h2></div>
          <div className="side-work">{sideWork.map((item) => {
            const content = <><img src={item.src} width={item.width} height={item.height} alt={item.alt} loading="lazy" /><div className="side-card-caption"><h3>{item.title}{item.href && <span aria-hidden="true"> ↗</span>}</h3><p>{item.note}</p></div></>;
            return <article className="side-card" key={item.title}>{item.href ? <a href={item.href} target="_blank" rel="noreferrer">{content}</a> : content}</article>;
          })}</div>
        </section>
      </main>
      <Footer />
    </>
  );
}
