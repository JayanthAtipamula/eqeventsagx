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
        <h1 
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-white mb-3 tracking-[0.05em] uppercase"
          style={{ fontFamily: 'Audiowide, cursive' }}
        >
          Luxury Asian &
        </h1>
        <h1 
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-white mb-10 tracking-[0.05em] uppercase"
          style={{ fontFamily: 'Audiowide, cursive' }}
        >
          Mixed Wedding Djs
        </h1>
        <p 
          className="text-base sm:text-lg md:text-xl text-white/80 mb-16 max-w-3xl tracking-[0.1em]"
          style={{ fontFamily: 'Rajdhani, sans-serif', fontWeight: 300 }}
        >
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