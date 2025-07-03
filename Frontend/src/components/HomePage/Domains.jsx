import React, { useState } from "react";
import { motion } from "framer-motion";
import { Timeline } from "../UI/timeline";
import { FloatBox } from "../UI/floatbox";
import techImg from "../../assets/tech.jpg";
import corpImg from "../../assets/corp.jpg";

const HoverDock = ({ items, alignment = 'start' }) => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const getScale = (index) => {
    if (hoveredIndex === null) return 1;
    const distance = Math.abs(hoveredIndex - index);
    if (distance === 0) return 1.25;
    return 1;
  };

  return (
    <motion.div
      onMouseLeave={() => setHoveredIndex(null)}
      className={`flex flex-col gap-3 items-center lg:items-${alignment}`}
    >
      <div className="flex flex-wrap gap-3 justify-center">
        {items.row1.map((item, index) => (
          <motion.div
            key={item.name}
            onMouseEnter={() => setHoveredIndex(index)}
            animate={{ scale: getScale(index) }}
            transition={{ type: "spring", stiffness: 300, damping: 15 }}
          >
            <FloatBox name={item.name} desc={item.desc} />
          </motion.div>
        ))}
      </div>
      
      {items.row2 && (
        <div className="flex flex-wrap gap-3 justify-center w-full lg:w-auto">
          {items.row2.map((item, index) => (
            <motion.div
              key={item.name}
              onMouseEnter={() => setHoveredIndex(index + items.row1.length)}
              animate={{ scale: getScale(index + items.row1.length) }}
              transition={{ type: "spring", stiffness: 300, damping: 15 }}
            >
              <FloatBox name={item.name} desc={item.desc} />
            </motion.div>
          ))}
        </div>
      )}
    </motion.div>
  );
};

export default function Domains() {
  const technicalItems = {
    row1: [{ name: "Web Dev", desc: "Builds and maintains websites." }, { name: "App Dev", desc: "Creates Android and iOS apps." }],
    row2: [{ name: "AI/ML", desc: "Explores AI models and ML tools." }, { name: "Creatives", desc: "Designs visuals and edits videos." }]
  };

  const corporateItems = {
    row1: [{ name: "Events", desc: "Organizes and hosts events." }, { name: "Sponsorship", desc: "Manages funding and partners." }],
    row2: [{ name: "PR", desc: "Handles promotions and outreach." }]
  };
  
  const data = [
    {
      title: "Technical Domain",
      subtitle: "Driving innovation through technology and creativity.",
      image: <img src={techImg} className="w-full h-full rounded-full object-cover" alt="TechImg" />,
      content: (
        <div className="bg-[#200D3A]/80 backdrop-blur-sm border border-purple-800 p-8 lg:p-10 rounded-2xl shadow-lg">
          <HoverDock items={technicalItems} alignment="start" />
        </div>
      ),
    },
    {
      title: "Corporate Domain",
      subtitle: "Fostering relationships and building our brand.",
      image: <img src={corpImg} className="w-full h-full rounded-full object-cover" alt="CorporateImg" />,
      content: (
        <div className="bg-[#200D3A]/80 backdrop-blur-sm border border-purple-800 p-8 lg:p-10 rounded-2xl shadow-lg">
          <HoverDock items={corporateItems} alignment="end" />
        </div>
      ),
    },
  ];

  return (
    <div className="py-20 lg:py-32">
      <h2 className="text-4xl lg:text-5xl font-bold mb-16 lg:mb-20 text-center text-purple-400"
      id="domain">
        Domains
      </h2>
      <Timeline data={data} />
    </div>
  );
}