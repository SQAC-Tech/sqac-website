import React from 'react'
import CenterImage from './CenterImage';

const SECTION_HEIGHT = 1500;
function Hero() {
  return (
    <div className=' w-full relative '
    style={{
        height: `calc(${SECTION_HEIGHT}px + 100vh)`
    }}>
        <CenterImage/>
    </div>
  )
}

export default Hero