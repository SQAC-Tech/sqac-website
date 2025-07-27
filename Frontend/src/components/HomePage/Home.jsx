import React from "react";
import { motion } from "framer-motion";
import SQAC from "../../assets/LogoSQAC.png";

export default function LandingHero() {
  return (
    <section className="relative min-h-screen w-full flex items-center justify-center px-4 bg-gradient-to-b from-[#f3d79e] via-[#f3d8ad] to-red-300 overflow-hidden">
      {/* Blurred circle for depth */}
      <div className="absolute w-[900px] h-[900px] bg-pink-300 opacity-20 rounded-full blur-3xl top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-0"></div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0, ease: "easeOut" }}
        variants={{
          hidden: { opacity: 0, y: 80 },
          visible: { opacity: 1, y: 0 },
        }}
        className="relative z-10 flex flex-col md:flex-row items-center justify-center gap-20 w-full max-w-[1600px]"
      >
        {/* Left Title */}
        <div className="flex flex-col items-center md:items-end text-center md:text-right space-y-4">
          <motion.h1
            initial={{ x: -150, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.8, type: "spring", stiffness: 300, damping: 20 }}
            viewport={{ once: true, amount: 0.5 }}
            className="text-8xl md:text-[160px] font-extrabold bg-clip-text text-transparent bg-gradient-to-tr from-[#951D13] via-[#f34a82] to-[#F0A01F] leading-none"
          >
            SQAC
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            viewport={{ once: true }}
            className="text-xl md:text-3xl font-semibold px-4 text-[#bd4110]"
          >
            "Where Code Meets Quality"
          </motion.p>
        </div>

        {/* Center Logo */}
        <motion.div
          whileInView={{ scale: 1, opacity: 1 }}
          initial={{ scale: 0, opacity: 0 }}
          transition={{  duration: 1, ease: "easeInOut" }}
          whileHover={{ rotate: 10, scale: 1.2, duration: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          className="w-[300px] h-[300px] md:w-[340px] md:h-[340px] rounded-full border-[8px] border-[#F18B85] bg-white/30 backdrop-blur-xl shadow-2xl flex items-center justify-center hover:shadow-[0_0_50px_#F18B85] transition-all duration-300"
        >
          <img src={SQAC} alt="SQAC Logo" className="w-44 md:w-56" />
        </motion.div>

        {/* Right Tagline */}
        <motion.div
          initial={{ x: 150, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.3, type: "spring", stiffness: 300, damping: 20 }}
          viewport={{ once: true, amount: 0.5 }}
          className="text-center md:text-left max-w-xs md:max-w-md"
        >
          <h2 className="text-3xl md:text-[44px] font-bold bg-clip-text text-transparent bg-gradient-to-tr from-[#951D13] via-[#f34a82] to-[#F0A01F] leading-none">
            Software Quality<br />Assurance Community
          </h2>
        </motion.div>
      </motion.div>
    </section>
  );
}
