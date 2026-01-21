import React, { useState, useEffect } from "react";
import {
  Card,
  CardContent,
  Typography,
  IconButton,
  Divider,
  Box,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { motion } from "framer-motion";
import { useTheme } from "../../contexts/ThemeContext";
import {
  LayoutTemplate,
  Smartphone,
  Cpu,
  CalendarClock,
  Handshake,
  Camera,
} from "lucide-react";

const services = {
  webdev: {
    title: "Web Development",
    desc: "We build responsive websites using React, Node.js, and full-stack tech.",
    features: [
      "Custom Web Apps",
      "E-commerce Platforms",
      "API Integration",
      "Database Design",
    ],
  },
  appdev: {
    title: "App Development",
    desc: "Crafting intuitive mobile apps using modern frameworks for Android and iOS.",
    features: [
      "Cross-platform Apps",
      "React Native & Flutter",
      "UI/UX Design",
      "App Deployment",
    ],
  },
  aiml: {
    title: "AI / ML",
    desc: "Automate and gain insights with intelligent AI/ML systems.",
    features: [
      "Data Analytics",
      "Natural Language Processing",
      "Computer Vision",
      "Recommendation Engines",
    ],
  },
  events: {
    title: "Event Management",
    desc: "Organizing impactful tech events, workshops, and community meetups.",
    features: ["Hackathons", "Seminars", "Meetups", "Community Sessions"],
  },
  sponsor: {
    title: "Sponsorship",
    desc: "Building corporate relationships and securing funding for initiatives.",
    features: [
      "Brand Collaborations",
      "Fundraising",
      "Corporate Outreach",
      "Partnership Growth",
    ],
  },
  media: {
    title: "Media",
    desc: "Managing our external communication and media presence.",
    features: [
      "Content Creation",
      "Video Editing",
      "Community Engagement",
      "Brand Identity",
    ],
  },
};

const serviceCards = [
  { id: "webdev", name: "Web Dev", icon: <LayoutTemplate size={36} /> },
  { id: "events", name: "Events", icon: <CalendarClock size={36} /> },
  { id: "appdev", name: "App Dev", icon: <Smartphone size={36} /> },
  { id: "media", name: "Media", icon: <Camera size={36} /> },
  { id: "aiml", name: "AI/ML", icon: <Cpu size={36} /> },
  { id: "sponsor", name: "Sponsors", icon: <Handshake size={36} /> },
];

function ServicesSection() {
  const [selected, setSelected] = useState(null);
  const { isDarkMode } = useTheme();

  useEffect(() => {
    if (selected && window.innerWidth < 768) {
      document.getElementById("details-card")?.scrollIntoView({
        behavior: "smooth",
        block: "nearest",
      });
    }
  }, [selected]);

  const renderCard = (id) => {
    const card = serviceCards.find((c) => c.id === id);
    if (!card) return null;
    const isActive = selected === card.id;

    return (
      <motion.div
        key={card.id}
        onClick={() => setSelected(card.id)}
        whileHover={{ y: -4, scale: 1.03 }}
        whileTap={{ scale: 0.97 }}
        className={`
          cursor-pointer rounded-2xl p-5 flex flex-col items-center text-center
          border-2 backdrop-blur-md transition-all duration-300
          ${
            isActive
              ? "bg-orange-500/90 border-orange-400 text-white"
              : "bg-cyan-200/80 dark:bg-white/10 border-cyan-300/50 dark:border-white/10 text-gray-800 dark:text-zinc-200"
          }
        `}
      >
        <div className="mb-3">{card.icon}</div>
        <h3 className="font-semibold">{card.name}</h3>
      </motion.div>
    );
  };

  return (
    <section
      className="
        min-h-[85vh] py-10 px-4 flex flex-col items-center
        bg-gradient-to-b from-orange-200 to-cyan-200
        dark:from-[#0f0a1a] dark:via-[#1b0b2e] dark:to-zinc-800
      "
    >
      <h2 className="mt-9 text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-pink-600 to-orange-500 dark:from-pink-400 dark:to-orange-400">
        Our Core Domains
      </h2>

      <p className="text-center max-w-2xl mb-10 text-gray-600 dark:text-zinc-300">
        Discover the key domains we work in — from technology and design to
        strategic innovation.
      </p>

      <div className="bg-white/20 dark:bg-white/5 backdrop-blur-md border border-white/20 rounded-3xl shadow-lg p-6 w-full max-w-5xl">
        <div className="grid lg:grid-cols-2 gap-4">
          <div className="grid grid-cols-2 gap-3 place-items-center">
            {serviceCards.map((c) => (
              <div key={c.id} className="w-full max-w-[160px] h-[140px]">
                {renderCard(c.id)}
              </div>
            ))}
          </div>

          {/* DETAILS */}
          <div className="flex items-center justify-center">
            <motion.div id="details-card" className="w-full max-w-md">
              <div className="rounded-3xl bg-white/90 dark:bg-zinc-900/90 backdrop-blur-xl p-6 shadow-xl border border-white/10">
                <Card sx={{ bgcolor: "transparent", boxShadow: "none" }}>
                  <CardContent>
                    {selected ? (
                      <>
                        <IconButton
                          onClick={() => setSelected(null)}
                          sx={{
                            position: "absolute",
                            top: 12,
                            right: 12,
                            color: "#ec4899",
                          }}
                        >
                          <CloseIcon />
                        </IconButton>

                        <Typography
                          variant="h5"
                          sx={{
                            color: isDarkMode ? "white" : "#f97316",
                            mb: 1,
                          }}
                        >
                          {services[selected].title}
                        </Typography>

                        <Typography
                          sx={{
                            color: isDarkMode ? "white" : "text.secondary",
                            mb: 2,
                          }}
                        >
                          {services[selected].desc}
                        </Typography>

                        <Divider sx={{ mb: 2 }} />

                        <List dense>
                          {services[selected].features.map((f, i) => (
                            <ListItem
                              key={i}
                              disableGutters
                              sx={{ alignItems: "flex-start" }}
                            >
                              <Box
                                sx={{
                                  width: 10,
                                  height: 10,
                                  mt: "6px",
                                  mr: 2,
                                  borderRadius: "50%",
                                  bgcolor: isDarkMode ? "white" : "#ea580c",
                                  boxShadow: isDarkMode
                                    ? "0 0 6px rgba(255, 255, 255, 0.6)"
                                    : "0 0 6px rgba(234, 88, 12, 0.6)",
                                  flexShrink: 0,
                                }}
                              />
                              <ListItemText
                                primary={f}
                                primaryTypographyProps={{
                                  sx: {
                                    color: isDarkMode
                                      ? "white"
                                      : "text.primary",
                                    fontSize: "0.95rem",
                                    fontWeight: 500,
                                  },
                                }}
                              />
                            </ListItem>
                          ))}
                        </List>
                      </>
                    ) : (
                      <>
                        <Typography
                          variant="h4"
                          sx={{
                            color: isDarkMode ? "#ec4899" : "#ec4899",
                            mb: 2,
                          }}
                        >
                          Welcome to SQAC Domains
                        </Typography>
                        <Typography
                          sx={{
                            color: isDarkMode ? "white" : "text.secondary",
                          }}
                        >
                          Select a domain card to explore how we operate across
                          tech, design, and innovation.
                        </Typography>
                      </>
                    )}
                  </CardContent>
                </Card>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ServicesSection;
