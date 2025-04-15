// Add page heading for SEO (invisible but good for crawlers)
document.addEventListener('DOMContentLoaded', function() {
    const mainContent = document.querySelector('main');
    const seoHeading = document.createElement('h1');
    seoHeading.textContent = 'Paul Eduardo Contreras Lobato - Desarrollador Web';
    seoHeading.style.position = 'absolute';
    seoHeading.style.overflow = 'hidden';
    seoHeading.style.clip = 'rect(0 0 0 0)';
    seoHeading.style.height = '1px';
    seoHeading.style.width = '1px';
    seoHeading.style.margin = '-1px';
    seoHeading.style.padding = '0';
    seoHeading.style.border = '0';
    mainContent.prepend(seoHeading);
    
    // Mobile navigation toggle
    const navSlide = () => {
        const burger = document.querySelector('.burger');
        const nav = document.querySelector('.nav-links');
        const navLinks = document.querySelectorAll('.nav-links li');
        
        burger.addEventListener('click', () => {
            // Toggle Nav
            nav.classList.toggle('nav-active');
            
            // Animate Links
            navLinks.forEach((link, index) => {
                if (link.style.animation) {
                    link.style.animation = '';
                } else {
                    link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.3}s`;
                }
            });
            
            // Burger Animation
            burger.classList.toggle('toggle');
        });
    };
    
    navSlide();
});
