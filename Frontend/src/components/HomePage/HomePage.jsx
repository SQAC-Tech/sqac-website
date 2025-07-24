import Content from "./Content";
import WhatWeDoSection from "./WhatWeDo";
import Domains from "./Domains";
import Home from "./Home";


function HomePage() {
  return (
      <div className="relative min-h-screen">
        <Home />
        <WhatWeDoSection />
        <Domains />

      </div>
  );
};
export default HomePage;