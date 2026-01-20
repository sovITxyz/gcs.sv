import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Menu, X, Globe } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/context/LanguageContext.jsx';
const Header = () => {
  const {
    t,
    language,
    setLanguage
  } = useLanguage();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  const scrollToSection = id => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth'
      });
      setIsMobileMenuOpen(false);
    }
  };
  const navItems = [{
    label: t('header.navHome'),
    id: 'hero'
  }, {
    label: t('header.navAbout'),
    id: 'about'
  }, {
    label: t('header.navServices'),
    id: 'services'
  }, {
    label: t('header.navProjects'),
    id: 'projects'
  }, {
    label: t('header.navInvestment'),
    id: 'investment'
  }, {
    label: t('header.navContact'),
    id: 'contact'
  }];
  const toggleLanguage = () => {
    setLanguage(language === 'en' ? 'es' : 'en');
  };
  return <motion.header initial={{
    y: -100
  }} animate={{
    y: 0
  }} className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-black/95 backdrop-blur-lg shadow-2xl shadow-gcs-gold/10' : 'bg-transparent'}`}>
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center cursor-pointer" onClick={() => scrollToSection('hero')}>
            <motion.img src="/images/logos/logo.png" alt="GCS Logo" className="h-12 object-contain origin-left" whileHover={{
            scale: 3,
            transition: {
              duration: 0.3
            }
          }} />
          </div>

          <nav className="hidden md:flex items-center space-x-6">
            {navItems.map(item => <button key={item.id} onClick={() => scrollToSection(item.id)} className="text-white hover:text-gcs-gold transition-colors font-medium">
                {item.label}
              </button>)}
            <Button variant="ghost" size="sm" className="text-white hover:bg-white/10" onClick={toggleLanguage}>
              <Globe size={18} className="mr-2" />
              {language.toUpperCase()}
            </Button>
          </nav>
          
          <div className="flex items-center md:hidden">
            <Button variant="ghost" size="sm" className="text-white hover:bg-white/10 mr-2" onClick={toggleLanguage}>
              <Globe size={18} className="mr-2" />
              {language.toUpperCase()}
            </Button>
            <Button variant="ghost" size="icon" className="text-white" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </Button>
          </div>
        </div>

        {isMobileMenuOpen && <motion.nav initial={{
        opacity: 0,
        y: -20
      }} animate={{
        opacity: 1,
        y: 0
      }} className="md:hidden mt-4 pb-4 space-y-3">
            {navItems.map(item => <button key={item.id} onClick={() => scrollToSection(item.id)} className="block w-full text-left text-white hover:text-gcs-gold transition-colors font-medium py-2">
                {item.label}
              </button>)}
          </motion.nav>}
      </div>
    </motion.header>;
};
export default Header;