import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';

const Contact = () => {
  const { t } = useLanguage();
  const [isEmailVisible, setIsEmailVisible] = useState(false);

  const handleEmailReveal = () => {
    setIsEmailVisible(true);
  };

  const contactInfo = [
    {
      icon: Phone,
      title: t('contact.info1Title'),
      value: '+503 7286 2529',
      href: 'https://wa.me/50372862529',
      color: 'from-gcs-gold to-yellow-500'
    },
    {
      icon: Mail,
      title: t('contact.info2Title'),
      value: 'services@gcs.sv',
      color: 'from-gcs-gold to-yellow-500'
    },
    {
      icon: MapPin,
      title: t('contact.info3Title'),
      value: 'San Salvador, El Salvador',
      color: 'from-gcs-gold to-yellow-500'
    }
  ];

  return (
    <section id="contact" className="py-24 relative overflow-hidden bg-gcs-black">
      <div className="absolute inset-0 bg-gradient-to-b from-gcs-black via-gray-900/30 to-gcs-black"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-gcs-gold font-semibold text-lg mb-2 block">{t('contact.tagline')}</span>
          <h2 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
            {t('contact.title')}
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            {t('contact.description')}
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {contactInfo.map((info, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="group"
            >
              <div className="bg-black/20 backdrop-blur-sm border border-white/10 rounded-2xl p-8 text-center hover:border-gcs-gold/50 transition-all duration-300 flex flex-col justify-center items-center h-full">
                <div className={`w-16 h-16 bg-gradient-to-br ${info.color} rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                  <info.icon className="text-gcs-black" size={32} />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{info.title}</h3>
                {info.title === t('contact.info2Title') ? (
                  isEmailVisible ? (
                    <a href="mailto:services@gcs.sv" className="text-gray-400 hover:text-gcs-gold transition-colors">
                      {info.value}
                    </a>
                  ) : (
                    <button onClick={handleEmailReveal} className="bg-gcs-gold/20 text-gcs-gold px-4 py-2 rounded-lg font-semibold hover:bg-gcs-gold/40 transition-colors">
                      Click to reveal email
                    </button>
                  )
                ) : (
                  <a href={info.href} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-gcs-gold transition-colors">
                    {info.value}
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Contact;