import React from 'react';
import { FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa';

const ProfileCard = () => (
  <div className="relative bg-white rounded-[30px] w-64 h-80 shadow-lg flex flex-col items-center justify-end pb-6">
    <div className=" absolute top-[28px] w-34 h-34 bg-black rounded-full shadow-md" />
    <div className="flex gap-7 text-2xl text-gray-700">
      <a href="#" aria-label="GitHub"><FaGithub /></a>
      <a href="#" aria-label="LinkedIn"><FaLinkedin className="text-[#0077B5]" /></a>
      <a href="#" aria-label="Instagram"><FaInstagram className="text-[#E1306C]" /></a>
    </div>
  </div>
);

const TeamMembers = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-pink-100 via-pink-100 to-orange-200 flex flex-col items-center justify-center gap-12 px-4 py-10">
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
