import { motion } from "framer-motion";
import SQAC from "../../assets/LogoSQAC.png";
import { useTheme } from "../../contexts/ThemeContext";

export default function LandingHero() {
  const { isDarkMode } = useTheme();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 12,
        mass: 0.5,
      },
    },
  };

  // Floating animation variants
  const floatingVariants = {
    animate: {
      y: [-10, 10, -10],
      transition: {
        duration: 6,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
  };

  // Particle animation variants
  const particleVariants = {
    animate: (i) => ({
      y: [0, -100, 0],
      x: [0, Math.sin(i) * 50, 0],
      opacity: [0, 1, 0],
      transition: {
        duration: 4,
        repeat: Infinity,
        delay: i * 0.5,
        ease: "easeInOut",
      },
    }),
  };

  return (
    <section
      className="
        relative min-h-screen w-full flex items-center justify-center
        px-4 sm:px-8 md:px-12 lg:px-20 overflow-hidden
        bg-gradient-to-b
        from-[#f3d79e] via-[#f3d8ad] to-red-300
        dark:from-zinc-950 dark:via-zinc-900 dark:to-[#0f0a1a]
      "
    >
      {/* Blurred background circle */}
      <div
        className="
          absolute w-[500px] sm:w-[500px] md:w-[900px]
          h-[600px] sm:h-[800px] md:h-[600px]
          bg-pink-300 dark:bg-purple-600
          opacity-20 dark:opacity-15
          rounded-full blur-3xl
          top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-0
        "
      />

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-10 w-full max-w-7xl flex flex-col lg:flex-row items-center justify-center gap-10 sm:gap-14 md:gap-20 text-center lg:text-left"
      >
        {/* Left Side (Title and Tagline) */}
        <motion.div className="flex flex-col items-center lg:items-end space-y-4 mb-6">
          <motion.h1
            initial={{ scale: 0.5, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{
              delay: 0.6,
              type: "spring",
              stiffness: 200,
              damping: 15,
            }}
            viewport={{ once: true, amount: 0.5 }}
            className="text-[7rem] sm:text-8xl md:text-[180px] lg:text-[120px] xl:text-[180px] mt-6 font-extrabold bg-clip-text text-transparent bg-gradient-to-tr from-[#951D13] via-[#f34a82] to-[#F0A01F] leading-tight"
          >
            SQAC
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 0.6 }}
            viewport={{ once: true }}
            className="text-base sm:text-2xl md:text-[2.5rem] font-semibold px-2">
            <span className="text-transparent bg-clip-text bg-gradient-to-tr from-[#951D13] via-[#f34a82] to-[#F0A01F]">
              "Where Code Meets Quality"
            </span>
          </motion.p>
        </motion.div>

        {/* Center Logo */}
        <motion.div
          initial={{ scale: 0, rotate: -180, opacity: 0 }}
          whileInView={{ scale: 1, rotate: 0, opacity: 1 }}
          transition={{
            delay: 0.8,
            type: "spring",
            stiffness: 200,
            damping: 20,
          }}
          whileHover={{
            rotate: [0, -10, 10, 0],
            scale: 1.1,
            transition: { duration: 0.5 },
          }}
          viewport={{ once: true, amount: 0.5 }}
          className={`w-[250px] sm:w-[220px] md:w-[370px] lg:w-[350px] aspect-square rounded-full border-[6px] sm:border-[8px] bg-white/30 backdrop-blur-xl shadow-2xl flex items-center justify-center transition-all duration-300 ${isDarkMode ? 'hover:shadow-[0_0_40px_rgba(124,58,237,0.6)]' : 'hover:shadow-[0_0_40px_rgba(249,115,22,0.6)]'}`}
          style={{ borderColor: isDarkMode ? '#7c3aed' : '#f97316' }}
        >
          <img src={SQAC} alt="SQAC Logo" className="w-40 sm:w-36 md:w-60  lg:w-45" />
        </motion.div>

        {/* Right Side */}
        <motion.div
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          viewport={{ once: true, amount: 0.5 }}
          className="max-w-xs sm:max-w-sm md:max-w-md"
        >
          <h2 className="text-3xl sm:text-4xl md:text-4xl lg:text-[44px] font-bold font-poppins">
            <span className="text-transparent bg-clip-text bg-gradient-to-tr from-[#951D13] via-[#f34a82] to-[#F0A01F]">
              Software Quality<br />Assurance Community
            </span>
          </h2>
        </motion.div>
      </motion.div>
    </section>
  );
}
