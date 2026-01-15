import React from 'react';
import { motion } from 'framer-motion';
// resolve asset via Vite-compatible URL and lazy-load
const mineverse = new URL('../../assets/image.png', import.meta.url).href;

const Events = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#b6f0ff] via-[#dcb6ff] to-cyan-200 flex justify-center items-center px-4 py-10">

      <motion.div
        initial={{ opacity: 0, y: 28 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: 'easeOut' }}
        whileHover={{ scale: 1.01 }}
        className="bg-white/6 dark:bg-black/60 backdrop-blur-md shadow-2xl rounded-2xl overflow-hidden max-w-md w-full border border-white/10"
      >

        {/* Event Image */}
        <motion.img
          src={mineverse}
          alt="MineVerse Event"
          loading="lazy"
          className="w-full h-56 sm:h-48 object-cover"
          initial={{ scale: 1.05 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.9 }}
        />

        {/* Event Content */}
        <div className="p-6 text-center">
          <motion.h2
            className="text-2xl sm:text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-500"
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.18, duration: 0.45 }}
          >
            MineVerse
          </motion.h2>

          <motion.p
            className="text-sm sm:text-base text-gray-700 dark:text-gray-200 mt-3"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.32, duration: 0.45 }}
          >
            Compete in coding challenges, trade resources, and build your empire in this strategy-based event.
          </motion.p>

          {/* Event Details */}
          <motion.div
            className="mt-4 text-sm text-gray-600 dark:text-gray-300"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.45, duration: 0.45 }}
          >
            <p><span className="font-semibold">Date:</span> 23rd August, 2025</p>
            <p><span className="font-semibold">Venue:</span> Turing Hall</p>
          </motion.div>

          {/* Button */}
          <div className="mt-6 flex items-center justify-center gap-3">
            <motion.a
              href="https://mineverse-sqac.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-gradient-to-r from-pink-500 to-purple-500 text-white font-semibold shadow-md hover:scale-105 transition-transform"
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.62, duration: 0.45 }}
            >
              Know More
            </motion.a>

            
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Events;