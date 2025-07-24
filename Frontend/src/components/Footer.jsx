import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FaGithub, FaInstagram, FaLinkedin, FaArrowUp } from "react-icons/fa";
import { motion } from "framer-motion";
import SQAC from "../assets/LogoSQAC.png";

function Footer() {
  const [success, setSuccess] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    if (response.ok) {
      setSuccess(true);
      e.target.reset();
    }
  };

  return (
    <footer className="relative w-full   text-gray-800 px-6 pt-16 pb-32 overflow-hidden">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 z-10 relative">
        {/* Left Column: Contact Form */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="backdrop-blur-md bg-white/30 border border-white/20 rounded-xl p-8 shadow-2xl w-full"
        >
          <h2 className="text-3xl font-bold text-purple-700 mb-6 text-center">
            Get in Touch
          </h2>

            {success && (
              <div className="text-green-700 text-center mb-4">
                Thank you! Your message has been sent.
              </div>
            )}

            <form onSubmit={handleSubmit}>
              <input
                type="hidden"
                name="access_key"
                value="04602206-c2ae-44af-a679-d76004a657fc"
              />

              <div className="mb-4">
                <label className="block text-purple-900 font-semibold mb-1">
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  required
                  className="w-full px-4 py-2 rounded-lg border border-white/30 bg-white/20 text-purple-900 placeholder-purple-800 focus:outline-none focus:ring-2 focus:ring-purple-400"
                  placeholder="Your Name"
                />
              </div>

              <div className="mb-4">
                <label className="block text-purple-900 font-semibold mb-1">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  required
                  className="w-full px-4 py-2 rounded-lg border border-white/30 bg-white/20 text-purple-900 placeholder-purple-800 focus:outline-none focus:ring-2 focus:ring-purple-400"
                  placeholder="you@example.com"
                />
              </div>

              <div className="mb-6">
                <label className="block text-purple-900 font-semibold mb-1">
                  Message
                </label>
                <textarea
                  name="message"
                  rows="4"
                  required
                  className="w-full px-4 py-2 rounded-lg border border-white/30 bg-white/20 text-purple-900 placeholder-purple-800 focus:outline-none focus:ring-2 focus:ring-purple-400"
                  placeholder="Your message..."
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-gradient-to-r from-purple-400 to-pink-400 text-white font-bold py-3 rounded-lg hover:scale-105 transition transform duration-300"
              >
                Send Message
              </button>
            </form>
          </motion.div>

          {/* Right Column: Info & Links */}
          <div className="flex flex-col justify-center w-full">
            <div className="flex flex-col lg:flex-row justify-between gap-10">
              {/* Block 1 - Logo & Quote */}
              <div className="flex-1">
                <Link to="/">
                  <img src={SQAC} alt="SQAC Logo" className="w-12 h-12 mb-3" />
                </Link>
                <h3 className="text-[27px] font-bold text-pink-600">SQAC</h3>
                <p className="text-sm text-gray-700 italic mt-2 max-w-xs">
                  "Software assurance isn't just about finding bugs — it's about
                  building trust into every line of code."
                </p>
              </div>

              {/* Block 2 - Quick Links */}
              <div className="flex-1">
                <h4 className="text-lg font-bold mb-2">Quick Links</h4>
                <div className="flex flex-col gap-2 text-md text-gray-700 font-medium">
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
                </div>
              </div>

              {/* Block 3 - Address & Socials */}
              <div className="flex-1">
                <h4 className="text-lg font-semibold mb-2">Contact Info</h4>
                <p className="text-sm text-gray-700 mb-3 leading-relaxed">
                  SRM Institute of Science & Technology,
                  <br />
                  Kattankulathur, Chennai 603203
                  <br />
                  India
                </p>
                <div className="flex gap-4 text-pink-600 text-[30px] mt-2">
                  <a
                    href="https://github.com/SQAC-Tech"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <FaGithub className="hover:text-pink-800" />
                  </a>
                  <a
                    href="https://www.instagram.com/sqac.srmist/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <FaInstagram className="hover:text-pink-800" />
                  </a>
                  <a
                    href="https://www.linkedin.com/company/sqacsrm/posts/?feedView=all"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <FaLinkedin className="hover:text-pink-800" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

      
      <div className="absolute bottom-0 left-0 w-full">
        <svg
          viewBox="0 0 1440 320"
          className="w-full h-32"
          preserveAspectRatio="none"
        >
          <defs>
            <linearGradient id="waveGradient" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#a855f7" />     
              <stop offset="50%" stopColor="#ec4899" />     
              <stop offset="100%" stopColor="#f97316" />    
            </linearGradient>
          </defs>
          <path
            fill="url(#waveGradient)"
            d="M0,160L48,149.3C96,139,192,117,288,122.7C384,128,480,160,576,181.3C672,203,768,213,864,213.3C960,213,1056,203,1152,186.7C1248,171,1344,149,1392,138.7L1440,128V320H0Z"
          ></path>
        </svg>
      </div>

      <div className="mt-6 text-center text-sm text-gray-600 relative z-10">
        © {new Date().getFullYear()} SQAC. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;
