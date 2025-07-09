import React from 'react';
import { motion, useScroll, useTransform, useMotionTemplate } from 'framer-motion';

const SECTION_HEIGHT = 1500;

function CenterImage() {
  const { scrollY } = useScroll();

  // Fade out between SECTION_HEIGHT and SECTION_HEIGHT + 500
  const opacity = useTransform(
    scrollY,
    [SECTION_HEIGHT, SECTION_HEIGHT + 500],
    [1, 0]
  );

  // Animate background size smoothly from cover to 70% zoom
  const backgroundSize = useTransform(
    scrollY,
    [SECTION_HEIGHT, SECTION_HEIGHT + 500],
    ["cover", "100%"]
  );

  // Animate clip path polygon shape
  const clip1 = useTransform(scrollY, [0, SECTION_HEIGHT], [20, 0]);
  const clip2 = useTransform(scrollY, [0, SECTION_HEIGHT], [55, 100]);

  const clipPath = useMotionTemplate`
    polygon(
      ${clip1}% ${clip1}%,
      ${clip2}% ${clip1}%,
      ${clip2}% ${clip2}%,
      ${clip1}% ${clip2}%
    )
  `;

  return (
    <motion.div
      className="sticky top-0 w-full h-screen"
      style={{
        opacity,
        clipPath,
        backgroundImage:
          "url(https://images.unsplash.com/photo-1541185933-ef5d8ed016c2?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)",
        backgroundSize,
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    ></motion.div>
  );
}

export default CenterImage;
