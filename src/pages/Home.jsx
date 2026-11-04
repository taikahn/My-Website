import { Link } from 'react-router-dom';
import Footer from '../components/Footer';
import PearbarStudy from '../components/PearbarStudy';

const visualWork = [
  { src: 'artwork-one.jpg', title: 'Graphic explorations', note: 'Color, form, and composition' },
  { src: 'landscape-photography.jpg', title: 'Outside the screen', note: 'Landscape photography' },
  { src: 'colorado-snow-guitar.jpg', title: 'A different kind of practice', note: 'Music and photography' },
];

const musicWork = [
  { title: 'FistMeetsGlass', note: 'Music, images, and noise', href: 'https://fistmeetsglass.com', preview: 'https://fistmeetsglass.com' },
  { title: 'TAIROM', note: 'Dark electronic music and a DIY site', href: 'https://tairom.com', image: '/assets/tairom-preview.png' },
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
              <p>I design product interfaces and work across code, testing, and release, with AI tools in the mix.</p>
              <a className="editorial-link" href="#work">Explore the work <span aria-hidden="true">↓</span></a>
            </div>
          </div>
        </section>

        <section id="work" className="work-section page-width" aria-labelledby="work-title">
          <span id="case-studies" className="anchor-alias" aria-hidden="true" />
          <div className="section-rule"><h2 id="work-title">Selected work</h2></div>

          <article className="featured-project">
            <div className="project-heading"><div><h3><Link to="/work/zide">Zide <span aria-hidden="true">↗</span></Link></h3></div><p>A development workspace.<br />Designed down to the details.</p></div>
            <Link className="zide-stage project-image-link" to="/work/zide" aria-label="Explore my work on Zide">
              <div className="stage-label"><span>Zide / Native desktop software</span><span>Interface · Interaction · Implementation</span></div>
              <img src="/assets/zide-workspace.webp" width="1440" height="901" alt="Zide’s published workspace overview, with Git staging and an Assist conversation side by side" fetchPriority="high" />
            </Link>
            <div className="project-summary"><p>Shaping how a complex workspace feels and behaves: staging interactions, theme hierarchy, everyday navigation, and the website that introduces the product.</p><Link className="editorial-link" to="/work/zide">Inside the work <span aria-hidden="true">↗</span></Link></div>
          </article>

          <article className="pearbar-project">
            <div className="pearbar-copy"><h3>Pearbar<span className="project-dot">.</span></h3><p className="project-deck">A shorter trip<br />to the menu.</p><p>A Mac utility built around a small, persistent friction: the distance between the window you’re working in and its menus. Product idea, native behavior, visual identity, and a website that lets you try the idea.</p><Link className="editorial-link" to="/work/pearbar">From idea to application <span aria-hidden="true">↗</span></Link></div>
            <PearbarStudy />
          </article>

          <div className="supporting-projects">
            <article className="supporting-project"><figure><Link className="audioglass-stage project-image-link" to="/work/audioglass" aria-label="Explore AudioGlass"><img src="/assets/audioglass-workspace.webp" width="1446" height="1206" loading="lazy" alt="AudioGlass comparing cyan and amber audio waveforms, with timestamped example mix notes" /></Link><figcaption className="screenshot-caption">Actual interface · note text edited for illustration.</figcaption></figure><div className="supporting-project-copy"><h3>AudioGlass</h3><p>Compare takes, listen in sync, and leave notes at exact moments. A software project rooted in my own music practice.</p><Link className="editorial-link" to="/work/audioglass">The idea behind the tool <span aria-hidden="true">↗</span></Link></div></article>
            <article className="supporting-project"><Link className="maverics-stage project-image-link" to="/case-study-maverics" aria-label="Read the Maverics product design case study"><img src="/assets/agentic-interface-dark-light.jpg" width="1600" height="1000" loading="lazy" alt="Maverics interface designs in dark and light mode" /></Link><div className="supporting-project-copy"><h3>Maverics</h3><p>Five years designing interfaces and systems for Strata Identity, from early flows and wireframes to the product customers used.</p><Link className="editorial-link" to="/case-study-maverics">Explore the case study <span aria-hidden="true">↗</span></Link></div></article>
          </div>
          <section className="more-work" aria-label="More case studies"><div className="more-work-grid"><article><h4>Keeping the system close to the product</h4><p>Variables, states, and documentation that helped design and engineering work from the same source.</p><Link className="editorial-link" to="/case-study-design-systems">Read the case study <span aria-hidden="true">↗</span></Link></article><article><h4>Designing in the browser with AI</h4><p>A working experiment in using code to test responsive behavior and interaction earlier.</p><Link className="editorial-link" to="/case-study-ai-ui">Read the case study <span aria-hidden="true">↗</span></Link></article></div></section>
        </section>

        <section id="practice" className="practice-section" aria-labelledby="practice-title">
          <div className="page-width practice-layout"><div><h2 id="practice-title">The tools changed.<br /><em>The work still needs judgment.</em></h2></div><div className="practice-copy"><p className="large-copy">I like seeing the design become real.</p><p>AI tools let me move from an idea to a working interaction quickly. I can try it in the browser, inspect the result, check the awkward cases, and change it where it matters.</p><p>That still requires judgment. I decide what belongs in the product, what can be simpler, and when the work is ready to ship.</p></div></div>
        </section>

        <section id="about" className="about-editorial page-width" aria-labelledby="about-title">
          <div className="section-rule"><h2 id="about-title">A little background</h2></div>
          <div className="background-grid"><div><p className="background-heading">From pixels<br />to products.<br /><em>Still curious.</em></p><p className="background-personal">Away from the screen: mountains, bicycles, skateboards, music, and FPV drones.</p></div><div className="background-copy"><p>My career began at Apple, helping implement designs in products including iTunes and Mac OS X. At Ping Identity, I designed interfaces and contributed front-end code for PingFederate.</p><p>At Strata Identity, I spent five years shaping Maverics: product flows, interface patterns, prototypes, and the design systems underneath them.</p><p>Today, that experience informs my work on Zide and my own software projects. I’m interested in the whole path from noticing a problem to putting something useful in someone’s hands.</p><div className="career-line"><span>Apple</span><span>Ping Identity</span><span>Strata Identity</span><span>Zide</span></div></div></div>
          <blockquote className="collaborator-quote"><p>“He thinks like both a designer and a builder.”</p><cite>Michel Khalil, Principal and Creative Director at theDESIGNsnobs</cite></blockquote>
        </section>

        <section id="gallery" className="visual-section page-width" aria-labelledby="visual-title">
          <div className="section-rule"><h2 id="visual-title">Another side of the work</h2></div>
          <div className="visual-grid">{visualWork.map((item) => <figure key={item.src}><a href={`/assets/${item.src}`} target="_blank" rel="noreferrer" aria-label={`View ${item.title.toLowerCase()} full size in a new tab`}><img src={`/assets/${item.src}`} alt={item.title} loading="lazy" /></a><figcaption><strong>{item.title}</strong><span>{item.note}</span></figcaption></figure>)}</div>
          <div className="music-heading"><h3>Music has a place on the web, too.</h3></div><div className="music-work">{musicWork.map((item) => <article className="music-card" key={item.title}><a href={item.href} target="_blank" rel="noreferrer">{item.image ? <img src={item.image} alt={`${item.title} website preview`} loading="lazy" /> : <iframe src={item.preview} title={`${item.title} website preview`} loading="lazy" />}<div><h3>{item.title} <span aria-hidden="true">↗</span></h3><p>{item.note}</p></div></a></article>)}</div>
        </section>
      </main>
      <Footer />
    </>
  );
}
