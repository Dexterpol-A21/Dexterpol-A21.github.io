export const goodPinsFeatures = {
    id: "features",
    title: { en: "Key Features", es: "Características Clave" },
    background: "gray",
    items: [
        {
            size: "large",
            icon: "fas fa-folder-tree",
            title: { en: "Hierarchical Folders", es: "Carpetas Jerárquicas" },
            description: { 
                en: "Create nested folders with unlimited depth to organize bookmarks exactly how you want. Supports custom icons and color coding.", 
                es: "Crea carpetas anidadas con profundidad ilimitada para organizar marcadores exactamente como quieras. Soporta íconos personalizados y códigos de color." 
            }
        },
        {
            size: "tall",
            icon: "fas fa-hand-rock",
            title: { en: "Intuitive Drag & Drop", es: "Arrastrar y Soltar Intuitivo" },
            description: { 
                en: "Effortlessly reorganize bookmarks and folders. The custom controller handles complex nested moves smoothly without external libraries.", 
                es: "Reorganiza marcadores y carpetas sin esfuerzo. El controlador personalizado maneja movimientos anidados complejos suavemente sin librerías externas." 
            }
        },
        {
            size: "medium",
            icon: "fas fa-keyboard",
            title: { en: "Quick Access", es: "Acceso Rápido" },
            description: { 
                en: "Custom shortcuts (Alt+Shift+1-3) for instant access to your most used folders.", 
                es: "Atajos personalizados (Alt+Shift+1-3) para acceso instantáneo a tus carpetas más usadas." 
            }
        },
        {
            size: "medium",
            icon: "fas fa-palette",
            title: { en: "6+ Themes", es: "6+ Temas" },
            description: { 
                en: "Switch between Midnight, Ocean, Forest, and more instantly with CSS variables.", 
                es: "Cambia entre Medianoche, Océano, Bosque y más instantáneamente con variables CSS." 
            }
        },
        {
            size: "medium",
            icon: "fas fa-shield-alt",
            title: { en: "Local First", es: "Local Primero" },
            description: { 
                en: "Your bookmarks stay on your device. We use chrome.storage for sync, no external servers.", 
                es: "Tus marcadores permanecen en tu dispositivo. Usamos chrome.storage para sincronización, sin servidores externos." 
            }
        },
        {
            size: "medium",
            icon: "fas fa-file-code",
            title: { en: "JSON Sharing", es: "Compartir JSON" },
            description: { 
                en: "Export your bookmarks as JSON to share collections with friends or backup your data.", 
                es: "Exporta tus marcadores como JSON para compartir colecciones con amigos o respaldar tus datos." 
            }
        },
        {
            size: "wide",
            icon: "fas fa-shield-alt",
            title: { en: "Local First", es: "Local Primero" },
            description: { 
                en: "Your bookmarks stay on your device. We use chrome.storage for sync, no external servers.", 
                es: "Tus marcadores permanecen en tu dispositivo. Usamos chrome.storage para sincronización, sin servidores externos." 
            }
        }
    ]
};

export const goodPinsOverview = {
    title: { en: "Features Overview", es: "Descripción de Características" },
    items: [
        {
            title: { en: "Folder Organization", es: "Organización en Carpetas" },
            description: { 
                en: "Create and manage nested folders with unlimited depth. Each folder can contain bookmarks and sub-folders, allowing you to organize your links exactly how you want. Folders display the number of items they contain and support custom icons.", 
                es: "Crea y gestiona carpetas anidadas con profundidad ilimitada. Cada carpeta puede contener marcadores y subcarpetas, permitiéndote organizar tus enlaces exactamente como quieras. Las carpetas muestran el número de elementos que contienen y soportan íconos personalizados." 
            },
            icon: "fas fa-folder",
            imageSrc: "img/folder.png",
            imageAlt: "Folder Organization Feature"
        },
        {
            title: { en: "Drag & Drop Interface", es: "Interfaz de Arrastrar y Soltar" },
            description: { 
                en: "Effortlessly reorganize your bookmarks and folders with intuitive drag-and-drop functionality. Simply click and drag any item to reorder it. Pinned items are protected from accidental moves, ensuring your important links stay in place.", 
                es: "Reorganiza sin esfuerzo tus marcadores y carpetas con funcionalidad intuitiva de arrastrar y soltar. Simplemente haz clic y arrastra cualquier elemento para reordenarlo. Los elementos fijados están protegidos contra movimientos accidentales, asegurando que tus enlaces importantes permanezcan en su lugar." 
            },
            icon: "fas fa-hand-rock",
            imageSrc: "img/dragDrop.png",
            imageAlt: "Drag and Drop Feature"
        },
        {
            title: { en: "Keyboard Shortcuts", es: "Atajos de Teclado" },
            description: { 
                en: "Boost your productivity with custom keyboard shortcuts. Assign Alt+Shift+1-3 to your most frequently used bookmarks and folders for instant access. Open GoodPins with Alt+Shift+G. Each shortcut displays a badge on the assigned item for easy identification.", 
                es: "Aumenta tu productividad con atajos de teclado personalizados. Asigna Alt+Shift+1-3 a tus marcadores o carpetas más utilizados para acceso instantáneo. Abre GoodPins con Alt+Shift+G. Cada atajo muestra una insignia en el elemento asignado para fácil identificación." 
            },
            icon: "fas fa-keyboard",
            imageSrc: "img/keyboard.png",
            imageAlt: "Keyboard Shortcuts Feature"
        },
        {
            title: { en: "Visual Color Tagging", es: "Etiquetado Visual de Colores" },
            description: { 
                en: "Organize visually with 8 color-coded tags. Each color represents a category: Priority (Yellow), Work (Orange), Personal (Purple), Education (Pink), Tools (Green), Info (Blue), In Progress (Lime), and Other (Gray). Apply tags to both bookmarks and folders for instant visual recognition.", 
                es: "Organiza visualmente con 8 etiquetas codificadas por colores. Cada color representa una categoría: Prioridad (Amarillo), Trabajo (Naranja), Personal (Morado), Educación (Rosa), Herramientas (Verde), Info (Azul), En Progreso (Lima), y Otro (Gris). Aplica etiquetas tanto a marcadores como a carpetas para reconocimiento visual instantáneo." 
            },
            icon: "fas fa-tags",
            imageSrc: "img/tagcolor.png",
            imageAlt: "Color Tagging Feature"
        },
        {
            title: { en: "Beautiful Themes", es: "Temas Hermosos" },
            description: { 
                en: "Personalize your experience with 6 carefully crafted themes: Midnight (black), Ocean (blue), Forest (green), Sunset (orange), Lavender (purple), and Rose (pink). Each theme uses CSS variables for instant switching without reloading. Customize grid layout (2, 3, or 4 columns) to match your workflow.", 
                es: "Personaliza tu experiencia con 6 temas cuidadosamente elaborados: Medianoche (negro), Océano (azul), Bosque (verde), Atardecer (naranja), Lavanda (morado) y Rosa (rosa). Cada tema usa variables CSS para cambio instantáneo sin recargar. Personaliza el diseño de la cuadrícula (2, 3 o 4 columnas) para que coincida con tu flujo de trabajo." 
            },
            icon: "fas fa-palette",
            imageSrc: "img/themes.png",
            imageAlt: "Multiple Themes Feature"
        },
        {
            title: { en: "Pin Important Items", es: "Fijar Elementos Importantes" },
            description: { 
                en: "Lock your most important bookmarks and folders in place with the pin feature. Pinned items cannot be dragged or reordered accidentally, ensuring they always stay exactly where you need them. Perfect for frequently accessed links that should remain at the top of your grid.", 
                es: "Bloquea tus marcadores y carpetas más importantes en su lugar con la función de fijar. Los elementos fijados no pueden ser arrastrados o reordenados accidentalmente, asegurando que siempre permanezcan exactamente donde los necesitas. Perfecto para enlaces de acceso frecuente que deben permanecer en la parte superior de tu cuadrícula." 
            },
            icon: "fas fa-thumbtack",
            imageSrc: "img/pin.png",
            imageAlt: "Pin Position Feature"
        }
    ]
};

export const goodPinsArchitecture = {
    title: { en: "Technical Architecture", es: "Arquitectura Técnica" },
    layers: [
        {
            title: { en: "Frontend", es: "Frontend" },
            description: { 
                en: "Lightweight, vanilla JavaScript UI with custom component system.", 
                es: "UI ligera de JavaScript puro con sistema de componentes personalizado." 
            },
            icon: "fas fa-layer-group",
            features: [
                { en: "Vanilla JS (No Frameworks)", es: "JS Puro (Sin Frameworks)" },
                { en: "CSS Variables for Theming", es: "Variables CSS para Temas" },
                { en: "Custom Drag & Drop Controller", es: "Controlador de Arrastrar y Soltar Personalizado" }
            ]
        },
        {
            title: { en: "Storage & Sync", es: "Almacenamiento y Sincronización" },
            description: { 
                en: "Robust data persistence using Chrome's Storage API.", 
                es: "Persistencia de datos robusta usando la API de Almacenamiento de Chrome." 
            },
            icon: "fas fa-database",
            features: [
                { en: "chrome.storage.sync", es: "chrome.storage.sync" },
                { en: "JSON Import/Export", es: "Importación/Exportación JSON" },
                { en: "Real-time State Hydration", es: "Hidratación de Estado en Tiempo Real" }
            ]
        },
        {
            title: { en: "Core Logic", es: "Lógica Central" },
            description: { 
                en: "Event-driven architecture powered by Service Workers.", 
                es: "Arquitectura dirigida por eventos impulsada por Service Workers." 
            },
            icon: "fas fa-cogs",
            features: [
                { en: "Manifest V3 Service Worker", es: "Service Worker Manifest V3" },
                { en: "Event Delegation", es: "Delegación de Eventos" },
                { en: "Recursive Algorithms", es: "Algoritmos Recursivos" }
            ]
        }
    ]
};

export const goodPinsEngineering = {
    title: { en: "Engineering Challenges", es: "Desafíos de Ingeniería" },
    challenges: [
        {
            title: { en: "Recursive Drag & Drop", es: "Arrastrar y Soltar Recursivo" },
            icon: "fas fa-project-diagram",
            problem: { 
                en: "Handling drag and drop in a deeply nested tree structure without a library is complex and prone to bugs.", 
                es: "Manejar arrastrar y soltar en una estructura de árbol profundamente anidada sin una librería es complejo y propenso a errores." 
            },
            solution: { 
                en: "Implemented a recursive algorithm to calculate drop targets and prevent circular references (dropping a folder into itself).", 
                es: "Implementé un algoritmo recursivo para calcular objetivos de soltar y prevenir referencias circulares (soltar una carpeta dentro de sí misma)." 
            }
        },
        {
            title: { en: "State Synchronization", es: "Sincronización de Estado" },
            icon: "fas fa-sync-alt",
            problem: { 
                en: "Keeping the Popup UI in sync with chrome.storage changes from other devices or background processes.", 
                es: "Mantener la UI del Popup sincronizada con cambios de chrome.storage desde otros dispositivos o procesos en segundo plano." 
            },
            solution: { 
                en: "Used event listeners on chrome.storage.onChanged to trigger partial UI updates instead of full re-renders.", 
                es: "Usé event listeners en chrome.storage.onChanged para activar actualizaciones parciales de UI en lugar de re-renderizados completos." 
            }
        },
        {
            title: { en: "DOM Performance", es: "Rendimiento del DOM" },
            icon: "fas fa-tachometer-alt",
            problem: { 
                en: "Rendering thousands of bookmarks caused popup lag and high memory usage.", 
                es: "Renderizar miles de marcadores causaba lag en el popup y alto uso de memoria." 
            },
            solution: { 
                en: "Implemented Virtual DOM-like diffing for folder contents and lazy loading for deep subtrees.", 
                es: "Implementé diffing tipo Virtual DOM para contenidos de carpetas y carga perezosa para subárboles profundos." 
            }
        }
    ],
    pipeline: {
        title: { en: "Data Flow Architecture", es: "Arquitectura de Flujo de Datos" },
        badge: "Event-Driven",
        steps: [
            {
                title: { en: "Popup UI", es: "Popup UI" },
                description: { en: "User Interaction", es: "Interacción de Usuario" },
                icon: "fas fa-window-maximize"
            },
            {
                title: { en: "Controller Logic", es: "Lógica del Controlador" },
                description: { en: "State Management", es: "Gestión de Estado" },
                icon: "fas fa-microchip",
                isHighlight: true
            },
            {
                title: { en: "Chrome APIs", es: "APIs de Chrome" },
                description: { en: "Storage & Workers", es: "Almacenamiento y Workers" },
                icon: "fas fa-cogs"
            }
        ],
        footer: {
            tag: { en: "Architecture", es: "Arquitectura" },
            text: { 
                en: "The Controller Logic acts as the central nervous system, mediating all interactions between the user interface and the underlying Chrome APIs. This decoupling allows for instant UI updates while ensuring data integrity in the background.", 
                es: "La Lógica del Controlador actúa como el sistema nervioso central, mediando todas las interacciones entre la interfaz de usuario y las APIs de Chrome subyacentes. Este desacoplamiento permite actualizaciones instantáneas de la UI mientras asegura la integridad de los datos en segundo plano." 
            }
        }
    }
};

export const goodPinsRoadmap = {
    title: { en: "Future Roadmap", es: "Hoja de Ruta Futura" },
    items: [
        {
            title: { en: "Cloud Backup", es: "Respaldo en la Nube" },
            description: { 
                en: "Optional Google Drive sync to backup your bookmarks configuration.", 
                es: "Sincronización opcional con Google Drive para respaldar tu configuración de marcadores." 
            },
            status: { en: "Planned", es: "Planificado" }
        },
        {
            title: { en: "Shareable Folders", es: "Carpetas Compartibles" },
            description: { 
                en: "Generate a link to share a folder of bookmarks with other users.", 
                es: "Generar un enlace para compartir una carpeta de marcadores con otros usuarios." 
            },
            status: { en: "Planned", es: "Planificado" }
        },
        {
            title: { en: "Fuzzy Search", es: "Búsqueda Difusa" },
            description: { 
                en: "Advanced fuzzy search for bookmarks with tag-based filtering.", 
                es: "Búsqueda difusa avanzada para marcadores con filtrado basado en etiquetas." 
            },
            status: { en: "In Progress", es: "En Progreso" }
        }
    ]
};

export const goodPinsInstallation = {
    title: { en: "Access & Installation", es: "Acceso e Instalación" },
    options: [
        {
            title: { en: "Chrome Extension", es: "Extensión de Chrome" },
            description: { 
                en: "Install the official extension from the Chrome Web Store for seamless integration.", 
                es: "Instala la extensión oficial desde la Chrome Web Store para una integración perfecta." 
            },
            icon: "../svg/chromewebstore.svg",
            isImage: true,
            button: {
                text: { en: "Install Extension", es: "Instalar Extensión" },
                icon: "fas fa-download",
                link: "https://chromewebstore.google.com/detail/goodpins/placeholder",
                variant: "primary"
            }
        },
        {
            title: { en: "Source Code", es: "Código Fuente" },
            description: { 
                en: "Explore the source code, contribute, or build it yourself from the repository.", 
                es: "Explora el código fuente, contribuye o compílalo tú mismo desde el repositorio." 
            },
            icon: "fab fa-github",
            isImage: false,
            button: {
                text: { en: "View on GitHub", es: "Ver en GitHub" },
                icon: "fab fa-github",
                link: "https://github.com/Dexterpol-A21/goodPins",
                variant: "secondary"
            }
        }
    ],
    nextProject: {
        text: { en: "Check Next Project", es: "Revisar Siguiente Proyecto" },
        link: "goodscribe.html"
    }
};
