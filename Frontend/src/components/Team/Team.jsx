import React, { useEffect, useMemo, useRef, useState } from 'react';
import axios from 'axios';
import Navbar from '../HomePage/Navbar';
import Footer from '../Footer';
import Teamvh1 from './Teamvh1';
import Teamvh2 from './Teamvh2';
import { FaLinkedin, FaInstagram, FaGithub } from 'react-icons/fa';

const boardMemberHierarchy = [
  'Secretary',
  'Joint Secretary',
  'Leads',
  'Domain Lead',
  'Associate',
  'Member',
];

const hardcodedBoardMembers = [
  {
    Name: 'Yash Gupta',
    'Position in SQAC': 'Secretary ',
    'Sub Domain': 'Board Member',
    'LinkedIn Profile Link': 'https://www.linkedin.com/in/yash-gupta-052a32142/',
    'Instagram Profile Link': 'https://www.instagram.com/guptayash_16/',
    'GitHub Profile Link': 'https://github.com/Yash9837',
    'Your Image For Website': 'https://res.cloudinary.com/deibvuz1h/image/upload/WhatsApp_Image_2025-07-29_at_11.47.56_-_Yash_Gupta_fcyni0',
  },
  {
    Name: 'Tanmay Bansal',
    'Position in SQAC': 'Joint Secretary ',
    'Sub Domain': 'Board Member',
    'LinkedIn Profile Link': 'https://www.linkedin.com/in/tanmay-bansal-3b17a8247/',
    'Instagram Profile Link': 'https://www.instagram.com/tanmay__170/?igsh=MTZ5NG1pbDcweDg4bg%3D%3D',
    'GitHub Profile Link': 'https://github.com/Tanmay170',
    'Your Image For Website': 'https://res.cloudinary.com/deibvuz1h/image/upload/IMG-20240927-WA0002_-_TANMAY_BANSAL_RA2311043010022_xj6wui',
  },
  {
    Name: 'Nityam Sharma',
    'Position in SQAC': 'Joint Secretary ',
    'Sub Domain': 'Board Member',
    'LinkedIn Profile Link': 'https://www.linkedin.com/in/nityamsharma-cse?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app',
    'Instagram Profile Link': 'https://www.instagram.com/_nityamsharma_/?igsh=MXhkM3AzZ203YzZ1Zw%3D%3D',
    'GitHub Profile Link': 'https://github.com/SharmaNityam',
    'Your Image For Website': 'https://res.cloudinary.com/deibvuz1h/image/upload/Screenshot_2025-01-07-19-52-51-05_6012fa4d4ddec268fc5c7112cbb265e7_-_Nityam_Sharma_jjfgcn',
  },
  {
    Name: 'Priyanshu Vasudev',
    'Position in SQAC': 'Technical Lead ',
    'Sub Domain': 'Board Member',
    'LinkedIn Profile Link': 'https://www.linkedin.com/in/priyanshu-vasudev-off/',
    'Instagram Profile Link': 'https://www.instagram.com/priyanshu.vasudev/',
    'GitHub Profile Link': 'https://github.com/Priyanshu2608',
    'Your Image For Website': 'https://res.cloudinary.com/deibvuz1h/image/upload/priyanshu_pskop4',
  },
  {
    Name: 'Vansh Jain',
    'Position in SQAC': 'Corporate Lead ',
    'Sub Domain': 'Board Member',
    'LinkedIn Profile Link': 'https://www.linkedin.com/in/vedant-modi-b99b0628a/',
    'Instagram Profile Link': 'https://www.instagram.com/vedantmodi21/?igsh=MTdoMGE0MDYxODMxaA%3D%3D',
    'GitHub Profile Link': 'https://github.com/VEDANTMODI21',
    'Your Image For Website': 'https://res.cloudinary.com/deibvuz1h/image/upload/v1754250193/Vansh_Jain_Head_-_Vansh_Jain_xsjiw0.jpg',
  },
];

const Team = () => {
  const [teamData, setTeamData] = useState([]);
  const [subDomains, setSubDomains] = useState([]);
  const [selectedDomain, setSelectedDomain] = useState('Board Member');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get(import.meta.env.VITE_API)
      .then((res) => {
        setTeamData(res.data);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  useEffect(() => {
    axios.get(import.meta.env.VITE_API)
      .then((response) => {
        const data = response.data;
        const uniqueDomains = [...new Set(data.map(row => row['Sub Domain']).filter(Boolean))];
        setSubDomains(uniqueDomains);
      })
      .catch(() => {});
  }, []);

  const filterMembersByDomain = () => {
    if (!selectedDomain) return [];

    if (selectedDomain.toLowerCase() === 'board member') {
      return hardcodedBoardMembers;
    }

    if (selectedDomain.toLowerCase() === 'media') {
      return teamData.filter(
        (member) => (member['Core Domain'] || '').trim().toLowerCase() === 'media'
      );
    }

    return teamData.filter((member) => {
      const domainField = member['Sub Domain'] || '';
      const subdomains = domainField.split(/and|,/).map((d) => d.trim().toLowerCase());
      return subdomains.includes(selectedDomain.toLowerCase());
    });
  };

  const groupByHierarchy = (members) => {
    const groups = Object.fromEntries(boardMemberHierarchy.map(role => [role, []]));

    members.forEach((member) => {
      const position = member['Position in SQAC'] || '';
      if (selectedDomain.toLowerCase() === 'board member') {
        if (position.includes('Secretary') && member.Name === 'Yash Gupta') {
          groups['Secretary'].push(member);
        } else if (position.includes('Joint Secretary')) {
          groups['Joint Secretary'].push(member);
        } else if (position.includes('Lead')) {
          groups['Leads'].push(member);
        } else {
          groups['Member'].push(member);
        }
      } else {
        const role = boardMemberHierarchy.find(h => position.toLowerCase().includes(h.toLowerCase()));
        if (role) {
          groups[role].push(member);
        } else {
          groups['Member'].push(member);
        }
      }
    });

    return groups;
  };

  const displayMembers = useMemo(() => groupByHierarchy(filterMembersByDomain()), [teamData, selectedDomain]);
  const timelineRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(-1);
  const [hoverIndex, setHoverIndex] = useState(-1);

  useEffect(() => {
    const root = timelineRef.current;
    if (!root) return;

    const sections = Array.from(root.querySelectorAll('[data-role-index]'));
    if (!sections.length) return;

    // activate slightly earlier and smoother
    const observer = new IntersectionObserver((entries) => {
      let best = null;
      entries.forEach((e) => {
        if (e.isIntersecting) {
          if (!best || e.intersectionRatio > best.intersectionRatio) best = e;
        }
      });
      if (best) {
        const idx = parseInt(best.target.getAttribute('data-role-index'), 10);
        setActiveIndex(idx);
      }
    }, { root: null, threshold: [0.15, 0.4, 0.65], rootMargin: '-20% 0px -20% 0px' });

    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, [timelineRef, displayMembers]);

  return (
    <div>
      <Navbar />
      <Teamvh1 />
      <Teamvh2 onSelectDomain={setSelectedDomain} subDomains={subDomains} />

      <div className="pt-2 p-6 bg-gradient-to-b from-pink-200 via-yellow-100 to-cyan-200 min-h-screen">
        {loading ? (
          <div className="text-center mt-10">Loading team data...</div>
        ) : (
          <>
            <h2 className="text-center text-5xl font-bold mb-10">{selectedDomain}</h2>

            <div ref={timelineRef} className="relative max-w-6xl mx-auto px-4 py-6">
              {/* Vertical timeline spine (centered) */}
              <div className="absolute left-1/2 top-6 bottom-6 -translate-x-1/2 w-1 bg-gray-800/30 rounded-full" aria-hidden="true" />

              {boardMemberHierarchy.map((role, i) => {
                const members = displayMembers[role] || [];
                if (!members.length) return null;

                // descending sizes per hierarchy (use min-heights so content can grow)
                const sizeMap = ['lg', 'xl', 'md', 'sm', 'xs', 'xs'];
                const size = sizeMap[i] || 'sm';
                const sizeClasses = {
                  xl: 'w-[28rem] min-h-[14rem]',
                  lg: 'w-[24rem] min-h-[13rem]',
                  md: 'w-[20rem] min-h-[12rem]',
                  sm: 'w-[18rem] min-h-[11rem]',
                  xs: 'w-[16rem] min-h-[10rem]',
                };

                return (
                  <div
                    key={role}
                    data-role-index={i}
                    onMouseEnter={() => setHoverIndex(i)}
                    onMouseLeave={() => setHoverIndex(-1)}
                    className="relative mb-10 flex justify-center"
                  >
                    {/* branch connector from centered spine to cards */}
                    <div className="absolute" style={{ left: '50%', transform: 'translateX(20px)' }} aria-hidden="true">
                      <div className="relative w-28 h-1">
                        <div className={`absolute inset-0 rounded-full transition-opacity duration-500 ${activeIndex === i || hoverIndex === i ? 'opacity-0' : 'opacity-100 bg-gray-700/30'}`} />
                        <div className={`absolute left-0 top-0 h-1 rounded-full transition-all duration-500 ease-out`} style={{ width: activeIndex === i || hoverIndex === i ? '100%' : '0%', background: 'linear-gradient(90deg,#ff8c00,#f6a23e)' }} />
                      </div>
                      {/* bigger glow at spine intersection */}
                      <div className={`absolute -left-8 -top-2 rounded-full transition-all duration-500 ${activeIndex === i || hoverIndex === i ? 'w-8 h-8 bg-orange-400/80 shadow-[0_0_30px_rgba(255,140,0,0.85)] scale-125 ring-4 ring-orange-400/25' : 'w-5 h-5 bg-gray-600/40'}`} aria-hidden="true" />
                    </div>

                    <div className="flex-1 ml-8">
                      <div className="mb-4 flex items-center gap-3 justify-center">
                        <h3 className={`text-xl font-semibold ${activeIndex === i ? 'text-white' : 'text-gray-100'}`}>{role}</h3>
                      </div>

                      <div className="flex flex-wrap gap-6 justify-center">
                        {members.map((member, idx) => {
                          const rawImage = (member['Your Image For Website'] || member['Your Image For Website '] || '').toString().trim();
                          const imageUrl = rawImage && rawImage.startsWith('https://') ? rawImage : 'https://via.placeholder.com/150';

                          return (
                            <article
                              key={idx}
                              tabIndex={0}
                              className={`${sizeClasses[size]} group relative rounded-2xl bg-gradient-to-br from-[#041021]/40 to-[#062032]/25 backdrop-blur-md border border-orange-500/20 p-4 shadow-[0_10px_30px_rgba(2,6,23,0.35)] hover:scale-105 hover:border-orange-300 hover:ring-8 hover:ring-orange-400/45 hover:shadow-[0_0_60px_rgba(255,140,0,0.55)] transform-gpu transition-all duration-300 ease-out flex flex-col items-center text-center overflow-visible`} 
                              aria-label={`${member.Name} - ${member['Position in SQAC'] || ''}`}
                            >
                              {/* orange edge-glow overlay (visible on hover) */}
                              <span
                                aria-hidden="true"
                                className="absolute -inset-2 rounded-2xl pointer-events-none opacity-0 transition-all duration-300 group-hover:opacity-100 group-hover:animate-pulse"
                                style={{
                                  background: 'radial-gradient(ellipse at 10% 10%, rgba(255,140,0,0.36) 0%, rgba(255,140,0,0.12) 24%, transparent 46%), radial-gradient(ellipse at 90% 90%, rgba(246,162,62,0.22) 0%, rgba(246,162,62,0.08) 22%, transparent 48%)',
                                  mixBlendMode: 'screen',
                                  filter: 'blur(20px)'
                                }}
                              />
                                <div className="flex flex-col items-center text-center justify-start flex-1 w-full">
                                  <img src={imageUrl} alt={member.Name} loading="lazy" onError={(e) => { e.currentTarget.src = 'https://via.placeholder.com/150'; }} className="w-28 h-28 md:w-32 md:h-32 rounded-full aspect-square border-2 border-orange-400/20 object-cover shadow-md mb-3 transition-transform duration-300 group-hover:scale-105" />
                                  <h4 className="text-lg font-semibold text-white break-words max-w-full transition-colors duration-300 group-hover:text-orange-200 group-hover:drop-shadow-lg">{member.Name}</h4>
                                  <p className="text-sm text-orange-200/80 break-words max-w-full whitespace-normal">{member['Position in SQAC']}</p>
                                  {member['Sub Domain'] && (
                                    <p className="text-xs text-gray-300 mt-1 break-words max-w-full">{member['Sub Domain']}</p>
                                  )}
                                  <div className="mt-3 flex items-center gap-3 justify-center opacity-80 transform translate-y-1 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0">
                                  {member['LinkedIn Profile Link']?.trim() && (
                                    <a href={member['LinkedIn Profile Link'].trim()} target="_blank" rel="noopener noreferrer" className="text-orange-300 hover:scale-110 transition-transform" aria-label="LinkedIn">
                                      <FaLinkedin className="w-5 h-5" />
                                    </a>
                                  )}
                                  {member['GitHub Profile Link']?.trim() && (
                                    <a href={member['GitHub Profile Link'].trim()} target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:scale-110 transition-transform" aria-label="GitHub">
                                      <FaGithub className="w-5 h-5" />
                                    </a>
                                  )}
                                  {member['Instagram Profile Link']?.trim() && (
                                    <a href={member['Instagram Profile Link'].trim()} target="_blank" rel="noopener noreferrer" className="text-pink-400 hover:scale-110 transition-transform" aria-label="Instagram">
                                      <FaInstagram className="w-5 h-5" />
                                    </a>
                                  )}
                                </div>
                              </div>
                            </article>
                          );
                        })}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </>
        )}
      </div>

     
    </div>
  );
};

export default Team;