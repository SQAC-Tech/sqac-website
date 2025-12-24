import React, { useState } from 'react';
import { useTheme } from '../../contexts/ThemeContext';
import {
  Users, Code2, Building2, Camera, Palette, Globe, Brain,
  Smartphone, Megaphone, HandCoins, Calendar, ChevronDown, Crown, Brush
} from 'lucide-react';

const Teamvh2 = ({ onSelectDomain }) => {
  const { isDarkMode } = useTheme();
  const [openDropdown, setOpenDropdown] = useState(null);
  const [openLeadDropdown, setOpenLeadDropdown] = useState(null);

  const card = "cursor-pointer flex flex-col items-center hover:scale-110 transition-all duration-300";
  const dropdown = `relative mt-3 backdrop-blur-xl border rounded-xl px-4 py-3 space-y-2 shadow-xl transition-all duration-300 ${
    isDarkMode ? 'bg-gray-800/90 border-gray-600' : 'bg-white/90 border-gray-200'
  }`;
  const hidden = "scale-95 opacity-0 pointer-events-none";
  const visible = "scale-100 opacity-100";

  const select = (val) => {
    onSelectDomain(val);
    setOpenDropdown(null);
    setOpenLeadDropdown(null);
  };

  return (
    <div className={`min-h-screen flex flex-col items-center justify-center ${
      isDarkMode
        ? 'bg-gradient-to-b from-[#2d1b69] via-[#1a0033] to-[#0a0014]'
        : 'bg-gradient-to-b from-[#ef9a9a] via-[#ffcdd2] to-[#ffebee]'
    }`}>

      <h1 className="text-5xl font-extrabold mb-12 bg-gradient-to-r from-[#951D13] via-[#f34a82] to-[#F0A01F] bg-clip-text text-transparent">
        Choose Your Domain
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-14">

        {/* BOARD */}
        <div className={card} onClick={() => select('Board Member')}>
          <Users className="w-20 h-20 text-orange-600 drop-shadow-lg" />
          Board Members
        </div>

        {/* TECHNICAL */}
        <div className="flex flex-col items-center">
          <div className={card} onClick={() => setOpenDropdown(openDropdown==='Technical'?null:'Technical')}>
            <Code2 className="w-20 h-20 text-indigo-600 drop-shadow-lg" />
            Technical <ChevronDown className={`${openDropdown==='Technical'&&'rotate-180'} transition`} />
          </div>
          <div className={`${dropdown} ${openDropdown==='Technical'?visible:hidden}`}>
            <div onClick={()=>select('Web Dev')} className="flex gap-2 cursor-pointer"><Globe className="w-4"/>Web Dev</div>
            <div onClick={()=>select('App Dev')} className="flex gap-2 cursor-pointer"><Smartphone className="w-4"/>App Dev</div>
            <div onClick={()=>select('AI/ML')} className="flex gap-2 cursor-pointer"><Brain className="w-4"/>AI / ML</div>
            <div onClick={()=>setOpenLeadDropdown(openLeadDropdown==='Technical'?null:'Technical')} className="flex gap-2 text-orange-500 cursor-pointer"><Crown className="w-4"/>Leads</div>
            {openLeadDropdown==='Technical' && <div onClick={()=>select('Project Lead')} className="ml-6 font-semibold cursor-pointer">Project Lead</div>}
          </div>
        </div>

        {/* CORPORATE */}
        <div className="flex flex-col items-center">
          <div className={card} onClick={() => setOpenDropdown(openDropdown==='Corporate'?null:'Corporate')}>
            <Building2 className="w-20 h-20 text-emerald-600 drop-shadow-lg" />
            Corporate <ChevronDown className={`${openDropdown==='Corporate'&&'rotate-180'} transition`} />
          </div>
          <div className={`${dropdown} ${openDropdown==='Corporate'?visible:hidden}`}>
            <div onClick={()=>select('Sponsorship')} className="flex gap-2 cursor-pointer"><HandCoins className="w-4"/>Sponsorship</div>
            <div onClick={()=>select('Events')} className="flex gap-2 cursor-pointer"><Calendar className="w-4"/>Events</div>
           </div>
        </div>

        {/* MEDIA */}
        <div className="flex flex-col items-center">
          <div className={card} onClick={() => setOpenDropdown(openDropdown==='Media'?null:'Media')}>
            <Camera className="w-20 h-20 text-pink-600 drop-shadow-lg" />
            Media <ChevronDown className={`${openDropdown==='Media'&&'rotate-180'} transition`} />
          </div>
          <div className={`${dropdown} ${openDropdown==='Media'?visible:hidden}`}>
            <div onClick={()=>select('Creative')} className="flex gap-2 cursor-pointer"><Palette className="w-4"/>Creative</div>
            <div onClick={()=>select('Public Relations')} className="flex gap-2 cursor-pointer"><Megaphone className="w-4"/>PR</div>
            <div onClick={()=>setOpenLeadDropdown(openLeadDropdown==='Media'?null:'Media')} className="flex gap-2 text-orange-500 cursor-pointer"><Crown className="w-4"/>Leads</div>
            {openLeadDropdown==='Media' && <div onClick={()=>select('Media Lead')} className="ml-6 font-semibold cursor-pointer">Media Lead</div>}
          </div>
        </div>

      </div>
    </div>
  );
};

export default Teamvh2;
