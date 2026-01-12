import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import TeamPic from "../../assets/SQAC_Team.jpg";

const AboutUs = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section className="h-screen px-4 sm:px-6 pt-4 pb-6 z-10 flex justify-center items-center projects-section">
      <div
        ref={ref}
        className="flex flex-col justify-center items-center text-center max-w-6xl mx-auto z-3"
      >
        <motion.h1
          initial={{ y: -40, opacity: 0 }}
          animate={isInView ? { y: 0, opacity: 1 } : {}}
          transition={{ duration: 0.3, ease: "easeOut" }}
          className="pt-[30px] mt-11 text-5xl sm:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#951D13] via-[#f34a82] to-[#F0A01F] mb-6 font-poppins hover:scale-105 transition-transform"
        >
          ABOUT US
        </motion.h1>

        <motion.div
          initial={{ scale: 0.97, opacity: 0 }}
          animate={isInView ? { scale: 1, opacity: 1 } : {}}
          transition={{ delay: 0.2, duration: 0.6, ease: "easeOut" }}
          className="bg-black/90 backdrop-blur-lg shadow-xl rounded-3xl p-4 sm:p-8 w-full max-w-3xl mx-auto mt-1 border border-gray-600 transition-all duration-300"
          whileHover={{
            backgroundColor: "rgba(255, 107, 53, 0.15)",
            borderColor: "#ff6b35",
            boxShadow: "0 0 40px rgba(255, 107, 53, 0.4)",
            scale: 1.02,
          }}
        >
          <div className="rounded-xl overflow-hidden mb-4 max-h-[45vh]">
            <img
              src={TeamPic}
              alt="SQAC Team"
              className=" w-full max-w-[1000px] h-auto mx-auto object-cover rounded-xl shadow-lg"
            />
          </div>

          <motion.p
            initial={{ y: 30, opacity: 0 }}
            animate={isInView ? { y: 0, opacity: 1 } : {}}
            transition={{ delay: 0.4, duration: 0.7 }}
            className="text-sm sm:text-base text-white font-poppins leading-relaxed font-medium"
          >
            At{" "}
            <strong className="text-transparent bg-clip-text bg-gradient-to-r from-[#951D13] via-[#f34a82] to-[#F0A01F] font-semibold">
              SQAC
            </strong>
            , we're a student-led community passionate about clean code,
            real-world projects, and collaborative learning. We host hands-on
            sessions, testing workshops, and build future-ready developers.
          </motion.p>

          <motion.blockquote
            initial={{ y: 20, opacity: 0 }}
            animate={isInView ? { y: 0, opacity: 1 } : {}}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="mt-6 text-transparent bg-clip-text bg-gradient-to-r from-[#951D13] via-[#f34a82] to-[#F0A01F] text-lg italic font-semibold text-center"
            style={{
              textShadow:
                "0 0 3px rgba(243, 74, 130, 0.3), 0 0 6px rgba(243, 74, 130, 0.2), 0 0 9px rgba(243, 74, 130, 0.1)",
            }}
          >
            “Where code meets perfection — and you're part of it.”
          </motion.blockquote>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutUs;
