import React from "react";

export default function MeshBackground() {
  return (
    <div className="relative w-full h-screen bg-white overflow-hidden z-1">
   
      <div className="absolute top-10 left-10 w-80 h-80 bg-purple-300 rounded-full opacity-30 blur-3xl animate-pulse" />
      <div className="absolute top-20 right-20 w-72 h-72 bg-pink-300 rounded-full opacity-30 blur-2xl animate-pulse" />
      <div className="absolute bottom-20 left-1/3 w-96 h-96 bg-orange-300 rounded-full opacity-30 blur-2xl animate-pulse" />
    </div>
  );
}
