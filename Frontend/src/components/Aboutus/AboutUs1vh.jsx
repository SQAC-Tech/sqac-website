import React from "react";
import { motion } from "framer-motion";
import TeamPic from '../../assets/Demo_SQAC_Team.jpg'
const AboutUs = () => {
  return (
    <div className="min-h-screen bg-white">
      <div className="relative w-full min-h-screen overflow-hidden">
        {/* Background gradient */}
        <div
          className="absolute inset-0"
          style={{
            background: "linear-gradient(180deg, #FFD1EA80 0%, #F8F4FD 100%)",
          }}
        />

        {/* Pink transparent box */}
        <div
          className="absolute left-1/2 -translate-x-1/2 w-[80%] h-[440px] rounded-[40px] z-10"
          style={{
            background: "rgba(255, 209, 234, 0.6)",
            top: "40px",
            backdropFilter: "blur(8px)",
            WebkitBackdropFilter: "blur(8px)",
          }}
        />

        {/* Foreground content */}
        <div className="relative z-20 flex flex-col justify-center items-center min-h-screen px-4 text-center">
          {/* Animate Heading (from top) */}
          <motion.h1
            initial={{ y: -80, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="mt-14 text-4xl md:text-5xl lg:text-6xl font-bold mb-4 transition-all duration-300 hover:scale-105 bg-gradient-to-b from-[#3B0A4B] to-[#3B0A4B80] bg-clip-text text-transparent font-poppins"
          >
            About Us
          </motion.h1>

          {/* Animate Group Photo */}
          <motion.div
            initial={{ y: 60, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8, ease: "easeOut" }}
            className="group mt-4 flex justify-center items-center"
          >
            <div className="overflow-hidden rounded-2xl shadow-2xl">
              <img
                src={TeamPic}
                alt="SQAC Team Group Photo"
                className="w-[700px] h-[400px] object-contain"
              />
            </div>
          </motion.div>

          {/* Animate Paragraph */}
          <motion.div
            initial={{ y: 60, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8, ease: "easeOut" }}
            className="mt-6 max-w-4xl px-4"
          >
            <p className="text-base md:text-lg text-gray-700 leading-relaxed font-poppins text-center">
              At SQAC, we believe great software is built through precision and
              passion. We're a student-led community that promotes clean code,
              critical thinking, and collaborative learning through hands-on
              sessions, testing workshops, and real-world projects.
              <span className="font-semibold text-[#3B0A4B] italic">
                {" "}
                Where code meets perfection — and you're part of it.
              </span>
            </p>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
