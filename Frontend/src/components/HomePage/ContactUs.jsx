import React, { useState } from "react";
import { motion } from "framer-motion";


function ContactUs() {
  const [success, setSuccess] = useState(false);

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
    <div className="min-h-screen flex items-center justify-center px-4 py-12" style={{background: 'linear-gradient(135deg, #0a0014 0%, #1a0033 25%, #2d1b69 50%, #1a0033 75%, #0a0014 100%)'}}>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="backdrop-blur-md bg-dark-surface/70 border border-gray-600 rounded-xl p-8 max-w-md w-full shadow-2xl cursor-pointer"
        whileHover={{
          backgroundColor: 'rgba(255, 107, 53, 0.15)',
          borderColor: '#ff6b35',
          boxShadow: '0 0 40px rgba(255, 107, 53, 0.4)',
          scale: 1.02
        }}
      >
        <h2 className="text-3xl font-bold mb-6 text-center">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#951D13] via-[#f34a82] to-[#F0A01F]">
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
            value="b9b073d7-78e3-4607-8102-4bc69c3f696f"
          />

          <div className="mb-4">
            <label className="block text-white font-semibold mb-1">
              Name
            </label>
            <input
              type="text"
              name="name"
              required
              className="w-full px-4 py-2 rounded-lg border border-gray-600 bg-dark-primary/50 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-500 hover:border-orange-500 transition-all duration-300"
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
              className="w-full px-4 py-2 rounded-lg border border-gray-600 bg-dark-primary/50 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-500 hover:border-orange-500 transition-all duration-300"
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
              className="w-full px-4 py-2 rounded-lg border border-gray-600 bg-dark-primary/50 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-500 hover:border-orange-500 transition-all duration-300"
              placeholder="Your message..."
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full bg-gradient-to-r from-[#951D13] via-[#f34a82] to-[#F0A01F] text-white font-bold py-3 rounded-lg hover:scale-105 transition transform duration-300"
          >
            Send Message
          </button>
        </form>
      </motion.div>
      
    </div>
  );
}

export default ContactUs;
