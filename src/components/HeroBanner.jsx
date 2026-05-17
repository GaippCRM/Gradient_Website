import React from 'react';

const HeroBanner = ({ title, subtitle, bgImage }) => {
  return (
    <div className="relative h-[400px] w-full overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-transform duration-700 hover:scale-105"
        style={{ backgroundImage: `url(${bgImage})` }}
      />
      
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50 bg-gradient-to-b from-black/60 via-black/40 to-black/60" />

      {/* Content */}
      <div className="relative h-full max-w-7xl mx-auto px-4 flex flex-col items-center justify-center text-center">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 tracking-tight">
          {title}
        </h1>
        <p className="text-lg md:text-xl text-white/90 max-w-2xl font-light">
          {subtitle}
        </p>
      </div>
    </div>
  );
};

export default HeroBanner;
