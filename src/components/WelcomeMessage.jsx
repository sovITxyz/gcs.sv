import React from 'react';
import { motion } from 'framer-motion';

const WelcomeMessage = () => {
  return (
    <motion.p
      className='text-xl md:text-2xl text-white max-w-2xl mx-auto'
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5, delay: 0.5 }}
    >
			Hello there! we are <span className='font-semibold text-purple-300'>GCS El Salvador 🔨</span>, Grupo Integral de Construcciones y Servicios Integrated engineering, design, and project development from concept to delivery.
    </motion.p>
  );
};

export default WelcomeMessage;