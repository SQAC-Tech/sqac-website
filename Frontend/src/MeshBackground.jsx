import React from "react";
import { useTheme } from "./contexts/ThemeContext";

export default function MeshBackground() {
  const { isDarkMode } = useTheme();

  return (
    <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
      {/* Dark Theme Mesh */}
      <div className={`absolute top-10 left-10 w-[28rem] h-[28rem] rounded-full blur-[120px] animate-pulse transition-all duration-1000 ${isDarkMode ? 'bg-purple-400/30' : 'bg-orange-300/20'}`} />
      <div className={`absolute top-32 right-20 w-[26rem] h-[26rem] rounded-full blur-[120px] animate-pulse transition-all duration-1000 ${isDarkMode ? 'bg-pink-400/30' : 'bg-pink-200/25'}`} />
      <div className={`absolute bottom-20 left-1/3 w-[30rem] h-[30rem] rounded-full blur-[130px] animate-pulse transition-all duration-1000 ${isDarkMode ? 'bg-orange-400/30' : 'bg-orange-200/20'}`} />

      {/* Light Theme Additional Elements */}
      {!isDarkMode && (
        <>
          <div className="absolute top-1/4 right-1/4 w-[20rem] h-[20rem] bg-yellow-200/15 rounded-full blur-[100px] animate-pulse" style={{ animationDelay: '0.5s' }} />
          <div className="absolute bottom-1/3 right-10 w-[24rem] h-[24rem] bg-indigo-200/20 rounded-full blur-[110px] animate-pulse" style={{ animationDelay: '1s' }} />
        </>
      )}

      {/* Dark Theme Additional Elements */}
      {isDarkMode && (
        <>
          <div className="absolute top-1/3 left-1/4 w-[22rem] h-[22rem] bg-violet-500/20 rounded-full blur-[115px] animate-pulse" style={{ animationDelay: '0.7s' }} />
          <div className="absolute bottom-1/4 right-1/3 w-[25rem] h-[25rem] bg-cyan-400/25 rounded-full blur-[125px] animate-pulse" style={{ animationDelay: '1.2s' }} />
        </>
      )}
    </div>
  );
}
