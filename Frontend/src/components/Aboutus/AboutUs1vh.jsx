import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import TeamPic from "../../assets/SQAC_Team.jpg";

const AboutUs = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section className="min-h-screen px-4 sm:px-8 py-16 z-10">

      <div ref={ref} className="flex flex-col justify-center items-center text-center max-w-6xl mx-auto z-3">

        <motion.h1
          initial={{ y: -40, opacity: 0 }}
          animate={isInView ? { y: 0, opacity: 1 } : {}}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="text-5xl sm:text-5xl font-bold text-gray-800 mb-6 font-poppins hover:scale-105 transition-transform">
          About Us
        </motion.h1>

        <motion.div
          initial={{ scale: 0.97, opacity: 0 }}
          animate={isInView ? { scale: 1, opacity: 1 } : {}}
          transition={{ delay: 0.2, duration: 0.6, ease: "easeOut" }}
          className="bg-white/50 backdrop-blur-md shadow-2xl rounded-3xl p-4 sm:p-8 w-full max-w-3xl mx-auto mt-6"
>
          <div className="rounded-xl overflow-hidden shadow-md mb-5">
            <img
              src={TeamPic}
              alt="SQAC Team"
              className="w-full max-w-[1000px] h-auto mx-auto object-cover rounded-xl shadow-lg"

            />
          </div>

          <motion.p
            initial={{ y: 30, opacity: 0 }}
            animate={isInView ? { y: 0, opacity: 1 } : {}}
            transition={{ delay: 0.4, duration: 0.7 }}
            className="text-sm sm:text-base text-gray-800 font-poppins leading-relaxed">
            At <strong>SQAC</strong>, we’re a student-led community passionate about clean
            code, real-world projects, and collaborative learning. We host hands-on sessions,
            testing workshops, and build future-ready developers.
          </motion.p>

          <motion.blockquote
            initial={{ y: 20, opacity: 0 }}
            animate={isInView ? { y: 0, opacity: 1 } : {}}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="mt-6 text-purple-800 text-lg italic font-semibold text-center">
            “Where code meets perfection — and you're part of it.”
          </motion.blockquote>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutUs;