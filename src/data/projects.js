// Every case study uses the same template (src/pages/ProjectStory.jsx).
// `projectOrder` sets both the homepage hierarchy and the "Next case study" loop.

export const projectOrder = ['zide', 'pearbar', 'maverics', 'audioglass', 'ai-ui'];

export const projects = {
  zide: {
    name: 'Zide',
    title: 'The details are the product.',
    description: 'Interaction, theme, implementation, and website contributions to Zide, a development workspace. Case study by Tai Kahn.',
    introduction: 'A development workspace brings code, Git, issues, and AI into one place. My work focuses on making that complexity easier to see, navigate, and act on.',
    scope: 'Interface design, interaction design, themes, implementation, and web',
    context: 'A collaborative desktop product and its public website',
    link: 'https://zide.dev', linkLabel: 'Visit Zide',
    hero: { src: '/assets/zide-workspace.webp', width: 1440, height: 901, alt: 'Zide workspace with Git staging and an Assist conversation side by side', caption: 'The Zide workspace, as published on zide.dev.' },
    chapters: [
      { title: 'Reviewing a file shouldn’t lose your selection.', text: 'In staging, the file you’re looking at and the files you intend to stage are not necessarily the same thing. I proposed a tree view with two distinct interaction modes: direct row actions, or checkboxes with an explicit batch action. Showing both at once would add controls without clarifying the task.', detail: 'The important distinction: opening a diff is navigation; checking a file is selection. The design keeps those actions independent so a person can keep reviewing without rebuilding their selection.' },
      { title: 'A passing contrast ratio isn’t a finished theme.', text: 'My theme work looked at the whole rendered interface: the separation between surfaces, the weight of borders, the hierarchy of text, and the competition between accents and content. A palette can pass its individual checks and still feel flat or tiring.', detail: 'One decision was to separate a plan’s brand color from its text. A colored mark can retain the brand identity while neutral text remains readable on the surrounding theme.' },
      { title: 'Small labels carry real expectations.', text: 'An empty workspace should make the next action obvious. I reworked its quick actions, aligned icons and routes with the rest of the application, and removed a combined shortcut that no longer fit the simpler one-action-per-item structure.', detail: 'I carried the change through implementation and verification, rather than stopping at a proposal.' },
      { title: 'The experience starts before the app opens.', text: 'On zide.dev, my contributions span typography, interaction details, product imagery, tutorials, and navigation. The challenge is different from the desktop app: help someone understand the product, find a useful starting point, and learn by doing.', detail: 'Product design and communication meet here. The website needs to explain a complex tool without asking a first-time visitor to understand every feature at once.' },
    ],
    credit: 'Zide is a team product. The examples above describe my design proposals and contributions; implementation, review, and testing are shared with the wider team and AI agents.',
  },

  pearbar: {
    name: 'Pearbar',
    title: 'Bring the menus to the work.',
    description: 'Bringing the Mac menu bar closer to the work. Product concept, native interaction, identity, and website by Tai Kahn.',
    introduction: 'On a large display, the top-left corner can be a long way from the window you’re using. Pearbar starts with a small question: why make that trip every time?',
    scope: 'Product concept, interaction, native application, identity, and website',
    context: 'macOS utility · early testing',
    link: 'https://pearbar.app', linkLabel: 'Visit Pearbar',
    hero: { kind: 'pearbar' },
    chapters: [
      { title: 'Change the distance, not the command.', text: 'Pearbar brings the active application’s menus above its window. The commands remain familiar; their location changes. It can follow the window or stay pinned, so the behavior can fit the way someone actually works.', detail: 'The interaction begins with an everyday physical action: moving a pointer across a screen. The aim is to reduce that repeated trip without inventing a new command system.' },
      { title: 'A small utility still has a lot of states.', text: 'Following a window is only part of the experience. Menus, keyboard access, multiple displays, the MacBook notch, and Accessibility permission all affect whether the utility feels like it belongs on the Mac.', detail: 'The product has to remain understandable when it is tucked away, when the active app changes, and when the operating system needs permission. Those details are part of the design.' },
      { title: 'Let the website explain by doing.', text: 'The Pearbar website uses the language of a Mac desktop and the character of an older print advertisement. The interface itself does the explaining; it isn’t a decorative frame around a list of features.', detail: 'The illustration above isolates the central idea. The product website carries the fuller identity and demonstration.' },
      { title: 'Stay with it through delivery.', text: 'The project extends beyond a prototype into signed, notarized builds and an update path for testers. Release behavior, permission handling, and fixes found through actual use are part of making the idea usable.', detail: 'Pearbar is in early testing: a working product, still being refined through real use.' },
    ],
    credit: 'An independent product developed with AI assistance. My role spans the idea, visual and interaction direction, iterating on the implementation, and testing. The drawing above is a simplified illustration of the idea.',
  },

  maverics: {
    name: 'Maverics',
    title: 'Give a dense product a clear structure.',
    description: 'Five years of product interface and design system work on the Maverics identity orchestration platform at Strata Identity.',
    introduction: 'Maverics is an identity orchestration platform used by enterprise customers including Kroger, Motorola, Nokia, and 3M. Over five years at Strata Identity, I helped take it from exploratory wireframes to the live product, along with the design systems underneath it.',
    scope: 'Product flows, navigation, interface patterns, prototypes, and design systems',
    context: 'Strata Identity · enterprise identity SaaS · five years',
    hero: { src: '/assets/agentic-interface-dark-light.jpg', width: 1600, height: 1000, alt: 'Maverics agent fabric overview, split between dark and light themes, with agent platforms, a hexagon map of agents by risk, and a table of fabrics', caption: 'Agent fabric overview in dark and light themes.' },
    chapters: [
      {
        title: 'Make technical workflows easier to follow.',
        text: 'Identity orchestration involves dense information, multi-step setup, and controls that depend on context. Without deliberate structure, those screens quickly become noisy and hard to learn.',
        detail: 'The aim was to make the product easier to understand without hiding the flexibility advanced users needed: clearer grouping, stronger hierarchy, and more deliberate layouts for setup flows, forms, and dense admin views.',
        figures: [
          { src: '/assets/maverics-cards-ui.jpg', width: 1407, height: 1000, alt: 'Maverics summary page for an HTTP proxy application, with its dependencies and a nested access control policy', caption: 'User flow summary: application, dependencies, and nested access rules.' },
          { src: '/assets/modals-dialogs.jpg', width: 1600, height: 1000, alt: 'Two dialogs: choosing an application type from five options, and uploading image assets', caption: 'Dialog patterns for adding applications and uploading assets.' },
        ],
      },
      {
        title: 'Help people know where they are.',
        text: 'As the platform added product areas, navigation and page structure had to keep orientation predictable. Dashboards, tables, and status-driven components made the state of each environment visible.',
        detail: 'Feedback and state visibility are what let administrators act with confidence in a security product.',
        figures: [
          { src: '/assets/maverics-data-visualization.jpg', width: 1600, height: 1000, alt: 'Maverics orchestrators page with installer downloads, count and issue charts, an event log, and request and latency graphs', caption: 'Orchestrators: deployment status, issues, and live traffic.' },
          { src: '/assets/agent-fabric-dark-full.jpg', width: 1600, height: 1000, alt: 'Dark theme table of AI agents with risk scores, time to live, OAuth scopes, and creation dates', caption: 'Agent fabric detail with risk scores and OAuth scopes.' },
        ],
      },
      {
        id: 'design-systems',
        title: 'Keep the system close to the product.',
        text: 'I built several Figma design systems for Maverics. Variables and token-like structures made dark and light modes far easier to manage, and components covered the states real products need: hover, selected, disabled, empty, and error.',
        detail: 'Alongside the design library, I built a React-oriented reference of what was actually live, with commented elements in their current states. Engineering could work from the shipped interface instead of an abstract library.',
        figures: [
          { src: '/assets/color-system-variables.jpg', width: 1600, height: 1000, alt: 'Figma variables panel mapping text color tokens to light and dark values, in front of full color ramps', caption: 'Color variables mapped to light and dark modes.' },
          { src: '/assets/design-elements-items.jpg', width: 1600, height: 1100, alt: 'Toggles, checkboxes, and radio buttons in every state, beside status badges for success, denied, failed, and deployment stages', caption: 'Component states for toggles, checkboxes, radios, and status badges.' },
          { src: '/assets/search-range-filter.jpg', width: 1600, height: 1000, alt: 'Date range search with a filter menu, shown closed and open in light and dark themes', caption: 'Date range and filter component, light and dark.' },
        ],
      },
      {
        title: 'Design for what ships next.',
        text: 'The work moved from exploratory wireframes through high-fidelity design into a live, customer-facing product. Reusable patterns across forms, panels, tables, and navigation made each new area easier to design and to build.',
        detail: 'The result was a more consistent interface and a clearer foundation for new product areas, including the platform’s more recent AI-agent features shown here.',
        figures: [
          { src: '/assets/maverics-agent-entry.jpg', width: 1600, height: 1000, alt: 'Maverics sandbox sign-up screen with terms acceptance, introducing identity orchestration for AI agents', caption: 'Sandbox sign-up for the AI-agent features.' },
          { src: '/assets/maverics-ai-webscreen.jpg', width: 1600, height: 1000, alt: 'Maverics product page introducing the runtime identity control plane for AI agents, above a dark product screenshot', caption: 'Product page for the runtime identity control plane.' },
        ],
      },
    ],
    credit: 'Maverics is a Strata Identity product, built with the wider Strata team. The images show interface and design system work from my time there.',
  },

  audioglass: {
    name: 'AudioGlass',
    title: 'Listen to what changed.',
    description: 'Two takes on one timeline. A personal music comparison and collaboration project by Tai Kahn.',
    introduction: 'Comparing two versions of a song shouldn’t mean juggling players and trying to remember a timestamp. AudioGlass puts two takes on one timeline, with a place to discuss the differences.',
    scope: 'Product direction, timeline interaction, interface, and implementation',
    context: 'Personal music collaboration project',
    hero: { src: '/assets/audioglass-workspace.webp', width: 1446, height: 1206, alt: 'AudioGlass with two audio versions on a shared timeline and timestamped mix notes in the Notes panel', caption: 'The AudioGlass interface. Note text is illustrative.' },
    chapters: [
      { title: 'Keep the comparison in sync.', text: 'The original and the latest take share a playhead. Waveform lanes, A/B listening, looping, and zoom let the listener move between the overall arrangement and a specific moment without losing their place.', detail: 'The central design problem is orientation: which version am I hearing, where am I, and am I comparing the same part of the song?' },
      { title: 'Give feedback a location and a version.', text: 'A note such as “the change here works” means little once another mix arrives. AudioGlass associates feedback with moments and versions, so the conversation has a concrete reference.', detail: 'Notes and replies sit within the comparison rather than becoming a separate conversation someone has to reconstruct later.' },
      { title: 'Organize around the music.', text: 'Projects contain songs and their versions. Everyday actions stay close to that structure, while lower-frequency library actions live in a project menu. The aim is to keep managing the files from becoming the main activity.', detail: 'It’s a focused studio tool for comparison and discussion. The mixing itself stays in the audio workstation.' },
    ],
    credit: 'A personal project that connects my music practice with product design and agent-assisted implementation. It hasn’t been released publicly, and the source and studio material are private.',
  },

  'ai-ui': {
    name: 'Designing in the browser',
    title: 'Some questions are easier to answer in code.',
    description: 'An early exploration of AI-assisted interface design in React: responsive behavior and interaction in the medium of the product.',
    introduction: 'I wanted to get closer to the thing I was designing. Using AI tools inside a React project, I built and revised an interface in code, then tested responsive behavior and interaction details instead of leaving those questions for later.',
    scope: 'Design exploration, AI-assisted prototyping, and React interface iteration',
    context: 'Early experiment · React, Vite, Cursor, and VS Code',
    link: 'https://taikahn.github.io/ui-via-ai-react/', linkLabel: 'View the live project',
    hero: { src: '/assets/ai-assisted-react-workflow.jpg', width: 2560, height: 1853, alt: 'A dark policy detail screen built in React, running locally in a browser window', caption: 'An interface built in React with AI tools, running locally.' },
    chapters: [
      { title: 'A static frame leaves questions open.', text: 'A screenshot can’t show how a layout behaves at another width, how a menu opens, or what happens when someone takes an unexpected path. Building the interface early made those questions visible sooner.', detail: 'Mobile layouts, breakpoints, menus, and navigation could be tried rather than inferred.' },
      { title: 'Speed wasn’t the useful part.', text: 'AI helped with repetitive setup and variations. What mattered was making a design decision, seeing it work, and giving engineering something they could inspect and extend.', detail: 'Decisions about hierarchy, behavior, and quality were still mine.' },
      { title: 'Generated code still needs a designer.', text: 'Code doesn’t replace design tools. It adds another place to think, test, and communicate decisions, in the medium people will actually use. The output still needed review, editing, and sometimes deletion.', detail: 'The same approach, at a larger scale, runs through Pearbar, AudioGlass, and my contributions to Zide.' },
    ],
    credit: 'An early experiment, published as a working React prototype.',
  },
};

export function getProject(slug) {
  return Object.hasOwn(projects, slug) ? projects[slug] : undefined;
}

export function nextProject(slug) {
  const index = projectOrder.indexOf(slug);
  const nextSlug = projectOrder[(index + 1) % projectOrder.length];
  return { slug: nextSlug, name: projects[nextSlug].name };
}
