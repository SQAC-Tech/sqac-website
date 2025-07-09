import Content from "./Content";
import WhatWeDoSection from "./WhatWeDo";
import Domains from "./Domains";
import Hero from "./Hero";

function HomePage() {
  return (
    <>
      <div className="relative min-h-screen">
        <Hero/>
        <Content />
        <WhatWeDoSection />
        <Domains />
      </div>
      
    </>
  );
};

export default HomePage;
