import React, { useState, useEffect } from 'react';

const Projects = () => {
  const [language, setLanguage] = useState(localStorage.getItem('language') || 'en');

  useEffect(() => {
    const handleLanguageChange = (e) => {
      if (e.detail && e.detail.language) {
        setLanguage(e.detail.language);
      }
    };

    window.addEventListener('languageChanged', handleLanguageChange);
    
    // Also check for local storage changes (though script.js handles the toggle)
    const handleStorageChange = () => {
        setLanguage(localStorage.getItem('language') || 'en');
    };
    window.addEventListener('storage', handleStorageChange);

    return () => {
      window.removeEventListener('languageChanged', handleLanguageChange);
      window.removeEventListener('storage', handleStorageChange);
    };
  }, []);

  const t = (en, es) => (language === 'es' ? es : en);

  return (
    <section className="section projects" id="projects">
      <div className="container">
        <h2 className="section__title" data-en="Featured Projects" data-es="Proyectos Destacados">
          {t("Featured Projects", "Proyectos Destacados")}
        </h2>
        <div className="projects__grid">
          {/* GoodScribe Project */}
          <div className="project-card">
            <div className="project-card__type-icons">
              <img src="svg/website.svg" alt="Website" />
              <span className="separator"></span>
              <img src="svg/extensions.svg" alt="Browser Extension" />
            </div>
            <div className="project-card__image">
              <img src="projects/goodScribe/goodScribeLogoLight.png" alt="GoodScribe Chrome Extension" loading="lazy" />
              <img src="projects/goodScribe/goodScribeLogoDark.png" alt="GoodScribe Chrome Extension" loading="lazy" />
            </div>
            <div className="project-card__content">
              <h3 className="project-card__title" data-en="GoodScribe - Interpreter Tool" data-es="GoodScribe - Herramienta para Intérpretes">
                {t("GoodScribe - Interpreter Tool", "GoodScribe - Herramienta para Intérpretes")}
              </h3>
              <p className="project-card__description" data-en="GoodScribe is a dual-platform tool (Web & Extension) for professional interpreters. Powered by Deepgram AI, it delivers real-time transcription and translation with integrated glossary management. By instantly highlighting key terminology, it helps interpreters maintain accuracy and speed in high-pressure environments." data-es="GoodScribe es una herramienta de doble plataforma (Web y Extensión) para intérpretes profesionales. Impulsada por la IA de Deepgram, ofrece transcripción y traducción en tiempo real con gestión integrada de glosarios. Al resaltar instantáneamente la terminología clave, ayuda a los intérpretes a mantener la precisión y velocidad en entornos de alta presión.">
                {t(
                  "GoodScribe is a dual-platform tool (Web & Extension) for professional interpreters. Powered by Deepgram AI, it delivers real-time transcription and translation with integrated glossary management. By instantly highlighting key terminology, it helps interpreters maintain accuracy and speed in high-pressure environments.",
                  "GoodScribe es una herramienta de doble plataforma (Web y Extensión) para intérpretes profesionales. Impulsada por la IA de Deepgram, ofrece transcripción y traducción en tiempo real con gestión integrada de glosarios. Al resaltar instantáneamente la terminología clave, ayuda a los intérpretes a mantener la precisión y velocidad en entornos de alta presión."
                )}
              </p>
              <div class="project-card__tech">
                <span>React</span>
                <span>TypeScript</span>
                <span>Firebase</span>
                <span>Deepgram</span>
                <span>Astro</span>
                <span>Google Cloud</span>
                <span>Cloudflare</span>
              </div>
              <div class="project-card__links">
                <a href="https://goodscribe.cloud" target="_blank" rel="noopener noreferrer" className="project-link">
                  <i className="fas fa-external-link-alt"></i> <span data-en="Live Demo" data-es="Demo en Vivo">{t("Live Demo", "Demo en Vivo")}</span>
                </a>
                <a href="projects/goodscribe.html" className="project-link">
                  <i className="fas fa-book-open"></i> <span data-en="View Details" data-es="Ver Detalles">{t("View Details", "Ver Detalles")}</span>
                </a>
              </div>
            </div>
          </div>

          {/* 1decien Project */}
          <div className="project-card">
            <img src="svg/website.svg" alt="Website" className="project-card__type-icon" />
            <div className="project-card__image">
              <img src="projects/1decien/hero.png" alt="1decien Website" loading="lazy" />
            </div>
            <div className="project-card__content">
              <h3 className="project-card__title" data-en="1decien - Male Performance Supplements" data-es="1decien - Suplementos de Rendimiento Masculino">
                {t("1decien - Male Performance Supplements", "1decien - Suplementos de Rendimiento Masculino")}
              </h3>
              <p className="project-card__description" data-en="Developed a high-performance landing page and user dashboard using Astro and React, featuring a modern dark UI with sophisticated Glassmorphism effects and fluid scroll animations. Integrated Supabase for secure authentication and leveraged PostgreSQL for robust data management. The project prioritizes Core Web Vitals, achieving top-tier speed and SEO performance while delivering a premium, responsive user experience." data-es="Desarrollé una landing page y panel de usuario de alto rendimiento usando Astro y React, presentando una interfaz oscura moderna con sofisticados efectos de Glassmorphism y animaciones fluidas. Integré Supabase para autenticación segura y aproveché PostgreSQL para una gestión robusta de datos. El proyecto prioriza Core Web Vitals, logrando velocidad y rendimiento SEO de primer nivel mientras ofrece una experiencia de usuario premium.">
                {t(
                  "Developed a high-performance landing page and user dashboard using Astro and React, featuring a modern dark UI with sophisticated Glassmorphism effects and fluid scroll animations. Integrated Supabase for secure authentication and leveraged PostgreSQL for robust data management. The project prioritizes Core Web Vitals, achieving top-tier speed and SEO performance while delivering a premium, responsive user experience.",
                  "Desarrollé una landing page y panel de usuario de alto rendimiento usando Astro y React, presentando una interfaz oscura moderna con sofisticados efectos de Glassmorphism y animaciones fluidas. Integré Supabase para autenticación segura y aproveché PostgreSQL para una gestión robusta de datos. El proyecto prioriza Core Web Vitals, logrando velocidad y rendimiento SEO de primer nivel mientras ofrece una experiencia de usuario premium."
                )}
              </p>
              <div className="project-card__tech">
                <span>Astro</span>
                <span>React</span>
                <span>Supabase</span>
                <span>PostgreSQL</span>
                <span>Tailwind CSS</span>
              </div>
              <div className="project-card__links">
                <a href="https://1decien.com" target="_blank" rel="noopener noreferrer" className="project-link">
                  <i className="fas fa-external-link-alt"></i> <span data-en="Live Demo" data-es="Demo en Vivo">{t("Live Demo", "Demo en Vivo")}</span>
                </a>
              </div>
            </div>
          </div>

          {/* GoodPins - Featured Project */}
          <div className="project-card">
            <img src="svg/extensions.svg" alt="Browser Extension" className="project-card__type-icon" />
            <div className="project-card__image">
              <img src="projects/img/goodPinsLogoLight.png" alt="GoodPins Chrome Extension" loading="lazy" />
              <img src="projects/img/goodPinsLogodark.png" alt="GoodPins Chrome Extension" loading="lazy" />
            </div>
            <div className="project-card__content">
              <h3 className="project-card__title" data-en="GoodPins: Bookmark Manager Chrome Extension" data-es="GoodPins: Extensión de Chrome para Gestión de Marcadores">
                {t("GoodPins: Bookmark Manager Chrome Extension", "GoodPins: Extensión de Chrome para Gestión de Marcadores")}
              </h3>
              <p className="project-card__description" data-en="GoodPins is a Chrome extension engineered for developers who demand control over their bookmark workflow. The UI layer is driven entirely by vanilla JavaScript, backed by modular controllers that orchestrate drag-and-drop interactions, theme switching, and state hydration without relying on third-party frameworks. Every interaction is designed to feel native to Chrome thanks to the extension action service worker and a purpose-built popup experience." data-es="GoodPins es una extensión de Chrome diseñada para desarrolladores que requieren control absoluto sobre su flujo de marcadores. La capa de UI está impulsada completamente con JavaScript puro, respaldada por controladores modulares que orquestan interacciones de arrastrar y soltar, cambio de tema e hidratación de estado sin depender de frameworks externos. Cada interacción se siente nativa de Chrome gracias al service worker de la acción de extensión y una experiencia popup hecha a medida.">
                {t(
                  "GoodPins is a Chrome extension engineered for developers who demand control over their bookmark workflow. The UI layer is driven entirely by vanilla JavaScript, backed by modular controllers that orchestrate drag-and-drop interactions, theme switching, and state hydration without relying on third-party frameworks. Every interaction is designed to feel native to Chrome thanks to the extension action service worker and a purpose-built popup experience.",
                  "GoodPins es una extensión de Chrome diseñada para desarrolladores que requieren control absoluto sobre su flujo de marcadores. La capa de UI está impulsada completamente con JavaScript puro, respaldada por controladores modulares que orquestan interacciones de arrastrar y soltar, cambio de tema e hidratación de estado sin depender de frameworks externos. Cada interacción se siente nativa de Chrome gracias al service worker de la acción de extensión y una experiencia popup hecha a medida."
                )}
              </p>
              <div className="project-card__tech">
                <span>JavaScript</span>
                <span>Chrome APIs</span>
                <span>HTML/CSS</span>
                <span>Local Storage</span>
              </div>
              <div className="project-card__links">
                <a href="https://chromewebstore.google.com/detail/goodpins/placeholder" target="_blank" rel="noopener noreferrer" className="project-link">
                  <i className="fas fa-external-link-alt"></i> <span data-en="Live Demo" data-es="Demo en Vivo">{t("Live Demo", "Demo en Vivo")}</span>
                </a>
                <a href="https://github.com/Dexterpol-A21/goodPins" target="_blank" rel="noopener noreferrer" className="project-link">
                  <i className="fab fa-github"></i> <span data-en="GitHub" data-es="GitHub">{t("GitHub", "GitHub")}</span>
                </a>
                <a href="projects/goodpins.html" className="project-link">
                  <i className="fas fa-book-open"></i> <span data-en="View Details" data-es="Ver Detalles">{t("View Details", "Ver Detalles")}</span>
                </a>
              </div>
            </div>
          </div>

          <div className="project-card">
            <img src="svg/website.svg" alt="Website" className="project-card__type-icon" />
            <div className="project-card__image">
              <img src="img/helleskin.png" alt="Helleskin Website" loading="lazy" />
            </div>
            <div className="project-card__content">
              <h3 className="project-card__title" data-en="Helleskin - Laboratory Client Acquisition Website" data-es="Helleskin - Sitio Web de Adquisición de Clientes de Laboratorio">
                {t("Helleskin - Laboratory Client Acquisition Website", "Helleskin - Sitio Web de Adquisición de Clientes de Laboratorio")}
              </h3>
              <p className="project-card__description" data-en="Developed a responsive website for Helleskin Laboratory, strategically designed to generate client leads and showcase their specialized services. Utilized HTML5, CSS3, and JavaScript to build a professional online presence, featuring clear calls-to-action and optimized content delivery. Ensured cross-browser compatibility and mobile-first design to maximize reach and accessibility for potential clients." data-es="Desarrollé un sitio web responsivo para Helleskin Laboratory, diseñado estratégicamente para generar clientes potenciales y mostrar sus servicios especializados. Utilicé HTML5, CSS3, y JavaScript para construir una presencia en línea profesional, presentando llamados a la acción claros y entrega de contenido optimizada. Aseguré compatibilidad entre navegadores y diseño móvil primero para maximizar alcance y accesibilidad para clientes potenciales.">
                {t(
                  "Developed a responsive website for Helleskin Laboratory, strategically designed to generate client leads and showcase their specialized services. Utilized HTML5, CSS3, and JavaScript to build a professional online presence, featuring clear calls-to-action and optimized content delivery. Ensured cross-browser compatibility and mobile-first design to maximize reach and accessibility for potential clients.",
                  "Desarrollé un sitio web responsivo para Helleskin Laboratory, diseñado estratégicamente para generar clientes potenciales y mostrar sus servicios especializados. Utilicé HTML5, CSS3, y JavaScript para construir una presencia en línea profesional, presentando llamados a la acción claros y entrega de contenido optimizada. Aseguré compatibilidad entre navegadores y diseño móvil primero para maximizar alcance y accesibilidad para clientes potenciales."
                )}
              </p>
              <div className="project-card__tech">
                <span>HTML5</span>
                <span>CSS3</span>
                <span>JavaScript</span>
                <span data-en="Mobile-First" data-es="Móvil Primero">{t("Mobile-First", "Móvil Primero")}</span>
                <span data-en="Lead Generation" data-es="Generación de Leads">{t("Lead Generation", "Generación de Leads")}</span>
              </div>
              <div className="project-card__links">
                <a href="https://helleskin.com" target="_blank" rel="noopener noreferrer" className="project-link">
                  <i className="fas fa-external-link-alt"></i> <span data-en="Live Demo" data-es="Demo en Vivo">{t("Live Demo", "Demo en Vivo")}</span>
                </a>
              </div>
            </div>
          </div>

          <div className="project-card">
            <img src="svg/extensions.svg" alt="Browser Extension" className="project-card__type-icon" />
            <div className="project-card__image">
              <img src="img/goodNotes.png" alt="GoodNotes Helper Chrome Extension" loading="lazy" />
            </div>
            <div className="project-card__content">
              <h3 className="project-card__title" data-en="GoodNotes Helper: Call Center Productivity Extension" data-es="GoodNotes Helper: Extensión de Productividad para Call Center">
                {t("GoodNotes Helper: Call Center Productivity Extension", "GoodNotes Helper: Extensión de Productividad para Call Center")}
              </h3>
              <p className="project-card__description" data-en="Developed a Chrome extension to automate and optimize call center workflows. Implemented features using JavaScript and Chrome APIs, including web scraping for NPI data retrieval, DOM manipulation for text cleaning (Alt+C shortcut), and local storage for call/schedule tracking. Significantly reduced manual effort and potential errors for agents." data-es="Desarrollé una extensión de Chrome para automatizar y optimizar flujos de trabajo de call center. Implementé características usando JavaScript y Chrome APIs, incluyendo web scraping para recuperación de datos NPI, manipulación del DOM para limpieza de texto (atajo Alt+C), y almacenamiento local para seguimiento de llamadas/horarios. Reduje significativamente el esfuerzo manual y errores potenciales para agentes.">
                {t(
                  "Developed a Chrome extension to automate and optimize call center workflows. Implemented features using JavaScript and Chrome APIs, including web scraping for NPI data retrieval, DOM manipulation for text cleaning (Alt+C shortcut), and local storage for call/schedule tracking. Significantly reduced manual effort and potential errors for agents.",
                  "Desarrollé una extensión de Chrome para automatizar y optimizar flujos de trabajo de call center. Implementé características usando JavaScript y Chrome APIs, incluyendo web scraping para recuperación de datos NPI, manipulación del DOM para limpieza de texto (atajo Alt+C), y almacenamiento local para seguimiento de llamadas/horarios. Reduje significativamente el esfuerzo manual y errores potenciales para agentes."
                )}
              </p>
              <div className="project-card__tech">
                <span>JavaScript</span>
                <span>Chrome APIs</span>
                <span>HTML/CSS</span>
                <span>Web Scraping</span>
              </div>
              <div className="project-card__links">
                <a href="https://chromewebstore.google.com/detail/good-notes/hbjfmkgamdlelmjpbioehpcpkihjnach" target="_blank" rel="noopener noreferrer" className="project-link">
                  <i className="fas fa-external-link-alt"></i> <span data-en="Live Demo" data-es="Demo en Vivo">{t("Live Demo", "Demo en Vivo")}</span>
                </a>
              </div>
            </div>
          </div>

          <div className="project-card">
            <img src="svg/website.svg" alt="Website" className="project-card__type-icon" />
            <div className="project-card__image">
              <img src="img/gabis.png" alt="Gabis Restaurant Website" loading="lazy" />
            </div>
            <div className="project-card__content">
              <h3 className="project-card__title" data-en="Gabis Restaurant - Responsive Website" data-es="Gabis Restaurant - Sitio Web Responsivo">
                {t("Gabis Restaurant - Responsive Website", "Gabis Restaurant - Sitio Web Responsivo")}
              </h3>
              <p className="project-card__description" data-en="Built a responsive website for Gabis Restaurant featuring multiple sections accessible via a navigation menu. Developed using HTML5, CSS3 (Flexbox/Grid), and JavaScript for interactivity, showcasing the menu, brand story, and contact details effectively across all devices." data-es="Construí un sitio web responsivo para Gabis Restaurant con múltiples secciones accesibles mediante un menú de navegación. Desarrollado usando HTML5, CSS3 (Flexbox/Grid), y JavaScript para interactividad, mostrando el menú, historia de la marca y detalles de contacto efectivamente en todos los dispositivos.">
                {t(
                  "Built a responsive website for Gabis Restaurant featuring multiple sections accessible via a navigation menu. Developed using HTML5, CSS3 (Flexbox/Grid), and JavaScript for interactivity, showcasing the menu, brand story, and contact details effectively across all devices.",
                  "Construí un sitio web responsivo para Gabis Restaurant con múltiples secciones accesibles mediante un menú de navegación. Desarrollado usando HTML5, CSS3 (Flexbox/Grid), y JavaScript para interactividad, mostrando el menú, historia de la marca y detalles de contacto efectivamente en todos los dispositivos."
                )}
              </p>
              <div className="project-card__tech">
                <span>HTML5</span>
                <span>CSS3</span>
                <span>JavaScript</span>
                <span data-en="Responsive Design" data-es="Diseño Responsivo">{t("Responsive Design", "Diseño Responsivo")}</span>
              </div>
              <div className="project-card__links">
                <a href="https://gabis.com.mx" target="_blank" rel="noopener noreferrer" className="project-link">
                  <i className="fas fa-external-link-alt"></i> <span data-en="Live Demo" data-es="Demo en Vivo">{t("Live Demo", "Demo en Vivo")}</span>
                </a>
              </div>
            </div>
          </div>

          <div className="project-card">
            <img src="svg/website.svg" alt="Website" className="project-card__type-icon" />
            <div className="project-card__image">
              <img src="img/doctorEnCasa.png" alt="Doctor en Casa Website" loading="lazy" />
            </div>
            <div className="project-card__content">
              <h3 className="project-card__title" data-en="Doctor en Casa - Service Landing Page (SPA)" data-es="Doctor en Casa - Página de Aterrizaje de Servicio (SPA)">
                {t("Doctor en Casa - Service Landing Page (SPA)", "Doctor en Casa - Página de Aterrizaje de Servicio (SPA)")}
              </h3>
              <p className="project-card__description" data-en="Developed a fully responsive single-page application (SPA) landing page for a home medical service provider. Implemented a clean UI using HTML5/CSS3 and integrated direct user contact via a JavaScript-triggered WhatsApp link. Focused on clear service presentation and immediate communication access." data-es="Desarrollé una página de aterrizaje de aplicación de página única (SPA) completamente responsiva para un proveedor de servicios médicos a domicilio. Implementé una interfaz limpia usando HTML5/CSS3 e integré contacto directo de usuario mediante un enlace de WhatsApp activado por JavaScript. Enfocado en presentación clara de servicios y acceso inmediato a comunicación.">
                {t(
                  "Developed a fully responsive single-page application (SPA) landing page for a home medical service provider. Implemented a clean UI using HTML5/CSS3 and integrated direct user contact via a JavaScript-triggered WhatsApp link. Focused on clear service presentation and immediate communication access.",
                  "Desarrollé una página de aterrizaje de aplicación de página única (SPA) completamente responsiva para un proveedor de servicios médicos a domicilio. Implementé una interfaz limpia usando HTML5/CSS3 e integré contacto directo de usuario mediante un enlace de WhatsApp activado por JavaScript. Enfocado en presentación clara de servicios y acceso inmediato a comunicación."
                )}
              </p>
              <div className="project-card__tech">
                <span>HTML5</span>
                <span>CSS3</span>
                <span>JavaScript</span>
                <span data-en="Responsive Design" data-es="Diseño Responsivo">{t("Responsive Design", "Diseño Responsivo")}</span>
              </div>
              <div className="project-card__links">
                <a href="https://www.doctorencasa.org" target="_blank" rel="noopener noreferrer" className="project-link">
                  <i className="fas fa-external-link-alt"></i> <span data-en="Live Demo" data-es="Demo en Vivo">{t("Live Demo", "Demo en Vivo")}</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
