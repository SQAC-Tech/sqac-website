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

const Team = () => {
  const [teamData, setTeamData] = useState([]);
  const [subDomains, setSubDomains] = useState([]);
  const [selectedDomain, setSelectedDomain] = useState('Board Member');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get('https://sqac-website.onrender.com/api/data')
      .then((res) => {
        setTeamData(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.error('Error fetching team data:', err);
        setLoading(false);
      });
  }, []);

  useEffect(() => {
    axios.get('https://sqac-website.onrender.com/api/data/field/Sub Domain')
      .then((res) => {
        const cleaned = [...new Set(res.data.filter(Boolean).map(d => d.trim()))];
        setSubDomains(cleaned);
      })
      .catch((err) => {
        console.error('Error fetching subdomains:', err);
      });
  }, []);

  const filterMembersByDomain = () => {
    if (!selectedDomain) return [];

    return teamData.filter((member) => {
      const position = member['Position in SQAC']?.toLowerCase() || '';
      const domainField = member['Sub Domain'] || '';
      const subdomains = domainField.split(/and|,/).map((d) => d.trim().toLowerCase());

      if (selectedDomain.toLowerCase() === 'board member') {
        return position.includes('board member');
      }

      return subdomains.includes(selectedDomain.toLowerCase());
    });
  };

  const groupByHierarchy = (members) => {
    const groups = Object.fromEntries(hierarchyOrder.map(role => [role, []]));

    members.forEach((member) => {
      const position = member['Position in SQAC'] || '';
      const role = hierarchyOrder.find(h => position.toLowerCase().includes(h.toLowerCase()));
      if (role) {
        groups[role].push(member);
      } else {
        groups['Member'].push(member);
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

          {hierarchyOrder.map((role) => {
            const members = displayMembers[role];
            if (!members.length) return null;

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
                        className="bg-white rounded-xl border-2 border-gray-200 shadow-md p-4 w-64 text-center cursor-pointer transition-transform duration-300 hover:-translate-y-2 hover:scale-105"
                      >
                        <img
                          src={imageUrl || 'https://via.placeholder.com/150'}
                          alt={Name}
                          className="w-32 h-32 object-cover rounded-full mx-auto mb-4 border-4 border-white shadow"
                        />
                        <h3 className="text-lg font-semibold text-gray-800">{Name}</h3>
                        <p className="text-sm text-gray-600">{Position}</p>
                        <div className="flex justify-center gap-4 mt-3">
                          {LinkedIn && (
                            <a href={LinkedIn} target="_blank" rel="noopener noreferrer">
                              <img src={linkedinIcon} alt="LinkedIn" className="w-6 h-6 hover:scale-110 transition" />
                            </a>
                          )}
                          {Instagram && (
                            <a href={Instagram} target="_blank" rel="noopener noreferrer">
                              <img src={instagramIcon} alt="Instagram" className="w-6 h-6 hover:scale-110 transition" />
                            </a>
                          )}
                          {GitHub && (
                            <a href={GitHub} target="_blank" rel="noopener noreferrer">
                              <img src={githubIcon} alt="GitHub" className="w-6 h-6 hover:scale-110 transition" />
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
