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

function Footer() {
  const [success, setSuccess] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);

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

    const backendUrl =
      import.meta.env.VITE_API_BACKEND || "http://localhost:5000";

    try {
      await fetch(`${backendUrl}/api/contact`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(contactData),
      });
    } catch (err) {
      console.error("MongoDB save failed:", err);
    }

    setSuccess(true);
    e.target.reset();
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
          className="fixed bottom-6 right-6 z-50 bg-gradient-to-r from-orange-500 to-pink-500 text-white p-5 rounded-full shadow-lg hover:scale-110"
        >
          <FaArrowUp />
        </motion.button>
      )}

      {/* FOOTER */}
      <footer
        className="
          w-full px-6 py-16 backdrop-blur-sm
          bg-gradient-to-t from-violet-300 via-purple-200 to-cyan-200
          dark:from-zinc-950 dark:via-zinc-900 dark:to-zinc-800
          text-gray-800 dark:text-white
        "
      >
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="
              backdrop-blur-md rounded-xl p-8 shadow-2xl
              bg-white/80 dark:bg-black/70
              border border-rose-200 dark:border-gray-600
            "
          >
            <h2 className="text-3xl font-bold mb-6 text-center">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 via-pink-500 to-orange-500">
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

            <form onSubmit={handleSubmit} className="space-y-4">
              <input
                type="hidden"
                name="access_key"
                value="04602206-c2ae-44af-a679-d76004a657fc"
              />
              <input type="text" name="hp" className="hidden" />

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="relative">
                  <FaUser className="absolute left-3 top-1/2 -translate-y-1/2 text-orange-500" />
                  <input
                    name="name"
                    required
                    placeholder="Name"
                    className="w-full pl-12 pr-4 py-3 rounded-xl  dark:bg-black/50 bg-white border border-gray-700 text-black dark:text-white focus:ring-2 focus:ring-orange-400"
                  />
                </div>

                <div className="relative">
                  <FaEnvelope className="absolute left-3 top-1/2 -translate-y-1/2 text-orange-500" />
                  <input
                    name="email"
                    type="email"
                    required
                    placeholder="Email"
                    className="w-full pl-12 pr-4 py-3 rounded-xl dark:bg-black/50 bg-white border border-gray-700 text-black dark:text-white focus:ring-2 focus:ring-orange-400"
                  />
                </div>
              </div>

              <div className="relative">
                <FaRegComment className="absolute left-3 top-4 text-orange-500" />
                <textarea
                  name="message"
                  rows="5"
                  required
                  placeholder="Message"
                  className="w-full pl-12 pr-4 py-3 rounded-xl dark:bg-black/50 bg-white border border-gray-700 text-black dark:text-white focus:ring-2 focus:ring-orange-400"
                />
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
                <h3 className="text-2xl font-bold text-orange-400">SQAC</h3>
                <p className="text-sm italic text-gray-700 dark:text-gray-300 max-w-xs mt-2">
                  "Software assurance isn't just about finding bugs — it's about
                  building trust into every line of code."
                </p>
              </div>

              <div>
                <h4 className="font-bold mb-2">Quick Links</h4>
                <div className="flex flex-col gap-2 text-gray-700 dark:text-gray-300">
                  <Link to="/about">About</Link>
                  <Link to="/team">Team</Link>
                  <Link to="/projects">Projects</Link>
                  <Link to="/events">Events</Link>
                </div>
              </div>

              <div>
                <h4 className="font-bold mb-2">Contact</h4>
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  SRM Institute of Science & Technology<br />
                  Chennai, India
                </p>
                <div className="flex gap-4 text-xl mt-3">
                  <FaGithub />
                  <FaInstagram />
                  <FaLinkedin />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 text-center text-sm text-gray-600 dark:text-gray-400 border-t border-rose-200 dark:border-gray-700 pt-6">
          © {new Date().getFullYear()} SQAC. All rights reserved.
        </div>
      </footer>
    </>
  );
}

export default Footer;
