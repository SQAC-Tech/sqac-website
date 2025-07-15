import React , { useRef }from "react";
import { motion , useInView } from "framer-motion";
import TeamPic from '../../assets/Demo_SQAC_Team.jpg'
const AboutUs = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section className="min-h-screen py-16 sm:py-24 px-4 sm:px-10 bg-gradient-to-t from-fuchsia-50 via-red-300 to-orange-300">
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

        <div 
        ref={ref}
         className="relative z-20 flex flex-col justify-center items-center min-h-[calc(100vh-120px)] px-4 text-center">
         
          <motion.h1
            initial={{ y: -80, opacity: 0 }}
            animate={isInView ? { y: 0, opacity: 1 } : {}}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="mt-14 text-3xl sm:text-4xl md:text-5xl font-bold mb-4 transition-all duration-300 hover:scale-105 font-poppins"
          >
            About Us
          </motion.h1>

         
          <motion.div
            initial={{ y: 60, opacity: 0 }}
            animate={isInView ? { y: 0, opacity: 1 } : {}}
            transition={{ delay: 0.3, duration: 0.8, ease: "easeOut" }}
            className="group mt-4 flex justify-center items-center"
          >
            <motion.div
            initial={{ scale: 0.95, opacity: 0 }}
            animate={isInView ? { scale: 1, opacity: 1 } : {}}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="overflow-hidden rounded-2xl shadow-2xl hover:scale-105 transition-transform duration-300">
              <img
                src={TeamPic}
                alt="SQAC Team Group Photo"
                className="w-full max-w-md sm:max-w-xl h-auto object-contain"
              />
            </motion.div>
          </motion.div>

        
          <motion.div
            initial={{ y: 60, opacity: 0 }}
            animate={isInView ? { y: 0, opacity: 1 } : {}}
            transition={{ delay: 0.5, duration: 0.8, ease: "easeOut" }}
            className="mt-6 max-w-4xl px-4"
          >
            <p aria-label="SQAC community mission statement" 
            className="text-sm sm:text-base md:text-lg text-gray-700 leading-relaxed font-poppins text-center sm:text-left">
              At SQAC, we believe great software is built through precision and
              passion. We're a student-led community that promotes clean code,
              critical thinking, and collaborative learning through hands-on
              sessions, testing workshops, and real-world projects.
              <blockquote className="font-semibold text-[#3B0A4B] italic">
                {" "}
                Where code meets perfection — and you're part of it.
              </blockquote>
            </p>
            
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
