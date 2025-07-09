import React from 'react';
import { FiArrowRight } from 'react-icons/fi';
import SQAC from '../../assets/LogoSQAC.png';
import { motion, useScroll, useTransform } from 'framer-motion';

function Navbar() {
  const { scrollY } = useScroll();
  const textOpacity = useTransform(scrollY, [0, 100], [1, 0]);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between bg-white/30 backdrop-blur-md border-b border-white/20 px-4 sm:px-6 py-3">
      <div className="flex items-center">
        <img src={SQAC} alt="Logo" className="w-10 h-10" />
      </div>

      <motion.div
        className="absolute left-1/2 -translate-x-1/2 text-sm sm:text-base text-gray-800 font-medium pointer-events-none"
        style={{ opacity: textOpacity }}
      >
        Scroll to explore ↓
      </motion.div>

      
      <button className="rounded-2xl px-4 sm:px-5 py-2 bg-gradient-to-r from-purple-400 to-pink-300 text-white hover:scale-105 transition">
        Join Us
      </button>
    </nav>
  );
}

export default Navbar;
