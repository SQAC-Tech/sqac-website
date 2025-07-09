import Content from "./Content";
import WhatWeDoSection from "./WhatWeDo";
import Domains from "./Domains";

function HomePage() {
  return (
    <>
      <div className="relative min-h-screen">
        <Content />
        <WhatWeDoSection />
        <Domains />
      </div>
      
    </>
  );
};

export default HomePage;
