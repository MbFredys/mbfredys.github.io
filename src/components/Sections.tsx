import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Link } from 'react-router-dom';
import { 
  Cpu, 
  CircuitBoard,
  CheckCircle, 
  Zap, 
  Shield, 
  Search, 
  Settings, 
  FileText, 
  Layers,
  Activity,
  Radio,
  Power,
  Factory,
  ArrowRight, 
  Mail, 
  Phone, 
  MapPin, 
  Linkedin,
  Github,
  MessageSquare,
  Check,
  Menu,
  X,
  Download
} from 'lucide-react';
import { Language, Translation, OB_EMAIL, OB_PHONE, OB_PHONE_F, OB_WEB3FORMS_KEY, secureAtob } from '../constants';

// Protect contact actions (anti-bot check)
let pageLoadTime = Date.now();

const handleContactAction = (type: 'whatsapp' | 'tel', obValue: string, message?: string) => {
  const timeSinceLoad = Date.now() - pageLoadTime;
  if (timeSinceLoad < 1000) {
    console.warn('Bot-like activity detected.');
    return;
  }
  const value = secureAtob(obValue);
  if (type === 'whatsapp') {
    window.open(`https://wa.me/${value}?text=${encodeURIComponent(message || '')}`, '_blank', 'noopener,noreferrer');
  } else {
    window.location.href = `tel:${value}`;
  }
};

interface SectionProps {
  t: Translation;
  lang: Language;
}

/* ==========================================================================
   1. NAVBAR COMPONENT
   ========================================================================== */
export const Navbar = ({ lang, setLang, t }: { lang: Language, setLang: (l: Language) => void, t: Translation }) => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { href: '#hero', label: lang === 'en' ? 'Start' : 'Inicio' },
    { href: '#experience', label: lang === 'en' ? 'Experience' : 'Experiencia' },
    { href: '#projects', label: lang === 'en' ? 'Projects' : 'Proyectos' },
    { href: '#stack', label: lang === 'en' ? 'Tech Stack' : 'Tecnologías' },
    { href: '#about', label: lang === 'en' ? 'About' : 'Sobre mí' },
    { href: '#contact', label: lang === 'en' ? 'Contact' : 'Contacto' },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-black/80 backdrop-blur-xl border-b border-white/5">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full overflow-hidden border border-accent/30 bg-zinc-900 group">
            <img 
              src="https://avatars.githubusercontent.com/u/95711823?v=4" 
              alt="Fredys Matos Borges - Logo" 
              className="w-full h-full object-cover transition-all duration-300 group-hover:scale-110"
              referrerPolicy="no-referrer"
            />
          </div>
          <div className="font-sans font-bold text-base tracking-tight hidden sm:block">
            FREDYS <span className="text-accent uppercase">MATOS BORGES</span>
          </div>
        </div>
        
        <div className="flex items-center gap-4 lg:gap-8">
          <div className="hidden lg:flex gap-8 text-[10px] font-mono font-bold uppercase tracking-[0.2em] text-white/50">
            {navLinks.map((link) => (
              <a key={link.href} href={link.href} className="hover:text-accent transition-colors">{link.label}</a>
            ))}
          </div>
          
          <div className="flex items-center gap-4">
            <button 
              onClick={() => setLang(lang === 'en' ? 'es' : 'en')}
              className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-[10px] font-bold hover:bg-white/5 transition-all focus:ring-2 focus:ring-accent"
            >
              {lang === 'en' ? 'ESP' : 'ENG'}
            </button>
            <a 
              href="#contact"
              className="hidden sm:inline-flex px-8 py-3.5 bg-accent text-black font-bold uppercase text-xs tracking-widest rounded-full hover:bg-white transition-all min-h-[44px] items-center"
            >
              {t.common.contactMe}
            </a>
            
            {/* Mobile Menu Button */}
            <button 
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden w-12 h-12 flex items-center justify-center text-white border border-white/20 bg-white/5 rounded-full hover:bg-white/10 transition-all z-[60]"
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={24} className="text-accent" /> : <Menu size={24} className="text-white" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            className="lg:hidden fixed inset-0 z-50 bg-zinc-950 px-6 py-24 flex flex-col items-center justify-center"
          >
            <div className="flex flex-col gap-8 text-center w-full max-w-xs">
              {navLinks.map((link) => (
                <a 
                  key={link.href} 
                  href={link.href} 
                  onClick={() => setIsOpen(false)}
                  className="text-2xl font-display font-bold uppercase tracking-[0.2em] text-white hover:text-accent transition-colors"
                >
                  {link.label}
                </a>
              ))}
              <div className="pt-10 border-t border-white/10 mt-4">
                <a 
                  href="#contact"
                  onClick={() => setIsOpen(false)}
                  className="inline-flex w-full justify-center px-10 py-5 bg-accent text-black font-black uppercase text-xs tracking-widest rounded-full hover:bg-white transition-all min-h-[44px] items-center shadow-2xl shadow-accent/20"
                >
                  {t.common.contactMe}
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};


/* ==========================================================================
   2. HERO SECTION
   ========================================================================== */
export const HeroSection = ({ t, lang }: SectionProps) => {
  return (
    <section id="hero" className="relative min-h-screen pt-28 flex items-center overflow-hidden technical-grid bg-bg-darker">
      <div className="absolute top-1/4 -right-20 w-96 h-96 border border-accent/20 rounded-full -z-0 opacity-20 animate-pulse" />
      <div className="absolute -bottom-20 -left-20 w-[500px] h-[500px] border border-accent/10 rounded-full -z-0 opacity-10" />

      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-12 gap-12 lg:gap-20 items-center relative z-10 w-full py-12">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="lg:col-span-7 text-center lg:text-left"
        >
          {/* Header Tag / Specialty */}
          <div className="mb-6 flex items-center justify-center lg:justify-start gap-3">
            <div className="h-[2px] w-8 lg:w-12 bg-accent" />
            <span className="text-accent font-mono font-bold uppercase tracking-[0.3em] text-[10px] sm:text-xs">
              Fredys Matos Borges
            </span>
          </div>

          <h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.1] mb-6 tracking-tight flex flex-col gap-1 lg:gap-2">
            <span className="text-white block">Hardware Engineer</span>
            <span className="text-accent block">PCB Design</span>
            <span className="text-accent block">Embedded Systems</span>
          </h1>

          <p className="text-base sm:text-lg text-white/70 max-w-2xl mb-10 leading-relaxed font-light mx-auto lg:mx-0">
            {lang === 'en' 
              ? 'Robust and manufacturing-oriented hardware design, from electronic architecture to PCB layout and system validation.' 
              : 'Diseño hardware robusto y orientado a fabricación, desde la arquitectura electrónica hasta el layout PCB y la validación del sistema.'
            }
          </p>

          <div className="flex items-center justify-center lg:justify-start gap-3 text-white/50 font-mono text-xs uppercase tracking-widest mb-10">
            <MapPin size={16} className="text-accent" />
            <span>Ciudad Real, España</span>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4">
            <a 
              href={lang === 'es' 
                ? "https://github.com/MbFredys/mbfredys.github.io/raw/13e36987624530d45dfdaa064cd8904c8bc484c8/C.V.%20Fredys%20Matos%20Borges.pdf"
                : "https://github.com/MbFredys/mbfredys.github.io/raw/13e36987624530d45dfdaa064cd8904c8bc484c8/C.V.%20Fredys%20Matos%20Borges%20EN.pdf"
              }
              target="_blank"
              rel="noopener noreferrer"
              download={lang === 'es' ? "C.V. Fredys Matos Borges.pdf" : "C.V. Fredys Matos Borges EN.pdf"}
              className="px-8 lg:px-10 py-4 bg-accent text-black font-bold uppercase text-[10px] sm:text-xs tracking-widest rounded-full hover:bg-white hover:scale-105 transition-all min-h-[44px] flex items-center gap-2 shadow-lg shadow-accent/20"
            >
              <Download size={14} />
              <span>{t.common.downloadCv}</span>
            </a>
            
            <a 
              href="#projects"
              className="px-8 lg:px-10 py-4 bg-transparent border border-white/20 text-white font-bold uppercase text-[10px] sm:text-xs tracking-widest rounded-full hover:bg-white/5 hover:border-white transition-all min-h-[44px] flex items-center"
            >
              {lang === 'en' ? 'View Projects' : 'Ver Proyectos'}
            </a>
          </div>
        </motion.div>

        {/* Profile Artwork Framed */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="lg:col-span-5 relative group"
        >
          <div className="relative aspect-square max-w-sm mx-auto">
            {/* Outer Accent Tech Ring */}
            <div className="absolute -inset-4 border-2 border-accent border-dashed rounded-full animate-[spin_40s_linear_infinite] opacity-40 -z-10" />
            <div className="absolute -inset-8 border border-white/10 rounded-full -z-20 opacity-20" />
            
            <div className="w-full h-full bg-zinc-900 rounded-full p-3 border border-white/10 overflow-hidden shadow-2xl relative">
              <div className="w-full h-full rounded-full overflow-hidden bg-black">
                <img 
                  src="https://raw.githubusercontent.com/MbFredys/mbfredys.github.io/1ec5dc9f72795e62d08dc58c96f43c0d920e4dc4/images/perfil-redonda.webp"
                  alt="Fredys Matos Borges"
                  className="w-full h-full object-cover object-center grayscale group-hover:grayscale-0 hover:grayscale-0 transition-all duration-500 hover:scale-105 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>
            
            {/* Technical Stamp */}
            <div className="absolute -bottom-4 -left-4 bg-zinc-900/90 backdrop-blur-md border border-white/10 p-4 rounded-2xl flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-accent/20 flex items-center justify-center text-accent">
                <CheckCircle size={16} />
              </div>
              <div className="text-[9px] font-mono uppercase tracking-widest text-left">
                <p className="text-white font-bold">DFM Ready</p>
                <p className="text-white/40">Zero Failure Goal</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};


/* ==========================================================================
   3. EXPERIENCIA DESTACADA (TIMELINE OF RESULTS)
   ========================================================================== */
const ExperienceItem = ({ exp, i, lang }: { exp: any, i: number, lang: Language, key?: any }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <motion.div 
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ delay: i * 0.1, duration: 0.5 }}
      className="relative pl-8 md:pl-10"
    >
      {/* Timeline dot */}
      <div className={`absolute -left-[5px] ${isExpanded ? 'top-7' : 'top-[22px]'} w-[11px] h-[11px] rounded-full transition-all duration-300 ${isExpanded ? 'bg-accent' : 'bg-white/40'} border-4 border-black ring-1 ring-accent`} />

      <div className={`bg-zinc-900/40 border border-white/5 hover:border-white/10 rounded-2xl transition-all duration-300 ${isExpanded ? 'pt-6 pb-6 px-5 sm:px-6' : 'py-3.5 px-5 sm:px-6'}`}>
        <div 
          onClick={() => setIsExpanded(!isExpanded)}
          className="flex flex-wrap justify-between items-center gap-4 cursor-pointer group"
        >
          <div className="flex-1 min-w-[200px]">
            <h3 className="text-lg sm:text-xl font-display font-medium text-white group-hover:text-accent transition-colors">
              {exp.title}
            </h3>
            <p className="text-accent text-[11px] font-mono font-bold uppercase tracking-widest mt-1">
              {exp.company}
            </p>
          </div>
          
          <div className="flex items-center gap-4">
            <div className="flex flex-col items-end text-right">
              <span className="px-3 py-1 bg-zinc-950 border border-white/5 rounded-full text-[9px] font-mono text-white/60 tracking-wider">
                {exp.period}
              </span>
              <span className="text-[9px] font-mono text-white/30 tracking-wider mt-1.5 uppercase">
                {exp.location}
              </span>
            </div>
            
            {/* Toggle icon */}
            <div className={`w-8 h-8 rounded-full border border-white/10 flex items-center justify-center text-white/40 group-hover:text-white group-hover:border-white/30 transition-all ${isExpanded ? 'rotate-180 text-accent border-accent/40 bg-accent/5' : ''}`}>
              <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-chevron-down"><path d="m6 9 6 6 6-6"/></svg>
            </div>
          </div>
        </div>

        {/* Collapsible Content */}
        <motion.div
          initial={false}
          animate={{ height: isExpanded ? 'auto' : 0, opacity: isExpanded ? 1 : 0 }}
          transition={{ duration: 0.3 }}
          className="overflow-hidden"
        >
          <div className="pt-6 mt-4 border-t border-white/5">
            <h4 className="text-[9px] font-mono font-bold uppercase tracking-widest text-accent/60 mb-3">
              {lang === 'en' ? 'ACHIEVEMENTS & IMPACT' : 'LOGROS E IMPACTO'}
            </h4>
            <ul className="space-y-3">
              {exp.details.map((detail: string, dIndex: number) => (
                <li key={dIndex} className="text-xs sm:text-sm text-white/60 flex items-start gap-3 leading-relaxed">
                  <span className="text-accent/60 mt-1.5 font-bold text-xs">•</span>
                  <span>{detail}</span>
                </li>
              ))}
            </ul>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export const ExperienceSection = ({ t, lang }: SectionProps) => {
  // We showcase all professional experiences as requested by the user
  const experiences = t.skillset.experienceList;

  return (
    <section id="experience" className="py-24 bg-black border-y border-white/5 relative">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-16">
          <div className="mb-4 text-accent font-mono font-bold uppercase tracking-[0.4em] text-[10px]">
            {lang === 'en' ? 'Professional Track Record' : 'Trayectoria Profesional'}
          </div>
          <h2 className="text-4xl md:text-5xl font-display font-bold text-white tracking-tight">
            {lang === 'en' ? 'Featured Experience' : 'Experiencia Destacada'}
          </h2>
          <p className="text-white/40 mt-4 max-w-xl mx-auto text-sm font-light leading-relaxed">
            {lang === 'en' 
              ? 'Results-oriented hardware development with deep attention to PCB reliability and industrial standards.' 
              : 'Desarrollo de hardware orientado a resultados con profunda atención a la confiabilidad del pcb y estándares industriales.'
            }
          </p>
        </div>

        <div className="relative border-l border-white/10 ml-4 md:ml-6 space-y-8">
          {experiences.map((exp, i) => (
            <ExperienceItem key={i} exp={exp} i={i} lang={lang} />
          ))}
        </div>
      </div>
    </section>
  );
};


/* ==========================================================================
   4. PROYECTOS DESTACADOS
   ========================================================================== */
export const ProjectsSection = ({ t, lang }: SectionProps) => {
  // Render the real first 3 projects from selectedProjects
  const projects = t.portfolio.selectedProjects.items;

  return (
    <section id="projects" className="py-24 bg-bg-darker relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <div className="mb-4 text-accent font-mono font-bold uppercase tracking-[0.4em] text-[10px]">
            {lang === 'en' ? 'Proven Competence' : 'Competencia Demostrada'}
          </div>
          <h2 className="text-4xl md:text-5xl font-display font-bold text-white tracking-tight">
            {lang === 'en' ? 'Featured Hardware Projects' : 'Proyectos Destacados'}
          </h2>
          <p className="text-white/40 mt-4 max-w-xl mx-auto text-sm font-light">
            {lang === 'en'
              ? 'Real-world electronic products developed from schematics and layout to automated production testing.'
              : 'Productos electrónicos reales desarrollados desde esquemáticos y layout hasta pruebas de producción automatizadas.'
            }
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <motion.div 
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-zinc-900/60 border border-white/5 rounded-3xl overflow-hidden flex flex-col hover:border-accent/40 shadow-xl group transition-all duration-300"
            >
              {/* Product Image Frame */}
              <div className="relative aspect-[16/10] overflow-hidden bg-black/40 border-b border-white/5">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover grayscale group-hover:scale-105 group-hover:grayscale-0 transition-all duration-500"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute top-4 left-4 flex flex-wrap gap-1.5">
                  {project.tags.map(tag => (
                    <span key={tag} className="px-2.5 py-0.5 bg-black/80 backdrop-blur-md border border-white/10 text-[8px] font-mono uppercase tracking-widest text-accent rounded-full font-bold">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Descriptions & Results Frame */}
              <div className="p-8 flex-grow flex flex-col justify-between">
                <div>
                  <h3 className="text-xl font-display font-bold text-white group-hover:text-accent transition-colors tracking-tight mb-4">
                    {project.title}
                  </h3>

                  {/* Structured exactly asrequested by user: Objetivo, Contribución, Tecnologías */}
                  <div className="space-y-4 mb-6">
                    <div>
                      <h4 className="text-[9px] font-mono font-bold uppercase tracking-widest text-accent">
                        {lang === 'en' ? 'OBJECTIVE' : 'OBJETIVO'}
                      </h4>
                      <p className="text-xs text-white/70 leading-relaxed mt-1">
                        {project.description}
                      </p>
                    </div>

                    <div>
                      <h4 className="text-[9px] font-mono font-bold uppercase tracking-widest text-accent">
                        {lang === 'en' ? 'MY CONTRIBUTION' : 'MI CONTRIBUCIÓN'}
                      </h4>
                      <p className="text-xs text-white/70 leading-relaxed mt-1">
                        {project.result}
                      </p>
                    </div>

                    <div>
                      <h4 className="text-[9px] font-mono font-bold uppercase tracking-widest text-accent">
                        {lang === 'en' ? 'TECHNOLOGIES' : 'TECNOLOGÍAS'}
                      </h4>
                      <p className="text-[10px] font-mono text-white/50 bg-black/40 p-2.5 rounded-lg border border-white/5 inline-block mt-1 font-bold">
                        {project.tags.join(' · ')}
                      </p>
                    </div>
                  </div>
                </div>

                <Link 
                  to={`/projects/${project.id}`}
                  className="w-full py-3.5 bg-white/5 border border-white/10 text-[9px] font-mono font-black uppercase tracking-widest text-white/75 rounded-xl hover:bg-accent hover:border-accent hover:text-black transition-all text-center flex items-center justify-center gap-1.5 group/btn"
                >
                  <span>{lang === 'en' ? 'VIEW FULL CASE' : 'VER CASO COMPLETO'}</span>
                  <ArrowRight size={12} className="group-hover/btn:translate-x-1 transition-transform" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};


/* ==========================================================================
   5. STACK TECNOLÓGICO (VISUAL BLOCKS - NO PERCENTAGES)
   ========================================================================== */
export const TechStackSection = ({ t, lang }: SectionProps) => {
  // Classify under specific, professional groups requested by user
  const categories = [
    {
      title: lang === 'en' ? 'PCB Design & CAD' : 'Diseño PCB y CAD',
      icon: <CircuitBoard className="text-accent" size={22} />,
      gradient: "from-accent/10 to-transparent",
      borderColor: "group-hover:border-accent/40",
      skills: ['Altium Designer', 'KiCad', 'High-Speed Layout', 'Multi-layer PCBs', 'DFM / DFA / DFT']
    },
    {
      title: lang === 'en' ? 'Embedded Systems' : 'Sistemas Embebidos',
      icon: <Cpu className="text-accent" size={22} />,
      gradient: "from-accent/10 to-transparent",
      borderColor: "group-hover:border-accent/40",
      skills: ['ESP32', 'STM32', 'C/C++ Programming', 'ARM Cortex', 'Firmware Design']
    },
    {
      title: lang === 'en' ? 'Protocols & Wireless' : 'Protocolos y Wireless',
      icon: <Radio className="text-accent" size={22} />,
      gradient: "from-accent/10 to-transparent",
      borderColor: "group-hover:border-accent/40",
      skills: ['SPI / I2C / UART', 'CAN Bus / RS-485', 'Wi-Fi & Bluetooth', 'RF Layout', 'USB / Ethernet']
    },
    {
      title: lang === 'en' ? 'Validation & Lab' : 'Validación y Laboratorio',
      icon: <Activity className="text-accent" size={22} />,
      gradient: "from-accent/10 to-transparent",
      borderColor: "group-hover:border-accent/40",
      skills: ['EMI / EMC Shielding', 'Signal Integrity', 'Power Integrity', 'Lab Instrumentation', 'Pre-compliance FCC/CE']
    }
  ];

  return (
    <section id="stack" className="py-24 bg-black border-y border-white/5 relative overflow-hidden">
      {/* Background ambient accents */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-80 h-80 bg-accent/5 rounded-full blur-[120px] -z-10" />
      <div className="absolute top-1/3 right-1/4 w-80 h-80 bg-teal-500/5 rounded-full blur-[120px] -z-10" />

      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <div className="mb-4 text-accent font-mono font-bold uppercase tracking-[0.4em] text-[10px]">
            {lang === 'en' ? 'Tools & Standards' : 'Herramientas y Estándares'}
          </div>
          <h2 className="text-4xl md:text-5xl font-display font-bold text-white tracking-tight">
            {lang === 'en' ? 'Technical Stack' : 'Stack Tecnológico'}
          </h2>
          <p className="text-white/40 mt-4 max-w-xl mx-auto text-sm font-light">
            {lang === 'en'
              ? 'Proven high-demand keywords and core hard competencies requested by industry recruiters. No arbitrary percentage bars.'
              : 'Tecnologías y palabras clave de alta demanda solicitadas por reclutadores industriales. Sin barras de porcentaje arbitrarias.'
            }
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((cat, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.5 }}
              className={`relative overflow-hidden bg-zinc-950/80 border border-white/10 rounded-2xl p-6 hover:-translate-y-1.5 transition-all duration-300 group shadow-lg ${cat.borderColor}`}
            >
              {/* Glossy top edge highlight */}
              <div className="absolute top-0 inset-x-0 h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
              
              {/* Radial subtle ambient hover glow */}
              <div className={`absolute inset-0 bg-gradient-to-br ${cat.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl -z-10`} />

              <div className="flex items-center gap-3 mb-6">
                <div className="p-2.5 bg-white/5 rounded-xl border border-white/10 group-hover:border-white/20 transition-all">
                  {cat.icon}
                </div>
                <h3 className="text-xs font-mono font-black uppercase tracking-widest text-white/95">
                  {cat.title}
                </h3>
              </div>

              <div className="flex flex-col gap-2.5">
                {cat.skills.map((skill) => (
                  <div 
                    key={skill}
                    className="px-3 py-3 bg-zinc-900/40 border border-white/5 rounded-xl text-[10px] sm:text-xs font-mono tracking-wider text-white/80 flex items-center justify-between group-hover:bg-zinc-900/80 group-hover:border-white/10 transition-all duration-300"
                  >
                    <span className="font-medium text-white/90">{skill}</span>
                    <span className="w-1.5 h-1.5 rounded-full bg-accent/60 group-hover:bg-accent animate-pulse" />
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};


/* ==========================================================================
   6. SOBRE MÍ
   ========================================================================== */
export const AboutSection = ({ t, lang }: SectionProps) => {
  return (
    <section id="about" className="py-24 bg-bg-darker relative">
      <div className="max-w-4xl mx-auto px-6">
        <div className="bg-zinc-900/40 border border-white/5 rounded-3xl p-8 sm:p-12 relative overflow-hidden flex flex-col md:flex-row gap-10 items-center">
          <div className="absolute top-0 right-0 w-40 h-40 bg-accent/5 rounded-full blur-3xl" />
          
          <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-full overflow-hidden border border-accent/30 bg-zinc-900 flex-shrink-0">
            <img 
              src="https://avatars.githubusercontent.com/u/95711823?v=4" 
              alt="Fredys Matos Borges Profile" 
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </div>

          <div>
            <div className="mb-3 text-accent font-mono font-semibold uppercase tracking-[0.4em] text-[8px] sm:text-[9px]">
              {lang === 'en' ? 'COMPETITIVE EDGE' : 'VENTAJA COMPETITIVA'}
            </div>
            
            <h2 className="text-3xl font-display font-medium text-white mb-4 tracking-tight">
              {lang === 'en' ? 'About Me' : 'Sobre mí'}
            </h2>

            <p className="text-sm sm:text-base text-white/70 leading-relaxed font-light tracking-wide">
              {lang === 'en' 
                ? 'Electrical automation engineer specializing in hardware design and embedded systems, with extensive experience developing electronic products from requirements to manufacturing. My main focus is on creating robust designs, optimized for manufacturability (DFM) and geared towards real product performance.'
                : 'Ingeniero especializado en diseño de hardware y sistemas embebidos, con experiencia en el desarrollo de productos electrónicos desde la definición de requisitos hasta la fabricación. Mi enfoque principal está en crear diseños robustos, optimizados para manufactura y orientados al rendimiento real del producto.'
              }
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};


/* ==========================================================================
   7. CONTACTO (SLEEK AND SIMPLE FORM WITH CONSENT)
   ========================================================================== */
export const ContactSection = ({ t, lang }: SectionProps) => {
  const [formData, setFormData] = useState({ 
    name: '', 
    email: '', 
    shortDescription: '',
    consent: false,
    hp_field: '' // anti-bot field
  });
  const [errorMessage, setErrorMessage] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Spam honeypot
    if (formData.hp_field) {
      console.warn('Bot detected via honey pot.');
      setStatus('success');
      return;
    }

    if (!formData.name || !formData.email || !formData.shortDescription) {
      setErrorMessage(lang === 'en' ? 'Please fill in all fields' : 'Por favor complete todos los campos');
      return;
    }

    if (!formData.consent) {
      setErrorMessage(lang === 'en' ? 'Please accept the data consent' : 'Por favor acepte el consentimiento de datos');
      return;
    }

    setStatus('loading');
    setErrorMessage('');

    try {
      const clientFormData = new FormData();
      clientFormData.append("access_key", secureAtob(OB_WEB3FORMS_KEY));
      clientFormData.append("name", formData.name);
      clientFormData.append("email", formData.email);
      clientFormData.append("message", formData.shortDescription);
      clientFormData.append("subject", `Nuevo contacto desde Portafolio: ${formData.name}`);
      clientFormData.append("from_name", 'Premium Portfolio Hub');

      const clientResponse = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Accept": "application/json"
        },
        body: clientFormData
      });

      const clientResult = await clientResponse.json();
      if (clientResult && clientResult.success) {
        setStatus('success');
        setFormData({ name: '', email: '', shortDescription: '', consent: false, hp_field: '' });
        setTimeout(() => setStatus('idle'), 5000);
      } else {
        console.error('Submission Error:', clientResult);
        setErrorMessage(clientResult.message || (lang === 'en' ? 'Error sending message. Try backup below:' : 'Error al enviar mensaje. Prueba la alternativa de respaldo abajo:'));
        setStatus('error');
      }
    } catch (clientError) {
      console.error('Submission Catch Error:', clientError);
      setErrorMessage(lang === 'en' ? 'Submission error. Try emailing directly or via WhatsApp below:' : 'Error al enviar. Prueba las alternativas de contacto directo abajo:');
      setStatus('error');
    }
  };

  return (
    <section id="contact" className="py-24 bg-black relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className="mb-4 text-accent font-mono font-bold uppercase tracking-[0.4em] text-[10px]">
              {t.contact.badge}
            </div>
            <h2 className="text-4xl md:text-5xl font-display font-medium text-white mb-6 tracking-tight">
              {lang === 'en' ? "Get In Touch " : "Ponte en Contacto "} {"{"} <br className="hidden sm:inline" />
              <span className="text-accent italic">Hablemos</span> {"}"}
            </h2>
            <p className="text-white/50 text-base mb-10 leading-relaxed font-light">
              {lang === 'en'
                ? "Let's turn your concept into robust hardware. Select your communication preference or send a message right here."
                : "Convirtamos tu concepto en hardware robusto. Selecciona tu vía preferida o envía un mensaje aquí mismo."
              }
            </p>

            {/* Direct Contact Channels */}
            <div className="space-y-4">
              <a 
                href={`mailto:${secureAtob(OB_EMAIL)}`}
                className="flex items-center gap-4 bg-zinc-900/50 p-4 rounded-xl border border-white/5 hover:border-accent hover:bg-zinc-900/80 transition-all font-mono"
              >
                <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center text-accent">
                  <Mail size={16} />
                </div>
                <div>
                  <p className="text-[8px] uppercase tracking-widest text-white/30">{t.contact.emailLabel}</p>
                  <p className="text-xs sm:text-sm font-semibold text-white/90">{secureAtob(OB_EMAIL)}</p>
                </div>
              </a>

              <button 
                onClick={() => handleContactAction('whatsapp', OB_PHONE, t.whatsapp.generic)}
                className="w-full flex items-center gap-4 bg-zinc-900/50 p-4 rounded-xl border border-white/5 hover:border-accent hover:bg-zinc-900/80 transition-all font-mono text-left"
              >
                <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center text-accent">
                  <MessageSquare size={16} />
                </div>
                <div>
                  <p className="text-[8px] uppercase tracking-widest text-white/30">WhatsApp</p>
                  <p className="text-xs sm:text-sm font-semibold text-white/90">{secureAtob(OB_PHONE_F)}</p>
                </div>
              </button>

              <div className="grid grid-cols-2 gap-4">
                <a 
                  href="https://www.linkedin.com/in/mbfredys"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 bg-zinc-900/50 p-4 rounded-xl border border-white/5 hover:border-accent hover:bg-zinc-900/80 transition-all font-mono"
                >
                  <Linkedin size={16} className="text-accent" />
                  <span className="text-[10px] uppercase font-bold text-white/80">LinkedIn</span>
                </a>

                <a 
                  href="https://github.com/MbFredys"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 bg-zinc-900/50 p-4 rounded-xl border border-white/5 hover:border-accent hover:bg-zinc-900/80 transition-all font-mono"
                >
                  <Github size={16} className="text-accent" />
                  <span className="text-[10px] uppercase font-bold text-white/80">GitHub</span>
                </a>

                <a 
                  href="https://www.hackster.io/mbfredys"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 bg-zinc-900/50 p-4 rounded-xl border border-white/5 hover:border-accent hover:bg-zinc-900/80 transition-all font-mono"
                >
                  <Cpu size={16} className="text-accent" />
                  <span className="text-[10px] uppercase font-bold text-white/80">Hackster.io</span>
                </a>

                <a 
                  href="https://www.pcbway.com/project/member/?bmbno=E261EC6F-F1A1-43"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 bg-zinc-900/50 p-4 rounded-xl border border-white/5 hover:border-accent hover:bg-zinc-900/80 transition-all font-mono"
                >
                  <CircuitBoard size={16} className="text-accent" />
                  <span className="text-[10px] uppercase font-bold text-white/80">PCBWay</span>
                </a>
              </div>
            </div>
          </div>

          {/* Short Form frame with Consent checkbox right above CTA Button */}
          <div className="bg-zinc-900/70 p-8 sm:p-10 rounded-3xl border border-white/5 shadow-2xl relative">
            <h3 className="text-lg font-display font-medium text-white mb-6">
              {lang === 'en' ? 'Send a Quick Message' : 'Envía un Mensaje Rápido'}
            </h3>
            
            <form className="space-y-4" onSubmit={handleSubmit}>
              <div className="hidden" aria-hidden="true">
                <input 
                  type="text" 
                  name="hp_field" 
                  tabIndex={-1} 
                  autoComplete="off" 
                  onChange={(e) => setFormData({ ...formData, hp_field: e.target.value })}
                />
              </div>

              <div>
                <input 
                  type="text" 
                  required
                  placeholder={lang === 'en' ? 'Your Name' : 'Tu Nombre'} 
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full bg-black/40 border border-white/10 rounded-xl p-4 text-xs sm:text-sm focus:border-accent outline-none transition-all placeholder:text-white/20 font-mono" 
                />
              </div>

              <div>
                <input 
                  type="email" 
                  required
                  placeholder={lang === 'en' ? 'Your Email' : 'Tu Correo Correo'} 
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full bg-black/40 border border-white/10 rounded-xl p-4 text-xs sm:text-sm focus:border-accent outline-none transition-all placeholder:text-white/20 font-mono" 
                />
              </div>

              <div>
                <textarea 
                  rows={4} 
                  required
                  placeholder={lang === 'en' ? 'Briefly describe your project or inquiry...' : 'Describe brevemente tu proyecto o consulta...'} 
                  value={formData.shortDescription}
                  onChange={(e) => setFormData({ ...formData, shortDescription: e.target.value })}
                  className="w-full bg-black/40 border border-white/10 rounded-xl p-4 text-xs sm:text-sm focus:border-accent outline-none transition-all placeholder:text-white/20 font-mono"
                ></textarea>
              </div>

              {/* Consent check critical positioning: Right above Submit Button */}
              <div className="flex items-start gap-3 px-1 py-1">
                <input 
                  type="checkbox" 
                  id="consent-check" 
                  required
                  checked={formData.consent}
                  onChange={(e) => setFormData({ ...formData, consent: e.target.checked })}
                  className="mt-0.5 w-4 h-4 rounded border-white/10 bg-black/40 text-accent focus:ring-accent accent-accent cursor-pointer"
                />
                <label htmlFor="consent-check" className="text-[9px] font-mono font-bold uppercase tracking-widest text-white/40 cursor-pointer hover:text-white transition-all leading-tight">
                  {t.contact.form.consent}
                </label>
              </div>

              <div className="pt-2">
                <button 
                  type="submit" 
                  disabled={status === 'loading'}
                  className={`w-full py-4 font-bold uppercase text-[10px] sm:text-xs tracking-widest rounded-xl transition-all shadow-xl flex items-center justify-center gap-3 ${
                    status === 'loading' ? 'bg-zinc-800 text-white/50 cursor-wait' :
                    status === 'success' ? 'bg-green-600 text-white' :
                    status === 'error' ? 'bg-red-600 text-white' :
                    'bg-accent text-black hover:bg-white shadow-accent/20'
                  }`}
                >
                  {status === 'loading' ? (
                    <>{lang === 'en' ? 'Sending...' : 'Enviando...'}</>
                  ) : status === 'success' ? (
                    <>{lang === 'en' ? 'Sent successfully!' : '¡Enviado con éxito!'}</>
                  ) : status === 'error' ? (
                    <>{lang === 'en' ? 'Error sending' : 'Error al enviar'}</>
                  ) : (
                    lang === 'en' ? 'Hablemos' : 'Hablemos'
                  )}
                </button>
                {errorMessage && (
                  <div className="mt-4 p-4 rounded-xl bg-red-950/20 border border-red-900/40">
                    <p className="text-[10px] text-red-400 font-bold uppercase tracking-widest text-center leading-relaxed">
                      {errorMessage}
                    </p>
                    {status === 'error' && (
                      <div className="mt-4 flex flex-col gap-2">
                        <button
                          type="button"
                          onClick={() => {
                            const pValue = secureAtob(OB_PHONE);
                            const msg = `Hola Fredys, soy ${formData.name}. Correo: ${formData.email}. Mensaje: ${formData.shortDescription}`;
                            window.open(`https://wa.me/${pValue}?text=${encodeURIComponent(msg)}`, '_blank', 'noopener,noreferrer');
                          }}
                          className="w-full py-3 bg-zinc-950 hover:bg-zinc-900 text-accent border border-accent/20 rounded-lg text-[9px] font-mono font-black uppercase tracking-widest flex items-center justify-center gap-2"
                        >
                          <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                          <span>{lang === 'en' ? 'Send via WhatsApp' : 'Enviar por WhatsApp'}</span>
                        </button>
                        <a
                          href={`mailto:${secureAtob(OB_EMAIL)}?subject=${encodeURIComponent(`Contacto Portafolio: ${formData.name}`)}&body=${encodeURIComponent(`Nombre: ${formData.name}\nEmail: ${formData.email}\n\nMensaje:\n${formData.shortDescription}`)}`}
                          className="w-full py-3 bg-zinc-950 hover:bg-zinc-900 text-white/80 border border-white/5 rounded-lg text-[10px] font-mono font-black uppercase tracking-widest flex items-center justify-center gap-2 text-center"
                        >
                          <span>{lang === 'en' ? 'Send via Email Direct' : 'Enviar por Email Directo'}</span>
                        </a>
                      </div>
                    )}
                  </div>
                )}
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};


/* ==========================================================================
   8. FOOTER
   ========================================================================== */
export const Footer = ({ t, lang }: SectionProps) => {
  return (
    <footer className="py-12 bg-bg-darker border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-full overflow-hidden border border-accent/20 bg-zinc-900">
            <img 
              src="https://avatars.githubusercontent.com/u/95711823?v=4" 
              alt="Fredys Profile" 
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </div>
          <span className="font-display text-sm font-semibold tracking-tight text-white/80">
            Fredys <span className="text-accent">Matos Borges</span>
          </span>
        </div>
        
        <p className="text-[9px] font-mono text-white/40 uppercase tracking-widest font-semibold text-center sm:text-right">
          &copy; {new Date().getFullYear()} Fredys Matos Borges. {t.common.allRightsReserved}
        </p>
      </div>
    </footer>
  );
};
