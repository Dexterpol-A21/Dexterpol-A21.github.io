import React, { useState, useEffect } from 'react';
import RadialMenu from './RadialMenu';

const Sidebar = ({ items, logoPath = "/logo/portLogoLightNoBck.png", homeLink = "#hero" }) => {
  const [activeSection, setActiveSection] = useState('hero');
  const [progress, setProgress] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  // Default items if none provided
  const defaultItems = [
    { id: 'hero', icon: 'fa-home', label: 'Home' },
    { id: 'about', icon: 'fa-user', label: 'About' },
    { id: 'experience', icon: 'fa-briefcase', label: 'Experience' },
    { id: 'projects', icon: 'fa-folder', label: 'Projects' },
    { id: 'skills', icon: 'fa-code', label: 'Skills' },
    { id: 'contact', icon: 'fa-envelope', label: 'Contact' }
  ];

  const navItems = items || defaultItems;

  // Handle window resize to determine mobile state
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Scroll Progress
  useEffect(() => {
    const updateProgress = () => {
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight - windowHeight;
      const scrolled = window.scrollY;
      const newProgress = (scrolled / documentHeight) * 100;
      setProgress(Math.min(newProgress, 100));
    };

    window.addEventListener('scroll', updateProgress, { passive: true });
    return () => window.removeEventListener('scroll', updateProgress);
  }, []);

  // Section Observer
  useEffect(() => {
    const observerOptions = {
      // Create a narrow "active zone" in the middle of the screen
      // This ensures short sections get highlighted when they pass through the center
      rootMargin: '-45% 0px -45% 0px',
      threshold: 0
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          // If we are at the very top of the page, force the first section
          // This helps with initial load race conditions where content might shift
          if (window.scrollY < 100 && navItems.length > 0) {
             setActiveSection(navItems[0].id);
             return;
          }

          const alias = entry.target.getAttribute('data-section-alias');
          setActiveSection(alias || entry.target.id);
        }
      });
    }, observerOptions);

    // Function to observe all sections
    const observeSections = () => {
      const sections = document.querySelectorAll('section[id]');
      sections.forEach(section => observer.observe(section));
    };

    // Initial observation
    observeSections();

    // Watch for DOM changes to observe new sections (like those rendered by other React roots)
    const mutationObserver = new MutationObserver(() => {
      observeSections();
    });

    mutationObserver.observe(document.body, {
      childList: true,
      subtree: true
    });

    return () => {
      observer.disconnect();
      mutationObserver.disconnect();
    };
  }, [navItems]);

  if (isMobile) {
    return <RadialMenu items={navItems} logoPath={logoPath} activeSection={activeSection} />;
  }

  return (
    <nav className="sidebar" id="sidebar">
      <div className="sidebar__brand">
        <a href={homeLink} className="sidebar__brand-link">
          <img 
            src={logoPath}
            alt="PECL Logo" 
            className="sidebar__logo-img" 
            id="sidebar-logo" 
          />
        </a>
      </div>
      
      <ul className="sidebar__links">
        {navItems.map(item => (
          <li key={item.id}>
            <a 
              href={`#${item.id}`} 
              className={`sidebar__link ${activeSection === item.id ? 'active' : ''}`}
              data-tooltip={item.label}
            >
              <i className={`fas ${item.icon}`}></i>
            </a>
          </li>
        ))}
      </ul>
      
      <div className="sidebar__progress">
        <div 
          className="progress-bar" 
          id="progress-bar"
          style={{ height: `${progress}%` }}
        ></div>
      </div>
    </nav>
  );
};

export default Sidebar;
