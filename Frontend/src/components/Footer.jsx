import React from "react";
import { Link } from "react-router-dom";
import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
import SQAC from '../assets/LogoSQAC.png';

function Footer() {
  return (
    <footer className="w-full bg-gradient-to-br from-[#FFD1EA] to-purple-200 text-gray-800 px-6 py-10">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
        
       
        <div className="flex flex-col items-center md:items-start gap-3 text-center md:text-left">
          <Link to="/">
            <img src={SQAC} alt="Logo" className="w-12 h-12 mx-auto md:mx-0" />
          </Link>
          <span className="text-3xl font-bold text-pink-600">SQAC</span>
          <p className="text-sm sm:text-base text-gray-700 italic max-w-xs md:max-w-sm">
            "Software assurance isn't just about finding bugs — it's about building trust into every line of code."
          </p>
        </div>

        
        <nav className="flex flex-col sm:flex-row gap-4 sm:gap-8 text-base sm:text-lg text-gray-700 font-medium">
          <Link to="/about" className="hover:text-pink-600 transition">
            About Us
          </Link>
          <Link to="/team" className="hover:text-pink-600 transition">
            Team
          </Link>
          <Link to="/projects" className="hover:text-pink-600 transition">
            Projects
          </Link>
          <Link to="/events" className="hover:text-pink-600 transition">
            Events
          </Link>
        </nav>

        
        <div className="flex gap-4 text-pink-600 text-2xl">
          <a
            href="https://github.com/SQAC-Tech"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub className="hover:text-pink-800 transition" />
          </a>
          <a
            href="https://www.instagram.com/sqac.srmist/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram className="hover:text-pink-800 transition" />
          </a>
          <a
            href="https://www.linkedin.com/company/sqacsrm/posts/?feedView=all"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin className="hover:text-pink-800 transition" />
          </a>
        </div>
      </div>

      <div className="mt-8 text-center text-xl text-gray-600">
        © {new Date().getFullYear()} SQAC. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;
