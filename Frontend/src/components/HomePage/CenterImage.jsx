import React from 'react';
import {
  motion,
  useScroll,
  useTransform,
  useMotionTemplate
} from 'framer-motion';
import Layer from '../../assets/glow.png';

const SECTION_HEIGHT = 1000;

function CenterImage() {
  const { scrollY } = useScroll();

  // Animate the clipping polygon
  const clip1 = useTransform(scrollY, [0, SECTION_HEIGHT], [25, 0]);
  const clip2 = useTransform(scrollY, [0, SECTION_HEIGHT], [25, 100]);
  const clip3 = useTransform(scrollY, [0, SECTION_HEIGHT], [75, 100]);
  const clip4 = useTransform(scrollY, [0, SECTION_HEIGHT], [75, 0]);

  const activeClip = useMotionTemplate`
    polygon(
      ${clip1}% ${clip1}%,
      ${clip2}% ${clip1}%,
      ${clip3}% ${clip3}%,
      ${clip4}% ${clip3}%
    )
  `;

  // Animate gradient opacity towards end of scroll
  const gradientOpacity = useTransform(
    scrollY,
    [SECTION_HEIGHT, SECTION_HEIGHT + 300],
    [0, 1]
  );

  return (
    <motion.div
      className="sticky top-0 w-full h-screen "
      style={{
        clipPath: activeClip,
        backgroundImage: `url(${Layer})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        overflow: 'hidden',
      }}
    >
      <span>Scroll</span>
      <motion.div
        style={{
          opacity: gradientOpacity,
          background: 'linear-gradient(to bottom, rgba(180, 199, 97, 0.73) 0%, rgb(255, 255, 255) 10%)',
          width: '100%',
          position: 'absolute',
          top: 0,
          left: 0,
          pointerEvents: 'none'
        }}
      />
    </motion.div>
  );
}

export default CenterImage;
