import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Navbar from '../HomePage/Navbar';
import linkedinIcon from '../../assets/linkedin.png';
import instagramIcon from '../../assets/instagram.png';
import githubIcon from '../../assets/github.png';
import Teamvh1 from './Teamvh1';
import Teamvh2 from './Teamvh2';

// Strict hierarchy order for Board Members
const boardMemberHierarchy = [
  'Secretary',
  'Joint Secretary',
  'Leads', // Combined Technical and Corporate Leads
  'Domain Lead',
  'Associate',
  'Member',
];

// Hardcoded board members data in strict order
const hardcodedBoardMembers = [
  // Secretary - Only Yash Gupta
  {
    'Name': 'Yash Gupta',
    'Position in SQAC': 'Secretary & Board Member',
    'Sub Domain': 'Board Member',
    'LinkedIn Profile Link': '',
    'Instagram Profile Link': '',
    'GitHub Profile Link': '',
    'Your Image For Website': ''
  },
  // Joint Secretaries - Tanmay and Nityam
  {
    'Name': 'Tanmay Bansal',
    'Position in SQAC': 'Joint Secretary & Board Member',
    'Sub Domain': 'Board Member',
    'LinkedIn Profile Link': '',
    'Instagram Profile Link': '',
    'GitHub Profile Link': '',
    'Your Image For Website': ''
  },
  {
    'Name': 'Nityam Jain',
    'Position in SQAC': 'Joint Secretary & Board Member',
    'Sub Domain': 'Board Member',
    'LinkedIn Profile Link': '',
    'Instagram Profile Link': '',
    'GitHub Profile Link': '',
    'Your Image For Website': ''
  },
  // Technical Lead
  {
    'Name': 'Priyanshu Vasudev',
    'Position in SQAC': 'Technical Lead & Board Member',
    'Sub Domain': 'Board Member',
    'LinkedIn Profile Link': '',
    'Instagram Profile Link': '',
    'GitHub Profile Link': '',
    'Your Image For Website': ''
  },
  // Corporate Lead
  {
    'Name': 'Vedant Modi',
    'Position in SQAC': 'Corporate Lead & Board Member',
    'Sub Domain': 'Board Member',
    'LinkedIn Profile Link': '',
    'Instagram Profile Link': '',
    'GitHub Profile Link': '',
    'Your Image For Website': ''
  }
];

const Team = () => {
  const [teamData, setTeamData] = useState([]);
  const [subDomains, setSubDomains] = useState([]);
  const [selectedDomain, setSelectedDomain] = useState('Board Member');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get('https://sheetdb.io/api/v1/jymm1gsk9tq9n')
      .then((res) => {
        setTeamData(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.error('Error fetching team data:', err);
        setLoading(false);
      });
  }, []);

  const filterMembersByDomain = () => {
    if (!selectedDomain) return [];

    // Return hardcoded data for Board Member in strict order
    if (selectedDomain.toLowerCase() === 'board member') {
      return hardcodedBoardMembers;
    }

    // For other domains, use the original filtering logic
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
      
      // Special handling for hardcoded board members to maintain strict order
      if (selectedDomain.toLowerCase() === 'board member') {
        if (position.includes('Secretary') && member.Name === 'Yash Gupta') {
          groups['Secretary'].push(member);
        } else if (position.includes('Joint Secretary')) {
          groups['Joint Secretary'].push(member);
        } else if (position.includes('Lead')) { // Combine both leads under 'Leads'
          groups['Leads'].push(member);
        } else {
          groups['Member'].push(member);
        }
      } else {
        // Original logic for other domains
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
          <h2 className="text-center text-5xl font-bold mb-10">
            {selectedDomain}
          </h2>

          {boardMemberHierarchy.map((role) => {
            const members = displayMembers[role];
            if (!members.length) return null;

            // Special styling for Leads section
            if (role === 'Leads') {
              return (
                <div key={role} className="mb-16">
                  <h3 className="text-xl font-semibold text-center mb-6">Leads</h3>
                  <div className="flex flex-wrap justify-center gap-8">
                    {members.map((member, index) => (
                      <div
                        key={index}
                        className="bg-white rounded-xl border-2 border-gray-200 shadow-md p-4 w-64 text-center cursor-pointer transition-transform duration-300 hover:-translate-y-2 hover:scale-105"
                      >
                        <img
                          src={member['Your Image For Website'] || 'https://via.placeholder.com/150'}
                          alt={member.Name}
                          className="w-32 h-32 object-cover rounded-full mx-auto mb-4 border-4 border-white shadow"
                        />
                        <h3 className="text-lg font-semibold text-gray-800">{member.Name}</h3>
                        <p className="text-sm text-gray-600">{member['Position in SQAC']}</p>
                        <div className="flex justify-center gap-4 mt-3">
                          {member['LinkedIn Profile Link'] && (
                            <a href={member['LinkedIn Profile Link']} target="_blank" rel="noopener noreferrer">
                              <img src={linkedinIcon} alt="LinkedIn" className="w-6 h-6 hover:scale-110 transition" />
                            </a>
                          )}
                          {member['Instagram Profile Link'] && (
                            <a href={member['Instagram Profile Link']} target="_blank" rel="noopener noreferrer">
                              <img src={instagramIcon} alt="Instagram" className="w-6 h-6 hover:scale-110 transition" />
                            </a>
                          )}
                          {member['GitHub Profile Link'] && (
                            <a href={member['GitHub Profile Link']} target="_blank" rel="noopener noreferrer">
                              <img src={githubIcon} alt="GitHub" className="w-6 h-6 hover:scale-110 transition" />
                            </a>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              );
            }

            // Default styling for other roles
            return (
              <div key={role} className="mb-16">
                <h3 className="text-xl font-semibold text-center mb-6">{role}</h3>
                <div className="flex flex-wrap justify-center gap-8">
                  {members.map((member, index) => (
                    <div
                      key={index}
                      className="bg-white rounded-xl border-2 border-gray-200 shadow-md p-4 w-64 text-center cursor-pointer transition-transform duration-300 hover:-translate-y-2 hover:scale-105"
                    >
                      <img
                        src={member['Your Image For Website'] || 'https://via.placeholder.com/150'}
                        alt={member.Name}
                        className="w-32 h-32 object-cover rounded-full mx-auto mb-4 border-4 border-white shadow"
                      />
                      <h3 className="text-lg font-semibold text-gray-800">{member.Name}</h3>
                      <p className="text-sm text-gray-600">{member['Position in SQAC']}</p>
                      <div className="flex justify-center gap-4 mt-3">
                        {member['LinkedIn Profile Link'] && (
                          <a href={member['LinkedIn Profile Link']} target="_blank" rel="noopener noreferrer">
                            <img src={linkedinIcon} alt="LinkedIn" className="w-6 h-6 hover:scale-110 transition" />
                          </a>
                        )}
                        {member['Instagram Profile Link'] && (
                          <a href={member['Instagram Profile Link']} target="_blank" rel="noopener noreferrer">
                            <img src={instagramIcon} alt="Instagram" className="w-6 h-6 hover:scale-110 transition" />
                          </a>
                        )}
                        {member['GitHub Profile Link'] && (
                          <a href={member['GitHub Profile Link']} target="_blank" rel="noopener noreferrer">
                            <img src={githubIcon} alt="GitHub" className="w-6 h-6 hover:scale-110 transition" />
                          </a>
                        )}
                      </div>
                    </div>
                  ))}
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