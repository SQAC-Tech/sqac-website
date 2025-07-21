import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

const ComingSoonPage = () => {

  const navigate = useNavigate();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2
      }
    }
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
        mass: 0.5
      }
    }
  };

  const rocketVariants = {
    hidden: { 
      scale: 0.5,
      opacity: 0,
      y: 50
    },
    visible: {
      scale: 1,
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 150,
        damping: 12,
        delay: 0.8
      }
    },
    float: {
      y: [-15, 15, -15],
      rotate: [0, 5, -5, 0],
      transition: {
        duration: 6,
        repeat: Infinity,
        ease: "easeInOut"
      }
    },
    glow: {
      scale: [1, 1.1, 1],
      transition: {
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  return (
  <section className="min-h-[95vh] px-4 sm:px-6 py-10 sm:py-14 bg-gradient-to-b from-orange-100 to-cyan-200">
  <motion.div
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      className="min-h-screen flex flex-col justify-center items-center text-center px-4 font-head"
    >
      <motion.div 
        variants={itemVariants}
        className="text-lg md:text-xl text-pink-500 font-medium mb-2 tracking-wider"
      >
        PREPARE FOR LIFTOFF
      </motion.div>

      <motion.h1 
        variants={itemVariants}
        className="text-6xl md:text-8xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 via-pink-500 to-red-500 animate-glowBlink mb-8 leading-tight"
        style={{ fontFamily: 'var(--font-head)', textShadow: '0 2px 10px rgba(236, 72, 153, 0.3)' }}
      >
        COMING SOON
      </motion.h1>
      
      <motion.p 
        variants={itemVariants}
        className="mt-4 text-2xl md:text-3xl text-gray-800 font-medium max-w-2xl leading-snug"
      >
        We're building something <span className="text-pink-500 font-semibold">truly special</span>
      </motion.p>

      <motion.p 
        variants={itemVariants}
        className="mt-6 text-lg md:text-xl text-gray-600 max-w-2xl leading-relaxed"
      >
        Our team is working tirelessly to deliver an experience that exceeds all expectations.
      </motion.p>
      
      <motion.div
    variants={rocketVariants}
    initial="hidden"
    animate={["visible", "float", "glow"]}
    className="mt-16 mb-12 text-7xl cursor-pointer"
    whileHover={{
      scale: 1.15,
      transition: {
        type: "spring",
        stiffness: 200,
        damping: 10,
      }
    }}  
    whileTap={{
      scale: 0.95,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 15,
      }
    }}
  >
    🚀
  </motion.div>

      <motion.div 
        variants={itemVariants}
        className="mt-8 flex flex-col sm:flex-row gap-4"
      >
        <motion.button

          onClick={() => navigate('/JoinUs')}          
          whileHover={{ 
            scale: 1.05,
            boxShadow: '0 5px 15px rgba(192, 38, 211, 0.3)'
          }}
          whileTap={{ scale: 0.98 }}
          className="px-10 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-full font-semibold shadow-lg transition-all duration-300"
        >
          Join Us
        </motion.button>
        
      </motion.div>

      <motion.div 
        variants={itemVariants}
        className="mt-12 text-gray-500 text-sm tracking-wider"
      >
        BE THE FIRST TO KNOW WHEN WE LAUNCH
      </motion.div>
    </motion.div>
    </section>
  );
};

export default ComingSoonPage;