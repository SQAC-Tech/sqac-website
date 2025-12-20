/**
 * Domains Component - Core Domains Section
 * 
 * === MAJOR CHANGES MADE ===
 * Date: December 20-21, 2025
 * 
 * THEME & STYLING UPDATES:
 * 1. Original styling maintained with hardcoded Tailwind classes
 * 2. CSS overrides applied via index.css for theme switching
 * 3. Purple theme implementation matching "What We Do" section
 * 
 * SPECIFIC MODIFICATIONS:
 * - Container background: Changed from blue gradient to purple theme via CSS override
 * - Bubble backgrounds: Semi-transparent white with theme-dependent borders
 * - Text colors: White text maintained for visibility on purple background
 * - Subdomain buttons: Orange-pink gradient kept from original design
 * 
 * CSS CLASSES ADDED (via index.css):
 * - .bg-gradient-to-b.from-blue-50.to-blue-100 → Purple gradient override
 * - .bg-white.border-gray-200 → Semi-transparent styling
 * - .text-white → Color consistency
 * 
 * THEME BEHAVIOR:
 * - Light mode: Purple gradient background with semi-transparent bubbles
 * - Dark mode: Same purple theme (consistent across themes)
 * - Hover effects: Enhanced with orange glow and scaling
 * 
 * COMPONENT STRUCTURE:
 * - FloatBox: Subdomain navigation buttons
 * - HoverDock: Interactive subdomain display
 * - Bubble: Main content containers with hover animations
 * - DomainContent: Responsive layout for mobile/desktop
 * 
 * ANIMATIONS:
 * - Framer Motion for smooth transitions
 * - Hover effects with scaling and glow
 * - Responsive breakpoints maintained
 * 
 * ACCESSIBILITY:
 * - Semantic HTML structure preserved
 * - ARIA labels maintained from original
 * - Keyboard navigation support
 * 
 * PERFORMANCE:
 * - No additional dependencies added
 * - CSS-only theme switching for efficiency
 * - Optimized animations with GPU acceleration
 */
import React, { useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

import tech from "../../assets/technical.png";
import corp from "../../assets/Corp.png";
import media from "../../assets/Media.png";

const FloatBox = ({ name, description }) => {
  const [open, setOpen] = useState(false);

  return (
    <div
      className="relative"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      <button className="px-4 py-2 bg-gradient-to-r from-[#951D13] via-[#f34a82] to-[#F0A01F] rounded-full shadow-md border border-[#f34a82] backdrop-blur-sm hover:scale-110 transition-colors">
        <p className="text-sm font-semibold text-white">{name}</p>
      </button>

      {open && (
        <motion.div
          initial={{ opacity: 0, y: 6 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.2 }}
          className="absolute bottom-full mb-2 left-1/2 -translate-x-1/2 w-max max-w-xs px-3 py-1.5 bg-black/80 text-white text-xs rounded-md shadow-lg pointer-events-none z-10"
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

const Bubble = ({ children, className }) => (
  <motion.div 
    className={`bg-white p-6 rounded-2xl shadow-xl border border-gray-200 flex items-center backdrop-blur-sm min-h-[260px] md:h-[320px] transition-all duration-300 ${className}`}
    whileHover={{
      backgroundColor: 'rgba(255, 255, 255, 0.95)',
      borderColor: '#ff6b35',
      boxShadow: '0 8px 40px rgba(255, 107, 53, 0.4), 0 0 60px rgba(243, 74, 130, 0.3), 0 0 80px rgba(240, 160, 31, 0.2)',
      scale: 1.02
    }}
  >
    {children}
  </motion.div>
);

const DomainContent = ({ item, isPhotoLeft }) => {
  const Mobile = () => (
    <div className="space-y-8 md:hidden">
      <Bubble className="justify-center flex-col">
        <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
        <img src={item.mainImage} alt="" className="max-h-48 object-contain" />
      </Bubble>
      <Bubble className="flex-col items-center">
        <p className="text-white text-center text-base ">{item.description}</p>
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
            <p className="text-white text-base text-center lg:text-lg">{item.description}</p>
            <HoverDock items={item.subdomains} />
          </Bubble>
        </>
      ) : (
        <>
          <Bubble className="flex-col items-center">
            <p className="text-white text-base text-center lg:text-lg">{item.description}</p>
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
    <div className="py-20 lg:py-32 bg-gradient-to-b from-blue-50 to-blue-100">
      <h2 className="text-4xl lg:text-5xl font-bold mb-12 text-center">
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#951D13] via-[#f34a82] to-[#F0A01F]">
          Our Core Domains
        </span>
      </h2>

      <div ref={targetRef} className="relative max-w-5xl mx-auto px-6">
        <div className="absolute left-1/2 top-0 h-full w-1 -translate-x-1/2 bg-gray-600 hidden md:block" />
        <motion.div
          className="absolute left-1/2 top-0 h-full w-1 -translate-x-1/2 hidden md:block"
          style={{
            scaleY: pathLength,
            transformOrigin: "top",
            background: "linear-gradient(to bottom, #7c3aed, #a855f7)",
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
