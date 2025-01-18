import React from 'react';
import { Globe, Sun, Plane, Heart } from 'lucide-react';
import ServiceLayout from './ServiceLayout';

const features = [
  {
    icon: <Globe className="w-6 h-6" />,
    title: 'Worldwide Service',
    description: 'Professional DJ services available at any destination worldwide'
  },
  {
    icon: <Sun className="w-6 h-6" />,
    title: 'Local Knowledge',
    description: 'Expert knowledge of destination venues and local requirements'
  },
  {
    icon: <Plane className="w-6 h-6" />,
    title: 'Travel Logistics',
    description: 'Complete management of equipment transportation and setup'
  },
  {
    icon: <Heart className="w-6 h-6" />,
    title: 'Cultural Integration',
    description: 'Incorporating local music and traditions into your celebration'
  }
];

const DestinationWeddings = () => {
  return (
    <ServiceLayout>
      <div className="relative">
        <div className="relative h-[40vh] bg-gradient-to-b from-black to-transparent">
          <div className="absolute inset-0 bg-[url('/images/destination-wedding.jpg')] bg-cover bg-center opacity-50" />
          <div className="relative h-full flex items-center justify-center">
            <div className="text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-2">Destination Weddings</h1>
              <p className="text-lg md:text-xl max-w-2xl mx-auto px-4">
                Bringing exceptional entertainment to your dream location
              </p>
            </div>
          </div>
        </div>

        <div className="container mx-auto px-4 py-6">
          <div className="max-w-3xl mx-auto mb-6">
            <h2 className="text-2xl md:text-3xl font-bold mb-3">International Wedding Specialists</h2>
            <p className="text-gray-300 mb-2">
              From Mediterranean beaches to Alpine resorts, we bring our premium DJ and entertainment services to your chosen destination.
            </p>
            <p className="text-gray-300">
              We blend international hits with local favorites, creating a unique atmosphere that celebrates both your style and your chosen destination's culture.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
            {features.map((feature, index) => (
              <div key={index} className="bg-gray-900 p-4 rounded-lg">
                <div className="text-gold mb-2">{feature.icon}</div>
                <h3 className="text-lg font-semibold mb-1">{feature.title}</h3>
                <p className="text-gray-400 text-sm">{feature.description}</p>
              </div>
            ))}
          </div>

          <div className="text-center">
            <h3 className="text-xl font-bold mb-2">Plan Your Destination Wedding</h3>
            <p className="text-gray-300 mb-4">Let's discuss bringing our services to your dream location</p>
            <button className="bg-gold text-black px-6 py-2 rounded-full font-semibold hover:bg-white transition-colors duration-300">
              Get in Touch
            </button>
          </div>
        </div>
      </div>
    </ServiceLayout>
  );
};

export default DestinationWeddings; 