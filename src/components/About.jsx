import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';
const About = () => {
  const {
    t
  } = useLanguage();
  const expertiseAreas = [t('about.expertise1'), t('about.expertise2'), t('about.expertise3'), t('about.expertise4'), t('about.expertise5')];
  return <section id="about" className="py-24 relative overflow-hidden bg-gcs-black">
      <div className="absolute inset-0 bg-gradient-to-b from-gcs-black via-gray-900/50 to-gcs-black"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div initial={{
        opacity: 0,
        y: 30
      }} whileInView={{
        opacity: 1,
        y: 0
      }} viewport={{
        once: true
      }} transition={{
        duration: 0.6
      }} className="text-center mb-16">
          <span className="text-gcs-gold font-semibold text-lg mb-2 block">{t('about.tagline')}</span>
          <h2 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
            {t('about.title')}
          </h2>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            {t('about.description')}
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <motion.div initial={{
          opacity: 0,
          x: -30
        }} whileInView={{
          opacity: 1,
          x: 0
        }} viewport={{
          once: true
        }} transition={{
          duration: 0.6
        }} className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl shadow-gcs-gold/10">
              <img alt="GCS engineering team" class="w-full h-full object-cover" src="/images/about-team.jpg" />
              <div className="absolute inset-0 bg-gradient-to-t from-gcs-black/50 via-transparent to-transparent"></div>
            </div>
          </motion.div>
          <motion.div initial={{
          opacity: 0,
          x: 30
        }} whileInView={{
          opacity: 1,
          x: 0
        }} viewport={{
          once: true
        }} transition={{
          duration: 0.6
        }} className="bg-black/20 backdrop-blur-sm border border-white/10 rounded-2xl p-8">
            <h3 className="text-3xl font-bold text-white mb-6">{t('about.expertiseTitle')}</h3>
            <div className="space-y-4">
              {expertiseAreas.map((item, index) => <motion.div key={index} initial={{
              opacity: 0,
              x: 20
            }} whileInView={{
              opacity: 1,
              x: 0
            }} viewport={{
              once: true
            }} transition={{
              duration: 0.4,
              delay: index * 0.1
            }} className="flex items-start space-x-3">
                  <CheckCircle className="text-gcs-gold flex-shrink-0 mt-1" size={24} />
                  <p className="text-gray-300 text-lg">{item}</p>
                </motion.div>)}
            </div>
          </motion.div>
        </div>

        <motion.div initial={{
        opacity: 0,
        y: 30
      }} whileInView={{
        opacity: 1,
        y: 0
      }} viewport={{
        once: true
      }} transition={{
        duration: 0.6
      }} className="bg-gradient-to-br from-gcs-gold/10 to-yellow-500/10 border border-gcs-gold/30 rounded-3xl p-8 md:p-12 backdrop-blur-sm">
          <div className="text-center">
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
              {t('about.portfolioTitle')}
            </h3>
            <p className="text-gray-300 text-xl leading-relaxed max-w-3xl mx-auto mb-6">
              {t('about.portfolioDesc')}
            </p>
            <p className="text-gray-300 text-xl leading-relaxed max-w-3xl mx-auto mb-6">
              {t('about.visionDesc1')}
            </p>
            <p className="text-gray-300 text-xl leading-relaxed max-w-3xl mx-auto mb-6">
              {t('about.visionDesc2')}
            </p>
            <p className="text-gray-300 text-xl leading-relaxed max-w-3xl mx-auto mb-6">
              {t('about.visionDesc3')}
            </p>
            <p className="text-gray-300 text-xl leading-relaxed max-w-3xl mx-auto">
              {t('about.visionDesc4')}
            </p>
          </div>
        </motion.div>
      </div>
    </section>;
};
export default About;