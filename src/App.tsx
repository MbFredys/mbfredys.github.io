import { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { translations, Language } from './constants';
import ProjectDetail from './pages/ProjectDetail';
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

export default function App() {
  const [lang, setLang] = useState<Language>('en');
  const t = translations[lang];

  useEffect(() => {
    document.documentElement.lang = lang;
  }, [lang]);

  return (
    <BrowserRouter>
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
          <Route path="/projects/:id" element={<ProjectDetail lang={lang} />} />
        </Routes>

        <Footer t={t} lang={lang} />
      </div>
    </BrowserRouter>
  );
}
