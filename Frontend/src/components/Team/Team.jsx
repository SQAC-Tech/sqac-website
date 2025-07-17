import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Navbar from '../HomePage/Navbar';
import linkedinIcon from '../../assets/linkedin.png';
import instagramIcon from '../../assets/instagram.png';

const Team = () => {
  const [teamData, setTeamData] = useState([]);
  const [loading, setLoading] = useState(true);

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
      <div className="flex flex-wrap justify-center gap-8 p-6 bg-gradient-to-b from-yellow-100 to-pink-100">
        {teamData.map((member, index) => {
          const {
            Name,
            ['Position in SQAC']: Position,
            ['LinkedIn Profile Link']: LinkedIn,
            ['Instagram Profile Link']: Instagram,
            ['Your Image For Website']: Image,
            ['Your Core Domain']: Domain,
          } = member;

          let hierarchyClass = '';

          if (Position.includes('President')) {
            hierarchyClass = 'border-4 border-yellow-500';
          } else if (Position.includes('Domain Lead') || Position.includes('Lead')) {
            hierarchyClass = 'border-4 border-purple-500';
          } else if (Position.includes('Board Member')) {
            hierarchyClass = 'border-4 border-green-500';
          } else if (Position.includes('Associate')) {
            hierarchyClass = 'border-4 border-blue-500';
          } else if (Position.includes('Member')) {
            hierarchyClass = 'border-2 border-gray-300';
          } else {
            hierarchyClass = 'border-2 border-gray-200';
          }


          return (
            <div
              key={index}
              className={`bg-white rounded-xl shadow-lg p-4 w-64 text-center ${hierarchyClass}`}
            >
              <img
                src={Image || 'https://via.placeholder.com/150'}
                alt={Name}
                className="w-32 h-32 object-cover rounded-full mx-auto mb-4"
              />
              <h3 className="text-lg font-semibold">{Name}</h3>
              <p className="text-sm text-gray-600">{Position}</p>
              <p className="text-sm text-gray-500">{Domain}</p>
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
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Team;