import React from 'react';
import { ChevronDown } from 'lucide-react';
import { scrollToSection } from '../utils/scroll';

const Hero = () => {
  const handleBookClick = (e: React.MouseEvent) => {
    e.preventDefault();
    scrollToSection('contact');
  };

  return (
    <div className="relative h-screen overflow-hidden">
      <div className="absolute inset-0">
        <div 
          className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: 'url("https://i.pinimg.com/originals/9e/d8/a7/9ed8a70699c57f95ebfcc44c5b8759df.gif")',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        <div className="absolute inset-0 bg-black/70" />
      </div>
      
      <div className="relative h-full flex flex-col items-center justify-center text-center px-4">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extralight text-white mb-2 font-sans tracking-[0.2em] uppercase">
          Luxury Asian &
        </h1>
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extralight text-white mb-6 font-sans tracking-[0.2em] uppercase">
          Mixed Wedding Djs
        </h1>
        <p className="text-lg sm:text-xl md:text-2xl text-white/80 mb-12 max-w-3xl font-light tracking-[0.15em]">
          Creating Unforgettable Moments Through Music and Production Excellence
        </p>
        <div className="relative">
          <span className="animate-wave"></span>
          <span className="animate-wave animation-delay-2"></span>
          <span className="animate-wave animation-delay-4"></span>
        </div>
        
        <div className="absolute bottom-8 animate-bounce">
          <ChevronDown className="text-white" size={32} />
        </div>
      </div>
    </div>
  );
};

export default Hero;