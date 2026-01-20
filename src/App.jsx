import React from 'react';
import { Helmet } from 'react-helmet';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Services from '@/components/Services';
import Projects from '@/components/Projects';
import Investment from '@/components/Investment';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import { Toaster } from '@/components/ui/toaster';
import { useLanguage } from '@/context/LanguageContext.jsx';
import { MessageCircle } from 'lucide-react';
import { motion } from 'framer-motion';

function App() {
  const { t } = useLanguage();

  const handleWhatsAppClick = () => {
    const phoneNumber = '+50372862529';
    const message = encodeURIComponent("Hello! I'm interested in your services.");
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, '_blank');
  };

  return (
    <>
      <Helmet>
        <title>{t('title')}</title>
        <meta name="description" content={t('description')} />
      </Helmet>
      <div className="min-h-screen bg-black">
        <Header />
        <main>
          <Hero />
          <About />
          <Services />
          <Projects />
          <Investment />
          <Contact />
        </main>
        <Footer />
        <Toaster />

        {/* WhatsApp Floating Button */}
        <motion.button
          className="fixed bottom-6 right-6 bg-gradient-to-r from-green-500 to-teal-500 text-white p-4 rounded-full shadow-lg hover:scale-110 transition-transform duration-300 z-50"
          onClick={handleWhatsAppClick}
          whileHover={{ scale: 1.1, rotate: 10 }}
          whileTap={{ scale: 0.9 }}
          aria-label="Chat on WhatsApp"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-message-circle"><path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z"/></svg>
        </motion.button>
      </div>
    </>
  );
}

export default App;