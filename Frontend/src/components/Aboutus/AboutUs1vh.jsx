import React from "react";
import { motion } from "framer-motion";
import TeamPic from '../../assets/Demo_SQAC_Team.jpg'
const AboutUs = () => {
  return (
    <div className="min-h-screen bg-gradient-to-t from-pink-400 via-red-400 to-orange-600">
      <div className="relative w-full min-h-screen overflow-hidden">
       
        <div
          className="absolute inset-0"
          style={{
            background: "linear-gradient(180deg, #FFD1EA80 0%, #F8F4FD 100%)",
          }}
        />

       
        <div
          className="absolute left-1/2 -translate-x-1/2 w-[80%] h-[440px] rounded-[40px] z-10"
          style={{
            background: "linear-gradient(180deg, #FFD1EA80 0%, #F8F4FD 100%)",
            
            top: "40px",
            backdropFilter: "blur(8px)",
            WebkitBackdropFilter: "blur(8px)",
          }}
        />

        <div className="relative z-20 flex flex-col justify-center items-center min-h-screen px-4 text-center">
         
          <motion.h1
            initial={{ y: -80, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="mt-14 text-4xl md:text-5xl lg:text-6xl font-bold mb-4 transition-all duration-300 hover:scale-105  font-poppins"
          >
            About Us
          </motion.h1>

         
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
