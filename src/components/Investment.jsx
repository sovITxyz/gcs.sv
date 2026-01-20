import React from 'react';
import { motion } from 'framer-motion';
import { TrendingUp, PieChart, Target, Rocket, CheckCircle, Bitcoin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useToast } from '@/components/ui/use-toast';
import { useLanguage } from '@/context/LanguageContext';

const Investment = () => {
  const { t } = useLanguage();
  const { toast } = useToast();

  const benefits = [
    t('investment.benefit1'),
    t('investment.benefit2'),
    t('investment.benefit3'),
    t('investment.benefit4'),
    t('investment.benefit5'),
    t('investment.benefit6')
  ];

  const stats = [
    { icon: TrendingUp, label: t('investment.stat1'), value: '500%', color: 'from-gcs-gold to-yellow-500' },
    { icon: PieChart, label: t('investment.stat2'), value: '12+', color: 'from-gcs-gold to-yellow-500' },
    { icon: Target, label: t('investment.stat3'), value: '98%', color: 'from-gcs-gold to-yellow-500' },
    { icon: Rocket, label: t('investment.stat4'), value: '2025', color: 'from-gcs-gold to-yellow-500' }
  ];

  const handleInvestmentClick = () => {
    toast({
      title: "🚧 This feature isn't implemented yet",
      description: "But don't worry! You can request it in your next prompt! 🚀",
      duration: 5000,
    });
  };

  return (
    <section id="investment" className="py-24 relative overflow-hidden bg-gcs-black">
      <div className="absolute inset-0 bg-gradient-to-b from-gcs-black via-gray-900/30 to-gcs-black"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-gcs-gold font-semibold text-lg mb-2 block">{t('investment.tagline')}</span>
          <h2 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
            {t('investment.title')}
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            {t('investment.description')}
          </p>
        </motion.div>

        <div className="grid md:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
              className="relative group"
            >
              <div className="bg-black/20 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:border-gcs-gold/50 transition-all duration-300">
                <div className={`w-14 h-14 bg-gradient-to-br ${stat.color} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                  <stat.icon className="text-gcs-black" size={28} />
                </div>
                <p className="text-gray-400 text-sm mb-2">{stat.label}</p>
                <p className="text-3xl font-bold text-white">{stat.value}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-6">
              {t('investment.whyInvestTitle')}
            </h3>
            <div className="space-y-4">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="flex items-start space-x-3"
                >
                  <CheckCircle className="text-gcs-gold flex-shrink-0 mt-1" size={24} />
                  <p className="text-gray-300 text-lg">{benefit}</p>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mt-8 bg-gradient-to-r from-orange-500/10 to-yellow-500/10 border border-orange-500/30 rounded-xl p-6 backdrop-blur-sm"
            >
              <div className="flex items-center space-x-4 mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-yellow-500 rounded-full flex items-center justify-center shadow-lg">
                  <Bitcoin className="text-white" size={28} />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-white">Bitcoin Friendly</h4>
                  <p className="text-orange-400 text-sm">We Accept Bitcoin</p>
                </div>
              </div>
              <p className="text-gray-300 leading-relaxed">
                As a Bitcoin-friendly company, we embrace the future of finance and are proud to operate in beautiful El Salvador, the first country to adopt Bitcoin as legal tender. We accept Bitcoin for investments and transactions.
              </p>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl shadow-gcs-gold/10">
              <img alt="Investment in construction" className="w-full h-96 object-cover" src="/images/investment.jpg" />
              <div className="absolute inset-0 bg-gradient-to-t from-gcs-black via-transparent to-transparent"></div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Investment;