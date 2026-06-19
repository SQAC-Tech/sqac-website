import React from 'react';
import { FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa';

const ProfileCard = ({ member }) => {
  // Handle missing member prop
  if (!member) {
    return (
      <div className="bg-white rounded-2xl shadow p-4 text-center">
        <div className="w-28 h-28 mx-auto rounded-full bg-gray-200 mb-2" />
        <h3 className="text-lg font-semibold text-gray-400">No Data</h3>
      </div>
    );
  }

  const {
    Name,
    "Position in SQAC": Position,
    "Your Core Domain": CoreDomain,
    "Your Image For Website ": PhotoURL,
    GitHub,
    LinkedIn,
    Instagram,
  } = member;

  const extractDriveImage = (url) => {
    if (!url) return "";
    const match = url.match(/id=([a-zA-Z0-9_-]+)/) || url.match(/[-\w]{25,}/);
    return match ? `https://drive.google.com/uc?export=view&id=${match[1] || match[0]}` : "";
  };

  return (
    <div className="bg-white rounded-2xl shadow p-4 text-center">
      <img
        src={extractDriveImage(PhotoURL)}
        alt={Name || 'Team Member'}
        className="w-28 h-28 mx-auto rounded-full object-cover mb-2"
        onError={(e) => {
          e.target.src = `https://via.placeholder.com/112?text=${encodeURIComponent(Name || 'Member')}`;
        }}
      />
      <h3 className="text-lg font-semibold">{Name || 'N/A'}</h3>
      <p className="text-sm text-gray-600 mb-2">{Position || 'N/A'}</p>
      {CoreDomain && <p className="text-xs text-gray-500 mb-2">{CoreDomain}</p>}
      <div className="flex justify-center gap-3 mt-2 text-blue-600">
        {GitHub && (
          <a href={GitHub} target="_blank" rel="noopener noreferrer" title="GitHub">
            <FaGithub />
          </a>
        )}
        {LinkedIn && (
          <a href={LinkedIn} target="_blank" rel="noopener noreferrer" title="LinkedIn">
            <FaLinkedin />
          </a>
        )}
        {Instagram && (
          <a href={Instagram} target="_blank" rel="noopener noreferrer" title="Instagram">
            <FaInstagram />
          </a>
        )}
      </div>
    </div>
  );
};

const TeamMembers2 = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-orange-300 via-pink-80 to-purple-200 flex flex-col items-center justify-center gap-12 px-4 py-10">
      {/* Center Card */}
      <div className="flex justify-center">
        <ProfileCard />
      </div>

      {/* Bottom Cards */}
      <div className="flex flex-col md:flex-row gap-20">
        <ProfileCard />
        <ProfileCard />
      </div>
    </div>
  );
};

export default TeamMembers2;
