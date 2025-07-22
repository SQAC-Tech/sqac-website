import React, { useState, useEffect } from 'react';
import {Card,CardContent,Typography,IconButton,Divider,Box,List,ListItem,ListItemText,} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { useTheme } from "@mui/material/styles";
import { motion } from 'framer-motion';
import {LayoutTemplate,Smartphone,Cpu,PenTool,CalendarClock,Mic,Handshake} from 'lucide-react';

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
  creatives: {
    title: 'Creatives',
    desc: 'Designing engaging visual content and media to boost brand identity.',
    features: ['Graphic Design', 'Video Editing', 'Brand Identity', 'Motion Graphics'],
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
  pr: {
    title: 'Public Relations',
    desc: 'Managing our external communication and media presence.',
    features: ['Content Creation', 'Social Media Strategy', 'Press Releases', 'Community Engagement'],
  },
};

const serviceCards = [
  { id: 'webdev', name: 'Web Dev', icon: <LayoutTemplate size={36} /> },
  { id: 'events', name: 'Events', icon: <CalendarClock size={36} /> },
  { id: 'appdev', name: 'App Dev', icon: <Smartphone size={36} /> },
  { id: 'pr', name: 'PR', icon: <Mic size={36} /> },
  { id: 'aiml', name: 'AI/ML', icon: <Cpu size={36} /> },
  { id: 'sponsor', name: 'Sponsors', icon: <Handshake size={36} /> },
  { id: 'creatives', name: 'Creatives', icon: <PenTool size={36} /> },
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

    return (
      <motion.div
        key={card.id}
        role="button"
        aria-label={`Select ${card.name} service`}
        onClick={() => setSelected(card.id)}
        whileHover={{ scale: 1.07 }}
        whileTap={{ scale: 0.96 }}
        transition={{ type: 'spring', stiffness: 260, damping: 18 }}
        className={`
          group relative cursor-pointer select-none rounded-2xl p-5 flex flex-col items-center
          text-center shadow-md transition-all duration-300 border
          backdrop-blur-sm bg-[#2c2c54]/60 border-transparent
          hover:shadow-purple-400/40 hover:border-purple-400/60 hover:ring-2 hover:ring-purple-400/20
          ${selected === card.id ? 'bg-[#3d3d6b]/80 shadow-lg scale-105 border-purple-500 ring-2 ring-purple-400/40' : ''}
        `}
      >
        <div className={`mb-3 transition-colors duration-300 ${selected === card.id ? 'text-purple-200' : 'text-purple-100'} group-hover:text-purple-300`}>
          {card.icon}
        </div>
        <h3 className={`font-semibold tracking-wide text-sm sm:text-base ${selected === card.id ? 'text-purple-100' : 'text-purple-200'}`}>
          {card.name}
        </h3>
        <span className="pointer-events-none absolute inset-0 rounded-2xl group-hover:before:opacity-40 before:absolute before:-inset-1 before:rounded-2xl before:bg-gradient-to-br before:from-purple-400/30 before:to-purple-600/10 before:blur-md before:opacity-0 transition-opacity duration-300" />
      </motion.div>
    );
  };

  return (
    <div className="min-h-[85vh] bg-gradient-to-b from-cyan-200 via-pink-50 to-[#a5f3fc] flex flex-col items-center py-8 px-4">
      <h2 className="text-3xl sm:text-4xl font-bold text-purple-600 mb-4 drop-shadow-md">Our Core Domains</h2>
      <p className="text-center text-gray-600 max-w-2xl mb-10">
        Discover the key domains we work in — from technology and design to strategic and corporate solutions.
      </p>

      <div className="bg-white/10 backdrop-blur-md border border-purple-900/40 rounded-3xl shadow-2xl p-4 sm:p-6 w-full max-w-5xl">
        <div className="flex flex-col lg:grid lg:grid-cols-2 gap-6">
          <div className="grid grid-cols-2 gap-1.5 w-full place-items-center">
            <div className="w-full max-w-[160px] h-[140px]">{renderCard('webdev')}</div>
            <div className="w-full max-w-[160px] h-[140px]">{renderCard('events')}</div>
            <div className="w-full max-w-[160px] h-[140px]">{renderCard('appdev')}</div>
            <div className="w-full max-w-[160px] h-[140px]">{renderCard('pr')}</div>
            <div className="w-full max-w-[160px] h-[140px]">{renderCard('aiml')}</div>
            <div className="w-full max-w-[160px] h-[140px]">{renderCard('sponsor')}</div>
            <div className="col-span-2 flex justify-center w-full">
              <div className="w-full max-w-[160px] h-[140px]">{renderCard('creatives')}</div>
            </div>
          </div>

          <motion.div
            key={selected || 'placeholder'}
            id="details-card"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4 }}
            className="rounded-2xl w-full max-w-full sm:max-w-md max-h-[85vh] overflow-y-auto p-6 sm:p-8 pb-10 relative flex flex-col justify-start items-start 
            bg-white/10 backdrop-blur-md text-gray-100 dark:text-purple-100 scroll-mt-24 
            border border-purple-50000 shadow-[0_0_18px_4px_rgba(168,85,247,0.3)]"

          >
            {selected ? (
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="w-full"
              >
                <Card
                  sx={{
                    bgcolor: "#daf3fa", 
                    color: "#f2f2f2", 
                    borderRadius: 3,
                    boxShadow: "0px 0px 20px rgba(147, 51, 234, 0.4)",
                    position: "relative",
                    p: 2,
                  }}
                >
                  <IconButton
                    onClick={() => setSelected(null)}
                    sx={{ position: "absolute", top: 12, right: 12, color: "#9f7aea" }}
                    aria-label="Close"
                  >
                    <CloseIcon />
                  </IconButton>

                  <CardContent>
                    <Typography variant="h5" fontWeight={600} gutterBottom sx={{ color: "#9f7aea" }}>
                      {services[selected].title}
                    </Typography>

                    <Typography variant="body1" gutterBottom sx={{ color: "#555555" }}>
                      {services[selected].desc}
                    </Typography>

                    <Divider sx={{ my: 2, borderColor: "rgba(255,255,255,0.2)" }} />

                    <Typography variant="subtitle1" gutterBottom sx={{ color: "#9f7aea" }}>
                      Features:
                    </Typography>

                    <List dense>
                      {services[selected].features.map((feature, i) => (
                        <ListItem key={i} disableGutters sx={{ px: 0 }}>
                          <Box
                            sx={{
                              width: 8,
                              height: 8,
                              bgcolor: "#9f7aea",
                              borderRadius: "50%",
                              mr: 2,
                              mt: "6px",
                              flexShrink: 0,
                            }}
                          />
                          <ListItemText primary={feature} primaryTypographyProps={{ sx: { color: "#444" } }} />
                        </ListItem>
                      ))}
                    </List>
                  </CardContent>
                </Card>
              </motion.div>
            ) : (
              <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="w-full">
                <Card sx={{ bgcolor: "#daf3fa", color: "white", borderRadius: 3, boxShadow: "0px 0px 20px rgba(147, 51, 234, 0.4)", position: "relative", px: 5, py: 6, textAlign: "center" }}>
                  <CardContent>
                    <Box sx={{ fontSize: "3.5rem", mb: 3 }}>✨</Box>
                    <Typography
                      variant="h4"
                      fontWeight={700}
                      gutterBottom
                      sx={{ color: "#7b1fa2" }}
                    >
                      Welcome to SQAC Domains
                    </Typography>

                    <Typography
                      variant="body1"
                      sx={{ fontSize: "1.125rem", color: "#4a4a4a" }}
                    >
                      Choose a domain card on the left to explore how we empower areas like technology, creative design, and corporate innovation at SQAC.
                    </Typography>
                  </CardContent>
                </Card>
              </motion.div>
            )}
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default ServicesSection;
