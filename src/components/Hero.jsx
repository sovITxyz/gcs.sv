import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Building2, Zap, TrendingUp } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/context/LanguageContext';
const Hero = () => {
  const {
    t
  } = useLanguage();
  const scrollToSection = id => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth'
      });
    }
  };
  return <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 bg-black">
      <div className="absolute inset-0 bg-gradient-to-br from-gcs-gold/10 via-transparent to-gcs-gold/5"></div>
      
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 left-10 w-72 h-72 bg-gcs-gold rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-gcs-gold/80 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div initial={{
          opacity: 0,
          x: -50
        }} animate={{
          opacity: 1,
          x: 0
        }} transition={{
          duration: 0.8
        }}>
            <motion.div initial={{
            opacity: 0,
            y: 20
          }} animate={{
            opacity: 1,
            y: 0
          }} transition={{
            delay: 0.2
          }} className="inline-block mb-4 px-4 py-2 bg-gcs-gold/20 border border-gcs-gold/50 rounded-full">
              <span className="text-gcs-gold font-semibold">{t('hero.tagline')}</span>
            </motion.div>

            <h1 className="text-5xl md:text-7xl font-bold mb-6 text-gcs-gold leading-tight" style={{
            textShadow: '2px 2px 4px rgba(0,0,0,0.7)'
          }}>
              {t('hero.title')}
            </h1>

            <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed">
              {t('hero.subtitle')}
            </p>

            <div className="flex flex-wrap gap-6 mb-8">
              <div className="flex items-center space-x-3 bg-black/20 backdrop-blur-sm px-4 py-3 rounded-lg border border-white/10">
                <Building2 className="text-gcs-gold" size={24} />
                <div>
                  <p className="text-sm text-gray-400">{t('hero.statProjects')}</p>
                  <p className="text-2xl font-bold text-white">{t('hero.statValue')}</p>
                </div>
              </div>

              <div className="flex items-center space-x-3 bg-black/20 backdrop-blur-sm px-4 py-3 rounded-lg border border-white/10">
                <Zap className="text-gcs-gold" size={24} />
                <div>
                  <p className="text-sm text-gray-400">{t('hero.statSpecialty')}</p>
                  <p className="text-lg font-bold text-white">{t('hero.statEMF')}</p>
                </div>
              </div>

              <div className="flex items-center space-x-3 bg-black/20 backdrop-blur-sm px-4 py-3 rounded-lg border border-white/10">
                <TrendingUp className="text-gcs-gold" size={24} />
                <div>
                  <p className="text-sm text-gray-400">{t('hero.statStatus')}</p>
                  <p className="text-lg font-bold text-white">{t('hero.statGrowing')}</p>
                </div>
              </div>
            </div>

            <div className="flex flex-wrap gap-4">
              <Button onClick={() => scrollToSection('about')} size="lg" className="bg-gradient-to-r from-gcs-gold to-yellow-500 hover:from-gcs-gold-dark hover:to-yellow-600 text-black font-semibold px-8 py-6 text-lg shadow-2xl shadow-gcs-gold/40">
                Company Overview
                <ArrowRight className="ml-2" size={20} />
              </Button>

              <Button onClick={() => scrollToSection('projects')} size="lg" variant="outline" className="border-2 border-white/30 text-white hover:bg-white/10 hover:border-gcs-gold px-8 py-6 text-lg backdrop-blur-sm">
                {t('hero.btnProjects')}
              </Button>
            </div>
          </motion.div>

          <motion.div initial={{
          opacity: 0,
          x: 50
        }} animate={{
          opacity: 1,
          x: 0
        }} transition={{
          duration: 0.8,
          delay: 0.3
        }} className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl shadow-gcs-gold/10">
              <img alt="Modern construction GCS" class="w-full h-[500px] object-cover" src="/images/hero-construction.jpg" />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>;
};
export default Hero;