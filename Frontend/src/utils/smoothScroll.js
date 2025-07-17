import Lenis from '@studio-freight/lenis';
import { useEffect } from 'react';

const useLenisScroll = () => {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.6,
      easing: (t) => t, 
      smooth: true,
      lerp: 0.1,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);
};

export default useLenisScroll;
