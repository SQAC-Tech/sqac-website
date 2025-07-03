import Logo from "../assets/clubLogo2.png";
import { useState } from 'react';
import { Link } from 'react-router-dom';

const ResponsiveHeader = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className="mt-2 w-[98%] mx-auto p-4">

      {/* Desktop */}
      <div className="hidden lg:flex justify-between items-center">
        <Link to='/'>
        <div className="flex items-center gap-x-1 px-7 py-1 rounded-4xl border-2 border-[#7133a9]" style={{ background: "#1a0033" }}>
          <img src={Logo} alt="Logo" className='h-10 w-9 rounded-full' />
          <p className='text-white font-medium text-2xl'>SQAC</p>
        </div>
        </Link>

        <div className="flex items-center gap-x-25 px-8 py-2 rounded-4xl border-2 border-[#7133a9] cursor-pointer" style={{ background: "linear-gradient(to right, #0f001a, #4a1b72, #0f001a)" }}>
          <Link to="/about" className='text-white font-medium text-xl hover:text-purple-300 transition-colors'>About Us</Link>
          <Link to="/team" className='text-white font-medium text-xl hover:text-purple-300 transition-colors'>Team</Link>
          <Link to="/projects" className='text-white font-medium text-xl hover:text-purple-300 transition-colors'>Projects</Link>
          <Link to="/events" className='text-white font-medium text-xl hover:text-purple-300 transition-colors'>Events</Link>
          <div className="p-[2px] rounded-2xl bg-gradient-to-br from-pink-500 to-purple-700 inline-block">
            <Link to="/join" className="bg-[#1a0033] text-white font-bold px-6 py-1 rounded-2xl w-full h-full text-xl hover:bg-purple-900 transition-colors">
              Join Us
            </Link>
          </div>
        </div>
      </div>

      {/* Mobile */}
      <div className="lg:hidden">
        <div className="flex justify-between items-center">
          <Link to='/'>
          <div className="flex items-center gap-x-2 px-4 py-1 rounded-2xl border-2 border-[#7133a9]" style={{ background: "#1a0033" }}>
            <img src={Logo} alt="Logo" className='h-8 w-7 sm:h-10 sm:w-9 rounded-full' />
            <p className='text-white font-medium text-lg sm:text-xl'>SQAC</p>
          </div>
      </Link>
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="p-2 rounded-lg border-2 border-[#7133a9] bg-[#1a0033] text-white hover:bg-purple-900 transition-colors"
          >
            {isMobileMenuOpen ? (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>

        {isMobileMenuOpen && (
          <div className="mt-4 p-4 rounded-2xl border-2 border-[#7133a9] bg-gradient-to-b from-[#0f001a] to-[#4a1b72]">
            <div className="flex flex-col gap-4 items-center">
              <Link to="/about" className='text-white font-medium text-lg hover:text-purple-300 transition-colors text-left'>About Us</Link>
              <Link to="/team" className='text-white font-medium text-lg hover:text-purple-300 transition-colors text-left'>Team</Link>
              <Link to="/projects" className='text-white font-medium text-lg hover:text-purple-300 transition-colors text-left'>Projects</Link>
              <Link to="/events" className='text-white font-medium text-lg hover:text-purple-300 transition-colors text-left'>Events</Link>
              <div className="p-[1px] rounded-2xl bg-gradient-to-br from-pink-500 to-purple-700 inline-block mt-2">
                <Link to="/join" className="bg-[#1a0033] text-white font-bold px-6 py-2 rounded-2xl w-full text-lg hover:bg-purple-900 transition-colors">
                  Join Us
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Tablet only (md) */}
      <div className="hidden md:flex lg:hidden justify-between items-center flex-wrap gap-4">
        <div className="flex items-center gap-x-2 px-6 py-1 rounded-3xl border-2 border-[#7133a9]" style={{ background: "#1a0033" }}>
          <img src={Logo} alt="Logo" className='h-10 w-9 rounded-full' />
          <p className='text-white font-medium text-xl'>SQAC</p>
        </div>

        <div className="flex items-center gap-x-4 px-6 py-1 rounded-3xl border-2 border-[#7133a9]" style={{ background: "linear-gradient(to right, #0f001a, #4a1b72, #0f001a)" }}>
          <Link to="/about" className='text-white font-medium text-sm hover:text-purple-300 transition-colors'>About</Link>
          <Link to="/team" className='text-white font-medium text-sm hover:text-purple-300 transition-colors'>Team</Link>
          <Link to="/projects" className='text-white font-medium text-sm hover:text-purple-300 transition-colors'>Projects</Link>
          <Link to="/events" className='text-white font-medium text-sm hover:text-purple-300 transition-colors'>Events</Link>
          <div className="p-[2px] rounded-xl bg-gradient-to-br from-pink-500 to-purple-700 inline-block">
            <Link to="/join" className="bg-[#1a0033] text-white font-bold px-1 py-1 rounded-xl text-sm hover:bg-purple-900 transition-colors">
              Join Us
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResponsiveHeader;
