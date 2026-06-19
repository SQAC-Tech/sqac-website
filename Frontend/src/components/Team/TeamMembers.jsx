import React from 'react';
import { FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa';

const ProfileCard = ({ member }) => {
  // Handle missing member prop
  if (!member) {
    return (
      <div className="relative bg-white dark:bg-zinc-900 rounded-[30px] w-64 h-80 shadow-lg dark:shadow-black/50 flex flex-col items-center justify-end pb-6">
        <div className="absolute top-[28px] w-34 h-34 bg-gray-300 dark:bg-zinc-700 rounded-full shadow-md" />
        <div className="flex gap-7 text-2xl text-gray-400">
          <span aria-label="GitHub"><FaGithub /></span>
        </div>
      </div>
    );
  }

  const {
    Name,
    "Position in SQAC": Position,
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
    <div className="relative bg-white dark:bg-zinc-900 rounded-[30px] w-64 h-80 shadow-lg dark:shadow-black/50 flex flex-col items-center justify-end pb-6">
      <img
        src={extractDriveImage(PhotoURL)}
        alt={Name || 'Team Member'}
        className="absolute top-[28px] w-34 h-34 rounded-full object-cover shadow-md"
        onError={(e) => {
          e.target.src = `https://via.placeholder.com/136?text=${encodeURIComponent(Name || 'Member')}`;
        }}
      />
      <div className="mt-20">
        <h3 className="text-lg font-semibold text-center mb-1">{Name || 'N/A'}</h3>
        <p className="text-sm text-gray-600 dark:text-gray-400 text-center mb-3">{Position || 'N/A'}</p>
        <div className="flex gap-7 text-2xl text-gray-700 dark:text-zinc-300 justify-center">
          {GitHub && (
            <a href={GitHub} target="_blank" rel="noopener noreferrer" aria-label="GitHub">
              <FaGithub />
            </a>
          )}
          {LinkedIn && (
            <a href={LinkedIn} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <FaLinkedin className="text-[#0077B5]" />
            </a>
          )}
          {Instagram && (
            <a href={Instagram} target="_blank" rel="noopener noreferrer" aria-label="Instagram">
              <FaInstagram className="text-[#E1306C]" />
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

const TeamMembers = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-pink-200 via-pink-200 to-orange-200
      dark:from-zinc-950 dark:via-zinc-900 dark:to-[#0f0a1a]
      flex flex-col items-center justify-center gap-12 px-4 py-10">

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

export default TeamMembers;
