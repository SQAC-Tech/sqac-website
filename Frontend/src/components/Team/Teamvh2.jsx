
import React, { useState } from 'react';
import {
  Users, Code2, Building2, Palette, Globe, Brain,
  Smartphone, Megaphone, HandCoins, Calendar
} from 'lucide-react';

const Teamvh2 = ({ onSelectDomain }) => {
  const [openDropdown, setOpenDropdown] = useState(null);

  const handleCardClick = (domain) => {
    if (domain === 'Technical' || domain === 'Corporate') {
      setOpenDropdown(openDropdown === domain ? null : domain);
    } else {
      onSelectDomain(domain);
    }
  };

  const handleSubdomainClick = (subdomain) => {
    onSelectDomain(subdomain);
    setOpenDropdown(null);
  };

  const cardStyle = 'cursor-pointer flex flex-col items-center text-center hover:scale-105 transition-transform duration-300';
  const iconStyle = 'w-16 h-16 sm:w-20 sm:h-20 mb-4 text-indigo-700';
  const dropdownStyle = 'mt-2 bg-white shadow-md rounded-xl px-4 py-3 text-sm font-medium text-gray-800 space-y-2';

  return (
    <div className="min-h-screen bg-gradient-to-b from-orange-200 via-white to-pink-200 flex flex-col items-center justify-center px-4 py-1 font-['Poppins']">
      <h1 className="text-4xl md:text-5xl font-extrabold mb-12 text-gray-900 text-center">Choose Your Domain</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 md:gap-20">
        <div className={cardStyle} onClick={() => handleCardClick('Board Member')}>
          <Users className={iconStyle} />
          <p className="text-xl sm:text-2xl font-semibold text-gray-800">Board Members</p>
        </div>

        <div className="flex flex-col items-center">
          <div className={cardStyle} onClick={() => handleCardClick('Technical')}>
            <Code2 className={iconStyle} />
            <p className="text-xl sm:text-2xl font-semibold text-gray-800">Technical</p>
          </div>
          {openDropdown === 'Technical' && (
            <div className={dropdownStyle}>
              <div className="flex items-center gap-2 hover:text-purple-600 cursor-pointer" onClick={() => handleSubdomainClick('Web Dev')}>
                <Globe className="w-4 h-4" /> Web Dev
              </div>
              <div className="flex items-center gap-2 hover:text-purple-600 cursor-pointer" onClick={() => handleSubdomainClick('App Dev')}>
                <Smartphone className="w-4 h-4" /> App Dev
              </div>
              <div className="flex items-center gap-2 hover:text-purple-600 cursor-pointer" onClick={() => handleSubdomainClick('AI/ML')}>
                <Brain className="w-4 h-4" /> AI / ML
              </div>
            </div>
          )}
        </div>

        <div className="flex flex-col items-center">
          <div className={cardStyle} onClick={() => handleCardClick('Corporate')}>
            <Building2 className={iconStyle} />
            <p className="text-xl sm:text-2xl font-semibold text-gray-800">Corporate</p>
          </div>
          {openDropdown === 'Corporate' && (
            <div className={dropdownStyle}>
              <div className="flex items-center gap-2 hover:text-purple-600 cursor-pointer" onClick={() => handleSubdomainClick('PR')}>
                <Megaphone className="w-4 h-4" /> PR
              </div>
              <div className="flex items-center gap-2 hover:text-purple-600 cursor-pointer" onClick={() => handleSubdomainClick('Sponsorship')}>
                <HandCoins className="w-4 h-4" /> Sponsorship
              </div>
              <div className="flex items-center gap-2 hover:text-purple-600 cursor-pointer" onClick={() => handleSubdomainClick('Events')}>
                <Calendar className="w-4 h-4" /> Events
              </div>
            </div>
          )}
        </div>

        <div className={cardStyle} onClick={() => handleCardClick('Creatives')}>
          <Palette className={iconStyle} />
          <p className="text-xl sm:text-2xl font-semibold text-gray-800">Creatives</p>
        </div>
      </div>
    </div>
  );
};

export default Teamvh2;
