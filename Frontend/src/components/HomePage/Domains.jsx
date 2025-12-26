import React, { useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useTheme } from "../../contexts/ThemeContext";

import tech from "../../assets/technical.png";
import corp from "../../assets/Corp.png";
import media from "../../assets/Media.png";

const FloatBox = ({ name, description }) => {
  const [open, setOpen] = useState(false);
  const { isDarkMode } = useTheme();

  const btnGradient = isDarkMode
    ? 'from-purple-600 to-purple-800 border-purple-500 hover:from-purple-500 hover:to-purple-700'
    : 'from-orange-500 to-orange-700 border-orange-400 hover:from-orange-400 hover:to-orange-600';

  return (
    <div
      className="relative"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      <button className={`px-4 py-2 bg-gradient-to-r ${btnGradient} rounded-full shadow-md backdrop-blur-sm hover:scale-110 transition-all`}>
        <p className={`text-sm font-semibold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>{name}</p>
      </button>

      {open && (
        <motion.div
          initial={{ opacity: 0, y: 6 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.2 }}
          className={`absolute bottom-full mb-2 left-1/2 -translate-x-1/2 w-max max-w-xs px-3 py-1.5 text-xs rounded-md shadow-lg pointer-events-none z-10 ${isDarkMode ? 'bg-black/80 text-white' : 'bg-white/90 text-gray-900'}`}
        >
          {description}
        </motion.div>
      )}
    </div>
  );
};

const HoverDock = ({ items }) => (
  <div className="flex flex-wrap gap-4 mt-4 justify-center md:justify-start">
    {items.map((item) => (
      <motion.div
        key={item.name}
        whileHover={{ scale: 1.3 }}
        transition={{ type: "spring", stiffness: 500, damping: 15 }}
      >
        <FloatBox name={item.name} description={item.description} />
      </motion.div>
    ))}
  </div>
);

const Bubble = ({ children, className }) => {
  const { isDarkMode } = useTheme();

  const baseGrad = isDarkMode
    ? 'from-purple-900/20 to-purple-800/10 border-purple-500/30'
    : 'from-orange-50/10 to-orange-200/10 border-orange-300/20';

  const hoverStyles = isDarkMode
    ? {
        backgroundColor: 'rgba(147, 51, 234, 0.3)',
        borderColor: 'rgba(168, 85, 247, 0.6)',
        boxShadow: '0 8px 40px rgba(147, 51, 234, 0.4), 0 0 60px rgba(168, 85, 247, 0.3), 0 0 80px rgba(196, 181, 253, 0.2)',
        scale: 1.02,
      }
    : {
        backgroundColor: 'rgba(249,115,22,0.06)',
        borderColor: 'rgba(249,115,22,0.14)',
        boxShadow: '0 8px 40px rgba(249,115,22,0.12), 0 0 60px rgba(251,113,133,0.06)',
        scale: 1.02,
      };

  return (
    <motion.div
      className={`bg-gradient-to-b ${baseGrad} backdrop-blur-md p-6 rounded-2xl shadow-xl border flex items backdrop-blur-sm min-h-[260px] md:h-[320px] transition-all duration-300 ${className}`}
      whileHover={hoverStyles}
    >
      {children}
    </motion.div>
  );
};

const DomainContent = ({ item, isPhotoLeft }) => {
  const { isDarkMode } = useTheme();
  const Mobile = () => (
    <div className="space-y-8 md:hidden">
      <Bubble className="justify-center flex-col">
        <h3 className={`text-xl font-bold mb-2 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>{item.title}</h3>
        <img src={item.mainImage} alt="" className="max-h-48 object-contain" />
      </Bubble>
      <Bubble className="flex-col items-center">
        <p className={`${isDarkMode ? 'text-white' : 'text-gray-900'} text-center text-base `}>{item.description}</p>
        <HoverDock items={item.subdomains} />
      </Bubble>
    </div>
  );

  const Responsive = () => (
    <div className="hidden md:grid grid-cols-[1fr_2rem_1fr] gap-x-6 items-center">
      {isPhotoLeft ? (
        <>
          <Bubble className="justify-center flex-col">
            {/* <h3 className="text-3xl font-bold text-[#4A1E5C] mb-5">{item.title}</h3> */}
            <img src={item.mainImage} alt="" className="w-full h-full object-cover rounded-2xl" />
          </Bubble>
          <div className="relative h-full flex items-center justify-center">
            <div className="absolute w-4 h-4 rounded-full bg-dark-surface border-2 border-accent" />
          </div>
          <Bubble className="flex-col items-center">
            <p className={`${isDarkMode ? 'text-white' : 'text-gray-900'} text-base text-center lg:text-lg`}>{item.description}</p>
            <HoverDock items={item.subdomains} />
          </Bubble>
        </>
      ) : (
        <>
          <Bubble className="flex-col items-center">
            <p className={`${isDarkMode ? 'text-white' : 'text-gray-900'} text-base text-center lg:text-lg`}>{item.description}</p>
            <HoverDock items={item.subdomains} />
          </Bubble>
          <div className="relative h-full flex items-center justify-center">
            <div className="absolute w-4 h-4 rounded-full bg-dark-surface border-2 border-accent" />
          </div>
          <Bubble className="justify-center flex-col">
            {/* <h3 className="text-3xl font-bold text-[#4A1E5C] mb-5">{item.title}</h3> */}
            <img src={item.mainImage} alt="" className="w-full h-full object-cover rounded-2xl" />
          </Bubble>
        </>
      )}
    </div>
  );

  return (
    <>
      <Mobile />
      <Responsive />
    </>
  );
};

export default function Domains() {
  const targetRef = useRef(null);
  const { isDarkMode } = useTheme();
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start center", "end center"],
  });

  const pathLength = useTransform(scrollYProgress, [0, 0.85], [0, 1]);

  const domainItems = [
    {
      title: "Technical",
      description:
        "The Technical Domain nurtures passionate developers and designers. From building elegant websites to crafting AI models — this is where code meets creativity.",
      mainImage: tech,
      subdomains: [
        { name: "Web Dev", description: "Building responsive and dynamic websites." },
        { name: "App Dev", description: "Creating intuitive mobile applications." },
        { name: "AI/ML", description: "Developing intelligent systems and models." },
      ],
    },
    {
      title: "Corporate",
      description:
        "The Corporate Domain powers our visibility and network. It manages events, sponsorships, and public relations, making sure our voice reaches far and wide.",
      mainImage: corp,
      subdomains: [
        { name: "Events", description: "Organizing engaging events and workshops." },
        { name: "Sponsorship", description: "Securing partnerships and sponsorships." },
      ],
    },
    {
      title: "Media",
      description:
        "The Media Domain shapes our identity and amplifies our presence. It blends public relations and creative design to craft compelling stories, manage our image, and ensure our club resonates with every audience it reaches.",
      mainImage: media,
      subdomains: [
        { name: "Creatives", description: "Designing stunning graphics and user interfaces." },
        { name: "Public Relations", description: "Managing public relations and media outreach." },
      ],
    },
  ];

  return (
    <div className="py-20 lg:py-32 bg-gradient-to-b from-dark-primary via-dark-secondary to-dark-tertiary">
      <h2 className="text-4xl lg:text-5xl font-bold mb-12 text-center">
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#951D13] via-[#f34a82] to-[#F0A01F]">
          Our Core Domains
        </span>
      </h2>

      <div ref={targetRef} className="relative max-w-5xl mx-auto px-6">
        <div className={`absolute left-1/2 top-0 h-full w-1 -translate-x-1/2 ${isDarkMode ? 'bg-purple-900/50' : 'bg-orange-400/30'} hidden md:block`} />
        <motion.div
          className="absolute left-1/2 top-0 h-full w-1 -translate-x-1/2 hidden md:block"
          style={{
            scaleY: pathLength,
            transformOrigin: "top",
            background: isDarkMode ? "linear-gradient(to bottom, #7c3aed, #a855f7)" : "linear-gradient(to bottom, #f97316, #fb7185)",
          }}
        />

        <div className="space-y-20 md:space-y-24 mt-12">
          {domainItems.map((item, index) => (
            <DomainContent
              key={index}
              item={item}
              isPhotoLeft={index % 2 === 0}
            />
          ))}
        </div>
      </div>
    </div>
  );
}