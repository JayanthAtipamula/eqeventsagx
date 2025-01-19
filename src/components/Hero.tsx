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
        <h2 
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-white mb-2 tracking-[0.05em] uppercase"
          style={{ fontFamily: 'Audiowide, cursive' }}
        >
          Premium Asian &
        </h2>
        <h2 
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-white mb-8 tracking-[0.05em] uppercase"
          style={{ fontFamily: 'Audiowide, cursive' }}
        >
          Multicultural Wedding Djs
        </h2>
        <p 
          className="text-sm sm:text-base md:text-lg text-white/80 mb-12 max-w-2xl tracking-[0.1em]"
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