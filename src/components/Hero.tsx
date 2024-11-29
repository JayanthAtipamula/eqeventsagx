import React from 'react';
import { ChevronDown } from 'lucide-react';
import { Parallax } from 'react-scroll-parallax';
import { scrollToSection } from '../utils/scroll';

const Hero = () => {
  const handleBookClick = (e: React.MouseEvent) => {
    e.preventDefault();
    scrollToSection('contact');
  };

  return (
    <div className="relative h-screen overflow-hidden">
      <Parallax speed={-20} className="absolute inset-0">
        <div 
          className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat scale-110"
          style={{
            backgroundImage: 'url("https://i.pinimg.com/originals/9e/d8/a7/9ed8a70699c57f95ebfcc44c5b8759df.gif")',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        <div className="absolute inset-0 bg-black/70" />
      </Parallax>
      
      <Parallax speed={-5} className="relative h-full flex flex-col items-center justify-center text-center px-4">
        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
          EQ <span className="text-gold">EVENTS</span>
        </h1>
        <p className="text-xl md:text-2xl text-white/90 mb-12 max-w-2xl">
          Creating Unforgettable Moments Through Music and Production Excellence
        </p>
        <div className="relative">
          <button 
            onClick={handleBookClick}
            className="bg-gold hover:bg-gold/90 text-white px-8 py-3 rounded-full text-lg transition-all duration-300 transform hover:scale-105"
          >
            Book Your Event
          </button>
          <span className="animate-wave"></span>
          <span className="animate-wave animation-delay-2"></span>
          <span className="animate-wave animation-delay-4"></span>
        </div>
        
        <div className="absolute bottom-8 animate-bounce">
          <ChevronDown className="text-white" size={32} />
        </div>
      </Parallax>
    </div>
  );
};

export default Hero;