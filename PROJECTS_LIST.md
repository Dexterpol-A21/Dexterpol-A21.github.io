# Proyectos para el Portafolio — Paul Eduardo

> Decidido: productos propios primero, clientes después, agencia al final.
> Los 3 clientes de NoProb van como tarjetas individuales.

---

## PRODUCTOS PROPIOS (NoProb Labs)

### 1. GoodScribe
- **Tipo**: Producto propio — AI Copilot
- **Rol**: Fullstack — AI, Extension, Backend
- **Link**: https://goodscribe-astro.web.app/
- **Repo**: (pendiente)
- **Descripción**: Copiloto inteligente con IA para intérpretes simultáneos. Transcripción en tiempo real vía Deepgram Nova-3, traducción con Azure AI Translator (100+ idiomas), gestor de glosarios. Proxy inverso con Firebase Cloud Functions + Cloudflare Workers para no exponer API keys. AudioWorklets para latencia ultra-baja.
- **Tech**: Astro, React, Deepgram Nova-3, Azure AI Translator, Firebase Auth, Firestore, Cloudflare Workers, AudioWorklets, WebSockets
- **Imagen**: /projects/goodScribe/goodScribeLogoLight.png

### 2. GoodPins
- **Tipo**: Producto propio — Chrome Extension
- **Rol**: Fullstack — Extension, Vanilla JS
- **Link**: https://chromewebstore.google.com/detail/boioajnagmchhekefbalflmodfmalopm
- **Repo**: https://github.com/Dexterpol-A21/goodPins
- **Descripción**: Extensión de Chrome para organizar marcadores. Drag & drop recursivo sin librerías, carpetas jerárquicas ilimitadas, 6 temas con CSS variables, pinning, export/import JSON. Algoritmo anti-referencias circulares.
- **Tech**: Vanilla JS, Chrome Storage API, Manifest V3 Service Worker, CSS Variables
- **Imagen**: /projects/img/goodPinsLogoLight.png

### 3. GoodBoard
- **Tipo**: Producto propio — Chrome Extension
- **Rol**: Fullstack — Extension, DOM Scraping
- **Link**: https://chromewebstore.google.com/detail/goodboard/lgpcjpbmmlhffneoobfaheejlajfbpjn
- **Repo**: https://github.com/Dexterpol-A21/goodBoard
- **Descripción**: Overhaul de Blackboard para UVM. Dashboard moderno con Kanban, Gantt y analíticas. Shadow DOM para aislar Tailwind del CSS heredado. Motor de scraping con MutationObservers y orquestación de content scripts vía background worker.
- **Tech**: React, Vite, Tailwind CSS, Shadow DOM, MutationObserver, Chrome Storage API, Recharts
- **Imagen**: /projects/goodBoard/goodBoardLogoLight.png

### 4. GoodNotes
- **Tipo**: Producto propio — Chrome Extension
- **Rol**: Fullstack — Extension, Automatización
- **Link**: https://chromewebstore.google.com/detail/good-notes/hbjfmkgamdlelmjpbioehpcpkihjnach
- **Descripción**: Extensión de Chrome para automatizar flujos de trabajo de call center. Web scraping para recuperación de datos NPI, manipulación del DOM para limpieza de texto (atajo Alt+C), almacenamiento local para seguimiento de llamadas y horarios. Redujo significativamente el esfuerzo manual de agentes.
- **Tech**: JavaScript, Chrome APIs, HTML/CSS, Web Scraping
- **Imagen**: /img/goodNotes.png

---

## CLIENTES (NoProb Systems)

### 5. Restaurante Gabis
- **Tipo**: Cliente — Sitio Web
- **Rol**: Fullstack — Diseño, Desarrollo
- **Link**: https://gabis.com.mx
- **Descripción**: Sitio web responsivo multi-sección con menú digital y PDFs de platillos. Navegación fluida, diseño adaptado a la identidad del restaurante. HTML5, CSS3 (Flexbox/Grid) y JavaScript vanilla.
- **Tech**: HTML5, CSS3, JavaScript, Responsive Design
- **Imagen**: /img/gabis.png

### 6. Doctor en Casa
- **Tipo**: Cliente — Landing Page Médica
- **Rol**: Fullstack — Desarrollo SPA
- **Link**: https://www.doctorencasa.org
- **Descripción**: Landing page SPA para servicios médicos a domicilio. UI limpia con integración directa de WhatsApp vía JavaScript. Diseño mobile-first, presentación clara de servicios y acceso inmediato a comunicación.
- **Tech**: HTML5, CSS3, JavaScript, Responsive Design
- **Imagen**: /img/doctorEnCasa.png

### 7. Barbería 99
- **Tipo**: Cliente — Web App + Sistema
- **Rol**: Fullstack — Desarrollo + Sistema de Reservas
- **Link**: https://barberia99.com
- **Descripción**: Rediseño completo de imagen + software con sistema de reserva de citas y programa de fidelidad de clientes con puntos (Club 99). Barbería en Coacalco–Ecatepec. Creado por NoProb Systems.
- **Tech**: (confirmar stack en producción)
- **Imagen**: (pendiente)

---

## CLIENTES (Independientes)

### 8. TotalLCard
- **Tipo**: Cliente — Landing Page Corporativa
- **Rol**: Fullstack — Diseño, Desarrollo, Deploy
- **Link**: https://totallcard.pages.dev
- **Descripción**: Página web para empresa de impresión de gafetes y credenciales PVC en Querétaro. Catálogo de productos, metodología, portafolio, sectores, FAQ y cotización vía WhatsApp. Desplegado en Cloudflare Pages.
- **Tech**: Cloudflare Pages, HTML/CSS/JS
- **Cliente**: TOTALLCARD (Querétaro, Qro.)

### 9. Utrilla Contract
- **Tipo**: Cliente — Sitio Web Multilingüe
- **Rol**: Fullstack — Desarrollo, i18n, Deploy
- **Link**: https://astronautical-ascension.utrillaprojects.workers.dev/es/
- **Descripción**: Sitio bilingüe (ES/EN) para fabricante español de mobiliario contract para hoteles. Soluciones, 200+ proyectos, formulario con subida de planos, FAQ. Cloudflare Workers.
- **Tech**: Cloudflare Workers, ES/EN i18n, HTML/CSS/JS
- **Cliente**: Utrilla Contract (Toledo, España)

### 10. Aurelia Concierge
- **Tipo**: Cliente — Landing Concierge
- **Rol**: Fullstack — Diseño, Desarrollo, Deploy
- **Link**: https://macau-sauna.pages.dev
- **Descripción**: Concierge VIP para spa y saunas en Macao: catálogo de venues, shuttle privado, precios insider, ranking y flujo de reserva. Desplegado en Cloudflare Pages.
- **Tech**: Cloudflare Pages, Astro/React (confirmar)
- **Cliente**: Aurelia Concierge (Macao)

### 11. 1decien
- **Tipo**: Cliente — E-commerce / Landing
- **Rol**: Fullstack — Diseño, Desarrollo, Deploy
- **Link**: https://1decien-astro.pages.dev
- **Descripción**: Marca de suplementos de rendimiento masculino. Landing Astro con paquetes, terapia guiada de 6 semanas, FAQ y checkout discreto. Antes en el portafolio antiguo (Astro + React + Supabase).
- **Tech**: Astro, React, Supabase, Cloudflare Pages
- **Cliente**: 1decien

### 12. Unicornio Azul
- **Tipo**: Cliente — Sitio Corporativo
- **Rol**: Fullstack — Diseño, Desarrollo, Deploy
- **Link**: https://unicornioazul.es
- **Descripción**: Sitio para consultora de negocio, producto, compras internacionales y marketing digital. Framework SORIE™, casos de éxito, ciclo 360º de idea a mercado. Cloudflare Pages.
- **Tech**: Cloudflare Pages, Astro/React (confirmar)
- **Cliente**: Unicornio Azul

### 13. Vyroba Wood
- **Tipo**: Cliente — Sitio Industrial / B2B
- **Rol**: Fullstack — Diseño, Desarrollo, Deploy
- **Link**: https://vyroba-wood-web.pages.dev
- **Descripción**: Sitio corporativo para manufactura de mobiliario a escala industrial (cocinas, clósets, puertas). Capacidad de planta, ingeniería BIM/CAD, FAQ operativo y cotización B2B. Cloudflare Pages.
- **Tech**: Cloudflare Pages, Astro/React (confirmar)
- **Cliente**: Vyroba Wood (Edo. Méx.)

---

## AGENCIA

### 14. NoProb Systems
- **Tipo**: Agencia Propia
- **Rol**: Founder & Lead Developer
- **Link**: https://noprobsystems.com
- **Descripción**: Sitio de la agencia. Servicios (web, e-commerce, software a medida, chatbots, automatización, hardware), metodología, productos internos, testimonios y FAQ. Muestra los 3 proyectos de cliente listados arriba.
- **Tech**: Astro, React, Tailwind CSS
- **Repo**: (pendiente)

---

## ORDEN FINAL EN EL PORTAFOLIO

```
1. GoodScribe          ← producto estrella, más complejo
2. GoodPins            ← extensión Chrome, bien pulida
3. GoodBoard           ← extensión Chrome, caso técnico interesante
4. GoodNotes           ← extensión Chrome, productividad call center
5. Restaurante Gabis   ← cliente NoProb
6. Doctor en Casa      ← cliente NoProb
7. Barbería 99         ← cliente NoProb
8. TotalLCard          ← cliente independiente
9. Utrilla Contract    ← cliente independiente
10. Aurelia Concierge  ← cliente independiente
11. 1decien            ← cliente independiente
12. Unicornio Azul     ← cliente independiente
13. Vyroba Wood        ← cliente independiente
14. NoProb Systems     ← agencia (cierra el portafolio)
```

---

## TAGS / FILTROS

| Tag | Proyectos |
|---|---|
| **Producto Propio** | GoodScribe, GoodPins, GoodBoard, GoodNotes |
| **Cliente** | Gabis, Doctor en Casa, Barbería 99, TotalLCard, Utrilla Contract, Aurelia Concierge, 1decien, Unicornio Azul, Vyroba Wood |
| **Chrome Extension** | GoodPins, GoodBoard, GoodNotes |
| **IA / AI** | GoodScribe |
| **Landing Page** | TotalLCard, Utrilla Contract, Doctor en Casa, Aurelia Concierge, 1decien |
| **E-commerce** | 1decien |
| **B2B / Industrial** | Vyroba Wood, Utrilla Contract |
| **Fullstack** | GoodScribe, GoodBoard, NoProb Systems |
| **Cloudflare** | TotalLCard, Utrilla Contract, GoodScribe, Aurelia Concierge, 1decien, Unicornio Azul, Vyroba Wood |
| **i18n** | Utrilla Contract |
| **Web Scraping** | GoodBoard, GoodNotes |

---

## PENDIENTES

- [ ] Confirmar tech de Barbería 99
- [ ] Imagen de Barbería 99
- [ ] Link de GitHub de GoodScribe
- [ ] Link de GitHub de NoProb Systems
- [ ] Confirmar stack exacto de Aurelia Concierge y Unicornio Azul
- [ ] Screenshots para Archivo/Muro (Aurelia, 1decien, Unicornio Azul, etc.)
- [ ] ¿Incluimos Helleskin? Estaba en el portafolio antiguo (sitio web laboratorio clínico)
