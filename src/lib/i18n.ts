export type Locale = "es" | "en";

export const LOCALE_STORAGE_KEY = "site-locale";
export const LOCALE_EVENT = "localechange";

export const ui = {
  es: {
    nav: {
      home: "Inicio",
      about: "Sobre mi",
      work: "Proyectos",
      contact: "Contacto",
      lang: "Idioma",
      switchTo: "Cambiar a ingles",
    },
    hero: {
      hello: "Hola, soy",
      subtitle: "Aspirante a Ing. en Sistemas",
      subtitleDivider: "|",
      subtitleTail: "Construyo productos y soluciones",
      location: "Estado de Mexico, Mexico",
      cta: "Contactar",
      cv: "Descargar CV",
    },
    sections: {
      archive: "Archivo",
      swipe: "Desliza →",
      wall: "Muro",
      about: "Sobre mi",
      experience: "Experiencia",
      experienceLead: "Cuatro roles. El de software primero.",
      certifications: "Certificaciones",
      extensions: "Extensiones",
      extensionsLead: "Productos propios en Chrome — fuera del archivo de sitios.",
      contactLead: "Construyamos algo",
      contactLeadMuted: "competente.",
    },
    about: {
      location: "Estado de Mexico",
      educationLabel: "Formacion",
      education: "Ingenieria en Sistemas",
      educationMeta: "UVM · Dic 2027",
      languagesLabel: "Idiomas",
      native: "nativo",
      openTo: "Abierto a roles full-time de Software / Product Engineer · Remoto o hibrido · ES & EN",
      skillsLabel: "Habilidades",
      quote:
        "“No existen problemas complejos, solo sistemas esperando la arquitectura correcta.”",
      p1: "Comence a trabajar en el 2022 en operaciones y atencion al cliente, primero en Telvista y luego manejando expedientes medicos y como interprete bilingue. Toda esa etapa me sirvio muchisimo para dos cosas clave: llevar mi ingles a un nivel cien por ciento profesional y aprender a manejar clientes, procesos estrictos y alta presion. A la par, en 2023 entre a Ingenieria en Sistemas en la UVM, donde estoy proyectado para graduarme en 2027.",
      p2: "Sin embargo, mi enfoque principal ahora mismo es mi carrera. Desde abril de 2025 arranque como freelancer independiente asi como en Fiverr y con mi propia agencia, NoProb. Ahi me he dedicado a construir sitios y sistemas para clientes reales; me encargo de todo, desde entender el brief del cliente hasta hacer el deploy final a produccion. Precisamente esa experiencia de construir y lanzar proyectos reales es lo que me trae aqui, ya que busco consolidarme y seguir creciendo en un rol fijo como Software o Product Engineer.",
    },
    experience: {
      e1Title: "Freelance",
      e1Role: "Web & Software Engineer",
      e1Dates: "Abr 2025 – hoy",
      e1Lead:
        "Arquitectura, desarrollo y despliegue de soluciones end-to-end. Transformo logica de negocio en productos digitales escalables y listos para produccion.",
      e1b1:
        "— Desarrollo Fullstack & Micro-SaaS: aplicaciones a medida desde la base de datos (Supabase/SQL) hasta la interfaz final de usuario.",
      e1b2:
        "— Plataformas B2B y landings de alto rendimiento: sitios optimizados para performance y SEO tecnico (Astro/Next.js), enfocados en conversion (CRO) y automatizacion de leads.",
      e1b3:
        "— Orquestacion de infraestructura: ownership del ciclo de vida del proyecto — despliegues en Cloudflare, DNS y flujos de integracion continua.",
      e1b4:
        "— AI-Augmented Development: flujos acelerados con herramientas de IA para entregar codigo y resolver arquitecturas complejas mas rapido.",
      e2Title: "Interprete bilingue (OPI)",
      e2Role: "Human Quality · Language Line Solutions",
      e2Dates: "Jul 2025 – hoy",
      e2b1: "— 30+ llamadas/dia · 12+ sectores",
      e2b2: "— Emergencias, crisis y CPS con compostura",
      e2b3: "— Confidencialidad y manejo de PII",
      e2b4: "— Manejo de terminologia medica, legal y financiera",
      e3Title: "Record Retrieval Agent",
      e3Role: "BISCC · Virtix Health",
      e3Dates: "Ene – jun 2025",
      e3b1: "— 85+ llamadas/dia · HIPAA · SLAs con clinicas",
      e3b2: "— −20% errores · +15% first-call resolution",
      e3b3: "— Extension propia: +25–50% eficiencia en data entry",
      e4Title: "Customer Service & Sales",
      e4Role: "Telvista · ABG Group (Avis Budget)",
      e4Dates: "Oct 2022 – Oct 2024",
      e4b1: "— 60+ inbound/dia · 95% CSAT",
      e4b2: "— Reservas, cuentas, CRM, upselling",
      e4b3: "— Metas de ventas mensuales superadas",
    },
    meta: {
      title: "Paul Eduardo | Desarrollador de Software",
      description:
        "Paul Eduardo — Ing. Sistemas y Desarrollador Fullstack.",
    },
  },
  en: {
    nav: {
      home: "Home",
      about: "About",
      work: "Work",
      contact: "Contact",
      lang: "Language",
      switchTo: "Switch to Spanish",
    },
    hero: {
      hello: "Hello, I'm",
      subtitle: "Aspiring Computer Systems Engineer",
      subtitleDivider: "|",
      subtitleTail: "Building Products & Solutions",
      location: "State of Mexico, Mexico",
      cta: "Get In Touch",
      cv: "Download CV",
    },
    sections: {
      archive: "Archive",
      swipe: "Swipe →",
      wall: "Wall",
      about: "About",
      experience: "Experience",
      experienceLead: "Four roles. Software first.",
      certifications: "Certifications",
      extensions: "Extensions",
      extensionsLead: "Own Chrome products — outside the site archive.",
      contactLead: "Let's build something",
      contactLeadMuted: "solid.",
    },
    about: {
      location: "State of Mexico",
      educationLabel: "Education",
      education: "Computer Systems Engineering",
      educationMeta: "UVM · Dec 2027",
      languagesLabel: "Languages",
      native: "native",
      openTo: "Open to full-time Software / Product Engineer roles · Remote or hybrid · ES & EN",
      skillsLabel: "Skills",
      quote:
        "“There are no complex problems — only systems waiting for the right architecture.”",
      p1: "I started working in 2022 in operations and customer service — first at Telvista, then handling medical records and as a bilingual interpreter. That whole stage helped me with two key things: taking my English to a fully professional level, and learning to handle clients, strict processes, and high pressure. In parallel, in 2023 I began Computer Systems Engineering at UVM, where I'm on track to graduate in 2027.",
      p2: "My main focus right now, though, is my career. Since April 2025 I've been freelancing independently — on Fiverr and with my own agency, NoProb. I've been building sites and systems for real clients — owning everything from understanding the brief to shipping the final deploy. That experience building and launching real projects is exactly what brings me here: I want to settle in and keep growing in a full-time Software or Product Engineer role.",
    },
    experience: {
      e1Title: "Freelance",
      e1Role: "Web & Software Engineer",
      e1Dates: "Apr 2025 – present",
      e1Lead:
        "End-to-end architecture, development, and deployment. I turn business logic into scalable digital products ready for production.",
      e1b1:
        "— Fullstack & Micro-SaaS: custom apps from the database (Supabase/SQL) through to the final user interface.",
      e1b2:
        "— B2B platforms and high-performance landings: sites optimized for performance and technical SEO (Astro/Next.js), focused on conversion (CRO) and lead automation.",
      e1b3:
        "— Infrastructure orchestration: ownership of the project lifecycle — Cloudflare deploys, DNS, and continuous integration flows.",
      e1b4:
        "— AI-Augmented Development: accelerated workflows with AI tools to ship code and solve complex architectures faster.",
      e2Title: "Bilingual Interpreter (OPI)",
      e2Role: "Human Quality · Language Line Solutions",
      e2Dates: "Jul 2025 – present",
      e2b1: "— 30+ calls/day · 12+ sectors",
      e2b2: "— Emergencies, crisis, and CPS with composure",
      e2b3: "— Confidentiality and PII handling",
      e2b4: "— Handling of medical, legal, and financial terminology",
      e3Title: "Record Retrieval Agent",
      e3Role: "BISCC · Virtix Health",
      e3Dates: "Jan – Jun 2025",
      e3b1: "— 85+ calls/day · HIPAA · clinic SLAs",
      e3b2: "— −20% errors · +15% first-call resolution",
      e3b3: "— Custom extension: +25–50% data-entry efficiency",
      e4Title: "Customer Service & Sales",
      e4Role: "Telvista · ABG Group (Avis Budget)",
      e4Dates: "Oct 2022 – Oct 2024",
      e4b1: "— 60+ inbound/day · 95% CSAT",
      e4b2: "— Bookings, accounts, CRM, upselling",
      e4b3: "— Monthly sales targets exceeded",
    },
    meta: {
      title: "Paul Eduardo | Software Developer",
      description:
        "Paul Eduardo — Systems Engineer and Fullstack Developer.",
    },
  },
} as const;

export type UiDict = (typeof ui)[Locale];

export function isLocale(value: unknown): value is Locale {
  return value === "es" || value === "en";
}

function detectBrowserLocale(): Locale {
  if (typeof navigator === "undefined") return "es";
  const lang = (navigator.language || "").toLowerCase();
  return lang.startsWith("en") ? "en" : "es";
}

export function getStoredLocale(): Locale {
  if (typeof window === "undefined") return "es";
  try {
    const stored = localStorage.getItem(LOCALE_STORAGE_KEY);
    if (isLocale(stored)) return stored;
  } catch {
    /* ignore */
  }
  return detectBrowserLocale();
}

export function setStoredLocale(locale: Locale) {
  try {
    localStorage.setItem(LOCALE_STORAGE_KEY, locale);
  } catch {
    /* ignore */
  }
  if (typeof document !== "undefined") {
    document.documentElement.lang = locale;
    document.dispatchEvent(
      new CustomEvent(LOCALE_EVENT, { detail: { locale } }),
    );
  }
}

export function t(locale: Locale): UiDict {
  return ui[locale];
}

/** Resolve dotted key like "hero.cta" against the UI dictionary. */
export function resolveKey(locale: Locale, key: string): string | undefined {
  const parts = key.split(".");
  let cur: unknown = ui[locale];
  for (const part of parts) {
    if (cur == null || typeof cur !== "object") return undefined;
    cur = (cur as Record<string, unknown>)[part];
  }
  return typeof cur === "string" ? cur : undefined;
}
