import React from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Menu, Phone, Facebook, Instagram, Twitter } from 'lucide-react';
import { scrollToSection } from '../utils/scroll';

const Navigation = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const isActive = (path: string) => location.pathname === path;
  const [isOpen, setIsOpen] = React.useState(false);

  const handleSectionClick = (e: React.MouseEvent, sectionId: string) => {
    e.preventDefault();
    if (location.pathname !== '/') {
      navigate('/');
      setTimeout(() => {
        scrollToSection(sectionId);
      }, 100);
    } else {
      scrollToSection(sectionId);
    }
    setIsOpen(false);
  };

  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Reviews', href: '/reviews' },
  ];

  const socialLinks = [
    { icon: Facebook, href: 'https://facebook.com', label: 'Facebook' },
    { icon: Instagram, href: 'https://instagram.com', label: 'Instagram' },
    { icon: Twitter, href: 'https://twitter.com', label: 'Twitter' },
  ];

  return (
    <nav className="fixed w-full bg-black/80 backdrop-blur-sm z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex-shrink-0">
            <Link to="/" className="flex items-center">
              <img 
                src="https://i.postimg.cc/Z5gzZ019/Untitled-787-x-350-px.png" 
                alt="EQ Events Logo" 
                className="h-12 w-auto"
              />
            </Link>
          </div>
          
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-8">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`text-white hover:text-gold transition-colors ${isActive(item.href) ? 'text-gold' : ''}`}
                >
                  {item.name}
                </Link>
              ))}
              <a 
                href="#services" 
                className="text-white hover:text-gold transition-colors"
                onClick={(e) => handleSectionClick(e, 'services')}
              >
                Services
              </a>
              <a 
                href="#contact" 
                className="text-white hover:text-gold transition-colors"
                onClick={(e) => handleSectionClick(e, 'contact')}
              >
                Contact Us
              </a>
            </div>
          </div>

          <div className="hidden md:flex items-center space-x-6">
            <div className="flex items-center space-x-2 text-white">
              <Phone size={20} className="text-gold" />
              <span className="font-semibold">+44 123 456 7890</span>
            </div>
            <div className="h-8 w-px bg-gray-700" />
            <div className="flex items-center space-x-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:text-gold transition-colors"
                  aria-label={social.label}
                >
                  <social.icon size={20} />
                </a>
              ))}
            </div>
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-white hover:text-gold"
            >
              <Menu size={24} />
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`block px-3 py-2 text-white hover:text-gold ${isActive(item.href) ? 'text-gold' : ''}`}
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <a
              href="#services"
              className="block px-3 py-2 text-white hover:text-gold"
              onClick={(e) => handleSectionClick(e, 'services')}
            >
              Services
            </a>
            <a
              href="#contact"
              className="block px-3 py-2 text-white hover:text-gold"
              onClick={(e) => handleSectionClick(e, 'contact')}
            >
              Contact Us
            </a>
          </div>
          
          <div className="px-5 py-4 border-t border-gray-700">
            <div className="flex items-center space-x-2 text-white mb-4">
              <Phone size={20} className="text-gold" />
              <span className="font-semibold">+44 123 456 7890</span>
            </div>
            <div className="flex items-center space-x-6">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:text-gold transition-colors"
                  aria-label={social.label}
                >
                  <social.icon size={20} />
                </a>
              ))}
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;