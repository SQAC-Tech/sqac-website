import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Navbar from '../HomePage/Navbar';
import linkedinIcon from '../../assets/linkedin.png';
import instagramIcon from '../../assets/instagram.png';
import githubIcon from '../../assets/github.png';
import Teamvh1 from './Teamvh1';
import Teamvh2 from './Teamvh2';

const hierarchyOrder = [
  'Secretary',
  'Joint Secretary',
  'Corporate Lead',
  'Technical Lead',
  'Domain Lead',
  'Associate',
  'Member',
];

const getHierarchyIndex = (position) => {
  for (let i = 0; i < hierarchyOrder.length; i++) {
    if (position?.toLowerCase().includes(hierarchyOrder[i].toLowerCase())) {
      return i;
    }
  }
  return hierarchyOrder.length;
};

const Team = () => {
  const [teamData, setTeamData] = useState([]);
  const [subDomains, setSubDomains] = useState([]);
  const [selectedDomain, setSelectedDomain] = useState(null);
  const [loading, setLoading] = useState(true);

  // Fetch team data
  useEffect(() => {
    const fetchTeamData = async () => {
      try {
        const response = await axios.get('https://sqac-website.onrender.com/api/data');
        setTeamData(response.data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching team data:', error);
        setLoading(false);
      }
    };
    fetchTeamData();
  }, []);

  // Fetch Sub Domains
  useEffect(() => {
    const fetchSubDomains = async () => {
      try {
        const response = await axios.get('https://sqac-website.onrender.com/api/data/field/Sub Domain');
        const cleaned = [...new Set(response.data.filter(Boolean).map((d) => d.trim()))];
        setSubDomains(cleaned);
      } catch (error) {
        console.error('Error fetching subdomains:', error);
      }
    };
    fetchSubDomains();
  }, []);

  const filterMembersByDomain = () => {
    if (!selectedDomain || !teamData.length) return [];

    return teamData.filter((member) => {
      const domainField = member['Sub Domain'] || '';
      const subdomains = domainField
        .toLowerCase()
        .split(/,|and|&|\/|;/)
        .map((d) => d.trim());

      return subdomains.includes(selectedDomain.toLowerCase());
    });
  };

  const groupMembersByHierarchy = (members) => {
    const groups = {
      'Secretary': [],
      'Joint Secretary': [],
      'Corporate Lead': [],
      'Technical Lead': [],
      'Domain Lead': [],
      'Associate': [],
      'Member': [],
    };

    members.forEach((member) => {
      const position = member['Position in SQAC'] || '';
      const matchedKey = hierarchyOrder.find((role) =>
        position.toLowerCase().includes(role.toLowerCase())
      );
      if (matchedKey) {
        groups[matchedKey].push(member);
      } else {
        groups['Member'].push(member); // fallback
      }
    });

    return groups;
  };

  const displayMembers = groupMembersByHierarchy(filterMembersByDomain());

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
        <div className="pt-20 p-6 bg-gradient-to-b from-yellow-100 to-pink-100 min-h-screen">
          <h2 className="text-center text-2xl font-bold mb-10">
            Showing results for: {selectedDomain}
          </h2>

          {hierarchyOrder.map((role) => {
            const members = displayMembers[role];
            if (!members || members.length === 0) return null;

            return (
              <div key={role} className="mb-16">
                <h3 className="text-xl font-semibold text-center mb-6">{role}</h3>
                <div className="flex flex-wrap justify-center gap-8">
                  {members.map((member, index) => {
                    const {
                      Name,
                      ['Position in SQAC']: Position,
                      ['LinkedIn Profile Link']: LinkedIn,
                      ['Instagram Profile Link']: Instagram,
                      ['GitHub Profile Link']: GitHub,
                      ['Your Image For Website']: Image,
                    } = member;

                    let imageUrl = Image;
                    if (imageUrl?.includes('drive.google.com/open?id=')) {
                      const fileId = imageUrl.split('id=')[1];
                      imageUrl = `https://drive.google.com/uc?export=view&id=${fileId}`;
                    }

                    return (
                      <div
                        key={index}
                        className="bg-white rounded-xl shadow-lg p-4 w-64 text-center border-2 border-gray-200 cursor-pointer"
                      >
                        <img
                          src={imageUrl || 'https://via.placeholder.com/150'}
                          alt={Name}
                          className="w-32 h-32 object-cover rounded-full mx-auto mb-4"
                        />
                        <h3 className="text-lg font-semibold">{Name}</h3>
                        <p className="text-sm text-gray-600">{Position}</p>
                        <div className="flex justify-center gap-4 mt-3">
                          {LinkedIn && (
                            <a href={LinkedIn} target="_blank" rel="noopener noreferrer">
                              <img src={linkedinIcon} alt="LinkedIn" className="w-6 h-6" />
                            </a>
                          )}
                          {Instagram && (
                            <a href={Instagram} target="_blank" rel="noopener noreferrer">
                              <img src={instagramIcon} alt="Instagram" className="w-6 h-6" />
                            </a>
                          )}
                          {GitHub && (
                            <a href={GitHub} target="_blank" rel="noopener noreferrer">
                              <img src={githubIcon} alt="GitHub" className="w-6 h-6" />
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
