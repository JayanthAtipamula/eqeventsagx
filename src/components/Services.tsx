import React from 'react';
import { Music, Globe, Lightbulb, Square, Cog, Sparkles, Mic, Gift, Building } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Parallax } from 'react-scroll-parallax';

const services = [
  {
    icon: <Music className="w-8 h-8" />,
    title: 'UK Weddings',
    description: 'Professional DJ services for your perfect UK wedding celebration',
    path: '/services/uk-weddings'
  },
  {
    icon: <Globe className="w-8 h-8" />,
    title: 'Destination Weddings',
    description: 'Bringing exceptional entertainment to your dream destination wedding',
    path: '/services/destination-weddings'
  },
  {
    icon: <Lightbulb className="w-8 h-8" />,
    title: 'Lighting Production',
    description: 'State-of-the-art lighting solutions to transform your venue',
    path: '/services/lighting-production'
  },
  {
    icon: <Square className="w-8 h-8" />,
    title: 'Dancefloors',
    description: 'Custom LED and traditional dancefloors for any occasion',
    path: '/services/dancefloors'
  },
  {
    icon: <Cog className="w-8 h-8" />,
    title: 'Events Production',
    description: 'Full-service event planning and technical production',
    path: '/services/events-production'
  },
  {
    icon: <Sparkles className="w-8 h-8" />,
    title: 'Bespoke Services',
    description: 'Customized solutions tailored to your unique requirements',
    path: '/services/bespoke-services'
  },
  {
    icon: <Mic className="w-8 h-8" />,
    title: 'Live Entertainment',
    description: 'Professional live music and entertainment services',
    path: '/services/live-entertainment'
  },
  {
    icon: <Gift className="w-8 h-8" />,
    title: 'Wedding Extras',
    description: 'Additional services to make your day even more special',
    path: '/services/wedding-extras'
  },
  {
    icon: <Building className="w-8 h-8" />,
    title: 'Corporate',
    description: 'Professional event solutions for corporate clients',
    path: '/services/corporate'
  }
];

const Services = () => {
  return (
    <section id="services" className="py-16 md:py-24 bg-black relative">
      <Parallax speed={20} className="relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Our Services</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Delivering exceptional entertainment and production services for events of all sizes
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Link 
                to={service.path}
                key={index}
              >
                <Parallax
                  speed={10}
                  translateY={[0, 25]}
                  className="bg-gray-800 rounded-lg p-6 transform transition-transform duration-300 hover:scale-105"
                >
                  <div className="text-gold mb-4">{service.icon}</div>
                  <h3 className="text-xl font-semibold text-white mb-2">{service.title}</h3>
                  <p className="text-gray-400">{service.description}</p>
                </Parallax>
              </Link>
            ))}
          </div>
        </div>
      </Parallax>
    </section>
  );
};

export default Services;