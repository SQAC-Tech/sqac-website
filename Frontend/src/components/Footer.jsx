import { Github, Twitter, Linkedin, Mail, ArrowUp, Instagram } from "lucide-react";
import { useEffect, useState } from "react";
import SQACLogo from "../assets/SQAC-Logo.png";

function Footer() {
  const [showTopBtn, setShowTopBtn] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowTopBtn(window.scrollY > 100);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };    
  return (
    <div className="relative bg-black text-white overflow-hidden">
      <div className="h-1 w-full bg-gradient-to-r from-purple-700 via-fuchsia-500 to-purple-700 animate-pulse" />

      <footer className="relative z-10 py-24 px-8 text-lg">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16">
          <div>
            <div className="flex items-center space-x-4">
              <h2 className="text-4xl font-bold text-purple-400 glow-text">SQAC</h2>
              <img src={SQACLogo} alt="SQAC Logo" className="h-12 w-12 object-contain" />
            </div>
            <p className="mt-6 text-gray-400 text-base leading-relaxed">
              Empowering developers, testers, and innovators to redefine software quality assurance through collaboration and innovation.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold text-purple-300 border-b-2 w-max border-purple-600 mb-4">Explore</h3>
            <ul className="space-y-3 text-gray-300">
              <li><a href="/about" className="hover:text-purple-400">About Us</a></li>
              <li><a href="/team" className="hover:text-purple-400">Team</a></li>
              <li><a href="/projects" className="hover:text-purple-400">Projects</a></li>
              <li><a href="/events" className="hover:text-purple-400">Events</a></li>
            </ul>
          </div>

          {/* Community */}
          <div>
            <h3 className="text-xl font-semibold text-purple-300 border-b-2 w-max border-purple-600 mb-4">Community</h3>
            <ul className="space-y-3 text-gray-300">
              <li><a href="/join" className="hover:text-purple-400">Join Us</a></li>
              <li><a href="/discord" className="hover:text-purple-400">Discord Server</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-semibold text-purple-300 border-b-2 w-max border-purple-600 mb-4">Contact</h3>
            <p className="mb-3 text-gray-300">
              Email:{" "}
              <a href="mailto:sqac.club@gmail.com" className="hover:text-purple-400">
                sqac.club@gmail.com
              </a>
            </p>
            <div className="flex space-x-5 mt-4">
              <a href="https://github.com/SQAC-Tech" className="hover:text-purple-400">
                <Github size={26} />
              </a>
              <a href="https://www.instagram.com/sqac.srmist" className="hover:text-purple-400">
                <Instagram size={26} />
              </a>
              <a href="https://www.linkedin.com/company/sqacsrm" className="hover:text-purple-400">
                <Linkedin size={26} />
              </a>
              <a href="mailto:sqac.club@gmail.com" className="hover:text-purple-400">
                <Mail size={26} />
              </a>
            </div>
          </div>
        </div>
        <div className="mt-16 border-t border-purple-700 pt-6 text-sm flex flex-col md:flex-row justify-between items-center text-gray-500">
          <div>© {new Date().getFullYear()} SQAC. All rights reserved.</div>
          <div className="text-right mt-2 md:mt-0">
            Designed and Crafted by the <span className="text-purple-400">SQAC Creatives and WebDev Team</span>
          </div>
        </div>
      </footer>
      {showTopBtn && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 bg-purple-700 hover:bg-purple-600 text-white p-3 rounded-full shadow-lg transition-all z-50"
          aria-label="Back to Top"
        >
          <ArrowUp size={20} />
        </button>
      )}
    </div>
  );
}

export default Footer;

