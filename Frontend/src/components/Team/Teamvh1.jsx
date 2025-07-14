import React from 'react';
import teamImg1 from '../../assets/teamImg1.png';
import teamImg2 from '../../assets/teamImg2.png'
import {motion} from 'framer-motion';

const Teamvh1 = () => {
  return (
    <div className="relative min-h-screen bg-gradient-to-b from-purple-200 via-pink-100 to-orange-100 p-8 overflow-hidden">
  {/* Header */}
  <div className="flex justify-between items-center mb-10">
    {/* Add header content here if needed */}
  </div>

  {/* Randomly placed bubbles */}
  {/*Title */}
  
  <div className="relative w-full h-full">
    <h1 className="absolute top-[10vh] left-[3vw] font-semibold text-[80px] leading-[60px] text-[#5C5C5C]" >"MEET</h1>
    <h1 className="absolute top-[20vh] left-[17vw] font-semibold text-[80px] leading-[60px] text-[#5C5C5C]" >OUR</h1>
    <h1 className="absolute top-[30vh] left-[28vw] font-semibold text-[80px] leading-[60px] text-[#5C5C5C]" >TEAM"</h1>
    <motion.div   animate={{ y: [0, -25, 0] }}
     transition={{ duration: 1.7, repeat: Infinity, ease: "easeInOut" }}
     className="absolute top-[53vh] left-[3vw] bg-red-300 bg-opacity-40 text-sm font-bold rounded-full w-21 h-21 flex items-center justify-center">
      LEARNERS
    </motion.div>
    <motion.div animate={{ y: [0, -25, 0] }}
    transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
    className="absolute top-[69vh] left-[8vw] bg-[#AFE7D4] text-sm font-bold rounded-full w-26 h-26 flex items-center justify-center">
      UI / UX
    </motion.div>
    <motion.div animate={{ y: [0, -25, 0] }}
    transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut" }}
     className="absolute top-[49vh] left-[24vw] w-45 h-45 rounded-full overflow-hidden border-2 border-gray-300">
      <img src={teamImg2} alt="Puzzle Team" className="w-full h-full object-cover" />
    </motion.div>
    <motion.div animate={{ y: [0, -25, 0] }}
    transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
     className="absolute top-[45vh] left-[44vw] bg-[#C5FFAA] text-sm font-bold rounded-full w-24 h-24 flex items-center justify-center">
      EVENTS
    </motion.div>
    <motion.div animate={{ y: [0, -25, 0] }}
     transition={{ duration: 1.9, repeat: Infinity, ease: "easeInOut" }}
      className="absolute top-[65vh] left-[55vw] bg-[#FFE26F8F] bg-opacity-56 text-sm font-bold rounded-full w-27 h-27 flex items-center justify-center">
      Developers
    </motion.div>
    <motion.div animate={{ y: [0, -25, 0] }}
    transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut" }}
     className="absolute top-[15vh] left-[80vw] bg-[#97B6FF] text-sm font-bold rounded-full w-24 h-24 flex items-center justify-center">
      MANAGERS
    </motion.div>
    <motion.div animate={{ y: [0, -25, 0] }}
    transition={{ duration: 2.4, repeat: Infinity, ease: "easeInOut" }} 
     className="absolute top-[56vh] left-[88vw] bg-[#C5A9F4] text-sm font-bold rounded-full w-22 h-22 flex items-center justify-center">
      TECHIE
    </motion.div>
    <motion.div animate={{ y: [0, -25, 0] }}
    transition={{ duration: 2.3, repeat: Infinity, ease: "easeInOut" }}
     className="absolute top-[26vh] left-[60vw] w-47 h-47 rounded-full overflow-hidden border-2 border-gray-300">
      <img src={teamImg1} alt="Team Meeting" className="w-full h-full object-cover" />
    </motion.div>
  </div>
</div>

  );
};

export default Teamvh1;
