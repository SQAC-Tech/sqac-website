import React from 'react'
import Navbar from '../HomePage/Navbar'
import AboutUs from './AboutUs1vh'
import Services from './AboutUs2ndvh'

const Aboutus = () => {
  return (
    <div className="relative w-full min-h-screen bg-white overflow-hidden">
  
      <div className="absolute top-10 left-10 w-80 h-80 bg-purple-300 rounded-full opacity-30 blur-3xl animate-pulse" />
      <div className="absolute top-20 right-20 w-72 h-72 bg-pink-300 rounded-full opacity-30 blur-2xl animate-pulse" />


      <div className="absolute bottom-20 left-1/3 w-96 h-96 bg-orange-300 rounded-full opacity-30 blur-2xl animate-pulse z-[-10]" />

      <div className="relative z-10">
        <Navbar />
        <AboutUs />
        <Services />
      </div>
    </div>
  )
}

export default Aboutus
