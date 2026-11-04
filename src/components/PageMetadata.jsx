import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { getProject } from '../data/projects';

const home = ['Product and Interface Designer', 'Tai Kahn designs product interfaces and works across code, testing, and release. Selected work includes Zide, Pearbar, Maverics, and AudioGlass.'];
const notFound = ['Page not found', 'Explore selected product and software design work by Tai Kahn.'];

function metadataFor(pathname) {
  const path = pathname.replace(/\/$/, '') || '/';
  if (path === '/') return home;
  const project = getProject(path.match(/^\/work\/([^/]+)$/)?.[1]);
  return project ? [project.name, project.description] : notFound;
}

export default function PageMetadata() {
  const { pathname } = useLocation();
  useEffect(() => {
    const [title, description] = metadataFor(pathname);
    document.title = `Tai Kahn | ${title}`;
    document.querySelector('meta[name="description"]')?.setAttribute('content', description);
  }, [pathname]);
  return null;
}
