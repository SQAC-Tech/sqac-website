import React from "react";
import { motion } from "framer-motion";
import Projects from "../../assets/projectsPhoto.png";
import Teams from "../../assets/TeamPhoto.png";
import Events from "../../assets/Events-photo.png";
import Navbar from "./Navbar";

function Content() {
  return (
    <div className="min-h-screen bg-gradient-to-t from-dark-primary via-dark-secondary to-dark-tertiary relative overflow-hidden">
      <Navbar />

      <div className="absolute -top-10 left-10 z-0 select-none">
        <h1 className="text-[90px] sm:text-[100px] md:text-[150px] lg:text-[180px] font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-accent via-accentSecondary to-accent drop-shadow-lg">
          SQAC
        </h1>
      </div>

      <div className="flex flex-row items-center justify-center gap-12 pt-50 pb-20 relative z-10">
        <motion.div
          className="w-[350px] h-[400px] rounded-xl overflow-hidden shadow-2xl cursor-pointer transition-all duration-300"
          animate={{ y: [0, -20, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          whileHover={{
            boxShadow: '0 0 60px rgba(255, 107, 53, 1)',
            scale: 1.05,
            transition: { duration: 0.3 }
          }}
          style={{
            boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)'
          }}
        >
          <img src={Teams} alt="Team" className="w-full h-full object-cover" />
        </motion.div>

        <motion.div
          className="w-[350px] h-[400px] rounded-xl overflow-hidden shadow-2xl cursor-pointer transition-all duration-300"
          animate={{ y: [0, -20, 0] }}
          transition={{ duration: 2, repeat: Infinity, delay: 0.2 }}
          whileHover={{
            boxShadow: '0 0 60px rgba(255, 107, 53, 1)',
            scale: 1.05,
            transition: { duration: 0.3 }
          }}
          style={{
            boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)'
          }}
        >
          <img
            src={Projects}
            alt="Projects"
            className="w-full h-full object-cover"
          />
        </motion.div>

        <motion.div
          className="w-[350px] h-[400px] rounded-xl overflow-hidden shadow-2xl cursor-pointer transition-all duration-300"
          animate={{ y: [0, -20, 0] }}
          transition={{ duration: 2, repeat: Infinity, delay: 0.4 }}
          whileHover={{
            boxShadow: '0 0 60px rgba(255, 107, 53, 1)',
            scale: 1.05,
            transition: { duration: 0.3 }
          }}
          style={{
            boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)'
          }}
        >
          <img
            src={Events}
            alt="Events"
            className="w-full h-full object-cover"
          />
        </motion.div>
      </div>
    </div>
  );
}

export default Content;
