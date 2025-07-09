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
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#FFD1EA] to-purple-200 px-4 py-12">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="backdrop-blur-md bg-white/30 border border-white/20 rounded-xl p-8 max-w-md w-full shadow-2xl"
      >
        <h2 className="text-3xl font-bold text-center mb-6 text-purple-700">
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
            value="b9b073d7-78e3-4607-8102-4bc69c3f696f"
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
      
    </div>
  );
}

export default ContactUs;
