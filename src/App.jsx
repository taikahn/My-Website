import { useEffect, useState } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import ProjectStory from './pages/ProjectStory';
import PageMetadata from './components/PageMetadata';
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
        {/* Former case study URLs, kept so existing links still land somewhere useful. */}
        <Route path="/case-study-maverics" element={<Navigate to="/work/maverics" replace />} />
        <Route path="/case-study-design-systems" element={<Navigate to="/work/maverics#design-systems" replace />} />
        <Route path="/case-study-ai-ui" element={<Navigate to="/work/ai-ui" replace />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}
