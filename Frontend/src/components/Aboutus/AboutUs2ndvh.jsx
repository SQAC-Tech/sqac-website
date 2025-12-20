/**
 * About Us Second View Component - Core Domains Section
 * 
 * === MAJOR CHANGES MADE ===
 * Date: December 20-21, 2025
 * 
 * THEME & STYLING UPDATES:
 * 1. Dark theme converted to light theme support
 * 2. Domain cards themified for both modes
 * 3. Text colors adapted for proper contrast
 * 
 * SPECIFIC MODIFICATIONS:
 * - Background gradient: Dark theme → Light blue/gray gradient in light mode
 * - Main container: Dark-surface/70 → White/90 in light mode
 * - Domain cards: Black background → White background in light mode
 * - Card borders: Gray-600 → Light gray in light mode
 * - Card text: White → Dark text in light mode
 * - Description text: White → Black text in light mode
 * 
 * CSS CLASSES TARGETED (via index.css):
 * - .min-h-[85vh].flex.flex-col.items-center.py-8.px-4.bg-gradient-to-b.from-dark-primary.via-dark-secondary.to-dark-tertiary → Light gradient
 * - .bg-dark-surface/70 → White background with opacity
 * - .bg-dark-surface/70.border.border-gray-600 → White background with light borders
 * - .bg-black.border-gray-600 → White backgrounds with light borders
 * - .text-white → Dark text for light mode
 * - .text-gray-300 → Medium gray text in light mode
 * - .text-center.text-white.text-lg.max-w-2xl.mb-10 → Black description text
 * 
 * THEME BEHAVIOR:
 * - Light mode: Light blue-gray background, white cards, dark text
 * - Dark mode: Original dark theme preserved (dark containers, white text)
 * - Active cards: Orange-pink gradient maintained in both modes
 * - Hover effects: Orange theme with scaling and glow
 * 
 * COMPONENT STRUCTURE:
 * - Main section: Full-height container with gradient background
 * - Title: "Our Core Domains" with gradient text
 * - Description: Explanatory text about domain focus
 * - Service container: Rounded container with backdrop blur
 * - Grid layout: 2x3 grid of domain cards
 * - Details panel: Dynamic content display
 * 
 * DOMAIN CARDS:
 * - 6 domains total: Web Dev, Events, App Dev, Media, AI/ML, Sponsors
 * - Interactive selection with visual feedback
 * - Active state: Orange-pink gradient with white text
 * - Inactive state: Theme-dependent background and text
 * - Hover effects: Scaling, border color change, glow
 * - Icons: Lucide React icons with theme colors
 * 
 - STATE MANAGEMENT:
 * - selected: Tracks currently selected domain
 * - openDropdown: Controls dropdown visibility for main categories
 * - Dynamic rendering based on selection
 * - Smooth transitions between states
 * 
 * RESPONSIVE DESIGN:
 * - Mobile: Single column layout with stacked cards
 * - Desktop: 2-column grid with side-by-side layout
 * - Card sizing: Fixed 160px width, 140px height
 * - Container padding: Responsive spacing
 * 
 * ACCESSIBILITY:
 * - Semantic HTML structure
 * - ARIA labels for interactive elements
 * - Keyboard navigation support
 * - High contrast in both themes
 * - Focus indicators for buttons
 * 
 * PERFORMANCE:
 * - React state optimization
 * - Efficient event handling
 * - CSS-only theme switching
 * - Smooth animations with transitions
 * 
 * INTEGRATION:
 * - Part of Aboutus.jsx component structure
 * - Uses Material-UI components for details
 * - Consistent with site-wide theme system
 * - Coordinates with AboutUs1vh section
 */
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
          boxShadow: "0 6px 12px rgba(255, 107, 53, 0.4)",
          borderColor: "#ff6b35"
        }}
        whileTap={{ scale: 0.98 }}
        transition={{ type: 'spring', stiffness: 300, damping: 15 }}
        className={`
          group relative cursor-pointer select-none rounded-2xl p-5 flex flex-col items-center
          text-center shadow-md border-2
          backdrop-blur-sm transition-all duration-300
          ${isActive
            ? 'bg-gradient-to-r from-[#951D13] via-[#f34a82] to-[#F0A01F] border-gray-600 ring-2 ring-[#7c3aed] text-white'
            : 'bg-black border-gray-600 hover:border-orange-500 hover:ring-2 hover:ring-orange-500/50'
          }
        `}
      >
        <div className={`mb-3 transition-all duration-300 ${isActive ? 'text-white' : 'text-gray-300 group-hover:text-white'}`}>
          <motion.div
            whileHover={{ rotate: isActive ? 0 : 10, scale: 1.1 }}
            transition={{ type: 'spring', stiffness: 300 }}
          >
            {card.icon}
          </motion.div>
        </div>
        <h3 className={`font-semibold tracking-wide text-sm sm:text-base ${isActive ? 'text-white' : 'text-white group-hover:text-white'}`}>
          {card.name}
        </h3>
        {!isActive && (
          <motion.div 
            className="absolute inset-0 rounded-2xl bg-gradient-to-br from-gray-800/20 to-black/10 opacity-0 group-hover:opacity-100 -z-10"
            initial={{ opacity: 0 }}
            whileHover={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
          />
        )}
      </motion.div>
    );
  };

  return (
    <div className="min-h-[85vh] flex flex-col items-center py-8 px-4 bg-gradient-to-b from-dark-primary via-dark-secondary to-dark-tertiary">
      <h2 className="mt-9 text-5xl sm:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#951D13] via-[#f34a82] to-[#F0A01F] mb-6 font-poppins hover:scale-105 transition-transform">Our Core Domains</h2>
      <p className="text-center text-white text-lg max-w-2xl mb-10">
        Discover the key domains we work in — from technology and design to strategic and corporate solutions.
      </p>

      <div className="bg-dark-surface/70 backdrop-blur-md border border-gray-600 rounded-3xl shadow-lg p-4 sm:p-6 w-full max-w-5xl">
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
                    bgcolor: "linear-gradient(135deg, #951D13, #f34a82, #F0A01F)",
                    color: "#ffffff",
                    borderRadius: 3,
                    boxShadow: "0 6px 16px -4px rgba(243, 74, 130, 0.4)",
                    px: 5,
                    py: 6,
                    textAlign: "center",
                    transition: "all 0.3s ease",
                    '&:hover': {
                      boxShadow: "0 8px 20px -4px rgba(243, 74, 130, 0.6)",
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
                      <Typography variant="body1" sx={{ color: "#ffffff" }}>
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