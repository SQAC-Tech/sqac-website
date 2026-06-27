import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
//import { teamMembers } from '../data/teamData';
import { ChevronLeft, ChevronRight, ChevronDown, Linkedin, Github, Globe, Users, Mouse } from 'lucide-react';
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
    subDomain: 'Web Dev',
    position: 'Lead',
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
    subDomain: 'AI/ML',
    position: 'Member',
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
    subDomain: 'App Dev',
    position: 'Associate',
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
    subDomain: 'Sponsorship',
    position: 'Lead',
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
    subDomain: 'Events',
    position: 'Lead',
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
    subDomain: 'Creative',
    position: 'Lead',
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
    subDomain: 'PR',
    position: 'Associate',
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
  const [subFilter, setSubFilter] = useState('All');
  const [openDropdown, setOpenDropdown] = useState(null);
  const [hoveredId, setHoveredId] = useState(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [dragOffset, setDragOffset] = useState(0);
  const [radiusX, setRadiusX] = useState(520);
  const [radiusZ, setRadiusZ] = useState(360);
  const [cardWidth, setCardWidth] = useState(280);
  const [cardHeight, setCardHeight] = useState(420);
  const sectionRef = useRef(null);
  const isScrollingRef = useRef(false);
  const isDragging = useRef(false);

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
            subDomain,
            position,
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
      const width = window.innerWidth;
      let cardW = 230;
      let cardH = 340;

      if (width >= 1280) {
        cardW = 300;
        cardH = 360;
      } else if (width >= 1024) {
        cardW = 220;
        cardH = 290;
      } else if (width >= 768) {
        cardW = 180;
        cardH = 240;
      } else {
        cardW = 140;
        cardH = 200;
      }

      setCardWidth(cardW);
      setCardHeight(cardH);

      // Horizontal radius takes cards right to the edge with a 16px safe margin
      const rx = Math.max(200, width / 2 - cardW / 2 - 16);
      // Depth radius is capped at 360px for desktop to keep perspective clean
      const rz = Math.min(360, width * 0.25);

      setRadiusX(rx);
      setRadiusZ(rz);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const filteredMembers = React.useMemo(() => {
    return teamMembers.filter(member => {
      // 1. Parent domain matching
      const matchParent = filter === 'All' ? true : member.domain === filter;
      if (!matchParent) return false;

      // 2. Sub-domain matching
      if (subFilter === 'All') return true;

      const sub = (member.subDomain || '').toLowerCase();
      const pos = (member.position || '').toLowerCase();
      const role = (member.role || '').toLowerCase();

      if (filter === 'Technical') {
        if (subFilter === 'AI/ML') return sub.includes('ai') || sub.includes('ml') || sub.includes('machine') || sub.includes('learning');
        if (subFilter === 'WEB DEV') return sub.includes('web') || sub.includes('front') || sub.includes('back') || sub.includes('full');
        if (subFilter === 'APP DEV') return sub.includes('app') || sub.includes('android') || sub.includes('ios') || sub.includes('flutter');
        if (subFilter === 'LEADS') return pos.includes('lead') || role.includes('lead');
      }
      if (filter === 'Corporate') {
        if (subFilter === 'SPONSORSHIP') return sub.includes('sponsor') || sub.includes('sponshorship');
        if (subFilter === 'EVENTS') return sub.includes('event');
      }
      if (filter === 'Media') {
        if (subFilter === 'LEADS') return pos.includes('lead') || role.includes('lead');
        if (subFilter === 'CREATIVE') return sub.includes('creative') || sub.includes('design') || sub.includes('graphic') || sub.includes('video');
        if (subFilter === 'PR') return sub.includes('pr') || sub.includes('public') || sub.includes('relations') || sub.includes('social');
      }
      return true;
    });
  }, [teamMembers, filter, subFilter]);

  // Duplicate members to ensure a continuous full ring with no gaps (minimum 10 cards)
  const displayMembers = React.useMemo(() => {
    let list = [...filteredMembers];
    if (list.length === 0) return [];

    const minCards = 14;
    let repeated = [...list];
    let multiplier = 1;

    while (repeated.length < minCards) {
      repeated = [
        ...repeated,
        ...list.map((member) => ({
          ...member,
          id: `${member.id}-dup-${multiplier}`,
        })),
      ];
      multiplier++;
    }
    return repeated;
  }, [filteredMembers]);

  const totalMembers = filteredMembers.length;
  const displayCount = displayMembers.length;
  const angleStep = 360 / Math.max(displayCount, 1);

  // Calculate which display card is active
  const activeDisplayIndex = displayCount > 0
    ? ((activeIndex % displayCount) + displayCount) % displayCount
    : 0;

  useEffect(() => {
    setActiveIndex(0);
    setDragOffset(0);
    setHoveredId(null);
  }, [filter, subFilter]);

  const handlePrev = () => {
    setActiveIndex((prev) => prev - 1);
    setHoveredId(null);
  };

  const handleNext = () => {
    setActiveIndex((prev) => prev + 1);
    setHoveredId(null);
  };

  const handlePan = (event, info) => {
    isDragging.current = true;
    const sensitivity = 0.2;
    const deltaAngle = info.offset.x * sensitivity;
    setDragOffset(deltaAngle);
  };

  const handlePanEnd = (event, info) => {
    isDragging.current = false;
    const sensitivity = 0.2;
    const deltaAngle = info.offset.x * sensitivity;

    const totalRotation = -activeIndex * angleStep + deltaAngle;
    const nearestIndex = Math.round(-totalRotation / angleStep);

    // Snaps infinitely to closest index on the circle
    setActiveIndex(nearestIndex);
    setDragOffset(0);
  };

  const handleCardClick = (index) => {
    if (isDragging.current) return;
    setActiveIndex(index);
  };

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;

    const handleWheel = (e) => {
      if (Math.abs(e.deltaY) > Math.abs(e.deltaX)) {
        e.preventDefault();
        if (!isScrollingRef.current) {
          isScrollingRef.current = true;
          if (e.deltaY > 10) {
            setActiveIndex(prev => prev + 1);
          } else if (e.deltaY < -10) {
            setActiveIndex(prev => prev - 1);
          }
          setTimeout(() => { isScrollingRef.current = false; }, 300);
        }
      }
    };

    el.addEventListener('wheel', handleWheel, { passive: false });
    return () => el.removeEventListener('wheel', handleWheel);
  }, [angleStep]);

  return (
    <section ref={sectionRef} id="team" className={`relative overflow-hidden font-sans h-screen min-h-[600px] flex flex-col justify-center pt-20 pb-4 transition-colors duration-500 ${darkMode ? 'bg-mesh-dark text-white' : 'bg-mesh-light text-gray-900'}`}>

      {/* Top Header & Filters Section - Constrained Width */}
      <div className="max-w-[1400px] mx-auto px-6 relative z-10 w-full flex flex-col justify-start">
        {/* Header and Filters aligned top */}
        <div className="flex flex-col xl:flex-row xl:items-center justify-between mb-6 gap-4 xl:gap-8">
          <div className="max-w-xl">
            <h2 className={`text-sm uppercase tracking-[0.2em] font-extrabold mb-3 ${darkMode ? 'text-sqac-primary' : 'text-[#FF3B7C]'}`}>
              THE PEOPLE BEHIND SQAC
            </h2>
            <h3 className={`text-4xl sm:text-6xl font-black tracking-tight leading-tight ${darkMode ? 'text-white' : 'text-[#1C1C1E]'}`}>
              Meet The Core Innovators
            </h3>
            <p className={`text-base sm:text-lg mt-4 opacity-80 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
              A cross-functional unit driving operations, codebase quality, design narratives, and institutional partnerships.
            </p>
          </div>

          {/* Pill-style Filter */}
          <div className={`flex flex-wrap items-center gap-1 p-2 rounded-full shadow-sm ${darkMode ? 'bg-white/5 border border-white/10' : 'bg-white/80'} backdrop-blur-md relative z-[100]`}>
            {['Board', 'Technical', 'Corporate', 'Media'].map((tab) => {
              const hasDropdown = ['Technical', 'Corporate', 'Media'].includes(tab);
              const options = hasDropdown ? {
                Technical: ['LEADS', 'AI/ML', 'WEB DEV', 'APP DEV'],
                Corporate: ['SPONSORSHIP', 'EVENTS'],
                Media: ['LEADS', 'CREATIVE', 'PR']
              }[tab] : [];
              const dropdownList = hasDropdown ? ['ALL', ...options] : [];

              return (
                <div
                  key={tab}
                  className="relative"
                  onMouseEnter={() => hasDropdown && setOpenDropdown(tab)}
                  onMouseLeave={() => setOpenDropdown(null)}
                >
                  <button
                    onClick={() => {
                      setFilter(tab);
                      setSubFilter('All');
                      setOpenDropdown(null);
                    }}
                    className={`px-6 py-3 rounded-full text-[11px] sm:text-xs font-bold uppercase tracking-widest transition-all duration-300 cursor-pointer flex items-center justify-center gap-1.5 group ${filter === tab
                      ? 'bg-gradient-to-r from-[#FF3B7C] to-[#FF7B6C] text-white shadow-md'
                      : darkMode
                        ? 'text-gray-300 hover:text-white hover:bg-white/10'
                        : 'text-gray-600 hover:text-gray-900 hover:bg-black/5'
                      }`}
                  >
                    <span>{tab}</span>
                    {hasDropdown && (
                      <ChevronDown
                        className={`w-3.5 h-3.5 transition-transform duration-200
                          ${openDropdown === tab ? 'rotate-180' : ''}
                          ${filter === tab
                            ? 'text-white'
                            : darkMode ? 'text-gray-400 group-hover:text-white' : 'text-gray-500 group-hover:text-gray-900'
                          }
                        `}
                      />
                    )}
                  </button>

                  <AnimatePresence>
                    {openDropdown === tab && dropdownList.length > 0 && (
                      <motion.div
                        initial={{ opacity: 0, y: 10, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 10, scale: 0.95 }}
                        transition={{ duration: 0.15 }}
                        className={`absolute top-full mt-2.5 left-1/2 -translate-x-1/2 min-w-[170px] rounded-[24px] p-2.5 shadow-2xl border backdrop-blur-xl z-[150]
                          ${darkMode
                            ? 'bg-[#1C1C1E]/95 border-white/10 text-white shadow-[0_12px_40px_rgba(0,0,0,0.6)]'
                            : 'bg-white/95 border-black/5 text-[#1C1C1E] shadow-[0_12px_40px_rgba(0,0,0,0.12)]'
                          }
                        `}
                      >
                        {dropdownList.map((option) => {
                          const isSelected = (option === 'ALL' && subFilter === 'All') || (option.toUpperCase() === subFilter.toUpperCase());

                          return (
                            <button
                              key={option}
                              onClick={() => {
                                setFilter(tab);
                                setSubFilter(option === 'ALL' ? 'All' : option);
                                setOpenDropdown(null);
                              }}
                              className={`w-full text-left px-4 py-2.5 rounded-xl text-[10px] sm:text-[11px] font-bold uppercase tracking-widest transition-all duration-200 cursor-pointer
                                ${isSelected
                                  ? 'bg-gradient-to-r from-[#FF3B7C] to-[#FF7B6C] text-white shadow-sm font-extrabold'
                                  : darkMode ? 'hover:bg-white/5 text-gray-300 hover:text-white' : 'hover:bg-black/5 text-[#1C1C1E] hover:text-gray-900'
                                }
                              `}
                            >
                              {option}
                            </button>
                          );
                        })}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </div>

        {/* Showing Text and Navigation */}
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-4 sm:gap-6">
            <span className={`text-[11px] font-bold uppercase tracking-widest opacity-60 ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
              Showing member {totalMembers > 0 ? (((activeIndex % totalMembers) + totalMembers) % totalMembers) + 1 : 0} of {totalMembers}
            </span>

            {/* Scroll/Drag Indicator */}
            <div className="hidden sm:flex items-center gap-1.5 opacity-50">
              <Mouse className={`w-4 h-4 ${darkMode ? 'text-gray-400' : 'text-gray-500'}`} />
              <span className={`text-[11px] font-bold uppercase tracking-widest ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                Drag cards left/right or scroll to rotate
              </span>
            </div>
          </div>

          {totalMembers > 1 && (
            <div className="flex items-center gap-3">
              <button
                onClick={handlePrev}
                className={`p-2.5 rounded-full shadow-md transition-all ${darkMode ? 'bg-white/5 border border-white/10 text-white hover:bg-white/10' : 'bg-white/90 border border-black/5 hover:bg-white text-gray-900'}`}
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={handleNext}
                className={`p-2.5 rounded-full shadow-md transition-all ${darkMode ? 'bg-white/5 border border-white/10 text-white hover:bg-white/10' : 'bg-white/90 border border-black/5 hover:bg-white text-gray-900'}`}
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          )}
        </div>
      </div>

      {/* Bottom Section - Full Width Carousel Viewport (No rounded glass container) */}
      <div
        className="relative h-[360px] sm:h-[460px] md:h-[580px] w-full flex items-center justify-center overflow-hidden perspective-2000"
        style={{ touchAction: 'pan-y' }}
        onMouseLeave={() => setHoveredId(null)}
      >
        {/* Glowing Platform Base */}
        <div className="carousel-platform" />

        {/* 3D Track */}
        <motion.div
          className="w-full h-full relative flex items-center justify-center preserve-3d cursor-grab active:cursor-grabbing"
          style={{ transformStyle: 'preserve-3d' }}
          animate={{
            transform: `translateY(${radiusZ * 0.23}px) rotateX(12deg)`
          }}
          transition={isDragging.current ? { duration: 0 } : { type: "spring", stiffness: 120, damping: 20 }}
          onPan={handlePan}
          onPanEnd={handlePanEnd}
        >
          <AnimatePresence mode="popLayout">
            {displayMembers.map((member, i) => {
              const diffAngle = (i - activeIndex) * angleStep + dragOffset;

              // Normalize diffAngle to [-180, 180]
              let normAngle = diffAngle % 360;
              if (normAngle > 180) normAngle -= 360;
              if (normAngle < -180) normAngle += 360;

              const absoluteDiff = Math.abs(normAngle);

              // Opacity is higher in front (1.0) and lower in back (0.45)
              const opacity = 0.45 + 0.55 * (Math.cos(normAngle * Math.PI / 180) + 1) / 2;

              // Continuous dynamic scaling based on relative angle (normAngle)
              // This ensures fluid scaling during dragging/scrolling
              const centerFactor = Math.pow(Math.cos(normAngle * Math.PI / 360), 6); // Cosine power peaks at 0
              let scale = 0.45 + 0.67 * centerFactor; // Ranges from 0.45 to 1.12

              // Hover boost for the active card
              if (i === activeDisplayIndex && hoveredId === member.id) {
                scale += 0.03;
              }

              const zOffset = i === activeDisplayIndex
                ? (hoveredId === member.id ? 30 : 15)
                : 0;

              const cardAngleRad = normAngle * Math.PI / 180;
              const X = (radiusX + zOffset * 0.8) * Math.sin(cardAngleRad);
              const Z = (radiusZ + zOffset) * Math.cos(cardAngleRad);

              const activeGradients = darkMode ? DARK_CARD_GRADIENTS : LIGHT_CARD_GRADIENTS;
              const gradientClass = activeGradients[i % activeGradients.length];

              return (
                <motion.div
                  key={member.id}
                  className={`absolute rounded-[32px] overflow-hidden shadow-2xl p-6 sm:p-8 flex flex-col justify-between select-none
                    bg-gradient-to-r ${gradientClass}
                    ${i === activeDisplayIndex
                      ? 'border-2 border-white/40 shadow-[0_0_30px_rgba(255,255,255,0.15)]'
                      : 'border border-white/10 opacity-70'
                    }
                  `}
                  style={{
                    width: cardWidth,
                    height: cardHeight,
                    position: 'absolute',
                    left: '50%',
                    top: '50%',
                    transformStyle: 'preserve-3d',
                    backfaceVisibility: 'hidden',
                    pointerEvents: 'auto',
                    cursor: i === activeDisplayIndex ? 'default' : 'pointer',
                  }}
                  animate={{
                    transform: `translate(-50%, -50%) translateX(${X}px) translateZ(${Z}px) rotateY(0deg) scale(${scale})`,
                    opacity: opacity,
                    zIndex: Math.round(Z + 1000),
                  }}
                  transition={isDragging.current ? { duration: 0 } : {
                    type: 'spring',
                    stiffness: 150,
                    damping: 22,
                    mass: 0.8
                  }}
                  onClick={() => handleCardClick(i)}
                  onMouseEnter={() => i === activeDisplayIndex && setHoveredId(member.id)}
                  onMouseLeave={() => setHoveredId(null)}
                >
                  {/* Subtle noise/mesh overlay for premium glass look */}
                  <div className="absolute inset-0 opacity-[0.03] mix-blend-overlay bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0IiBoZWlnaHQ9IjQiPgo8cmVjdCB3aWR0aD0iNCIgaGVpZ2h0PSI0IiBmaWxsPSIjZmZmIiAvPgo8cmVjdCB3aWR0aD0iMSIgaGVpZ2h0PSIxIiBmaWxsPSIjMDAwIiAvPgo8L3N2Zz4=')] pointer-events-none" />

                  {/* Glassmorphism subtle overlay */}
                  <div className="absolute inset-0 bg-white/10 dark:bg-black/10 backdrop-blur-[2px] pointer-events-none" />

                  {/* Card Content - Top */}
                  <div className="relative z-10 flex flex-col justify-between h-full w-full">
                    <div className="flex flex-col gap-4">
                      {/* Initials Circle */}
                      <div
                        className="w-12 h-12 sm:w-14 sm:h-14 rounded-full flex items-center justify-center font-bold text-white text-lg sm:text-xl shadow-sm overflow-hidden"
                        style={{
                          background: 'linear-gradient(135deg, rgba(255,255,255,0.4) 0%, rgba(255,255,255,0.1) 100%)',
                          backdropFilter: 'blur(10px)',
                          border: '1px solid rgba(255,255,255,0.3)'
                        }}
                      >
                        {member.pic ? (
                          <img src={member.pic} alt={member.name} className="w-full h-full object-cover" />
                        ) : (
                          member.initials
                        )}
                      </div>

                      {/* Header info (Name, Role) */}
                      <div>
                        <h4 className="font-black tracking-tight leading-none text-[#1C1C1E] dark:text-white text-xl sm:text-2xl whitespace-nowrap overflow-hidden text-ellipsis">
                          {member.name}
                        </h4>
                        <p className="font-semibold mt-1 text-xs sm:text-sm opacity-80 text-[#1C1C1E] dark:text-gray-200">
                          {member.role}
                        </p>
                      </div>
                    </div>

                    {/* Expandable Content (Middle) - Only visible when active */}
                    <div className={`overflow-hidden flex-1 flex flex-col justify-start transition-all duration-500 mt-4 ${i === activeDisplayIndex ? 'opacity-100 max-h-[160px]' : 'opacity-0 max-h-0 pointer-events-none'
                      }`}>
                      <p className="text-xs font-medium text-[#1C1C1E]/80 dark:text-white/80 leading-relaxed mb-3 line-clamp-3">
                        {member.bio}
                      </p>
                      <div className="space-y-1">
                        <span className="text-[9px] uppercase font-black tracking-widest text-[#1C1C1E]/60 dark:text-white/60">
                          Key Contributions
                        </span>
                        <ul className="space-y-0.5">
                          {member.contributions.slice(0, 2).map((contr, idx) => (
                            <li key={idx} className="flex items-start gap-1.5 text-[11px] font-medium text-[#1C1C1E]/90 dark:text-white/90">
                              <span className="w-1.5 h-1.5 rounded-full bg-white/80 mt-1 flex-shrink-0" />
                              <span className="line-clamp-1">{contr}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    {/* Bottom Area (Domain / Socials) */}
                    <div className="mt-auto pt-4 flex items-center justify-between border-t border-white/20">
                      {/* Domain Badge */}
                      <div className="flex items-center gap-1.5 text-[#1C1C1E] dark:text-white">
                        <Users className="w-3.5 h-3.5 opacity-80" />
                        <span className="font-bold text-[10px]">
                          {member.domain === 'Board' ? 'Leadership' :
                            member.domain === 'Technical' ? 'Engineering' :
                              member.domain === 'Corporate' ? 'Strategy & PR' : 'Creative'}
                        </span>
                      </div>

                      {/* Social Links - Visible only on active */}
                      <div className={`flex items-center gap-1.5 transition-opacity duration-300 ${i === activeDisplayIndex ? 'opacity-100' : 'opacity-0 pointer-events-none'
                        }`}>
                        {[
                          { icon: <Linkedin className="w-3.5 h-3.5" />, url: member.linkedin, label: 'LinkedIn' },
                          { icon: <Github className="w-3.5 h-3.5" />, url: member.github, label: 'GitHub' },
                          { icon: <Globe className="w-3.5 h-3.5" />, url: member.portfolio, label: 'Portfolio' },
                        ].map((social, idx) => (
                          <a
                            key={idx}
                            href={social.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-7 h-7 rounded-full bg-white/20 hover:bg-white/40 flex items-center justify-center text-[#1C1C1E] dark:text-white transition-colors"
                            onClick={(e) => e.stopPropagation()}
                            aria-label={`${member.name} ${social.label}`}
                          >
                            {social.icon}
                          </a>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
