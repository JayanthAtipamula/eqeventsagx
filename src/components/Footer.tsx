import React from 'react';
import { Facebook, Instagram, Youtube, Mail, Phone, Heart } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <div className="mb-4">
              <img 
                src="https://i.postimg.cc/Z5gzZ019/Untitled-787-x-350-px.png" 
                alt="EQ Events Logo" 
                className="h-12 w-auto"
              />
            </div>
            <p className="text-gray-400">
              Creating unforgettable moments through music and production excellence.
            </p>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
            <div className="space-y-2">
              <a href="mailto:info@paragonevents.com" className="flex items-center text-gray-400 hover:text-gold">
                <Mail className="w-5 h-5 mr-2" />
                info@EQevents.com
              </a>
              <a href="tel:+1234567890" className="flex items-center text-gray-400 hover:text-gold">
                <Phone className="w-5 h-5 mr-2" />
                (123) 456-7890
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Follow Us</h4>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-gold">
                <Facebook className="w-6 h-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-gold">
                <Instagram className="w-6 h-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-gold">
                <Youtube className="w-6 h-6" />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link to="/about" className="text-gray-400 hover:text-gold transition-colors">About Us</Link></li>
              <li><Link to="/reviews" className="text-gray-400 hover:text-gold transition-colors">Reviews</Link></li>
              <li><a href="#services" className="text-gray-400 hover:text-gold transition-colors">Services</a></li>
              <li><a href="#contact" className="text-gray-400 hover:text-gold transition-colors">Contact</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex flex-wrap justify-center md:justify-start gap-4">
              <Link to="/terms" className="text-gray-400 hover:text-gold transition-colors">Terms & Conditions</Link>
              <Link to="/privacy" className="text-gray-400 hover:text-gold transition-colors">Privacy Policy</Link>
              <Link to="/cookies" className="text-gray-400 hover:text-gold transition-colors">Cookie Policy</Link>
            </div>
            <div className="flex flex-col md:flex-row items-center gap-4">
              <p>&copy; {currentYear} EQ Events. All rights reserved.</p>
              <p className="text-gray-400 flex items-center space-x-1">
                <span>Made with</span>
                <Heart size={16} className="text-red-500 fill-current mx-1" />
                <span>by</span>
                <a 
                  href="https://agxfactor.com/" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-gold hover:text-gold/80 transition-colors ml-1"
                >
                  AG X FACTOR
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;