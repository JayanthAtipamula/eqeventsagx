import React from 'react';
import { Building, Briefcase, Target, Award } from 'lucide-react';
import ServiceLayout from './ServiceLayout';

const features = [
  {
    icon: <Building className="w-6 h-6" />,
    title: 'Corporate Events',
    description: 'Professional entertainment for business functions and galas'
  },
  {
    icon: <Briefcase className="w-6 h-6" />,
    title: 'Team Building',
    description: 'Interactive entertainment solutions for company events'
  },
  {
    icon: <Target className="w-6 h-6" />,
    title: 'Product Launches',
    description: 'Impactful audio-visual solutions for product presentations'
  },
  {
    icon: <Award className="w-6 h-6" />,
    title: 'Award Ceremonies',
    description: 'Professional production for corporate award shows'
  }
];

const Corporate = () => {
  return (
    <ServiceLayout>
      <div className="relative">
        <div className="relative h-[40vh] bg-gradient-to-b from-black to-transparent">
          <div className="absolute inset-0 bg-[url('/images/corporate.jpg')] bg-cover bg-center opacity-50" />
          <div className="relative h-full flex items-center justify-center">
            <div className="text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-2">Corporate Events</h1>
              <p className="text-lg md:text-xl max-w-2xl mx-auto px-4">
                Professional Entertainment Solutions for Business Events
              </p>
            </div>
          </div>
        </div>

        <div className="container mx-auto px-4 py-6">
          <div className="max-w-3xl mx-auto mb-6">
            <h2 className="text-2xl md:text-3xl font-bold mb-3">Business Event Excellence</h2>
            <p className="text-gray-300 mb-2">
              From corporate galas to product launches, we deliver professional entertainment that aligns with your brand.
            </p>
            <p className="text-gray-300">
              Our corporate solutions combine technical expertise with polished presentation for impactful events.
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
            <h3 className="text-xl font-bold mb-2">Plan Your Corporate Event</h3>
            <p className="text-gray-300 mb-4">Contact us to discuss your business event requirements</p>
            <button className="bg-gold text-black px-6 py-2 rounded-full font-semibold hover:bg-white transition-colors duration-300">
              Get in Touch
            </button>
          </div>
        </div>
      </div>
    </ServiceLayout>
  );
};

export default Corporate; 