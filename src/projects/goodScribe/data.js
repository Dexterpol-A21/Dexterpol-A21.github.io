export const goodScribeFeatures = {
    id: "features",
    title: { en: "Key Features", es: "Características Clave" },
    background: "gray",
    items: [
        {
            size: "large",
            icon: "fas fa-microphone-alt",
            title: { en: "Real-time Transcription", es: "Transcripción en Tiempo Real" },
            description: { 
                en: "Instant speech-to-text conversion using Deepgram SDK with low latency. Captures audio directly from the active tab.", 
                es: "Conversión instantánea de voz a texto usando Deepgram SDK con baja latencia. Captura audio directamente de la pestaña activa." 
            }
        },
        {
            size: "medium",
            icon: "fas fa-language",
            title: { en: "Live Translation", es: "Traducción en Vivo" },
            description: { 
                en: "Translate transcribed text instantly to support multilingual interpretation.", 
                es: "Traduce texto transcrito instantáneamente para apoyar la interpretación multilingüe." 
            }
        },
        {
            size: "medium",
            icon: "fas fa-book",
            title: { en: "Glossary Management", es: "Gestión de Glosario" },
            description: { 
                en: "Create and manage custom glossaries to ensure terminology consistency.", 
                es: "Crea y gestiona glosarios personalizados para asegurar consistencia terminológica." 
            }
        },
        {
            size: "wide",
            icon: "fas fa-shield-alt",
            title: { en: "Secure Authentication", es: "Autenticación Segura" },
            description: { 
                en: "Robust user authentication and data protection powered by Firebase Auth. Your data is encrypted and securely stored.", 
                es: "Autenticación de usuario robusta y protección de datos impulsada por Firebase Auth. Tus datos están encriptados y almacenados de forma segura." 
            }
        },
        {
            size: "medium",
            icon: "fas fa-cloud",
            title: { en: "Cloud Sync", es: "Sincronización en Nube" },
            description: { 
                en: "Keep your glossaries and settings synchronized across devices with real-time cloud storage.", 
                es: "Mantén tus glosarios y configuraciones sincronizados en todos tus dispositivos con almacenamiento en la nube en tiempo real." 
            }
        }
    ]
};

export const goodScribeOverview = {
    title: { en: "Features Overview", es: "Descripción de Características" },
    items: [
        {
            title: { en: "Real-time Transcription", es: "Transcripción en Tiempo Real" },
            description: { 
                en: "Experience seamless communication with instant speech-to-text transcription. GoodScribe captures audio directly from your browser tab and provides immediate visual feedback, making it an essential tool for interpreters working in multilingual environments.", 
                es: "Experimenta una comunicación fluida con transcripción instantánea de voz a texto. GoodScribe captura audio directamente desde tu pestaña del navegador y proporciona retroalimentación visual inmediata, convirtiéndolo en una herramienta esencial para intérpretes que trabajan en entornos multilingües." 
            },
            icon: "fas fa-microphone-alt",
            imageSrc: "/projects/goodScribe/scribe.png",
            imageAlt: "GoodScribe - Transcription"
        },
        {
            title: { en: "Real-time Translation", es: "Traducción en Tiempo Real" },
            description: { 
                en: "Translate transcribed text instantly to support multilingual interpretation. GoodScribe provides real-time translation alongside the transcription, helping you stay ahead of the conversation.", 
                es: "Traduce texto transcrito instantáneamente para apoyar la interpretación multilingüe. GoodScribe proporciona traducción en tiempo real junto con la transcripción, ayudándote a mantenerte al tanto de la conversación." 
            },
            icon: "fas fa-language",
            imageSrc: "/projects/goodScribe/traduccion.png",
            imageAlt: "GoodScribe - Translation"
        },
        {
            title: { en: "Smart Glossary", es: "Glosario Inteligente" },
            description: { 
                en: "Maintain consistency across your interpretations with the built-in glossary system. Add, edit, and manage specialized terminology to ensure accuracy in technical or domain-specific contexts. Your glossary is always just a click away.", 
                es: "Mantén la consistencia en tus interpretaciones con el sistema de glosario integrado. Agrega, edita y gestiona terminología especializada para asegurar precisión en contextos técnicos o de dominio específico. Tu glosario está siempre a un clic de distancia." 
            },
            icon: "fas fa-book",
            imageSrc: "/projects/goodScribe/glosario.png",
            imageAlt: "GoodScribe - Glossary"
        }
    ]
};

export const goodScribeArchitecture = {
    title: { en: "Technical Architecture", es: "Arquitectura Técnica" },
    layers: [
        {
            title: { en: "Frontend", es: "Frontend" },
            description: { 
                en: "Fast, component-based UI with island architecture for optimal performance.", 
                es: "UI rápida basada en componentes con arquitectura de islas para un rendimiento óptimo." 
            },
            icon: "fas fa-layer-group",
            features: [
                { en: "Astro & React for component islands", es: "Astro y React para islas de componentes" },
                { en: "Tailwind CSS for utility-first styling", es: "Tailwind CSS para estilos de utilidad" },
                { en: "Vite for optimized bundling", es: "Vite para empaquetado optimizado" }
            ]
        },
        {
            title: { en: "Backend Infrastructure", es: "Infraestructura Backend" },
            description: { 
                en: "Authentication, Firestore database, and Cloud Functions for serverless logic.", 
                es: "Autenticación, base de datos Firestore y Cloud Functions para lógica serverless." 
            },
            icon: "fas fa-server",
            features: [
                { en: "Firebase Auth for security", es: "Firebase Auth para seguridad" },
                { en: "Cloud Functions & Cloudflare Workers", es: "Cloud Functions y Cloudflare Workers" },
                { en: "Firestore for real-time data", es: "Firestore para datos en tiempo real" }
            ]
        },
        {
            title: { en: "AI Services", es: "Servicios de IA" },
            description: { 
                en: "State-of-the-art speech-to-text model and enterprise-grade translation services.", 
                es: "Modelo de voz a texto de última generación y servicios de traducción de nivel empresarial." 
            },
            icon: "fas fa-brain",
            features: [
                { en: "Deepgram Nova-3 for transcription", es: "Deepgram Nova-3 para transcripción" },
                { en: "Azure AI Translator (100+ languages)", es: "Azure AI Translator (100+ idiomas)" },
                { en: "Direct WebSocket connection", es: "Conexión WebSocket directa" }
            ]
        }
    ]
};

export const goodScribeEngineering = {
    title: { en: "Engineering Challenges", es: "Desafíos de Ingeniería" },
    challenges: [
        {
            title: { en: "Ultra-Low Latency Audio", es: "Audio de Latencia Ultra-Baja" },
            icon: "fas fa-tachometer-alt",
            problem: { 
                en: "Standard browser audio processing introduces delays (2s+) unacceptable for live interpretation.", 
                es: "El procesamiento de audio estándar del navegador introduce retrasos (2s+) inaceptables para la interpretación en vivo." 
            },
            solution: { 
                en: "Implemented custom AudioWorklets to process raw PCM audio on a separate thread, bypassing the main event loop and streaming directly via WebSockets.", 
                es: "Implementé AudioWorklets personalizados para procesar audio PCM crudo en un hilo separado, evitando el bucle de eventos principal y transmitiendo directamente vía WebSockets." 
            }
        },
        {
            title: { en: "Serverless Security Architecture", es: "Arquitectura de Seguridad Serverless" },
            icon: "fas fa-user-shield",
            problem: { 
                en: "Directly accessing Azure & Google Cloud APIs from the client would expose sensitive billing keys.", 
                es: "Acceder directamente a las APIs de Azure y Google Cloud desde el cliente expondría claves de facturación sensibles." 
            },
            solution: { 
                en: "Implemented a reverse proxy using Firebase Cloud Functions and Cloudflare Workers. The client authenticates via Firebase Auth, and the server injects the secrets before calling upstream APIs.", 
                es: "Implementé un proxy inverso usando Firebase Cloud Functions y Cloudflare Workers. El cliente se autentica vía Firebase Auth, y el servidor inyecta los secretos antes de llamar a las APIs upstream." 
            }
        },
        {
            title: { en: "Extension State Synchronization", es: "Sincronización de Estado de Extensión" },
            icon: "fas fa-sync-alt",
            problem: { 
                en: "Managing state across three isolated contexts: Popup, Background Worker, and Content Script.", 
                es: "Gestionar el estado a través de tres contextos aislados: Popup, Background Worker y Content Script." 
            },
            solution: { 
                en: "Built a reactive message-passing architecture using Chrome's Runtime API to ensure UI updates instantly reflect background process status.", 
                es: "Construí una arquitectura de paso de mensajes reactiva usando la API Runtime de Chrome para asegurar que la UI refleje instantáneamente el estado de los procesos en segundo plano." 
            }
        },
        {
            title: { en: "Real-time Cost Guardrails", es: "Control de Costos en Tiempo Real" },
            icon: "fas fa-coins",
            problem: { 
                en: "Preventing API bill shock from users exceeding their plan limits on pay-per-use AI services.", 
                es: "Prevenir facturas excesivas por usuarios que exceden los límites de su plan en servicios de IA de pago por uso." 
            },
            solution: { 
                en: "Engineered atomic pre-flight checks in Firestore. Every API request validates the user's 'minutes used' against their plan limits before processing audio.", 
                es: "Diseñé verificaciones atómicas previas en Firestore. Cada solicitud de API valida los 'minutos usados' del usuario contra los límites de su plan antes de procesar el audio." 
            }
        }
    ],
    pipeline: {
        title: { en: "Data Pipeline", es: "Flujo de Datos" },
        badge: "Real-time",
        steps: [
            {
                title: { en: "Capture", es: "Captura" },
                description: { en: "Tab Audio (PCM)", es: "Audio de Pestaña (PCM)" },
                icon: "fas fa-microphone-lines"
            },
            {
                title: { en: "Process", es: "Proceso" },
                description: { en: "AudioWorklet", es: "AudioWorklet" },
                icon: "fas fa-microchip"
            },
            {
                title: { en: "Transcribe", es: "Transcribir" },
                description: { en: "Deepgram Nova-3", es: "Deepgram Nova-3" },
                icon: "fas fa-brain"
            },
            {
                title: { en: "Translate", es: "Traducir" },
                description: { en: "Azure AI", es: "Azure AI" },
                icon: "fas fa-language"
            },
            {
                title: { en: "Render", es: "Renderizar" },
                description: { en: "Real-time Overlay", es: "Overlay en Tiempo Real" },
                icon: "fas fa-desktop"
            }
        ]
    }
};

export const goodScribeRoadmap = {
    title: { en: "Future Roadmap", es: "Hoja de Ruta Futura" },
    items: [
        {
            title: { en: "Advanced Export Options", es: "Opciones Avanzadas de Exportación" },
            description: { 
                en: "Export transcripts to PDF, DOCX, and SRT formats with timestamps for easier documentation.", 
                es: "Exportar transcripciones a formatos PDF, DOCX y SRT con marcas de tiempo para facilitar la documentación." 
            },
            status: { en: "Planned", es: "Planificado" }
        },
        {
            title: { en: "Speaker Diarization", es: "Diarización de Hablantes" },
            description: { 
                en: "Automatically detect and label different speakers in the transcript to improve context tracking.", 
                es: "Detectar y etiquetar automáticamente diferentes hablantes en la transcripción para mejorar el seguimiento del contexto." 
            },
            status: { en: "Planned", es: "Planificado" }
        },
        {
            title: { en: "Smart Keyword Boosting", es: "Impulso Inteligente de Palabras Clave" },
            description: { 
                en: "Dynamically inject glossary terms into Deepgram's transcription engine to improve recognition accuracy for specialized terminology.", 
                es: "Inyectar dinámicamente términos del glosario en el motor de transcripción de Deepgram para mejorar la precisión del reconocimiento de terminología especializada." 
            },
            status: { en: "In Progress", es: "En Progreso" }
        },
        {
            title: { en: "Offline Mode", es: "Modo Offline" },
            description: { 
                en: "Local speech processing capabilities for low-connectivity environments using WebAssembly.", 
                es: "Capacidades de procesamiento de voz local para entornos de baja conectividad usando WebAssembly." 
            },
            status: { en: "Planned", es: "Planificado" }
        },
        {
            title: { en: "Mobile Companion App", es: "App Móvil Complementaria" },
            description: { 
                en: "Use your smartphone as a high-quality remote microphone input for the browser extension.", 
                es: "Usa tu smartphone como un micrófono remoto de alta calidad para la extensión del navegador." 
            },
            status: { en: "Concept", es: "Concepto" }
        }
    ]
};

export const goodScribeInstallation = {
    title: { en: "Access & Installation", es: "Acceso e Instalación" },
    options: [
        {
            title: { en: "Web Application", es: "Aplicación Web" },
            description: { 
                en: "Access the full suite of transcription and translation tools directly in your browser.", 
                es: "Accede a la suite completa de herramientas de transcripción y traducción directamente en tu navegador." 
            },
            icon: "../svg/website.svg",
            isImage: true,
            button: {
                text: { en: "Launch App", es: "Iniciar App" },
                icon: "fas fa-external-link-alt",
                link: "https://goodscribe-astro.web.app/",
                variant: "primary"
            }
        },
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
                link: "#",
                variant: "secondary"
            }
        }
    ],
    nextProject: {
        text: { en: "Check Next Project", es: "Revisar Siguiente Proyecto" },
        link: "goodpins.html"
    }
};
