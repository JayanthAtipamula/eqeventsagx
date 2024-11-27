import React from 'react';
import { Music, Lightbulb, Theater, Mic, Speaker, Camera } from 'lucide-react';
import { Parallax } from 'react-scroll-parallax';

const services = [
  {
    icon: <Music className="w-8 h-8" />,
    title: 'DJ Services',
    description: 'Professional DJs for any event type with customized playlists'
  },
  {
    icon: <Lightbulb className="w-8 h-8" />,
    title: 'Lighting Production',
    description: 'State-of-the-art lighting solutions to transform your venue'
  },
  {
    icon: <Theater className="w-8 h-8" />,
    title: 'Bespoke Staging',
    description: 'Custom stage design and setup for memorable performances'
  },
  {
    icon: <Mic className="w-8 h-8" />,
    title: 'Sound Systems',
    description: 'High-quality audio equipment for crystal clear sound'
  },
  {
    icon: <Speaker className="w-8 h-8" />,
    title: 'Event Production',
    description: 'Full-service event planning and coordination'
  },
  {
    icon: <Camera className="w-8 h-8" />,
    title: 'Visual Effects',
    description: 'Dynamic visual displays and special effects'
  }
];

const Services = () => {
  return (
    <section id="services" className="py-20 bg-black relative">
      <Parallax speed={20} className="relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Our Services</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Delivering exceptional entertainment and production services for events of all sizes
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Parallax
                key={index}
                speed={10}
                translateY={[0, 25]}
                className="bg-gray-800 rounded-lg p-6 transform transition-transform duration-300 hover:scale-105"
              >
                <div className="text-gold mb-4">{service.icon}</div>
                <h3 className="text-xl font-semibold text-white mb-2">{service.title}</h3>
                <p className="text-gray-400">{service.description}</p>
              </Parallax>
            ))}
          </div>
        </div>
      </Parallax>
    </section>
  );
};

export default Services;