import { useEffect, useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import ProjectStory from './pages/ProjectStory';
import PageMetadata from './components/PageMetadata';
import CaseStudyMaverics from './pages/CaseStudyMaverics';
import CaseStudyDesignSystems from './pages/CaseStudyDesignSystems';
import CaseStudyAiUi from './pages/CaseStudyAiUi';
import NotFound from './pages/NotFound';
import ScrollToTop from './components/ScrollToTop';

const THEME_STORAGE_KEY = 'theme-preference';

function getInitialTheme() {
  if (typeof window === 'undefined') return 'light';

  const savedTheme = window.localStorage.getItem(THEME_STORAGE_KEY);
  if (savedTheme === 'light' || savedTheme === 'dark') return savedTheme;

  return 'light';
}

export default function App() {
  const [theme, setTheme] = useState(getInitialTheme);

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    window.localStorage.setItem(THEME_STORAGE_KEY, theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((currentTheme) => (currentTheme === 'dark' ? 'light' : 'dark'));
  };

  return (
    <>
      <ScrollToTop />
      <PageMetadata />
      <Header theme={theme} onToggleTheme={toggleTheme} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/work/:slug" element={<ProjectStory />} />
        <Route path="/case-study-maverics" element={<CaseStudyMaverics />} />
        <Route path="/case-study-design-systems" element={<CaseStudyDesignSystems />} />
        <Route path="/case-study-ai-ui" element={<CaseStudyAiUi />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}
