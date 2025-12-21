import { useState } from "react";
import { motion } from "framer-motion";
import {
  Laptop,
  Code,
  Users,
  Calendar,
  Palette,
  RotateCcw,
} from "lucide-react";

const WhatWeDoSection = () => {
  const [index, setIndex] = useState(0);
  const [flip, setFlip] = useState(false);

  const cards = [
    [
      {
        title: "Code & Create",
        icon: <Laptop className="w-16 h-16 text-purple-500" />,
        desc: "We craft intelligent solutions through clean and efficient code. From web apps to embedded systems, our creations turn ideas into impactful digital experiences.",
        grad: "from-purple-500 to-blue-600",
      },
      {
        title: "Build & Innovate",
        icon: <Code className="w-16 h-16 text-blue-500" />,
        desc: "Innovation is our blueprint. We engineer with curiosity and build with purpose — blending software, hardware, and imagination to solve real-world challenges.",
        grad: "from-blue-500 to-cyan-600",
      },
    ],
    [
      {
        title: "Collaborate & Communicate",
        icon: <Users className="w-16 h-16 text-green-500" />,
        desc: "Collaboration fuels clarity. We thrive in teams, sharing ideas, feedback, and knowledge to communicate even the most technical concepts in ways that resonate.",
        grad: "from-green-500 to-teal-600",
      },
      {
        title: "Organize & Lead",
        icon: <Calendar className="w-16 h-16 text-orange-500" />,
        desc: "Leadership begins with structure. We manage tasks, people, and timelines with focus and flexibility to bring every initiative to a successful outcome.",
        grad: "from-orange-500 to-red-600",
      },
    ],
    [
      {
        title: "Design & Express",
        icon: <Palette className="w-16 h-16 text-pink-500" />,
        desc: "We believe design is storytelling. Through color, layout, and interaction, we express identity and vision, creating interfaces that inspire and engage.",
        grad: "from-pink-500 to-purple-600",
      },
      {
        title: "Innovate & Repeat",
        icon: <RotateCcw className="w-16 h-16 text-indigo-500" />,
        desc: "Our process never stops evolving. We reflect, refine, and reimagine continuously — because every breakthrough begins with the courage to iterate.",
        grad: "from-indigo-500 to-purple-600",
      },
    ],
  ];

  const [front, back] = cards[index];

  return (
    <div className="flex px-6 md:px-16 pt-24 min-h-screen bg-gradient-to-b from-red-300 via-orange-200 to-orange-300 dark:from-[#0f0a1a] dark:via-[#1b0b2e] dark:to-[#12081f] overflow-hidden flex-col md:flex-row">

      <motion.div
        className="flex flex-col justify-center flex-1 mt-20 md:mt-0"
        initial={{ x: 100, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ delay: 0.2, duration: 0.8 }}
      >
        <h2 className="text-[clamp(2.5rem,8vw,5rem)] font-bold font-poppins text-gray-900 dark:text-gray-100">
          WHAT WE{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600">
            DO
          </span>
        </h2>

        <p className="text-base sm:text-lg md:text-xl text-gray-600 dark:text-gray-400 max-w-xl mt-6">
          At SQAC, we're more than just code. We build experiences, spark
          innovation, and bring bold ideas to life through design, tech, and
          collaboration.
        </p>
      </motion.div>

      <motion.div
        className="flex-1 flex flex-col items-center justify-center relative mt-16 md:mt-0"
        initial={{ x: 100, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ delay: 0.6, duration: 0.8 }}
      >
        {/* PREV BUTTON */}
        <button
          aria-label="Previous"
          onClick={() => {
            setFlip(false);
            setIndex((index - 1 + cards.length) % cards.length);
          }}
          className="
            absolute -left-4 sm:-left-10 md:-left-12
            top-1/2 -translate-y-1/2
            w-10 h-10 flex items-center justify-center
            bg-purple-500 dark:bg-purple-600
            text-white rounded-full
            hover:bg-purple-600 dark:hover:bg-purple-500
            active:scale-95 transition z-10
          "
        >
          ←
        </button>

        <div
          className="relative w-64 sm:w-72 md:w-96 h-[400px] sm:h-[440px] md:h-[500px]"
          onClick={() => {
            if (window.innerWidth < 1024) setFlip((prev) => !prev);
          }}
          onMouseEnter={() => {
            if (window.innerWidth >= 1024) setFlip(true);
          }}
          onMouseLeave={() => {
            if (window.innerWidth >= 1024) setFlip(false);
          }}
        >
          {[front, back].map((card, i) => (
            <div
              key={i}
              className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${card.grad} shadow-2xl transition-all duration-700 ${
                flip === Boolean(i)
                  ? "opacity-100 rotate-y-0"
                  : "opacity-0 rotate-y-180"
              }`}
            >
              <div className="
                flex flex-col items-center justify-center h-full
                px-6 sm:px-8 py-6 text-center
                bg-white/10 dark:bg-black/30
                backdrop-blur-sm rounded-2xl
                border border-white/20 dark:border-white/10
              ">
                <div className="mb-4 p-4 bg-white/20 dark:bg-black/30 rounded-full backdrop-blur-sm">
                  {card.icon}
                </div>

                <h3 className="text-2xl font-bold text-white mb-2">
                  {card.title}
                </h3>

                <p className="text-white/90 text-sm">
                  {card.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* NEXT BUTTON */}
        <button
          aria-label="Next"
          onClick={() => {
            setFlip(false);
            setIndex((index + 1) % cards.length);
          }}
          className="
            absolute -right-4 sm:-right-10 md:-right-12
            top-1/2 -translate-y-1/2
            w-10 h-10 flex items-center justify-center
            bg-cyan-500 dark:bg-cyan-600
            text-white rounded-full
            hover:bg-cyan-600 dark:hover:bg-cyan-500
            active:scale-95 transition z-10
          "
        >
          →
        </button>

        <div className="flex gap-2 mt-6">
          {cards.map((_, i) => (
            <div
              key={i}
              className={`h-2 rounded-full transition-all ${
                i === index
                  ? "w-8 bg-gradient-to-r from-purple-500 to-pink-500"
                  : "w-2 bg-gray-300 dark:bg-gray-600"
              }`}
            />
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default WhatWeDoSection;
