import React from 'react';
import { Gift, Camera, Sparkles, Heart } from 'lucide-react';
import ServiceLayout from './ServiceLayout';

const features = [
  {
    icon: <Camera className="w-6 h-6" />,
    title: 'Photo Booths',
    description: 'Fun and interactive photo experiences with instant prints'
  },
  {
    icon: <Sparkles className="w-6 h-6" />,
    title: 'Special Effects',
    description: 'Fog machines, sparklers, and other atmospheric effects'
  },
  {
    icon: <Gift className="w-6 h-6" />,
    title: 'Props & Accessories',
    description: 'Wide selection of props and party accessories'
  },
  {
    icon: <Heart className="w-6 h-6" />,
    title: 'Custom Additions',
    description: 'Personalized touches to make your wedding unique'
  }
];

const WeddingExtras = () => {
  return (
    <ServiceLayout>
      <div className="relative">
        <div className="relative h-[40vh] bg-gradient-to-b from-black to-transparent">
          <div className="absolute inset-0 bg-[url('/images/wedding-extras.jpg')] bg-cover bg-center opacity-50" />
          <div className="relative h-full flex items-center justify-center">
            <div className="text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-2">Wedding Extras</h1>
              <p className="text-lg md:text-xl max-w-2xl mx-auto px-4">
                Enhance Your Special Day with Premium Add-ons
              </p>
            </div>
          </div>
        </div>

        <div className="container mx-auto px-4 py-6">
          <div className="max-w-3xl mx-auto mb-6">
            <h2 className="text-2xl md:text-3xl font-bold mb-3">Extra Special Touches</h2>
            <p className="text-gray-300 mb-2">
              Add those perfect finishing touches to make your wedding truly unique and memorable.
            </p>
            <p className="text-gray-300">
              From photo booths to special effects, we offer a range of premium extras to enhance your celebration.
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
            <h3 className="text-xl font-bold mb-2">Add Something Special</h3>
            <p className="text-gray-300 mb-4">Explore our range of wedding extras</p>
            <button className="bg-gold text-black px-6 py-2 rounded-full font-semibold hover:bg-white transition-colors duration-300">
              Get in Touch
            </button>
          </div>
        </div>
      </div>
    </ServiceLayout>
  );
};

export default WeddingExtras; 