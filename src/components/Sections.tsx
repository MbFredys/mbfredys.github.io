
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Link } from 'react-router-dom';
import { 
  Cpu, 
  CircuitBoard,
  AlertTriangle, 
  CheckCircle, 
  Zap, 
  ZapOff,
  Flame,
  Trash2,
  Shield, 
  Search, 
  Settings, 
  FileText, 
  User, 
  CreditCard, 
  Layout, 
  Radio,
  Layers,
  Activity,
  Waves,
  Power,
  Factory,
  ArrowRight, 
  Mail, 
  Phone, 
  MapPin, 
  Plus, 
  Download,
  Linkedin,
  Instagram,
  Facebook,
  Twitter,
  MessageSquare,
  Check,
  Menu,
  X
} from 'lucide-react';
import { Language, Translation, OB_EMAIL, OB_PHONE, OB_PHONE_F, secureAtob } from '../constants';

const handleContactAction = (type: 'whatsapp' | 'tel', obValue: string, message?: string) => {
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

export const Navbar = ({ lang, setLang, t }: { lang: Language, setLang: (l: Language) => void, t: Translation }) => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { href: '#trust', label: lang === 'en' ? 'Trust' : 'Fiabilidad' },
    { href: '#the-cost', label: lang === 'en' ? 'Cost of Errors' : 'Coste de Errores' },
    { href: '#how-it-works', label: lang === 'en' ? 'How it Works' : 'Cómo Funciona' },
    { href: '#samples', label: t.nav.portfolio },
    { href: '#about', label: t.nav.about },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-black/60 backdrop-blur-xl border-b border-white/5">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full overflow-hidden border border-accent/30 bg-zinc-900 group">
            <img 
              src="https://avatars.githubusercontent.com/u/95711823?v=4" 
              alt="Fredys Matos" 
              className="w-full h-full object-cover transition-all duration-300 group-hover:scale-110"
              referrerPolicy="no-referrer"
            />
          </div>
          <div className="font-sans font-bold text-lg tracking-tight hidden sm:block">
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
              href="#"
              onClick={(e) => { e.preventDefault(); handleContactAction('whatsapp', OB_PHONE, t.whatsapp.generic); }}
              className="hidden sm:inline-flex px-8 py-4 bg-accent text-black font-bold uppercase text-xs tracking-widest rounded-full hover:bg-white transition-all min-h-[44px] items-center"
            >
              {t.common.hireMe}
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
                <button 
                  onClick={() => { setIsOpen(false); handleContactAction('whatsapp', OB_PHONE, t.whatsapp.generic); }}
                  className="inline-flex w-full justify-center px-10 py-5 bg-accent text-black font-black uppercase text-xs tracking-widest rounded-full hover:bg-white transition-all min-h-[44px] items-center shadow-2xl shadow-accent/20"
                >
                  {t.common.hireMe}
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export const Hero = ({ t }: SectionProps) => (
  <section className="relative min-h-screen pt-20 flex items-center overflow-hidden technical-grid bg-bg-darker">
    {/* Background Decorative Circles */}
    <div className="absolute top-1/4 -right-20 w-96 h-96 border border-accent/20 rounded-full -z-0 opacity-20 animate-pulse" />
    <div className="absolute -bottom-20 -left-20 w-[500px] h-[500px] border border-accent/10 rounded-full -z-0 opacity-10" />

    <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-20 items-center relative z-10 w-full">
      <motion.div
        initial={{ opacity: 0, x: -30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
      >
        <div className="mb-6 flex items-center gap-3">
            <div className="h-[2px] w-12 bg-accent" />
            <span className="text-accent font-mono font-bold uppercase tracking-[0.3em] text-[10px]">{t.hero.specialist}</span>
        </div>
        <h1 className="font-display text-6xl md:text-8xl font-bold leading-[0.9] text-white mb-6 tracking-[-0.04em]">
          {t.hero.greeting} <br />
          <span className="text-accent">{t.hero.role}</span>
        </h1>
        <p className="text-xl text-white/50 max-w-lg mb-10 leading-relaxed font-light tracking-tight">
          {t.hero.subtitle}
        </p>

        {/* Stats inspired by reference image */}
        <div className="flex justify-center sm:justify-start gap-12 sm:gap-24 mb-12 border-t border-white/10 pt-10 px-4">
          <div className="text-center sm:text-left">
            <p className="text-4xl font-display font-bold text-accent mb-1">5+</p>
            <p className="text-[9px] font-mono uppercase tracking-widest text-white/40">{t.hero.yearsExp}</p>
          </div>
          <div className="text-center sm:text-left">
            <p className="text-4xl font-display font-bold text-accent mb-1">60+</p>
            <p className="text-[9px] font-mono uppercase tracking-widest text-white/40">{t.hero.projectsComplete}</p>
          </div>
        </div>

        <div className="flex flex-wrap items-center gap-4">
          <button 
            onClick={() => handleContactAction('whatsapp', OB_PHONE, t.whatsapp.hero)}
            className="px-10 py-4 bg-accent text-black font-bold uppercase text-[10px] tracking-[0.2em] rounded-full hover:bg-white transition-all min-h-[44px] flex items-center shadow-lg shadow-accent/20"
          >
            {t.hero.getReview}
          </button>
          <a 
            href="#samples"
            className="px-10 py-4 bg-transparent border border-white/20 text-white font-bold uppercase text-[10px] tracking-[0.2em] rounded-full hover:bg-white hover:text-black transition-all min-h-[44px] flex items-center"
          >
            {t.hero.viewSamples}
          </a>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, delay: 0.2 }}
        className="relative group"
      >
        <div className="relative aspect-[4/5] max-w-md mx-auto">
          {/* Main profile circle inspired layout */}
          <div className="absolute inset-0 border-4 border-accent rounded-full p-2 translate-x-4 -translate-y-4 -z-10 opacity-30" />
          <div className="w-full h-full bg-zinc-900 rounded-2xl overflow-hidden shadow-[0_0_100px_rgba(220,38,38,0.1)] grayscale hover:grayscale-0 transition-all duration-700">
             <img 
               src="https://raw.githubusercontent.com/MbFredys/mbfredys.github.io/47ba89e7f14ab204eb9e98f56ce4f324ed4c88de/images/Imagen-trabajando-Fredys-2.webp"
               alt="Fredys Matos Borges"
               className="w-full h-full object-cover object-top"
               referrerPolicy="no-referrer"
             />
          </div>
          <div className="absolute -bottom-10 -right-10 w-40 h-40 border-8 border-accent rounded-full -z-10 opacity-20" />
        </div>
      </motion.div>
    </div>
  </section>
);

export const SkillsetTabs = ({ t }: SectionProps) => {
  const [activeTab, setActiveTab] = useState('about');
  const [expandedRole, setExpandedRole] = useState<number | null>(null);
  const [expandedExp, setExpandedExp] = useState<number | null>(0);
  
  const tabs = [
    { id: 'about', label: t.skillset.tabs.about },
    { id: 'skillset', label: t.skillset.tabs.skillset },
    { id: 'education', label: t.skillset.tabs.education },
    { id: 'experience', label: t.skillset.tabs.experience }
  ];

  return (
    <section id="about" className="py-24 bg-bg-darker">
       <div className="max-w-7xl mx-auto px-6">
          <div className="flex justify-center mb-12 border-b border-white/5 overflow-x-auto no-scrollbar whitespace-nowrap">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-8 sm:px-12 py-6 text-[10px] font-mono uppercase tracking-[0.2em] font-bold transition-all relative flex-shrink-0 ${activeTab === tab.id ? 'text-accent' : 'text-white/40 hover:text-white'}`}
              >
                {tab.label}
                {activeTab === tab.id && <motion.div layoutId="tab-active" className="absolute bottom-0 left-0 w-full h-[2px] bg-accent" />}
              </button>
            ))}
          </div>

          <div className="min-h-[400px]">
              {activeTab === 'about' && (
                <div className="grid lg:grid-cols-2 gap-20 items-center">
                  <div className="relative">
                     <div className="relative w-full max-w-sm mx-auto aspect-square">
                        <div className="absolute inset-0 border-2 border-accent border-dashed rounded-full animate-[spin_20s_linear_infinite]" />
                        <div className="absolute inset-4 rounded-full overflow-hidden border-8 border-zinc-900 bg-zinc-900">
                          <img 
                            src="https://raw.githubusercontent.com/MbFredys/mbfredys.github.io/5b077670ffc85fdc38d7978ac03a7b8ff81b9ff9/images/perfil-7.webp" 
                            alt="Fredys Matos" 
                            className="w-full h-full object-cover object-top grayscale brightness-75 hover:grayscale-0 transition-all duration-500"
                            referrerPolicy="no-referrer"
                            loading="eager"
                          />
                        </div>
                     </div>
                  </div>
                  
                  <div>
                    <div className="mb-4 text-accent font-mono font-bold uppercase tracking-[0.4em] text-[10px]">{t.about.badge}</div>
                    <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-8 tracking-tight">
                      {t.about.title} <span className="text-accent italic">{t.about.titleAccent}</span>
                    </h2>
                    <p className="text-white/60 text-lg leading-relaxed mb-8 font-light tracking-tight">
                      {t.about.description}
                    </p>
                    
                    <div className="grid grid-cols-2 gap-8 mb-10">
                      <div>
                        <p className="text-[9px] font-mono uppercase tracking-widest text-white/30 mb-2 font-bold">{t.about.specialization}</p>
                        <p className="text-white font-medium tracking-tight">{t.about.specializationValue}</p>
                      </div>
                      <div>
                        <p className="text-[9px] font-mono uppercase tracking-widest text-white/30 mb-2 font-bold">{t.about.keyTools}</p>
                        <p className="text-white font-medium tracking-tight">{t.about.keyToolsValue}</p>
                      </div>
                      <div>
                        <p className="text-[9px] font-mono uppercase tracking-widest text-white/30 mb-2 font-bold">{t.about.expertise}</p>
                        <p className="text-white font-medium tracking-tight">{t.about.expertiseValue}</p>
                      </div>
                      <div>
                        <p className="text-[9px] font-mono uppercase tracking-widest text-white/30 mb-2 font-bold">{t.about.focus}</p>
                        <p className="text-white font-medium tracking-tight">{t.about.focusDesc}</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-6">
                       <button 
                         onClick={() => handleContactAction('whatsapp', OB_PHONE, t.whatsapp.about)}
                         className="px-10 py-4 bg-accent text-black font-bold uppercase text-[10px] tracking-widest rounded-full hover:bg-white transition-all shadow-lg shadow-accent/20 min-h-[44px] flex items-center"
                       >
                         {t.common.hireMe}
                       </button>
                       <img src="https://signature.freebiestore.xyz/wp-content/uploads/2021/04/Professional-Signature-Design-Free-Vector.png" alt="Signature" className="h-10 opacity-40 invert grayscale brightness-200 hidden sm:block" />
                    </div>
                  </div>
                </div>
              )}
              {activeTab === 'skillset' && (
                <div className="max-w-4xl mx-auto py-8">
                  <div className="text-center mb-16">
                    <h3 className="text-3xl font-display font-bold mb-6 tracking-tight">{t.skillset.focus}</h3>
                    <p className="text-white/50 max-w-2xl mx-auto font-light italic tracking-tight text-lg">{t.skillset.focusDesc}</p>
                  </div>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                     {t.skillset.expertise.map((skill, i) => (
                       <div 
                         key={skill}
                         className="flex items-center gap-4 bg-zinc-900/50 border border-white/5 p-6 rounded-2xl group hover:border-accent/40 hover:bg-zinc-900/80 transition-all duration-300 hover:-translate-y-1"
                       >
                          <div className="w-10 h-10 rounded-xl bg-accent/10 border border-accent/20 flex items-center justify-center text-accent group-hover:bg-accent group-hover:text-black transition-all duration-300">
                             {i === 0 && <Cpu size={18} strokeWidth={3} />}
                             {i === 1 && <CircuitBoard size={18} strokeWidth={3} />}
                             {i === 2 && <Zap size={18} strokeWidth={3} />}
                             {i === 3 && <Layers size={18} strokeWidth={3} />}
                             {i === 4 && <Activity size={18} strokeWidth={3} />}
                             {i === 5 && <Power size={18} strokeWidth={3} />}
                             {i === 6 && <Radio size={18} strokeWidth={3} />}
                             {i === 7 && <Factory size={18} strokeWidth={3} />}
                          </div>
                          <span className="text-[12px] font-bold uppercase tracking-widest text-white/80 group-hover:text-white transition-colors">
                            {skill}
                          </span>
                       </div>
                     ))}
                  </div>
               </div>
              )}
             
             {activeTab === 'education' && (
                <div className="space-y-12 py-10">
                  {t.skillset.educationList.map((edu, i) => (
                    <motion.div 
                      key={i}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.1 }}
                      className="relative pl-8 border-l border-white/10"
                    >
                      <div className="absolute -left-[5px] top-0 w-[9px] h-[9px] rounded-full bg-accent" />
                      <div className="flex flex-wrap justify-between items-start gap-4 mb-4">
                        <div>
                          <h3 className="text-xl font-display font-bold text-white mb-1">{edu.title}</h3>
                          <p className="text-accent text-xs font-mono font-bold uppercase tracking-widest">{edu.institution}</p>
                        </div>
                        <span className="px-4 py-1 bg-zinc-900 border border-white/5 rounded-full text-[9px] font-mono font-bold text-white/40 uppercase tracking-widest">
                          {edu.period}
                        </span>
                      </div>
                      <p className="text-sm text-white/50 leading-relaxed font-light italic">{edu.desc}</p>
                    </motion.div>
                  ))}
                </div>
              )}

              {activeTab === 'experience' && (
                <div className="space-y-6 py-10">
                  {t.skillset.experienceList.map((exp, i) => (
                    <motion.div 
                      key={i}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.1 }}
                      className={`relative pl-8 border-l transition-all duration-300 ${expandedExp === i ? 'border-accent pb-8' : 'border-white/10 pb-4'}`}
                    >
                      <div className={`absolute -left-[5px] top-0 w-[9px] h-[9px] rounded-full transition-all duration-300 ${expandedExp === i ? 'bg-accent scale-125' : 'bg-white/20'}`} />
                      
                      <div 
                        className="cursor-pointer group"
                        onClick={() => setExpandedExp(expandedExp === i ? null : i)}
                      >
                        <div className="flex flex-wrap justify-between items-start gap-4">
                          <div>
                            <h3 className={`text-xl font-display font-bold transition-colors ${expandedExp === i ? 'text-accent' : 'text-white group-hover:text-accent/70'}`}>
                              {exp.title}
                            </h3>
                            <div className="flex items-center gap-3 mt-1">
                               <p className="text-white/60 text-xs font-mono font-bold uppercase tracking-widest">{exp.company}</p>
                               <span className="w-1 h-1 rounded-full bg-white/20" />
                               <p className="text-white/30 text-[9px] font-mono uppercase tracking-widest">{exp.location}</p>
                            </div>
                          </div>
                          <div className="flex items-center gap-4">
                            <span className="px-4 py-1 bg-zinc-900 border border-white/5 rounded-full text-[9px] font-mono font-bold text-white/40 uppercase tracking-widest">
                              {exp.period}
                            </span>
                            <motion.div
                              animate={{ rotate: expandedExp === i ? 90 : 0 }}
                              className="text-white/20"
                            >
                              <Plus size={14} className={expandedExp === i ? 'text-accent' : ''} />
                            </motion.div>
                          </div>
                        </div>
                      </div>

                      <AnimatePresence>
                        {expandedExp === i && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: 'auto', opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            className="overflow-hidden"
                          >
                            <ul className="space-y-3 mt-8">
                              {exp.details.map((detail, j) => (
                                <motion.li 
                                  key={j}
                                  initial={{ x: -10, opacity: 0 }}
                                  animate={{ x: 0, opacity: 1 }}
                                  transition={{ delay: j * 0.05 }}
                                  className="flex gap-3 text-sm text-white/50 font-light leading-relaxed"
                                >
                                  <ArrowRight size={14} className="mt-1 text-accent flex-shrink-0 opacity-40" />
                                  <span>{detail}</span>
                                </motion.li>
                              ))}
                            </ul>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </motion.div>
                  ))}
                </div>
              )}
          </div>
       </div>
    </section>
  );
};


export const ProblemSection = ({ t }: SectionProps) => {
  const getIcon = (type: string) => {
    switch (type) {
      case 'noise': return <ZapOff size={40} className="text-accent" />;
      case 'power': return <Flame size={40} className="text-accent" />;
      case 'mfg': return <Trash2 size={40} className="text-zinc-500" />;
      default: return <AlertTriangle size={40} className="text-accent" />;
    }
  };

  return (
    <section id="the-cost" className="py-32 bg-bg-darker text-center relative overflow-hidden">
      {/* Narrative visual: Faded circuit path that breaks */}
      <div className="absolute top-0 left-0 w-full h-full opacity-[0.03] pointer-events-none text-accent">
        <svg width="100%" height="100%" viewBox="0 0 1000 1000" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 100H200L250 150H500L550 100H1000" stroke="currentColor" strokeWidth="2" />
          <path d="M0 300H150L200 350V500H400L450 450H1000" stroke="currentColor" strokeWidth="2" />
          <path d="M0 700H300L350 750H600V900L700 1000" stroke="currentColor" strokeWidth="2" />
        </svg>
      </div>

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           className="mb-16"
        >
          <div className="mb-6 flex justify-center items-center gap-4">
              <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
              <span className="text-accent font-mono font-bold uppercase tracking-[0.4em] text-[10px]">{t.problem.badge}</span>
              <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
          </div>
          <h2 className="text-4xl md:text-6xl font-display font-bold text-white mb-6 tracking-tight leading-[1.1]">
            {t.problem.title} <br /> 
            <span className="italic text-accent underline decoration-accent/20 underline-offset-8 decoration-4">{t.problem.titleAccent}</span>
          </h2>
        </motion.div>
        
        <div className="grid md:grid-cols-3 gap-8 text-left mb-20">
           {t.problem.consequences.map((c, i) => (
              <motion.div 
                key={i} 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="p-10 bg-zinc-900 border border-white/5 rounded-[40px] hover:border-accent/30 transition-all group relative overflow-hidden shadow-2xl hover:shadow-accent/5 hover:-translate-y-2"
              >
                 <div className="absolute top-0 right-0 p-8 opacity-[0.02] group-hover:opacity-[0.05] transition-opacity">
                    {getIcon(c.type)}
                 </div>
                 <div className="mb-8 w-16 h-16 rounded-2xl bg-white/5 flex items-center justify-center group-hover:scale-110 transition-transform shadow-inner">
                    {getIcon(c.type)}
                 </div>
                 <h4 className="text-xl font-display font-bold mb-4 uppercase tracking-tight text-white group-hover:text-accent transition-colors">{c.title}</h4>
                 <p className="text-sm text-white/40 leading-relaxed font-light italic">{c.desc}</p>
                 
                 <div className="mt-8 h-[1px] w-full bg-gradient-to-r from-accent/20 to-transparent transition-all" />
              </motion.div>
           ))}
        </div>
        
        <div className="flex flex-col items-center">
            <p className="mb-10 text-white/30 uppercase tracking-[0.3em] text-[10px] font-bold max-w-lg mx-auto leading-relaxed">
              {t.problem.footer}
            </p>
            <button 
              onClick={() => handleContactAction('whatsapp', OB_PHONE, t.whatsapp.problem)}
              className="px-10 py-5 bg-accent hover:bg-white text-white hover:text-black font-black uppercase text-xs tracking-[0.2em] rounded-full transition-all shadow-[0_20px_50px_rgba(220,38,38,0.2)] hover:shadow-white/10 group flex items-center gap-4"
            >
              {t.problem.cta}
              <ArrowRight size={18} className="group-hover:translate-x-2 transition-transform" />
            </button>
        </div>
      </div>
    </section>
  );
};


export const ServicesSection = ({ t }: SectionProps) => (
  <section id="services" className="py-32 bg-bg-darker relative overflow-hidden">
    <div className="absolute top-1/2 left-0 w-96 h-96 bg-accent opacity-[0.03] blur-[100px] -z-0" />
    <div className="max-w-7xl mx-auto px-6 relative z-10">
      <div className="grid lg:grid-cols-2 gap-20 items-end">
         <div>
            <div className="mb-4 text-accent font-mono font-bold uppercase tracking-[0.4em] text-[10px]">{t.services.badge}</div>
            <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-8 tracking-tight">
              {t.services.title} <span className="text-accent italic">{t.services.titleAccent}</span>
            </h2>
            <p className="text-white/60 text-lg mb-12 leading-relaxed">
               {t.services.description}
            </p>
                         <div className="space-y-6 mb-12">
               {t.services.list.map((serv, i) => (
                 <div key={i} className="flex gap-4 items-center">
                    <div className="w-1 h-1 rounded-full bg-accent" />
                    <div>
                       <p className="font-bold text-white uppercase font-mono tracking-[0.2em] text-[10px]">{serv.name}</p>
                    </div>
                 </div>
               ))}
            </div>

            <div className="grid grid-cols-2 gap-6">
              {t.services.cards.slice(0, 2).map((card, i) => (
                <div 
                  key={i}
                  className="bg-zinc-900 border border-white/5 p-8 rounded-[32px] hover:border-accent/40 transition-all flex flex-col justify-center items-center text-center group relative overflow-hidden min-h-[240px]"
                >
                   {/* Blurred Background Image */}
                   <div className="absolute inset-0 z-0">
                     <img 
                       src={card.image} 
                       alt="" 
                       className="w-full h-full object-cover grayscale opacity-20 blur-[2px] transition-all duration-700 group-hover:scale-110 group-hover:opacity-40 group-hover:grayscale-0 group-hover:blur-0"
                     />
                     <div className="absolute inset-0 bg-black/60 group-hover:bg-black/30 transition-colors" />
                   </div>

                   <div className="relative z-10 flex flex-col items-center">
                     <div className="mb-4 transition-transform group-hover:scale-110 text-accent">
                        {i === 0 && <Shield size={32} />}
                        {i === 1 && <Cpu size={32} />}
                     </div>
                     <h4 className="font-bold text-white uppercase tracking-widest text-[11px] mb-3 leading-tight">
                       {card.name}
                     </h4>
                     <p className="text-[10px] text-white/50 italic leading-relaxed group-hover:text-white transition-colors">
                       {card.desc}
                     </p>
                   </div>
                </div>
              ))}
            </div>
         </div>

         <div className="grid grid-cols-2 gap-6">
            {t.services.cards.slice(2).map((card, i) => {
               const realIdx = i + 2;
               return (
                 <div 
                   key={realIdx}
                   className="bg-zinc-900 border border-white/5 p-8 rounded-[32px] hover:border-accent/40 transition-all flex flex-col justify-center items-center text-center group relative overflow-hidden min-h-[240px]"
                 >
                    {/* Blurred Background Image */}
                    <div className="absolute inset-0 z-0">
                      <img 
                        src={card.image} 
                        alt="" 
                        className="w-full h-full object-cover grayscale opacity-20 blur-[2px] transition-all duration-700 group-hover:scale-110 group-hover:opacity-40 group-hover:grayscale-0 group-hover:blur-0"
                      />
                      <div className="absolute inset-0 bg-black/60 group-hover:bg-black/30 transition-colors" />
                    </div>

                    <div className="relative z-10 flex flex-col items-center">
                      <div className="mb-4 transition-transform group-hover:scale-110 text-accent">
                         {realIdx === 2 && <Zap size={32} />}
                         {realIdx === 3 && <Radio size={32} />}
                         {realIdx === 4 && <Layers size={32} />}
                         {realIdx === 5 && <CheckCircle size={32} />}
                      </div>
                      <h4 className="font-bold text-white uppercase tracking-widest text-[11px] mb-3 leading-tight">
                        {card.name}
                      </h4>
                      <p className="text-[10px] text-white/50 italic leading-relaxed group-hover:text-white transition-colors">
                        {card.desc}
                      </p>
                    </div>
                 </div>
               );
            })}
         </div>
      </div>
    </div>
  </section>
);


export const PricingSection = ({ t }: SectionProps) => (
  <section id="pricing" className="py-32 bg-black relative overflow-hidden">
    {/* Decorative technical elements */}
    <div className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none">
      <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-accent/20 blur-[120px] rounded-full" />
      <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-accent/10 blur-[100px] rounded-full" />
      <div className="h-full w-full technical-grid opacity-20" />
    </div>

    <div className="max-w-7xl mx-auto px-6 relative z-10">
       <div className="text-center mb-24 max-w-2xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-4 text-accent font-mono font-bold uppercase tracking-[0.4em] text-[10px]"
          >
            {t.pricing.badge}
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-7xl font-display font-bold text-white italic tracking-tight"
          >
            {t.pricing.title}
          </motion.h2>
          <div className="mt-6 h-1 w-24 bg-accent mx-auto rounded-full" />
       </div>

       <div className="flex flex-wrap justify-center gap-8 items-stretch max-w-5xl mx-auto">
          {t.pricing.plans.map((plan, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className={`flex flex-col p-10 sm:p-12 rounded-[40px] text-center group transition-all relative w-full md:w-[calc(50%-1rem)] lg:max-w-[440px] ${
                plan.featured 
                ? 'bg-zinc-900 border-2 border-accent scale-105 z-10 shadow-[0_0_50px_rgba(220,38,38,0.15)] ring-4 ring-accent/5' 
                : 'bg-zinc-900/40 border border-white/10 backdrop-blur-sm hover:border-white/20'
              }`}
            >
               {plan.featured && (
                 <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 px-8 py-2.5 bg-accent text-black font-black uppercase text-[10px] tracking-[0.25em] rounded-full shadow-lg whitespace-nowrap">
                   {t.pricing.featuredBadge}
                 </div>
               )}
               
               <div className="mb-8">
                 <h3 className={`text-2xl font-display font-bold mb-2 tracking-tight ${plan.featured ? 'text-accent' : 'text-white'}`}>
                   {plan.name}
                 </h3>
                 <p className="text-accent/60 text-[10px] font-mono font-bold uppercase tracking-widest mb-4">
                   {plan.subtitle}
                 </p>
                 <div className="h-[2px] w-8 bg-white/10 mx-auto" />
               </div>

               <p className="text-sm text-white/50 mb-8 leading-relaxed font-light italic">
                 {plan.description}
               </p>
               
               <div className="flex-grow">
                 <ul className="space-y-4 mb-10 text-[10px] font-medium uppercase tracking-[0.15em] text-left max-w-[280px] mx-auto">
                   {plan.items.map((item, j) => (
                     <li key={j} className="flex items-start gap-4 text-white/70 group-hover:text-white transition-colors">
                       <div className={`mt-0.5 w-4 h-4 rounded-full flex items-center justify-center flex-shrink-0 ${plan.featured ? 'bg-accent/10 border border-accent/20' : 'bg-white/5 border border-white/10'}`}>
                         <Check size={10} className={plan.featured ? "text-accent" : "text-white/40"} />
                       </div>
                       <span className="leading-tight">{item}</span>
                     </li>
                   ))}
                 </ul>
               </div>

               <div className="mb-10">
                 <p className="text-4xl font-display font-bold mb-1 tracking-tighter text-white">
                   {plan.price}
                 </p>
                 <p className="text-[9px] font-mono opacity-40 font-bold uppercase tracking-widest">
                   {plan.unit}
                 </p>
               </div>
               
               <button 
                 onClick={() => handleContactAction('whatsapp', OB_PHONE, `${t.whatsapp.pricing} ${plan.name}`)}
                 className={`w-full py-5 rounded-2xl font-black uppercase tracking-[0.2em] text-[10px] transition-all relative overflow-hidden group/btn ${
                   plan.featured 
                   ? 'bg-accent text-black shadow-xl shadow-accent/20 hover:shadow-accent/40 active:scale-95' 
                   : 'bg-white/5 border border-white/10 text-white hover:bg-white hover:text-black hover:border-white active:scale-95'
                 }`}
               >
                 <span className="relative z-10">{plan.cta}</span>
                 {plan.featured && (
                   <div className="absolute inset-0 bg-white translate-y-full group-hover/btn:translate-y-0 transition-transform duration-300" />
                 )}
               </button>
            </motion.div>
          ))}
       </div>

       <motion.p 
         initial={{ opacity: 0 }}
         whileInView={{ opacity: 1 }}
         viewport={{ once: true }}
         transition={{ delay: 0.5 }}
         className="text-center mt-16 text-[9px] font-mono font-bold uppercase tracking-[0.4em] text-white/20"
       >
         {t.pricing.footer}
       </motion.p>
    </div>
  </section>
);


export const ProcessSection = ({ t }: SectionProps) => (
  <section id="how-it-works" className="py-32 bg-bg-darker relative overflow-hidden">
    <div className="max-w-7xl mx-auto px-6 relative z-10">
      <div className="text-center mb-20">
        <div className="mb-4 text-accent font-bold uppercase tracking-[0.4em] text-[10px]">{t.process.badge}</div>
        <h2 className="text-4xl md:text-6xl font-display font-bold text-white tracking-tight">{t.process.title}</h2>
      </div>

      <div className="grid md:grid-cols-3 gap-12">
        {t.process.steps.map((step, i) => (
          <motion.div 
            key={i}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.2 }}
            className="flex flex-col items-center text-center group"
          >
            <div className="w-24 h-24 rounded-full bg-zinc-900 border border-white/5 flex items-center justify-center text-3xl font-display font-black text-accent mb-8 group-hover:bg-accent group-hover:text-black transition-all shadow-2xl relative">
              {i + 1}
              {i < t.process.steps.length - 1 && (
                <div className="hidden md:block absolute top-1/2 left-full w-full h-[1px] bg-white/10 -translate-y-1/2 ml-6" />
              )}
            </div>
            <h3 className="text-xl font-bold text-white uppercase tracking-tight mb-4 group-hover:text-accent transition-colors">
              {step.title}
            </h3>
            <p className="text-sm text-white/40 leading-relaxed font-light italic max-w-xs">
              {step.desc}
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);


export const SampleWork = ({ t, lang }: SectionProps) => (
  <section id="samples" className="py-32 bg-bg-darker">
    <div className="max-w-7xl mx-auto px-6">
       <div className="mb-24 text-center">
          <div className="mb-4 text-accent font-bold uppercase tracking-[0.4em] text-[10px]">{t.portfolio.badge}</div>
          <h2 className="text-4xl md:text-6xl font-display font-bold text-white tracking-tight">{t.portfolio.title}</h2>
          <div className="mt-6 h-1 w-24 bg-accent mx-auto rounded-full opacity-30" />
       </div>

       {/* Subsection 1: Sample Technical Work */}
       <div className="mb-32">
         <div className="flex items-center gap-6 mb-16 px-4">
           <h3 className="text-2xl font-display font-bold text-white tracking-tight whitespace-nowrap">
             {t.portfolio.technicalWork.title}
           </h3>
           <div className="h-[1px] flex-grow bg-white/5" />
           <div className="text-[10px] font-mono font-bold text-white/20 uppercase tracking-[0.4em] hidden sm:block">
             Expert Criteria
           </div>
         </div>
         
         <div className="grid lg:grid-cols-3 gap-10">
            {t.portfolio.technicalWork.items.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-zinc-900 border border-white/5 rounded-[40px] overflow-hidden group hover:border-accent/30 transition-all flex flex-col shadow-2xl h-full"
              >
                 <div className="aspect-video relative overflow-hidden">
                    <img 
                      src={item.image} 
                      alt={item.title} 
                      className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110 grayscale brightness-75 group-hover:grayscale-0" 
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute top-6 left-6">
                       <span className="px-4 py-1.5 bg-accent text-black font-black uppercase text-[9px] tracking-[0.2em] rounded-full shadow-lg">{item.tag}</span>
                    </div>
                 </div>
                 
                 <div className="p-8 sm:p-10 flex-grow flex flex-col">
                    <h3 className="text-xl font-display font-bold text-white uppercase tracking-tight mb-8 group-hover:text-accent transition-colors leading-tight min-h-[3rem]">
                      {item.title}
                    </h3>

                    <div className="space-y-6 flex-grow mb-10">
                      <div className="relative pl-6 border-l border-white/10 group-hover:border-accent/30 transition-colors">
                        <div className="absolute left-0 top-0 w-1 h-2 bg-accent opacity-50" />
                        <p className="text-[9px] font-mono uppercase tracking-widest text-accent mb-1 font-bold">
                          {lang === 'en' ? 'Problem' : 'Problema'}
                        </p>
                        <p className="text-[12px] text-white/50 leading-relaxed font-light italic">
                          {item.problem}
                        </p>
                      </div>

                      <div className="bg-white/5 p-5 rounded-2xl border border-white/5 group-hover:bg-accent/5 group-hover:border-accent/10 transition-all">
                        <p className="text-[9px] font-mono uppercase tracking-widest text-accent mb-1 font-black">
                          {lang === 'en' ? 'Result' : 'Resultado'}
                        </p>
                        <p className="text-[12px] text-white font-medium leading-relaxed italic">
                          {item.result}
                        </p>
                      </div>
                    </div>

                    <div className="mt-auto pt-6 border-t border-white/5 flex justify-between items-center text-[10px] text-white/30 font-mono font-bold uppercase tracking-[0.2em]">
                      <span>{t.common.viewAnalysis}</span>
                      <button 
                        onClick={() => handleContactAction('whatsapp', OB_PHONE, `${t.whatsapp.portfolio} ${item.title}`)}
                        className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-accent hover:text-black transition-all"
                      >
                        <ArrowRight size={16} />
                      </button>
                    </div>
                 </div>
              </motion.div>
            ))}
         </div>
       </div>

       {/* Subsection 2: Selected Hardware Projects */}
       <div>
         <div className="flex items-center gap-6 mb-16 px-4">
           <h3 className="text-2xl font-display font-bold text-white tracking-tight whitespace-nowrap">
             {t.portfolio.selectedProjects.title}
           </h3>
           <div className="h-[1px] flex-grow bg-white/5" />
           <div className="text-[10px] font-mono font-bold text-white/20 uppercase tracking-[0.4em] hidden sm:block">
             Real-World Deployment
           </div>
         </div>

         <div className="grid md:grid-cols-3 gap-8">
           {t.portfolio.selectedProjects.items.map((project, i) => (
             <motion.div
               key={i}
               initial={{ opacity: 0, scale: 0.95 }}
               whileInView={{ opacity: 1, scale: 1 }}
               viewport={{ once: true }}
               transition={{ delay: i * 0.1 }}
               className="group relative bg-zinc-950 border border-white/5 rounded-3xl overflow-hidden hover:border-accent/20 transition-all shadow-xl flex flex-col"
             >
               <div className="aspect-[4/3] relative overflow-hidden">
                 <img 
                   src={project.image} 
                   alt={project.title} 
                   className="w-full h-full object-cover grayscale brightness-50 group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700 pointer-events-none select-none" 
                   referrerPolicy="no-referrer"
                   onContextMenu={(e) => e.preventDefault()}
                   onDragStart={(e) => e.preventDefault()}
                 />
                 {/* Protection Overlay */}
                 <div className="absolute inset-0 z-10" onContextMenu={(e) => e.preventDefault()} />
                 
                 <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/20 to-transparent pointer-events-none" />
                 
                 <div className="absolute top-6 left-6 flex flex-wrap gap-2 z-20">
                    {project.tags.map(tag => (
                      <span key={tag} className="px-2.5 py-1 bg-black/60 border border-white/10 text-[8px] font-mono uppercase tracking-widest text-white/60 rounded-md backdrop-blur-sm">
                        {tag}
                      </span>
                    ))}
                 </div>
               </div>
               
               <div className="p-8 flex-grow flex flex-col">
                  <h4 className="text-xl font-display font-bold text-white mb-6 group-hover:text-accent transition-colors tracking-tight">
                    {project.title}
                  </h4>
                  
                  <div className="space-y-4 mb-8 flex-grow">
                    <div className="opacity-60 group-hover:opacity-100 transition-opacity">
                       <p className="text-[8px] font-mono uppercase tracking-[0.2em] text-accent mb-1 font-bold">Problem</p>
                       <p className="text-[11px] text-white/50 leading-relaxed italic">
                         {project.problem}
                       </p>
                    </div>

                    <div className="opacity-40 group-hover:opacity-100 transition-opacity delay-75">
                       <p className="text-[8px] font-mono uppercase tracking-[0.2em] text-white/60 mb-1 font-bold">Result</p>
                       <p className="text-[11px] text-white/40 leading-relaxed italic">
                         {project.result}
                       </p>
                    </div>
                  </div>

                  <Link 
                    to={`/projects/${project.id}`}
                    className="w-full py-4 bg-white/5 border border-white/10 text-[10px] font-mono font-bold uppercase tracking-widest text-white/60 rounded-2xl hover:bg-accent hover:border-accent hover:text-black transition-all text-center flex items-center justify-center gap-2 group/btn"
                  >
                    <span>{lang === 'en' ? 'See Full Case Study' : 'Ver Caso de Estudio'}</span>
                    <ArrowRight size={14} className="group-hover/btn:translate-x-1 transition-transform" />
                  </Link>
               </div>
             </motion.div>
           ))}
         </div>
       </div>
    </div>
  </section>
);


export const ContactSection = ({ t }: SectionProps) => {
  const [formData, setFormData] = useState({ 
    name: '', 
    email: '', 
    projectType: '',
    shortDescription: '',
    boardLayers: '',
    timeline: '',
  });
  const [errorMessage, setErrorMessage] = useState('');
  const [revealEmail, setRevealEmail] = useState(false);
  const [revealPhone, setRevealPhone] = useState(false);
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    const accessKey = import.meta.env.VITE_WEB3FORMS_KEY;
    
    if (!accessKey || accessKey === 'your_access_key_here') {
      console.warn('Web3Forms Access Key missing. Falling back to WhatsApp.');
      const text = `Hola Fredys, mi nombre es ${formData.name}, mi email es ${formData.email}. \nProyecto: ${formData.projectType}\nCapas: ${formData.boardLayers}\nTimeline: ${formData.timeline}\nDescripción: ${formData.shortDescription}`;
      handleContactAction('whatsapp', OB_PHONE, text);
      return;
    }

    setStatus('loading');

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          access_key: accessKey,
          name: formData.name,
          email: formData.email,
          projectType: formData.projectType,
          boardLayers: formData.boardLayers,
          timeline: formData.timeline,
          message: formData.shortDescription,
          subject: `Nuevo pedido de PCB Review: ${formData.name}`,
          from_name: 'PCB Review Portfolio'
        })
      });

      const result = await response.json();
      if (result.success) {
        setStatus('success');
        setFormData({ name: '', email: '', projectType: '', boardLayers: '', timeline: '', shortDescription: '' });
        setTimeout(() => setStatus('idle'), 5000);
      } else {
        console.error('Web3Forms Error:', result);
        if (result.message && result.message.includes('Pro feature')) {
          setErrorMessage('File uploads require a Pro plan. Please send files via WhatsApp.');
        } else {
          setErrorMessage(result.message || 'Error sending message');
        }
        setStatus('error');
        setTimeout(() => {
          setStatus('idle');
          setErrorMessage('');
        }, 6000);
      }
    } catch (error) {
      console.error('Submission Error:', error);
      setErrorMessage('Network error. Try WhatsApp instead.');
      setStatus('error');
      setTimeout(() => {
        setStatus('idle');
        setErrorMessage('');
      }, 5000);
    }
  };

  return (
    <section id="contact" className="py-32 bg-black">
      <div className="max-w-7xl mx-auto px-6">
         <div className="grid lg:grid-cols-2 gap-20">
            <div>
              <div className="mb-4 text-accent font-mono font-bold uppercase tracking-[0.4em] text-[10px]">{t.contact.badge}</div>
              <h2 className="text-4xl md:text-6xl font-display font-bold text-white mb-8 tracking-tight">{t.contact.title} <span className="text-accent italic">{t.contact.titleAccent}</span></h2>
              <p className="text-white/50 text-lg mb-12 italic leading-relaxed tracking-tight">{t.contact.subtitle}</p>
              
               <div className="space-y-10">
                 <button 
                   onClick={() => handleContactAction('whatsapp', OB_PHONE, t.whatsapp.contactEmail)}
                   onMouseEnter={() => setRevealEmail(true)}
                   className="flex items-center gap-8 group text-left w-full"
                 >
                    <div className="w-16 h-16 rounded-3xl bg-zinc-900 flex flex-center items-center justify-center text-accent group-hover:bg-accent group-hover:text-black transition-all">
                      <Mail size={24} />
                    </div>
                    <div>
                      <p className="text-[9px] font-mono uppercase tracking-widest text-white/30 mb-1 font-bold">{t.contact.emailLabel}</p>
                      <p className="text-lg font-bold font-mono tracking-tight">{revealEmail ? secureAtob(OB_EMAIL) : '••••••••@••••.com'}</p>
                    </div>
                 </button>
                 <button 
                   onClick={() => handleContactAction('tel', OB_PHONE)}
                   onMouseEnter={() => setRevealPhone(true)}
                   className="flex items-center gap-8 group text-left w-full"
                 >
                    <div className="w-16 h-16 rounded-3xl bg-zinc-900 flex flex-center items-center justify-center text-accent group-hover:bg-accent group-hover:text-black transition-all">
                       <Phone size={24} />
                    </div>
                    <div>
                      <p className="text-[9px] font-mono uppercase tracking-widest text-white/30 mb-1 font-bold">{t.contact.phoneLabel}</p>
                      <p className="text-lg font-bold font-mono tracking-tight">{revealPhone ? secureAtob(OB_PHONE) : '+34 ••• •• •• ••'}</p>
                    </div>
                 </button>
                 <div className="flex items-center gap-8 group">
                    <div className="w-16 h-16 rounded-3xl bg-zinc-900 flex flex-center items-center justify-center text-accent group-hover:bg-accent group-hover:text-black transition-all">
                      <MapPin size={24} />
                    </div>
                    <div>
                      <p className="text-[9px] font-mono uppercase tracking-widest text-white/30 mb-1 font-bold">{t.contact.visitLabel}</p>
                      <p className="text-lg font-bold italic tracking-tight">{t.contact.visitValue}</p>
                    </div>
                 </div>
              </div>
            </div>

            <div className="bg-zinc-900 p-8 sm:p-12 rounded-[50px] shadow-2xl border border-white/5">
               <form className="space-y-4" onSubmit={handleSubmit}>
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                       <input 
                         name="name"
                         type="text" 
                         required
                         placeholder={t.contact.form.name} 
                         value={formData.name}
                         onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                         className="w-full bg-black/40 border border-white/10 rounded-2xl p-4 text-sm focus:border-accent outline-none transition-all font-bold placeholder:opacity-20" 
                       />
                    </div>
                    <div>
                       <input 
                         name="email"
                         type="email" 
                         required
                         placeholder={t.contact.form.email} 
                         value={formData.email}
                         onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                         className="w-full bg-black/40 border border-white/10 rounded-2xl p-4 text-sm focus:border-accent outline-none transition-all font-bold placeholder:opacity-20" 
                       />
                    </div>
                  </div>
                  
                  <div>
                     <input 
                       name="projectType"
                       type="text" 
                       required
                       placeholder={t.contact.form.projectType} 
                       value={formData.projectType}
                       onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                       className="w-full bg-black/40 border border-white/10 rounded-2xl p-4 text-sm focus:border-accent outline-none transition-all font-bold placeholder:opacity-20" 
                     />
                  </div>

                  <div>
                     <textarea 
                       name="shortDescription"
                       rows={3} 
                       required
                       placeholder={t.contact.form.shortDescription} 
                       value={formData.shortDescription}
                       onChange={(e) => setFormData({ ...formData, shortDescription: e.target.value })}
                       className="w-full bg-black/40 border border-white/10 rounded-2xl p-4 text-sm focus:border-accent outline-none transition-all font-bold placeholder:opacity-20"
                     ></textarea>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                       <select 
                         name="boardLayers"
                         required
                         value={formData.boardLayers}
                         onChange={(e) => setFormData({ ...formData, boardLayers: e.target.value })}
                         className="w-full bg-black/40 border border-white/10 rounded-2xl p-4 text-sm focus:border-accent outline-none transition-all font-bold cursor-pointer"
                       >
                         <option value="" disabled className="bg-zinc-900 text-white/20">{t.contact.form.boardLayers.label}</option>
                         {t.contact.form.boardLayers.options.map(opt => (
                           <option key={opt} value={opt} className="bg-zinc-900 text-white">{opt}</option>
                         ))}
                       </select>
                    </div>
                    <div>
                       <select 
                         name="timeline"
                         required
                         value={formData.timeline}
                         onChange={(e) => setFormData({ ...formData, timeline: e.target.value })}
                         className="w-full bg-black/40 border border-white/10 rounded-2xl p-4 text-sm focus:border-accent outline-none transition-all font-bold cursor-pointer"
                       >
                         <option value="" disabled className="bg-zinc-900 text-white/20">{t.contact.form.timeline.label}</option>
                         {t.contact.form.timeline.options.map(opt => (
                           <option key={opt} value={opt} className="bg-zinc-900 text-white">{opt}</option>
                         ))}
                       </select>
                    </div>
                  </div>
                  
                  <div className="pt-2">
                    <button 
                      type="submit" 
                      disabled={status === 'loading'}
                      className={`w-full py-5 font-black uppercase text-xs tracking-[0.2em] rounded-2xl transition-all shadow-xl flex items-center justify-center gap-3 ${
                        status === 'loading' ? 'bg-zinc-800 text-white/50 cursor-wait' :
                        status === 'success' ? 'bg-green-500 text-white' :
                        status === 'error' ? 'bg-red-500 text-white' :
                        'bg-accent text-black hover:bg-white shadow-accent/20'
                      }`}
                    >
                      {status === 'loading' ? (
                        <>Enviando...</>
                      ) : status === 'success' ? (
                        <>¡Enviado con éxito!</>
                      ) : status === 'error' ? (
                        <>Error al enviar</>
                      ) : (
                        t.contact.form.submit
                      )}
                    </button>
                    {errorMessage && (
                      <p className="text-[10px] text-red-500 font-bold uppercase tracking-widest text-center animate-pulse pt-4 leading-relaxed max-w-[280px] mx-auto">
                        {errorMessage}
                      </p>
                    )}
                  </div>
               </form>
            </div>
         </div>
      </div>
    </section>
  );
};


export const Footer = ({ t }: SectionProps) => {
  const [revealEmail, setRevealEmail] = useState(false);
  const [revealPhone, setRevealPhone] = useState(false);

  return (
  <footer className="py-20 bg-bg-darker border-t border-white/5">
    <div className="max-w-7xl mx-auto px-6">
       <div className="grid md:grid-cols-4 gap-12 mb-20">
          <div className="md:col-span-1">
             <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-full overflow-hidden border border-accent/30 bg-zinc-900">
                  <img 
                    src="https://avatars.githubusercontent.com/u/95711823?v=4" 
                    alt="Fredys Matos" 
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <span className="font-display text-2xl font-bold tracking-tighter">Fredys <span className="text-accent">Matos Borges</span></span>
             </div>
             <p className="text-[10px] font-mono text-white/40 uppercase tracking-widest leading-loose font-bold italic">{t.footer.desc}</p>
             <div className="mt-8 flex flex-wrap gap-4">
                <a 
                  href="https://www.linkedin.com/in/mbfredys" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 border border-white/10 rounded-full flex items-center justify-center hover:bg-accent hover:text-black transition-all"
                  title="LinkedIn"
                >
                   <Linkedin size={20} />
                </a>
                <a 
                  href="https://www.instagram.com/mbfredys" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 border border-white/10 rounded-full flex items-center justify-center hover:bg-accent hover:text-black transition-all"
                  title="Instagram"
                >
                   <Instagram size={20} />
                </a>
                <a 
                  href="https://www.threads.net/@mbfredys" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 border border-white/10 rounded-full flex items-center justify-center hover:bg-accent hover:text-black transition-all"
                  title="Threads"
                >
                   <MessageSquare size={20} />
                </a>
                <a 
                  href="https://www.facebook.com/fredys.matosborges" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 border border-white/10 rounded-full flex items-center justify-center hover:bg-accent hover:text-black transition-all"
                  title="Facebook"
                >
                   <Facebook size={20} />
                </a>
                <a 
                  href="https://x.com/MbFredys" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 border border-white/10 rounded-full flex items-center justify-center hover:bg-accent hover:text-black transition-all"
                  title="Twitter/X"
                >
                   <Twitter size={20} />
                </a>
             </div>
          </div>

          <div>
             <h4 className="text-[9px] font-mono uppercase tracking-[0.3em] font-black mb-8 text-accent">{t.footer.navTitle}</h4>
             <ul className="space-y-4 text-[10px] font-mono font-bold uppercase tracking-widest text-white/40">
                <li><a href="#" className="hover:text-accent transition-all">{t.nav.home}</a></li>
                <li><a href="#services" className="hover:text-accent transition-all">{t.nav.services}</a></li>
                <li><a href="#samples" className="hover:text-accent transition-all">{t.nav.portfolio}</a></li>
                <li><a href="#about" className="hover:text-accent transition-all">{t.nav.about}</a></li>
             </ul>
          </div>
          
          <div>
            <h4 className="text-[9px] font-mono uppercase tracking-[0.3em] font-black mb-8 text-accent">{t.footer.contactTitle}</h4>
            <ul className="space-y-4 text-[10px] font-mono font-bold uppercase tracking-widest text-white/40">
               <li>
                 <button 
                   onClick={() => handleContactAction('whatsapp', OB_PHONE, "Hola Fredys, te contacto por una consulta técnica.")}
                   onMouseEnter={() => setRevealEmail(true)}
                   className="hover:text-accent transition-colors text-left"
                 >
                   {revealEmail ? secureAtob(OB_EMAIL) : '••••••••@••••.com'}
                 </button>
               </li>
               <li>
                 <a 
                   href="https://www.linkedin.com/in/mbfredys" 
                   target="_blank" 
                   rel="noopener noreferrer" 
                   className="hover:text-accent transition-colors"
                 >
                   LinkedIn: Fredys Matos Borges
                 </a>
               </li>
               <li>
                 <button 
                   onClick={() => handleContactAction('whatsapp', OB_PHONE, t.whatsapp.footerMeeting)}
                   onMouseEnter={() => setRevealPhone(true)}
                   className="hover:text-accent transition-colors text-left transition-all"
                 >
                   WhatsApp: {revealPhone ? secureAtob(OB_PHONE_F) : '+34 ••• •• •• ••'}
                 </button>
               </li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-[10px] uppercase tracking-[0.3em] font-black mb-8 text-accent">{t.footer.addressTitle}</h4>
            <ul className="space-y-4 text-xs font-bold uppercase tracking-widest text-white/40">
               <li className="leading-loose italic">{t.contact.visitValue}</li>
            </ul>
          </div>
       </div>

       <div className="pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6 text-[10px] font-mono text-white/20 uppercase tracking-widest font-bold">
          <p>© 2026 Fredys Matos Borges. {t.common.allRightsReserved}</p>
          <p>{t.common.engineeringReality}</p>
       </div>
    </div>
  </footer>
  );
};


export const WhatYouGetSection = ({ t }: SectionProps) => {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  const getIcon = (icon: string) => {
    switch (icon) {
      case 'search': return <Search size={24} />;
      case 'zap': return <Zap size={24} />;
      case 'shield': return <Shield size={24} />;
      case 'settings': return <Settings size={24} />;
      case 'file-text': return <FileText size={24} />;
      case 'check-circle': return <CheckCircle size={24} />;
      default: return <Check size={24} />;
    }
  };

  return (
    <section id="trust" className="py-32 bg-black relative overflow-hidden border-y border-white/5">
      {/* Decorative background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-accent/5 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 text-center relative z-10">
        <div className="mb-20">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="mb-4 text-accent font-bold uppercase tracking-[0.4em] text-[10px]">{t.whatYouGet.badge}</div>
            <h2 className="text-4xl md:text-6xl font-display font-bold text-white mb-6 tracking-tight">
              {t.whatYouGet.title}
            </h2>
          </motion.div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {t.whatYouGet.items.map((item, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              onClick={() => setExpandedIndex(expandedIndex === i ? null : i)}
              className="group relative min-h-[360px] h-auto rounded-[40px] overflow-hidden cursor-pointer shadow-2xl hover:-translate-y-2 transition-all duration-500"
            >
              {/* Background Image */}
              <div className="absolute inset-0 h-full w-full">
                <img 
                  src={item.image} 
                  alt={item.title} 
                  className="w-full h-full object-cover grayscale transition-all duration-700 group-hover:grayscale-0 group-hover:scale-110"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-black/70 group-hover:bg-black/40 transition-colors duration-500" />
                {/* Accent overlay on expanded */}
                <div className={`absolute inset-0 bg-accent/20 transition-opacity duration-500 ${expandedIndex === i ? 'opacity-100' : 'opacity-0'}`} />
              </div>

              <div className={`relative min-h-[360px] p-8 sm:p-10 flex flex-col items-center text-center transition-all duration-500 ${expandedIndex === i ? 'justify-start pt-16 h-auto' : 'justify-center'}`}>
                <div className={`w-16 h-16 rounded-[20px] flex items-center justify-center mb-6 transition-all duration-500 shadow-inner flex-shrink-0 ${expandedIndex === i ? 'bg-white text-black' : 'bg-accent/20 text-accent group-hover:bg-accent group-hover:text-black'}`}>
                  {getIcon(item.icon)}
                </div>
                
                <h4 className={`text-lg font-bold uppercase tracking-widest transition-colors duration-500 ${expandedIndex === i ? 'text-white' : 'text-white group-hover:text-accent'}`}>
                  {item.title}
                </h4>

                <AnimatePresence mode="wait">
                  {expandedIndex === i && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="w-full"
                    >
                      <p className="mt-6 text-sm text-white/90 leading-relaxed italic font-medium px-4">
                        {item.desc}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
                
                <div className={`mt-8 h-[1px] transition-all duration-500 flex-shrink-0 ${expandedIndex === i ? 'w-full bg-white/50' : 'w-12 bg-accent/30 group-hover:w-full'}`} />
                
                {/* Click indicator */}
                <div className={`mt-8 text-[8px] font-mono font-bold uppercase tracking-widest transition-colors ${expandedIndex === i ? 'text-white pb-4' : 'text-white/40 group-hover:text-white'}`}>
                  {expandedIndex === i ? 'Click to Close' : 'Click for Details'}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-20 flex justify-center"
        >
          <a 
            href="#pricing"
            className="px-10 py-5 bg-white text-black font-black uppercase text-xs tracking-[0.2em] rounded-full hover:bg-accent transition-all flex items-center gap-4 group shadow-xl hover:shadow-accent/20"
          >
            {t.common.getStarted}
            <ArrowRight size={18} className="group-hover:translate-x-2 transition-transform" />
          </a>
        </motion.div>
      </div>
    </section>
  );
};
