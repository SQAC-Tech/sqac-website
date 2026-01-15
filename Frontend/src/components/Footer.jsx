import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import {
  FaGithub,
  FaInstagram,
  FaLinkedin,
  FaArrowUp,
  FaUser,
  FaEnvelope,
  FaRegComment,
  FaPaperPlane,
} from "react-icons/fa";
import { motion } from "framer-motion";
import SQAC from "../assets/LogoSQAC.png";
import { useTheme } from "../contexts/ThemeContext";

function Footer() {
  const [success, setSuccess] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);

  const { isDarkMode } = useTheme();

  useEffect(() => {
    const handleScroll = () => setShowScrollTop(window.scrollY > 300);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () =>
    window.scrollTo({ top: 0, behavior: "smooth" });

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);

    const contactData = {
      name: formData.get("name"),
      email: formData.get("email"),
      message: formData.get("message"),
    };

    await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    // 🗄️ Save the same data in MongoDB (new feature)
    const mongoResponse = await fetch(`${backendUrl}/api/contact`, {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify(contactData),
});

if (!mongoResponse.ok) {
  const errorData = await mongoResponse.json().catch(() => ({ message: "Unknown error" }));
  console.error("MongoDB save failed:", errorData);
} else {
  console.log("Data saved to MongoDB successfully!");
}


    if (emailResponse.ok) {
      setSuccess(true);
      e.target.reset();
    }
  };

  return (
    <>
      {/* Scroll to Top */}
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

      <footer className={`w-full px-6 py-16 backdrop-blur-sm ${isDarkMode ? 'bg-gradient-to-t from-black via-purple-950 to-black text-white' : 'bg-white/90 text-slate-800'}`}>
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className={`backdrop-blur-md rounded-xl p-8 shadow-2xl w-full ${isDarkMode ? 'bg-black/70 border border-gray-600' : 'bg-white/80 border border-gray-200'}`}
          >
            <h2 className="text-3xl font-bold mb-6 text-center">
              <span
                className={`text-transparent bg-clip-text ${
                  isDarkMode
                    ? "bg-gradient-to-r from-orange-500 via-pink-500 to-orange-500"
                    : "bg-gradient-to-r from-purple-500 via-pink-500 to-purple-500"
                }`}
              >
                Get in Touch
              </span>
            </h2>

            {success && (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-green-600 dark:text-green-400 bg-green-100 dark:bg-green-950 rounded-md p-3 text-center mb-4"
              >
                ✅ Thank you — your message has been sent.
              </motion.div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4 relative">
              <input type="hidden" name="access_key" value="04602206-c2ae-44af-a679-d76004a657fc" />
              {/* Honeypot to deter bots */}
              <input type="text" name="hp" tabIndex="-1" autoComplete="off" className="hidden" />

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="relative">
                  <FaUser className="absolute left-3 top-1/2 -translate-y-1/2 text-orange-500" />
                  <input
                    name="name"
                    required
                    placeholder=" "
                    className={`peer w-full pl-12 pr-4 py-3 rounded-xl border shadow-sm transition focus:outline-none focus:ring-2 focus:ring-orange-400 focus:border-orange-400 ${isDarkMode ? 'bg-black/50 border-gray-700 text-white placeholder-transparent' : 'bg-white border-orange-200 text-slate-800 placeholder-transparent'}`}
                  />
                  <label className={`absolute left-12 top-1 text-xs text-slate-500 transition-all duration-150 peer-placeholder-shown:top-3 peer-placeholder-shown:text-sm peer-focus:top-1 peer-focus:text-xs ${isDarkMode ? 'text-gray-300' : 'text-slate-500'}`}>
                    Name
                  </label>
                </div>

                <div className="relative">
                  <FaEnvelope className="absolute left-3 top-1/2 -translate-y-1/2 text-orange-500" />
                  <input
                    name="email"
                    type="email"
                    required
                    placeholder=" "
                    className={`peer w-full pl-12 pr-4 py-3 rounded-xl border shadow-sm transition focus:outline-none focus:ring-2 focus:ring-orange-400 focus:border-orange-400 ${isDarkMode ? 'bg-black/50 border-gray-700 text-white placeholder-transparent' : 'bg-white border-orange-200 text-slate-800 placeholder-transparent'}`}
                  />
                  <label className={`absolute left-12 top-1 text-xs text-slate-500 transition-all duration-150 peer-placeholder-shown:top-3 peer-placeholder-shown:text-sm peer-focus:top-1 peer-focus:text-xs ${isDarkMode ? 'text-gray-300' : 'text-slate-500'}`}>
                    Email
                  </label>
                </div>
              </div>

              <div className="relative">
                <FaRegComment className="absolute left-3 top-4 text-orange-500" />
                <textarea
                  name="message"
                  rows="5"
                  required
                  placeholder=" "
                  className={`peer w-full pl-12 pr-4 py-3 rounded-xl border shadow-sm transition focus:outline-none focus:ring-2 focus:ring-orange-400 focus:border-orange-400 ${isDarkMode ? 'bg-black/50 border-gray-700 text-white placeholder-transparent' : 'bg-white border-orange-200 text-slate-800 placeholder-transparent'}`}
                ></textarea>
                <label className={`absolute left-12 top-2 text-xs text-slate-500 transition-all duration-150 peer-placeholder-shown:top-4 peer-placeholder-shown:text-sm peer-focus:top-2 peer-focus:text-xs ${isDarkMode ? 'text-gray-300' : 'text-slate-500'}`}>
                  Message
                </label>
              </div>

              <button
                type="submit"
                className="w-full flex items-center justify-center gap-3 bg-gradient-to-r from-orange-500 to-pink-500 py-3 rounded-xl font-semibold shadow-lg hover:scale-[1.02] text-white"
              >
                <FaPaperPlane />
                Send Message
              </button>
            </form>
          </motion.div>

          {/* Right Section */}
          <div className="flex flex-col justify-center">
            <div className="flex flex-col lg:flex-row gap-10">
              <div>
                <Link to="/">
                  <img src={SQAC} className="w-12 h-12 mb-3" />
                </Link>
                <h3 className="text-[27px] font-bold">
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 via-pink-500 to-orange-500">SQAC</span>
                </h3>
                <p className={`text-sm italic mt-2 max-w-xs ${isDarkMode ? 'text-white' : 'text-slate-700'}`}>
                  "Software assurance isn't just about finding bugs — it's about
                  building trust into every line of code."
                </p>
              </div>

              {/* Block 2 - Quick Links */}
              <div className="flex-1">
                <h4 className={`text-lg font-bold mb-2 ${isDarkMode ? 'text-white' : 'text-slate-800'}`}>Quick Links</h4>
                <div className={`flex flex-col gap-2 text-md font-medium ${isDarkMode ? 'text-white' : 'text-slate-700'}`}>
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
                <h4 className={`text-lg font-semibold mb-2 ${isDarkMode ? 'text-white' : 'text-slate-800'}`}>Contact Info</h4>
                <p className={`text-sm mb-3 leading-relaxed ${isDarkMode ? 'text-white' : 'text-slate-700'}`}>
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
                    <FaGithub className={`${isDarkMode ? 'text-gray-300 hover:text-orange-500' : 'text-gray-500 hover:text-orange-500'}`} />
                  </a>
                  <a
                    href="https://www.instagram.com/sqac.srmist/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <FaInstagram className={`${isDarkMode ? 'text-gray-300 hover:text-orange-500' : 'text-gray-500 hover:text-orange-500'}`} />
                  </a>
                  <a
                    href="https://www.linkedin.com/company/sqacsrm/posts/?feedView=all"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <FaLinkedin className={`${isDarkMode ? 'text-gray-300 hover:text-orange-500' : 'text-gray-500 hover:text-orange-500'}`} />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Footer bottom line */}
        <div className={`mt-12 text-center text-sm pt-6 border-t ${isDarkMode ? 'text-gray-400 border-gray-600' : 'text-slate-600 border-gray-200'}`}>
          © {new Date().getFullYear()} SQAC. All rights reserved.
        </div>
      </footer>
    </>
  );
}

export default Footer;
