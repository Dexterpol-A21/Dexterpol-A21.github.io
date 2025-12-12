import { useState, useEffect } from 'react';

export const useLanguage = () => {
  const [language, setLanguage] = useState('en');

  useEffect(() => {
    // Initial read
    setLanguage(localStorage.getItem('language') || 'en');

    const handleLanguageChange = () => {
      setLanguage(localStorage.getItem('language') || 'en');
    };

    // Listen for custom event
    window.addEventListener('languageChanged', handleLanguageChange);
    // Listen for storage events
    window.addEventListener('storage', handleLanguageChange);

    return () => {
      window.removeEventListener('languageChanged', handleLanguageChange);
      window.removeEventListener('storage', handleLanguageChange);
    };
  }, []);

  return {
    language,
    setLanguage: (newLang) => {
      localStorage.setItem('language', newLang);
      window.dispatchEvent(new Event('languageChanged'));
    }
  };
};

export const useTheme = () => {
  const [theme, setTheme] = useState('light');

  useEffect(() => {
    // Initial read
    const savedTheme = localStorage.getItem('theme') || 'light';
    setTheme(savedTheme);
    document.documentElement.setAttribute('data-theme', savedTheme);

    const handleThemeChange = () => {
      const newTheme = localStorage.getItem('theme') || 'light';
      setTheme(newTheme);
      document.documentElement.setAttribute('data-theme', newTheme);
    };

    window.addEventListener('themeChanged', handleThemeChange);
    window.addEventListener('storage', handleThemeChange);

    return () => {
      window.removeEventListener('themeChanged', handleThemeChange);
      window.removeEventListener('storage', handleThemeChange);
    };
  }, []);

  return {
    theme,
    toggleTheme: () => {
      const newTheme = theme === 'light' ? 'dark' : 'light';
      localStorage.setItem('theme', newTheme);
      window.dispatchEvent(new Event('themeChanged'));
    }
  };
};
