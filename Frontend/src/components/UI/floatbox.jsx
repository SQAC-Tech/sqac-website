
import React from "react";
import { motion } from "framer-motion";

export const FloatBox = ({ name, desc }) => {
  return (
    <div
      className="group relative bg-white/90 dark:bg-white/10 border border-purple-200 dark:border-purple-800 
                 px-4 py-2 rounded-lg text-sm font-semibold text-black dark:text-white 
                 shadow-lg transition-colors cursor-pointer" 
    >
      {name}
      <div className="absolute z-50 bottom-full left-1/2 -translate-x-1/2 mb-2 w-48 text-center bg-black text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
        {desc}
      </div>
    </div>
  );
};