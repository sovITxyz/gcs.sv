import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Zap } from 'lucide-react'; 
import { useLanguage } from '@/context/LanguageContext';
import { MessageCircle } from 'lucide-react'; 

const Footer = () => {
  const { t } = useLanguage();
  const currentYear = new Date().getFullYear();

  const handleEmailClick = (e) => {
    e.preventDefault();
    const email = 'services' + '@' + 'gcs.sv';
    window.location.href = `mailto:${email}`;
  };

  const handleWhatsAppClick = () => {
    const phoneNumber = '+50366941522';
    const message = encodeURIComponent("Hello! I'm interested in your services.");
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, '_blank');
  };

  const socialLinks = [
    { icon: Zap, href: 'https://primal.net/p/nprofile1qqsyvgxdpmlr4urscq55uy79kgu5vmwk3xmxs5crlf3w7gvlv5yqc2qgv650m', label: 'Nostr' },
    { icon: MessageCircle, href: '#', label: 'WhatsApp', onClick: handleWhatsAppClick }, 
  ];

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const SocialLink = ({ social }) => (
    <motion.a
      key={social.label}
      href={social.href}
      onClick={social.onClick}
      target={social.href === '#' ? '_self' : '_blank'}
      rel="noopener noreferrer"
      whileHover={{ scale: 1.1, y: -3 }}
      className="w-10 h-10 bg-white/10 hover:bg-gradient-to-br hover:from-gcs-gold hover:to-yellow-500 rounded-lg flex items-center justify-center transition-all duration-300"
      aria-label={social.label}
    >
      <social.icon className="text-white hover:text-gcs-black" size={20} />
    </motion.a>
  );

  return (
    <footer className="relative bg-black border-t border-white/10 py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center space-x-3 mb-4 cursor-pointer" onClick={() => scrollToSection('hero')}>
              <img src="/images/logos/logo.png" alt="GCS Logo" className="h-12 object-contain" />
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              {t('footer.description')}
            </p>
          </div>

          <div>
            <h3 className="text-white font-bold mb-4">{t('footer.servicesTitle')}</h3>
            <ul className="space-y-2">
              <li><button onClick={() => scrollToSection('services')} className="text-gray-400 hover:text-gcs-gold transition-colors text-sm text-left">{t('footer.service1')}</button></li>
              <li><button onClick={() => scrollToSection('services')} className="text-gray-400 hover:text-gcs-gold transition-colors text-sm text-left">{t('footer.service2')}</button></li>
              <li><button onClick={() => scrollToSection('services')} className="text-gray-400 hover:text-gcs-gold transition-colors text-sm text-left">{t('footer.service3')}</button></li>
              <li><button onClick={() => scrollToSection('services')} className="text-gray-400 hover:text-gcs-gold transition-colors text-sm text-left">{t('footer.service4')}</button></li>
              <li><button onClick={() => scrollToSection('services')} className="text-gray-400 hover:text-gcs-gold transition-colors text-sm text-left">{t('footer.service5')}</button></li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-bold mb-4">{t('footer.companyTitle')}</h3>
            <ul className="space-y-2">
              <li><button onClick={() => scrollToSection('about')} className="text-gray-400 hover:text-gcs-gold transition-colors text-sm text-left">{t('footer.linkAbout')}</button></li>
              <li><button onClick={() => scrollToSection('projects')} className="text-gray-400 hover:text-gcs-gold transition-colors text-sm text-left">{t('footer.linkProjects')}</button></li>
              <li><button onClick={() => scrollToSection('investment')} className="text-gray-400 hover:text-gcs-gold transition-colors text-sm text-left">{t('footer.linkInvestment')}</button></li>
              <li><button onClick={() => scrollToSection('contact')} className="text-gray-400 hover:text-gcs-gold transition-colors text-sm text-left">{t('footer.linkContact')}</button></li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-bold mb-4">{t('footer.socialTitle')}</h3>
            <div className="flex space-x-3">
              {socialLinks.map((social) => <SocialLink key={social.label} social={social} />)}
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 text-center">
          <p className="text-gray-400 text-sm">
            © {currentYear} Grupo Integral de Construcciones y Servicios GCS. {t('footer.copyright')}
          </p>
        </div>
      </div>
    </footer>
  );
};
export default Footer;