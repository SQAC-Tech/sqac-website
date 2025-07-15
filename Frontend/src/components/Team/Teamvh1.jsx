import React from 'react';
import { motion } from 'framer-motion';
import teamImg1 from '../../assets/teamImg1.png';
import teamImg2 from '../../assets/teamImg2.png';

const Teamvh1 = () => {
  return (
    <div className="relative min-h-screen bg-gradient-to-b from-purple-200 via-pink-100 to-orange-100 p-4 md:p-8 overflow-hidden">
      {/* Title */}
      <div className="relative w-full h-full">
        <h1 className="absolute font-['Protest_Riot'] font-semibold text-[#5C5C5C] leading-[60px] text-[40px] sm:text-[60px] md:text-[80px] left-[3vw] top-[12vh]
        ">
          "MEET
        </h1>
        <h1 className="absolute font-['Protest_Riot'] font-semibold text-[#5C5C5C] leading-[60px] text-[40px] sm:text-[60px] md:text-[80px] left-[17vw] top-[22vh]">
          OUR
        </h1>
        <h1 className="absolute font-['Protest_Riot'] font-semibold text-[#5C5C5C] leading-[60px] text-[40px] sm:text-[60px] md:text-[80px] left-[28vw] top-[32vh]">
          TEAM"
        </h1>

        {/* Bouncing Bubbles */}
        <motion.div
          animate={{ y: [0, -25, 0] }}
          transition={{ duration: 1.7, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute top-[53vh] left-[3vw] md:top-[53vh] bg-red-300 bg-opacity-40 text-lg font-bold font-['Stick_No_Bills'] rounded-full w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 flex items-center justify-center"
        >
          LEARNERS
        </motion.div>

        <motion.div
          animate={{ y: [0, -25, 0] }}
          transition={{ duration: 1.6, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute top-[69vh] left-[8vw] sm:top-[70vh] md:top-[73vh] md:left-[17vh] bg-[#AFE7D4] bg-opacity-70 font-['Stick_No_Bills'] text-lg sm:text-lg font-bold rounded-full w-24 h-24 sm:w-28 sm:h-28 md:w-24 md:h-24 md:text-2xl flex items-center justify-center"
        >
          UI / UX
        </motion.div>

        <motion.div
          animate={{ y: [0, -25, 0] }}
          transition={{ duration: 2.2, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute top-[49vh] left-[24vw] md:top-[55vh] w-28 h-28 sm:w-32 sm:h-32 md:w-40 md:h-40 rounded-full overflow-hidden border-2 border-gray-300"
        >
          <img src={teamImg2} alt="Puzzle Team" className="w-full h-full object-cover" />
        </motion.div>

        <motion.div
          animate={{ y: [0, -25, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute top-[45vh] left-[44vw]  bg-[#C5FFAA] bg-opacity-55 font-['Stick_No_Bills'] text-lg sm:text-xl font-bold rounded-full w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 flex items-center justify-center"
        >
          EVENTS
        </motion.div>

        <motion.div
          animate={{ y: [0, -25, 0] }}
          transition={{ duration: 1.9, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute top-[65vh] left-[55vw] bg-[#FFE26F] bg-opacity-70 font-['Stick_No_Bills'] text-lg font-bold rounded-full w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 flex items-center justify-center"
        >
          Developers
        </motion.div>

        <motion.div
          animate={{ y: [0, -25, 0] }}
          transition={{ duration: 2.2, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute top-[15vh] left-[80vw] md:left-[77vw] bg-[#97B6FF] bg-opacity-70 font-['Stick_No_Bills'] text-lg font-bold rounded-full w-24 h-24 sm:w-28 sm:h-28 flex items-center justify-center"
        >
          MANAGERS
        </motion.div>

        <motion.div
          animate={{ y: [0, -25, 0] }}
          transition={{ duration: 2.4, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute top-[56vh] left-[88vw] md:left-[83vw] bg-[#C5A9F4] bg-opacity-70 font-['Stick_No_Bills'] text-lg md:text-2xl font-bold rounded-full w-20 h-20 sm:w-24 sm:h-24 md:w-26 md:h-26 flex items-center justify-center"
        >
          TECHIE
        </motion.div>

        <motion.div
          animate={{ y: [0, -25, 0] }}
          transition={{ duration: 2.3, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute top-[26vh] left-[60vw] md:top-[30vh] w-32 h-32 sm:w-36 sm:h-36 md:w-45 md:h-45 rounded-full overflow-hidden border-2 border-gray-300"
        >
          <img src={teamImg1} alt="Team Meeting" className="w-full h-full object-cover" />
        </motion.div>
      </div>
    </div>
  );
};

export default Teamvh1;
