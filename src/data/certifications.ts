export type CertSectionId = "networking" | "azure" | "security" | "other";

export type Certification = {
  title: string;
  issuer: string;
  date: string;
  href: string;
  image: string;
  section: CertSectionId;
};

/** Orden pedagogico / de ruta — no solo fecha */
export const certSections: { id: CertSectionId; label: string; lead: string }[] = [
  {
    id: "networking",
    label: "Redes · Cisco CCNA",
    lead: "Ruta CCNA: Introduction to Networks → Switching/Routing/Wireless → Enterprise.",
  },
  {
    id: "azure",
    label: "Cloud · Microsoft Azure",
    lead: "Fundamentos Azure → infraestructura segura → proteccion de plataforma.",
  },
  {
    id: "security",
    label: "Ciberseguridad",
    lead: "Operaciones de seguridad (CyberOps) y awareness de datos.",
  },
  {
    id: "other",
    label: "Idioma y formacion",
    lead: "Ingles C2 (EF SET) y curso academico UVM.",
  },
];

export const certifications: Certification[] = [
  // --- Redes CCNA (ruta) ---
  {
    title: "CCNA: Introduction to Networks",
    issuer: "Cisco",
    date: "Jul 2025",
    href: "https://www.credly.com/badges/89ccd0b5-aa47-43ba-97cd-076072914515/linked_in_profile",
    image: "/img/certs/ccna-intro.jpg",
    section: "networking",
  },
  {
    title: "CCNA: Switching, Routing, and Wireless Essentials",
    issuer: "Cisco",
    date: "Ene 2026",
    href: "https://www.credly.com/badges/538805c9-3cd7-4603-824c-a4bbbf1b60df/linked_in_profile",
    image: "/img/certs/ccna-srwe.jpg",
    section: "networking",
  },
  {
    title: "CCNA: Enterprise Networking, Security, and Automation",
    issuer: "Cisco",
    date: "Jul 2026",
    href: "https://www.credly.com/badges/16554111-c55b-44cc-b4b4-b9d4a4f87fe4/linked_in_profile",
    image: "/img/certs/ccna-enterprise.jpg",
    section: "networking",
  },
  // --- Azure (ruta) ---
  {
    title: "Introduction to Microsoft Azure Cloud Services",
    issuer: "Microsoft · Coursera",
    date: "Mar 2026",
    href: "https://www.coursera.org/account/accomplishments/verify/7L9N9XR7NCVZ",
    image: "/img/certs/azure-intro.jpg",
    section: "azure",
  },
  {
    title: "Secure & Scalable Cloud Infrastructure with Microsoft Azure",
    issuer: "Microsoft · Coursera",
    date: "Feb 2026",
    href: "https://www.coursera.org/account/accomplishments/verify/8AUWAWNUI6VH",
    image: "/img/certs/azure-secure-scalable.jpg",
    section: "azure",
  },
  {
    title: "Implement Platform Protection",
    issuer: "Microsoft · Coursera",
    date: "Abr 2026",
    href: "https://www.coursera.org/account/accomplishments/verify/6PXV36U6GU3V",
    image: "/img/certs/azure-platform-protection.jpg",
    section: "azure",
  },
  // --- Security ---
  {
    title: "CyberOps Associate",
    issuer: "Cisco",
    date: "Jul 2026",
    href: "https://www.credly.com/badges/dfa0a5bc-e71e-48ba-b80a-f2c92ef59439/linked_in_profile",
    image: "/img/certs/cyberops-associate.jpg",
    section: "security",
  },
  {
    title: "Data & Cybersecurity",
    issuer: "Campus BBVA · Coursera",
    date: "Feb 2026",
    href: "https://www.coursera.org/account/accomplishments/verify/FH9PPXEP75CP",
    image: "/img/certs/data-cybersecurity.jpg",
    section: "security",
  },
  // --- Other ---
  {
    title: "EF SET 75/100 (C2 Proficiente)",
    issuer: "EF SET",
    date: "Abr 2025",
    href: "https://cert.efset.org/es/f3A8pR",
    image: "/img/certs/efset-c2.jpg",
    section: "other",
  },
  {
    title: "Sistemas informaticos",
    issuer: "Universidad del Valle de Mexico",
    date: "Ene 2026",
    href: "https://www.coursera.org/account/accomplishments/verify/W2V6TULHR44G",
    image: "/img/certs/uvm-sistemas.png",
    section: "other",
  },
];
