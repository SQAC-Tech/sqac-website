 import React , {useEffect} from 'react'
import Navbar from '../HomePage/Navbar'
import { motion } from 'framer-motion'
import { useNavigate } from 'react-router-dom'

const Projects = () => {
  const navigate = useNavigate()

  useEffect(() => {
    // Add class to body to override purple theme
    document.body.classList.add('projects-page')
    
    // Cleanup when component unmounts
    return () => {
      document.body.classList.remove('projects-page')
    }
  }, [])

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
    <>
      <Navbar/>
      <section className="min-h-[95vh] px-4 sm:px-6 py-10 sm:py-14 projects-section">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={containerVariants}
          className="min-h-screen flex items-center justify-center text-center"
        >
          <div className="max-w-3xl w-full px-6">
            <motion.h1
              variants={itemVariants}
              className="text-6xl md:text-8xl font-bold mb-8 leading-tight"
              style={{
                fontFamily: 'var(--font-head)',
                color: '#ff6b35',
                textShadow: '0 0 40px rgba(255, 107, 53, 0.8)'
              }}
            >
              COMING SOON
            </motion.h1>

            <motion.p
              variants={itemVariants}
              className="mt-4 text-2xl md:text-3xl projects-description font-medium max-w-2xl leading-snug mx-auto"
            >
              We're building something{' '}
              <span className="text-pink-500 font-semibold">truly special</span>
            </motion.p>

            <motion.p
              variants={itemVariants}
              className="mt-6 text-lg md:text-xl projects-subtitle max-w-2xl leading-relaxed mx-auto"
            >
              Our team is working tirelessly to deliver an experience that exceeds all expectations.
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
                className="px-10 py-3 text-white rounded-full font-semibold shadow-lg transition-all duration-300"
              style={{
                background: 'linear-gradient(90deg, #ff6b35, #ec4899)',
                boxShadow: '0 5px 15px rgba(255, 107, 53, 0.3)'
              }}
              >
                Join Us
              </motion.button>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="mt-12 text-sm tracking-wider"
              style={{
                color: '#ff6b35',
                textShadow: '0 0 20px rgba(255, 107, 53, 0.6)'
              }}
            >
              SOMETHING BIG IS BREWING.. BE THE FIRST TO KNOW          
            </motion.div>
          </div>
        </motion.div>
      </section>
    </>
  )
}

export default Projects
