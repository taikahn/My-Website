import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const pages = {
  '/': ['Product and Interface Designer', 'Tai Kahn designs product interfaces and works across code, testing, and release. Selected work includes Zide, Pearbar, AudioGlass, and Maverics.'],
  '/work/zide': ['Zide | Selected Work', 'Interaction, theme, implementation, and website contributions to Zide, a development workspace. Selected work by Tai Kahn.'],
  '/work/pearbar': ['Pearbar | Independent Product', 'Bringing the Mac menu bar closer to the work. Product concept, native interaction, identity, and website by Tai Kahn.'],
  '/work/audioglass': ['AudioGlass | Studio Tool', 'Two takes on one timeline. A personal music comparison and collaboration project by Tai Kahn.'],
  '/case-study-maverics': ['Maverics | Product Design', 'Five years of product interface work on the Maverics identity orchestration platform at Strata Identity.'],
  '/case-study-design-systems': ['Complex Design Systems', 'Design systems, theme logic, and interface patterns for complex software. Selected work by Tai Kahn.'],
  '/case-study-ai-ui': ['An Early Experiment in Live UI', 'An early exploration of AI-assisted interface design in React: responsive behavior and interaction in the medium of the product.'],
};

export default function PageMetadata() {
  const { pathname } = useLocation();
  useEffect(() => {
    const [title, description] = pages[pathname.replace(/\/$/, '') || '/'] || ['Page not found', 'Explore selected product and software design work by Tai Kahn.'];
    document.title = `Tai Kahn | ${title}`;
    document.querySelector('meta[name="description"]')?.setAttribute('content', description);
  }, [pathname]);
  return null;
}
