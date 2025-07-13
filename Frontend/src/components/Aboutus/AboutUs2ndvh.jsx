import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const services = {
  webdev: {
    title: 'Web Development',
    desc: 'We build responsive websites using React, Node.js, and full-stack tech.',
    features: ['Custom Web Apps', 'E-commerce', 'API Development', 'DB Design']
  },
  aiml: {
    title: 'AI/ML',
    desc: 'Automate and gain insights with intelligent AI/ML systems.',
    features: ['Analytics', 'NLP', 'Computer Vision', 'Recommendations']
  },
  creatives: {
    title: 'Creatives',
    desc: 'We create stunning designs and brand experiences.',
    features: ['Brand Design', 'UI/UX', 'Motion Graphics', 'Illustrations']
  },
  corporate: {
    title: 'Corporate',
    desc: 'Optimize operations with our digital corporate solutions.',
    features: ['Consulting', 'Automation', 'Transformation', 'Project Mgmt']
  }
};

const serviceCards = [
  { id: 'webdev', name: 'Web Dev', icon: '🌐' },
  { id: 'aiml', name: 'AI/ML', icon: '🤖' },
  { id: 'creatives', name: 'Creatives', icon: '🎨' },
  { id: 'corporate', name: 'Corporate', icon: '🏢' }
];

const ServicesSection = () => {
  const [selected, setSelected] = useState(null);
  return (
    <div className="relative min-h-screen bg-white overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-t from-pink-300 to-purple-100" />
      <div className="absolute inset-0 flex justify-center items-center z-0">
        <div className="w-full max-w-6xl h-[600px] rounded-[40px] bg-pink-100/50 backdrop-blur-sm" />
      </div>
      <div className="relative z-10 flex flex-col items-center px-4 pt-16">
        <motion.h2 className="text-4xl md:text-5xl font-bold text-center mb-12 bg-gradient-to-b from-[#3B0A4B] to-[#7B2A8C] bg-clip-text text-transparent font-poppins" initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          Services We Provide
        </motion.h2>
        <div className={`grid gap-12 w-full max-w-7xl ${selected ? 'lg:grid-cols-2' : 'grid-cols-1'}`}>
          <div className="grid grid-cols-2 gap-8 max-w-2xl mx-auto">
            {serviceCards.map((card, i) => (
              <motion.div key={card.id} onClick={() => setSelected(card.id)} className={`relative p-10 rounded-2xl cursor-pointer flex flex-col items-center text-center min-h-[200px] ${selected === card.id ? 'bg-gradient-to-br from-pink-200 to-purple-200 shadow-xl scale-105' : 'bg-white/80 hover:bg-gradient-to-br hover:from-pink-100 hover:to-purple-100 shadow-md'}`} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: i * 0.1 }} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <div className="text-5xl mb-6">{card.icon}</div>
                <h3 className="text-2xl font-semibold text-gray-800">{card.name}</h3>
                {selected === card.id && (
                  <motion.div className="absolute top-3 right-3 w-3 h-3 bg-pink-500 rounded-full" initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ duration: 0.3 }} />
                )}
              </motion.div>
            ))}
          </div>
          <AnimatePresence>
            {selected && (
              <motion.div key="info-panel" className="flex justify-center items-center -ml-6" initial={{ opacity: 0, x: 100 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: 100 }} transition={{ duration: 0.5 }}>
                <div className="relative p-10 bg-white/90 border border-pink-200 rounded-2xl shadow-xl w-full max-w-lg min-h-[300px]">
                  <button onClick={() => setSelected(null)} className="absolute top-3 right-3 text-xl font-bold text-pink-800 hover:text-pink-900">✕</button>
                  <h3 className="text-3xl font-bold mb-4 bg-gradient-to-b from-[#3B0A4B] to-[#7B2A8C] bg-clip-text text-transparent font-poppins">{services[selected].title}</h3>
                  <p className="text-gray-600 mb-6 text-[17px] leading-relaxed">{services[selected].desc}</p>
                  <ul className="space-y-3">
                    {services[selected].features.map((f, i) => (
                      <motion.li key={i} className="flex items-center text-gray-700 text-[16px]" initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.3 + i * 0.1 }}>
                        <span className="w-2 h-2 bg-pink-500 rounded-full mr-3" />
                        {f}
                      </motion.li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
};

export default ServicesSection;
