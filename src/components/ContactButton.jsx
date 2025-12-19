import React, { useState, useEffect } from 'react';

const ContactButton = ({ 
  textEn = "Send Message", 
  textEs = "Enviar Mensaje", 
  href = null, 
  icon = "fas fa-paper-plane",
  isSubmit = false,
  className = "btn btn--primary btn--full"
}) => {
  const [language, setLanguage] = useState(localStorage.getItem('language') || 'en');

  useEffect(() => {
    const handleLanguageChange = (e) => {
      if (e.detail && e.detail.language) {
        setLanguage(e.detail.language);
      }
    };

    window.addEventListener('languageChanged', handleLanguageChange);
    
    const handleStorageChange = () => {
        setLanguage(localStorage.getItem('language') || 'en');
    };
    window.addEventListener('storage', handleStorageChange);

    return () => {
      window.removeEventListener('languageChanged', handleLanguageChange);
      window.removeEventListener('storage', handleStorageChange);
    };
  }, []);

  const currentText = language === 'es' ? textEs : textEn;

  if (href) {
    return (
      <a href={href} className={className}>
        {icon && <i className={icon}></i>}
        {icon && " "}
        <span>{currentText}</span>
      </a>
    );
  }

  return (
    <button type={isSubmit ? "submit" : "button"} className={className}>
      {icon && <i className={icon}></i>}
      {icon && " "}
      <span>{currentText}</span>
    </button>
  );
};

export default ContactButton;
