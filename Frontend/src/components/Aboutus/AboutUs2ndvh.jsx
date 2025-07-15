import React, { useState } from 'react';
import { Card, CardContent, Typography, IconButton, Divider, Box, List, ListItem, ListItemIcon, ListItemText } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import StarIcon from "@mui/icons-material/Star";
import { motion } from 'framer-motion';


const services = {
  webdev: {
    title: 'Web Development',
    desc: 'We build responsive websites using React, Node.js, and full-stack tech.',
    features: ['Custom Web Apps', 'E-commerce Platforms', 'API Integration', 'Database Design']
  },
  appdev: {
    title: 'App Development',
    desc: 'Crafting intuitive mobile apps using modern frameworks for Android and iOS.',
    features: ['Cross-platform Apps', 'React Native & Flutter', 'UI/UX Design', 'App Deployment']
  },
  aiml: {
    title: 'AI / ML',
    desc: 'Automate and gain insights with intelligent AI/ML systems.',
    features: ['Data Analytics', 'Natural Language Processing', 'Computer Vision', 'Recommendation Engines']
  },
  events: {
    title: 'Event Management',
    desc: 'Organizing impactful tech events, workshops, and community meetups.',
    features: ['Hackathons', 'Seminars', 'Meetups', 'Community Sessions']
  },
  sponsor: {
    title: 'Sponsorship',
    desc: 'Building corporate relationships and securing funding for initiatives.',
    features: ['Brand Collaborations', 'Fundraising', 'Corporate Outreach', 'Partnership Growth']
  },
  pr: {
    title: 'Public Relations',
    desc: 'Managing our external communication and media presence.',
    features: ['Content Creation', 'Social Media Strategy', 'Press Releases', 'Community Engagement']
  }
};


const serviceCards = [
  { id: 'webdev', name: 'Web Dev', icon: '🌐', category: 'Tech' },
  { id: 'appdev', name: 'App Dev', icon: '📱', category: 'Tech' },
  { id: 'aiml', name: 'AI/ML', icon: '🤖', category: 'Tech' },
  { id: 'events', name: 'Events', icon: '📅', category: 'Corporate' },
  { id: 'sponsor', name: 'Sponsors', icon: '💰', category: 'Corporate' },
  { id: 'pr', name: 'Public Relations', icon: '🗣️', category: 'Corporate' },
];

function ServicesSection() {
  const [selected, setSelected] = useState(null);

  return (
    <div className="min-h-screen bg-gradient-to-t from-cyan-200 via-cyan-500 to-fuchsia-50 flex flex-col items-center py-16 px-4">
  <h2 className="text-4xl font-bold text-purple-600 mb-4 drop-shadow-md">Services We Provide</h2>

  <p className="text-center text-gray-600 max-w-2xl mb-10">
    We offer a diverse range of technical and creative services that help turn ideas into action.
  </p>

<div className="bg-white/10 backdrop-blur-md border border-purple-900/40 rounded-3xl shadow-2xl p-6 sm:p-12 w-full max-w-7xl">

  <div className="grid gap-10 lg:grid-cols-2">
    
<div className="grid grid-cols-2 gap-5 sm:gap-6 max-w-2xl mx-auto">
  {serviceCards.map(card => (
    <motion.div
      key={card.id}
      role="button"
      aria-label={`Select ${card.name} service`}
      onClick={() => setSelected(card.id)}
      whileHover={{ scale: 1.07 }}
      whileTap={{ scale: 0.96 }}
      transition={{ type: 'spring', stiffness: 260, damping: 18 }}
      className={`
        group relative cursor-pointer select-none rounded-2xl p-6 flex flex-col items-center
        text-center shadow-md transition-all duration-300 border
        backdrop-blur-sm bg-[#2c2c54]/60 border-transparent
        hover:shadow-purple-400/40 hover:border-purple-400/60 hover:ring-2 hover:ring-purple-400/20

        ${selected === card.id ? 'bg-[#3d3d6b]/80 shadow-lg scale-105 border-purple-500 ring-2 ring-purple-400/40' : ''}
      `}
    >
      <div className={`text-4xl sm:text-5xl mb-4 transition-colors duration-300 ${selected === card.id ? 'text-purple-200' : 'text-purple-100'} group-hover:text-purple-300`}>
        {card.icon}
      </div>
      <h3 className={`font-semibold tracking-wide text-base sm:text-lg ${selected === card.id ? 'text-purple-100' : 'text-purple-200'}`}>
        {card.name}
      </h3>

      <span className="pointer-events-none absolute inset-0 rounded-2xl
        group-hover:before:opacity-40
        before:absolute before:-inset-1 before:rounded-2xl
        before:bg-gradient-to-br before:from-purple-400/30 before:to-purple-600/10
        before:blur-md before:opacity-0 transition-opacity duration-300" />
    </motion.div>
  ))}
</div>

    <motion.div
      key={selected || 'placeholder'}
      initial={{ opacity: 0, x: 50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.4 }}
      className="rounded-2xl shadow-lg p-8 w-full sm:max-w-lg relative flex flex-col justify-center items-center bg-[#eaf9fd] dark:bg-[#202033] text-gray-800 dark:text-purple-100"
    >
      {selected ? (
          <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="w-full sm:max-w-lg"
        >
          <Card
            sx={{
              bgcolor: "#1a1a2e",
              color: "white",
              borderRadius: 3,
              boxShadow: "0px 0px 20px rgba(147, 51, 234, 0.4)",
              position: "relative",
              p: 2,
            }}
          >
            <IconButton
              onClick={() => setSelected(null)}
              sx={{ position: "absolute", top: 12, right: 12, color: "white" }}
              aria-label="Close"
            >
              <CloseIcon />
            </IconButton>

            <CardContent>
              <Typography variant="h5" fontWeight={600} gutterBottom>
                {services[selected].title}
              </Typography>

              <Typography variant="body1" gutterBottom color="gray">
                {services[selected].desc}
              </Typography>

              <Divider sx={{ my: 2, borderColor: "rgba(255,255,255,0.2)" }} />

              <Typography variant="subtitle1" gutterBottom>
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
                    <ListItemText primary={feature} />
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
  className="w-full sm:max-w-lg"
>
  <Card
    sx={{
      bgcolor: "#1a1a2e",
      color: "white",
      borderRadius: 3,
      boxShadow: "0px 0px 20px rgba(147, 51, 234, 0.4)",
      position: "relative",
      px: 5,
      py: 6,
      textAlign: "center",
    }}
  >
    <CardContent>
      <Box sx={{ fontSize: "3.5rem", mb: 3 }}>✨</Box>

      <Typography variant="h4" fontWeight={700} gutterBottom sx={{ color: "#d8b4fe" }}>
        Welcome to SQAC Services
      </Typography>

      <Typography variant="body1" sx={{ fontSize: "1.125rem", color: "#c4c4c4" }}>
        Select a service card on the left to explore what we offer — whether you're into tech, design, or corporate!
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
