import React from "react";
import bgImage from '../../../../../images/heroBg.jpg'

export default function HeroArea() {
  const heroBg = {
    height: '100%',
    backgroundPosition: 'center',
    backgroundImage: `url(${bgImage})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover'
  }
  return (
    <div className="lg:flex lg:relative flex-col h-full justify-center hidden lg:w-1/3 w-full fixed z-10">
      <div style={heroBg} className="hero-bg w-full left-0" />
    </div>
  );
}
