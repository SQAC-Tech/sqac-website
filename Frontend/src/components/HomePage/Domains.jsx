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
      <button className="px-4 py-2 bg-white/80 dark:bg-zinc-900/80 rounded-full shadow-md border border-[#D9A6C9] dark:border-white/10 backdrop-blur-sm hover:bg-white dark:hover:bg-zinc-800 transition-colors">
        <p className="text-sm font-semibold text-[#3B0A4B] dark:text-gray-200">
          {name}
        </p>
      </button>

      {open && (
        <motion.div
          initial={{ opacity: 0, y: 6 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.2 }}
          className="absolute bottom-full mb-2 left-1/2 -translate-x-1/2 w-max max-w-xs px-3 py-1.5 bg-black/80 dark:bg-black/90  text-white text-xs rounded-md shadow-lg pointer-events-none z-10"
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
  <div
    className={`bg-white/70 dark:bg-zinc-900/70 p-6 rounded-2xl shadow-xl border border-white/50 dark:border-white/10 flex items-center backdrop-blur-sm min-h-[260px] md:h-[320px] ${className}`}
  >
    {children}
  </div>
);

const DomainContent = ({ item, isPhotoLeft }) => {
  const Mobile = () => (
    <div className="space-y-8 md:hidden">
      <Bubble className="justify-center flex-col">
        <h3 className="text-xl font-bold text-[#4A1E5C] dark:text-purple-300 mb-2">
          {item.title}
        </h3>
        <img src={item.mainImage} alt="" className="max-h-48 object-contain" />
      </Bubble>

      <Bubble className="flex-col items-center">
        <p className="text-[#333] dark:text-gray-300 text-center text-base">
          {item.description}
        </p>
        <HoverDock items={item.subdomains} />
      </Bubble>
    </div>
  );

  const Responsive = () => (
    <div className="hidden md:grid grid-cols-[1fr_2rem_1fr] gap-x-6 items-center">
      {isPhotoLeft ? (
        <>
          <Bubble className="justify-center flex-col">
            <img
              src={item.mainImage}
              alt=""
              className="w-full h-full object-cover rounded-2xl"
            />
          </Bubble>

          <div className="relative h-full flex items-center justify-center">
            <div className="absolute w-4 h-4 rounded-full bg-white dark:bg-zinc-900 border-2 border-[#8A4E9E] dark:border-purple-400" />
          </div>

          <Bubble className="flex-col items-center">
            <p className="text-[#333] dark:text-gray-300 text-base text-center lg:text-lg">
              {item.description}
            </p>
            <HoverDock items={item.subdomains} />
          </Bubble>
        </>
      ) : (
        <>
          <Bubble className="flex-col items-center">
            <p className="text-[#333] dark:text-gray-300 text-base text-center lg:text-lg">
              {item.description}
            </p>
            <HoverDock items={item.subdomains} />
          </Bubble>

          <div className="relative h-full flex items-center justify-center">
            <div className="absolute w-4 h-4 rounded-full bg-white dark:bg-zinc-900 border-2 border-[#8A4E9E] dark:border-purple-400" />
          </div>

          <Bubble className="justify-center flex-col">
            <img
              src={item.mainImage}
              alt=""
              className="w-full h-full object-cover rounded-2xl"
            />
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
    <div className="py-20 lg:py-32 bg-gradient-to-b from-orange-300 via-fuchsia-100 to-cyan-200 dark:from-[#12081f] dark:via-zinc-900 dark:to-zinc-800">
      <h2 className="text-4xl lg:text-5xl font-bold mb-12 text-center text-[#3B0A4B] dark:text-purple-300">
        Our Core Domains
      </h2>

      <div ref={targetRef} className="relative max-w-5xl mx-auto px-6">
        <div className="absolute left-1/2 top-0 h-full w-1 -translate-x-1/2 bg-neutral-300 dark:bg-zinc-700 hidden md:block" />

        <motion.div
          className="absolute left-1/2 top-0 h-full w-1 -translate-x-1/2 hidden md:block"
          style={{
            scaleY: pathLength,
            transformOrigin: "top",
            background: "linear-gradient(to bottom, #4A1E5C, #B966D6)",
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
