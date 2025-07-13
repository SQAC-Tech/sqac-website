import React, { useState, useRef } from "react";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";


import tech from "../../assets/technical.png";
import corp from "../../assets/corporate.png";
import webDevImg from "../../assets/webdev.png";
import appDevImg from "../../assets/appdev.png";
import aiMlImg from "../../assets/aiml.png"; 
import creativesImg from "../../assets/creatives.png";
import eventsImg from "../../assets/events.png";
import sponsorshipImg from "../../assets/sponsorship.png";
import prImg from "../../assets/pr.png";


const FlipCardModal = ({ item, onClose }) => {
  const [isFlipped, setIsFlipped] = useState(false);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  const handleMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePos({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  return (
    <motion.div
      className="fixed inset-0 bg-black/70 z-50 flex items-center justify-center p-4 backdrop-blur-md"
      initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
      onClick={onClose}
    >
      <div style={{ perspective: "1200px" }}>
        <motion.div
          className="relative w-[90vw] h-[60vh] max-w-lg max-h-[400px]"
          style={{ transformStyle: "preserve-3d" }}
          onClick={(e) => e.stopPropagation()}
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1, rotateY: isFlipped ? 180 : 0 }}
          exit={{ scale: 0.8, opacity: 0 }}
          transition={{ type: "spring", stiffness: 200, damping: 25 }}
        >
          
     <div
       className="absolute inset-0 w-full h-full bg-neutral-800 rounded-2xl shadow-2xl p-2"
         style={{ backfaceVisibility: "hidden" }}
          >
            <img src={item.image} alt={item.name} className="w-full h-full object-cover rounded-xl" />
        <button
           className="absolute bottom-4 left-4 px-4 py-2 text-sm font-semibold text-white bg-black/50 rounded-lg hover:bg-black/70"
              onClick={() => setIsFlipped(true)}
            >
              Show Details
            </button>
          </div>

          <div
            className="absolute inset-0 w-full h-full p-8 bg-neutral-900 rounded-2xl shadow-2xl overflow-hidden"
            style={{ backfaceVisibility: "hidden", transform: "rotateY(180deg)" }}
            onMouseMove={handleMove}
          >
            <motion.div
              className="absolute inset-0 pointer-events-none"
              style={{
                background: `radial-gradient(500px at ${mousePos.x}px ${mousePos.y}px, rgba(185, 102, 214, 0.25), transparent 80%)`,
              }}
            />
            <div className="relative z-10 flex flex-col h-full">
              <h3 className="text-3xl font-bold text-white mb-4">{item.name}</h3>
              <p className="text-neutral-300 flex-grow overflow-y-auto">{item.description}</p>
              <button
                onClick={() => setIsFlipped(false)}
                className="mt-4 self-start px-4 py-2 text-sm font-semibold text-white bg-neutral-800 rounded-lg hover:bg-neutral-700"
              >
                Show Image
              </button>
            </div>
          </div>
        </motion.div>

        <button
          onClick={onClose}
          className="absolute -top-4 -right-4 text-neutral-200 hover:text-white h-10 w-10 rounded-full flex items-center justify-center bg-neutral-800/80 border border-neutral-700"
        >
          X
        </button>
      </div>
    </motion.div>
  );
};


const FloatBox = ({ name, onClick }) => (
  <button
    onClick={onClick}
    className="px-4 py-2 bg-white/80 rounded-full shadow-md border border-[#D9A6C9] backdrop-blur-sm hover:bg-white transition-colors"
  >
    <p className="text-sm font-semibold text-[#3B0A4B]">{name}</p>
  </button>
);


const HoverDock = ({ items, onItemClick }) => (
  <div className="flex flex-wrap gap-3 mt-4">
    {items.map((item) => (
      <motion.div
        key={item.name}
        whileHover={{ scale: 1.1 }}
        transition={{ type: "spring", stiffness: 400, damping: 15 }}
      >
        <FloatBox name={item.name} onClick={() => onItemClick(item)} />
      </motion.div>
    ))}
  </div>
);

const Bubble = ({ children, className }) => (
  <div className={`bg-white/70 p-6 rounded-2xl shadow-xl border border-white/50 flex items-center backdrop-blur-sm min-h-[260px] md:min-h-[340px] ${className}`}>
    {children}
  </div>
);


const DomainContent = ({ item, isPhotoLeft, onSubdomainClick }) => {
  const Mobile = () => (
    <div className="space-y-8 lg:hidden">
      <Bubble className="justify-center">
        <img src={item.mainImage} alt="" className="max-h-48 md:max-h-52 object-contain" />
      </Bubble>
      <Bubble className="flex-col items-start">
        <p className="text-[#333] text-base md:text-lg">{item.description}</p>
        <HoverDock items={item.subdomains} onItemClick={onSubdomainClick} />
      </Bubble>
    </div>
  );

  const Desktop = () => (
    <div className="hidden lg:grid grid-cols-[1fr_5rem_1fr] gap-x-8 items-center">
      {isPhotoLeft ? (
        <>
          <Bubble className="justify-center">
            <img src={item.mainImage} alt="" className="max-h-52 object-contain" />
          </Bubble>
          <div className="relative h-full">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-white border-2 border-[#8A4E9E]" />
          </div>
          <Bubble className="flex-col items-start">
            <p className="text-[#333] text-base md:text-lg">{item.description}</p>
            <HoverDock items={item.subdomains} onItemClick={onSubdomainClick} />
          </Bubble>
        </>
      ) : (
        <>
          <Bubble className="flex-col items-start">
            <p className="text-[#333] text-base md:text-lg">{item.description}</p>
            <HoverDock items={item.subdomains} onItemClick={onSubdomainClick} />
          </Bubble>
          <div className="relative h-full">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-white border-2 border-[#8A4E9E]" />
          </div>
          <Bubble className="justify-center">
            <img src={item.mainImage} alt="" className="max-h-52 object-contain" />
          </Bubble>
        </>
      )}
    </div>
  );

  return (
    <>
      <Mobile />
      <Desktop />
    </>
  );
};

export default function Domains() {
  const [selectedItem, setSelectedItem] = useState(null);
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start center", "end center"]
  });
  const pathLength = useTransform(scrollYProgress, [0, 0.85], [0, 1]);

  const domainItems = [
    {
      description: "The Technical Domain nurtures passionate developers and designers. From building elegant websites to crafting AI models — this is where code meets creativity.",
      mainImage: tech,
      subdomains: [
        { name: "Web Dev", description: "We build modern websites — fast, beautiful, and user-friendly.", image: webDevImg },
        { name: "App Dev", description: "Creating smooth mobile apps for Android and iOS.", image: appDevImg },
        { name: "AI/ML", description: "Diving into intelligent algorithms, models, and data.", image: aiMlImg },
        { name: "Creatives", description: "Design, videos, and everything visual.", image: creativesImg }
      ]
    },
    {
      description: "The Corporate Domain powers our visibility and network. It manages events, sponsorships, and public relations, making sure our voice reaches far and wide.",
      mainImage: corp,
      subdomains: [
        { name: "Events", description: "We plan and run all events — tech and non-tech.", image: eventsImg },
        { name: "Sponsorship", description: "Bringing in sponsors and forming valuable partnerships.", image: sponsorshipImg },
        { name: "PR", description: "Managing outreach, social media, and comms.", image: prImg }
      ]
    }
  ];

  return (
    <div className="py-20 lg:py-32" style={{ background: "linear-gradient(to bottom, #F8F4FD, #FFD1EA 90%)" }}>
      <AnimatePresence>
        {selectedItem && <FlipCardModal item={selectedItem} onClose={() => setSelectedItem(null)} />}
      </AnimatePresence>

      <h2 className="text-4xl lg:text-5xl font-bold mb-12 text-center text-[#3B0A4B]">
        Our Core Domains
      </h2>

      <div ref={targetRef} className="relative max-w-5xl mx-auto px-6 mt-16 lg:mt-20">
        <div className="absolute left-1/2 top-0 h-full w-1 -translate-x-1/2 bg-neutral-300 hidden lg:block" />
        <motion.div
          className="absolute left-1/2 top-0 h-full w-1 -translate-x-1/2 hidden lg:block"
          style={{ scaleY: pathLength, transformOrigin: "top", background: "linear-gradient(to bottom, #4A1E5C, #B966D6)" }}
        />
        <div className="space-y-16 lg:space-y-24">
          {domainItems.map((item, index) => (
            <DomainContent
              key={index}
              item={item}
              isPhotoLeft={index % 2 === 0}
              onSubdomainClick={(subItem) => setSelectedItem(subItem)}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
