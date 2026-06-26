import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
//import { teamMembers } from '../data/teamData';
import { ChevronLeft, ChevronRight, Linkedin, Github, Globe, Users, Mouse } from 'lucide-react';
import { useTheme } from "../../contexts/ThemeContext";

import "./teamtheme.css";

const DARK_CARD_GRADIENTS = [
  'from-[#FF7AA2] to-[#FF959D]', // Mid-pastel pink to Dusty coral
  'from-[#FF959D] to-[#FFB494]', // Dusty coral to Warm peach
  'from-[#FFB494] to-[#FFC982]', // Warm peach to Golden ochre
  'from-[#FFC982] to-[#FFD680]', // Golden ochre to Soft yellow
  'from-[#FFD680] to-[#FFAE6E]'  // Soft yellow to Soft warm orange
];

const LIGHT_CARD_GRADIENTS = [
  'from-[#FF5A87] to-[#FF8689]', // Soft rose to Soft coral
  'from-[#FF8689] to-[#FFAF7E]', // Soft coral to Orange peach
  'from-[#FFAF7E] to-[#FFC970]', // Orange peach to Golden orange
  'from-[#FFC970] to-[#FFD663]', // Golden orange to Yellow orange
  'from-[#FFD663] to-[#FF8547]'  // Yellow orange to Vivid orange
];

const PLACEHOLDER_MEMBERS = [
  // Board
  {
    id: 'placeholder-1',
    name: 'Yash Gupta',
    initials: 'YG',
    role: 'Secretary',
    bio: 'Yash Gupta is a dedicated secretary at SQAC, focusing on driving quality, collaboration, and excellence across projects.',
    contributions: [
      'Shaped the strategic vision and direction of SQAC.',
      'Mentored members and oversaw operations across all domains.'
    ],
    domain: 'Board',
    pic: '',
    linkedin: 'https://linkedin.com',
    github: 'https://github.com',
    portfolio: 'https://instagram.com'
  },
  {
    id: 'placeholder-2',
    name: 'Tanmay Bansal',
    initials: 'TB',
    role: 'Joint Secretary',
    bio: 'Tanmay Bansal is a dedicated joint secretary at SQAC, focusing on driving quality, collaboration, and excellence across projects.',
    contributions: [
      'Shaped the strategic vision and direction of SQAC.',
      'Mentored members and oversaw operations across all domains.'
    ],
    domain: 'Board',
    pic: '',
    linkedin: 'https://linkedin.com',
    github: 'https://github.com',
    portfolio: 'https://instagram.com'
  },
  {
    id: 'placeholder-3',
    name: 'Nityam Sharma',
    initials: 'NS',
    role: 'Joint Secretary',
    bio: 'Nityam Sharma is a dedicated joint secretary at SQAC, focusing on driving quality, collaboration, and excellence across projects.',
    contributions: [
      'Shaped the strategic vision and direction of SQAC.',
      'Mentored members and oversaw operations across all domains.'
    ],
    domain: 'Board',
    pic: '',
    linkedin: 'https://linkedin.com',
    github: 'https://github.com',
    portfolio: 'https://instagram.com'
  },
  {
    id: 'placeholder-4',
    name: 'Priyanshu Vasudev',
    initials: 'PV',
    role: 'Technical Lead',
    bio: 'Priyanshu Vasudev is a dedicated technical lead at SQAC, focusing on driving quality, collaboration, and excellence across projects.',
    contributions: [
      'Shaped the strategic vision and direction of SQAC.',
      'Mentored members and oversaw operations across all domains.'
    ],
    domain: 'Board',
    pic: '',
    linkedin: 'https://linkedin.com',
    github: 'https://github.com',
    portfolio: 'https://instagram.com'
  },
  {
    id: 'placeholder-5',
    name: 'Vedant Modi',
    initials: 'VM',
    role: 'Corporate Lead',
    bio: 'Vedant Modi is a dedicated corporate lead at SQAC, focusing on driving quality, collaboration, and excellence across projects.',
    contributions: [
      'Shaped the strategic vision and direction of SQAC.',
      'Mentored members and oversaw operations across all domains.'
    ],
    domain: 'Board',
    pic: '',
    linkedin: 'https://linkedin.com',
    github: 'https://github.com',
    portfolio: 'https://instagram.com'
  },
  // Technical
  {
    id: 'placeholder-6',
    name: 'Akshaj Bansal',
    initials: 'AB',
    role: 'Domain Lead',
    bio: 'Akshaj Bansal is a dedicated domain lead at SQAC, focusing on driving quality, collaboration, and excellence across projects.',
    contributions: [
      'Developed and optimized core software modules.',
      'Ensured code quality through rigorous testing and code reviews.'
    ],
    domain: 'Technical',
    pic: '',
    linkedin: 'https://linkedin.com',
    github: 'https://github.com',
    portfolio: 'https://instagram.com'
  },
  {
    id: 'placeholder-7',
    name: 'Christin Kurian',
    initials: 'CK',
    role: 'Member',
    bio: 'Christin Kurian is a dedicated member at SQAC, focusing on driving quality, collaboration, and excellence across projects.',
    contributions: [
      'Developed and optimized core software modules.',
      'Ensured code quality through rigorous testing and code reviews.'
    ],
    domain: 'Technical',
    pic: '',
    linkedin: 'https://linkedin.com',
    github: 'https://github.com',
    portfolio: 'https://instagram.com'
  },
  {
    id: 'placeholder-8',
    name: 'Vaibhav Dev',
    initials: 'VD',
    role: 'Associate',
    bio: 'Vaibhav Dev is a dedicated associate at SQAC, focusing on driving quality, collaboration, and excellence across projects.',
    contributions: [
      'Developed and optimized core software modules.',
      'Ensured code quality through rigorous testing and code reviews.'
    ],
    domain: 'Technical',
    pic: '',
    linkedin: 'https://linkedin.com',
    github: 'https://github.com',
    portfolio: 'https://instagram.com'
  },
  // Corporate
  {
    id: 'placeholder-9',
    name: 'Vansh Jain',
    initials: 'VJ',
    role: 'Domain Lead',
    bio: 'Vansh Jain is a dedicated domain lead at SQAC, focusing on driving quality, collaboration, and excellence across projects.',
    contributions: [
      'Managed corporate partnerships and sponsor outreach.',
      'Organized and coordinated logistics for major events.'
    ],
    domain: 'Corporate',
    pic: '',
    linkedin: 'https://linkedin.com',
    github: 'https://github.com',
    portfolio: 'https://instagram.com'
  },
  {
    id: 'placeholder-10',
    name: 'Javin Trivedi',
    initials: 'JT',
    role: 'Domain Lead',
    bio: 'Javin Trivedi is a dedicated domain lead at SQAC, focusing on driving quality, collaboration, and excellence across projects.',
    contributions: [
      'Managed corporate partnerships and sponsor outreach.',
      'Organized and coordinated logistics for major events.'
    ],
    domain: 'Corporate',
    pic: '',
    linkedin: 'https://linkedin.com',
    github: 'https://github.com',
    portfolio: 'https://instagram.com'
  },
  // Media
  {
    id: 'placeholder-11',
    name: 'Simran Nayak',
    initials: 'SN',
    role: 'Domain Lead',
    bio: 'Simran Nayak is a dedicated domain lead at SQAC, focusing on driving quality, collaboration, and excellence across projects.',
    contributions: [
      'Designed high-fidelity UI/UX mockups and graphic assets.',
      'Led public relations campaigns and social media presence.'
    ],
    domain: 'Media',
    pic: '',
    linkedin: 'https://linkedin.com',
    github: 'https://github.com',
    portfolio: 'https://instagram.com'
  },
  {
    id: 'placeholder-12',
    name: 'Roopa K',
    initials: 'RK',
    role: 'Associate',
    bio: 'Roopa K is a dedicated associate at SQAC, focusing on driving quality, collaboration, and excellence across projects.',
    contributions: [
      'Designed high-fidelity UI/UX mockups and graphic assets.',
      'Led public relations campaigns and social media presence.'
    ],
    domain: 'Media',
    pic: '',
    linkedin: 'https://linkedin.com',
    github: 'https://github.com',
    portfolio: 'https://instagram.com'
  }
];

export default function Team({ darkMode: propDarkMode }) {
  const { isDarkMode } = useTheme();
  const darkMode = propDarkMode !== undefined ? propDarkMode : isDarkMode;


  const [teamMembers, setTeamMembers] = useState(PLACEHOLDER_MEMBERS);
  const [filter, setFilter] = useState('Board'); // Default to Board based on the reference image showing Board active
  const [hoveredId, setHoveredId] = useState(null);
  const [currentPage, setCurrentPage] = useState(0);
  const [visibleSlots, setVisibleSlots] = useState(5);
  const sectionRef = useRef(null);
  const isScrollingRef = useRef(false);

  useEffect(() => {
    const backendUrl = import.meta.env.VITE_API_BACKEND || "http://localhost:5000";
    fetch(`${backendUrl}/api/data`)
      .then((res) => {
        if (!res.ok) throw new Error("Failed to fetch team data");
        return res.json();
      })
      .then((data) => {
        const mapped = data.map((db) => {
          const name = db.Name || '';
          const initials = name
            .split(' ')
            .filter(Boolean)
            .map(n => n[0])
            .join('')
            .toUpperCase()
            .slice(0, 2);

          const coreDomain = (db['Your Core Domain'] || '').trim().toLowerCase();
          const subDomain = (db['Sub Domain'] || '').trim().toLowerCase();
          const position = (db['Position in SQAC'] || '').trim();

          let domain = 'Technical';
          let role = position;

          if (position.toLowerCase() === 'board member' || position.toLowerCase() === 'board-member') {
            domain = 'Board';
            role = db['Sub Domain'] || 'Board Member';
          } else if (subDomain.includes('creative') || subDomain.includes('pr') || subDomain.includes('media') || subDomain.includes('design')) {
            domain = 'Media';
          } else if (coreDomain === 'technical') {
            domain = 'Technical';
          } else if (coreDomain === 'corporate') {
            domain = 'Corporate';
          } else if (coreDomain === 'both') {
            if (subDomain.includes('web') || subDomain.includes('app') || subDomain.includes('ai') || subDomain.includes('ml')) {
              domain = 'Technical';
            } else {
              domain = 'Corporate';
            }
          }

          const extractDriveImage = (url) => {
            if (!url) return '';
            if (url.includes('cloudinary.com')) return url;
            const match = url.match(/[-\w]{25,}/);
            return match ? `https://drive.google.com/uc?export=view&id=${match[0]}` : url;
          };

          const image = db.image || extractDriveImage(db['Your Image For Website ']) || '';

          const roleName = role || 'Core Member';
          const bio = `${name} is a dedicated ${roleName.toLowerCase()} at SQAC, focusing on driving quality, collaboration, and excellence across projects.`;
          
          let contributions = [
            'Contributed to core team initiatives and deliverables.',
            'Collaborated across domains to support SQAC activities.'
          ];
          if (domain === 'Technical') {
            contributions = [
              'Developed and optimized core software modules.',
              'Ensured code quality through rigorous testing and code reviews.'
            ];
          } else if (domain === 'Corporate') {
            contributions = [
              'Managed corporate partnerships and sponsor outreach.',
              'Organized and coordinated logistics for major events.'
            ];
          } else if (domain === 'Media') {
            contributions = [
              'Designed high-fidelity UI/UX mockups and graphic assets.',
              'Led public relations campaigns and social media presence.'
            ];
          } else if (domain === 'Board') {
            contributions = [
              'Shaped the strategic vision and direction of SQAC.',
              'Mentored members and oversaw operations across all domains.'
            ];
          }

          return {
            id: db._id || Math.random().toString(),
            name,
            initials,
            role,
            bio,
            contributions,
            domain,
            pic: image,
            linkedin: db['LinkedIn Profile Link'] || '#',
            github: db['GitHub Profile Link'] || '#',
            portfolio: db['Instagram Profile Link'] || '#',
          };
        });
        setTeamMembers(mapped);
      })
      .catch((err) => {
        console.error("Error fetching team members:", err);
      });
  }, []);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1280) {
        setVisibleSlots(5);
      } else if (window.innerWidth >= 1024) {
        setVisibleSlots(4);
      } else if (window.innerWidth >= 768) {
        setVisibleSlots(3);
      } else if (window.innerWidth >= 480) {
        setVisibleSlots(2);
      } else {
        setVisibleSlots(1);
      }
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const filteredMembers = teamMembers.filter(member =>
    filter === 'All' ? true : member.domain === filter
  );

  const totalMembers = filteredMembers.length;

  useEffect(() => {
    setCurrentPage(0);
    setHoveredId(null);
  }, [filter]);

  const startIndex = Math.min(currentPage * visibleSlots, Math.max(0, totalMembers - visibleSlots));
  const visibleMembers = filteredMembers.slice(startIndex, startIndex + visibleSlots);
  const totalPages = Math.ceil(totalMembers / visibleSlots);

  const handlePrev = () => {
    setCurrentPage((prev) => Math.max(0, prev - 1));
    setHoveredId(null);
  };

  const handleNext = () => {
    setCurrentPage((prev) => Math.min(totalPages - 1, prev + 1));
    setHoveredId(null);
  };

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;

    const handleWheel = (e) => {
      const isAtEnd = currentPage >= totalPages - 1;
      const isAtStart = currentPage <= 0;

      // Only handle vertical scrolling
      if (Math.abs(e.deltaY) > Math.abs(e.deltaX)) {
        if (e.deltaY > 10 && !isAtEnd) {
          e.preventDefault();
          if (!isScrollingRef.current) {
            isScrollingRef.current = true;
            handleNext();
            setTimeout(() => { isScrollingRef.current = false; }, 500);
          }
        } else if (e.deltaY < -10 && !isAtStart) {
          e.preventDefault();
          if (!isScrollingRef.current) {
            isScrollingRef.current = true;
            handlePrev();
            setTimeout(() => { isScrollingRef.current = false; }, 500);
          }
        }
      }
    };

    el.addEventListener('wheel', handleWheel, { passive: false });
    return () => el.removeEventListener('wheel', handleWheel);
  }, [currentPage, totalPages]);

  return (
    <section ref={sectionRef} id="team" className={`py-24 relative overflow-hidden font-sans min-h-screen transition-colors duration-500 ${darkMode ? 'bg-mesh-dark text-white' : 'bg-mesh-light text-gray-900'}`}>
      <div className="max-w-[1400px] mx-auto px-6 relative z-10">

        {/* Header and Filters aligned top */}
        <div className="flex flex-col xl:flex-row xl:items-start justify-between mb-16 gap-8">

          <div className="max-w-xl">
            <h2 className={`text-sm uppercase tracking-[0.2em] font-extrabold mb-3 ${darkMode ? 'text-sqac-primary' : 'text-[#FF3B7C]'
              }`}>
              THE PEOPLE BEHIND SQAC
            </h2>
            <h3 className={`text-4xl sm:text-6xl font-black tracking-tight leading-tight ${darkMode ? 'text-white' : 'text-[#1C1C1E]'
              }`}>
              Meet The Core Innovators
            </h3>
            <p className={`text-base sm:text-lg mt-4 opacity-80 ${darkMode ? 'text-gray-300' : 'text-gray-600'
              }`}>
              A cross-functional unit driving operations, codebase quality, design narratives, and institutional partnerships.
            </p>
          </div>

          {/* Pill-style Filter */}
          <div className={`flex flex-wrap items-center gap-1 p-2 rounded-full shadow-sm ${darkMode ? 'bg-white/5 border border-white/10' : 'bg-white/80'
            } backdrop-blur-md`}>
            {['Board', 'Technical', 'Corporate', 'Media'].map((tab) => (
              <button
                key={tab}
                onClick={() => setFilter(tab)}
                className={`px-6 py-3 rounded-full text-[11px] sm:text-xs font-bold uppercase tracking-widest transition-all duration-300 cursor-pointer ${filter === tab
                  ? 'bg-gradient-to-r from-[#FF3B7C] to-[#FF7B6C] text-white shadow-md'
                  : darkMode
                    ? 'text-gray-300 hover:text-white hover:bg-white/10'
                    : 'text-gray-600 hover:text-gray-900 hover:bg-black/5'
                  }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        {/* Showing Text and Navigation */}
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center gap-4 sm:gap-6">
            <span className={`text-[11px] font-bold uppercase tracking-widest opacity-60 ${darkMode ? 'text-gray-400' : 'text-gray-600'
              }`}>
              Showing {startIndex + 1} - {Math.min(startIndex + visibleSlots, totalMembers)} of {totalMembers} members
            </span>

            {/* Scroll Indicator placed next to Showing text */}
            <div className="hidden sm:flex items-center gap-1.5 opacity-50">
              <Mouse className={`w-4 h-4 ${darkMode ? 'text-gray-400' : 'text-gray-500'}`} />
              <span className={`text-[11px] font-bold uppercase tracking-widest ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                Scroll down to see more people
              </span>
            </div>
          </div>

          {totalPages > 1 && (
            <div className="flex items-center gap-3">
              <button onClick={handlePrev} disabled={currentPage === 0} className={`p-2.5 rounded-full shadow-md transition-all ${darkMode ? 'bg-white/5 border border-white/10 text-white hover:bg-white/10' : 'bg-white/90 border border-black/5 hover:bg-white text-gray-900'} disabled:opacity-30`}><ChevronLeft className="w-5 h-5" /></button>
              <button onClick={handleNext} disabled={currentPage === totalPages - 1} className={`p-2.5 rounded-full shadow-md transition-all ${darkMode ? 'bg-white/5 border border-white/10 text-white hover:bg-white/10' : 'bg-white/90 border border-black/5 hover:bg-white text-gray-900'} disabled:opacity-30`}><ChevronRight className="w-5 h-5" /></button>
            </div>
          )}
        </div>

        {/* Dynamic Horizontal Cards */}
        <div
          className={`flex flex-row h-[500px] select-none rounded-[32px] overflow-hidden shadow-2xl transition-colors duration-500 bg-white/5`}
          onMouseLeave={() => setHoveredId(null)}
        >
          <AnimatePresence mode="popLayout">
            {visibleMembers.map((member, index) => {
              const isHovered = hoveredId === member.id;
              const isAnyHovered = hoveredId !== null;
              // If hovering, hovered card expands to 3fr, others shrink to 1fr
              // If none hovered, all share equally (1fr)

              const activeGradients = darkMode ? DARK_CARD_GRADIENTS : LIGHT_CARD_GRADIENTS;
              const gradientClass = activeGradients[index % activeGradients.length];

              return (
                <motion.div
                  key={member.id}
                  layout
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{
                    type: 'spring',
                    stiffness: 250,
                    damping: 25,
                    mass: 0.8
                  }}
                  onMouseEnter={() => setHoveredId(member.id)}
                  className={`relative cursor-pointer transition-shadow duration-300 p-6 sm:p-8 flex flex-col justify-between
                    bg-gradient-to-r ${gradientClass}
                    ${isHovered ? 'flex-[2.5] md:flex-[3]' : isAnyHovered ? 'flex-1 md:flex-[0.7] opacity-80' : 'flex-1'}`}
                >
                  {/* Subtle noise/mesh overlay for premium glass look */}
                  <div className="absolute inset-0 opacity-[0.03] mix-blend-overlay bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0IiBoZWlnaHQ9IjQiPgo8cmVjdCB3aWR0aD0iNCIgaGVpZ2h0PSI0IiBmaWxsPSIjZmZmIiAvPgo8cmVjdCB3aWR0aD0iMSIgaGVpZ2h0PSIxIiBmaWxsPSIjMDAwIiAvPgo8L3N2Zz4=')] pointer-events-none" />

                  {/* Glassmorphism subtle overlay */}
                  <div className="absolute inset-0 bg-white/10 dark:bg-black/10 backdrop-blur-[2px] pointer-events-none" />

                  {/* Card Content - Top */}
                  <div className="relative z-10 flex flex-col justify-between h-full">

                    <div className="flex flex-col gap-6">
                      {/* Initials Circle */}
                      <motion.div layout="position" className="w-14 h-14 sm:w-16 sm:h-16 rounded-full flex items-center justify-center font-bold text-white text-xl sm:text-2xl shadow-sm overflow-hidden"
                        style={{ background: 'linear-gradient(135deg, rgba(255,255,255,0.4) 0%, rgba(255,255,255,0.1) 100%)', backdropFilter: 'blur(10px)', border: '1px solid rgba(255,255,255,0.3)' }}
                      >
                        {member.pic ? (
                          <img src={member.pic} alt={member.name} className="w-full h-full object-cover" />
                        ) : (
                          member.initials
                        )}
                      </motion.div>

                      {/* Header info (Name, Role) */}
                      <motion.div layout="position">
                        <h4 className={`font-black tracking-tight leading-none text-[#1C1C1E] dark:text-white transition-all duration-300 whitespace-nowrap overflow-hidden text-ellipsis ${(!isHovered && isAnyHovered) ? 'text-lg' : 'text-2xl sm:text-3xl'
                          }`}>
                          {member.name}
                        </h4>
                        <p className={`font-semibold mt-2 opacity-80 text-[#1C1C1E] dark:text-gray-200 transition-all duration-300 ${(!isHovered && isAnyHovered) ? 'text-xs' : 'text-sm'
                          }`}>
                          {member.role}
                        </p>
                      </motion.div>
                    </div>

                    {/* Expandable Content (Middle) - Only visible when hovered */}
                    <AnimatePresence>
                      {isHovered && (
                        <motion.div
                          initial={{ opacity: 0, height: 0, marginTop: 0 }}
                          animate={{ opacity: 1, height: 'auto', marginTop: 24 }}
                          exit={{ opacity: 0, height: 0, marginTop: 0 }}
                          className="overflow-hidden flex-1 flex flex-col justify-start"
                        >
                          <p className="text-sm font-medium text-[#1C1C1E]/80 dark:text-white/80 leading-relaxed mb-4 line-clamp-3">
                            {member.bio}
                          </p>
                          <div className="space-y-2">
                            <span className="text-[10px] uppercase font-black tracking-widest text-[#1C1C1E]/60 dark:text-white/60">
                              Key Contributions
                            </span>
                            <ul className="space-y-1">
                              {member.contributions.slice(0, 2).map((contr, idx) => (
                                <li key={idx} className="flex items-start gap-2 text-xs font-medium text-[#1C1C1E]/90 dark:text-white/90">
                                  <span className="w-1.5 h-1.5 rounded-full bg-white/80 mt-1 flex-shrink-0" />
                                  <span className="line-clamp-2">{contr}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>

                    {/* Bottom Area (Domain / Socials) */}
                    <motion.div layout="position" className="mt-auto pt-6 flex items-center justify-between border-t border-white/20">

                      {/* Domain Badge */}
                      <div className="flex items-center gap-2 text-[#1C1C1E] dark:text-white">
                        <Users className="w-4 h-4 opacity-80" />
                        <span className={`font-bold text-xs ${(!isHovered && isAnyHovered) ? 'hidden' : 'block'}`}>
                          {member.domain === 'Board' ? 'Leadership & Vision' :
                            member.domain === 'Technical' ? 'Engineering & Code' :
                              member.domain === 'Corporate' ? 'Strategy & PR' : 'Creative & Media'}
                        </span>
                      </div>

                      {/* Social Links - Visible only on hover */}
                      <AnimatePresence>
                        {isHovered && (
                          <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: 20 }}
                            className="flex items-center gap-2"
                          >
                            {[
                              { icon: <Linkedin className="w-4 h-4" />, url: member.linkedin, label: 'LinkedIn' },
                              { icon: <Github className="w-4 h-4" />, url: member.github, label: 'GitHub' },
                              { icon: <Globe className="w-4 h-4" />, url: member.portfolio, label: 'Portfolio' },
                            ].map((social, idx) => (
                              <a
                                key={idx}
                                href={social.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-8 h-8 rounded-full bg-white/20 hover:bg-white/40 flex items-center justify-center text-[#1C1C1E] dark:text-white transition-colors"
                                onClick={(e) => e.stopPropagation()}
                                aria-label={`${member.name} ${social.label}`}
                              >
                                {social.icon}
                              </a>
                            ))}
                          </motion.div>
                        )}
                      </AnimatePresence>

                    </motion.div>

                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>

      </div>
    </section>
  );
}
