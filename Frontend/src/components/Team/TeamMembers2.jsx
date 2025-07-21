import React from 'react';
import { FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa';

import React from "react";
import { FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";

const ProfileCard = ({ member }) => {
  const {
    Name,
    "Position in SQAC": Position,
    "Profile Photo": PhotoURL,
    GitHub,
    LinkedIn,
    Instagram,
  } = member;

  const extractDriveImage = (url) => {
    const match = url?.match(/[-\w]{25,}/);
    return match ? `https://drive.google.com/uc?export=view&id=${match[0]}` : "";
  };

  return (
    <div className="bg-white rounded-2xl shadow p-4 text-center">
      <img
        src={extractDriveImage(PhotoURL)}
        alt={Name}
        className="w-28 h-28 mx-auto rounded-full object-cover mb-2"
      />
      <h3 className="text-lg font-semibold">{Name}</h3>
      <p className="text-sm text-gray-600 mb-2">{Position}</p>
      <div className="flex justify-center gap-3 mt-2 text-blue-600">
        {GitHub && (
          <a href={GitHub} target="_blank" rel="noopener noreferrer">
            <FaGithub />
          </a>
        )}
        {LinkedIn && (
          <a href={LinkedIn} target="_blank" rel="noopener noreferrer">
            <FaLinkedin />
          </a>
        )}
        {Instagram && (
          <a href={Instagram} target="_blank" rel="noopener noreferrer">
            <FaInstagram />
          </a>
        )}
      </div>
    </div>
  );
};



const TeamMembers2 = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-orange-200 via-pink-80 to-purple-200 flex flex-col items-center justify-center gap-12 px-4 py-10">
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
