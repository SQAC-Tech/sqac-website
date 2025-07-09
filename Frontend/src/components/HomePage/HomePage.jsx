import Content from "./Content";
import WhatWeDoSection from "./WhatWeDo";
import Domains from "./Domains";
import Hero from "./Hero";
import ContactUs from "./ContactUs";
import Footer from "../Footer";

function HomePage() {
  return (
    <>
      <div className="relative min-h-screen">
        <Hero/>
        <Content />
        <WhatWeDoSection />
        <Domains />
        <ContactUs/>
        
      </div>
      
    </>
  );
};

export default HomePage;
