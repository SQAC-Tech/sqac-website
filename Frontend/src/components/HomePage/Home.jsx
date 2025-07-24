import React from "react";
import { motion } from "framer-motion";
import SQAC from "../../assets/LogoSQAC.png";

export default function LandingHero() {
  return (
    <section className="min-h-screen w-full flex items-center justify-center bg-gradient-to-br from-[#FFFBCB] via-[#FFD1E6] to-[#F0A01F] px-4">
      <div className="relative z-10 flex flex-col md:flex-row items-center justify-center gap-12 w-full max-w-[1300px]">

        <motion.h1
          initial={{ x: -150, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.1, type: "spring", stiffness: 300, damping: 20 }}
          className="text-6xl md:text-8xl font-black text-[#951D13] tracking-wide"
        >
          SQAC
        </motion.h1>

        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          whileHover={{ rotate: 8, scale: 1.05 }}
          className="w-[220px] h-[220px] md:w-[260px] md:h-[260px] rounded-full border-[6px] border-[#F18B85] bg-white/20 backdrop-blur-md shadow-xl flex items-center justify-center hover:shadow-[0_0_30px_#F18B85] transition-all duration-300"
        >
          <img src={SQAC} alt="SQAC Logo" className="w-32 md:w-40" />
        </motion.div>

        <motion.h2
          initial={{ x: 150, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.2, type: "spring", stiffness: 300, damping: 20 }}
          className="text-xl md:text-3xl font-semibold text-[#6A0C05] max-w-[320px] text-center md:text-left"
        >
          Software Quality Assurance Club
        </motion.h2>
      </div>
    </section>
  );
}