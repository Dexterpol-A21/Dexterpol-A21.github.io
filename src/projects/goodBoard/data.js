export const goodBoardFeatures = {
    id: "features",
    title: { en: "Key Features", es: "Características Clave" },
    background: "gray",
    items: [
        {
            size: "large",
            icon: "fas fa-tachometer-alt",
            title: { en: "Modern Dashboard", es: "Dashboard Moderno" },
            description: { 
                en: "A clean, user-friendly interface built with React and Tailwind CSS that provides a quick overview of your academic status.", 
                es: "Una interfaz limpia y amigable construida con React y Tailwind CSS que proporciona una visión rápida de tu estado académico." 
            }
        },
        {
            size: "medium",
            icon: "fas fa-chart-bar",
            title: { en: "Data Visualization", es: "Visualización de Datos" },
            description: { 
                en: "Interactive charts powered by Recharts to visualize academic performance and grade distribution.", 
                es: "Gráficos interactivos impulsados por Recharts para visualizar el rendimiento académico y la distribución de calificaciones." 
            }
        },
        {
            size: "medium",
            icon: "fas fa-columns",
            title: { en: "Kanban Board", es: "Tablero Kanban" },
            description: { 
                en: "Drag-and-drop task management with customizable columns to track assignment progress.", 
                es: "Gestión de tareas de arrastrar y soltar con columnas personalizables para rastrear el progreso de las tareas." 
            }
        },
        {
            size: "wide",
            icon: "fas fa-code",
            title: { en: "Smart Scraping", es: "Scraping Inteligente" },
            description: { 
                en: "Intelligent DOM parsing algorithms extract course data, grades, and deadlines in real-time without requiring official API access.", 
                es: "Algoritmos inteligentes de análisis del DOM extraen datos del curso, calificaciones y fechas límite en tiempo real sin requerir acceso oficial a la API." 
            }
        },
        {
            size: "medium",
            icon: "fas fa-calendar-alt",
            title: { en: "Gantt Chart", es: "Diagrama de Gantt" },
            description: { 
                en: "Timeline view for assignments to help students plan their semester effectively.", 
                es: "Vista de línea de tiempo para tareas que ayuda a los estudiantes a planificar su semestre de manera efectiva." 
            }
        }
    ]
};

export const goodBoardArchitecture = {
    title: { en: "Technical Architecture", es: "Arquitectura Técnica" },
    layers: [
        {
            title: { en: "Frontend Core", es: "Núcleo Frontend" },
            icon: "fas fa-layer-group",
            description: { 
                en: "A modern React application injected directly into the legacy page.", 
                es: "Una aplicación moderna de React inyectada directamente en la página heredada." 
            },
            features: [
                { en: "React & Vite: Component-based UI with HMR", es: "React & Vite: UI basada en componentes con HMR" },
                { en: "Tailwind CSS: Scoped utility styling", es: "Tailwind CSS: Estilos de utilidad con alcance" },
                { en: "Shadow DOM: Style isolation", es: "Shadow DOM: Aislamiento de estilos" }
            ]
        },
        {
            title: { en: "Data Layer", es: "Capa de Datos" },
            icon: "fas fa-database",
            description: { 
                en: "Sophisticated scraping and local persistence layer.", 
                es: "Capa sofisticada de scraping y persistencia local." 
            },
            features: [
                { en: "DOM Scraping: Real-time data extraction", es: "DOM Scraping: Extracción de datos en tiempo real" },
                { en: "Chrome Storage: State persistence", es: "Chrome Storage: Persistencia de estado" },
                { en: "MutationObserver: DOM change detection", es: "MutationObserver: Detección de cambios en DOM" }
            ]
        },
        {
            title: { en: "Integration", es: "Integración" },
            icon: "fas fa-plug",
            description: { 
                en: "Seamless integration with the browser environment.", 
                es: "Integración perfecta con el entorno del navegador." 
            },
            features: [
                { en: "Content Scripts: Page injection", es: "Content Scripts: Inyección en página" },
                { en: "Service Workers: Background tasks", es: "Service Workers: Tareas en segundo plano" },
                { en: "Chrome API: Browser capabilities", es: "Chrome API: Capacidades del navegador" }
            ]
        }
    ]
};

export const goodBoardEngineering = {
    title: { en: "Engineering Challenges", es: "Desafíos de Ingeniería" },
    challenges: [
        {
            title: { en: "Legacy DOM Parsing", es: "Análisis de DOM Heredado" },
            icon: "fas fa-code",
            problem: { 
                en: "Blackboard's structure relies on nested frames and outdated HTML tables, making data extraction unreliable and prone to breakage.", 
                es: "La estructura de Blackboard depende de frames anidados y tablas HTML obsoletas, haciendo que la extracción de datos sea poco confiable y propensa a errores." 
            },
            solution: { 
                en: "Developed a robust scraping engine with fallback selectors and MutationObservers to detect dynamic content loading and structure changes in real-time.", 
                es: "Desarrollé un motor de scraping robusto con selectores de respaldo y MutationObservers para detectar la carga de contenido dinámico y cambios de estructura en tiempo real." 
            }
        },
        {
            title: { en: "Style Isolation", es: "Aislamiento de Estilos" },
            icon: "fas fa-shield-alt",
            problem: { 
                en: "Injecting a modern UI into a legacy site often results in CSS conflicts, where the host site's global styles break the extension's layout.", 
                es: "Inyectar una UI moderna en un sitio heredado a menudo resulta en conflictos de CSS, donde los estilos globales del sitio anfitrión rompen el diseño de la extensión." 
            },
            solution: { 
                en: "Implemented Shadow DOM encapsulation to create a boundary between the extension's Tailwind styles and Blackboard's global CSS.", 
                es: "Implementé encapsulamiento con Shadow DOM para crear un límite entre los estilos Tailwind de la extensión y el CSS global de Blackboard." 
            }
        },
        {
            title: { en: "Iframe Orchestration", es: "Orquestación de Iframes" },
            icon: "fas fa-network-wired",
            problem: { 
                en: "Blackboard loads content in dynamic cross-origin iframes, making it impossible to scrape data from a single content script.", 
                es: "Blackboard carga contenido en iframes dinámicos de origen cruzado, haciendo imposible extraer datos desde un solo script de contenido." 
            },
            solution: { 
                en: "Orchestrated a mesh of content scripts that communicate via the background worker to stitch together the full course data.", 
                es: "Orquesté una red de scripts de contenido que se comunican a través del worker en segundo plano para unir los datos completos del curso." 
            }
        }
    ],
    pipeline: {
        title: { en: "Extraction Pipeline", es: "Flujo de Extracción" },
        badge: "DOM-based",
        steps: [
            {
                title: { en: "Observer", es: "Observador" },
                description: { en: "Monitors frames & DOM", es: "Monitorea frames y DOM" },
                icon: "fas fa-eye"
            },
            {
                title: { en: "Parser", es: "Analizador" },
                description: { en: "Extracts & normalizes", es: "Extrae y normaliza" },
                icon: "fas fa-filter"
            },
            {
                title: { en: "Storage", es: "Almacenamiento" },
                description: { en: "Persists to Chrome", es: "Persiste en Chrome" },
                icon: "fas fa-database"
            }
        ],
        footer: {
            tag: { en: "Architecture", es: "Arquitectura" },
            text: { 
                en: "The Scraping Engine acts as the central nervous system, mediating all interactions between the legacy DOM and the local database. This decoupling allows for instant UI updates while ensuring data integrity even when the source site changes.", 
                es: "El Motor de Scraping actúa como el sistema nervioso central, mediando todas las interacciones entre el DOM heredado y la base de datos local. Este desacoplamiento permite actualizaciones instantáneas de la UI mientras asegura la integridad de los datos incluso cuando el sitio fuente cambia." 
            }
        }
    }
};

export const goodBoardRoadmap = {
    title: { en: "Future Roadmap", es: "Hoja de Ruta Futura" },
    items: [
        {
            title: { en: "Calendar Sync", es: "Sincronización de Calendario" },
            description: { 
                en: "Two-way synchronization with Google Calendar for assignment deadlines.", 
                es: "Sincronización bidireccional con Google Calendar para fechas límite de tareas." 
            },
            status: { en: "Planned", es: "Planificado" }
        },
        {
            title: { en: "Grade Predictor", es: "Predictor de Calificaciones" },
            description: { 
                en: "Calculate required scores on future assignments to achieve target final grades.", 
                es: "Calcula los puntajes requeridos en tareas futuras para lograr las calificaciones finales deseadas." 
            },
            status: { en: "In Progress", es: "En Progreso" }
        },
        {
            title: { en: "Smart Notifications", es: "Notificaciones Inteligentes" },
            description: { 
                en: "Browser alerts for upcoming deadlines and new grades so you never miss an update.", 
                es: "Alertas del navegador para próximas fechas límite y nuevas calificaciones para que nunca te pierdas una actualización." 
            },
            status: { en: "Planned", es: "Planificado" }
        }
    ]
};

export const goodBoardInstallation = {
    title: { en: "Access & Installation", es: "Acceso e Instalación" },
    options: [
        {
            title: { en: "Extension", es: "Extensión" },
            description: { 
                en: "Install the official extension from the Chrome Web Store for seamless integration.", 
                es: "Instala la extensión oficial desde la Chrome Web Store para una integración perfecta." 
            },
            icon: "../svg/chromewebstore.svg",
            isImage: true,
            button: {
                text: { en: "Coming Soon", es: "Próximamente" },
                icon: "fas fa-download",
                link: "#",
                disabled: true
            }
        },
        {
            title: { en: "Source Code", es: "Código Fuente" },
            description: { 
                en: "Explore the source code, contribute, or build it yourself from the repository.", 
                es: "Explora el código fuente, contribuye o compílalo tú mismo desde el repositorio. " 
            },
            icon: "fab fa-github",
            isImage: false,
            button: {
                text: { en: "View on GitHub", es: "Ver en GitHub" },
                icon: "fab fa-github",
                link: "https://github.com/Dexterpol-A21/goodBoard",
                variant: "secondary"
            }
        }
    ],
    nextProject: {
        text: { en: "Check Next Project", es: "Revisar Siguiente Proyecto" },
        link: "goodscribe.html"
    }
};
export const goodBoardOverview = {
    title: { en: "Features Overview", es: "Descripción de Características" },
    items: [
        {
            title: { en: "Modern Dashboard", es: "Dashboard Moderno" },
            description: { 
                en: "A complete overhaul of the Blackboard interface. GoodBoard provides a clean, intuitive, and responsive dashboard that aggregates all your important academic information in one place.", 
                es: "Una renovación completa de la interfaz de Blackboard. GoodBoard proporciona un dashboard limpio, intuitivo y responsivo que agrega toda tu información académica importante en un solo lugar." 
            },
            icon: "fas fa-columns",
            imageSrc: "/projects/goodBoard/start.png",
            imageAlt: "GoodBoard - Dashboard"
        },
        {
            title: { en: "Kanban Task Management", es: "Gestión de Tareas Kanban" },
            description: { 
                en: "Organize your assignments with a drag-and-drop Kanban board. Visualize your workflow with 'To Do', 'In Progress', and 'Done' columns to never miss a deadline.", 
                es: "Organiza tus tareas con un tablero Kanban de arrastrar y soltar. Visualiza tu flujo de trabajo con columnas de 'Por hacer', 'En progreso' y 'Terminado' para no perder nunca una fecha límite." 
            },
            icon: "fas fa-tasks",
            imageSrc: "/projects/goodBoard/kanban.png",
            imageAlt: "GoodBoard - Kanban"
        },
        {
            title: { en: "Gantt Timeline", es: "Cronograma Gantt" },
            description: { 
                en: "Plan your semester effectively with a Gantt chart view. See all your upcoming assignments and exams on a timeline to manage your time better.", 
                es: "Planifica tu semestre eficazmente con una vista de diagrama de Gantt. Ve todas tus próximas tareas y exámenes en una línea de tiempo para gestionar mejor tu tiempo." 
            },
            icon: "fas fa-stream",
            imageSrc: "/projects/goodBoard/Gantt.png",
            imageAlt: "GoodBoard - Gantt"
        },
        {
            title: { en: "Academic Analytics", es: "Analíticas Académicas" },
            description: { 
                en: "Track your performance with interactive charts. Visualize your grade distribution and progress across all courses.", 
                es: "Sigue tu rendimiento con gráficos interactivos. Visualiza la distribución de tus calificaciones y el progreso en todos los cursos." 
            },
            icon: "fas fa-chart-pie",
            imageSrc: "/projects/goodBoard/kpis.png",
            imageAlt: "GoodBoard - Analytics"
        }
    ]
};
