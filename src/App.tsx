import { useState, useEffect } from 'react';
import { translations, Language } from './constants';
import { 
  Navbar, 
  Hero, 
  AboutSection, 
  SkillsetTabs,
  ProblemSection, 
  ServicesSection, 
  WhatYouGetSection, 
  PricingSection, 
  SampleWork, 
  ContactSection,
  Footer
} from './components/Sections';

export default function App() {
  const [lang, setLang] = useState<Language>('en');
  const t = translations[lang];

  useEffect(() => {
    document.documentElement.lang = lang;
  }, [lang]);

  return (
    <div className="bg-black min-h-screen text-white overflow-x-hidden selection:bg-accent selection:text-black">
      <Navbar lang={lang} setLang={setLang} t={t} />
      
      <main>
        <Hero t={t} lang={lang} />
        <AboutSection t={t} lang={lang} />
        <SkillsetTabs t={t} lang={lang} />
        <ProblemSection t={t} lang={lang} />
        <ServicesSection t={t} lang={lang} />
        <WhatYouGetSection t={t} lang={lang} />
        <PricingSection t={t} lang={lang} />
        <SampleWork t={t} lang={lang} />
        <ContactSection t={t} lang={lang} />
      </main>

      <Footer t={t} lang={lang} />
    </div>
  );
}
