import innovation from "../../assets/innovate.webp"
import build from "../../assets/Build.png"
import inspire from "../../assets/inspire.webp"
import { motion } from 'framer-motion';

import React from 'react';

const cards = [
  { title: 'Innovate', quote: 'The true sign of intelligence is not knowledge but imagination.', author: 'Albert Einstein', image: innovation },
  { title: 'Build', quote: 'The best way to predict the future is to build it.', author: 'Alan Kay', image: build },
  { title: 'Inspire', quote: 'People may forget what you said, but they will never forget how you made them feel.', author: 'Maya Angelou', image: inspire }
];

function WWD() {
  return (
    <div className="min-h-screen flex items-center justify-center p-2">
      <div className=" max-w-6xl w-[90%] h-[95%] rounded-2xl flex flex-col items-center p-8 border-1 border-[#7133a9]">
        
        {/* Header */}
        <div className="max-w-md mx-auto bg-purple-900 rounded-xl p-6 mb-8 text-center border-2 border-purple-600">
          <h1 className="text-white text-3xl font-bold">What We Do</h1>
          <p className="text-gray-300 mt-2">"A short note can be added"</p>
        </div>

        {/* Cards */}
        <div className="flex flex-col md:flex-row gap-6">
          {cards.map((card, i) => (
            <motion.div
              key={card.title}
              className="flex-1 min-h-64 rounded-lg p-6 text-center relative overflow-hidden cursor-pointer group"
              style={{ backgroundImage: `url(${card.image})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.2 }}
              whileHover={{ scale: 1.05 }}
            >
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-purple-800 to-purple-900 opacity-85 group-hover:opacity-0 transition-opacity duration-300" />
              
              {/* Content */}
              <div className="relative z-10 h-full flex flex-col justify-center group-hover:opacity-0 transition-opacity duration-300">
                <h3 className="text-white text-2xl font-bold mb-2 underline">{card.title}</h3>
                <p className="text-gray-300 text-sm mb-2">"{card.quote}"</p>
                <p className="text-purple-200 font-medium italic">{card.author}</p>
              </div>
            </motion.div>
          ))}
        </div>
        
      </div>
    </div>
  );
}

export default WWD;

