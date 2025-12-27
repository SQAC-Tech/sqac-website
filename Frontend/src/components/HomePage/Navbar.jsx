import React, { useState } from "react";
import SQAC from "../../assets/LogoSQAC.png";
import { Link } from "react-router-dom";
import { useTheme } from "../../contexts/ThemeContext";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { isDarkMode, toggleTheme } = useTheme();

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-dark-primary/80 backdrop-blur-lg shadow-md border-b border-gray-700 px-4 sm:px-8 py-3">
      <div className="flex items-center justify-between">
        <Link to="/" onClick={closeMenu}>
          <img
            src={SQAC}
            alt="Logo"
            className="w-10 h-10 transition duration-300 hover:scale-120"
          />
        </Link>

        <ul className="hidden sm:flex gap-5 absolute left-1/2 transform -translate-x-1/2 font-sans text-lg font-semibold text-dark-text-primary">
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
                className="relative text-dark-text-primary hover:text-accent transition font-semibold duration-300 group"
              >
                {item.label}
                <span className="block h-[2px] max-w-0 group-hover:max-w-full transition-all duration-300 bg-gradient-to-r from-accent to-accentSecondary"></span>
              </Link>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-4">
          {/* Theme Toggle Button (hidden on small screens) */}
          <button
            onClick={toggleTheme}
            className="hidden sm:inline-flex p-2 rounded-full bg-gradient-to-r from-accent to-accentSecondary/20 hover:from-accent/30 hover:to-accentSecondary/30 transition-all duration-300 hover:scale-110"
            aria-label="Toggle theme"
          >
            {isDarkMode ? (
              <svg className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" clipRule="evenodd" />
              </svg>
            ) : (
              <svg className="w-5 h-5 text-gray-700" fill="currentColor" viewBox="0 0 20 20">
                <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
              </svg>
            )}
          </button>

          <Link to="/recruitment" onClick={closeMenu}>
            <button className="hidden sm:block rounded-full px-6 py-2 text-sm font-semibold bg-gradient-to-r from-accent to-accentSecondary text-white shadow-md hover:scale-110 hover:shadow-[0_0_15px_rgba(124,58,237,0.5)] transition duration-300 cursor-pointer">
              Join Us
            </button>
          </Link>
        </div>

        <div className="sm:hidden">
          <button
            onClick={toggleMenu}
            className="relative w-6 h-6 flex flex-col justify-between items-center focus:outline-none"
          >
            <span
              className={`h-[3px] w-full bg-accent rounded transition-transform duration-300 ${
                isMenuOpen ? "rotate-45 translate-y-[10.5px]" : ""
              }`}
            ></span>
            <span
              className={`h-[3px] w-full bg-accent rounded transition-opacity duration-300 ${
                isMenuOpen ? "opacity-0" : ""
              }`}
            ></span>
            <span
              className={`h-[3px] w-full bg-accent rounded transition-transform duration-300 ${
                isMenuOpen ? "-rotate-45 -translate-y-[10px]" : ""
              }`}
            ></span>
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <div className="sm:hidden mt-4 px-4 py-4 bg-dark-surface/90 backdrop-blur-md rounded-xl shadow-xl space-y-3 text-base font-medium transition-all duration-500 animate-fade-in-down">
          <div className="flex items-center justify-between">
            <span className="font-semibold text-dark-text-primary">Menu</span>
            <button
              onClick={() => { toggleTheme(); }}
              className={`p-2 rounded-full bg-gradient-to-r from-accent to-accentSecondary/20 hover:from-accent/30 hover:to-accentSecondary/30 transition-all duration-300 flex items-center gap-2 ${isDarkMode ? 'text-white' : 'text-gray-800'}`}
              aria-label="Toggle theme"
            >
              {isDarkMode ? (
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" clipRule="evenodd" />
                </svg>
              ) : (
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
                </svg>
              )}
              <span className="text-sm font-medium">Theme</span>
            </button>
          </div>
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
                className="block w-full py-2 px-4 rounded-xl text-dark-text-primary active:bg-gradient-to-r active:from-accent active:to-accentSecondary active:text-white active:scale-95 transition-all duration-200"
              >
                {item.label}
              </Link>
              {index !== 4 && (
                <hr className="my-2 border-t border-gray-300 opacity-30" />
              )}
            </div>
          ))}

          <Link to="/recruitment" onClick={closeMenu}>
            <button className="w-full mt-2 rounded-full px-5 py-2 text-base font-semibold bg-gradient-to-r from-accent to-accentSecondary text-white shadow-md active:scale-95 active:shadow-sm transition-all duration-200 cursor-pointer">
              Join Us
            </button>
          </Link>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
