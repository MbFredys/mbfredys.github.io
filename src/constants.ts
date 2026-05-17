
export type Language = 'en' | 'es';

export const OB_EMAIL = 'bWIuZnJlZGR5c0BnbWFpbC5jb20=';
export const OB_PHONE = 'MzQ3NDIwOTA5OTE=';
export const OB_PHONE_F = 'KzM0IDc0MiAwOSAwOSA5MQ==';

export const secureAtob = (str: string) => {
  if (typeof window === 'undefined') return '';
  try {
    return window.atob(str);
  } catch (e) {
    return '';
  }
};

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
    getReview: string;
    viewSamples: string;
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
      about: string;
      skillset: string;
      education: string;
      experience: string;
    };
    focus: string;
    focusDesc: string;
    expertise: string[];
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
    consequences: { title: string; desc: string; image: string; type: 'noise' | 'power' | 'mfg' }[];
    footer: string;
    cta: string;
  };
  services: {
    badge: string;
    title: string;
    titleAccent: string;
    description: string;
    list: { name: string; desc: string }[];
    cards: { name: string; desc: string; image: string }[];
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
      subtitle: string;
      description: string;
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
    technicalWork: {
      title: string;
      items: { 
        tag: string; 
        title: string;
        problem: string;
        result: string;
        image: string;
      }[];
    };
    selectedProjects: {
      title: string;
      items: {
        id: string;
        title: string;
        description: string;
        problem: string;
        result: string;
        image: string;
        tags: string[];
        fullCaseStudy?: string;
        story?: {
          overview: string;
          context?: string;
          motivation?: string;
          quote?: string;
          features?: { title: string; items: string[] }[];
          conclusion?: string;
        };
      }[];
    };
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
      projectType: string;
      shortDescription: string;
      boardLayers: {
        label: string;
        options: string[];
      };
      timeline: {
        label: string;
        options: string[];
      };
      submit: string;
    };
  };
  process: {
    badge: string;
    title: string;
    steps: { title: string; desc: string }[];
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
      getReview: 'Get PCB Review',
      viewSamples: 'View Sample Work',
      greeting: 'Prevent PCB Failures',
      role: 'Before Manufacturing',
      subtitle: 'PCB Design Review & Reliability Analysis for engineers and hardware teams who want fewer mistakes, lower risk and more reliable products',
      yearsExp: 'Years Experience',
      projectsComplete: 'Projects Completed',
      mfgFailures: 'MFG Failures',
      specialist: 'PCB Specialist',
    },
    about: {
      badge: 'About Me',
      title: 'Expert PCB Designer Based in',
      titleAccent: 'Reliability',
      description: 'Automation & Control Engineer specialized in PCB design and embedded systems. I focus on practical hardware that works in the real world, avoiding the common pitfalls of academic-only designs.',
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
        about: 'About Me',
        skillset: 'Technical Expertise',
        education: 'Education',
        experience: 'Experience',
      },
      focus: 'Precision Engineering',
      focusDesc: 'Focused on high-reliability systems and complex PCB architectures.',
      expertise: [
        'ESP32 Systems',
        'Embedded Hardware',
        'Low Power Design',
        'PCB Layout',
        'Signal Integrity',
        'Power Electronics',
        'Sensor Integration',
        'Manufacturing Ready Design'
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
          title: 'PCB/Hardware Engineer',
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
          title: 'Automation / Hardware Engineer',
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
          title: 'Electrical Noise & Signal Issues',
          desc: 'Poor grounding, noisy power rails or routing mistakes can lead to unstable readings, communication failures and unpredictable behavior.',
          image: 'https://images.unsplash.com/photo-1563770660941-20978e870e26?auto=format&fit=crop&q=80&w=600',
          type: 'noise'
        },
        {
          title: 'Power Instability & Random Resets',
          desc: 'Weak power integrity and poor decoupling often cause voltage drops, boot failures and random system resets.',
          image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=600',
          type: 'power'
        },
        {
          title: 'Costly Manufacturing Iterations',
          desc: 'One design mistake can mean failed prototypes, production delays and expensive rework after fabrication.',
          image: 'https://images.unsplash.com/photo-1581092162384-8987c1d64718?auto=format&fit=crop&q=80&w=600',
          type: 'mfg'
        }
      ],
      footer: 'These failures are invisible in CAD; they only appear when it’s too expensive to fix.',
      cta: 'Secure My Design Before Fabricating',
    },
    services: {
      badge: 'Expertise',
      title: 'What I',
      titleAccent: 'Review',
      description: 'I analyze hidden risks before fabrication. From power integrity to signal decoupling, I ensure your board is ready for the real world.',
      list: [
        { name: 'PCB Engineering Audit', desc: 'Comprehensive risk and fault report' },
        { name: 'Custom Hardware Design', desc: 'From architecture to manufacturing files' },
      ],
      cards: [
        { name: 'Power Integrity', desc: 'Analysis of PDN, decoupling capacitors, and voltage drops.', image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=600' },
        { name: 'Signal Integrity', desc: 'Impedance matching, crosstalk, and diff pair routing.', image: 'https://images.unsplash.com/photo-1555664424-778a1e5e1b48?auto=format&fit=crop&q=80&w=600' },
        { name: 'Grounding', desc: 'GND planes and return path optimization.', image: 'https://images.unsplash.com/photo-1591405351990-4726e331f141?auto=format&fit=crop&q=80&w=600' },
        { name: 'EMI Risk', desc: 'Radiation mitigation and noise reduction.', image: 'https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&q=80&w=600' },
        { name: 'Routing Quality', desc: 'Trace width, clearance, and layout precision.', image: 'https://images.unsplash.com/photo-1635070041078-e363dbe005cb?auto=format&fit=crop&q=80&w=600' },
        { name: 'MFG Readiness', desc: 'DFM/DFT audit for high-yield assembly.', image: 'https://images.unsplash.com/photo-1565106430482-8f6e74349ca1?auto=format&fit=crop&q=80&w=600' },
      ],
    },
    whatYouGet: {
      badge: 'Trust',
      title: 'What You Receive',
      items: [
        { 
          title: 'Detailed PCB Review Report', 
          desc: 'Comprehensive technical audit covering schematics, layout, and power distribution network.',
          icon: 'file-text',
          image: 'https://images.unsplash.com/photo-1517077304055-6e89abbf09b0?auto=format&fit=crop&q=80&w=600'
        },
        { 
          title: 'Critical Issues Identified', 
          desc: 'Detection of hidden electrical faults and layout bottlenecks before they reach fabrication.',
          icon: 'search',
          image: 'https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&q=80&w=600'
        },
        { 
          title: 'Actionable Fixes', 
          desc: 'Real engineering feedback with direct steps to correct identified problems in your board.',
          icon: 'zap',
          image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=600'
        },
        { 
          title: 'Reliability Improvements', 
          desc: 'Optimization for signal integrity and thermal performance to ensure long-term stability.',
          icon: 'shield',
          image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=600'
        },
        { 
          title: 'Manufacturing Readiness Feedback', 
          desc: 'Full DFM analysis ensuring your design is ready for high-yield automated assembly.',
          icon: 'check-circle',
          image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=600'
        },
        { 
          title: 'Reduced Prototype Risk', 
          desc: 'Avoid expensive re-spins. Get your hardware working correctly on the first revision.',
          icon: 'settings',
          image: 'https://images.unsplash.com/photo-1635070041078-e363dbe005cb?auto=format&fit=crop&q=80&w=600'
        }
      ],
    },
    pricing: {
      badge: 'Investment',
      title: 'I Give You The Best',
      featuredBadge: 'Best Starting Point',
      footer: 'Price depends on complexity and project risk.',
      plans: [
        {
          name: 'PCB Risk Review',
          subtitle: 'Avoid expensive PCB mistakes before fabrication.',
          description: 'I review your schematic and layout to detect critical electrical, routing and reliability issues before manufacturing.',
          price: 'From 99€',
          unit: '/ task',
          items: [
            'Schematic & layout review',
            'Power, grounding & routing checks',
            'Clear technical feedback'
          ],
          cta: 'Get PCB Review',
          featured: true,
        },
        {
          name: 'PCB Design',
          subtitle: 'Custom PCB design focused on reliability and manufacturability.',
          description: 'From concept to production-ready hardware for embedded systems and electronics.',
          price: 'Starting at 300€',
          unit: '/ project',
          items: [
            'Schematic + PCB layout',
            'Component selection',
            'Manufacturing-ready files'
          ],
          cta: 'Discuss Your Project',
        },
      ],
    },
    portfolio: {
      badge: 'Portfolio',
      title: 'Selected Works',
      technicalWork: {
        title: 'Sample Technical Work',
        items: [
          { 
            tag: 'Power Integrity', 
            title: 'Voltage Drop Analysis',
            problem: 'Thermal instability in a 5V/10A regulator circuit due to poor copper density.',
            result: 'Optimized polygon pours and via stitching. Rail ripple reduced by 60% and temperature dropped by 15°C.',
            image: 'https://images.unsplash.com/photo-1591405351990-4726e331f141?auto=format&fit=crop&q=80&w=600'
          },
          { 
            tag: 'Signal Integrity', 
            title: 'DDR3 Impedance Match',
            problem: 'Intermittent bit errors during high-speed memory access at 800MHz.',
            result: 'Matched trace lengths within 5ps and tuned differential impedance to 90Ω. Rock-solid system stability achieved.',
            image: 'https://images.unsplash.com/photo-1555664424-778a1e5e1b48?auto=format&fit=crop&q=80&w=600'
          },
          { 
            tag: 'EMI/EMC', 
            title: 'Radiated Noise Fix',
            problem: 'Failed FCC Class B emissions testing due to switching power supply harmonics.',
            result: 'Implemented snubber circuits and improved return path routing. Passed compliance with 10dB margin.',
            image: 'https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&q=80&w=600'
          },
        ],
      },
      selectedProjects: {
        title: 'Selected Hardware Projects',
        items: [
          {
            id: 'mini-environmental-sensor',
            title: 'PCB-Mini-Environmental-Sensor',
            description: 'Compact monitoring system tracking atmospheric parameters, air quality and CO2 with cloud connectivity.',
            problem: 'Need for high-precision, battery-powered sensing with ultra-low sleep current for agricultural and industrial IoT.',
            result: 'ESP32-C3 based node with TPS62203 power management and 5uA deep sleep. Integrated USB-C charging and BME280/SGP40 sensors.',
            image: 'https://raw.githubusercontent.com/MbFredys/PCB-Mini-Environmental-Sensor/33d14922e9a7ea6b7b3b5bc8500e66088f4456ac/Release/3d-pro.png',
            tags: ['IoT', 'ESP32-C3', 'Sensors'],
            story: {
              overview: "An autonomous, low-cost mini environmental monitoring station specifically designed for resilient operation. It combines an ESP32-C3-VROOM-02 with BME280 sensors and SPG40 air quality sensing on a compact PCB that runs on battery power and charges via USB-C. It's perfect for monitoring conditions in homes, workplaces, or small farms.",
              context: "While living in Cuba, I faced unique realities: constant power instability that affected conventional measuring equipment and the extreme difficulty of obtaining imported hardware. I needed a solution that could work autonomously during long blackouts and remain serviceable with limited local resources.",
              motivation: "My motivation was to create a solution that is Accessible (basic components), Autonomous (battery powered), Locally Sourced (using obtainable parts), and Useful for agriculture and health.",
              quote: "Born from necessity, designed for resilience.",
              features: [
                {
                  title: "Operation Flow",
                  items: ["Dual Power Supply (Lithium + USB-C)", "TPS62203 regulator (95% efficiency)", "Integrated BME280 & SPG40 sensors"]
                },
                {
                  title: "Technical Excellence",
                  items: ["Ultra-low consumption", "15-20 days autonomy with 500mAh", "Sub-GHz connectivity ready"]
                }
              ],
              conclusion: "This project demonstrates that with creativity and technical knowledge, we can solve real problems even with limited resources. Every component was selected for efficiency and availability."
            }
          },
          {
            id: 'energy-monitoring-pcb',
            title: 'Energy-Monitoring-PCB',
            description: 'High-accuracy, isolated three-phase energy monitoring system with PoE connectivity for industrial BMS integration.',
            problem: 'Commercial meters are expensive, closed, and lack modern PoE connectivity for seamless BMS integration.',
            result: 'A professional 3P4W module using ATM90E32AS and ESP32-S3, providing high-resolution electrical analytics with full isolation.',
            image: 'https://raw.githubusercontent.com/MbFredys/PCB-3-Phase-Energy-Monitor/7c473650a7b17593c4647db25b2fef2a7ba0667c/Release/3D_HIGH_QUALITY.png',
            tags: ['Industrial', 'PoE', 'Energy'],
            story: {
              overview: "A high-accuracy, isolated and PoE-powered three-phase energy monitoring system designed for Building Management Systems (BMS). It measures critical electrical parameters in real time and transmits them via Ethernet.",
              context: "Most commercial power meters are expensive, closed, and hard to integrate. They often lack native PoE connectivity and open data access, making them difficult to incorporate into modern energy-aware automation systems.",
              motivation: "To deliver a professional three-phase energy monitoring platform that balances accuracy, safety (IEC compliant isolation), and industrial-grade connectivity using open-source hardware principles.",
              quote: "Professional analytics for energy-aware automation.",
              features: [
                {
                  title: "Professional Metering",
                  items: ["ATM90E32AS engine for 3P4W measurement", "RMS voltage, current, and power factor analysis", "Full isolation between mains and logic domains"]
                },
                {
                  title: "Industrial Connectivity",
                  items: ["Native PoE 802.3af (TPS2378)", "LAN8720A Ethernet link with EMI protection", "ESP32-S3-MINI-1 with OTA support"]
                }
              ],
              conclusion: "The result is a robust, BMS-ready tool providing high-resolution electrical analytics for industrial and commercial environments, built for reliability and long-term deployment."
            }
          },
          {
            id: 'universal-modular-hub',
            title: 'Universal Smart-Home Modular Hub',
            description: 'Compact, scalable, multi-protocol communication platform with plug-in radio modules for Zigbee/Thread and Matter.',
            problem: 'Traditional hubs are locked to one brand, difficult to expand, and depend on cloud services with closed hardware.',
            result: 'A modular system built on ESP32-S3 with automatic module detection via I2C EEPROM and multi-protocol support.',
            image: 'https://raw.githubusercontent.com/MbFredys/PCB-Modular-Multi-Protocol-Hub/781fff015d91ebc9022690dee40ad0e1659068a4/Release/HUB-3D.png',
            tags: ['Smart Home', 'Modular', 'Matter'],
            story: {
              overview: "A compact and scalable modular communication platform designed for modern smart homes. Built around a powerful ESP32-S3 with support for Zigbee, Thread, Matter and Proprietary RF via swappable modules.",
              context: "Smart home ecosystems are often fragmented. Most hubs are proprietary, cloud-dependent, and lack hardware repairability or extensibility. We needed a device that could evolve with the industry.",
              motivation: "To create an open, future-proof platform where users can swap radio modules without replacing the entire infrastructure, ensuring long-term utility.",
              quote: "Future-proof connectivity through modular hardware design.",
              features: [
                {
                  title: "Core Architecture",
                  items: ["ESP32-S3 Host with Native Wi-Fi + BLE", "Ethernet PHY and local battery backup", "Universal expansion bus for radio modules"]
                },
                {
                  title: "Modular Innovation",
                  items: ["EFR32MG24 module for Zigbee/Thread/Matter", "Automatic module identification via EEPROM", "Clean RF design with isolated power rails"]
                }
              ],
              conclusion: "This architecture ensures longevity and expert-level RF performance, providing a truly professional-grade hub for advanced local automation."
            }
          },
        ],
      },
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
        projectType: 'Project Type (e.g. IoT, Industrial)',
        shortDescription: 'Project Description',
        boardLayers: {
          label: 'Estimated Board Layers',
          options: ['1-2 Layers', '4 Layers', '6 Layers', '8 Layers', '10+ Layers / Complex']
        },
        timeline: {
          label: 'Timeline / Urgency',
          options: ['ASAP / Critical', '1-2 Weeks', '1 Month', 'Flexible / Just Quote']
        },
        submit: 'Send Request',
      },
    },
    process: {
      badge: 'Workflow',
      title: 'How It Works',
      steps: [
        { title: 'Project Submission', desc: 'Securely upload your schematics and layout files (Altium, KiCad, or Gerbers).' },
        { title: 'Deep Analysis', desc: 'I perform a 48-point check covering SI, PI, DFM, and electrical logic errors.' },
        { title: 'Actionable Report', desc: 'You receive a detailed PDF with detected faults and the exact steps to fix them.' },
      ],
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
      getReview: 'Obtener Revisión PCB',
      viewSamples: 'Ver Trabajos de Ejemplo',
      greeting: 'Evita Fallos en tu PCB',
      role: 'Antes de Fabricar',
      subtitle: 'Revisión de Diseño de PCB y Análisis de Fiabilidad para ingenieros y equipos de hardware que buscan menos errores, menor riesgo y productos más confiables.',
      yearsExp: 'Años de Experiencia',
      projectsComplete: 'Proyectos Completados',
      mfgFailures: 'Fallos de Fab.',
      specialist: 'Especialista en PCB',
    },
    about: {
      badge: 'Sobre mí',
      title: 'Diseñador de PCB Experto Basado en la',
      titleAccent: 'Fiabilidad',
      description: 'Ingeniero de Automatización y Control especializado en diseño de PCB y sistemas embebidos. Me enfoco en hardware práctico que funciona en el mundo real, evitando los errores comunes de los diseños puramente académicos.',
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
        about: 'Sobre mí',
        skillset: 'Especialidad Técnica',
        education: 'Educación',
        experience: 'Experiencia',
      },
      focus: 'Ingeniería de Precisión',
      focusDesc: 'Enfocado en sistemas de alta fiabilidad y arquitecturas de PCB complejas.',
      expertise: [
        'Sistemas ESP32',
        'Hardware Embebido',
        'Diseño de Bajo Consumo',
        'Layout de PCB',
        'Integridad de Señal',
        'Electrónica de Potencia',
        'Integración de Sensores',
        'Diseño para Fabricación (DFM)'
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
          title: 'PCB/Hardware Engineer',
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
          title: 'Hardware Engineer',
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
          title: 'Automation / Hardware Engineer',
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
          title: 'Ruido Eléctrico y Señal',
          desc: 'Tierra deficiente, planos ruidosos o errores de ruteo causan lecturas inestables y comportamientos impredecibles.',
          image: 'https://images.unsplash.com/photo-1563770660941-20978e870e26?auto=format&fit=crop&q=80&w=600',
          type: 'noise'
        },
        {
          title: 'Potencia y Reinicios Aleatorios',
          desc: 'La mala integridad de potencia y desacoplo deficiente causan caídas de voltaje y fallos aleatorios del sistema.',
          image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=600',
          type: 'power'
        },
        {
          title: 'Iteraciones de Fabricación Costosas',
          desc: 'Un error de diseño puede significar prototipos fallidos, retrasos y re-trabajos costosos tras la fabricación.',
          image: 'https://images.unsplash.com/photo-1581092162384-8987c1d64718?auto=format&fit=crop&q=80&w=600',
          type: 'mfg'
        }
      ],
      footer: 'Estos fallos son invisibles en CAD; solo aparecen cuando corregirlos ya es demasiado caro.',
      cta: 'Asegura tu Diseño Antes de Fabricar',
    },
    services: {
      badge: 'Experiencia',
      title: 'Qué',
      titleAccent: 'Reviso',
      description: 'Analizo riesgos ocultos antes de fabricar. Desde integridad de potencia hasta desacoplo de señal, aseguro que tu placa esté lista para el mundo real.',
      list: [
        { name: 'Auditoría Técnica de PCB', desc: 'Reporte completo de riesgos y fallos' },
        { name: 'Diseño de Hardware a Medida', desc: 'Del concepto a los archivos de fabricación' },
      ],
      cards: [
        { name: 'Integridad de Potencia', desc: 'Análisis de PDN, capacitores de desacoplo y caídas de voltaje.', image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=600' },
        { name: 'Integridad de Señal', desc: 'Impedancia, diafonía (crosstalk) y ruteado diferencial.', image: 'https://images.unsplash.com/photo-1555664424-778a1e5e1b48?auto=format&fit=crop&q=80&w=600' },
        { name: 'Planos de Tierra', desc: 'Optimización de planos GND y rutas de retorno.', image: 'https://images.unsplash.com/photo-1591405351990-4726e331f141?auto=format&fit=crop&q=80&w=600' },
        { name: 'Riesgo de EMI', desc: 'Mitigación de radiación y reducción de ruido.', image: 'https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&q=80&w=600' },
        { name: 'Calidad de Ruteado', desc: 'Ancho de pistas, aislamientos y precisión de layout.', image: 'https://images.unsplash.com/photo-1635070041078-e363dbe005cb?auto=format&fit=crop&q=80&w=600' },
        { name: 'Preparación Fab.', desc: 'Auditoría DFM/DFT para ensamblaje de alto rendimiento.', image: 'https://images.unsplash.com/photo-1565106430482-8f6e74349ca1?auto=format&fit=crop&q=80&w=600' },
      ],
    },
    whatYouGet: {
      badge: 'Confianza',
      title: 'Lo Que Recibes',
      items: [
        { 
          title: 'Reporte de Revisión de PCB Detallado', 
          desc: 'Auditoría técnica exhaustiva que cubre esquemáticos, layout y red de distribución de potencia.',
          icon: 'file-text',
          image: 'https://images.unsplash.com/photo-1517077304055-6e89abbf09b0?auto=format&fit=crop&q=80&w=600'
        },
        { 
          title: 'Identificación de Errores Críticos', 
          desc: 'Detección de fallos eléctricos ocultos y cuellos de botella antes de llegar a fabricación.',
          icon: 'search',
          image: 'https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&q=80&w=600'
        },
        { 
          title: 'Soluciones Técnicas Accionables', 
          desc: 'Feedback de ingeniería real con pasos directos para corregir problemas identificados en tu placa.',
          icon: 'zap',
          image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=600'
        },
        { 
          title: 'Mejoras de Fiabilidad', 
          desc: 'Optimización de integridad de señal y rendimiento térmico para asegurar estabilidad a largo plazo.',
          icon: 'shield',
          image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=600'
        },
        { 
          title: 'Feedback de Preparación para Fábrica', 
          desc: 'Análisis DFM completo asegurando que tu diseño esté listo para montaje automatizado de alto rendimiento.',
          icon: 'check-circle',
          image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=600'
        },
        { 
          title: 'Reducción de Riesgo en Prototipos', 
          desc: 'Evita costosos re-diseños. Logra que tu hardware funcione correctamente desde la primera revisión.',
          icon: 'settings',
          image: 'https://images.unsplash.com/photo-1635070041078-e363dbe005cb?auto=format&fit=crop&q=80&w=600'
        }
      ],
    },
    pricing: {
      badge: 'Inversión',
      title: 'Te Ofrezco Lo Mejor',
      featuredBadge: 'Mejor Punto de Partida',
      footer: 'El precio depende de la complejidad y riesgo del proyecto.',
      plans: [
        {
          name: 'Revisión de Riesgos PCB',
          subtitle: 'Evita errores costosos antes de la fabricación.',
          description: 'Reviso tu esquema y layout para detectar problemas críticos de electricidad, ruteado y fiabilidad antes de fabricar.',
          price: 'Desde 80€',
          unit: '/ tarea',
          items: [
            'Revisión de esquema y layout',
            'Chequeos de potencia, tierra y ruteado',
            'Feedback técnico detallado'
          ],
          cta: 'Obtener Revisión PCB',
          featured: true,
        },
        {
          name: 'Diseño PCB',
          subtitle: 'Diseño a medida enfocado en fiabilidad y fabricabilidad.',
          description: 'Del concepto a hardware listo para producción para sistemas embebidos y electrónica.',
          price: 'Desde 300€',
          unit: '/ proyecto',
          items: [
            'Esquemático + Layout PCB',
            'Selección de componentes',
            'Archivos listos para fabricación'
          ],
          cta: 'Hablar de mi Proyecto',
        },
      ],
    },
    portfolio: {
      badge: 'Portafolio',
      title: 'Trabajos Seleccionados',
      technicalWork: {
        title: 'Ejemplos de Trabajo Técnico',
        items: [
          { 
            tag: 'Integridad de Potencia', 
            title: 'Análisis de Caída de Tensión',
            problem: 'Inestabilidad térmica en un circuito regulador de 5V/10A debido a baja densidad de cobre.',
            result: 'Optimización de planos de cobre y vías térmicas. Rizado de línea reducido en un 60% y temperatura bajó 15°C.',
            image: 'https://images.unsplash.com/photo-1591405351990-4726e331f141?auto=format&fit=crop&q=80&w=600'
          },
          { 
            tag: 'Integridad de Señal', 
            title: 'Ajuste de Impedancia DDR3',
            problem: 'Errores de bits intermitentes durante el acceso a memoria de alta velocidad a 800MHz.',
            result: 'Ajuste de longitudes de pista a 5ps y sintonización de impedancia diferencial a 90Ω. Estabilidad total del sistema.',
            image: 'https://images.unsplash.com/photo-1555664424-778a1e5e1b48?auto=format&fit=crop&q=80&w=600'
          },
          { 
            tag: 'EMI/EMC', 
            title: 'Corrección de Ruido Radiado',
            problem: 'Fallo en pruebas de emisiones FCC Clase B debido a armónicos de fuente conmutada.',
            result: 'Implementación de circuitos snubber y mejora de rutas de retorno. Superó cumplimiento con margen de 10dB.',
            image: 'https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&q=80&w=600'
          },
        ],
      },
      selectedProjects: {
        title: 'Proyectos de Hardware Seleccionados',
        items: [
          {
            id: 'mini-environmental-sensor',
            title: 'PCB-Mini-Environmental-Sensor',
            description: 'Sistema compacto de monitoreo atmosférico, calidad de aire y CO2 con conectividad en la nube.',
            problem: 'Necesidad de detección de alta precisión alimentada por batería con consumo ultra bajo para IoT agrícola e industrial.',
            result: 'Nodo basado en ESP32-C3 con gestión de energía TPS62203 y sueño profundo de 5uA. Carga USB-C integrada y sensores BME280/SGP40.',
            image: 'https://raw.githubusercontent.com/MbFredys/PCB-Mini-Environmental-Sensor/33d14922e9a7ea6b7b3b5bc8500e66088f4456ac/Release/3d-pro.png',
            tags: ['IoT', 'ESP32-C3', 'Sensores'],
            story: {
              overview: "Una estación de monitoreo ambiental autónoma y de bajo costo, diseñada específicamente para un funcionamiento resiliente. Combina un ESP32-C3-VROOM-02 con sensores BME280 y detección de calidad de aire SGP40 en una PCB compacta que funciona con batería y se carga por USB-C. Es perfecta para monitorear condiciones en hogares, lugares de trabajo o pequeñas granjas.",
              context: "Mientras vivía en Cuba, enfrenté realidades únicas: inestabilidad eléctrica constante que afectaba a los equipos de medición convencionales y la extrema dificultad para obtener hardware importado. Necesitaba una solución que funcionara de forma autónoma durante los apagones y fuera resiliente ante la escasez de recursos.",
              motivation: "Mi motivación fue crear una solución que fuera Accesible (componentes básicos), Autónoma (alimentada por batería), de Origen Local (usando partes obtenibles) y Útil para la agricultura y la salud.",
              quote: "Nacido de la necesidad, diseñado para la resiliencia.",
              features: [
                {
                  title: "Flujo de Operación",
                  items: ["Fuente de alimentación dual (Litio + USB-C)", "Regulador TPS62203 (95% de eficiencia)", "Sensores BME280 y SPG40 integrados"]
                },
                {
                  title: "Excelencia Técnica",
                  items: ["Consumo ultra bajo", "Autonomía de 15-20 días con 500mAh", "Listo para conectividad Sub-GHz"]
                }
              ],
              conclusion: "Este proyecto demuestra que con creatividad y conocimiento técnico, podemos resolver problemas reales incluso con recursos limitados. Cada componente fue seleccionado por su eficiencia y disponibilidad."
            }
          },
          {
            id: 'energy-monitoring-pcb',
            title: 'PCB-Monitoreo-Energía',
            description: 'Sistema de monitoreo de energía trifásico aislado y de alta precisión con conectividad PoE para integración industrial.',
            problem: 'Los medidores comerciales son caros, cerrados y carecen de conectividad PoE moderna para una integración perfecta.',
            result: 'Un módulo profesional 3P4W que utiliza ATM90E32AS y ESP32-S3, proporcionando analíticas eléctricas de alta resolución.',
            image: 'https://raw.githubusercontent.com/MbFredys/PCB-3-Phase-Energy-Monitor/7c473650a7b17593c4647db25b2fef2a7ba0667c/Release/3D_HIGH_QUALITY.png',
            tags: ['Industrial', 'PoE', 'Energía'],
            story: {
              overview: "Un sistema de monitoreo de energía trifásico de alta precisión, aislado y alimentado por PoE, diseñado para sistemas de gestión de edificios (BMS). Mide parámetros eléctricos críticos en tiempo real y los transmite vía Ethernet.",
              context: "La mayoría de los medidores de potencia comerciales son cerrados y difíciles de integrar. A menudo carecen de conectividad PoE nativa y acceso abierto a datos, lo que dificulta su incorporación en sistemas de automatización modernos.",
              motivation: "Entregar una plataforma de monitoreo de energía trifásica profesional que equilibre precisión, seguridad (aislamiento conforme a IEC) y conectividad de grado industrial.",
              quote: "Analíticas profesionales para la automatización consciente de la energía.",
              features: [
                {
                  title: "Medición Profesional",
                  items: ["Motor ATM90E32AS para medición 3P4W", "Análisis de voltaje RMS, corriente y factor de potencia", "Aislamiento total entre red y lógica"]
                },
                {
                  title: "Conectividad Industrial",
                  items: ["PoE 802.3af nativo (TPS2378)", "Enlace Ethernet LAN8720A con protección EMI", "ESP32-S3-MINI-1 con soporte OTA"]
                }
              ],
              conclusion: "El resultado es una herramienta robusta, lista para BMS, que proporciona analíticas eléctricas de alta resolución para entornos industriales y comerciales, construida para la fiabilidad a largo plazo."
            }
          },
          {
            id: 'universal-modular-hub',
            title: 'Hub Modular Universal de Hogar Inteligente',
            description: 'Plataforma de comunicación multiprotocolo compacta y escalable con módulos de radio intercambiables para Zigbee/Thread y Matter.',
            problem: 'Los hubs tradicionales están bloqueados a una marca, son difíciles de expandir y dependen de la nube.',
            result: 'Un sistema modular basado en ESP32-S3 con detección automática de módulos vía I2C EEPROM y soporte multiprotocolo.',
            image: 'https://raw.githubusercontent.com/MbFredys/PCB-Modular-Multi-Protocol-Hub/781fff015d91ebc9022690dee40ad0e1659068a4/Release/HUB-3D.png',
            tags: ['Smart Home', 'Modular', 'Matter'],
            story: {
              overview: "Una plataforma de comunicación modular compacta y escalable diseñada para hogares inteligentes modernos. Basada en un potente ESP32-S3 con soporte para Zigbee, Thread, Matter y RF Propietario.",
              context: "Los ecosistemas de hogar inteligente suelen estar fragmentados. La mayoría de los hubs son propietarios, dependen de la nube y carecen de extensibilidad de hardware.",
              motivation: "Crear una plataforma abierta y preparada para el futuro donde los usuarios puedan intercambiar módulos de radio sin reemplazar toda la infraestructura.",
              quote: "Conectividad preparada para el futuro mediante diseño de hardware modular.",
              features: [
                {
                  title: "Arquitectura Central",
                  items: ["Host ESP32-S3 con Wi-Fi Nativo + BLE", "Ethernet PHY y respaldo de batería local", "Bus de expansión universal para módulos de radio"]
                },
                {
                  title: "Innovación Modular",
                  items: ["Módulo EFR32MG24 para Zigbee/Thread/Matter", "Identificación de módulo automática vía EEPROM", "Diseño RF limpio con rieles de potencia aislados"]
                }
              ],
              conclusion: "Esta arquitectura modular garantiza la longevidad y un rendimiento de RF de nivel experto, proporcionando un hub verdaderamente profesional para automatización avanzada."
            }
          },
        ],
      },
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
        projectType: 'Tipo de Proyecto (ej. IoT, Industrial)',
        shortDescription: 'Descripción del Proyecto',
        boardLayers: {
          label: 'Capas estimadas de la placa',
          options: ['1-2 Capas', '4 Capas', '6 Capas', '8 Capas', '10+ Capas / Compleja']
        },
        timeline: {
          label: 'Plazo / Urgencia',
          options: ['Lo antes posible / Crítico', '1-2 Semanas', '1 Mes', 'Flexible / Solo presupuesto']
        },
        submit: 'Enviar Solicitud',
      },
    },
    process: {
      badge: 'Flujo de Trabajo',
      title: 'Cómo Funciona',
      steps: [
        { title: 'Envío del Proyecto', desc: 'Envía tus esquemáticos y archivos de layout de forma segura (Altium, KiCad o Gerbers).' },
        { title: 'Análisis Profundo', desc: 'Realizo una revisión de 48 puntos que cubre SI, PI, DFM y errores lógicos eléctricos.' },
        { title: 'Informe de Acción', desc: 'Recibes un PDF detallado con los fallos detectados y los pasos exactos para corregirlos.' },
      ],
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
