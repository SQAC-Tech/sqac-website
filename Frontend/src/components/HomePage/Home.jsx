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
    <section className="relative min-h-screen w-full flex items-center justify-center px-4 sm:px-8 md:px-12 lg:px-20 overflow-hidden projects-section">
      {/* Animated background elements */}
      <motion.div
        className="absolute inset-0 z-0"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2 }}
      >
        {/* Floating orbs */}
        <motion.div
          className="absolute top-20 left-10 w-32 h-32 rounded-full blur-xl opacity-20"
          style={{ backgroundColor: isDarkMode ? "#f34a82" : "#f34a82" }}
          variants={floatingVariants}
          animate="animate"
        />
        <motion.div
          className="absolute top-40 right-20 w-24 h-24 rounded-full blur-xl opacity-15"
          style={{ backgroundColor: isDarkMode ? "#F0A01F" : "#F0A01F" }}
          variants={floatingVariants}
          animate="animate"
          transition={{ delay: 2 }}
        />
        <motion.div
          className="absolute bottom-32 left-1/4 w-40 h-40 rounded-full blur-xl opacity-10"
          style={{ backgroundColor: isDarkMode ? "#951D13" : "#951D13" }}
          variants={floatingVariants}
          animate="animate"
          transition={{ delay: 4 }}
        />

        {/* Animated particles */}
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 rounded-full opacity-60"
            style={{
              backgroundColor: isDarkMode ? "#f34a82" : "#93c5fd",
              left: `${20 + i * 10}%`,
              top: `${30 + (i % 3) * 20}%`,
            }}
            custom={i}
            variants={particleVariants}
            animate="animate"
          />
        ))}
      </motion.div>

      {/* Main gradient orb */}
      <motion.div
        className="absolute w-[600px] sm:w-[800px] md:w-[900px] h-[600px] sm:h-[800px] md:h-[900px] rounded-full blur-3xl top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-0"
        style={{
          background: isDarkMode
            ? "radial-gradient(circle, #f34a82 0%, #F0A01F 50%, #951D13 100%)"
            : "radial-gradient(circle, #f34a82 0%, #F0A01F 50%, #951D13 100%)",
        }}
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 0.3 }}
        transition={{ duration: 2, ease: "easeOut" }}
      />

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-10 w-full max-w-7xl flex flex-col lg:flex-row items-center justify-center gap-10 sm:gap-14 md:gap-20 text-center lg:text-left"
      >
        {/* Left Side (Title and Tagline) */}
        <motion.div
          className="flex flex-col items-center lg:items-end space-y-4 mb-6"
          variants={itemVariants}
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          viewport={{ once: true }}
        >
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
            className={`text-[7rem] sm:text-8xl md:text-[180px] lg:text-[120px] xl:text-[180px] mt-6 font-extrabold bg-clip-text text-transparent leading-tight animate-pulse-glow ${
              isDarkMode
                ? "bg-gradient-to-tr from-[#951D13] via-[#f34a82] to-[#F0A01F]"
                : "bg-gradient-to-tr from-[#951D13] via-[#f34a82] to-[#F0A01F]"
            }`}
            whileHover={{ scale: 1.05 }}
          >
            SQAC
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 0.6 }}
            viewport={{ once: true }}
            className="text-base sm:text-2xl md:text-[2.5rem] font-semibold px-2"
          >
            <span
              className={`text-transparent bg-clip-text ${
                isDarkMode
                  ? "bg-gradient-to-tr from-[#951D13] via-[#f34a82] to-[#F0A01F]"
                  : "bg-gradient-to-tr from-[#951D13] via-[#f34a82] to-[#F0A01F]"
              }`}
            >
              "Where Code Meets Quality"
            </span>
          </motion.p>
        </motion.div>

        {/* Center (Logo) */}
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
          className={`w-[250px] sm:w-[220px] md:w-[370px] lg:w-[350px] aspect-square rounded-full border-[6px] sm:border-[8px] bg-white/30 backdrop-blur-xl shadow-2xl flex items-center justify-center transition-all duration-500 hover:shadow-3xl ${
            isDarkMode
              ? "hover:shadow-[0_0_50px_rgba(243,74,130,0.8)]"
              : "hover:shadow-[0_0_50px_rgba(243,74,130,0.8)]"
          }`}
          style={{
            borderColor: isDarkMode ? "#f34a82" : "#f34a82",
            boxShadow: isDarkMode
              ? "0 0 40px rgba(243, 74, 130, 0.3)"
              : "0 0 40px rgba(243, 74, 130, 0.3)",
          }}
        >
          <motion.img
            src={SQAC}
            alt="SQAC Logo"
            className="w-40 sm:w-36 md:w-60 lg:w-45"
            whileHover={{ scale: 1.1 }}
            transition={{ type: "spring", stiffness: 300 }}
          />
        </motion.div>

        {/* Right Side (Full Form) */}
        <motion.div
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          viewport={{ once: true, amount: 0.5 }}
          className="max-w-xs sm:max-w-sm md:max-w-md"
        >
          <motion.h2
            className="text-3xl sm:text-4xl md:text-4xl lg:text-[44px] font-bold font-poppins"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 1.2, duration: 0.6 }}
          >
            <span
              className={`text-transparent bg-clip-text ${
                isDarkMode
                  ? "bg-gradient-to-tr from-[#951D13] via-[#f34a82] to-[#F0A01F]"
                  : "bg-gradient-to-tr from-[#951D13] via-[#f34a82] to-[#F0A01F]"
              }`}
            >
              Software Quality
              <br />
              Assurance Community
            </span>
          </motion.h2>
        </motion.div>
      </motion.div>
    </section>
  );
}
