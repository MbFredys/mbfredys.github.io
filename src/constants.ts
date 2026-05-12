
export type Language = 'en' | 'es';

export interface Translation {
  common: {
    hireMe: string;
    contactMe: string;
    downloadCv: string;
    viewAnalysis: string;
    getStarted: string;
    orderNow: string;
    selectPlan: string;
    engineeringReality: string;
    allRightsReserved: string;
  };
  nav: {
    services: string;
    about: string;
    work: string;
    contact: string;
    portfolio: string;
    home: string;
  };
  hero: {
    greeting: string;
    role: string;
    subtitle: string;
    yearsExp: string;
    projectsComplete: string;
    mfgFailures: string;
    specialist: string;
  };
  about: {
    badge: string;
    title: string;
    titleAccent: string;
    description: string;
    specialization: string;
    specializationValue: string;
    keyTools: string;
    keyToolsValue: string;
    expertise: string;
    expertiseValue: string;
    focus: string;
    focusDesc: string;
  };
  skillset: {
    tabs: {
      skillset: string;
      education: string;
      experience: string;
    };
    focus: string;
    focusDesc: string;
    skills: { name: string; level: string }[];
    roles: { role: string; label: string; desc: string }[];
    eduDesc: string;
    expDesc: string;
    educationList: { title: string; institution: string; period: string; desc: string }[];
    experienceList: { title: string; company: string; period: string; location: string; details: string[] }[];
  };
  problem: {
    badge: string;
    title: string;
    titleAccent: string;
    consequences: { title: string; desc: string; type: 'noise' | 'power' | 'mfg' }[];
    footer: string;
    cta: string;
  };
  services: {
    badge: string;
    title: string;
    titleAccent: string;
    description: string;
    list: { name: string; desc: string }[];
    cards: { name: string; desc: string }[];
  };
  whatYouGet: {
    badge: string;
    title: string;
    items: { title: string; desc: string; icon: 'search' | 'zap' | 'shield' | 'file-text' | 'check-circle' | 'settings'; image: string }[];
  };
  pricing: {
    badge: string;
    title: string;
    featuredBadge: string;
    footer: string;
    plans: {
      name: string;
      price: string;
      unit: string;
      items: string[];
      cta: string;
      featured?: boolean;
    }[];
  };
  portfolio: {
    badge: string;
    title: string;
    items: { tag: string; title: string }[];
  };
  contact: {
    badge: string;
    title: string;
    titleAccent: string;
    subtitle: string;
    emailLabel: string;
    phoneLabel: string;
    visitLabel: string;
    visitValue: string;
    form: {
      name: string;
      email: string;
      message: string;
      submit: string;
    };
  };
  footer: {
    navTitle: string;
    contactTitle: string;
    addressTitle: string;
    desc: string;
  };
  whatsapp: {
    generic: string;
    hero: string;
    about: string;
    problem: string;
    pricing: string;
    portfolio: string;
    contactEmail: string;
    footerMeeting: string;
    footerLinkedin: string;
    footerInstagram: string;
  };
}

export const translations: Record<Language, Translation> = {
  en: {
    common: {
      hireMe: 'Hire Me',
      contactMe: 'Contact Me',
      downloadCv: 'Download CV',
      viewAnalysis: 'View Analysis',
      getStarted: 'Get Started',
      orderNow: 'Order Now',
      selectPlan: 'Select Plan',
      engineeringReality: 'Engineered for Reality',
      allRightsReserved: 'All Rights Reserved.',
    },
    nav: {
      services: 'Services',
      about: 'About',
      work: 'Samples',
      portfolio: 'Portfolio',
      contact: 'Contact',
      home: 'Home',
    },
    hero: {
      greeting: 'I Am Fredys,',
      role: 'Hardware Engineer',
      subtitle: 'I analyze and review your PCB design to detect critical electrical, layout, and power issues before fabrication.',
      yearsExp: 'Years Experience',
      projectsComplete: 'Projects Completed',
      mfgFailures: 'MFG Failures',
      specialist: 'PCB Specialist',
    },
    about: {
      badge: 'About Me',
      title: 'Expert PCB Designer Based in',
      titleAccent: 'Reliability',
      description: 'Hardware engineer specialized in PCB design and embedded systems. I focus on practical hardware that works in the real world, avoiding the common pitfalls of academic-only designs.',
      specialization: 'Specialization',
      specializationValue: 'IoT & Industrial Sys',
      keyTools: 'Key Tools',
      keyToolsValue: 'Altium, KiCad, EasyEDA & LTspice',
      expertise: 'Expertise',
      expertiseValue: 'ESP32 / STM32',
      focus: 'Focus',
      focusDesc: 'Practical engineering for real products, not academic theory',
    },
    skillset: {
      tabs: {
        skillset: 'Skillset',
        education: 'Education',
        experience: 'Experience',
      },
      focus: 'Expertise Focus',
      focusDesc: 'Detailed analysis of critical electrical systems for complex PCB designs.',
      skills: [
        { name: 'PCB Design', level: '95%' },
        { name: 'Layout Integrity', level: '98%' },
        { name: 'DFM/DFT', level: '90%' },
        { name: 'Schematic Review', level: '94%' },
      ],
      roles: [
        { role: 'PCB Audit Expert', label: 'Senior Specialist', desc: 'Comprehensive review of your design to identify and mitigate risks before production.' },
        { role: 'Hardware Architect', label: 'Embedded Focus', desc: 'Design of robust and scalable hardware architectures tailored to your specific requirements.' },
        { role: 'Manufacturing Consult', label: 'Zero Failure goal', desc: 'Optimization for large-scale manufacturing, ensuring yield and long-term reliability.' },
      ],
      eduDesc: 'Hardware and PCB Design Engineer with extensive experience combining electronic design, embedded systems and validation in real operating environments.',
      expDesc: 'Specialized in PCB design for low consumption systems, automation and electronics. Proven track record in industrial IoT and high-reliability systems.',
      educationList: [
        {
          title: 'Automatic Engineering',
          institution: 'Technological University of Havana - Cuba',
          period: '2012-2017',
          desc: 'Focused on hardware integration and high-reliability systems. Education centered on real-world industrial control and electronics.'
        }
      ],
      experienceList: [
        {
          title: 'PCB / Hardware Design Engineer',
          company: 'InGnia Technology',
          period: '2025-2026',
          location: 'Remote, Havana, Cuba',
          details: [
            'Design and development of schematics and PCB layouts for embedded control systems.',
            'Integration of microcontrollers, sensors, power management circuits and communication modules (Wi-Fi, Bluetooth, Zigbee).',
            'Participation in full hardware development cycles, from concept and schematic design to prototype creation and DFM reviews.',
            'Creation and maintenance of design documentation (BOM, assembly plans, test protocols).'
          ]
        },
        {
          title: 'Hardware Engineer',
          company: 'Circe Smart Navigation Solutions',
          period: '2025',
          location: 'Remote, Barcelona, Spain',
          details: [
            'Development of a compact wearable system oriented to tracking and monitoring applications.',
            'Multilayer PCB layout in KiCad and GNSS module integration.',
            'Implementation of environmental and motion sensors (IMU and temperature).',
            'Power architecture design for battery operation and energy consumption optimization.',
            'Integration of wireless communications (Wi-Fi, Bluetooth and Sub-GHz radio).'
          ]
        },
        {
          title: 'Automatic / Hardware Engineer',
          company: 'Soluciones Electro-Automáticas SEA SRL',
          period: '2023-2026',
          location: 'Hybrid, Havana, Cuba',
          details: [
            'Hardware and PCB design for residential automation systems.',
            'Optimization of PCB design reducing manufacturing costs by 15%.',
            'Improvement of system reliability through the application of DFM best practices.',
            'Participation in the entire cycle: design, prototype, documentation, and technical support.'
          ]
        },
        {
          title: 'Project Engineer - Domotics',
          company: 'TISA Security SRL',
          period: '2022-2025',
          location: 'Remote, Havana, Cuba',
          details: [
            'Technical design of more than 50 electronic security and home automation projects.',
            'Preparation of diagrams, technical plans and selection of electronic components.',
            'Optimization of designs that reduced installation times by 20%.',
            'Definition of component selection processes that improved system compatibility by 25%.'
          ]
        },
        {
          title: 'Robotics & Mechatronics Researcher',
          company: 'Technological University of Havana',
          period: '2019-2022',
          location: 'Hybrid, Havana, Cuba',
          details: [
            'Proposal of a mobile robot prototype for automation of logistics processes in warehouses.',
            'Analysis of existing commercial solutions, identifying efficiency improvements of up to 35%.',
            'Applied research technical documentation for future developments.'
          ]
        }
      ]
    },
    problem: {
      badge: 'Critical Warning',
      title: 'A PCB error is',
      titleAccent: 'never just a small error',
      consequences: [
        {
          title: 'Electrical Noise',
          desc: 'Unfiltered EMI can render your hardware unstable, causing erratic behavior and system crashes in real-world environments.',
          type: 'noise'
        },
        {
          title: 'Power Instability',
          desc: 'Improper decoupling and voltage drops cause thermal stress and hardware degradation over time.',
          type: 'power'
        },
        {
          title: 'Total Fabrication Loss',
          desc: 'DFM violations found after fabrication mean thousands of dollars trashed and weeks of project momentum lost.',
          type: 'mfg'
        }
      ],
      footer: 'These failures are invisible in CAD; they only appear when it’s too expensive to fix.',
      cta: 'Secure My Design Before Fabricating',
    },
    services: {
      badge: 'Expertise',
      title: 'Delivering',
      titleAccent: 'Reliable Product Design',
      description: 'I analyze hidden risks before fabrication. From power integrity to signal decoupling, I ensure your board is ready for the real world.',
      list: [
        { name: 'PCB Risk Review', desc: 'Go / No-Go to fabrication report' },
        { name: 'Reliability Design', desc: 'Production-ready architecture' },
        { name: 'Design Optimization', desc: 'Noise & EMI reduction' },
      ],
      cards: [
        { name: 'Risk Audit', desc: 'Deep analysis of traces, vias and power planes.' },
        { name: 'PCB Layout', desc: 'Ready for Production' },
        { name: 'Optimization', desc: 'Reducing EMI and increasing stability.' },
        { name: 'Prototyping', desc: 'Rapid iterations with high precision.' },
      ],
    },
    whatYouGet: {
      badge: 'Outcome',
      title: 'What You Get',
      items: [
        { 
          title: 'Critical Fault Detection', 
          desc: 'Identification of layout errors and electrical bottlenecks before they reach the factory floor.',
          icon: 'search',
          image: 'https://images.unsplash.com/photo-1517077304055-6e89abbf09b0?auto=format&fit=crop&q=80&w=600'
        },
        { 
          title: 'Practical Solutions', 
          desc: 'Actionable engineering feedback, not just theoretical warnings. We fix the trace, not just the symptom.',
          icon: 'zap',
          image: 'https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&q=80&w=600'
        },
        { 
          title: 'Enhanced Reliability', 
          desc: 'Reduction of thermal stress and EMI/EMC noise by up to 40% through layout optimization.',
          icon: 'shield',
          image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=600'
        },
        { 
          title: 'Iterative Cost Savings', 
          desc: 'Minimize expensive PCB re-spins. Get it right on the first or second revision, not the fifth.',
          icon: 'settings',
          image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=600'
        },
        { 
          title: 'Production Readiness', 
          desc: 'Full DFM/DFT analysis ensures your board is optimized for modern automated assembly lines.',
          icon: 'check-circle',
          image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=600'
        },
        { 
          title: 'Technical Documentation', 
          desc: 'Comprehensive audit reports and optimized manufacturing files (Gerbers, BOM, Pick&Place).',
          icon: 'file-text',
          image: 'https://images.unsplash.com/photo-1635070041078-e363dbe005cb?auto=format&fit=crop&q=80&w=600'
        }
      ],
    },
    pricing: {
      badge: 'Investment',
      title: 'I Give You The Best',
      featuredBadge: 'Recommended',
      footer: 'Price depends on complexity and project risk.',
      plans: [
        {
          name: 'Basic Audit',
          price: '80€',
          unit: '/ start',
          items: [
            'Delivery: 24–48h',
            'Schematic Review',
            'Critical Connection Detection',
            'Power & Sensitive Traces',
            'Manufacturing Checklist'
          ],
          cta: 'Secure My Design',
        },
        {
          name: 'Complete Review',
          price: '150€',
          unit: 'Per Task',
          items: [
            'Delivery: 4–7 days',
            'Full Layout Audit',
            'Signal Integrity & EMI',
            'Power Distribution Review',
            'Detailed Report + Solutions',
            'Go/No-Go Evaluation'
          ],
          cta: 'Ensure Success',
          featured: true,
        },
        {
          name: 'Full PCB Design',
          price: '200€',
          unit: '/ starting',
          items: [
            'Complete Design (up to 4 layers)',
            'BOM & Manufacturing Files',
            'Professional Routing',
            '3D Model (STEP)',
            'Microcontrollers & IoT',
            '1 Revision Round'
          ],
          cta: 'Build the Future',
        },
      ],
    },
    portfolio: {
      badge: 'Portfolio',
      title: 'Latest completed Projects',
      items: [
        { tag: 'Power Failure', title: 'Case: System Instability Redesign' },
        { tag: 'EMI Optimization', title: 'Case: High Frequency Shielding' },
        { tag: 'Custom PCB', title: 'Product: Wearable Hardware v2' },
      ],
    },
    contact: {
      badge: 'Contact Now',
      title: 'Get in touch',
      titleAccent: 'now',
      subtitle: 'Every PCB mistake becomes expensive after fabrication. Fix it before it happens.',
      emailLabel: 'Write Email',
      phoneLabel: 'Have Question?',
      visitLabel: 'Visit Now',
      visitValue: 'Available Remote Worldwide',
      form: {
        name: 'Your Name',
        email: 'Email Address',
        message: 'Your Message',
        submit: 'Send Message',
      },
    },
    footer: {
      navTitle: 'Navigation',
      contactTitle: 'Contact',
      addressTitle: 'Address',
      desc: 'Engineering practical products for the real world. No academic theory, just results.',
    },
    whatsapp: {
      generic: "Hi Fredys, I saw your portfolio and would like to contact you for a job proposal.",
      hero: "Hi Fredys, I saw your portfolio and would like to talk about my hardware projects.",
      about: "Hi Fredys, I would like to hire your services as a Hardware Engineer for my next project.",
      problem: "Hi Fredys, I have seen the critical errors section and would like to secure my design before manufacturing.",
      pricing: "Hi Fredys, I am interested in the service of",
      portfolio: "Hi Fredys, I would like to know more about the project:",
      contactEmail: "Hi Fredys, I am writing to you from your portfolio to make a technical inquiry.",
      footerMeeting: "Hi Fredys, I would like to schedule a meeting to talk about my PCB designs.",
      footerLinkedin: "Hi Fredys, I am contacting you from LinkedIn to talk about a project.",
      footerInstagram: "Hi Fredys, I follow you on Instagram and would like to consult you about hardware.",
    },
  },
  es: {
    common: {
      hireMe: 'Contrátame',
      contactMe: 'Contáctame',
      downloadCv: 'Descargar CV',
      viewAnalysis: 'Ver Análisis',
      getStarted: 'Empezar',
      orderNow: 'Pedir Ahora',
      selectPlan: 'Seleccionar Plan',
      engineeringReality: 'Diseñado para la Realidad',
      allRightsReserved: 'Todos los derechos reservados.',
    },
    nav: {
      services: 'Servicios',
      about: 'Sobre mí',
      work: 'Ejemplos',
      portfolio: 'Portafolio',
      contact: 'Contacto',
      home: 'Inicio',
    },
    hero: {
      greeting: 'Soy Fredys,',
      role: 'Ingeniero de Hardware',
      subtitle: 'Analizo y reviso tu diseño de PCB para detectar problemas críticos de electricidad, layout y alimentación antes de la fabricación.',
      yearsExp: 'Años de Experiencia',
      projectsComplete: 'Proyectos Completados',
      mfgFailures: 'Fallos de Fab.',
      specialist: 'Especialista en PCB',
    },
    about: {
      badge: 'Sobre mí',
      title: 'Diseñador de PCB Experto Basado en la',
      titleAccent: 'Fiabilidad',
      description: 'Ingeniero de hardware especializado en diseño de PCB y sistemas embebidos. Me enfoco en hardware práctico que funciona en el mundo real, evitando los errores comunes de los diseños puramente académicos.',
      specialization: 'Especialización',
      specializationValue: 'IoT y Sist. Industriales',
      keyTools: 'Herramientas Clave',
      keyToolsValue: 'Altium, KiCad, EasyEDA y LTspice',
      expertise: 'Experiencia',
      expertiseValue: 'ESP32 / STM32',
      focus: 'Enfoque',
      focusDesc: 'Ingeniería práctica para productos reales, no teoría académica',
    },
    skillset: {
      tabs: {
        skillset: 'Habilidades',
        education: 'Educación',
        experience: 'Experiencia',
      },
      focus: 'Foco de Experiencia',
      focusDesc: 'Análisis detallado de sistemas eléctricos críticos para diseños de PCB complejos.',
      skills: [
        { name: 'Diseño PCB', level: '95%' },
        { name: 'Integridad de Layout', level: '98%' },
        { name: 'DFM/DFT', level: '90%' },
        { name: 'Revisión de Esquemáticos', level: '94%' },
      ],
      roles: [
        { role: 'Auditor de PCB', label: 'Especialista Senior', desc: 'Revisión exhaustiva de su diseño para identificar y mitigar riesgos antes de la producción.' },
        { role: 'Arquitecto de Hardware', label: 'Foco en Embebidos', desc: 'Diseño de arquitecturas de hardware robustas y escalables adaptadas a sus requisitos específicos.' },
        { role: 'Consultor de Fabricación', label: 'Meta de Cero Fallos', desc: 'Optimización para la fabricación a gran escala, asegurando el rendimiento y la fiabilidad a largo plazo.' },
      ],
      eduDesc: 'Ingeniero de Hardware y Diseño de PCB con amplia experiencia combinando diseño electrónico, sistemas embebidos y validación en entornos reales de operación.',
      expDesc: 'Especializado en diseño de PCB para sistemas de bajo consumo, automatización y electrónica. Amplia trayectoria en IoT industrial y sistemas de alta fiabilidad.',
      educationList: [
        {
          title: 'Ingeniería Automática',
          institution: 'Universidad Tecnológica de La Habana - Cuba',
          period: '2012-2017',
          desc: 'Especializado en integración de hardware y sistemas de alta fiabilidad. Educación enfocada en control industrial y electrónica real.'
        }
      ],
      experienceList: [
        {
          title: 'Ingeniero Diseñador de PCB / Hardware',
          company: 'InGnia Technology',
          period: '2025-2026',
          location: 'Remoto, La Habana, Cuba',
          details: [
            'Diseño y desarrollo de esquemáticos y layouts de PCB para sistemas embebidos de control.',
            'Integración de microcontroladores, sensores, circuitos de gestión de potencia y módulos de comunicación (Wi-Fi, Bluetooth, Zigbee).',
            'Participación en ciclos completos de desarrollo de hardware, desde el concepto hasta prototipos y revisiones de DFM.',
            'Creación y mantenimiento de documentación de diseño (BOM, planos de ensamblaje, protocolos de prueba).'
          ]
        },
        {
          title: 'Ingeniero de Hardware',
          company: 'Circe Smart Navigation Solutions',
          period: '2025',
          location: 'Remoto, Barcelona, España',
          details: [
            'Desarrollo de un sistema compacto tipo wearable orientado a aplicaciones de rastreo y monitoreo.',
            'Layout de PCB multicapa en KiCad e integración de módulo GNSS.',
            'Implementación de sensores ambientales y de movimiento (IMU y temperatura).',
            'Diseño de arquitectura de alimentación para batería y optimización de consumo.',
            'Integración de comunicaciones inalámbricas (Wi-Fi, Bluetooth y radio Sub-GHz).'
          ]
        },
        {
          title: 'Ingeniero Automático / Hardware',
          company: 'Soluciones Electro-Automáticas SEA SRL',
          period: '2023-2026',
          location: 'Híbrido, La Habana, Cuba',
          details: [
            'Diseño de hardware y PCB para sistemas de automatización residencial.',
            'Optimización del diseño PCB reduciendo costes de fabricación en un 15%.',
            'Mejora de la confiabilidad del sistema mediante la aplicación de buenas prácticas de DFM.',
            'Participación en todo el ciclo: diseño, prototipo, documentación y soporte técnico.'
          ]
        },
        {
          title: 'Ingeniero de Proyectos - Domótica',
          company: 'TISA Security SRL',
          period: '2022-2025',
          location: 'Remoto, La Habana, Cuba',
          details: [
            'Diseño técnico de más de 50 proyectos de seguridad electrónica y domótica.',
            'Elaboración de esquemas, planos técnicos y selección de componentes electrónicos.',
            'Optimización de diseños que redujo los tiempos de instalación en un 20%.',
            'Definición de procesos de selección de componentes que mejoraron la compatibilidad en un 25%.'
          ]
        },
        {
          title: 'Investigador - Robótica y Mecatrónica',
          company: 'Universidad Tecnológica de La Habana',
          period: '2019-2022',
          location: 'Híbrido, La Habana, Cuba',
          details: [
            'Propuesta de un prototipo de robot móvil para automatización de procesos logísticos.',
            'Análisis de soluciones comerciales existentes, identificando mejoras de eficiencia de hasta un 35%.',
            'Documentación técnica de investigación aplicada para desarrollos futuros.'
          ]
        }
      ]
    },
    problem: {
      badge: 'Advertencia Crítica',
      title: 'Un error de PCB',
      titleAccent: 'nunca es solo un error pequeño',
      consequences: [
        {
          title: 'Ruido Eléctrico',
          desc: 'EMI no filtrada puede volver inestable tu hardware, causando comportamientos erráticos y bloqueos del sistema.',
          type: 'noise'
        },
        {
          title: 'Inestabilidad de Potencia',
          desc: 'Desacoplo inadecuado y caídas de voltaje causan estrés térmico y degradación del hardware con el tiempo.',
          type: 'power'
        },
        {
          title: 'Pérdida Total de Fab.',
          desc: 'Las violaciones de DFM tras fabricar significan miles de euros a la basura y semanas de retraso en el proyecto.',
          type: 'mfg'
        }
      ],
      footer: 'Estos fallos son invisibles en CAD; solo aparecen cuando corregirlos ya es demasiado caro.',
      cta: 'Asegura tu Diseño Antes de Fabricar',
    },
    services: {
      badge: 'Experiencia',
      title: 'Entregando',
      titleAccent: 'Diseño de Producto Fiable',
      description: 'Analizo riesgos ocultos antes de fabricar. Desde integridad de potencia hasta desacoplo de señal, aseguro que tu placa esté lista para el mundo real.',
      list: [
        { name: 'Revisión de Riesgo PCB', desc: 'Reporte Go / No-Go para fabricación' },
        { name: 'Diseño de Fiabilidad', desc: 'Arquitectura lista para producción' },
        { name: 'Optimización de Diseño', desc: 'Reducción de ruido y EMI' },
      ],
      cards: [
        { name: 'Auditoría de Riesgo', desc: 'Análisis profundo de pistas, vías y planos de potencia.' },
        { name: 'Layout de PCB', desc: 'Listo para Producción' },
        { name: 'Optimización', desc: 'Reduciendo EMI y aumentando la estabilidad.' },
        { name: 'Prototipado', desc: 'Iteraciones rápidas con alta precisión.' },
      ],
    },
    whatYouGet: {
      badge: 'Resultado',
      title: 'Lo Que Obtienes',
      items: [
        { 
          title: 'Detección de Fallos Críticos', 
          desc: 'Identificación de errores de layout y cuellos de botella eléctricos antes de llegar a fábrica.',
          icon: 'search',
          image: 'https://images.unsplash.com/photo-1517077304055-6e89abbf09b0?auto=format&fit=crop&q=80&w=600'
        },
        { 
          title: 'Soluciones Prácticas', 
          desc: 'Feedback de ingeniería accionable. Corregimos la pista, no solo el síntoma del problema.',
          icon: 'zap',
          image: 'https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&q=80&w=600'
        },
        { 
          title: 'Fiabilidad Mejorada', 
          desc: 'Reducción del estrés térmico y ruido EMI/EMC en hasta un 40% mediante optimización de layout.',
          icon: 'shield',
          image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=600'
        },
        { 
          title: 'Ahorro de Costes Operativos', 
          desc: 'Minimiza los costosos re-diseños de PCB. Hazlo bien en la primera o segunda revisión, evitando gastos innecesarios de fabricación.',
          icon: 'settings',
          image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=600'
        },
        { 
          title: 'Preparación para Producción', 
          desc: 'El análisis DFM/DFT exhaustivo asegura que tu placa esté optimizada para las líneas de montaje automatizadas más modernas.',
          icon: 'check-circle',
          image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=600'
        },
        { 
          title: 'Documentación Técnica', 
          desc: 'Informes de auditoría detallados y archivos de fabricación optimizados (Gerbers, BOM con referencias reales y Pick&Place).',
          icon: 'file-text',
          image: 'https://images.unsplash.com/photo-1635070041078-e363dbe005cb?auto=format&fit=crop&q=80&w=600'
        }
      ],
    },
    pricing: {
      badge: 'Inversión',
      title: 'Te Ofrezco Lo Mejor',
      featuredBadge: 'Recomendado',
      footer: 'El precio depende de la complejidad y riesgo del proyecto.',
      plans: [
        {
          name: 'Auditoría Básica',
          price: '80€',
          unit: '/ desde',
          items: [
            'Entrega: 24–48h',
            'Revisión de Esquema Eléctrico',
            'Detección de Errores Críticos',
            'Pistas Sensibles y Potencia',
            'Checklist de Fabricación'
          ],
          cta: 'Asegurar Mi Diseño',
        },
        {
          name: 'Revisión Completa',
          price: '150€',
          unit: 'Por Tarea',
          items: [
            'Entrega: 4–7 días',
            'Auditoría Full Layout',
            'Análisis SI y Riesgo EMI',
            'Distribución de Potencia',
            'Reporte Detallado + Soluciones',
            'Evaluación Go / No-Go'
          ],
          cta: 'Garantizar Éxito',
          featured: true,
        },
        {
          name: 'Diseño PCB Completo',
          price: '200€',
          unit: '/ desde',
          items: [
            'Diseño Completo (hasta 4 capas)',
            'BOM y Archivos de Fábrica',
            'Routing Profesional Optimizado',
            'Modelo 3D (STEP)',
            'Microcontroladores e IoT',
            '1 Ronda de Ajustes Incluida'
          ],
          cta: 'Construir el Futuro',
        },
      ],
    },
    portfolio: {
      badge: 'Portafolio',
      title: 'Últimos Proyectos Completados',
      items: [
        { tag: 'Fallo de Potencia', title: 'Caso: Rediseño de Inestabilidad' },
        { tag: 'Opt. de EMI', title: 'Caso: Blindaje de Alta Frecuencia' },
        { tag: 'PCB Personalizada', title: 'Producto: Hardware Wearable v2' },
      ],
    },
    contact: {
      badge: 'Contactar Ahora',
      title: 'Ponte en contacto',
      titleAccent: 'ahora',
      subtitle: 'Cada error de PCB sale caro tras la fabricación. Corrígelo antes de que pase.',
      emailLabel: 'Escribir Email',
      phoneLabel: '¿Tienes Preguntas?',
      visitLabel: 'Visítanos',
      visitValue: 'Disponible Remoto Worldwide',
      form: {
        name: 'Tu Nombre',
        email: 'Correo Electrónico',
        message: 'Tu Mensaje',
        submit: 'Enviar Mensaje',
      },
    },
    footer: {
      navTitle: 'Navegación',
      contactTitle: 'Contacto',
      addressTitle: 'Dirección',
      desc: 'Ingeniería de productos prácticos para el mundo real. Sin teoría académica, solo resultados.',
    },
    whatsapp: {
      generic: "Hola Fredys, vi tu portfolio y me gustaría contactar contigo para una propuesta de trabajo.",
      hero: "Hola Fredys, vi tu portfolio y me gustaría hablar sobre mis proyectos de hardware.",
      about: "Hola Fredys, me gustaría contratar tus servicios como Ingeniero de Hardware para mi próximo proyecto.",
      problem: "Hola Fredys, he visto la sección de errores críticos y me gustaría asegurar mi diseño antes de fabricar.",
      pricing: "Hola Fredys, me interesa el servicio de",
      portfolio: "Hola Fredys, me gustaría saber más sobre el proyecto:",
      contactEmail: "Hola Fredys, te escribo desde tu portfolio para realizar una consulta técnica.",
      footerMeeting: "Hola Fredys, me gustaría agendar una reunión para hablar sobre mis diseños de PCB.",
      footerLinkedin: "Hola Fredys, te contacto desde LinkedIn para hablar sobre un proyecto.",
      footerInstagram: "Hola Fredys, te sigo en Instagram y me gustaría consultarte sobre hardware.",
    },
  },
};
