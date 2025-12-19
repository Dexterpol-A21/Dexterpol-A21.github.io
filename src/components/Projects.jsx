import React, { useState, useEffect } from 'react';

const projectsData = [
  {
    id: 'goodboard',
    title: {
      en: "GoodBoard - Blackboard Extension",
      es: "GoodBoard - Extensión para Blackboard"
    },
    description: {
      en: "GoodBoard is a Chrome extension designed to modernize the Blackboard learning management system, specifically optimized for UVM. It replaces the outdated interface with a sleek, React-based dashboard that centralizes assignments, grades, and announcements, allowing students to focus on learning rather than navigating complex menus.",
      es: "GoodBoard es una extensión de Chrome diseñada para modernizar el sistema de gestión de aprendizaje Blackboard, optimizada específicamente para UVM. Reemplaza la interfaz anticuada con un elegante dashboard basado en React que centraliza tareas, calificaciones y anuncios, permitiendo a los estudiantes enfocarse en aprender en lugar de navegar por menús complejos."
    },
    tech: ["React", "Vite", "Tailwind CSS", "Recharts", "Chrome API"],
    links: [
      { url: "https://chromewebstore.google.com/detail/goodboard/lgpcjpbmmlhffneoobfaheejlajfbpjn", icon: "fas fa-external-link-alt", label: { en: "Live Demo", es: "Demo en Vivo" } },
      { url: "https://github.com/Dexterpol-A21/goodBoard", icon: "fab fa-github", label: { en: "GitHub", es: "GitHub" } },
      { url: "projects/goodboard.html", icon: "fas fa-book-open", label: { en: "View Details", es: "Ver Detalles" } }
    ],
    images: [
      "/projects/goodBoard/goodBoardLogoLight.png",
      "/projects/goodBoard/goodBoardLogoBlack.png"
    ],
    typeIcon: "/svg/extensions.svg",
    color: "#FCC624" // Yellow
  },
  {
    id: 'goodscribe',
    title: {
      en: "GoodScribe - Interpreter Tool",
      es: "GoodScribe - Herramienta para Intérpretes"
    },
    description: {
      en: "GoodScribe is a dual-platform tool (Web & Extension) for professional interpreters. Powered by Deepgram AI, it delivers real-time transcription and translation with integrated glossary management. By instantly highlighting key terminology, it helps interpreters maintain accuracy and speed in high-pressure environments.",
      es: "GoodScribe es una herramienta de doble plataforma (Web y Extensión) para intérpretes profesionales. Impulsada por la IA de Deepgram, ofrece transcripción y traducción en tiempo real con gestión integrada de glosarios. Al resaltar instantáneamente la terminología clave, ayuda a los intérpretes a mantener la precisión y velocidad en entornos de alta presión."
    },
    tech: ["React", "TypeScript", "Firebase", "Deepgram", "Astro", "Google Cloud", "Cloudflare"],
    links: [
      { url: "https://goodscribe.cloud", icon: "fas fa-external-link-alt", label: { en: "Live Demo", es: "Demo en Vivo" } },
      { url: "projects/goodscribe.html", icon: "fas fa-book-open", label: { en: "View Details", es: "Ver Detalles" } }
    ],
    images: [
      "/projects/goodScribe/goodScribeLogoLight.png",
      "/projects/goodScribe/goodScribeLogoDark.png"
    ],
    typeIcons: ["/svg/website.svg", "/svg/extensions.svg"],
    color: "#3ECF8E" // Supabase Green / Brand Green
  },
  {
    id: '1decien',
    title: {
      en: "1decien - Male Performance Supplements",
      es: "1decien - Suplementos de Rendimiento Masculino"
    },
    description: {
      en: "Developed a high-performance landing page and user dashboard using Astro and React, featuring a modern dark UI with sophisticated Glassmorphism effects and fluid scroll animations. Integrated Supabase for secure authentication and leveraged PostgreSQL for robust data management. The project prioritizes Core Web Vitals, achieving top-tier speed and SEO performance while delivering a premium, responsive user experience.",
      es: "Desarrollé una landing page y panel de usuario de alto rendimiento usando Astro y React, presentando una interfaz oscura moderna con sofisticados efectos de Glassmorphism y animaciones fluidas. Integré Supabase para autenticación segura y aproveché PostgreSQL para una gestión robusta de datos. El proyecto prioriza Core Web Vitals, logrando velocidad y rendimiento SEO de primer nivel mientras ofrece una experiencia de usuario premium."
    },
    tech: ["Astro", "React", "Supabase", "PostgreSQL", "Tailwind CSS"],
    links: [
      { url: "https://1decien.com", icon: "fas fa-external-link-alt", label: { en: "Live Demo", es: "Demo en Vivo" } }
    ],
    images: ["/projects/1decien/hero.png"],
    typeIcon: "/svg/website.svg",
    color: "#14b8a6" // Teal (GoodNotes Blue)
  },
  {
    id: 'goodpins',
    title: {
      en: "GoodPins: Bookmark Manager Chrome Extension",
      es: "GoodPins: Extensión de Chrome para Gestión de Marcadores"
    },
    description: {
      en: "GoodPins is a Chrome extension for developers who need total control over their bookmarks. Built with vanilla JavaScript and modular controllers, it offers native performance without third-party frameworks. Features include recursive drag-and-drop, custom themes, and local-first state management for a seamless experience.",
      es: "GoodPins es una extensión de Chrome para desarrolladores que necesitan control total sobre sus marcadores. Construida con JavaScript puro y controladores modulares, ofrece rendimiento nativo sin frameworks de terceros. Incluye arrastrar y soltar recursivo, temas personalizados y gestión de estado local para una experiencia fluida."
    },
    tech: ["JavaScript", "Chrome APIs", "HTML/CSS", "Local Storage"],
    links: [
      { url: "https://chromewebstore.google.com/detail/goodpins/placeholder", icon: "fas fa-external-link-alt", label: { en: "Live Demo", es: "Demo en Vivo" } },
      { url: "https://github.com/Dexterpol-A21/goodPins", icon: "fab fa-github", label: { en: "GitHub", es: "GitHub" } },
      { url: "projects/goodpins.html", icon: "fas fa-book-open", label: { en: "View Details", es: "Ver Detalles" } }
    ],
    images: [
      "/projects/img/goodPinsLogoLight.png",
      "/projects/img/goodPinsLogodark.png"
    ],
    typeIcon: "/svg/extensions.svg",
    color: "#FFFFFF", // White
    textColor: "#000000" // Black text for visibility on white background
  },
  {
    id: 'helleskin',
    title: {
      en: "Helleskin - Laboratory Client Acquisition Website",
      es: "Helleskin - Sitio Web de Adquisición de Clientes de Laboratorio"
    },
    description: {
      en: "Developed a responsive website for Helleskin Laboratory, strategically designed to generate client leads and showcase their specialized services. Utilized HTML5, CSS3, and JavaScript to build a professional online presence, featuring clear calls-to-action and optimized content delivery. Ensured cross-browser compatibility and mobile-first design to maximize reach and accessibility for potential clients.",
      es: "Desarrollé un sitio web responsivo para Helleskin Laboratory, diseñado estratégicamente para generar clientes potenciales y mostrar sus servicios especializados. Utilicé HTML5, CSS3, y JavaScript para construir una presencia en línea profesional, presentando llamados a la acción claros y entrega de contenido optimizada. Aseguré compatibilidad entre navegadores y diseño móvil primero para maximizar alcance y accesibilidad para clientes potenciales."
    },
    tech: ["HTML5", "CSS3", "JavaScript", { en: "Mobile-First", es: "Móvil Primero" }, { en: "Lead Generation", es: "Generación de Leads" }],
    links: [
      { url: "https://helleskin.com", icon: "fas fa-external-link-alt", label: { en: "Live Demo", es: "Demo en Vivo" } }
    ],
    images: ["/img/helleskin.png"],
    typeIcon: "/svg/website.svg",
    color: "#9ca3af" // Gray
  },
  {
    id: 'goodnotes',
    title: {
      en: "GoodNotes Helper: Call Center Productivity Extension",
      es: "GoodNotes Helper: Extensión de Productividad para Call Center"
    },
    description: {
      en: "Developed a Chrome extension to automate and optimize call center workflows. Implemented features using JavaScript and Chrome APIs, including web scraping for NPI data retrieval, DOM manipulation for text cleaning (Alt+C shortcut), and local storage for call/schedule tracking. Significantly reduced manual effort and potential errors for agents.",
      es: "Desarrollé una extensión de Chrome para automatizar y optimizar flujos de trabajo de call center. Implementé características usando JavaScript y Chrome APIs, incluyendo web scraping para recuperación de datos NPI, manipulación del DOM para limpieza de texto (atajo Alt+C), y almacenamiento local para seguimiento de llamadas/horarios. Reduje significativamente el esfuerzo manual y errores potenciales para agentes."
    },
    tech: ["JavaScript", "Chrome APIs", "HTML/CSS", "Web Scraping"],
    links: [
      { url: "https://chromewebstore.google.com/detail/good-notes/hbjfmkgamdlelmjpbioehpcpkihjnach", icon: "fas fa-external-link-alt", label: { en: "Live Demo", es: "Demo en Vivo" } }
    ],
    images: ["/img/goodNotes.png"],
    typeIcon: "/svg/extensions.svg",
    color: "#9ca3af" // Gray
  },
  {
    id: 'gabis',
    title: {
      en: "Gabis Restaurant - Responsive Website",
      es: "Gabis Restaurant - Sitio Web Responsivo"
    },
    description: {
      en: "Built a responsive website for Gabis Restaurant featuring multiple sections accessible via a navigation menu. Developed using HTML5, CSS3 (Flexbox/Grid), and JavaScript for interactivity, showcasing the menu, brand story, and contact details effectively across all devices.",
      es: "Construí un sitio web responsivo para Gabis Restaurant con múltiples secciones accesibles mediante un menú de navegación. Desarrollado usando HTML5, CSS3 (Flexbox/Grid), y JavaScript para interactividad, mostrando el menú, historia de la marca y detalles de contacto efectivamente en todos los dispositivos."
    },
    tech: ["HTML5", "CSS3", "JavaScript", { en: "Responsive Design", es: "Diseño Responsivo" }],
    links: [
      { url: "https://gabis.com.mx", icon: "fas fa-external-link-alt", label: { en: "Live Demo", es: "Demo en Vivo" } }
    ],
    images: ["/img/gabis.png"],
    typeIcon: "/svg/website.svg",
    color: "#f97316" // Orange
  },
  {
    id: 'doctorencasa',
    title: {
      en: "Doctor en Casa - Service Landing Page (SPA)",
      es: "Doctor en Casa - Página de Aterrizaje de Servicio (SPA)"
    },
    description: {
      en: "Developed a fully responsive single-page application (SPA) landing page for a home medical service provider. Implemented a clean UI using HTML5/CSS3 and integrated direct user contact via a JavaScript-triggered WhatsApp link. Focused on clear service presentation and immediate communication access.",
      es: "Desarrollé una página de aterrizaje de aplicación de página única (SPA) completamente responsiva para un proveedor de servicios médicos a domicilio. Implementé una interfaz limpia usando HTML5/CSS3 e integré contacto directo de usuario mediante un enlace de WhatsApp activado por JavaScript. Enfocado en presentación clara de servicios y acceso inmediato a comunicación."
    },
    tech: ["HTML5", "CSS3", "JavaScript", { en: "Responsive Design", es: "Diseño Responsivo" }],
    links: [
      { url: "https://www.doctorencasa.org", icon: "fas fa-external-link-alt", label: { en: "Live Demo", es: "Demo en Vivo" } }
    ],
    images: ["/img/doctorEnCasa.png"],
    typeIcon: "/svg/website.svg",
    color: "#1e3a8a" // Dark Blue
  }
];

const Projects = () => {
  const [language, setLanguage] = useState(localStorage.getItem('language') || 'en');

  useEffect(() => {
    const handleLanguageChange = (e) => {
      if (e.detail && e.detail.language) {
        setLanguage(e.detail.language);
      }
    };

    window.addEventListener('languageChanged', handleLanguageChange);
    
    const handleStorageChange = () => {
        setLanguage(localStorage.getItem('language') || 'en');
    };
    window.addEventListener('storage', handleStorageChange);

    return () => {
      window.removeEventListener('languageChanged', handleLanguageChange);
      window.removeEventListener('storage', handleStorageChange);
    };
  }, []);

  const t = (obj) => (language === 'es' ? obj.es : obj.en);

  return (
    <section className="section projects" id="projects">
      <div className="container">
        <h2 className="section__title" data-en="Featured Projects" data-es="Proyectos Destacados">
          {language === 'es' ? "Proyectos Destacados" : "Featured Projects"}
        </h2>
        <div className="projects__grid">
          {projectsData.map((project) => (
              <div 
                key={project.id}
                className="project-card" 
                style={{ 
                  height: '100%', 
                  '--hover-glow': project.color,
                  '--hover-text': project.textColor || '#ffffff',
                  '--hover-border': project.id === 'goodpins' ? '#000000' : project.color
                }}
              >
                {project.typeIcons ? (
                  <div className="project-card__type-icons">
                    <img src={project.typeIcons[0]} alt="Type" />
                    <span className="separator"></span>
                    <img src={project.typeIcons[1]} alt="Type" />
                  </div>
                ) : (
                  <img src={project.typeIcon} alt="Type" className="project-card__type-icon" />
                )}
                
                <div className="project-card__image">
                  {project.images.map((img, idx) => (
                    <img key={idx} src={img} alt={t(project.title)} loading="lazy" />
                  ))}
                </div>
                
                <div className="project-card__content">
                  <h3 className="project-card__title" data-en={project.title.en} data-es={project.title.es}>
                    {t(project.title)}
                  </h3>
                  <p className="project-card__description" data-en={project.description.en} data-es={project.description.es}>
                    {t(project.description)}
                  </p>
                  <div className="project-card__tech">
                    {project.tech.map((tech, idx) => (
                      <span key={idx} data-en={typeof tech === 'object' ? tech.en : tech} data-es={typeof tech === 'object' ? tech.es : tech}>
                        {typeof tech === 'object' ? t(tech) : tech}
                      </span>
                    ))}
                  </div>
                  <div className="project-card__links">
                    {project.links.map((link, idx) => (
                      <a key={idx} href={link.url} target={link.url.startsWith('http') ? "_blank" : "_self"} rel={link.url.startsWith('http') ? "noopener noreferrer" : ""} className="project-link">
                        <i className={link.icon}></i> <span data-en={link.label.en} data-es={link.label.es}>{t(link.label)}</span>
                      </a>
                    ))}
                  </div>
                </div>
              </div>
          ))}
        </div>
      </div>
      <style jsx>{`
        .project-card {
          transition: box-shadow 0.3s ease, border-color 0.3s ease;
          border: 1px solid transparent;
        }
        .project-card:hover {
          box-shadow: 0 10px 30px -10px var(--hover-glow, rgba(0,0,0,0.2));
          border-color: var(--hover-glow, transparent);
        }
      `}</style>
    </section>
  );
};

export default Projects;
