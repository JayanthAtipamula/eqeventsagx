import React from 'react';
import { Parallax } from 'react-scroll-parallax';
import { Building, Briefcase, Target, Award } from 'lucide-react';

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
    <div className="min-h-screen bg-black text-white">
      <div className="relative h-[35vh] bg-gradient-to-b from-black to-transparent">
        <div className="absolute inset-0 bg-[url('/images/corporate-events.jpg')] bg-cover bg-center opacity-50" />
        <div className="relative h-full flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-1">Corporate Events</h1>
            <p className="text-lg md:text-xl max-w-2xl mx-auto px-4">
              Professional entertainment solutions for business events
            </p>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-4">
        <Parallax speed={10}>
          <div className="max-w-3xl mx-auto mb-4">
            <h2 className="text-2xl md:text-3xl font-bold mb-2">Business Event Excellence</h2>
            <p className="text-gray-300 mb-1">
              We understand the unique requirements of corporate events and deliver professional, polished entertainment solutions. From conferences to award ceremonies, we ensure your business event achieves its objectives while maintaining the highest standards.
            </p>
            <p className="text-gray-300">
              Our corporate services combine technical expertise with business acumen to create engaging, professional events that reflect your company's values and brand.
            </p>
          </div>
        </Parallax>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-4">
          {features.map((feature, index) => (
            <Parallax key={index} speed={5}>
              <div className="bg-gray-900 p-3 rounded-lg">
                <div className="text-gold mb-1">{feature.icon}</div>
                <h3 className="text-lg font-semibold mb-1">{feature.title}</h3>
                <p className="text-gray-400 text-sm">{feature.description}</p>
              </div>
            </Parallax>
          ))}
        </div>

        <Parallax speed={5}>
          <div className="text-center">
            <h3 className="text-xl font-bold mb-1">Plan Your Corporate Event</h3>
            <p className="text-gray-300 mb-3">Contact us to discuss your business event requirements</p>
            <button className="bg-gold text-black px-6 py-2 rounded-full font-semibold hover:bg-white transition-colors duration-300">
              Get in Touch
            </button>
          </div>
        </Parallax>
      </div>
    </div>
  );
};

export default Corporate; 