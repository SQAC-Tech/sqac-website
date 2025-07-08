import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import SQAC from "../../assets/LogoSQAC.png"
import Projects from "../../assets/projectsPhoto.png"
import Teams from "../../assets/TeamPhoto.png"

function Content() {
  const navItems = [{ label: "ABOUT", path: "/about" }, { label: "TEAM", path: "/team" }, { label: "PROJECTS", path: "/projects" }, { label: "EVENTS", path: "/events" },];
  return (
    <div className="min-h-screen bg-[linear-gradient(to_bottom,_#F8F4FD_63%,_#F1C985_100%)] overflow-hidden relative">
      <div className="relative">
        <motion.div className="absolute z-10 rounded-[50px] sm:rounded-[75px] lg:rounded-[100px] flex flex-col mt-7 h-full"
          style={{
            width: 'min(1208px, 95vw)',
            height: '70vh',
            left: '50%',
            background: 'linear-gradient(179.89deg, rgba(255, 209, 234, 0.7) 2.71%, rgba(255, 255, 255, 0.7) 49.32%)'}}
          initial={{ y: "100vh", x: "-50%", rotate: -0.07 }}
          animate={{ y: "15vh", x: "-50%", rotate: -0.07 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}>
          {/*navBar*/}
          <nav className="flex items-center justify-center md:justify-end space-x-4 lg:space-x-8 pt-4 sm:pt-6 lg:pt-8 px-4 sm:px-8 lg:px-16">
            {navItems.map(({ label, path }) => (
              <Link
                key={label}
                to={path}
                className="relative font-bold text-xl sm:text-2xl md:text-3xl text-orange-400 hover:text-pink-600 transition-all duration-300 uppercase tracking-wide after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 after:bg-pink-950 after:transition-all after:duration-300 hover:after:w-full">
                {label}
              </Link>
            ))}
          </nav>
        </motion.div>

        <div className="relative">
          {/* Header */}
          <header className="flex items-center justify-between px-4 sm:px-6 lg:px-8 py-4 sm:py-6 relative z-10">
            {/* Logo */}
            <div className="flex items-center space-x-2">
              <img src={SQAC} alt="Logo" className="w-10 h-10 sm:w-12 sm:h-12 lg:w-15 lg:h-16" />
            </div>
            {/* Join Us Button */}
            <Link className="bg-gradient-to-r from-purple-600 to-purple-700 text-white font-bold px-5 sm:px-6 lg:px-8 py-2 sm:py-3 lg:py-4 text-sm sm:text-base lg:text-lg rounded-full hover:from-purple-700 hover:to-purple-800 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105">
              Join us
            </Link>
          </header>
        </div>
        {/* SQAC Text */}
        <div className="absolute left-8 sm:left-12 lg:left-35 top-12 sm:top-20 lg:top-31 transform -translate-y-1/2 z-0">
          <motion.h1 className="font-extrabold text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl text-[#F0A01F] leading-none tracking-wider drop-shadow-md"
            initial={{ x: "-100vw" }}
            animate={{ x: 0 }}
            transition={{ duration: 0.7, ease: "easeOut", delay: 1 }}>
            SQAC
          </motion.h1>
        </div>
      </div>

      <div className="w-[99%] absolute bottom-0 left-[59%] transform -translate-x-1/2 h-[70vh] flex z-10">
        {/* Team Card */}
        <motion.div className="w-1/2 h-full transform -rotate-[12deg] origin-bottom-right hover:rotate-0 transition-transform duration-500 group cursor-pointer -mr-[18%] z-0 hover:z-30"
          initial={{ y: "100vh" }}
          animate={{ y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0 }}>
          <div className="relative w-full h-full overflow-hidden shadow-2xl hover:shadow-3xl transition-shadow duration-300">
            <img src={Teams} alt="Team collaboration"
              className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-300" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
          </div>
        </motion.div>
        {/*Projects Card*/}
        <motion.div className="w-1/2 h-full transform rotate-[12deg] origin-bottom-left hover:rotate-0 transition-transform duration-500 group cursor-pointer z-10"
          initial={{ y: "100vh" }}
          animate={{ y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}>
          <div className="relative w-full h-full overflow-hidden shadow-2xl hover:shadow-3xl transition-shadow duration-300">
            <img src={Projects} alt="Coding projects"
              className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-300" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
          </div>
        </motion.div>
      </div>
    </div>
  );
}
export default Content;