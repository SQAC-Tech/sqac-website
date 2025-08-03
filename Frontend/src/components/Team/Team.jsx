import React, { useEffect, useState } from 'react';
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
    'Position in SQAC': 'Secretary & Board Member',
    'Sub Domain': 'Board Member',
    'LinkedIn Profile Link': 'https://www.linkedin.com/in/yash-gupta-052a32142/',
    'Instagram Profile Link': 'https://www.instagram.com/guptayash_16/',
    'GitHub Profile Link': 'https://github.com/Yash9837',
    'Your Image For Website': '',
  },
  {
    Name: 'Tanmay Bansal',
    'Position in SQAC': 'Joint Secretary & Board Member',
    'Sub Domain': 'Board Member',
    'LinkedIn Profile Link': 'https://www.linkedin.com/in/tanmay-bansal-3b17a8247/',
    'Instagram Profile Link': 'https://www.instagram.com/tanmay__170/?igsh=MTZ5NG1pbDcweDg4bg%3D%3D',
    'GitHub Profile Link': 'https://github.com/Tanmay170',
    'Your Image For Website': '',
  },
  {
    Name: 'Nityam Sharma',
    'Position in SQAC': 'Joint Secretary & Board Member',
    'Sub Domain': 'Board Member',
    'LinkedIn Profile Link': 'https://www.linkedin.com/in/nityamsharma-cse?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app',
    'Instagram Profile Link': 'https://www.instagram.com/_nityamsharma_/?igsh=MXhkM3AzZ203YzZ1Zw%3D%3D',
    'GitHub Profile Link': 'https://github.com/SharmaNityam',
    'Your Image For Website': '',
  },
  {
    Name: 'Priyanshu Vasudev',
    'Position in SQAC': 'Technical Lead & Board Member',
    'Sub Domain': 'Board Member',
    'LinkedIn Profile Link': 'https://www.linkedin.com/in/priyanshu-vasudev-off/',
    'Instagram Profile Link': 'https://www.instagram.com/priyanshu.vasudev/',
    'GitHub Profile Link': 'https://github.com/Priyanshu2608',
    'Your Image For Website': '',
  },
  {
    Name: 'Vedant Modi',
    'Position in SQAC': 'Corporate Lead & Board Member',
    'Sub Domain': 'Board Member',
    'LinkedIn Profile Link': 'https://www.linkedin.com/in/vedant-modi-b99b0628a/',
    'Instagram Profile Link': 'https://www.instagram.com/vedantmodi21/?igsh=MTdoMGE0MDYxODMxaA%3D%3D',
    'GitHub Profile Link': 'https://github.com/VEDANTMODI21',
    'Your Image For Website': '',
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

  const displayMembers = groupByHierarchy(filterMembersByDomain());

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

            {boardMemberHierarchy.map((role) => {
              const members = displayMembers[role];
              if (!members.length) return null;

              return (
                <div key={role} className="mb-16">
                  <h3 className="text-xl font-semibold text-center mb-6">{role}</h3>
                  <div className="flex flex-wrap justify-center gap-8">
                    {members.map((member, index) => {
                      const rawImage =
                        member['Your Image For Website']?.trim() ||
                        member['Your Image For Website ']?.trim() ||
                        '';
                      const imageUrl = rawImage.startsWith('https://res.cloudinary.com')
                        ? rawImage
                        : 'https://via.placeholder.com/150';

                      return (
                        <div
                          key={index}
                          className="bg-white rounded-xl border-2 border-gray-200 shadow-md p-4 w-64 text-center cursor-pointer transition-transform duration-300 hover:-translate-y-2 hover:scale-105"
                        >
                          <img
                            src={imageUrl}
                            alt={member.Name}
                            className="w-32 h-32 object-cover rounded-full mx-auto mb-4 border-4 border-white shadow"
                          />
                          <h3 className="text-lg font-semibold text-gray-800">{member.Name}</h3>
                          <p className="text-sm text-gray-600">{member['Position in SQAC']}</p>
                          <div className="flex justify-center gap-4 mt-3">
                            {member['LinkedIn Profile Link']?.trim() && (
                              <a 
                                href={member['LinkedIn Profile Link'].trim()} 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="hover:scale-110 transition-transform"
                              >
                                <FaLinkedin className="w-5 h-5 text-blue-600" />
                              </a>
                            )}
                            {member['Instagram Profile Link']?.trim() && (
                              <a 
                                href={member['Instagram Profile Link'].trim()} 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="hover:scale-110 transition-transform"
                              >
                                <FaInstagram className="w-5 h-5 text-pink-500" />
                              </a>
                            )}
                            {member['GitHub Profile Link']?.trim() && (
                              <a 
                                href={member['GitHub Profile Link'].trim()} 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="hover:scale-110 transition-transform"
                              >
                                <FaGithub className="w-5 h-5 text-gray-800" />
                              </a>
                            )}
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              );
            })}
          </>
        )}
      </div>

     
    </div>
  );
};

export default Team;