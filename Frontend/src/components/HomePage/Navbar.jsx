import React from 'react';
import { FiArrowRight } from 'react-icons/fi';
import SQAC from '../../assets/LogoSQAC.png';

function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between bg-white/30 backdrop-blur-md border-b border-white/20 px-4 sm:px-6 py-3">
      <div className="flex items-center">
        <img src={SQAC} alt="Logo" className="w-10 h-10" />
      </div>
      <div className="flex items-center gap-2 sm:gap-4">
        <button
          onClick={() => {
            document.getElementById('launch-schedule')?.scrollIntoView({
              behavior: 'smooth',
            });
          }}
          className="flex items-center gap-1 text-sm sm:text-base text-gray-700 hover:text-gray-900 transition"
        >
          Skip to Main Content <FiArrowRight className="text-base sm:text-lg" />
        </button>
        <button className="rounded-2xl px-4 sm:px-5 py-2 bg-gradient-to-r from-purple-400 to-pink-300 text-white hover:scale-105 transition">
          Join Us
        </button>
      </div>
    </nav>
  );
}

export default Navbar;
