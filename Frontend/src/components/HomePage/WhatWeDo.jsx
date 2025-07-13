import { useState } from 'react';
import { motion } from 'framer-motion';
import { Laptop, Code, Users, Calendar, Palette, RotateCcw } from 'lucide-react';

const WhatWeDoSection = () => {
  const [index, setIndex] = useState(0);
  const [flip, setFlip] = useState(false);

  const cards = [
    [
      {
        title: "Code & Create", icon: <Laptop className="w-16 h-16 text-purple-500" />, desc: "We craft intelligent solutions through clean and efficient code. From web apps to embedded systems, our creations turn ideas into impactful digital experiences.", grad: "from-purple-500 to-blue-600"
      },
      {
        title: "Build & Innovate", icon: <Code className="w-16 h-16 text-blue-500" />, desc: "Innovation is our blueprint. We engineer with curiosity and build with purpose — blending software, hardware, and imagination to solve real-world challenges.", grad: "from-blue-500 to-cyan-600"
      }
    ],
    [
      {
        title: "Collaborate & Communicate", icon: <Users className="w-16 h-16 text-green-500" />, desc: "Collaboration fuels clarity. We thrive in teams, sharing ideas, feedback, and knowledge to communicate even the most technical concepts in ways that resonate.", grad: "from-green-500 to-teal-600"
      },
      {
        title: "Organize & Lead", icon: <Calendar className="w-16 h-16 text-orange-500" />, desc: "Leadership begins with structure. We manage tasks, people, and timelines with focus and flexibility to bring every initiative to a successful outcome.", grad: "from-orange-500 to-red-600"
      }
    ],
    [
      {
        title: "Design & Express", icon: <Palette className="w-16 h-16 text-pink-500" />, desc: "We believe design is storytelling. Through color, layout, and interaction, we express identity and vision, creating interfaces that inspire and engage.", grad: "from-pink-500 to-purple-600"
      },
      {
        title: "Innovate & Repeat", icon: <RotateCcw className="w-16 h-16 text-indigo-500" />, desc: "Our process never stops evolving. We reflect, refine, and reimagine continuously — because every breakthrough begins with the courage to iterate.", grad: "from-indigo-500 to-purple-600"
      }
    ]
  ];

  const [front, back] = cards[index];

  return (
    <div className="flex px-6 md:px-16 min-h-screen bg-gradient-to-b from-[#F1C985] via-[#F8F4FD] to-[#F8F4FD] relative overflow-hidden flex-col md:flex-row">
      <motion.div
        className="flex flex-col justify-center flex-1 mt-20 md:mt-0"
        initial={{ x: 100, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ delay: 0.2, duration: 0.8 }}
      >
        <h2 className="text-[48px] md:text-[80px] font-bold text-gray-900 font-poppins">
          WHAT WE <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600">DO</span>
        </h2>
        <p className="text-lg md:text-xl text-gray-600 max-w-xl mt-6">
          At SQAC, we're more than just code. We build experiences, spark innovation, and bring bold ideas to life through design, tech, and collaboration.
        </p>
      </motion.div>

      <motion.div
        className="flex-1 flex flex-col items-center justify-center relative mt-12 md:mt-0 overflow-visible"
        initial={{ x: 100, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ delay: 0.6, duration: 0.8 }}
      >
        <button onClick={() => { setFlip(false); setIndex((index - 1 + cards.length) % cards.length); }} className="absolute left-[-2.5rem] top-1/2 -translate-y-1/2 p-3 bg-purple-500 text-white rounded-full hover:bg-purple-600">←</button>

        <div className="relative w-80 md:w-96 h-[440px] md:h-[500px]" onMouseEnter={() => setFlip(true)} onMouseLeave={() => setFlip(false)}>
          {[front, back].map((card, i) => (
            <div key={i} className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${card.grad} shadow-2xl transition-all duration-700 ${flip === Boolean(i) ? 'opacity-100 rotate-y-[0deg]' : 'opacity-0 rotate-y-[180deg]'}`}>
              <div className="flex flex-col items-center justify-center h-full px-10 py-4 text-center bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20">
                <div className="mb-4 p-4 bg-white/20 rounded-full backdrop-blur-sm">{card.icon}</div>
                <h3 className="text-2xl font-bold text-white mb-2">{card.title}</h3>
                <p className="text-white/90 text-sm">{card.desc}</p>
              </div>
            </div>
          ))}
        </div>

        <button onClick={() => { setFlip(false); setIndex((index + 1) % cards.length); }} className="absolute right-[-2.5rem] top-1/2 -translate-y-1/2 p-3 bg-cyan-500 text-white rounded-full hover:bg-cyan-600">→</button>

        <div className="flex gap-2 mt-6">
          {cards.map((_, i) => (
            <div key={i} className={`h-2 rounded-full transition-all ${i === index ? 'w-8 bg-gradient-to-r from-purple-500 to-pink-500' : 'w-2 bg-gray-300'}`} />
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default WhatWeDoSection;
