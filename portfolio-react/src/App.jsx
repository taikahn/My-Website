import { useEffect, useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import CaseStudyMaverics from './pages/CaseStudyMaverics';
import CaseStudyDesignSystems from './pages/CaseStudyDesignSystems';
import CaseStudyAiUi from './pages/CaseStudyAiUi';
import ScrollToTop from './components/ScrollToTop';

const THEME_STORAGE_KEY = 'theme-preference';

function getInitialTheme() {
  if (typeof window === 'undefined') return 'dark';

  const savedTheme = window.localStorage.getItem(THEME_STORAGE_KEY);
  if (savedTheme === 'light' || savedTheme === 'dark') return savedTheme;

  return 'dark';
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
      <Header theme={theme} onToggleTheme={toggleTheme} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/case-study-maverics" element={<CaseStudyMaverics />} />
        <Route path="/case-study-design-systems" element={<CaseStudyDesignSystems />} />
        <Route path="/case-study-ai-ui" element={<CaseStudyAiUi />} />
      </Routes>
    </>
  );
}
