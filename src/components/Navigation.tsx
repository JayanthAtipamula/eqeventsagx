import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import Logo from '../assets/EQEVENTSLOGO.png';
import { scrollToSection } from '../utils/scroll';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const handleContactClick = (e: React.MouseEvent) => {
    e.preventDefault();
    if (location.pathname !== '/') {
      window.location.href = '/#contact';
    } else {
      scrollToSection('contact');
    }
  };

  const handleServicesClick = (e: React.MouseEvent) => {
    e.preventDefault();
    if (location.pathname !== '/') {
      window.location.href = '/#services';
    } else {
      scrollToSection('services');
    }
  };

  return (
    <nav className="w-full z-50 absolute top-6 bg-transparent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-24">
          {/* Left Menu Items - Desktop */}
          <div className="hidden md:flex md:items-center md:space-x-8">
            <Link to="/" className="text-white hover:text-gold transition-colors text-lg">
              Home
            </Link>
            <Link to="/about" className="text-white hover:text-gold transition-colors text-lg">
              About
            </Link>
            <button
              onClick={handleServicesClick}
              className="text-white hover:text-gold transition-colors text-lg bg-transparent border-none cursor-pointer"
            >
              Services
            </button>
            <Link to="/reviews" className="text-white hover:text-gold transition-colors text-lg">
              Reviews
            </Link>
          </div>

          {/* Mobile Menu Button - Left side */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white hover:text-gold"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Center Logo */}
          <div className="flex-shrink-0 absolute left-1/2 transform -translate-x-1/2">
            <Link to="/">
              <img 
                src={Logo}
                alt="EQ Events Logo" 
                className="h-20 w-auto"
              />
            </Link>
          </div>

          {/* Right Contact Button */}
          <div className="hidden md:block">
            <button 
              onClick={handleContactClick}
              className="bg-transparent border-2 border-gold text-gold px-8 py-3 rounded-full font-semibold hover:bg-gold hover:text-black transition-colors duration-300 text-lg"
            >
              Contact Us
            </button>
          </div>
          
          {/* Empty div for mobile to maintain center logo */}
          <div className="md:hidden w-10"></div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden mt-2">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-transparent backdrop-blur-sm">
              <Link
                to="/"
                className="block px-3 py-2 text-white hover:text-gold transition-colors text-lg"
                onClick={() => setIsOpen(false)}
              >
                Home
              </Link>
              <Link
                to="/about"
                className="block px-3 py-2 text-white hover:text-gold transition-colors text-lg"
                onClick={() => setIsOpen(false)}
              >
                About
              </Link>
              <button
                onClick={(e) => {
                  handleServicesClick(e);
                  setIsOpen(false);
                }}
                className="block w-full text-left px-3 py-2 text-white hover:text-gold transition-colors text-lg bg-transparent border-none cursor-pointer"
              >
                Services
              </button>
              <Link
                to="/reviews"
                className="block px-3 py-2 text-white hover:text-gold transition-colors text-lg"
                onClick={() => setIsOpen(false)}
              >
                Reviews
              </Link>
              <button
                onClick={(e) => {
                  handleContactClick(e);
                  setIsOpen(false);
                }}
                className="block w-full text-left px-3 py-2 text-white hover:text-gold transition-colors text-lg"
              >
                Contact Us
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;