import React, { useState, useEffect } from 'react';
import {
  Card, CardContent, Typography, IconButton, Divider,
  Box, List, ListItem, ListItemText
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { motion } from 'framer-motion';
import {
  LayoutTemplate, Smartphone, Cpu, PenTool,
  CalendarClock, Mic, Handshake,Camera
} from 'lucide-react';

const services = {
  webdev: {
    title: 'Web Development',
    desc: 'We build responsive websites using React, Node.js, and full-stack tech.',
    features: ['Custom Web Apps', 'E-commerce Platforms', 'API Integration', 'Database Design'],
  },
  appdev: {
    title: 'App Development',
    desc: 'Crafting intuitive mobile apps using modern frameworks for Android and iOS.',
    features: ['Cross-platform Apps', 'React Native & Flutter', 'UI/UX Design', 'App Deployment'],
  },
  aiml: {
    title: 'AI / ML',
    desc: 'Automate and gain insights with intelligent AI/ML systems.',
    features: ['Data Analytics', 'Natural Language Processing', 'Computer Vision', 'Recommendation Engines'],
  },

  events: {
    title: 'Event Management',
    desc: 'Organizing impactful tech events, workshops, and community meetups.',
    features: ['Hackathons', 'Seminars', 'Meetups', 'Community Sessions'],
  },
  sponsor: {
    title: 'Sponsorship',
    desc: 'Building corporate relationships and securing funding for initiatives.',
    features: ['Brand Collaborations', 'Fundraising', 'Corporate Outreach', 'Partnership Growth'],
  },
  media: {
    title: 'Media',
    desc: 'Managing our external communication and media presence.',
    features: ['Content Creation', 'Video Editing', 'Community Engagement','Brand Identity'],
  },
};

const serviceCards = [
  { id: 'webdev', name: 'Web Dev', icon: <LayoutTemplate size={36} /> },
  { id: 'events', name: 'Events', icon: <CalendarClock size={36} /> },
  { id: 'appdev', name: 'App Dev', icon: <Smartphone size={36} /> },
  { id: 'media', name: 'Media', icon: <Camera size={36} /> },
  { id: 'aiml', name: 'AI/ML', icon: <Cpu size={36} /> },
  { id: 'sponsor', name: 'Sponsors', icon: <Handshake size={36} /> },
];

function ServicesSection() {
  const [selected, setSelected] = useState(null);

  useEffect(() => {
    if (selected && window.innerWidth < 768) {
      document.getElementById("details-card")?.scrollIntoView({
        behavior: "smooth",
        block: "nearest"
      });
    }
  }, [selected]);

  const renderCard = (id) => {
    const card = serviceCards.find(c => c.id === id);
    if (!card) return null;

    const isActive = selected === card.id;

    return (
      <motion.div
        key={card.id}
        role="button"
        aria-label={`Select ${card.name} service`}
        onClick={() => setSelected(card.id)}
        whileHover={{ 
          y: -4,
          scale: 1.03,
          boxShadow: "0 6px 12px rgba(6, 182, 212, 0.2)"
        }}
        whileTap={{ scale: 0.98 }}
        transition={{ type: 'spring', stiffness: 300, damping: 15 }}
        className={`
          group relative cursor-pointer select-none rounded-2xl p-5 flex flex-col items-center
          text-center shadow-md border-2
          backdrop-blur-sm transition-all duration-300
          ${isActive
            ? 'bg-orange-400/90 border-orange-300 ring-2 ring-orange-500 text-white'
            : 'bg-cyan-200/90 border-cyan-300/50 hover:border-cyan-400 hover:ring-2 hover:ring-cyan-400/50'
          }
        `}
      >
        <div className={`mb-3 transition-all duration-300 ${isActive ? 'text-white' : 'text-gray-800 group-hover:text-gray-900'}`}>
          <motion.div
            whileHover={{ rotate: isActive ? 0 : 10, scale: 1.1 }}
            transition={{ type: 'spring', stiffness: 300 }}
          >
            {card.icon}
          </motion.div>
        </div>
        <h3 className={`font-semibold tracking-wide text-sm sm:text-base ${isActive ? 'text-white' : 'text-gray-900 group-hover:text-gray-800'}`}>
          {card.name}
        </h3>
        {!isActive && (
          <motion.div 
            className="absolute inset-0 rounded-2xl bg-gradient-to-br from-cyan-300/20 to-cyan-100/10 opacity-0 group-hover:opacity-100 -z-10"
            initial={{ opacity: 0 }}
            whileHover={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
          />
        )}
      </motion.div>
    );
  };

  return (
    <div className="min-h-[85vh] flex flex-col items-center py-8 px-4 bg-gradient-to-b from-orange-200 to-cyan-200">
      <h2 className="mt-9 text-5xl sm:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-pink-600 to-orange-500 mb-6 font-poppins hover:scale-105 transition-transform">Our Core Domains</h2>
      <p className="text-center text-gray-600 max-w-2xl mb-10">
        Discover the key domains we work in — from technology and design to strategic and corporate solutions.
      </p>

      <div className="bg-white/10 backdrop-blur-md border border-cyan-200/40 rounded-3xl shadow-lg p-4 sm:p-6 w-full max-w-5xl">
        <div className="flex flex-col lg:grid lg:grid-cols-2 gap-3">
          {/* Left Grid - Service Cards */}
          <div className="grid grid-cols-2 gap-3 w-full place-items-center">
            <div className="w-full max-w-[160px] h-[140px]">{renderCard('webdev')}</div>
            <div className="w-full max-w-[160px] h-[140px]">{renderCard('events')}</div>
            <div className="w-full max-w-[160px] h-[140px]">{renderCard('appdev')}</div>
            <div className="w-full max-w-[160px] h-[140px]">{renderCard('media')}</div>
            <div className="w-full max-w-[160px] h-[140px]">{renderCard('aiml')}</div>
            <div className="w-full max-w-[160px] h-[140px]">{renderCard('sponsor')}</div>
            
          </div>

          {/* Right Container - Centered Details Card */}
          <div className="w-full h-full flex items-center justify-center relative">
            <motion.div
              key={selected || 'placeholder'}
              id="details-card"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4 }}
              className="w-full max-w-md mx-auto sticky top-4"
            >
              {selected ? (
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  <Card sx={{
                    bgcolor: "#f0fdfa",
                    color: "#333",
                    borderRadius: 3,
                    boxShadow: "0 6px 16px -4px rgba(6, 182, 212, 0.3)",
                    px: 5,
                    py: 6,
                    textAlign: "center",
                    transition: "all 0.3s ease",
                    '&:hover': {
                      boxShadow: "0 8px 20px -4px rgba(6, 182, 212, 0.4)"
                    }
                  }}>
                    <IconButton
                      onClick={() => setSelected(null)}
                      sx={{ 
                        position: "absolute", 
                        top: 12, 
                        right: 12, 
                        color: "#f472b6",
                        transition: "all 0.3s ease",
                        '&:hover': {
                          transform: "rotate(90deg)",
                          color: "#f97316"
                        }
                      }}
                      aria-label="Close"
                    >
                      <CloseIcon sx={{ fontSize: '1.5rem' }} />
                    </IconButton>
                    <CardContent>
                      <Typography variant="h5" fontWeight={600} gutterBottom sx={{ color: "#f97316" }}>
                        {services[selected].title}
                      </Typography>
                      <Typography variant="body1" gutterBottom sx={{ color: "#555" }}>
                        {services[selected].desc}
                      </Typography>
                      <Divider sx={{ 
                        my: 2, 
                        borderColor: "rgba(6, 182, 212, 0.3)",
                        transition: "all 0.3s ease",
                        '&:hover': {
                          borderColor: "rgba(6, 182, 212, 0.6)"
                        }
                      }} />
                      <Typography variant="subtitle1" gutterBottom sx={{ 
                        color: "#06b6d4",
                        transition: "all 0.3s ease",
                        '&:hover': {
                          textShadow: "0 0 8px rgba(6, 182, 212, 0.3)"
                        }
                      }}>
                        Features:
                      </Typography>
                      <List dense>
                        {services[selected].features.map((feature, i) => (
                          <ListItem 
                            key={i} 
                            disableGutters 
                            sx={{ 
                              px: 0,
                              transition: "all 0.3s ease",
                              '&:hover': {
                                transform: "translateX(4px)"
                              }
                            }}
                          >
                            <Box sx={{
                              width: 8,
                              height: 8,
                              bgcolor: "#f97316",
                              borderRadius: "50%",
                              mr: 2,
                              mt: "6px",
                              flexShrink: 0,
                              transition: "all 0.3s ease",
                              '&:hover': {
                                transform: "scale(1.3)"
                              }
                            }} />
                            <ListItemText 
                              primary={feature} 
                              primaryTypographyProps={{ 
                                sx: { 
                                  color: "#444",
                                  transition: "all 0.3s ease",
                                  '&:hover': {
                                    color: "#222"
                                  }
                                } 
                              }} 
                            />
                          </ListItem>
                        ))}
                      </List>
                    </CardContent>
                  </Card>
                </motion.div>
              ) : (
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  <Card sx={{
                    bgcolor: "#f0fdfa",
                    color: "#333",
                    borderRadius: 3,
                    boxShadow: "0 6px 16px -4px rgba(6, 182, 212, 0.3)",
                    px: 5,
                    py: 6,
                    textAlign: "center",
                    transition: "all 0.3s ease",
                    '&:hover': {
                      boxShadow: "0 8px 20px -4px rgba(6, 182, 212, 0.4)",
                      transform: "translateY(-2px)"
                    }
                  }}>
                    <CardContent>
                      <motion.div
                        animate={{
                          rotate: [0, 10, -10, 0],
                          scale: [1, 1.1, 1.1, 1]
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          repeatType: "reverse"
                        }}
                        sx={{ fontSize: "3.5rem", mb: 3, color: "#f97316" }}
                      >
                        ✨
                      </motion.div>
                      <Typography variant="h4" fontWeight={700} gutterBottom sx={{ 
                        color: "#ec4899",
                        transition: "all 0.3s ease",
                        '&:hover': {
                          textShadow: "0 0 8px rgba(236, 72, 153, 0.3)"
                        }
                      }}>
                        Welcome to SQAC Domains
                      </Typography>
                      <Typography variant="body1" sx={{ 
                        fontSize: "1.125rem", 
                        color: "#555",
                        transition: "all 0.3s ease",
                        '&:hover': {
                          color: "#333"
                        }
                      }}>
                        Choose a domain card to explore how we empower areas like technology, creative design, and corporate innovation.
                      </Typography>
                    </CardContent>
                  </Card>
                </motion.div>
              )}
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ServicesSection;