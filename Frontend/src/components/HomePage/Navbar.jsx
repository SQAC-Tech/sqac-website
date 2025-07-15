import React from 'react';
import SQAC from '../../assets/LogoSQAC.png';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Link } from 'react-router-dom';

function Navbar() {

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between bg-white/30 backdrop-blur-md border-b border-white/20 px-4 sm:px-6 py-3">
      <div className="flex items-center">
        <Link to='/'><img src={SQAC} alt="Logo" className="w-10 h-10" /></Link>
      </div>

      <ul className="hidden sm:flex gap-8 absolute left-1/2 transform -translate-x-1/2 font-sans text-xl">
        <li><Link to="/about" className="text-gray-800 hover:text-purple-500">About</Link></li>
        <li><Link to="/team" className="text-gray-800 hover:text-purple-500">Team</Link></li>
        <li><Link to="/projects" className="text-gray-800 hover:text-purple-500">Projects</Link></li>
        <li><Link to="/events" className="text-gray-800 hover:text-purple-500">Events</Link></li>
      </ul>

      <Link to='/recruitment'>
        <button className="rounded-2xl px-4 cursor-pointer sm:px-5 py-2 bg-gradient-to-r from-purple-400 to-pink-300 text-white hover:scale-105 transition">
          Join Us
        </button>
      </Link>
    </nav>
  );
}

export default Navbar;
