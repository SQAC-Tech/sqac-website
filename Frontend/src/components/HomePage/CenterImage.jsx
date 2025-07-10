import { useEffect, useState } from "react";
import {
  motion,
  useScroll,
  useTransform,
  useMotionTemplate,
} from "framer-motion";
import Layer from "../../assets/glow.png";
import Logo from '../../assets/LogoSQAC.png'

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
    <div className="sticky top-0 w-full h-screen overflow-hidden ">
     <div className="absolute inset-0 z-0 bg-gradient-to-br from-[#FFD1EA] to-purple-200 flex flex-col items-center justify-center space-y-4">
  {/* SQAC Logo */}
  <motion.img
    src={Logo}
    alt="SQAC Logo"
    className="w-24 md:w-32 h-auto animate-glowBlink"
    initial={{ scale: 1 }}
    animate={{ scale: [1, 1.05, 1] }}
    transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
    style={{
      filter: `
        drop-shadow(0 0 10px rgba(236, 72, 153, 1))
        drop-shadow(0 0 20px rgba(236, 72, 153, 0.8))
        drop-shadow(0 0 30px rgba(236, 72, 153, 0.6))
      `,
    }}
  />

  {/* Glowing Heading */}
  <motion.h1
    className="text-4xl md:text-7xl font-extrabold text-pink-600 text-center px-4 animate-glowBlink mb-20"
    initial={{ scale: 1 }}
    animate={{ scale: [1, 1.05, 1] }}
    transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
    style={{
      textShadow: `
        0 0 10px rgba(236, 72, 153, 1),
        0 0 20px rgba(236, 72, 153, 0.8),
        0 0 30px rgba(236, 72, 153, 0.6)
      `,
    }}
  >
    Scroll to Know More !!
  </motion.h1>
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
