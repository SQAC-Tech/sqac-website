/**
 * Footer Component
 * Updated on: December 20, 2025
 * Changes: Enhanced footer with improved styling, scroll-to-top functionality, and contact form
 * Purpose: Displays site footer with navigation, social links, and contact information
 */
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
    <>
      {/* Scroll to Top Button */}
      {showScrollTop && (
        <motion.button
          onClick={scrollToTop}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed bottom-6 right-6 z-50 bg-gradient-to-r from-orange-500 to-pink-500 hover:scale-110 text-white p-5 cursor-pointer rounded-full shadow-lg"
          aria-label="Scroll to top"
        >
          <FaArrowUp />
        </motion.button>
      )}

      <footer className="w-full bg-gradient-to-t from-black via-purple-950 to-black text-white px-6 py-16">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Left Column: Contact Form */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="backdrop-blur-md bg-black/70 border border-gray-600 rounded-xl p-8 shadow-2xl w-full"
          >
            <h2 className="text-3xl font-bold mb-6 text-center">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 via-pink-500 to-orange-500">
                Get in Touch
              </span>
            </h2>

            {success && (
              <div className="text-green-400 text-center mb-4">
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
                <label className="block text-white font-semibold mb-1">
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  required
                  className="w-full px-4 py-2 rounded-lg border border-gray-600 bg-black/50 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-500"
                  placeholder="Your Name"
                />
              </div>

              <div className="mb-4">
                <label className="block text-white font-semibold mb-1">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  required
                  className="w-full px-4 py-2 rounded-lg border border-gray-600 bg-black/50 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-500"
                  placeholder="you@example.com"
                />
              </div>

              <div className="mb-6">
                <label className="block text-white font-semibold mb-1">
                  Message
                </label>
                <textarea
                  name="message"
                  rows="4"
                  required
                  className="w-full px-4 py-2 rounded-lg border border-gray-600 bg-black/50 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-500"
                  placeholder="Your message..."
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-gradient-to-r from-orange-500 to-pink-500 text-white font-bold py-3 rounded-lg hover:scale-105 transition transform duration-300"
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
                <h3 className="text-[27px] font-bold">
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 via-pink-500 to-orange-500">SQAC</span>
                </h3>
                <p className="text-sm text-black dark:text-white italic mt-2 max-w-xs">
                  "Software assurance isn't just about finding bugs — it's about
                  building trust into every line of code."
                </p>
              </div>

              {/* Block 2 - Quick Links */}
              <div className="flex-1">
                <h4 className="text-lg font-bold mb-2 text-black dark:text-white">Quick Links</h4>
                <div className="flex flex-col gap-2 text-md text-black dark:text-white font-medium">
                  <Link to="/about" className="hover:text-orange-500 transition">
                    About Us
                  </Link>
                  <Link to="/team" className="hover:text-orange-500 transition">
                    Team
                  </Link>
                  <Link to="/projects" className="hover:text-orange-500 transition">
                    Projects
                  </Link>
                  <Link to="/events" className="hover:text-orange-500 transition">
                    Events
                  </Link>
                </div>
              </div>

              {/* Block 3 - Address & Socials */}
              <div className="flex-1">
                <h4 className="text-lg font-semibold mb-2 text-black dark:text-white">Contact Info</h4>
                <p className="text-sm text-black dark:text-white mb-3 leading-relaxed">
                  SRM Institute of Science & Technology,
                  <br />
                  Kattankulathur, Chennai 603203
                  <br />
                  India
                </p>
                <div className="flex gap-4 text-[30px] mt-2">
                  <a
                    href="https://github.com/SQAC-Tech"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <FaGithub className="hover:text-orange-500 text-gray-300" />
                  </a>
                  <a
                    href="https://www.instagram.com/sqac.srmist/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <FaInstagram className="hover:text-orange-500 text-gray-300" />
                  </a>
                  <a
                    href="https://www.linkedin.com/company/sqacsrm/posts/?feedView=all"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <FaLinkedin className="hover:text-orange-500 text-gray-300" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Footer bottom line */}
        <div className="mt-12 text-center text-sm text-gray-400 border-t border-gray-600 pt-6">
          © {new Date().getFullYear()} SQAC. All rights reserved.
        </div>
      </footer>
    </>
  );
}

export default Footer;
