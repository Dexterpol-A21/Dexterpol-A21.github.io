// ============================================================================
// GoodPins - Chrome Extension for Bookmark Management
// Author: Paul Eduardo Contreras Lobato (Dexterpol-A21)
// GitHub: https://github.com/Dexterpol-A21
// Portfolio: https://dexterpol-a21.github.io
// ============================================================================

class PortfolioApp {
    constructor() {
        this.isLoaded = false;
        this.observers = new Map();
        this.currentTheme = localStorage.getItem('theme') || 'light';
        this.currentLanguage = localStorage.getItem('language') || 'en';
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
        this.setupTheme();
        this.setupLanguage();
        this.setupToggleControls();
        this.setupMaterialIconsFallback();
        // this.setupNavigation(); // Handled by React
        this.setupScrollEffects();
        this.setupSkillBars();
        this.setupContactForm();
        this.setupSmoothScrolling();
        this.setupAccessibility();
        this.setupPerformanceOptimizations();
        this.setupPhoneClipboard();
        this.showSubmissionResultFromURL(); // Add this line
        this.isLoaded = true;
        
        // Dispatch custom event when app is ready
        document.dispatchEvent(new CustomEvent('portfolioReady'));
    }

    // Theme Management
    setupTheme() {
        document.documentElement.setAttribute('data-theme', this.currentTheme);
        this.updateThemeIcon();
    }

    toggleTheme() {
        this.currentTheme = this.currentTheme === 'light' ? 'dark' : 'light';
        document.documentElement.setAttribute('data-theme', this.currentTheme);
        localStorage.setItem('theme', this.currentTheme);
        this.updateThemeIcon();
    }

    updateThemeIcon() {
        const themeIcon = document.querySelector('[data-theme-icon]');
        if (themeIcon) {
            themeIcon.classList.add('fas');
            themeIcon.classList.remove('fa-moon', 'fa-sun');
            themeIcon.classList.add(this.currentTheme === 'light' ? 'fa-moon' : 'fa-sun');
            themeIcon.setAttribute('aria-hidden', 'true');
        }
    }

    // Language Management
    setupLanguage() {
        this.updateLanguageContent();
    }

    toggleLanguage() {
        this.currentLanguage = this.currentLanguage === 'en' ? 'es' : 'en';
        localStorage.setItem('language', this.currentLanguage);
        this.updateLanguageContent();
        window.dispatchEvent(new CustomEvent('languageChanged', { detail: { language: this.currentLanguage } }));
    }

    updateLanguageContent() {
        const elements = document.querySelectorAll('[data-en][data-es]');
        elements.forEach(element => {
            const text = element.getAttribute(`data-${this.currentLanguage}`);
            if (text) {
                element.textContent = text;
            }
        });
    }

    // Toggle Controls Setup
    setupToggleControls() {
        const themeToggle = document.getElementById('theme-toggle');
        const languageToggle = document.getElementById('language-toggle');

        if (themeToggle) {
            themeToggle.addEventListener('click', () => this.toggleTheme());
        }

        if (languageToggle) {
            languageToggle.addEventListener('click', () => this.toggleLanguage());
        }

        // Keyboard shortcuts
        document.addEventListener('keydown', (e) => {
            // Ctrl/Cmd + D for dark mode toggle
            if ((e.ctrlKey || e.metaKey) && e.key === 'd') {
                e.preventDefault();
                this.toggleTheme();
            }
            
            // Ctrl/Cmd + L for language toggle
            if ((e.ctrlKey || e.metaKey) && e.key === 'l') {
                e.preventDefault();
                this.toggleLanguage();
            }
        });
    }

    // Navigation functionality (updated for sidebar)
    setupNavigation() {
        // Add mobile toggle button
        this.createMobileToggle();
        
        // Setup sidebar navigation
        this.setupSidebarNavigation();
        
        // Setup scroll progress
        this.setupScrollProgress();
    }

    createMobileToggle() {
        if (window.innerWidth <= 768) {
            const toggleButton = document.createElement('button');
            toggleButton.className = 'sidebar-toggle';
            toggleButton.innerHTML = '<i class="fas fa-bars"></i>';
            toggleButton.setAttribute('aria-label', 'Toggle navigation');
            
            const sidebar = document.getElementById('sidebar');
            
            toggleButton.addEventListener('click', () => {
                sidebar.classList.toggle('active');
                const isActive = sidebar.classList.contains('active');
                toggleButton.innerHTML = isActive ? '<i class="fas fa-times"></i>' : '<i class="fas fa-bars"></i>';
            });
            
            // Close sidebar when clicking outside
            document.addEventListener('click', (e) => {
                if (!sidebar.contains(e.target) && !toggleButton.contains(e.target)) {
                    sidebar.classList.remove('active');
                    toggleButton.innerHTML = '<i class="fas fa-bars"></i>';
                }
            });
            
            document.body.appendChild(toggleButton);
        }
    }

    setupSidebarNavigation() {
        const sections = document.querySelectorAll('section[id]');
        const navLinks = document.querySelectorAll('.sidebar__link');

        if (!sections.length || !navLinks.length) return;

        const observerOptions = {
            rootMargin: '-20% 0px -20% 0px',
            threshold: 0.1
        };

        const navObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const activeLink = document.querySelector(`.sidebar__link[href="#${entry.target.id}"]`);
                    
                    // Remove active class from all links
                    navLinks.forEach(link => link.classList.remove('active'));
                    
                    // Add active class to current link
                    if (activeLink) {
                        activeLink.classList.add('active');
                    }
                }
            });
        }, observerOptions);

        sections.forEach(section => navObserver.observe(section));
        this.observers.set('navigation', navObserver);
    }

    setupScrollProgress() {
        const progressBar = document.getElementById('progress-bar');
        
        if (!progressBar) return;

        const updateProgress = this.throttle(() => {
            const windowHeight = window.innerHeight;
            const documentHeight = document.documentElement.scrollHeight - windowHeight;
            const scrolled = window.scrollY;
            const progress = (scrolled / documentHeight) * 100;
            
            progressBar.style.height = `${Math.min(progress, 100)}%`;
        }, 16);

        window.addEventListener('scroll', updateProgress, { passive: true });
    }

    // Scroll effects and animations
    setupScrollEffects() {
        // Only keep scroll-triggered animations
        this.setupScrollAnimations();
        this.setupTimelineProgress();
    }

    setupScrollAnimations() {
        const animateElements = document.querySelectorAll('.skill-category, .experience-card, .project-card, .stat, .info-card');
        
        const animationObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('animate-on-scroll');
                    animationObserver.unobserve(entry.target);
                }
            });
        }, {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        });

        animateElements.forEach(el => {
            animationObserver.observe(el);
        });

        this.observers.set('animations', animationObserver);
    }

    setupTimelineProgress() {
        const timeline = document.querySelector('.timeline');
        
        if (!timeline) return;

        let currentProgress = 0;
        let targetProgress = 0;
        let animationFrameId = null;

        const updateTimelineProgress = () => {
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

        // Smooth interpolation with lag effect
        const animateProgress = () => {
            // A lower smoothing factor creates a more gentle, "cushioned" follow effect.
            const smoothing = 0.04;
            currentProgress += (targetProgress - currentProgress) * smoothing;
            
            // Only update if there's a meaningful difference to avoid unnecessary repaints
            if (Math.abs(targetProgress - currentProgress) > 0.0001) {
                document.documentElement.style.setProperty('--timeline-progress', currentProgress);
            } else if (targetProgress === currentProgress) {
                // If we've reached the target, no need to keep setting the property
            } else {
                // Snap to final value if very close
                currentProgress = targetProgress;
                document.documentElement.style.setProperty('--timeline-progress', currentProgress);
            }
            
            // Continue animation loop
            animationFrameId = requestAnimationFrame(animateProgress);
        };

        // Update target on scroll without throttling for maximum responsiveness
        window.addEventListener('scroll', updateTimelineProgress, { passive: true });
        
        // Initial call
        updateTimelineProgress();
        
        // Start animation loop
        animateProgress();
        
        // Store the animation frame ID for cleanup
        this.timelineAnimationFrame = animationFrameId;
    }

    // Skill bars animation
    setupSkillBars() {
        const skillBars = document.querySelectorAll('.skill-item__progress');
        
        const skillObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const progressBar = entry.target;
                    const width = progressBar.dataset.width;
                    
                    // Animate the skill bar
                    setTimeout(() => {
                        progressBar.style.width = `${width}%`;
                    }, 200);
                    
                    skillObserver.unobserve(progressBar);
                }
            });
        }, { threshold: 0.5 });

        skillBars.forEach(bar => {
            skillObserver.observe(bar);
        });

        this.observers.set('skills', skillObserver);
    }

    // Contact form functionality
    setupContactForm() {
        const form = document.getElementById('contact-form');
        if (!form) return;

        const isFormSubmit = form.action && form.action.includes('formsubmit.co');

        form.addEventListener('submit', async (e) => {
            const formData = new FormData(form);
            const data = Object.fromEntries(formData);

            // Client-side validation
            if (!this.validateForm(data)) {
                e.preventDefault();
                return;
            }

            // If using FormSubmit, allow native submit (no preventDefault)
            if (isFormSubmit) {
                // Optionally enrich the email subject using the user's subject
                const hiddenSubject = form.querySelector('input[name="_subject"]');
                if (hiddenSubject && data.subject) {
                    hiddenSubject.value = `Portfolio: ${data.subject}`;
                }
                // Show a quick loading state while the browser posts the form
                const submitButton = form.querySelector('button[type="submit"]');
                if (submitButton) {
                    submitButton.disabled = true;
                    submitButton.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Sending...';
                }
                return; // proceed with normal form submission
            }

            // Fallback (no action URL): simulate submission
            e.preventDefault();
            const submitButton = form.querySelector('button[type="submit"]');
            const originalText = submitButton?.innerHTML;

            try {
                if (submitButton) {
                    submitButton.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Sending...';
                    submitButton.disabled = true;
                }
                await this.simulateFormSubmission(data);
                this.showNotification('Message sent successfully!', 'success');
                form.reset();
            } catch (error) {
                console.error('Form submission error:', error);
                this.showNotification('Failed to send message. Please try again.', 'error');
            } finally {
                if (submitButton && originalText) {
                    submitButton.innerHTML = originalText;
                    submitButton.disabled = false;
                }
            }
        });

        // Real-time validation
        const inputs = form.querySelectorAll('input, textarea');
        inputs.forEach(input => {
            input.addEventListener('blur', () => this.validateField(input));
            input.addEventListener('input', () => this.clearFieldError(input));
        });
    }

    validateForm(data) {
        const { name, email, subject, message } = data;
        let isValid = true;

        // Name validation
        if (!name.trim()) {
            this.showFieldError('name', 'Name is required');
            isValid = false;
        }

        // Email validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!email.trim() || !emailRegex.test(email)) {
            this.showFieldError('email', 'Please enter a valid email address');
            isValid = false;
        }

        // Subject validation
        if (!subject.trim()) {
            this.showFieldError('subject', 'Subject is required');
            isValid = false;
        }

        // Message validation
        if (!message.trim() || message.trim().length < 10) {
            this.showFieldError('message', 'Message must be at least 10 characters long');
            isValid = false;
        }

        return isValid;
    }

    validateField(input) {
        const value = input.value.trim();
        
        switch (input.type) {
            case 'email':
                const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                if (value && !emailRegex.test(value)) {
                    this.showFieldError(input.name, 'Please enter a valid email address');
                    return false;
                }
                break;
            case 'text':
                if (input.required && !value) {
                    this.showFieldError(input.name, `${input.labels[0]?.textContent || 'This field'} is required`);
                    return false;
                }
                break;
        }

        if (input.tagName === 'TEXTAREA' && input.required && value.length < 10) {
            this.showFieldError(input.name, 'Message must be at least 10 characters long');
            return false;
        }

        this.clearFieldError(input);
        return true;
    }

    showFieldError(fieldName, message) {
        const field = document.querySelector(`[name="${fieldName}"]`);
        const formGroup = field?.closest('.form-group');
        
        if (!formGroup) return;

        // Remove existing error
        const existingError = formGroup.querySelector('.field-error');
        if (existingError) {
            existingError.remove();
        }

        // Add error styling
        field.classList.add('error');
        
        // Add error message
        const errorElement = document.createElement('span');
        errorElement.className = 'field-error';
        errorElement.textContent = message;
        errorElement.style.color = 'var(--color-red-500, #ef4444)';
        errorElement.style.fontSize = 'var(--text-sm)';
        errorElement.style.marginTop = 'var(--space-1)';
        errorElement.style.display = 'block';
        
        formGroup.appendChild(errorElement);
    }

    clearFieldError(input) {
        const formGroup = input.closest('.form-group');
        const errorElement = formGroup?.querySelector('.field-error');
        
        input.classList.remove('error');
        if (errorElement) {
            errorElement.remove();
        }
    }

    async simulateFormSubmission(data) {
        // Simulate API call delay
        return new Promise((resolve) => {
            setTimeout(() => {
                console.log('Form data:', data);
                resolve();
            }, 1500);
        });
    }

    showSubmissionResultFromURL() {
        const urlParams = new URLSearchParams(window.location.search);
        if (urlParams.get('success') === '1') {
            this.showNotification('Message sent successfully!', 'success');
            // Clean URL
            const newUrl = window.location.pathname + window.location.hash;
            window.history.replaceState({}, document.title, newUrl);
        }
    }

    showNotification(message, type = 'info') {
        // Remove existing notification
        const existing = document.querySelector('.notification');
        if (existing) {
            existing.remove();
        }

        const notification = document.createElement('div');
        notification.className = `notification notification--${type}`;
        notification.innerHTML = `
            <div class="notification__content">
                <i class="fas fa-${type === 'success' ? 'check-circle' : 'exclamation-circle'}"></i>
                <span>${message}</span>
            </div>
            <button class="notification__close" aria-label="Close notification">
                <i class="fas fa-times"></i>
            </button>
        `;

        // Notification styles
        Object.assign(notification.style, {
            position: 'fixed',
            top: '20px',
            right: '20px',
            backgroundColor: type === 'success' ? '#10b981' : '#ef4444',
            color: 'white',
            padding: '1rem',
            borderRadius: '0.5rem',
            boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)',
            zIndex: '1000',
            display: 'flex',
            alignItems: 'center',
            gap: '0.5rem',
            maxWidth: '400px',
            animation: 'slideInRight 0.3s ease-out'
        });

        document.body.appendChild(notification);

        // Auto remove after 5 seconds
        setTimeout(() => {
            if (notification.parentNode) {
                notification.style.animation = 'slideOutRight 0.3s ease-out';
                setTimeout(() => notification.remove(), 300);
            }
        }, 5000);

        // Manual close
        const closeBtn = notification.querySelector('.notification__close');
        closeBtn.addEventListener('click', () => {
            notification.style.animation = 'slideOutRight 0.3s ease-out';
            setTimeout(() => notification.remove(), 300);
        });
    }

    // Smooth scrolling for anchor links
    setupSmoothScrolling() {
        const links = document.querySelectorAll('a[href^="#"]');
        
        links.forEach(link => {
            link.addEventListener('click', (e) => {
                e.preventDefault();
                
                const targetId = link.getAttribute('href').substring(1);
                const targetElement = document.getElementById(targetId);
                
                if (targetElement) {
                    const targetPosition = targetElement.offsetTop - 20;
                    
                    window.scrollTo({
                        top: targetPosition,
                        behavior: 'smooth'
                    });
                }
            });
        });
    }

    // Accessibility enhancements
    setupAccessibility() {
        // Keyboard navigation
        this.setupKeyboardNavigation();
        
        // Screen reader enhancements
        this.setupScreenReaderSupport();
        
        // Announce theme and language changes
        this.setupToggleAnnouncements();
    }

    setupKeyboardNavigation() {
        // Escape key to close mobile menu
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape') {
                const sidebar = document.getElementById('sidebar');
                const toggleButton = document.querySelector('.sidebar-toggle');
                
                if (sidebar?.classList.contains('active')) {
                    sidebar.classList.remove('active');
                    if (toggleButton) {
                        toggleButton.innerHTML = '<i class="fas fa-bars"></i>';
                        toggleButton.focus();
                    }
                }
            }
        });
    }

    setupScreenReaderSupport() {
        // Add live region for dynamic content
        const liveRegion = document.createElement('div');
        liveRegion.setAttribute('aria-live', 'polite');
        liveRegion.setAttribute('aria-atomic', 'true');
        liveRegion.className = 'sr-only';
        liveRegion.id = 'live-region';
        document.body.appendChild(liveRegion);

        // Announce section changes
        const sections = document.querySelectorAll('section[id]');
        const sectionObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const sectionTitle = entry.target.querySelector('h2, h1')?.textContent;
                    if (sectionTitle) {
                        liveRegion.textContent = `Now viewing ${sectionTitle} section`;
                    }
                }
            });
        }, { threshold: 0.5 });

        sections.forEach(section => sectionObserver.observe(section));
        this.observers.set('sections', sectionObserver);
    }

    setupToggleAnnouncements() {
        const liveRegion = document.getElementById('live-region');
        
        // Listen for theme changes
        const themeToggle = document.getElementById('theme-toggle');
        if (themeToggle) {
            themeToggle.addEventListener('click', () => {
                setTimeout(() => {
                    const themeText = this.currentTheme === 'dark' ? 'Dark theme activated' : 'Light theme activated';
                    if (liveRegion) {
                        liveRegion.textContent = themeText;
                    }
                }, 100);
            });
        }

        // Listen for language changes
        const languageToggle = document.getElementById('language-toggle');
        if (languageToggle) {
            languageToggle.addEventListener('click', () => {
                setTimeout(() => {
                    const langText = this.currentLanguage === 'en' ? 'Language switched to English' : 'Idioma cambiado a Español';
                    if (liveRegion) {
                        liveRegion.textContent = langText;
                    }
                }, 100);
            });
        }
    }

    // Performance optimizations
    setupPerformanceOptimizations() {
        // Lazy load images
        this.setupLazyLoading();
        
        // Preload critical resources
        this.preloadCriticalResources();
        
        // Optimize animations
        this.optimizeAnimations();
    }

    setupLazyLoading() {
        const images = document.querySelectorAll('img[data-src]');
        
        if (!images.length) return;

        const imageObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    img.src = img.dataset.src;
                    img.removeAttribute('data-src');
                    img.classList.add('loaded');
                    imageObserver.unobserve(img);
                }
            });
        }, {
            rootMargin: '50px 0px',
            threshold: 0.01
        });

        images.forEach(img => imageObserver.observe(img));
        this.observers.set('images', imageObserver);
    }

    preloadCriticalResources() {
        // Preload important images or resources
        const criticalResources = [
            'assets/PECL_CV_ING_ENGESP.pdf'
        ];

        criticalResources.forEach(resource => {
            const link = document.createElement('link');
            link.rel = 'prefetch';
            link.href = resource;
            document.head.appendChild(link);
        });
    }

    optimizeAnimations() {
        // Reduce animations for users who prefer reduced motion
        if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
            document.documentElement.style.setProperty('--transition', '0.01ms');
            document.documentElement.style.setProperty('--transition-slow', '0.01ms');
            
            // Remove floating animations
            const floatingElements = document.querySelectorAll('.floating-element');
            floatingElements.forEach(el => {
                el.style.animation = 'none';
            });
        }
    }

    // Material Icons Fallback
    setupMaterialIconsFallback() {
        // Wait a moment for fonts to load
        setTimeout(() => {
            const materialIcons = document.querySelectorAll('.material-symbols-outlined');
            materialIcons.forEach(icon => {
                // Check if the icon is actually displaying by checking computed width
                const computedStyle = window.getComputedStyle(icon);
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
                
                // Apply proper styling regardless
                icon.style.fontWeight = 'normal';
                icon.style.fontStyle = 'normal';
                icon.style.fontSize = 'inherit';
                icon.style.lineHeight = '1';
                icon.style.letterSpacing = 'normal';
                icon.style.textTransform = 'none';
                icon.style.display = 'inline-block';
                icon.style.whiteSpace = 'nowrap';
                icon.style.wordWrap = 'normal';
                icon.style.direction = 'ltr';
            });
        }, 100);
    }

    // Phone clipboard functionality
    setupPhoneClipboard() {
        const phoneLinks = document.querySelectorAll('.phone-link');
        const emailLinks = document.querySelectorAll('.email-link');
        
        phoneLinks.forEach(link => {
            link.addEventListener('click', (e) => {
                e.preventDefault();
                
                // Extract phone number from the href attribute
                const phoneNumber = link.getAttribute('href').replace('tel:', '');
                
                // Copy to clipboard
                this.copyToClipboard(phoneNumber, link);
            });
        });

        emailLinks.forEach(link => {
            link.addEventListener('click', (e) => {
                e.preventDefault();
                
                // Extract email from the href attribute
                const email = link.getAttribute('href').replace('mailto:', '');
                
                // Copy to clipboard
                this.copyToClipboard(email, link);
            });
        });
    }

    async copyToClipboard(text, element) {
        try {
            // Add clicked animation class (works for both phone and email)
            element.classList.add('phone-link--clicked');
            
            // Use modern clipboard API if available
            if (navigator.clipboard && navigator.clipboard.writeText) {
                await navigator.clipboard.writeText(text);
            } else {
                // Fallback for older browsers
                const textArea = document.createElement('textarea');
                textArea.value = text;
                textArea.style.position = 'fixed';
                textArea.style.left = '-999999px';
                textArea.style.top = '-999999px';
                document.body.appendChild(textArea);
                textArea.focus();
                textArea.select();
                document.execCommand('copy');
                document.body.removeChild(textArea);
            }
            
            // Show success state on the button
            element.classList.add('phone-link--copied');
            
            // Store original content
            const originalContent = element.innerHTML;
            
            // Change button content to show success
            element.innerHTML = '<i class="fas fa-check"></i> Copied!';
            
            // Reset after delay
            setTimeout(() => {
                element.innerHTML = originalContent;
                element.classList.remove('phone-link--copied');
            }, 2000);
            
        } catch (err) {
            console.error('Failed to copy to clipboard:', err);
            
            // Show error state on the button
            element.classList.add('phone-link--error');
            
            // Store original content
            const originalContent = element.innerHTML;
            
            // Change button content to show error
            element.innerHTML = '<i class="fas fa-times"></i> Failed';
            
            // Reset after delay
            setTimeout(() => {
                element.innerHTML = originalContent;
                element.classList.remove('phone-link--error');
            }, 2000);
        } finally {
            // Remove clicked animation class after animation completes
            setTimeout(() => {
                element.classList.remove('phone-link--clicked');
            }, 200);
        }
    }

    // Utility functions
    throttle(func, limit) {
        let inThrottle;
        return function() {
            const args = arguments;
            const context = this;
            if (!inThrottle) {
                func.apply(context, args);
                inThrottle = true;
                setTimeout(() => inThrottle = false, limit);
            }
        };
    }

    debounce(func, wait, immediate) {
        let timeout;
        return function() {
            const context = this;
            const args = arguments;
            const later = function() {
                timeout = null;
                if (!immediate) func.apply(context, args);
            };
            const callNow = immediate && !timeout;
            clearTimeout(timeout);
            timeout = setTimeout(later, wait);
            if (callNow) func.apply(context, args);
        };
    }

    // Cleanup method
    destroy() {
        // Clean up all observers
        this.observers.forEach(observer => observer.disconnect());
        this.observers.clear();
        
        // Cancel timeline animation frame
        if (this.timelineAnimationFrame) {
            cancelAnimationFrame(this.timelineAnimationFrame);
        }
        
        this.isLoaded = false;
    }
}

// Initialize the application
const portfolioApp = new PortfolioApp();

// Particles.js Configuration
if (typeof particlesJS !== 'undefined') {
    particlesJS('particles-js', {
        particles: {
            number: {
                value: 80,
                density: {
                    enable: true,
                    value_area: 800
                }
            },
            color: {
                value: '#737373' // Gray color matching your theme
            },
            shape: {
                type: 'circle',
                stroke: {
                    width: 0,
                    color: '#000000'
                }
            },
            opacity: {
                value: 0.5,
                random: false,
                anim: {
                    enable: false
                }
            },
            size: {
                value: 3,
                random: true,
                anim: {
                    enable: false
                }
            },
            line_linked: {
                enable: true,
                distance: 150,
                color: '#a3a3a3',
                opacity: 0.4,
                width: 1
            },
            move: {
                enable: true,
                speed: 2,
                direction: 'none',
                random: false,
                straight: false,
                out_mode: 'out',
                bounce: false,
                attract: {
                    enable: false,
                    rotateX: 600,
                    rotateY: 1200
                }
            }
        },
        interactivity: {
            detect_on: 'canvas',
            events: {
                onhover: {
                    enable: true,
                    mode: 'grab'
                },
                onclick: {
                    enable: true,
                    mode: 'push'
                },
                resize: true
            },
            modes: {
                grab: {
                    distance: 140,
                    line_linked: {
                        opacity: 1
                    }
                },
                push: {
                    particles_nb: 4
                }
            }
        },
        retina_detect: true
    });

    // Update particles color based on theme
    const updateParticlesTheme = () => {
        const isDark = document.documentElement.getAttribute('data-theme') === 'dark';
        
        if (window.pJSDom && window.pJSDom[0]) {
            const pJS = window.pJSDom[0].pJS;
            
            // Update particle colors for dark theme
            pJS.particles.color.value = isDark ? '#d4d4d4' : '#737373';
            pJS.particles.line_linked.color = isDark ? '#737373' : '#a3a3a3';
            
            // Refresh particles
            pJS.fn.particlesRefresh();
        }
    };

    // Listen for theme changes
    const themeToggle = document.getElementById('theme-toggle');
    if (themeToggle) {
        themeToggle.addEventListener('click', () => {
            setTimeout(updateParticlesTheme, 100);
        });
    }
}

// Add CSS animations for notifications
const style = document.createElement('style');
style.textContent = `
    @keyframes slideInRight {
        from {
            transform: translateX(100%);
            opacity: 0;
        }
        to {
            transform: translateX(0);
            opacity: 1;
        }
    }
    
    @keyframes slideOutRight {
        from {
            transform: translateX(0);
            opacity: 1;
        }
        to {
            transform: translateX(100%);
            opacity: 0;
        }
    }
    
    .animate-in {
        animation: fadeInUp 0.3s ease-out forwards;
    }
    
    .sr-only {
        position: absolute !important;
        width: 1px !important;
        height: 1px !important;
        padding: 0 !important;
        margin: -1px !important;
        overflow: hidden !important;
        clip: rect(0, 0, 0, 0) !important;
        white-space: nowrap !important;
        border: 0 !important;
    }
    
    .notification__content {
        display: flex;
        align-items: center;
        gap: 0.5rem;
        flex: 1;
    }
    
    .notification__close {
        background: none;
        border: none;
        color: inherit;
        cursor: pointer;
        padding: 0.25rem;
        border-radius: 0.25rem;
        margin-left: 0.5rem;
    }
    
    .notification__close:hover {
        background-color: rgba(255, 255, 255, 0.2);
    }
    
    input.error,
    textarea.error {
        border-color: #ef4444 !important;
        box-shadow: 0 0 0 3px rgba(239, 68, 68, 0.1) !important;
    }
`;
document.head.appendChild(style);

// Add additional CSS for smooth transitions
const additionalStyle = document.createElement('style');
additionalStyle.textContent = `
    /* Smooth theme transitions */
    * {
        transition: background-color var(--transition), color var(--transition), border-color var(--transition);
    }
    
    /* Language transition effects */
    [data-en][data-es] {
        transition: opacity 0.2s ease-out;
    }
    
    /* Control button animations */
    .control-btn {
        position: relative;
        overflow: hidden;
    }
    
    .control-btn::before {
        content: '';
        position: absolute;
        top: 50%;
        left: 50%;
        width: 0;
        height: 0;
        background: rgba(0, 0, 0, 0.1);
        border-radius: 50%;
        transform: translate(-50%, -50%);
        transition: width 0.3s ease, height 0.3s ease;
    }
    
    .control-btn:active::before {
        width: 100%;
        height: 100%;
    }
    
    [data-theme="dark"] .control-btn::before {
        background: rgba(255, 255, 255, 0.1);
    }
`;
document.head.appendChild(additionalStyle);
