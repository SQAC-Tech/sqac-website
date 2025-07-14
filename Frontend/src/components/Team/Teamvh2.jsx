import React from 'react'
import boardIcon from '../../assets/boardIcon.png';
import techIcon from '../../assets/techIcon.png';
import corpIcon from '../../assets/corpIcon.png';
import creativeIcon from '../../assets/creativeIcon.png'

const Teamvh2 = () => {
  return (
    <div>
      <div className="min-h-screen bg-gradient-to-b from-orange-100 via-white to-pink-100 flex flex-col items-center justify-center px-4 py-10">
      
      <h1 className="text-4xl md:text-5xl font-['Protest_Riot'] font-extrabold mb-12 text-[#040101]">
        CHOOSE DOMAIN
      </h1>
        {/* Domain Cards */}
      <div className="grid grid-cols-2 md:flex gap-50 items-center justify-center">
        {/* Card 1: Board Members */}
        <div className="flex flex-col items-center text-center">
          <img src={boardIcon} alt="Board" className="w-35 h-35 mb-4" />
          <p className="text-2xl font-bold font-['Protest_Riot'] leading-none">Board<br />Members</p>
        </div>

        {/* Card 2: Technical */}
        <div className="flex flex-col items-center text-center">
          <img src={techIcon} alt="Technical" className="w-35 h-35 mb-4" />
          <p className="text-2xl  font-bold font-['Protest_Riot'] leading-none">Technical</p>
        </div>

        {/* Card 3: Corporate */}
        <div className="flex flex-col items-center text-center">
          <img src={corpIcon} alt="Corporate" className="w-35 h-35 mb-4" />
          <p className="text-2xl font-bold font-['Protest_Riot']">Corporate</p>
        </div>

        {/* Card 4: Creative */}
        <div className="flex flex-col items-center text-center">
          <img src={creativeIcon} alt="Creative" className="w-35 h-35 mb-4" />
          <p className="text-2xl font-bold font-['Protest_Riot']">Creative</p>
        </div>
      </div>
    </div>
    </div>
  )
}

export default Teamvh2
