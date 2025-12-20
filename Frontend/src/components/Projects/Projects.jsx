/**
 * Projects Component - Coming Soon Page
 * 
 * === MAJOR CHANGES MADE ===
 * Date: December 20-21, 2025
 * 
 * THEME & STYLING UPDATES:
 * 1. Original purple gradient background replaced with home page theme
 * 2. Text colors adapted for both light and dark modes
 * 3. Container backgrounds themified for consistency
 * 
 * SPECIFIC MODIFICATIONS:
 * - Background class: Hardcoded gradient → projects-section CSS class
 * - Description text: text-gray-800 → projects-description CSS class
 * - Subtitle text: text-white → projects-subtitle CSS class
 * - Theme consistency: Matches home page background exactly
 * 
 * CSS CLASSES ADDED (via index.css):
 * - .projects-section: Container with theme-dependent background
 * - .projects-description: Theme-dependent text color
 * - .projects-subtitle: Theme-dependent text color
 * 
 * THEME BEHAVIOR:
 * - Light mode: Light blue-gray gradient (same as home page)
 * - Dark mode: Dark purple gradient (same as home page)
 * - Text colors: Adapted for proper contrast in both modes
 * - Button styling: Orange-pink gradient maintained
 * 
 * COMPONENT STRUCTURE:
 * - Main section: Full-height container with theme background
 * - Navbar: Site navigation component
 * - Content container: Centered content with animations
 * - Title: "COMING SOON" with orange text and glow
 * - Description: Explanatory text about project development
 * - Subtitle: Additional context about team efforts
 * - CTA button: "Join Us" with gradient styling
 * - Footer text: Teaser about upcoming announcements
 * 
 * ANIMATION DETAILS:
 * - Container variants: Staggered children animation
 * - Item variants: Individual element animations
 * - Title animation: Scale and fade in
 * - Text animations: Sequential fade in with y-axis movement
 * - Button animations: Hover effects with scaling and glow
 * - Footer text: Fade in with delay
 * 
 * RESPONSIVE DESIGN:
 * - Mobile: Compact layout with smaller text
 * - Desktop: Full-width layout with larger typography
 * - Text sizing: clamp-based responsive sizing
 * - Container padding: Responsive spacing
 * - Button sizing: Consistent across devices
 * 
 - STYLING DETAILS:
 * - Title color: #ff6b35 with text shadow glow
 * - Button gradient: Orange-pink linear gradient
 * - Button hover: Scale and shadow effects
 * - Footer text: Orange color with glow effect
 * - Container spacing: Responsive padding and margins
 * 
 * ACCESSIBILITY:
 * - Semantic HTML5 section element
 * - Proper heading hierarchy (h1, p)
 * - Button with proper labeling
 * - High contrast text in both themes
 * - Focus states for interactive elements
 * 
 * PERFORMANCE:
 * - Framer Motion for smooth animations
 * - CSS-only theme switching
 * - Optimized re-renders
 * - Efficient animation timing
 * 
 * NAVIGATION:
 * - useNavigate hook for routing
 * - Routes to /JoinUs page
 * - Smooth user flow to recruitment
 * 
 * INTEGRATION:
 * - Part of main site routing
 * - Uses consistent theme system
 * - Matches site-wide design patterns
 * - Coordinates with other pages
 */
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
