import React, { useEffect, useState } from "react";
import CenterImage from "./CenterImage";

function Hero() {
  const [sectionHeight, setSectionHeight] = useState(1500);

  useEffect(() => {
    const updateHeight = () => {
      const vh = window.innerHeight;
      if (vh >= 900) {
        setSectionHeight(1500);
      } else if (vh >= 600) {
        setSectionHeight(1000);
      } else {
        setSectionHeight(800);
      }
    };

    updateHeight();
    window.addEventListener("resize", updateHeight);

    return () => window.removeEventListener("resize", updateHeight);
  }, []);

  return (
    <div
      className="w-full relative  dark:bg-zinc-950"
      style={{
        height: `calc(${sectionHeight}px + 100vh)`,
      }}
    >
      <CenterImage sectionHeight={sectionHeight} />
    </div>
  );
}

export default Hero;
