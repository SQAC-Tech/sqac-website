import React from 'react'
import ResponsiveHeader from './components/Header.jsx'
import HomePage from './components/HomePage/HomePage.jsx'
import Domains from './components/HomePage/Domains.jsx'
import Footer from './components/Footer.jsx'
const App = () => {
  return (
    <>
      <div >
        <ResponsiveHeader />
        <HomePage />
        <Domains />
        <Footer/>
      </div>
    </>
  )
}

export default App
