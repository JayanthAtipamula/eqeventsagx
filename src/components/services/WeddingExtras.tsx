import React from 'react';
import { Parallax } from 'react-scroll-parallax';
import { Gift, Camera, Sparkles, Heart } from 'lucide-react';

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
    <div className="min-h-screen bg-black text-white">
      <div className="relative h-[35vh] bg-gradient-to-b from-black to-transparent">
        <div className="absolute inset-0 bg-[url('/images/wedding-extras.jpg')] bg-cover bg-center opacity-50" />
        <div className="relative h-full flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-1">Wedding Extras</h1>
            <p className="text-lg md:text-xl max-w-2xl mx-auto px-4">
              Additional touches to make your day even more special
            </p>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-4">
        <Parallax speed={10}>
          <div className="max-w-3xl mx-auto mb-4">
            <h2 className="text-2xl md:text-3xl font-bold mb-2">Enhance Your Celebration</h2>
            <p className="text-gray-300 mb-1">
              Add those extra special touches to your wedding day with our range of additional services. From interactive entertainment to atmospheric effects, we have everything you need to create unforgettable moments.
            </p>
            <p className="text-gray-300">
              Each extra can be customized to match your wedding theme and style, ensuring a cohesive and memorable celebration.
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
            <h3 className="text-xl font-bold mb-1">Add Something Special</h3>
            <p className="text-gray-300 mb-3">Explore our range of wedding extras</p>
            <button className="bg-gold text-black px-6 py-2 rounded-full font-semibold hover:bg-white transition-colors duration-300">
              Get in Touch
            </button>
          </div>
        </Parallax>
      </div>
    </div>
  );
};

export default WeddingExtras; 