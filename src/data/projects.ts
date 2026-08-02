export type ProjectCopy = {
  title: string;
  role: { es: string; en: string };
  desc: { es: string; en: string };
  link: string;
  linkLabel: string;
  imageDesktop: string | null;
  imageMobile: string | null;
  accent: string;
};

export const allProjects: ProjectCopy[] = [
  {
    title: "GoodScribe",
    role: {
      es: "Producto Propio — SaaS",
      en: "Own Product — SaaS",
    },
    desc: {
      es: "Plataforma para interpretes: transcripcion en vivo, traduccion y glosarios personalizados.",
      en: "Platform for interpreters: live transcription, translation, and custom glossaries.",
    },
    link: "https://goodscribe.org",
    linkLabel: "Live Demo",
    imageDesktop: "/img/projects/goodscribe-desktop.png",
    imageMobile: "/img/projects/goodscribe-mobile.png",
    accent: "#10b981",
  },
  {
    title: "Gabis",
    role: {
      es: "Cliente — Restaurante",
      en: "Client — Restaurant",
    },
    desc: {
      es: "Sitio corporativo con menu digital e identidad visual del local.",
      en: "Corporate site with digital menu and venue visual identity.",
    },
    link: "https://gabis.com.mx",
    linkLabel: "Live Demo",
    imageDesktop: "/img/projects/gabis-desktop.png",
    imageMobile: "/img/projects/gabis-mobile.png",
    accent: "#f97316",
  },
  {
    title: "NoProb",
    role: {
      es: "Agencia — Vitrina",
      en: "Agency — Showcase",
    },
    desc: {
      es: "Software a medida y sitios de alto rendimiento. Del brief al deploy.",
      en: "Custom software and high-performance sites. Brief to deploy.",
    },
    link: "https://noprobsystems.com",
    linkLabel: "Live Demo",
    imageDesktop: "/img/projects/noprob-desktop.png",
    imageMobile: "/img/projects/noprob-mobile.png",
    accent: "#a1a1aa",
  },
  {
    title: "Doctor en Casa",
    role: {
      es: "Cliente — Landing Page Medica",
      en: "Client — Medical Landing Page",
    },
    desc: {
      es: "SPA para servicios medicos a domicilio. UI limpia con integracion WhatsApp. Mobile-first, presentacion clara de servicios.",
      en: "SPA for at-home medical services. Clean UI with WhatsApp integration. Mobile-first, clear service presentation.",
    },
    link: "https://www.doctorencasa.org",
    linkLabel: "Live Demo",
    imageDesktop: "/img/projects/doctor-en-casa-desktop.png",
    imageMobile: "/img/projects/doctor-en-casa-mobile.png",
    accent: "#38bdf8",
  },
  {
    title: "Barberia 99",
    role: {
      es: "Cliente — Web App + Sistema",
      en: "Client — Web App + System",
    },
    desc: {
      es: "Rediseno completo mas software con sistema de reserva de citas y programa de fidelidad con puntos.",
      en: "Full redesign plus software with appointment booking and a points loyalty program.",
    },
    link: "https://barberia99.com",
    linkLabel: "Live Demo",
    imageDesktop: "/img/projects/barberia-99-desktop.png",
    imageMobile: "/img/projects/barberia-99-mobile.png",
    accent: "#fb7185",
  },
  {
    title: "TotalLCard",
    role: {
      es: "Cliente — Landing Page Corporativa",
      en: "Client — Corporate Landing Page",
    },
    desc: {
      es: "Pagina web para empresa de impresion de gafetes y credenciales PVC en Queretaro.",
      en: "Website for a PVC badge and credential printing company in Queretaro.",
    },
    link: "https://totallcard.pages.dev",
    linkLabel: "Live Demo",
    imageDesktop: "/img/projects/totallcard-desktop.png",
    imageMobile: "/img/projects/totallcard-mobile.png",
    accent: "#e4e4e7",
  },
  {
    title: "Utrilla Contract",
    role: {
      es: "Cliente — Sitio Multilingue",
      en: "Client — Multilingual Site",
    },
    desc: {
      es: "Sitio bilingue (ES/EN) para fabricante espanol de mobiliario contract. Cloudflare Workers.",
      en: "Bilingual site (ES/EN) for a Spanish contract furniture manufacturer. Cloudflare Workers.",
    },
    link: "https://astronautical-ascension.utrillaprojects.workers.dev/es/",
    linkLabel: "Live Demo",
    imageDesktop: "/img/projects/utrilla-contract-desktop.png",
    imageMobile: "/img/projects/utrilla-contract-mobile.png",
    accent: "#c4b5fd",
  },
  {
    title: "Aurelia Concierge",
    role: {
      es: "Cliente — Landing Concierge",
      en: "Client — Concierge Landing",
    },
    desc: {
      es: "Concierge VIP para spa y saunas en Macao: venues, shuttle privado, precios insider y flujo de reserva.",
      en: "VIP concierge for spa and saunas in Macao: venues, private shuttle, insider pricing, and booking flow.",
    },
    link: "https://macau-sauna.pages.dev",
    linkLabel: "Live Demo",
    imageDesktop: "/img/projects/aurelia-concierge-desktop.png",
    imageMobile: "/img/projects/aurelia-concierge-mobile.png",
    accent: "#f59e0b",
  },
  {
    title: "1decien",
    role: {
      es: "Cliente — E-commerce",
      en: "Client — E-commerce",
    },
    desc: {
      es: "Marca de suplementos de rendimiento masculino. Landing Astro con paquetes, terapia guiada y checkout discreto.",
      en: "Men's performance supplement brand. Astro landing with packages, guided therapy, and discreet checkout.",
    },
    link: "https://1decien-astro.pages.dev",
    linkLabel: "Live Demo",
    imageDesktop: "/img/projects/1decien-desktop.png",
    imageMobile: "/img/projects/1decien-mobile.png",
    accent: "#22d3ee",
  },
  {
    title: "Unicornio Azul",
    role: {
      es: "Cliente — Sitio Corporativo",
      en: "Client — Corporate Site",
    },
    desc: {
      es: "Sitio para consultora de negocio, producto e import/export. Framework SORIE, casos y ciclo 360 grados.",
      en: "Site for a business, product, and import/export consultancy. SORIE framework, cases, and 360° cycle.",
    },
    link: "https://unicornioazul.es",
    linkLabel: "Live Demo",
    imageDesktop: "/img/projects/unicornio-azul-desktop.png",
    imageMobile: "/img/projects/unicornio-azul-mobile.png",
    accent: "#60a5fa",
  },
  {
    title: "Vyroba Wood",
    role: {
      es: "Cliente — Sitio Industrial",
      en: "Client — Industrial Site",
    },
    desc: {
      es: "Mobiliario a escala industrial: cocinas, closets y puertas. Manufactura B2B, ingenieria BIM/CAD y cotizacion.",
      en: "Industrial-scale furniture: kitchens, closets, and doors. B2B manufacturing, BIM/CAD engineering, and quoting.",
    },
    link: "https://vyroba-wood-web.pages.dev",
    linkLabel: "Live Demo",
    imageDesktop: "/img/projects/vyroba-wood-desktop.png",
    imageMobile: "/img/projects/vyroba-wood-mobile.png",
    accent: "#d6b483",
  },
];

export const chromeExtensions: ProjectCopy[] = [
  {
    title: "GoodPins",
    role: {
      es: "Chrome Extension",
      en: "Chrome Extension",
    },
    desc: {
      es: "Extension de Chrome para organizar marcadores. Drag & drop recursivo sin librerias, carpetas jerarquicas ilimitadas, 6 temas con CSS variables, pinning y export/import JSON. Pensada para no depender de sync cloud ni de UIs pesadas.",
      en: "Chrome extension for bookmark organization. Recursive drag & drop with no libraries, unlimited nested folders, 6 themes via CSS variables, pinning, and JSON export/import. Built to avoid cloud sync and heavy UIs.",
    },
    link: "https://chromewebstore.google.com/detail/boioajnagmchhekefbalflmodfmalopm",
    linkLabel: "Chrome Store",
    imageDesktop: null,
    imageMobile: null,
    accent: "#ffffff",
  },
  {
    title: "GoodBoard",
    role: {
      es: "Chrome Extension",
      en: "Chrome Extension",
    },
    desc: {
      es: "Overhaul de Blackboard para UVM. Dashboard moderno con Kanban, Gantt y analiticas. Shadow DOM para aislar Tailwind del CSS heredado, scraping con MutationObservers y orquestacion via background worker.",
      en: "Blackboard overhaul for UVM. Modern dashboard with Kanban, Gantt, and analytics. Shadow DOM to isolate Tailwind from legacy CSS, scraping via MutationObservers, and orchestration through a background worker.",
    },
    link: "https://chromewebstore.google.com/detail/goodboard/lgpcjpbmmlhffneoobfaheejlajfbpjn",
    linkLabel: "Chrome Store",
    imageDesktop: null,
    imageMobile: null,
    accent: "#fbbf24",
  },
  {
    title: "GoodNotes",
    role: {
      es: "Chrome Extension",
      en: "Chrome Extension",
    },
    desc: {
      es: "Automatizacion de flujos de call center: web scraping NPI, limpieza de texto con atajo Alt+C, almacenamiento local para seguimiento de llamadas y horarios. Menos friccion manual por agente.",
      en: "Call-center workflow automation: NPI web scraping, text cleanup via Alt+C shortcut, local storage for call tracking and schedules. Less manual friction per agent.",
    },
    link: "https://chromewebstore.google.com/detail/good-notes/hbjfmkgamdlelmjpbioehpcpkihjnach",
    linkLabel: "Chrome Store",
    imageDesktop: null,
    imageMobile: null,
    accent: "#818cf8",
  },
];
