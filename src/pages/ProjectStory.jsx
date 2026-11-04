import { Link, useParams } from 'react-router-dom';
import Footer from '../components/Footer';
import PearbarStudy from '../components/PearbarStudy';
import NotFound from './NotFound';

const projects = {
  zide: {
    category: 'Collaborative product work', name: 'Zide',
    title: 'The details are the product.',
    introduction: 'A development workspace brings code, Git, issues, and AI into one place. My work focuses on making that complexity easier to see, navigate, and act on.',
    scope: 'Interface design, interaction design, themes, implementation, and web',
    context: 'A collaborative desktop product and its public website',
    link: 'https://zide.dev', linkLabel: 'Visit Zide',
    chapters: [
      { title: 'Reviewing a file shouldn’t lose your selection.', text: 'In staging, the file you’re looking at and the files you intend to stage are not necessarily the same thing. I proposed a tree view with two distinct interaction modes: direct row actions, or checkboxes with an explicit batch action. Showing both at once would add controls without clarifying the task.', detail: 'The important distinction: opening a diff is navigation; checking a file is selection. The design keeps those actions independent so a person can keep reviewing without rebuilding their selection.' },
      { title: 'A passing contrast ratio isn’t a finished theme.', text: 'My theme work looked at the whole rendered interface: the separation between surfaces, the weight of borders, the hierarchy of text, and the competition between accents and content. A palette can pass its individual checks and still feel flat or tiring.', detail: 'One decision was to separate a plan’s brand color from its text. A colored mark can retain the brand identity while neutral text remains readable on the surrounding theme.' },
      { title: 'Small labels carry real expectations.', text: 'An empty workspace should make the next action obvious. I reworked its quick actions, aligned icons and routes with the rest of the application, and removed a combined shortcut that no longer fit the simpler one-action-per-item structure.', detail: 'The work extended into implementation and verification, not just a proposal for how the empty state ought to look.' },
      { title: 'The experience starts before the app opens.', text: 'On zide.dev, my contributions span typography, interaction details, product imagery, tutorials, and navigation. The challenge is different from the desktop app: help someone understand the product, find a useful starting point, and learn by doing.', detail: 'Product design and communication meet here. The website needs to explain a complex tool without asking a first-time visitor to understand every feature at once.' },
    ],
    closing: 'This is shared product work. These examples describe my design proposals and contributions, not sole authorship of Zide. Implementation, review, and testing also involve the wider team and AI agents.',
    next: 'pearbar', nextName: 'Pearbar',
  },
  pearbar: {
    category: 'Independent product', name: 'Pearbar',
    title: 'Bring the menus to the work.',
    introduction: 'On a large display, the top-left corner can be a long way from the window you’re using. Pearbar starts with a small question: why make that trip every time?',
    scope: 'Product concept, interaction, native application, identity, and website',
    context: 'macOS utility · early testing',
    link: 'https://pearbar.app', linkLabel: 'Visit Pearbar',
    chapters: [
      { title: 'Change the distance, not the command.', text: 'Pearbar brings the active application’s menus above its window. The commands remain familiar; their location changes. It can follow the window or stay pinned, so the behavior can fit the way someone actually works.', detail: 'The interaction begins with an everyday physical action: moving a pointer across a screen. The aim is to reduce that repeated trip without inventing a new command system.' },
      { title: 'A small utility still has a lot of states.', text: 'Following a window is only part of the experience. Menus, keyboard access, multiple displays, the MacBook notch, and Accessibility permission all affect whether the utility feels like it belongs on the Mac.', detail: 'The product has to remain understandable when it is tucked away, when the active app changes, and when the operating system needs permission. Those details are part of the design.' },
      { title: 'Let the website explain by doing.', text: 'The Pearbar website uses the language of a Mac desktop and the character of an older print advertisement. The interface is part of the explanation, rather than a decorative frame around a list of features.', detail: 'The illustration above isolates the central idea. The product website carries the fuller identity and demonstration.' },
      { title: 'Stay with it through delivery.', text: 'The project extends beyond a prototype into signed, notarized builds and an update path for testers. Release behavior, permission handling, and fixes found through actual use are part of making the idea usable.', detail: 'Pearbar is in early testing. That is a useful stage to show honestly: a working product being refined, not a claim that every edge case is already solved.' },
    ],
    closing: 'An independent product developed with AI assistance. My role spans the idea, visual and interaction direction, implementation iteration, and testing. The interactive study on this page is a simplified illustration, not the native app.',
    next: 'audioglass', nextName: 'AudioGlass',
  },
  audioglass: {
    category: 'Independent studio tool', name: 'AudioGlass',
    title: 'Listen to what changed.',
    introduction: 'Comparing two versions of a song shouldn’t mean juggling players and trying to remember a timestamp. AudioGlass puts two takes on one timeline, with a place to discuss the differences.',
    scope: 'Product direction, timeline interaction, interface, and implementation',
    context: 'Personal music collaboration project',
    chapters: [
      { title: 'Keep the comparison in sync.', text: 'The original and the latest take share a playhead. Waveform lanes, A/B listening, looping, and zoom let the listener move between the overall arrangement and a specific moment without losing their place.', detail: 'The central design problem is orientation: which version am I hearing, where am I, and am I comparing the same part of the song?' },
      { title: 'Give feedback a location and a version.', text: 'A note such as “the change here works” means little once another mix arrives. AudioGlass associates feedback with moments and versions, so the conversation has a concrete reference.', detail: 'Notes and replies sit within the comparison rather than becoming a separate conversation someone has to reconstruct later.' },
      { title: 'Organize around the music.', text: 'Projects contain songs and their versions. Everyday actions stay close to that structure, while lower-frequency library actions live in a project menu. The aim is to keep managing the files from becoming the main activity.', detail: 'This is a focused studio tool, not an attempt to replace a digital audio workstation. Its job is comparison and discussion.' },
    ],
    closing: 'AudioGlass is a personal project, not a public product launch. It connects my music practice with product design and agent-assisted implementation. The source and studio material are private.',
    next: 'zide', nextName: 'Zide',
  },
};

export default function ProjectStory() {
  const { slug } = useParams();
  const project = projects[slug];
  if (!project) return <NotFound />;

  return (
    <>
      <main id="main-content" className="project-story page-width">
        <Link className="back-link" to="/#work">← Selected work</Link>
        <header className="story-header">
          <p className="index-label">{project.category} / {project.name}</p>
          <h1>{project.title}</h1>
          <p className="story-introduction">{project.introduction}</p>
          <dl className="story-facts"><div><dt>My focus</dt><dd>{project.scope}</dd></div><div><dt>Context</dt><dd>{project.context}</dd></div>{project.link && <div><dt>On the web</dt><dd><a className="editorial-link" href={project.link} target="_blank" rel="noreferrer">{project.linkLabel} ↗</a></dd></div>}</dl>
        </header>
        {slug === 'zide' && <figure className="story-image"><img src="/assets/zide-workspace.webp" width="1440" height="901" alt="Published Zide workspace overview with staging and Assist" /><figcaption>Product context: a published workspace image from zide.dev, not a before-and-after record of the individual contributions below.</figcaption></figure>}
        {slug === 'pearbar' && <PearbarStudy />}
        {slug === 'audioglass' && <figure className="story-image"><a href="/assets/audioglass-workspace.webp" target="_blank" rel="noreferrer" aria-label="View AudioGlass screenshot full size in a new tab"><img src="/assets/audioglass-workspace.webp" width="1446" height="1206" alt="AudioGlass with two audio versions on a shared timeline and timestamped mix-feedback examples in the Notes panel" /></a><figcaption>Actual AudioGlass interface. Note text has been edited to illustrate mix feedback; these are not real collaborator comments. Open the image to view it full size.</figcaption></figure>}
        <div className="story-chapters">{project.chapters.map((chapter) => <section className="story-chapter" key={chapter.title}><h2>{chapter.title}</h2><div><p>{chapter.text}</p><p className="chapter-detail">{chapter.detail}</p></div></section>)}</div>
        <aside className="story-attribution"><p className="index-label">Scope &amp; authorship</p><p>{project.closing}</p></aside>
        <nav className="next-project" aria-label="More work"><span className="index-label">Next project</span><Link to={`/work/${project.next}`}>{project.nextName} <span aria-hidden="true">↗</span></Link></nav>
      </main>
      <Footer />
    </>
  );
}
