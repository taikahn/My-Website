import { Link, useParams } from 'react-router-dom';
import Footer from '../components/Footer';
import PearbarStudy from '../components/PearbarStudy';
import NotFound from './NotFound';
import { getProject, nextProject } from '../data/projects';

function StoryFigure({ figure, className = '' }) {
  return (
    <figure className={`story-figure ${className}`.trim()}>
      <a href={figure.src} target="_blank" rel="noreferrer" aria-label={`${figure.alt} (opens full size in a new tab)`}>
        <img src={figure.src} width={figure.width} height={figure.height} alt={figure.alt} loading={figure.loading ?? 'lazy'} />
      </a>
      {figure.caption && <figcaption>{figure.caption}</figcaption>}
    </figure>
  );
}

export default function ProjectStory() {
  const { slug } = useParams();
  const project = getProject(slug);
  if (!project) return <NotFound />;
  const next = nextProject(slug);

  return (
    <>
      <main id="main-content" className="project-story page-width">
        <Link className="back-link" to="/#work">← Selected work</Link>
        <header className="story-header">
          <h1><span className="story-name">{project.name}<span className="project-dot" aria-hidden="true">.</span></span> <span className="story-title">{project.title}</span></h1>
          <p className="story-introduction">{project.introduction}</p>
          <dl className="story-facts">
            <div><dt>My focus</dt><dd>{project.scope}</dd></div>
            <div><dt>Context</dt><dd>{project.context}</dd></div>
            {project.systemLabel && <div><dt>System</dt><dd><Link className="editorial-link" to={`#${project.systemId || 'system'}`}>{project.systemLabel} <span aria-hidden="true">↓</span></Link></dd></div>}
            {project.link && <div><dt>On the web</dt><dd><a className="editorial-link" href={project.link} target="_blank" rel="noreferrer">{project.linkLabel} <span aria-hidden="true">↗</span></a></dd></div>}
          </dl>
        </header>

        {project.hero.kind === 'pearbar' ? <PearbarStudy /> : <StoryFigure figure={{ ...project.hero, loading: 'eager' }} className="story-hero" />}

        <div className="story-chapters">
          {project.chapters.map((chapter) => (
            <section className="story-chapter" id={chapter.id} key={chapter.title}>
              <h2>{chapter.title}</h2>
              <div><p>{chapter.text}</p><p className="chapter-detail">{chapter.detail}</p></div>
              {chapter.figures && <div className="chapter-figures">{chapter.figures.map((figure) => <StoryFigure figure={figure} key={figure.src} />)}</div>}
            </section>
          ))}
        </div>

        <aside className="story-credit" aria-labelledby="story-credit-title">
          <h2 id="story-credit-title">Credit</h2>
          <p>{project.credit}</p>
        </aside>

        <nav className="next-project" aria-label="Next case study">
          <span>Next case study</span>
          <Link to={`/work/${next.slug}`}>{next.name} <span aria-hidden="true">→</span></Link>
        </nav>
      </main>
      <Footer />
    </>
  );
}
