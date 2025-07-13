import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import SQAC from "../../assets/LogoSQAC.png";
import Projects from "../../assets/projectsPhoto.png";
import Teams from "../../assets/TeamPhoto.png";
import Events from "../../assets/Events-photo.png";
import Navbar from "./Navbar";
import ContactUs from "./ContactUs";

function Content() {
  const navItems = [
    { label: "ABOUT", path: "/about" },
    { label: "TEAM", path: "/team" },
    { label: "PROJECTS", path: "/projects" },
    { label: "EVENTS", path: "/events" },
  ];

  const cards = [
    {
      src: Teams,
      alt: "Team collaboration",
      rotation: "-6deg",
      delay: 0,
      zIndex: 10,
    },
    {
      src: Projects,
      alt: "Coding projects",
      rotation: "0deg",
      delay: 0.1,
      zIndex: 20,
    },
    {
      src: Events,
      alt: "Event highlights",
      rotation: "6deg",
      delay: 0.2,
      zIndex: 15,
    },
  ];

  return (
    <div className="pt-[100vh] lg:pt-0 min-h-screen bg-gradient-to-b from-pink-100 via-white to-purple-100 overflow-hidden relative">
      <div className="relative">
        <motion.div
          className="absolute z-10 rounded-[50px] sm:rounded-[75px] lg:rounded-[100px] flex flex-col mt-7 h-full"
          style={{
            width: "min(1208px, 95vw)",
            height: "70vh",
            left: "50%",
            background:
              "linear-gradient(179.89deg, rgba(255, 209, 234, 0.7) 2.71%, rgba(255, 255, 255, 0.7) 49.32%)",
          }}
          initial={{ y: "100vh", x: "-50%", rotate: -0.07 }}
          animate={{ y: "15vh", x: "-50%", rotate: -0.07 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
        >
          <nav className="flex flex-wrap items-center justify-center md:justify-end gap-4 lg:gap-8 py-6 px-8">
            {navItems.map(({ label, path }) => (
              <Link
                key={label}
                to={path}
                className="relative font-bold text-xl sm:text-2xl md:text-3xl text-orange-400 hover:text-pink-600 transition-all duration-300 uppercase tracking-wide after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 after:bg-pink-950 after:transition-all after:duration-300 hover:after:w-full"
              >
                {label}
              </Link>
            ))}
          </nav>
        </motion.div>

        <Navbar />
      </div>

<div className="w-full absolute bottom-[5%] left-1/2 transform -translate-x-1/2 flex justify-center items-end gap-[4px] sm:gap-[8px] md:gap-[12px] p-4 md:p-8 z-10 flex-wrap">
        {cards.map((card, index) => (
          <motion.div
            key={index}
            className="
              w-[clamp(200px,25vw,320px)]
              aspect-[3.5/4]
              cursor-pointer
              relative
              overflow-hidden
              shadow-2xl
              hover:shadow-3xl
              rounded-xl
            "
            style={{
              rotate: card.rotation,
              zIndex: card.zIndex,
            }}
            initial={{ y: 200, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: card.delay }}
            whileHover={{ scale: 1.05 }}
          >
            <img
              src={card.src}
              alt={card.alt}
              className="w-full h-full object-cover object-top"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default Content;
