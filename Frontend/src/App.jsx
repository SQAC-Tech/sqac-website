import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";

import HomePage from "./components/HomePage/HomePage.jsx";
import Footer from "./components/Footer.jsx";
import Aboutus from "./components/Aboutus/Aboutus.jsx";
import Events from "./components/Eventspage/Events.jsx";
import Team from "./components/Team/Team.jsx";
import Projects from "./components/Projects/Projects.jsx";
import JoinUs from "./components/JoinUs/JoinUs.jsx";
import Maintenance from "./components/Maintenance.jsx";

import ScrollToTop from "./components/ScrollToTop.jsx";
import useLenisScroll from "./utils/smoothScroll";
import Navbar from "./components/HomePage/Navbar.jsx";
import { SpeedInsights } from "@vercel/speed-insights/react";
import { ThemeProvider } from "./contexts/ThemeContext";
import { DarkModeProvider } from "./DarkModeContext.jsx";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import MeshBackground from "./MeshBackground.jsx";
import "./App.css";

/* ---------------- Layout Wrapper ---------------- */
const Layout = ({ children }) => {
  const location = useLocation();
  const isMaintenancePage = location.pathname === "/maintenance";

  return (
    <>
      {/* Hide Navbar during maintenance */}
      {!isMaintenancePage && <Navbar />}

      <main className="relative z-10">{children}</main>

      {/* Hide Footer during maintenance */}
      {!isMaintenancePage && <Footer />}
    </>
  );
};

/* ---------------- App ---------------- */
const App = () => {
  useLenisScroll();

  return (
    <DarkModeProvider>
      <ThemeProvider>
        {/* Optional: Hide mesh background on maintenance */}
        <MeshBackground />

        <div className="relative min-h-screen overflow-x-hidden">
          <Router>
            <ScrollToTop />

            <Layout>
              <Routes>
                {/* Maintenance */}
                <Route path="/maintenance" element={<Maintenance />} />

                {/* Main Website */}
                <Route path="/" element={<HomePage />} />
                <Route path="/about" element={<Aboutus />} />
                <Route path="/events" element={<Events />} />
                <Route path="/team" element={<Team />} />
                <Route path="/projects" element={<Projects />} />
                <Route path="/recruitment" element={<JoinUs />} />
              </Routes>
            </Layout>
          </Router>

          {/* Toast Notifications */}
          <ToastContainer
            position="top-center"
            autoClose={3000}
            newestOnTop
            closeOnClick
            pauseOnHover
            theme="colored"
          />

          <SpeedInsights />
        </div>
      </ThemeProvider>
    </DarkModeProvider>
  );
};

export default App;
