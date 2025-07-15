import React, { useState } from 'react';
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

  {/* Wrapped Card Container */}
<div className="bg-white/10 backdrop-blur-md border border-purple-900/40 rounded-3xl shadow-2xl p-6 sm:p-12 w-full max-w-7xl">

  <div className="grid gap-10 lg:grid-cols-2">
    
   {/* Left – Service Cards */}
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



    {/* Right - Details or Placeholder */}
    <motion.div
      key={selected || 'placeholder'}
      initial={{ opacity: 0, x: 50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.4 }}
      className="rounded-2xl shadow-lg p-8 w-full sm:max-w-lg relative flex flex-col justify-center items-center bg-[#eaf9fd] dark:bg-[#202033] text-gray-800 dark:text-purple-100"
    >
      {selected ? (
        <>
          <button
            onClick={() => setSelected(null)}
            className="absolute top-3 right-3 text-xl font-bold text-purple-600 hover:text-purple-800 dark:hover:text-purple-300 cursor-pointer"
            aria-label="Close service details"
          >
            ✕
          </button>
          <h3 className="text-2xl font-bold text-purple-700 dark:text-purple-300 mb-4">{services[selected].title}</h3>
          <p className="text-gray-700 dark:text-purple-200 mb-4">{services[selected].desc}</p>
          <ul className="space-y-2 text-left mt-4">
            {services[selected].features.map((f, i) => (
              <li key={i} className="flex items-center text-gray-700 dark:text-purple-200">
                <span className="w-2 h-2 bg-purple-500 rounded-full mr-3" />
                <span>{f}</span>
              </li>
            ))}
          </ul>
        </>
      ) : (
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="hidden lg:flex flex-col justify-center items-center text-center bg-gradient-to-br from-[#1a1a2e] to-[#2c2c54] rounded-2xl shadow-lg border border-purple-700/30 p-8 w-full sm:max-w-lg text-purple-100"
        >
          <div className="text-6xl mb-4">✨</div>
          <h3 className="text-2xl font-semibold text-purple-300 mb-2">Welcome to SQAC Services</h3>
          <p className="text-purple-200 text-sm sm:text-base">
            Select a service card on the left to explore what we offer — whether you're into tech, design, or community!
          </p>
        </motion.div>
      )}
    </motion.div>
  </div>
</div>

</div>

  );
}

export default ServicesSection;
