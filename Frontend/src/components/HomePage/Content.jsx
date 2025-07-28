import React from "react";
import { motion } from "framer-motion";
import Projects from "../../assets/projectsPhoto.png";
import Teams from "../../assets/TeamPhoto.png";
import Events from "../../assets/Events-photo.png";
import Navbar from "./Navbar";

function Content() {
  return (
    <div className="min-h-screen bg-gradient-to-t from-orange-200 via-neutral-50 to-pink-300 relative overflow-hidden">
      <Navbar />

      <div className="absolute -top-10 left-10 z-0 select-none">
        <h1 className="text-[90px] sm:text-[100px] md:text-[150px] lg:text-[180px] font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-orange-600 via-orange-500 to-yellow-400 drop-shadow-lg">
          SQAC
        </h1>
      </div>

      <div className="flex flex-row items-center justify-center gap-12 pt-50 pb-20 relative z-10">
        <motion.div
          className="w-[350px] h-[400px] rounded-xl overflow-hidden shadow-2xl"
          animate={{ y: [0, -20, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <img src={Teams} alt="Team" className="w-full h-full object-cover" />
        </motion.div>

        <motion.div
          className="w-[350px] h-[400px] rounded-xl overflow-hidden shadow-2xl"
          animate={{ y: [0, -20, 0] }}
          transition={{ duration: 2, repeat: Infinity, delay: 0.2 }}
        >
          <img
            src={Projects}
            alt="Projects"
            className="w-full h-full object-cover"
          />
        </motion.div>

        <motion.div
          className="w-[350px] h-[400px] rounded-xl overflow-hidden shadow-2xl"
          animate={{ y: [0, -20, 0] }}
          transition={{ duration: 2, repeat: Infinity, delay: 0.4 }}
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
