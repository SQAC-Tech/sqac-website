"use client";

import SQAC from "../../assets/SQAC2.png";

function Content() {
  return (
    <div className="w-full min-h-[calc(100vh-100px)] flex flex-col items-center justify-between p-4 md:p-6">
      {/* Heading */}
      <div className="w-full text-center mt-4 mb-6 md:mb-8">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-[#C19AF1] to-[#FF93F2] bg-clip-text text-transparent">
          Software Quality Assurance Community
        </h1>
      </div>

      {/* Image */}
      <div className="mb-6 md:mb-10 w-full max-w-[90vw] sm:max-w-[85vw] md:max-w-[704px]">
        <img
          src={SQAC}
          alt="SQAC Community"
          className="w-full h-auto object-contain"
          loading="lazy"
        />
      </div>

      {/* Tagline Text Instead of Typewriter */}
      <div className="flex flex-col items-center justify-center w-full max-w-3xl text-center p-4 md:p-6 rounded-2xl bg-black/40 backdrop-blur-sm">
        <p className="text-base sm:text-xl md:text-2xl lg:text-3xl font-semibold text-white">
          Building a thriving community of{" "}
          <span className="text-purple-400">developers</span>,{" "}
          <span className="text-purple-400">testers</span>, and{" "}
          <span className="text-purple-400">innovators</span> to drive quality
          forward.
        </p>
      </div>

      {/* Button */}
      <div className="mt-13 mb-4 w-full max-w-[300px] sm:max-w-[350px] hover:scale-[1.03] transition-transform">
        <button className="relative inline-flex w-full h-12 sm:h-14 overflow-hidden rounded-full p-[2px] focus:outline-none focus:ring-2 focus:ring-purple-400 focus:ring-offset-2 focus:ring-offset-[#1a0033]">
          <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
          <span className="inline-flex h-full w-full items-center justify-center rounded-full bg-[#1a0033] px-3 text-lg sm:text-xl font-semibold text-white backdrop-blur-3xl">
            Explore ≫
          </span>
        </button>
      </div>
    </div>
  );
}

export default Content;
