import React from 'react';
import { Link } from 'react-router-dom';

const Closed = () => {
  return (
    <div
      className="
        flex items-center justify-center h-screen
        bg-gradient-to-t dark:bg-gradient-to-b from-cyan-200 to-blue-400
        dark:from-[#0f0a1a] dark:via-[#1b0b2e]  dark:to-zinc-800
      "
    >
      <div
        className="
          bg-white dark:bg-white/10
          backdrop-blur-md
          p-10 rounded-3xl shadow-xl
          text-center max-w-md
          border border-white/20
        "
      >
        <h1
          className="
            text-3xl font-bold mb-4
            text-gray-800 dark:text-gray-100
          "
        >
          Recruitments Closed
        </h1>

        <p
          className="
            text-lg mb-6
            text-gray-600 dark:text-gray-300
          "
        >
          Thank you for your interest! Our recruitment drive is currently closed.
          Please check back later for future opportunities.
        </p>

        <Link to="/">
          <button
            className="
              bg-blue-500 hover:bg-blue-600
              dark:bg-blue-600 dark:hover:bg-blue-700
              text-white font-semibold
              py-2 px-6 rounded-full shadow-md
              transition duration-300
            "
          >
            Back to Home
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Closed;
