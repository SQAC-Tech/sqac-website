import React, { useState } from 'react';
import {
  Users, Code2, Building2, Camera, Palette, Globe, Brain,
  Smartphone, Megaphone, HandCoins, Calendar, Image as MediaIcon, ChevronDown
} from 'lucide-react';

const Teamvh2 = ({ onSelectDomain }) => {
  const [openDropdown, setOpenDropdown] = useState(null);

  const handleCardClick = (domain) => {
    if (domain === 'Technical' || domain === 'Corporate' || domain === 'Media') {
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
  const dropdownBase = 'mt-3 bg-white/70 dark:bg-gray-900/60 backdrop-blur-md border border-gray-200 dark:border-gray-700 rounded-xl px-3 py-3 text-sm font-medium text-gray-800 dark:text-gray-100 space-y-2 shadow-lg origin-top transform transition-all duration-200 ease-out';
  const dropdownHidden = 'scale-y-0 opacity-0 pointer-events-none';
  const dropdownVisible = 'scale-y-100 opacity-100';

  return (
    <div className="min-h-screen bg-gradient-to-b from-orange-200 to-pink-200 flex flex-col items-center justify-center px-4 py-1 font-['Poppins']">
      <h1 className="text-4xl md:text-5xl font-extrabold mb-12 text-transparent bg-clip-text bg-gradient-to-r from-[#951D13] via-[#f34a82] to-[#F0A01F] text-center">Choose Your Domain</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 md:gap-20">
        <div
          className={cardStyle}
          onClick={() => handleCardClick('Board Member')}
          role="button"
          tabIndex={0}
          onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') handleCardClick('Board Member'); }}
          aria-pressed={openDropdown === 'Board Member'}
        >
          <Users className={iconStyle} />
          <p className="text-xl sm:text-2xl font-semibold text-gray-800 dark:text-white">Board Members</p>
        </div>

        <div className="flex flex-col items-center">
          <div
            className={cardStyle}
            onClick={() => handleCardClick('Technical')}
            role="button"
            tabIndex={0}
            onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') handleCardClick('Technical'); }}
            aria-expanded={openDropdown === 'Technical'}
          >
            <Code2 className={iconStyle} />
            <div className="flex items-center gap-2">
              <p className="text-xl sm:text-2xl font-semibold text-gray-800 dark:text-white">Technical</p>
              <ChevronDown className={`w-5 h-5 text-gray-600 transition-transform ${openDropdown === 'Technical' ? 'rotate-180' : 'rotate-0'}`} />
            </div>
          </div>
          <div className={`${dropdownBase} ${openDropdown === 'Technical' ? dropdownVisible : dropdownHidden}`} style={{ transformOrigin: 'top' }} role="menu" aria-hidden={openDropdown !== 'Technical'}>
            <div className="flex items-center gap-2 hover:text-purple-600 cursor-pointer rounded-md px-2 py-1" role="menuitem" tabIndex={0} onClick={() => handleSubdomainClick('Web Dev')}>
              <Globe className="w-4 h-4" /> Web Dev
            </div>
            <div className="flex items-center gap-2 hover:text-purple-600 cursor-pointer rounded-md px-2 py-1" role="menuitem" tabIndex={0} onClick={() => handleSubdomainClick('App Dev')}>
              <Smartphone className="w-4 h-4" /> App Dev
            </div>
            <div className="flex items-center gap-2 hover:text-purple-600 cursor-pointer rounded-md px-2 py-1" role="menuitem" tabIndex={0} onClick={() => handleSubdomainClick('AI/ML')}>
              <Brain className="w-4 h-4" /> AI / ML
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center">
          <div
            className={cardStyle}
            onClick={() => handleCardClick('Corporate')}
            role="button"
            tabIndex={0}
            onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') handleCardClick('Corporate'); }}
            aria-expanded={openDropdown === 'Corporate'}
          >
            <Building2 className={iconStyle} />
            <div className="flex items-center gap-2">
              <p className="text-xl sm:text-2xl font-semibold text-gray-800 dark:text-white">Corporate</p>
              <ChevronDown className={`w-5 h-5 text-gray-600 transition-transform ${openDropdown === 'Corporate' ? 'rotate-180' : 'rotate-0'}`} />
            </div>
          </div>
          <div className={`${dropdownBase} ${openDropdown === 'Corporate' ? dropdownVisible : dropdownHidden}`} style={{ transformOrigin: 'top' }} role="menu" aria-hidden={openDropdown !== 'Corporate'}>
            <div className="flex items-center gap-2 hover:text-purple-600 cursor-pointer rounded-md px-2 py-1" role="menuitem" tabIndex={0} onClick={() => handleSubdomainClick('Sponsorship')}>
              <HandCoins className="w-4 h-4" /> Sponsorship
            </div>
            <div className="flex items-center gap-2 hover:text-purple-600 cursor-pointer rounded-md px-2 py-1" role="menuitem" tabIndex={0} onClick={() => handleSubdomainClick('Events')}>
              <Calendar className="w-4 h-4" /> Events
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center">
          <div
            className={cardStyle}
            onClick={() => handleCardClick('Media')}
            role="button"
            tabIndex={0}
            onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') handleCardClick('Media'); }}
            aria-expanded={openDropdown === 'Media'}
          >
            <Camera className={iconStyle} />
            <div className="flex items-center gap-2">
              <p className="text-xl sm:text-2xl font-semibold text-gray-800 dark:text-white">Media</p>
              <ChevronDown className={`w-5 h-5 text-gray-600 transition-transform ${openDropdown === 'Media' ? 'rotate-180' : 'rotate-0'}`} />
            </div>
          </div>
          <div className={`${dropdownBase} ${openDropdown === 'Media' ? dropdownVisible : dropdownHidden}`} style={{ transformOrigin: 'top' }} role="menu" aria-hidden={openDropdown !== 'Media'}>
            <div className="flex items-center gap-2 hover:text-purple-600 cursor-pointer rounded-md px-2 py-1" role="menuitem" tabIndex={0} onClick={() => handleSubdomainClick('Creatives')}>
              <Palette className="w-4 h-4" /> Creatives
            </div>
            <div className="flex items-center gap-2 hover:text-purple-600 cursor-pointer rounded-md px-2 py-1" role="menuitem" tabIndex={0} onClick={() => handleSubdomainClick('PR')}>
              <Megaphone className="w-4 h-4" /> PR
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Teamvh2;
