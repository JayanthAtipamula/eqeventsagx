import React from 'react';
import { Music, Mic, Radio, Users } from 'lucide-react';
import ServiceLayout from './ServiceLayout';

const features = [
  {
    icon: <Music className="w-6 h-6" />,
    title: 'Live Bands',
    description: 'Professional musicians for any genre or style of music'
  },
  {
    icon: <Mic className="w-6 h-6" />,
    title: 'Solo Artists',
    description: 'Talented vocalists and instrumentalists for intimate performances'
  },
  {
    icon: <Radio className="w-6 h-6" />,
    title: 'DJ & Live Mix',
    description: 'Hybrid performances combining live music with DJ sets'
  },
  {
    icon: <Users className="w-6 h-6" />,
    title: 'Interactive Shows',
    description: 'Engaging performances that involve your guests'
  }
];

const LiveEntertainment = () => {
  return (
    <ServiceLayout>
      <div className="relative">
        <div className="relative h-[40vh] bg-gradient-to-b from-black to-transparent">
          <div className="absolute inset-0 bg-[url('/images/live-entertainment.jpg')] bg-cover bg-center opacity-50" />
          <div className="relative h-full flex items-center justify-center">
            <div className="text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-2">Live Entertainment</h1>
              <p className="text-lg md:text-xl max-w-2xl mx-auto px-4">
                Professional Live Music & Entertainment Solutions
              </p>
            </div>
          </div>
        </div>

        <div className="container mx-auto px-4 py-4">
          <div className="max-w-3xl mx-auto mb-4">
            <h2 className="text-2xl md:text-3xl font-bold mb-2">Live Music Excellence</h2>
            <p className="text-gray-300 mb-1">
              Our live entertainment options bring an extra dimension to your event. From sophisticated jazz trios to high-energy party bands, we curate the perfect live music experience to match your event's atmosphere.
            </p>
            <p className="text-gray-300">
              Each of our performers is carefully selected for their professionalism, versatility, and ability to engage with audiences, ensuring your entertainment creates lasting memories.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-4">
            {features.map((feature, index) => (
              <div key={index} className="bg-gray-900 p-3 rounded-lg">
                <div className="text-gold mb-1">{feature.icon}</div>
                <h3 className="text-lg font-semibold mb-1">{feature.title}</h3>
                <p className="text-gray-400 text-sm">{feature.description}</p>
              </div>
            ))}
          </div>

          <div className="text-center">
            <h3 className="text-xl font-bold mb-1">Book Live Entertainment</h3>
            <p className="text-gray-300 mb-3">Discover our range of live entertainment options</p>
            <button className="bg-gold text-black px-6 py-2 rounded-full font-semibold hover:bg-white transition-colors duration-300">
              Get in Touch
            </button>
          </div>
        </div>
      </div>
    </ServiceLayout>
  );
};

export default LiveEntertainment; 