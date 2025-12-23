import React from 'react';
import { motion } from 'framer-motion';
import mineverse from '../../assets/image.png'; // Event image

const Events = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#b6f0ff] via-[#dcb6ff] to-[#7be6f0] flex justify-center items-center px-4 py-10">

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        whileHover={{ scale: 1.02 }}
        className="bg-gradient-to-r from-[#b6f0ff] to-[#dcb6ff] shadow-lg rounded-xl overflow-hidden max-w-sm w-full border border-white/30 backdrop-blur-md"
      >

        {/* Event Image */}
        <motion.img
          src={mineverse}
          alt="MineVerse Event"
          className="w-full h-48 object-cover"
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1 }}
        />

        {/* Event Content */}
        <div className="p-6 text-center">
          <motion.h2
            className="text-3xl font-bold text-transparent bg-gradient-to-r from-pink-500 to-purple-500 bg-clip-text"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.5 }}
          >
            MineVerse
          </motion.h2>

          <motion.p
            className="text-gray-700 mt-2 font-medium"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.5 }}
          >
            Compete in coding challenges, trade resources, and build your empire in this thrilling strategy-based event.
          </motion.p>

          {/* Event Details */}
          <motion.div
            className="mt-4 text-sm text-gray-600"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7, duration: 0.5 }}
          >
            <p><span className="font-semibold">Date:</span> Coming Soon</p>
            <p><span className="font-semibold">Venue:</span> To be announced</p>
          </motion.div>

          {/* Button */}
          <motion.a
            href="https://mineverse-sqac.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mt-5 px-6 py-2 text-white rounded-full bg-gradient-to-r from-pink-500 to-purple-500 hover:scale-105 transition-transform duration-300"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.9, duration: 0.5 }}
            whileHover={{ scale: 1.1 }}
          >
            Know More
          </motion.a>
        </div>
      </motion.div>
    </div>
  );
};

export default Events;
