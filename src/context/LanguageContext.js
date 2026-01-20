import React, { createContext, useState, useContext, useEffect } from 'react';
import en from '@/locales/en.json';
import es from '@/locales/es.json';

const LanguageContext = createContext(null);

const translations = {
  en,
  es,
};

export const LanguageProvider = ({ children }) => {
  const getInitialLanguage = () => {
    const savedLang = localStorage.getItem('language');
    if (savedLang && translations[savedLang]) {
      return savedLang;
    }
    const browserLang = navigator.language.split('-')[0];
    return browserLang === 'es' ? 'es' : 'en';
  };

  const [language, setLanguage] = useState(getInitialLanguage);

  useEffect(() => {
    localStorage.setItem('language', language);
  }, [language]);

  const t = (key) => {
    const keys = key.split('.');
    let result = translations[language];
    for (const k of keys) {
      if (result && typeof result === 'object' && k in result) {
        result = result[k];
      } else {
        return key;
      }
    }
    return result;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};