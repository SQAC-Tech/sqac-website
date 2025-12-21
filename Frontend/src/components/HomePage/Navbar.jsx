import React, { useState } from "react";
import SQAC from "../../assets/LogoSQAC.png";
import { Link } from "react-router-dom";
import ToggleDarkMode from "../ToggleDarkMode";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  return (
    <nav className="
      fixed top-0 left-0 right-0 z-50
      bg-white/20 dark:bg-black/40
      backdrop-blur-lg shadow-md
      border-b border-white/30 dark:border-white/10
      px-4 sm:px-8 py-3
    ">
      <div className="flex items-center justify-between">
        <Link to="/" onClick={closeMenu}>
          <img
            src={SQAC}
            alt="Logo"
            className="w-10 h-10 transition duration-300 hover:scale-120"
          />
        </Link>


        <ul className="
          hidden sm:flex gap-5
          absolute left-1/2 transform -translate-x-1/2
          font-sans text-lg font-semibold
          text-gray-800 dark:text-gray-200
        ">
          {[
            { label: "Home", path: "/" },
            { label: "About", path: "/about" },
            { label: "Team", path: "/team" },
            { label: "Projects", path: "/projects" },
            { label: "Events", path: "/events" },
          ].map((item) => (
            <li key={item.path} className="px-4">
              <Link
                to={item.path}
                className="
                  relative
                  text-gray-800 dark:text-gray-200
                  hover:text-purple-600 dark:hover:text-pink-400
                  transition font-semibold duration-300 group
                "
              >
                {item.label}
                <span className="block h-[2px] max-w-0 group-hover:max-w-full transition-all duration-300 bg-gradient-to-r from-purple-500 to-pink-400"></span>
              </Link>
            </li>
          ))}
        </ul>

        <div className="hidden sm:flex items-center gap-4">
          <Link to="/recruitment" onClick={closeMenu}>
            <button className="
              rounded-full px-6 py-2 text-sm font-semibold
              bg-gradient-to-r from-purple-500 to-pink-400
              text-white shadow-md
              hover:scale-110 hover:shadow-[0_0_15px_rgba(236,72,153,0.5)]
              transition duration-300 cursor-pointer
            ">
              Join Us
            </button>
          </Link>

          <ToggleDarkMode />
        </div>

        <div className="sm:hidden flex items-center gap-3">
          <ToggleDarkMode />

          <button
            onClick={toggleMenu}
            className="relative w-6 h-6 flex flex-col justify-between items-center focus:outline-none"
          >
            <span
              className={`h-[3px] w-full bg-pink-500 rounded transition-transform duration-300 ${
                isMenuOpen ? "rotate-45 translate-y-[10.5px]" : ""
              }`}
            ></span>
            <span
              className={`h-[3px] w-full bg-pink-500 rounded transition-opacity duration-300 ${
                isMenuOpen ? "opacity-0" : ""
              }`}
            ></span>
            <span
              className={`h-[3px] w-full bg-pink-500 rounded transition-transform duration-300 ${
                isMenuOpen ? "-rotate-45 -translate-y-[10px]" : ""
              }`}
            ></span>
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <div className="
          sm:hidden mt-4 px-4 py-4
          bg-orange-200/90 dark:bg-zinc-900/90
          backdrop-blur-md rounded-xl shadow-xl
          space-y-3 text-base font-medium
          transition-all duration-500 animate-fade-in-down
        ">
          {[
            { label: "Home", path: "/" },
            { label: "About", path: "/about" },
            { label: "Team", path: "/team" },
            { label: "Projects", path: "/projects" },
            { label: "Events", path: "/events" },
          ].map((item, index) => (
            <div key={item.path} className="w-full">
              <Link
                to={item.path}
                onClick={closeMenu}
                className="
                  block w-full py-2 px-4 rounded-xl
                  text-gray-800 dark:text-gray-200
                  active:bg-gradient-to-r
                  active:from-orange-300 active:to-pink-300
                  dark:active:from-pink-600 dark:active:to-purple-600
                  active:text-white active:scale-95
                  transition-all duration-200
                "
              >
                {item.label}
              </Link>
              {index !== 4 && (
                <hr className="my-2 border-t border-gray-300 dark:border-white/10 opacity-30" />
              )}
            </div>
          ))}

          <Link to="/recruitment" onClick={closeMenu}>
            <button className="
              w-full mt-2 rounded-full px-5 py-2 text-base font-semibold
              bg-gradient-to-r from-purple-500 to-pink-400
              text-white shadow-md
              active:scale-95 active:shadow-sm
              transition-all duration-200 cursor-pointer
            ">
              Join Us
            </button>
          </Link>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
