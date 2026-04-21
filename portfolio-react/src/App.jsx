import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import CaseStudyMaverics from './pages/CaseStudyMaverics';
import CaseStudyDesignSystems from './pages/CaseStudyDesignSystems';
import CaseStudyAiUi from './pages/CaseStudyAiUi';
import ScrollToTop from './components/ScrollToTop';

export default function App() {
  return (
    <>
      <ScrollToTop />
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/case-study-maverics" element={<CaseStudyMaverics />} />
        <Route path="/case-study-design-systems" element={<CaseStudyDesignSystems />} />
        <Route path="/case-study-ai-ui" element={<CaseStudyAiUi />} />
      </Routes>
    </>
  );
}
