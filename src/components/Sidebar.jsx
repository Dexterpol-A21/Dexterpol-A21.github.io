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
    const sections = document.querySelectorAll('section[id]');
    if (!sections.length) return;

    const observerOptions = {
      // Create a narrow "active zone" in the middle of the screen
      // This ensures short sections get highlighted when they pass through the center
      rootMargin: '-45% 0px -45% 0px',
      threshold: 0
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const alias = entry.target.getAttribute('data-section-alias');
          setActiveSection(alias || entry.target.id);
        }
      });
    }, observerOptions);

    sections.forEach(section => observer.observe(section));

    return () => observer.disconnect();
  }, []);

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
