import React from 'react';
import { motion } from 'framer-motion';
import { DollarSign, Calendar, MapPin } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';

const Projects = () => {
  const { t } = useLanguage();

  const projects = [
    {
      id: 'project1',
      title: t('projects.project1Title'),
      value: '$0.45M',
      status: 'Phase 1',
      location: 'Santa Tecla',
      completion: '2026',
      description: t('projects.project1Desc'),
      imgAlt: 'Modern rental units building in Santa Tecla',
      imgDesc: 'A sleek, multi-story rental building with glass balconies, reimagined in a fantastical, dream-like architectural style'
    },
    {
      id: 'project2',
      title: t('projects.project2Title'),
      value: '$5.0M',
      status: 'Phase 1',
      location: 'San Salvador',
      completion: '2026',
      description: t('projects.project2Desc'),
      imgAlt: 'Luxury apartment complex in San Salvador',
      imgDesc: 'Architectural rendering of a high-end residential complex with a pool, depicted with flowing, organic lines and glowing elements'
    },
    {
      id: 'project3',
      title: t('projects.project3Title'),
      value: '$7.0M',
      status: 'Phase 1',
      location: 'San Diego',
      completion: '2026',
      description: t('projects.project3Desc'),
      imgAlt: 'Sound Health Wellness Complex under construction',
      imgDesc: 'A large-scale wellness center visualized as a futuristic oasis of health with crystalline structures and light beams',
      imgSrc: '/images/projects/sound-health-wellness.png'
    },
    {
      id: 'project4',
      title: t('projects.project4Title'),
      value: '$0.3M',
      status: 'Phase 1',
      location: 'Centro Histórico',
      completion: '2026',
      description: t('projects.project4Desc'),
      imgAlt: 'Remodeled restaurant in the historic center',
      imgDesc: 'A stylishly remodeled restaurant facade with surreal, whimsical lighting and artistic flourishes at dusk'
    },
    {
      id: 'project5',
      title: t('projects.project5Title'),
      value: '$0.1M',
      status: 'Phase 2',
      location: 'Huizucar',
      completion: '2026',
      description: t('projects.project5Desc'),
      imgAlt: 'Custom family house in Huizucar',
      imgDesc: 'A beautiful, newly constructed family home with a spacious garden',
      imgSrc: '/images/projects/family-house-huizucar.jpg'
    },
    {
      id: 'project6',
      title: t('projects.project6Title'),
      value: '$7.0M',
      status: 'Phase 1',
      location: 'Santa Tecla',
      completion: '2026',
      description: t('projects.project6Desc'),
      imgAlt: 'Mont-Galia Apartments under construction',
      imgDesc: 'A modern, multi-story apartment building project envisioned with imaginative, gravity-defying architectural elements',
      imgSrc: '/images/projects/mont-galia-apartments.png'
    },
    {
      id: 'project7',
      title: t('projects.project7Title'),
      value: '$0.5M',
      status: 'Phase 1',
      location: 'San Diego',
      completion: '2026',
      description: t('projects.project7Desc'),
      imgAlt: 'Sound Health Villas in San Diego',
      imgDesc: 'A collection of exclusive, modern villas in a dream-like, serene resort setting with fantastical flora',
      imgSrc: '/images/projects/sound-health-villas.png'
    },
    {
      id: 'project8',
      title: t('projects.project8Title'),
      value: '$1.2M',
      status: 'Phase 1',
      location: 'Nuevo Cuscatlan',
      completion: '2026',
      description: t('projects.project8Desc'),
      imgAlt: 'Rental units in Nuevo Cuscatlan',
      imgDesc: 'A row of contemporary rental units featuring imaginative, glowing private balconies and artistic facades'
    },
    {
      id: 'project9',
      title: t('projects.project9Title'),
      value: '$0.175M',
      status: 'Phase 2',
      location: 'Punta Mango',
      completion: '2026',
      description: t('projects.project9Desc'),
      imgAlt: 'House in Punta Mango',
      imgDesc: 'A stunning beach house with a panoramic view of the ocean',
      imgSrc: '/images/projects/punta-mango-house.png'
    },
    {
      id: 'project10',
      title: t('projects.project10Title'),
      value: '$3.0M',
      status: 'Phase 1',
      location: 'La Posada de los Pájaros',
      completion: '2026',
      description: t('projects.project10Desc'),
      imgAlt: 'Luxury cabins at La Posada de los Pajaros',
      imgDesc: 'Elegant luxury wooden cabins nestled in a lush, enchanted forest with magical, glowing details'
    },
    {
      id: 'project11',
      title: 'ITzel',
      value: '$10.0M',
      status: 'Phase 3',
      location: 'Lake Ilopango',
      completion: '2040',
      description: 'Residential and Commercial Development focused on Wellness',
      imgAlt: 'ITzel Wellness Development at Lake Ilopango',
      imgDesc: 'A stunning wellness-focused development at sunset overlooking Lake Ilopango',
      imgSrc: '/images/projects/itzel-ilopango.png'
    }
  ];
  
  const ProjectCard = ({ project, index }) => (
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: index * 0.1 }}
        whileHover={{ y: -10 }}
        className="group relative"
      >
        <div className="bg-black/20 backdrop-blur-sm border border-white/10 rounded-2xl overflow-hidden hover:border-gcs-gold/50 transition-all duration-300">
          <div className="relative h-64 overflow-hidden">
             { project.imgSrc ?
                <img alt={project.imgAlt} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" src={project.imgSrc} />
                :
                <img alt={project.imgAlt} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" src="/images/projects/construction-placeholder.jpg" />
             }
            <div className="absolute inset-0 bg-gradient-to-t from-gcs-black via-gcs-black/50 to-transparent"></div>
            
            <div className="absolute top-4 right-4 bg-gradient-to-r from-gcs-gold to-yellow-500 px-4 py-2 rounded-full shadow-lg">
              <span className="text-gcs-black font-bold text-sm">{project.status}</span>
            </div>
          </div>

          <div className="p-6">
            <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-gcs-gold transition-colors">
              {project.title}
            </h3>
            <p className="text-gray-400 mb-4 leading-relaxed text-sm">
              {project.description}
            </p>

            <div className="grid grid-cols-3 gap-4">
              <div className="flex items-center space-x-2">
                <DollarSign className="text-gcs-gold" size={20} />
                <div>
                  <p className="text-xs text-gray-500">{t('projects.value')}</p>
                  <p className="text-white font-bold">{project.value}</p>
                </div>
              </div>

              <div className="flex items-center space-x-2">
                <MapPin className="text-gcs-gold" size={20} />
                <div>
                  <p className="text-xs text-gray-500">{t('projects.location')}</p>
                  <p className="text-white font-bold text-sm">{project.location}</p>
                </div>
              </div>

              <div className="flex items-center space-x-2">
                <Calendar className="text-gcs-gold" size={20} />
                <div>
                  <p className="text-xs text-gray-500">{t('projects.completion')}</p>
                  <p className="text-white font-bold">{project.completion}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
  );

  return (
    <section id="projects" className="py-24 relative overflow-hidden bg-gcs-black">
      <div className="absolute inset-0 bg-gradient-to-b from-gcs-black via-gray-900/50 to-gcs-black"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-gcs-gold font-semibold text-lg mb-2 block">{t('projects.tagline')}</span>
          <h2 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
            {t('projects.title')}
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            {t('projects.description')}
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-12 text-center"
        >
          <div className="inline-block bg-gradient-to-r from-gcs-gold/10 to-yellow-500/10 border border-gcs-gold/30 rounded-2xl p-8 backdrop-blur-sm">
            <p className="text-gray-300 text-lg mb-2">{t('projects.totalValue')}</p>
            <p className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-gcs-gold to-yellow-300 bg-clip-text text-transparent">
              $37,725,000
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;