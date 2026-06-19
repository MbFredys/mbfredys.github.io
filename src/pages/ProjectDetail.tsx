import { useParams, Link } from 'react-router-dom';
import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { translations, Language, OB_PHONE, secureAtob } from '../constants';
import { motion } from 'motion/react';
import { ArrowLeft, MessageSquare, ShieldCheck, Zap, Cog, Github } from 'lucide-react';

interface ProjectDetailProps {
  lang: Language;
}

export default function ProjectDetail({ lang }: ProjectDetailProps) {
  const { id } = useParams<{ id: string }>();
  const t = translations[lang];
  
  // Find in selected projects first, then in technical work
  const projectRaw = t.portfolio.selectedProjects.items.find(p => p.id === id) || 
                     t.portfolio.technicalWork.items.find(p => p.id === id);
  const project = projectRaw as any;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!project) {
    return (
      <div className="min-h-screen bg-black flex flex-col items-center justify-center p-6">
        <Helmet>
          <title>Project Not Found | Fredys Matos Borges</title>
        </Helmet>
        <h2 className="text-3xl font-display font-bold text-white mb-6">Project not found</h2>
        <Link to="/" className="text-accent underline font-mono text-sm uppercase tracking-widest">Return Home</Link>
      </div>
    );
  }

  const handleContactAction = (type: string, obValue: string, text: string) => {
    // Basic bot check: Ignore instant clicks
    if (typeof window !== 'undefined' && (performance.now() < 1000)) return;

    const value = secureAtob(obValue);
    if (type === 'whatsapp') {
      const url = `https://wa.me/${value}?text=${encodeURIComponent(text)}`;
      window.open(url, '_blank', 'noopener,noreferrer');
    }
  };

  const preventDefaults = (e: React.MouseEvent | React.DragEvent) => {
    e.preventDefault();
    return false;
  };

  const seoTitle = `${project.title} | Fredys Matos Borges`;
  const seoDesc = (project as any).description || project.problem;

  return (
    <div className="min-h-screen bg-black text-white selection:bg-accent selection:text-black">
      <Helmet>
        <title>{seoTitle}</title>
        <meta name="description" content={seoDesc} />
        
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="article" />
        <meta property="og:title" content={seoTitle} />
        <meta property="og:description" content={seoDesc} />
        <meta property="og:image" content={project.image} />
        <meta property="og:url" content={window.location.href} />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={seoTitle} />
        <meta name="twitter:description" content={seoDesc} />
        <meta name="twitter:image" content={project.image} />
      </Helmet>

      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-md border-b border-white/5">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <Link to="/#selected-projects" className="flex items-center gap-2 group text-[10px] font-mono font-bold uppercase tracking-widest text-white/50 hover:text-white transition-colors">
            <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
            {lang === 'en' ? 'Back to Portfolio' : 'Volver al Portafolio'}
          </Link>
          <div className="flex items-center gap-4">
             <span className="hidden sm:block text-[8px] font-mono uppercase tracking-[0.3em] text-white/20">PCB Design Expert</span>
          </div>
        </div>
      </nav>

      {/* Hero Header */}
      <section className="pt-40 pb-20 px-6">
        <div className="max-w-7xl mx-auto">
           <motion.div 
             initial={{ opacity: 0, y: 20 }}
             animate={{ opacity: 1, y: 0 }}
             className="grid lg:grid-cols-2 gap-20 items-center"
           >
              <div>
                <div className="flex gap-2 mb-6">
                   {project.tags ? project.tags.map(tag => (
                     <span key={tag} className="px-3 py-1 bg-accent/10 border border-accent/20 text-[9px] font-mono uppercase tracking-widest text-accent rounded-full">
                       {tag}
                     </span>
                   )) : project.tag && (
                     <span className="px-3 py-1 bg-accent/10 border border-accent/20 text-[9px] font-mono uppercase tracking-widest text-accent rounded-full">
                       {project.tag}
                     </span>
                   )}
                </div>
                <h1 className="text-5xl md:text-7xl font-display font-bold text-white mb-8 tracking-tight">
                  {project.title}
                </h1>
                <p className="text-xl text-white/60 leading-relaxed max-w-xl font-light italic">
                  {project.description}
                </p>
                
                <div className="mt-12 flex flex-wrap gap-4">
                   <button 
                     onClick={() => handleContactAction('whatsapp', OB_PHONE, `${lang === 'en' ? 'I want to see more about' : 'Quiero ver más sobre'} ${project.title}`)}
                     className="px-8 py-4 bg-accent text-black font-bold uppercase text-[12px] tracking-widest rounded-2xl hover:scale-105 active:scale-95 transition-all flex items-center gap-3 shadow-[0_10px_40px_rgba(220,38,38,0.3)]"
                   >
                     <MessageSquare size={18} />
                     {lang === 'en' ? 'Discuss This Project' : 'Hablar de este Proyecto'}
                   </button>
                </div>
              </div>

              <div className="relative group">
                 <div className="absolute inset-0 bg-accent rounded-[40px] blur-[100px] opacity-10 group-hover:opacity-20 transition-opacity" />
                 <div className="relative aspect-[4/3] rounded-[40px] overflow-hidden border border-white/10 shadow-2xl">
                    <img 
                      src={project.image} 
                      alt={`${project.title} - PCB Design and Industrial Automation Case Study by Fredys Matos Borges`} 
                      className="w-full h-full object-cover grayscale brightness-75 group-hover:grayscale-0 transition-all duration-700 pointer-events-none select-none" 
                      onContextMenu={preventDefaults}
                      onDragStart={preventDefaults}
                    />
                    {/* Protection Overlay */}
                    <div 
                      className="absolute inset-0 z-10" 
                      onContextMenu={preventDefaults}
                      onDragStart={preventDefaults}
                    />
                 </div>
              </div>
           </motion.div>
        </div>
      </section>
      {/* Main Content Area */}
      <section className="py-24 px-6 overflow-hidden">
        <div className="max-w-5xl mx-auto">
           {project.story ? (
             <div className="space-y-32">
                {/* 01. The Quote & Intro */}
                <div className="text-center">
                   <div className="w-12 h-[1px] bg-accent/30 mx-auto mb-12" />
                   <h2 className="text-3xl md:text-5xl font-display font-medium text-white leading-tight italic max-w-4xl mx-auto">
                     "{project.story.quote}"
                   </h2>
                   <div className="mt-16 text-left border-l border-accent/20 pl-8 md:pl-12">
                      <h3 className="text-[10px] font-mono font-bold uppercase tracking-[0.4em] text-accent mb-6">{lang === 'en' ? 'Overview' : 'Resumen'}</h3>
                      <p className="text-xl md:text-2xl text-white/80 leading-relaxed font-light">
                        {project.story.overview}
                      </p>
                   </div>
                </div>

                {/* 02. The Narrative Section */}
                <div className="grid md:grid-cols-2 gap-16 md:gap-24 items-start">
                   <div className="space-y-16">
                      {project.story.context && (
                        <div>
                           <h3 className="text-[10px] font-mono font-bold uppercase tracking-[0.4em] text-white/30 mb-6">{lang === 'en' ? 'The Challenge' : 'El Desafío'}</h3>
                           <p className="text-lg text-white/60 leading-relaxed font-light">
                             {project.story.context}
                           </p>
                        </div>
                      )}
                      {project.story.motivation && (
                        <div>
                           <h3 className="text-[10px] font-mono font-bold uppercase tracking-[0.4em] text-accent mb-6">{lang === 'en' ? 'The Vision' : 'La Visión'}</h3>
                           <p className="text-lg text-white/60 leading-relaxed font-light">
                             {project.story.motivation}
                           </p>
                        </div>
                      )}
                   </div>

                   <div className="space-y-10">
                      {project.story.features?.map((feature, idx) => (
                        <div key={idx} className="p-8 border border-white/5 bg-zinc-900/20 rounded-3xl group hover:border-accent/30 transition-colors">
                           <div className="flex items-center gap-4 mb-6">
                              <div className="w-1.5 h-1.5 rounded-full bg-accent" />
                              <h4 className="text-xs font-mono font-bold text-white uppercase tracking-[0.2em]">{feature.title}</h4>
                           </div>
                           <ul className="space-y-3">
                              {feature.items.map((item, i) => (
                                <li key={i} className="text-sm text-white/40 font-light flex items-center gap-2">
                                   <div className="w-4 h-[1px] bg-white/10" />
                                   {item}
                                </li>
                              ))}
                           </ul>
                        </div>
                      ))}
                   </div>
                </div>

                {/* 03. Conclusion / Closing */}
                <div className="pt-20 border-t border-white/5">
                   <div className="max-w-2xl">
                      <h4 className="text-[10px] font-mono font-bold uppercase tracking-[0.4em] text-white/30 mb-6">{lang === 'en' ? 'Conclusion' : 'Conclusión'}</h4>
                      <p className="text-lg text-accent/80 leading-relaxed font-light italic">
                        {project.story.conclusion}
                      </p>
                   </div>
                </div>
             </div>
           ) : (
             <div className="grid md:grid-cols-2 gap-12 sm:gap-24">
                <motion.div 
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  className="space-y-12"
                >
                   <div className="relative pl-8">
                      <div className="absolute left-0 top-0 bottom-0 w-1 bg-accent/20 rounded-full" />
                      <div className="absolute left-[-2px] top-0 w-2 h-8 bg-accent rounded-full" />
                      <div className="flex items-center gap-3 mb-6">
                         <ShieldCheck className="text-accent" size={24} />
                         <h2 className="text-xs font-mono font-bold uppercase tracking-[0.4em] text-accent">The Problem</h2>
                      </div>
                      <p className="text-2xl sm:text-3xl font-display font-bold text-white leading-tight">
                         {project.problem}
                      </p>
                   </div>

                   <div className="relative pl-8">
                      <div className="absolute left-0 top-0 bottom-0 w-1 bg-white/5 rounded-full" />
                      <div className="absolute left-[-2px] top-0 w-2 h-8 bg-white/40 rounded-full" />
                      <div className="flex items-center gap-3 mb-6">
                         <Zap className="text-white/60" size={24} />
                         <h2 className="text-xs font-mono font-bold uppercase tracking-[0.4em] text-white/40">The Result</h2>
                      </div>
                      <p className="text-2xl sm:text-3xl font-display font-medium text-white/80 leading-relaxed italic">
                         {project.result}
                      </p>
                   </div>
                </motion.div>

                <motion.div 
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  className="bg-zinc-900/50 border border-white/5 rounded-[40px] p-8 sm:p-12 flex flex-col justify-center"
                >
                   <div className="flex items-center gap-4 mb-8">
                      <div className="w-12 h-12 rounded-2xl bg-accent/10 flex items-center justify-center">
                         <Cog className="text-accent" />
                      </div>
                      <h3 className="text-lg font-display font-bold text-white uppercase tracking-wider">Technical Breakdown</h3>
                   </div>
                   
                   <p className="text-white/40 text-sm leading-relaxed mb-10">
                      {lang === 'en' 
                        ? 'Every hardware project has unique challenges. For this specific case, I focused on high reliability and ease of manufacturing. We optimized the stackup for signal integrity and minimized thermal hotspots.' 
                        : 'Cada proyecto de hardware tiene desafíos únicos. Para este caso específico, me enfocqué en una alta fiabilidad y facilidad de fabricación. Optimizamos el stackup para la integridad de la señal y minimizamos los puntos calientes térmicos.'}
                   </p>

                   <div className="grid grid-cols-2 gap-4">
                      <div className="p-4 bg-black/40 rounded-2xl border border-white/5">
                         <div className="text-[9px] font-mono uppercase tracking-widest text-accent mb-1">Status</div>
                         <div className="text-[12px] font-bold text-white">Production Ready</div>
                      </div>
                      <div className="p-4 bg-black/40 rounded-2xl border border-white/5">
                         <div className="text-[9px] font-mono uppercase tracking-widest text-accent mb-1">Focus</div>
                         <div className="text-[12px] font-bold text-white">Extreme Reliability</div>
                      </div>
                   </div>
                </motion.div>
             </div>
           )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 px-6 relative overflow-hidden">
        {/* Glow behind CTA */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-accent/10 rounded-full blur-[120px] -z-10" />

        <div className="max-w-3xl mx-auto text-center">
           <h2 className="text-3xl md:text-5xl font-display font-medium text-white mb-8 tracking-tight">
             {lang === 'en' ? 'Do you want to see the full project??' : '¿Quieres ver el proyecto completo??'}
           </h2>
           <p className="text-white/40 text-sm md:text-base font-light mb-12 max-w-xl mx-auto leading-relaxed">
             {lang === 'en' 
               ? 'Explore the schematics, layout design decisions, and source files directly on the GitHub repository.' 
               : 'Explora los esquemáticos, decisiones de diseño de layout y archivos fuente de forma abierta directamente en el repositorio de GitHub.'}
           </p>
           <a 
             href={
               id === 'mini-environmental-sensor' ? 'https://github.com/MbFredys/PCB-Mini-Environmental-Sensor' :
               id === 'energy-monitoring-pcb' ? 'https://github.com/MbFredys/PCB-3-Phase-Energy-Monitor' :
               id === 'universal-modular-hub' ? 'https://github.com/MbFredys/PCB-Modular-Multi-Protocol-Hub' :
               'https://github.com/MbFredys'
             }
             target="_blank"
             rel="noopener noreferrer"
             className="inline-flex items-center gap-3 px-10 py-5 bg-white text-black font-mono font-black uppercase text-xs tracking-wider rounded-2xl hover:bg-accent hover:text-black hover:scale-105 transition-all shadow-xl shadow-white/5 group"
           >
             <Github size={18} className="text-black group-hover:scale-110 transition-transform" />
             <span>{lang === 'en' ? 'Go to Repository on GitHub' : 'Ir a Repositorio en GitHub'}</span>
           </a>
        </div>
      </section>

      {/* Footer Copy */}
      <footer className="py-12 border-t border-white/5 text-center px-6">
         <p className="text-[10px] font-mono font-bold uppercase tracking-[0.5em] text-white/20">
           Fredys Matos Borges © 2026
         </p>
      </footer>
    </div>
  );
}
