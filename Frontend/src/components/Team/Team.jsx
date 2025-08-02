import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Navbar from '../HomePage/Navbar';
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
    'LinkedIn Profile Link': '',
    'Instagram Profile Link': '',
    'GitHub Profile Link': '',
    'Your Image For Website': '',
    icon: <FaLinkedin className="w-6 h-6 text-blue-600 hover:scale-110 transition" />,
  },
  {
    Name: 'Tanmay Bansal',
    'Position in SQAC': 'Joint Secretary & Board Member',
    'Sub Domain': 'Board Member',
    'LinkedIn Profile Link': '',
    'Instagram Profile Link': '',
    'GitHub Profile Link': '',
    'Your Image For Website': '',
    icon: <FaLinkedin className="w-6 h-6 text-blue-600 hover:scale-110 transition" />,
  },
  {
    Name: 'Nityam Sharma',
    'Position in SQAC': 'Joint Secretary & Board Member',
    'Sub Domain': 'Board Member',
    'LinkedIn Profile Link': '',
    'Instagram Profile Link': '',
    'GitHub Profile Link': '',
    'Your Image For Website': '',
    icon: <FaLinkedin className="w-6 h-6 text-blue-600 hover:scale-110 transition" />,
  },
  {
    Name: 'Priyanshu Vasudev',
    'Position in SQAC': 'Technical Lead & Board Member',
    'Sub Domain': 'Board Member',
    'LinkedIn Profile Link': '',
    'Instagram Profile Link': '',
    'GitHub Profile Link': '',
    'Your Image For Website': '',
    icon: <FaLinkedin className="w-6 h-6 text-blue-600 hover:scale-110 transition" />,
  },
  {
    Name: 'Vedant Modi',
    'Position in SQAC': 'Corporate Lead & Board Member',
    'Sub Domain': 'Board Member',
    'LinkedIn Profile Link': '',
    'Instagram Profile Link': '',
    'GitHub Profile Link': '',
    'Your Image For Website': '',
    icon: <FaLinkedin className="w-6 h-6 text-blue-600 hover:scale-110 transition" />,
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
      .then(response => {
        const data = response.data;
        const uniqueDomains = [...new Set(data.map(row => row["Sub Domain"]).filter(Boolean))];
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

  if (loading) {
    return (
      <div>
        <Navbar />
        <div className="text-center mt-10">Loading team data...</div>
      </div>
    );
  }

  return (
    <div>
      <Navbar />
      <Teamvh1 />
      <Teamvh2 onSelectDomain={setSelectedDomain} subDomains={subDomains} />

      {selectedDomain && (
        <div className="pt-2 p-6 bg-gradient-to-b from-pink-200 via-yellow-100 to-cyan-200 min-h-screen">
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
                          {member['LinkedIn Profile Link'] && (
                            <a href={member['LinkedIn Profile Link']} target="_blank" rel="noopener noreferrer">
                              <FaLinkedin className="w-6 h-6 text-blue-600 hover:scale-110 transition" />
                            </a>
                          )}
                          {member['Instagram Profile Link'] && (
                            <a href={member['Instagram Profile Link']} target="_blank" rel="noopener noreferrer">
                              <FaInstagram className="w-6 h-6 text-pink-500 hover:scale-110 transition" />
                            </a>
                          )}
                          {member['GitHub Profile Link'] && (
                            <a href={member['GitHub Profile Link']} target="_blank" rel="noopener noreferrer">
                              <FaGithub className="w-6 h-6 text-gray-800 hover:scale-110 transition" />
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
        </div>
      )}
    </div>
  );
};

export default Team;
