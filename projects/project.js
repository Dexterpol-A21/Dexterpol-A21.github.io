// Project Page Specific JavaScript
// Extends the main portfolio functionality

class ProjectPage {
    constructor() {
        this.init();
    }

    init() {
        // Wait for DOM content to be loaded
        if (document.readyState === 'loading') {
            document.addEventListener('DOMContentLoaded', () => this.onDOMReady());
        } else {
            this.onDOMReady();
        }
    }

    onDOMReady() {
        this.setupProjectSpecificFeatures();
        this.initializeSyntaxHighlighting();
        this.setupMaterialIconsFallback();
        this.setupRoadmapProgress();
        console.log('Project page loaded');
    }

    setupProjectSpecificFeatures() {
        // Add any project-specific interactive features here
        this.setupBackNavigation();
    }

    setupBackNavigation() {
        const backLink = document.querySelector('.back-link');
        
        if (backLink) {
            // Enhance back navigation with history support
            backLink.addEventListener('click', (e) => {
                // Check if we came from the same site
                if (document.referrer && document.referrer.includes(window.location.hostname)) {
                    e.preventDefault();
                    window.history.back();
                }
                // Otherwise let the default link behavior work
            });
        }
    }

    initializeSyntaxHighlighting() {
        // Initialize Highlight.js for code syntax highlighting
        if (typeof hljs !== 'undefined') {
            hljs.highlightAll();
            console.log('Syntax highlighting initialized');
        }
    }

    setupMaterialIconsFallback() {
        // Wait a moment for fonts to load
        setTimeout(() => {
            const materialIcons = document.querySelectorAll('.material-symbols-outlined');
            materialIcons.forEach(icon => {
                const testDiv = document.createElement('div');
                testDiv.style.fontFamily = 'Material Symbols Outlined';
                testDiv.textContent = icon.textContent;
                testDiv.style.position = 'absolute';
                testDiv.style.visibility = 'hidden';
                document.body.appendChild(testDiv);
                
                const hasFont = testDiv.offsetWidth > 0;
                document.body.removeChild(testDiv);
                
                // If Material Icons didn't load, use text fallbacks
                if (!hasFont) {
                    const iconText = icon.textContent.trim();
                    let fallbackIcon = '';
                    
                    switch(iconText) {
                        case 'dark_mode':
                            fallbackIcon = '🌙';
                            break;
                        case 'light_mode':
                            fallbackIcon = '☀️';
                            break;
                        case 'translate':
                            fallbackIcon = '🌐';
                            break;
                        default:
                            fallbackIcon = iconText;
                    }
                    
                    icon.textContent = fallbackIcon;
                    icon.style.fontFamily = 'system-ui, -apple-system, sans-serif';
                }
                
                // Apply proper styling
                icon.style.fontWeight = 'normal';
                icon.style.fontStyle = 'normal';
                icon.style.fontSize = 'inherit';
                icon.style.lineHeight = '1';
                icon.style.display = 'inline-block';
            });
        }, 100);
    }

    setupRoadmapProgress() {
        const timeline = document.querySelector('.roadmap-timeline');
        
        if (!timeline) return;

        let currentProgress = 0;
        let targetProgress = 0;
        let animationFrameId = null;

        const updateRoadmapProgress = () => {
            const timelineRect = timeline.getBoundingClientRect();
            const timelineTop = timelineRect.top;
            const timelineHeight = timelineRect.height;
            const windowHeight = window.innerHeight;
            
            // Calculate progress based on center of viewport
            const viewportCenter = windowHeight / 2;
            const timelineStart = timelineTop;
            const timelineEnd = timelineTop + timelineHeight;
            
            // Progress is 0 when timeline starts entering viewport center, 1 when it exits
            let progress;
            if (timelineStart > viewportCenter) {
                progress = 0;
            } else if (timelineEnd < viewportCenter) {
                progress = 1;
            } else {
                progress = (viewportCenter - timelineStart) / timelineHeight;
            }
            
            // Clamp between 0 and 1
            targetProgress = Math.max(0, Math.min(1, progress));
        };

        // Smooth interpolation with balanced speed (0.06 = faster but still smooth)
        const animateProgress = () => {
            // Increased smoothing factor for faster response while maintaining smoothness
            const smoothing = 0.06;
            currentProgress += (targetProgress - currentProgress) * smoothing;
            
            // Update CSS variable on every frame for smoothest animation
            document.documentElement.style.setProperty('--roadmap-progress', currentProgress);
            
            // Continue animation loop
            animationFrameId = requestAnimationFrame(animateProgress);
        };

        // Update target on scroll without throttling for maximum responsiveness
        window.addEventListener('scroll', updateRoadmapProgress, { passive: true });
        
        // Initial call
        updateRoadmapProgress();
        
        // Start animation loop
        animateProgress();
        
        // Store the animation frame ID for cleanup
        this.roadmapAnimationFrame = animationFrameId;
    }
}

// Initialize project page when main app is ready
document.addEventListener('portfolioReady', () => {
    const projectPage = new ProjectPage();
});

// Fallback initialization if main app doesn't dispatch event
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
        setTimeout(() => {
            if (!window.projectPageInitialized) {
                new ProjectPage();
                window.projectPageInitialized = true;
            }
        }, 100);
    });
} else {
    setTimeout(() => {
        if (!window.projectPageInitialized) {
            new ProjectPage();
            window.projectPageInitialized = true;
        }
    }, 100);
}
