import Content from "./Content";
import WhatWeDoSection from "./WhatWeDo";
import Domains from "./Domains";
import Home from "./Home";
import ContactUs from "./ContactUs";
import Footer from "../Footer";

function HomePage() {
  return (
      <div className="relative min-h-screen">
        <Home />
        <Content />
        <WhatWeDoSection />
        <Domains />
        <ContactUs />
        <Footer />
      </div>
  );
};
export default HomePage;