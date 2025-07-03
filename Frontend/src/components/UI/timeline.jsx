
"use client";
import React from "react";
import { motion } from "framer-motion";

export const Timeline = ({ data }) => {
  return (
    <div className="relative w-full max-w-6xl mx-auto px-4">
      <div className="absolute top-0 h-full w-0.5 bg-purple-400/50 left-8 lg:left-1/2 lg:-translate-x-1/2 z-0" />
      {data.map((item, index) => {
        const isEven = index % 2 === 0;
        return (
          <motion.div
            key={index}
            className="relative flex items-center mb-20 lg:mb-28"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.6 }}
          >
            <div className="absolute z-10 w-16 h-16 bg-black p-1 border-2 border-purple-400 rounded-full left-0 lg:left-1/2 -translate-x-1/2 flex items-center justify-center">
              {item.image}
            </div>

            <div
              className={`w-full ml-[80px] lg:w-1/2 ${
                isEven
                  ? "lg:ml-[50%] lg:pl-16"
                  : "lg:ml-0 lg:pr-16 lg:text-right"
              }`}
            >
              <div
                className={`flex flex-col ${
                  !isEven ? "lg:items-end" : "lg:items-start"
                }`}
              >
                <h3 className="text-3xl font-bold text-neutral-800 dark:text-neutral-200">
                  {item.title}
                </h3>
                
                {item.subtitle && (
                  <p className="mb-4 text-sm text-neutral-500 dark:text-neutral-400">
                    {item.subtitle}
                  </p>
                )}


                <div className="lg:w-auto">{item.content}</div>
              </div>
            </div>
          </motion.div>
        );
      })}
    </div>
  );
};