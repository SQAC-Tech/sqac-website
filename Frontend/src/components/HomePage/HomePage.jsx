import { useEffect } from "react";
import Content from "./Content";
import backgroundImage from "../../assets/background2.png";

function HomePage() {
  useEffect(() => {
    const cursorSpot = document.createElement("div");
    cursorSpot.style.position = "fixed";
    cursorSpot.style.width = "200px";
    cursorSpot.style.height = "200px";
    cursorSpot.style.pointerEvents = "none";
    cursorSpot.style.background = "radial-gradient(circle, rgba(178,102,255,0.3) 0%, transparent 60%)";
    cursorSpot.style.borderRadius = "50%";
    cursorSpot.style.zIndex = "1000";
    cursorSpot.style.transition = "transform 0.1s ease";
    document.body.appendChild(cursorSpot);

    const moveSpot = (e) => {
      cursorSpot.style.transform = `translate(${e.clientX - 100}px, ${e.clientY - 100}px)`;
    };
    window.addEventListener("mousemove", moveSpot);

    const sparkles = [];
    for (let i = 0; i < 40; i++) {
      const sparkle = document.createElement("div");
      sparkle.style.position = "fixed";
      sparkle.style.width = "3px";
      sparkle.style.height = "3px";
      sparkle.style.borderRadius = "50%";
      sparkle.style.background = "white";
      sparkle.style.boxShadow = "0 0 6px rgba(178,102,255,0.4)";
      sparkle.style.top = `${Math.random() * 100}vh`;
      sparkle.style.left = `${Math.random() * 100}vw`;
      sparkle.style.opacity = "0.4";
      sparkle.style.zIndex = "0";
      sparkle.style.pointerEvents = "none";
      document.body.appendChild(sparkle);

      sparkle.animate(
        [
          { opacity: 0.2, transform: "scale(0.8) translateY(0px)" },
          { opacity: 0.6, transform: "scale(1) translateY(-8px)" },
          { opacity: 0.2, transform: "scale(0.8) translateY(0px)" }
        ],
        {
          duration: 6000 + Math.random() * 3000,
          iterations: Infinity,
          delay: Math.random() * 4000,
        }
      );

      sparkles.push(sparkle);
    }

    return () => {
      window.removeEventListener("mousemove", moveSpot);
      document.body.removeChild(cursorSpot);
      sparkles.forEach((s) => document.body.removeChild(s));
    };
  }, []);

  return (
    <div className="relative min-h-screen">
      <div
        className="fixed top-0 left-0 w-full h-full -z-10 bg-no-repeat bg-cover animate-slowspin"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      ></div>
      <Content />
    </div>
  );
}

export default HomePage;
