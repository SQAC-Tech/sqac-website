import { useEffect, useState } from "react";
import { motion, useScroll, useTransform, useMotionTemplate } from "framer-motion";
import Layer from "../../assets/glow.png";

function CenterImage({ sectionHeight }) {
  const { scrollY } = useScroll();

  const [bgSize, setBgSize] = useState("cover");

  useEffect(() => {
    const checkWidth = () => {
      if (window.innerWidth < 768) {
        setBgSize("contain");
      } else {
        setBgSize("cover");
      }
    };
    checkWidth();
    window.addEventListener("resize", checkWidth);
    return () => window.removeEventListener("resize", checkWidth);
  }, []);

  const clip1 = useTransform(scrollY, [0, sectionHeight], [25, 0]);
  const clip2 = useTransform(scrollY, [0, sectionHeight], [25, 100]);
  const clip3 = useTransform(scrollY, [0, sectionHeight], [75, 100]);
  const clip4 = useTransform(scrollY, [0, sectionHeight], [75, 0]);

  const activeClip = useMotionTemplate`
    polygon(
      ${clip1}% ${clip1}%,
      ${clip2}% ${clip1}%,
      ${clip3}% ${clip3}%,
      ${clip4}% ${clip3}%
    )
  `;

  const gradientOpacity = useTransform(
    scrollY,
    [sectionHeight, sectionHeight + 300],
    [0, 1]
  );

  return (
    <div className="sticky top-0 w-full h-screen overflow-hidden relative">
      
      <div className="absolute inset-0 z-0 bg-gradient-to-br from-[#FFD1EA] to-purple-200 flex items-center justify-center">
        <h1 className="text-5xl md:text-7xl font-extrabold text-pink-600 drop-shadow-md text-center px-4">
          Scroll to Know More 
        </h1>
      </div>

      
      <motion.div
        className="absolute inset-0 z-10"
        style={{
          clipPath: activeClip,
          backgroundImage: `url(${Layer})`,
          backgroundSize: bgSize,
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        
        <motion.div
          style={{
            opacity: gradientOpacity,
            background:
              "linear-gradient(to bottom, rgba(220, 38, 120, 0.7) 0%, rgba(147, 51, 234, 0.5) 100%)",
            width: "100%",
            height: "100%",
            position: "absolute",
            top: 0,
            left: 0,
            pointerEvents: "none",
          }}
        />
      </motion.div>
    </div>
  );
}

export default CenterImage;
