import React, { useState, useEffect } from 'react';
import {
  Card, CardContent, Typography, IconButton, Divider,
  Box, List, ListItem, ListItemText
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import {
  LayoutTemplate, Smartphone, Cpu,
  CalendarClock, Handshake, Camera
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
    features: ['Content Creation', 'Video Editing', 'Community Engagement', 'Brand Identity'],
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
      <div
        key={card.id}
        role="button"
        aria-label={`Select ${card.name}`}
        onClick={() => setSelected(card.id)}
        className={`
          cursor-pointer rounded-2xl p-5 flex flex-col items-center text-center
          shadow-md border-2 backdrop-blur-sm
          transition-all duration-200
          ${isActive
            ? 'bg-gradient-to-r from-[#951D13] via-[#f34a82] to-[#F0A01F] border-gray-600 text-white'
            : 'dark:bg-black bg-white dark:border-gray-600 border-gray-300 dark:text-white text-black hover:border-orange-500 hover:ring-2 hover:ring-orange-500/40 hover:shadow-[0_8px_40px_rgba(255,107,53,0.4),0_0_60px_rgba(243,74,130,0.3),0_0_80px_rgba(240,160,31,0.2)]'
          }
        `}
      >
        <div className={`mb-3 ${isActive ? 'text-white' : 'dark:text-gray-300 text-gray-600 hover:text-white'}`}>
          {card.icon}
        </div>
        <h3 className="font-semibold tracking-wide text-sm sm:text-base dark:text-white text-black">
          {card.name}
        </h3>
      </div>
    );
  };

  return (
    <div className="min-h-[85vh] flex flex-col items-center py-8 px-4 bg-gradient-to-b from-dark-primary via-dark-secondary to-dark-tertiary">
      <h2 className="mt-9 text-5xl sm:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#951D13] via-[#f34a82] to-[#F0A01F] mb-6">
        Our Core Domains
      </h2>

      <p className="text-center text-white text-lg max-w-2xl mb-10">
        Discover the key domains we work in — from technology and design to strategic and corporate solutions.
      </p>

      <div className="bg-dark-surface/70 backdrop-blur-md border border-gray-600 rounded-3xl shadow-lg p-6 w-full max-w-5xl">
        <div className="flex flex-col lg:grid lg:grid-cols-2 gap-4">

          {/* Left Grid */}
          <div className="grid grid-cols-2 gap-3 place-items-center">
            {serviceCards.map(card => (
              <div key={card.id} className="w-[160px] h-[140px]">
                {renderCard(card.id)}
              </div>
            ))}
          </div>

          {/* Right Details */}
          <div className="flex items-center justify-center" id="details-card">
            {selected ? (
              <Card sx={{
                bgcolor: "#f0fdfa",
                borderRadius: 3,
                px: 5,
                py: 6,
                textAlign: "center",
                position: "relative",
                transition: "box-shadow 0.2s",
                '&:hover': {
                  boxShadow: "0 8px 20px rgba(6,182,212,0.35)"
                }
              }}>
                <IconButton
                  onClick={() => setSelected(null)}
                  sx={{ position: "absolute", top: 12, right: 12 }}
                >
                  <CloseIcon />
                </IconButton>

                <CardContent>
                  <Typography variant="h5" fontWeight={600} gutterBottom color="#f97316">
                    {services[selected].title}
                  </Typography>

                  <Typography gutterBottom color="#555">
                    {services[selected].desc}
                  </Typography>

                  <Divider sx={{ my: 2 }} />

                  <List dense>
                    {services[selected].features.map((f, i) => (
                      <ListItem key={i} disableGutters>
                        <Box sx={{
                          width: 8,
                          height: 8,
                          bgcolor: "#f97316",
                          borderRadius: "50%",
                          mr: 2
                        }} />
                        <ListItemText primary={f} />
                      </ListItem>
                    ))}
                  </List>
                </CardContent>
              </Card>
            ) : (
              <Card sx={{
                bgcolor: "#111",
                color: "#fff",
                px: 5,
                py: 6,
                textAlign: "center",
                borderRadius: 3,
                transition: "box-shadow 0.2s",
                '&:hover': {
                  boxShadow: "0 8px 20px rgba(243,74,130,0.4)"
                }
              }}>
                <Typography variant="h4" fontWeight={700} gutterBottom color="#ec4899">
                  Welcome to SQAC Domains
                </Typography>
                <Typography>
                  Choose a domain card to explore how we empower technology, creativity, and innovation.
                </Typography>
              </Card>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ServicesSection;
