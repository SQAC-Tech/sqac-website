import React from 'react';
import { Link } from 'react-router-dom';

const Closed = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-gradient-to-r from-purple-800 to-purple-900">
      <div className="bg-white p-10 rounded-3xl shadow-xl text-center max-w-md">
        <h1 className="text-3xl font-bold text-red-600 mb-4">Recruitments Closed</h1>
        <p className="text-white text-lg mb-6">
          Thank you for your interest! Our recruitment drive is currently closed. 
          Please check back later for future opportunities.
        </p>
        <Link to="/">
          <button className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-6 rounded-full shadow-md transition duration-300">
            Back to Home
          </button>
        </Link>
      </div>
    </div>
  );
}

export default Closed;
