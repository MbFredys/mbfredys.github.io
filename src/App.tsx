import { useState, useEffect, lazy, Suspense } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { translations, Language } from './constants';

const ProjectDetail = lazy(() => import('./pages/ProjectDetail'));
import { 
  Navbar, 
  Hero, 
  ProblemSection, 
  ServicesSection, 
  WhatYouGetSection, 
  PricingSection, 
  SampleWork, 
  ProcessSection,
  ContactSection,
  Footer,
  SkillsetTabs
} from './components/Sections';

function ScrollToHash() {
  const { hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const element = document.getElementById(hash.replace('#', ''));
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'auto' });
        }, 50);
      }
    }
  }, [hash]);

  return null;
}

export default function App() {
  const [lang, setLang] = useState<Language>('en');
  const t = translations[lang];

  useEffect(() => {
    document.documentElement.lang = lang;
  }, [lang]);

  return (
    <BrowserRouter>
      <ScrollToHash />
      <div className="bg-black min-h-screen text-white overflow-x-hidden selection:bg-accent selection:text-black">
        <Navbar lang={lang} setLang={setLang} t={t} />
        
        <Routes>
          <Route path="/" element={
            <main>
              <Hero t={t} lang={lang} />
              <WhatYouGetSection t={t} lang={lang} />
              <ProblemSection t={t} lang={lang} />
              <ServicesSection t={t} lang={lang} />
              <ProcessSection t={t} lang={lang} />
              <SampleWork t={t} lang={lang} />
              <PricingSection t={t} lang={lang} />
              <SkillsetTabs t={t} lang={lang} />
              <ContactSection t={t} lang={lang} />
            </main>
          } />
          <Route path="/projects/:id" element={
            <Suspense fallback={<div className="h-screen bg-black" />}>
              <ProjectDetail lang={lang} />
            </Suspense>
          } />
        </Routes>

        <Footer t={t} lang={lang} />
      </div>
    </BrowserRouter>
  );
}
