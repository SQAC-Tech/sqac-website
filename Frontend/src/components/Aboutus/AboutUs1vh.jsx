import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import TeamPic from "../../assets/Demo_SQAC_Team.jpg";

const AboutUs = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section className="min-h-[95vh] px-2 sm:px-6 py-10 sm:py-14 bg-gradient-to-b from-pink-50 via-red-200 to-orange-100">
      <div ref={ref} className="flex flex-col justify-center items-center text-center max-w-6xl mx-auto">

        <motion.h1
          initial={{ y: -40, opacity: 0 }}
          animate={isInView ? { y: 0, opacity: 1 } : {}}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="text-3xl sm:text-4xl font-bold text-gray-800 mb-6 font-poppins hover:scale-105 transition-transform">
          About Us
        </motion.h1>

        <motion.div
          initial={{ scale: 0.97, opacity: 0 }}
          animate={isInView ? { scale: 1, opacity: 1 } : {}}
          transition={{ delay: 0.2, duration: 0.6, ease: "easeOut" }}
          className="bg-white/30 backdrop-blur-lg shadow-xl rounded-3xl p-4 sm:p-8 w-full max-w-[95%] sm:max-w-[90%]">
          <div className="rounded-xl overflow-hidden shadow-md mb-5">
            <img
              src={TeamPic}
              alt="SQAC Team"
              className="w-full h-[300px] sm:h-[340px] object-cover object-center"
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
            className="mt-4 text-purple-800 text-base italic font-semibold">
            “Where code meets perfection — and you're part of it.”
          </motion.blockquote>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutUs;