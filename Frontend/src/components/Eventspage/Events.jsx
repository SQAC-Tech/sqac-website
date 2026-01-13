import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useTheme } from "../../contexts/ThemeContext";
import {
  ChevronLeft,
  ChevronRight,
  BookOpen,
  X,
  Calendar,
  MapPin,
  ArrowRight,
  Trophy,
  Users,
  Clock,
  Award,
  FileText,
  Star,
  Moon,
  Sun,
} from "lucide-react";
import mineverse from "../../assets/image.png";
import EventsPhoto from "../../assets/Events-photo.png";
import LogoSQAC from "../../assets/LogoSQAC.png";

const Events = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.4,
        ease: "easeOut",
      },
    },
  };

  const events = [
    {
      id: 1,
      title: "MineVerse",
      description:
        "Compete in coding challenges, trade resources, and build your empire in this thrilling strategy-based event.",
      date: "Coming Soon",
      venue: "To be announced",
      image: mineverse,
      link: "https://mineverse-sqac.vercel.app/",
      gradient: "from-purple-500 to-pink-500",
      bgColor: "from-[#b6f0ff] to-[#dcb6ff]",
      highlights: ["Strategy Gaming", "Coding Challenges", "Resource Trading"],
    },

    {
      id: 2,
      title: "More Events Coming Soon",
      description: "Stay tuned for exciting new events!",
      date: "Coming Soon",
      venue: "To be announced",
      image: EventsPhoto,
      link: null,
      gradient: "from-gray-500 to-gray-600",
      bgColor: "from-gray-100 to-gray-200",
      highlights: [],
    },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);
  const [phase, setPhase] = useState("start"); // 'start', 'loading', 'journey'
  const [countdown, setCountdown] = useState(3);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isFlipped, setIsFlipped] = useState(false);
  const { isDarkMode, toggleTheme } = useTheme();

  useEffect(() => {
    if (phase === "loading" && countdown > 0) {
      const timer = setTimeout(() => {
        setCountdown(countdown - 1);
      }, 1000);
      return () => clearTimeout(timer);
    } else if (phase === "loading" && countdown === 0) {
      setPhase("journey");
    }
  }, [phase, countdown]);

  const nextSlide = () => {
    if (currentSlide < events.length - 1) {
      setCurrentSlide(currentSlide + 1);
      setIsFlipped(false); // Reset flip on slide change
    }
  };

  const prevSlide = () => {
    if (currentSlide > 0) {
      setCurrentSlide(currentSlide - 1);
    }
  };

  const startJourney = () => {
    setPhase("loading");
    setCountdown(3);
  };

  const openModal = (event) => {
    setSelectedEvent(event);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedEvent(null);
  };

  const currentEvent = events[currentSlide] ?? null;

  return (
    <motion.div
      className={`min-h-screen flex flex-col items-center justify-center px-4 py-10 relative overflow-hidden ${
        isDarkMode ? "bg-black" : "bg-white"
      }`}
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      {/* Floating Particles - Reduced from 20 to 8 for better performance */}
      {[...Array(8)].map((_, i) => (
        <motion.div
          key={i}
          className={`absolute w-2 h-2 rounded-full opacity-30 ${
            isDarkMode ? "bg-orange-300" : "bg-white"
          }`}
          variants={itemVariants}
          initial={{
            x: Math.random() * window.innerWidth,
            y: Math.random() * window.innerHeight,
          }}
          animate={{
            x: Math.random() * window.innerWidth,
            y: Math.random() * window.innerHeight,
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: Math.random() * 8 + 8,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      ))}

      {/* Animated Background Orbs - Reduced to 3 for better performance */}
      <motion.div
        className={`absolute top-10 left-10 w-32 h-32 rounded-full opacity-20 blur-xl ${
          isDarkMode ? "bg-orange-400" : "bg-white"
        }`}
        variants={itemVariants}
        animate={{
          scale: [1, 1.2, 1],
          rotate: [0, 180, 360],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className={`absolute bottom-20 right-20 w-40 h-40 rounded-full opacity-20 blur-2xl ${
          isDarkMode ? "bg-orange-500" : "bg-white"
        }`}
        variants={itemVariants}
        animate={{
          scale: [1, 1.3, 1],
          rotate: [360, 180, 0],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className={`absolute top-1/2 left-1/4 w-24 h-24 rounded-full opacity-15 blur-lg ${
          isDarkMode ? "bg-orange-300" : "bg-white"
        }`}
        variants={itemVariants}
        animate={{
          scale: [1, 1.4, 1],
          x: [0, 50, 0],
          y: [0, -30, 0],
        }}
        transition={{
          duration: 7,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Journey Start Screen */}
      <AnimatePresence mode="wait">
        {phase === "start" ? (
          <motion.div
            key="journey-start"
            variants={itemVariants}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.6, ease: "easeInOut" }}
            className={`relative w-full max-w-6xl h-[400px] mx-auto cursor-pointer ${
              isDarkMode ? "" : "bg-white"
            }`}
            onClick={startJourney}
          >
            {isDarkMode ? (
              <div className="w-full h-full rounded-lg p-1 bg-gradient-to-r from-orange-400 via-pink-500 to-purple-600">
                <motion.div
                  className="w-full h-full rounded-lg shadow-2xl bg-gradient-to-br from-gray-800 via-gray-900 to-black relative overflow-hidden"
                  whileHover={{ scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                >
                  {/* Journey Design */}
                  <div className="absolute inset-0 bg-gradient-to-br from-gray-700/80 to-gray-800/80" />
                  <div className="absolute inset-4 border-2 rounded-md border-orange-400" />

                  {/* Journey Title */}
                  <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-12">
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{
                        delay: 0.3,
                        type: "spring",
                        stiffness: 200,
                      }}
                    >
                      <img
                        src={LogoSQAC}
                        alt="SQAC Logo"
                        className="w-24 h-24 mb-6"
                      />
                    </motion.div>
                    <motion.h1
                      className="text-5xl font-bold mb-4 text-white"
                      initial={{ y: 20, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ delay: 0.5 }}
                    >
                      SQAC Events Journey
                    </motion.h1>
                    <motion.p
                      className="text-lg text-gray-300"
                      initial={{ y: 20, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ delay: 0.7 }}
                    >
                      Embark on an exciting journey through our events
                    </motion.p>
                  </div>

                  {/* Decorative Elements */}
                  <div className="absolute top-8 left-8 w-12 h-12 rounded-full opacity-60 bg-orange-400" />
                  <div className="absolute bottom-8 right-8 w-10 h-10 rounded-full opacity-60 bg-orange-500" />
                  <div className="absolute top-1/2 right-12 w-8 h-8 rounded-full opacity-40 bg-orange-300" />
                  <div className="absolute top-12 right-12 w-6 h-6 rounded-full opacity-50 bg-orange-600" />
                  <div className="absolute bottom-12 left-12 w-8 h-8 rounded-full opacity-40 bg-orange-200" />
                </motion.div>
              </div>
            ) : (
              <motion.div
                className="w-full h-full rounded-lg shadow-2xl border-4 bg-white border-white relative overflow-hidden"
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                {/* Journey Design */}
                <div className="absolute inset-0 bg-white" />
                <div className="absolute inset-4 border-2 rounded-md border-gray-300" />

                {/* Journey Title */}
                <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-12">
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.3, type: "spring", stiffness: 200 }}
                  >
                    <img
                      src={LogoSQAC}
                      alt="SQAC Logo"
                      className="w-24 h-24 mb-6"
                    />
                  </motion.div>
                  <motion.h1
                    className="text-5xl font-bold mb-4 text-black"
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.5 }}
                  >
                    SQAC Events Journey
                  </motion.h1>
                  <motion.p
                    className="text-lg text-gray-800"
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.7 }}
                  >
                    Embark on an exciting journey through our events
                  </motion.p>
                </div>

                {/* Decorative Elements */}
                <div className="absolute top-8 left-8 w-12 h-12 rounded-full opacity-60 bg-white" />
                <div className="absolute bottom-8 right-8 w-10 h-10 rounded-full opacity-60 bg-white" />
                <div className="absolute top-1/2 right-12 w-8 h-8 rounded-full opacity-40 bg-white" />
                <div className="absolute top-12 right-12 w-6 h-6 rounded-full opacity-50 bg-white" />
                <div className="absolute bottom-12 left-12 w-8 h-8 rounded-full opacity-40 bg-white" />
              </motion.div>
            )}
          </motion.div>
        ) : phase === "loading" ? (
          <motion.div
            key="loading-screen"
            variants={itemVariants}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.6, ease: "easeInOut" }}
            className="relative w-full max-w-6xl h-[400px] mx-auto flex items-center justify-center"
          >
            <motion.div
              className="text-center"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
            >
              <motion.h1
                className={`text-6xl font-bold mb-4 ${
                  isDarkMode ? "text-white" : "text-black"
                }`}
                animate={{ scale: [1, 1.1, 1] }}
                transition={{
                  duration: 1,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                {countdown}
              </motion.h1>
              <motion.p
                className={`text-lg ${
                  isDarkMode ? "text-gray-300" : "text-gray-700"
                }`}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
              >
                Get ready for the journey...
              </motion.p>
            </motion.div>
          </motion.div>
        ) : (
          <motion.div
            key="journey-slides"
            variants={itemVariants}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative w-full max-w-6xl mx-auto"
          >
            {/* Close Journey Button */}
            <motion.button
              onClick={() => setPhase("start")}
              className={`absolute -top-16 right-0 z-20 px-4 py-2 text-white rounded-full shadow-lg transition-all duration-300 flex items-center space-x-2 ${
                isDarkMode
                  ? "bg-gradient-to-r from-orange-400 to-orange-600 hover:from-orange-500 hover:to-orange-700"
                  : "bg-gradient-to-r from-purple-500 to-pink-600 hover:from-purple-600 hover:to-pink-700"
              }`}
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              style={{
                boxShadow: isDarkMode
                  ? "0 4px 15px rgba(255, 165, 0, 0.3)"
                  : "0 4px 15px rgba(147, 51, 234, 0.3)",
              }}
            >
              <img src={LogoSQAC} alt="SQAC Logo" className="w-4 h-4" />
              <span className="text-sm font-semibold">End Journey</span>
            </motion.button>

            {/* Journey Slides */}
            <div className="relative flex justify-center items-center">
              <AnimatePresence mode="wait">
                {isDarkMode ? (
                  <div className="relative w-full max-w-4xl h-[500px] p-1 bg-gradient-to-r from-orange-400 via-pink-500 to-purple-600 rounded-2xl">
                    <motion.div
                      key={currentSlide}
                      initial={{ opacity: 0, x: 300, scale: 0.8 }}
                      animate={{ opacity: 1, x: 0, scale: 1 }}
                      exit={{ opacity: 0, x: -300, scale: 0.8 }}
                      transition={{
                        duration: 0.6,
                        ease: "easeInOut",
                        type: "spring",
                        stiffness: 100,
                        damping: 15,
                      }}
                      className="relative w-full h-full bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-md rounded-2xl shadow-2xl border border-orange-500 overflow-hidden"
                      style={{
                        boxShadow:
                          "0 0 50px rgba(0,0,0,0.3), inset 0 0 50px rgba(255,255,255,0.05)",
                      }}
                    >
                      {/* Slide Background */}
                      <div className="absolute inset-0">
                        <img
                          src={events[currentSlide].image}
                          alt={`${events[currentSlide].title} Event`}
                          className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
                      </div>

                      {/* Slide Content */}
                      <div
                        className="relative h-full flex flex-col justify-end p-8 text-white cursor-pointer"
                        onClick={() => setIsFlipped(!isFlipped)}
                      >
                        <AnimatePresence mode="wait">
                          {!isFlipped ? (
                            <motion.div
                              key="front"
                              initial={{ opacity: 0, rotateY: -90 }}
                              animate={{ opacity: 1, rotateY: 0 }}
                              exit={{ opacity: 0, rotateY: 90 }}
                              transition={{ duration: 0.6, ease: "easeInOut" }}
                              className="flex flex-col justify-end h-full"
                            >
                              <motion.div
                                initial={{ y: 50, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                transition={{ delay: 0.3, duration: 0.5 }}
                              >
                                <h2 className="text-4xl font-bold mb-4 drop-shadow-lg text-white">
                                  {events[currentSlide].title}
                                </h2>
                                <p className="text-lg leading-relaxed mb-6 max-w-2xl text-white">
                                  {events[currentSlide].description}
                                </p>

                                {/* Event Details */}
                                {events[currentSlide].id !== 3 && (
                                  <div className="flex flex-wrap gap-6 mb-6">
                                    <div className="flex items-center space-x-2 bg-white/20 backdrop-blur-md rounded-full px-4 py-2">
                                      <Calendar className="w-5 h-5" />
                                      <span className="font-semibold">
                                        {events[currentSlide].date}
                                      </span>
                                    </div>
                                    <div className="flex items-center space-x-2 bg-white/20 backdrop-blur-md rounded-full px-4 py-2">
                                      <MapPin className="w-5 h-5" />
                                      <span className="font-semibold">
                                        {events[currentSlide].venue}
                                      </span>
                                    </div>
                                  </div>
                                )}

                                {/* Action Button */}
                                {/* Action Button — only show if the event has a link */}
                                {events[currentSlide].link && (
                                  <motion.button
                                    onClick={(e) => {
                                      e.stopPropagation();
                                      window.open(
                                        events[currentSlide].link,
                                        "_blank"
                                      );
                                    }}
                                    className={`inline-flex items-center space-x-2 px-8 py-3 text-white rounded-full hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl ${
                                      isDarkMode
                                        ? "bg-gradient-to-r from-orange-400 to-orange-600 hover:from-orange-500 hover:to-orange-700"
                                        : `bg-gradient-to-r ${events[currentSlide].gradient}`
                                    }`}
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                  >
                                    <span className="font-semibold">
                                      Explore More
                                    </span>
                                    <ArrowRight className="w-5 h-5" />
                                  </motion.button>
                                )}
                              </motion.div>
                            </motion.div>
                          ) : (
                            <motion.div
                              key="back"
                              initial={{ opacity: 0, rotateY: 90 }}
                              animate={{ opacity: 1, rotateY: 0 }}
                              exit={{ opacity: 0, rotateY: -90 }}
                              transition={{ duration: 0.6, ease: "easeInOut" }}
                              className="flex flex-col justify-center items-center h-full text-center"
                            >
                              <motion.div
                                initial={{ scale: 0.8, opacity: 0 }}
                                animate={{ scale: 1, opacity: 1 }}
                                transition={{ delay: 0.2, duration: 0.5 }}
                              >
                                <h3 className="text-3xl font-bold mb-6 drop-shadow-lg text-white">
                                  Event Highlights
                                </h3>
                                <div className="space-y-4">
                                  {events[currentSlide].highlights.map(
                                    (highlight, index) => (
                                      <motion.div
                                        key={index}
                                        initial={{ x: -50, opacity: 0 }}
                                        animate={{ x: 0, opacity: 1 }}
                                        transition={{
                                          delay: 0.3 + index * 0.1,
                                          duration: 0.5,
                                        }}
                                        className="flex items-center space-x-3 bg-white/20 backdrop-blur-md rounded-lg px-6 py-3"
                                      >
                                        <Star className="w-6 h-6 text-yellow-400" />
                                        <span className="text-lg font-semibold">
                                          {highlight}
                                        </span>
                                      </motion.div>
                                    )
                                  )}
                                </div>
                                <motion.p
                                  initial={{ y: 20, opacity: 0 }}
                                  animate={{ y: 0, opacity: 1 }}
                                  transition={{ delay: 0.8, duration: 0.5 }}
                                  className="mt-6 text-sm opacity-80 text-white"
                                >
                                  Click to flip back
                                </motion.p>
                              </motion.div>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>

                      {/* Slide Indicators */}
                      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
                        {events.map((_, index) => (
                          <motion.div
                            key={index}
                            className={`w-3 h-3 rounded-full ${
                              index === currentSlide
                                ? "bg-white"
                                : "bg-white/50"
                            }`}
                            animate={{
                              scale: index === currentSlide ? 1.2 : 1,
                            }}
                            transition={{ duration: 0.3 }}
                          />
                        ))}
                      </div>
                    </motion.div>
                  </div>
                ) : (
                  <motion.div
                    key={currentSlide}
                    initial={{ opacity: 0, x: 300, scale: 0.8 }}
                    animate={{ opacity: 1, x: 0, scale: 1 }}
                    exit={{ opacity: 0, x: -300, scale: 0.8 }}
                    transition={{
                      duration: 0.6,
                      ease: "easeInOut",
                      type: "spring",
                      stiffness: 100,
                      damping: 15,
                    }}
                    className="relative w-full max-w-4xl h-[500px] bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-md rounded-2xl shadow-2xl border border-white/20 overflow-hidden"
                    style={{
                      boxShadow:
                        "0 0 50px rgba(0,0,0,0.3), inset 0 0 50px rgba(255,255,255,0.05)",
                    }}
                  >
                    {/* Slide Background */}
                    <div className="absolute inset-0">
                      <img
                        src={events[currentSlide].image}
                        alt={`${events[currentSlide].title} Event`}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
                    </div>

                    {/* Slide Content */}
                    <div
                      className="relative h-full flex flex-col justify-end p-8 text-white cursor-pointer"
                      onClick={() => setIsFlipped(!isFlipped)}
                    >
                      <AnimatePresence mode="wait">
                        {!isFlipped ? (
                          <motion.div
                            key="front"
                            initial={{ opacity: 0, rotateY: -90 }}
                            animate={{ opacity: 1, rotateY: 0 }}
                            exit={{ opacity: 0, rotateY: 90 }}
                            transition={{ duration: 0.6, ease: "easeInOut" }}
                            className="flex flex-col justify-end h-full"
                          >
                            <motion.div
                              initial={{ y: 50, opacity: 0 }}
                              animate={{ y: 0, opacity: 1 }}
                              transition={{ delay: 0.3, duration: 0.5 }}
                            >
                              <h2 className="text-4xl font-bold mb-4 drop-shadow-lg text-white">
                                {events[currentSlide].title}
                              </h2>
                              <p className="text-lg leading-relaxed mb-6 drop-shadow-md max-w-2xl text-white">
                                {events[currentSlide].description}
                              </p>

                              {/* Event Details */}
                              {events[currentSlide].id !== 3 && (
                                <div className="flex flex-wrap gap-6 mb-6">
                                  <div className="flex items-center space-x-2 bg-white/20 backdrop-blur-md rounded-full px-4 py-2">
                                    <Calendar className="w-5 h-5" />
                                    <span className="font-semibold">
                                      {events[currentSlide].date}
                                    </span>
                                  </div>
                                  <div className="flex items-center space-x-2 bg-white/20 backdrop-blur-md rounded-full px-4 py-2">
                                    <MapPin className="w-5 h-5" />
                                    <span className="font-semibold">
                                      {events[currentSlide].venue}
                                    </span>
                                  </div>
                                </div>
                              )}

                              {/* Action Button */}

                              {events[currentSlide].link && (
                                <motion.button
                                  onClick={(e) => {
                                    e.stopPropagation();
                                    window.open(
                                      events[currentSlide].link,
                                      "_blank"
                                    );
                                  }}
                                  className={`inline-flex items-center space-x-2 px-8 py-3 text-white rounded-full hover:scale-105 transition-all duration-300  shadow-lg hover:shadow-xl ${
                                    isDarkMode
                                      ? "bg-gradient-to-r from-orange-400 to-orange-600 hover:from-orange-500 hover:to-orange-700"
                                      : `bg-gradient-to-r ${events[currentSlide].gradient}`
                                  }`}
                                  whileHover={{ scale: 1.05 }}
                                  whileTap={{ scale: 0.95 }}
                                >
                                  <span className="font-semibold">
                                    Explore More
                                  </span>
                                  <ArrowRight className="w-5 h-5" />
                                </motion.button>
                              )}
                            </motion.div>
                          </motion.div>
                        ) : (
                          <motion.div
                            key="back"
                            initial={{ opacity: 0, rotateY: 90 }}
                            animate={{ opacity: 1, rotateY: 0 }}
                            exit={{ opacity: 0, rotateY: -90 }}
                            transition={{ duration: 0.6, ease: "easeInOut" }}
                            className="flex flex-col justify-center items-center h-full text-center"
                          >
                            <motion.div
                              initial={{ scale: 0.8, opacity: 0 }}
                              animate={{ scale: 1, opacity: 1 }}
                              transition={{ delay: 0.2, duration: 0.5 }}
                            >
                              <h3 className="text-3xl font-bold mb-6 drop-shadow-lg">
                                Event Highlights
                              </h3>
                              <div className="space-y-4">
                                {events[currentSlide].highlights.map(
                                  (highlight, index) => (
                                    <motion.div
                                      key={index}
                                      initial={{ x: -50, opacity: 0 }}
                                      animate={{ x: 0, opacity: 1 }}
                                      transition={{
                                        delay: 0.3 + index * 0.1,
                                        duration: 0.5,
                                      }}
                                      className="flex items-center space-x-3 bg-white/20 backdrop-blur-md rounded-lg px-6 py-3"
                                    >
                                      <Star className="w-6 h-6 text-yellow-400" />
                                      <span className="text-lg font-semibold">
                                        {highlight}
                                      </span>
                                    </motion.div>
                                  )
                                )}
                              </div>
                              <motion.p
                                initial={{ y: 20, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                transition={{ delay: 0.8, duration: 0.5 }}
                                className="mt-6 text-sm opacity-80"
                              >
                                Click to flip back
                              </motion.p>
                            </motion.div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>

                    {/* Slide Indicators */}
                    <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
                      {events.map((_, index) => (
                        <motion.div
                          key={index}
                          className={`w-3 h-3 rounded-full ${
                            index === currentSlide ? "bg-white" : "bg-white/50"
                          }`}
                          animate={{
                            scale: index === currentSlide ? 1.2 : 1,
                          }}
                          transition={{ duration: 0.3 }}
                        />
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Navigation Buttons */}
            <motion.button
              onClick={prevSlide}
              disabled={currentSlide === 0}
              className={`absolute left-4 top-1/2 transform -translate-y-1/2 z-30 p-4 text-white rounded-full shadow-lg transition-all duration-300 ${
                currentSlide === 0 ? "opacity-50 cursor-not-allowed" : ""
              } ${
                isDarkMode
                  ? "bg-gradient-to-r from-orange-400 to-orange-600 hover:from-orange-500 hover:to-orange-700 disabled:from-gray-400 disabled:to-gray-500"
                  : "bg-gradient-to-r from-purple-500 to-pink-600 hover:from-purple-600 hover:to-pink-700 disabled:from-gray-400 disabled:to-gray-500"
              }`}
              whileHover={currentSlide > 0 ? { scale: 1.1, x: -2 } : {}}
              whileTap={currentSlide > 0 ? { scale: 0.9 } : {}}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.8 }}
              style={{
                boxShadow: isDarkMode
                  ? "0 4px 15px rgba(255, 165, 0, 0.3)"
                  : "0 4px 15px rgba(147, 51, 234, 0.3)",
              }}
            >
              <ChevronLeft className="w-6 h-6" />
            </motion.button>

            <motion.button
              onClick={nextSlide}
              disabled={currentSlide === events.length - 1}
              className={`absolute right-4 top-1/2 transform -translate-y-1/2 z-30 p-4 text-white rounded-full shadow-lg transition-all duration-300 ${
                currentSlide === events.length - 1
                  ? "opacity-50 cursor-not-allowed"
                  : ""
              } ${
                isDarkMode
                  ? "bg-gradient-to-r from-orange-400 to-orange-600 hover:from-orange-500 hover:to-orange-700 disabled:from-gray-400 disabled:to-gray-500"
                  : "bg-gradient-to-r from-purple-500 to-pink-600 hover:from-purple-600 hover:to-pink-700 disabled:from-gray-400 disabled:to-gray-500"
              }`}
              whileHover={
                currentSlide < events.length - 1 ? { scale: 1.1, x: 2 } : {}
              }
              whileTap={currentSlide < events.length - 1 ? { scale: 0.9 } : {}}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.8 }}
              style={{
                boxShadow: isDarkMode
                  ? "0 4px 15px rgba(255, 165, 0, 0.3)"
                  : "0 4px 15px rgba(147, 51, 234, 0.3)",
              }}
            >
              <ChevronRight className="w-6 h-6" />
            </motion.button>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default Events;
