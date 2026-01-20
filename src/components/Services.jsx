import React from 'react';
import { motion } from 'framer-motion';
import { FileText, DraftingCompass, CheckSquare, Layers, ClipboardCheck } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext.jsx';

const Services = () => {
  const { t } = useLanguage();
  
  const capabilities = [
    { icon: ClipboardCheck, text: t('services.capability1') },
    { icon: Layers, text: t('services.capability2') },
    { icon: DraftingCompass, text: t('services.capability3') },
    { icon: CheckSquare, text: t('services.capability4') },
    { icon: FileText, text: t('services.capability5') },
  ];

  return (
    <section id="services" className="py-24 relative overflow-hidden bg-gcs-black">
      <div className="absolute inset-0 bg-gradient-to-b from-gcs-black via-gray-900/30 to-gcs-black"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-gcs-gold font-semibold text-lg mb-2 block">{t('services.tagline')}</span>
          <h2 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
            {t('services.title')}
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            {t('services.description')}
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          <ServiceCard
            icon={FileText}
            title={t('services.section1Title')}
            description={t('services.section1Desc')}
            items={[
              t('services.service1_1'),
              t('services.service1_2'),
            ]}
          />
          <ServiceCard
            icon={DraftingCompass}
            title={t('services.section2Title')}
            description={t('services.section2Desc')}
            subSections={[
              { title: t('services.service2_1_title'), desc: t('services.service2_1_desc') },
              { title: t('services.service2_2_title'), desc: t('services.service2_2_desc') },
            ]}
          />
        </div>
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h3 className="text-3xl md:text-4xl font-bold text-white mb-8 text-center">{t('services.capabilitiesTitle')}</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {capabilities.map((capability, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center p-4 bg-black/20 rounded-lg border border-white/10"
              >
                <div className="flex justify-center mb-3">
                  <div className="w-12 h-12 bg-gradient-to-br from-gcs-gold to-yellow-500 rounded-lg flex items-center justify-center">
                    <capability.icon className="text-gcs-black" size={24} />
                  </div>
                </div>
                <p className="text-gray-300 text-sm">{capability.text}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

const ServiceCard = ({ icon: Icon, title, description, items, subSections }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6 }}
    whileHover={{ y: -10 }}
    className="group bg-black/20 backdrop-blur-sm border border-white/10 rounded-2xl p-8 h-full hover:border-gcs-gold/50 transition-all duration-300"
  >
    <div className="flex items-center mb-4">
      <div className="w-14 h-14 bg-gradient-to-br from-gcs-gold to-yellow-500 rounded-xl flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300 shadow-lg">
        <Icon className="text-gcs-black" size={28} />
      </div>
      <h3 className="text-2xl font-bold text-white group-hover:text-gcs-gold transition-colors">{title}</h3>
    </div>
    <p className="text-gray-400 mb-6">{description}</p>
    
    {items && (
      <ul className="space-y-3">
        {items.map((item, index) => (
          <li key={index} className="flex items-start">
            <CheckSquare className="text-gcs-gold mr-3 mt-1 flex-shrink-0" size={20} />
            <span className="text-gray-300">{item}</span>
          </li>
        ))}
      </ul>
    )}
    
    {subSections && (
      <div className="space-y-4">
        {subSections.map((section, index) => (
          <div key={index}>
            <h4 className="font-semibold text-white text-lg mb-2">{section.title}</h4>
            <p className="text-gray-400">{section.desc}</p>
          </div>
        ))}
      </div>
    )}
  </motion.div>
);

export default Services;