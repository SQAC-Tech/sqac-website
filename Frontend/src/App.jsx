import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import HomePage from './components/HomePage/HomePage.jsx';
import Footer from './components/Footer.jsx';
import Aboutus from './components/Aboutus/Aboutus.jsx';
import Events from './components/Eventspage/Events.jsx';
import Team from './components/Team/Team.jsx';
import Projects from './components/Projects/Projects.jsx';

const App = () => {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/homepage" element={<HomePage />} />
            <Route path="/about" element={<Aboutus />} />
            <Route path="/events" element={<Events />} />
            <Route path="/team" element={<Team />} />
            <Route path="/projects" element={<Projects />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
