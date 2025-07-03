import { motion } from "framer-motion";
import SQAC from "../../assets/SQAC2.png";

function Content() {
  return (
    <div className="w-full min-h-[calc(100vh-100px)] flex flex-col items-center justify-between p-4 md:p-6">
      {/* Heading */}
      <div className="w-full text-center mt-4 mb-6 md:mb-8">
        <h1 className="text-2xl sm:text-2xl md:text-4xl font-extrabold bg-gradient-to-r from-[#C19AF1] to-[#FF93F2] bg-clip-text text-transparent">
          Software Quality Assurance Community
        </h1>
      </div>

      {/* Logo with soft glow */}
      <div className="mb-6 md:mb-10 w-full max-w-[80vw] sm:max-w-[70vw] md:max-w-[600px] max-h-[35vh] relative">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2, ease: "easeOut" }}
          className="absolute inset-0 rounded-full bg-[radial-gradient(circle_at_center,rgba(178,102,255,0.2),transparent)] blur-2xl z-0 pointer-events-none"
        />
        <img
          src={SQAC}
          alt="SQAC Community"
          className="w-full h-full object-contain relative z-10"
          loading="lazy"
        />
      </div>

      {/* Simple Static Tagline */}
      <div className="w-full max-w-3xl text-center p-4 md:p-5">
        <p className="text-sm sm:text-base md:text-lg lg:text-xl font-medium text-white">
          Building a thriving community of{" "}
          <span className="text-purple-400">developers</span>,{" "}
          <span className="text-purple-400">testers</span>, and{" "}
          <span className="text-purple-400">innovators</span> to drive quality
          forward.
        </p>
      </div>

      {/* CTA Button */}
      <div className="mt-6 mb-10 w-full max-w-[300px] sm:max-w-[350px] ">
        <a href="#domain">
        <button className="w-full h-12 sm:h-14 rounded-full bg-[#1a0033] text-white text-lg sm:text-xl font-semibold border-2 border-purple-400 hover:bg-purple-900 transition-colors duration-200 cursor-pointer">
          Explore ≫
        </button>
        </a>
      </div>
    </div>
  );
}

export default Content;
