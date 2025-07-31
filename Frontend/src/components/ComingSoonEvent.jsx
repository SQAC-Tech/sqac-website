import React , {useEffect}from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

const ComingSoonPage = () => {
  const navigate = useNavigate();

  useEffect (() => {
  window.scrollTo(0, 0);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: 'spring',
        stiffness: 100,
        damping: 12,
        mass: 0.5,
      },
    },
  };

  return (
    <section className="min-h-[95vh] px-4 sm:px-6 py-10 sm:py-14 bg-gradient-to-b from-orange-200 via-pink-200 to-cyan-200">
      <motion.div
        initial="hidden"
        animate="visible"
        variants={containerVariants}
        className="min-h-screen flex items-center justify-center text-center"
      >
        <div className="max-w-3xl w-full px-6">
          <motion.h1
            variants={itemVariants}
            className="text-6xl md:text-8xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 via-pink-500 to-red-500 animate-glowBlink mb-8 leading-tight"
            style={{
              fontFamily: 'var(--font-head)',
              textShadow: '0 2px 10px rgba(236, 72, 153, 0.3)',
            }}
          >
            COMING SOON
          </motion.h1>

          <motion.p
            variants={itemVariants}
            className="mt-4 text-2xl md:text-3xl text-gray-800 font-medium max-w-2xl leading-snug mx-auto"
          >
            A new wave of <span className="text-pink-500 font-semibold">innovation and events</span> is on its way.
          </motion.p>

          <motion.p
            variants={itemVariants}
            className="mt-6 text-lg md:text-xl text-gray-600 max-w-2xl leading-relaxed mx-auto"
          >
            Our team at SQAC is curating impactful sessions, workshops, and competitions that blend learning with excitement.
          </motion.p>

          <motion.div
            variants={itemVariants}
            className="mt-10 flex justify-center"
          >
            <motion.button
              onClick={() => navigate('/JoinUs')}
              whileHover={{
                scale: 1.05,
                boxShadow: '0 5px 15px rgba(192, 38, 211, 0.3)',
              }}
              whileTap={{ scale: 0.98 }}
              className="px-10 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-full font-semibold shadow-lg transition-all duration-300"
            >
              Get Involved
            </motion.button>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="mt-12 text-gray-500 text-sm tracking-wider"
          >
            EXCITING EVENTS ARE ON THE HORIZON — STAY TUNED!
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default ComingSoonPage;
