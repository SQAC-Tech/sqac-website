import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import HomePage from './components/HomePage/HomePage.jsx';
import Footer from './components/Footer.jsx';
import Aboutus from './components/Aboutus/Aboutus.jsx';
import Events from './components/Eventspage/Events.jsx';
import Team from './components/Team/Team.jsx';
import Projects from './components/Projects/Projects.jsx';
import JoinUs from './components/JoinUs/JoinUs.jsx';
import ScrollToTop from './components/ScrollToTop.jsx';
import useLenisScroll from './utils/smoothScroll';
import Navbar from './components/HomePage/Navbar.jsx';
import { SpeedInsights } from "@vercel/speed-insights/react";
import { ThemeProvider } from './contexts/ThemeContext';

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import './App.css';

const App = () => {
  useLenisScroll();

  return (
    <ThemeProvider>
      <div className="app-container">
        <Router>
          <ScrollToTop />
          <Navbar />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<Aboutus />} />
            <Route path="/events" element={<Events />} />
            <Route path="/team" element={<Team />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/recruitment" element={<JoinUs />} />
          </Routes>
          <Footer />
        </Router>

        {/* Toast container goes here */}
        <ToastContainer
          position="top-center"
          autoClose={3000}
          hideProgressBar={false}
          newestOnTop
          closeOnClick
          pauseOnHover
          theme="colored"
        />

        <SpeedInsights />
      </div>
    </ThemeProvider>
  );
};

export default App;
