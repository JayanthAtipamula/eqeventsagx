import React from 'react';
import { Lightbulb, Sparkles, Zap, Settings } from 'lucide-react';
import ServiceLayout from './ServiceLayout';

const features = [
  {
    icon: <Lightbulb className="w-6 h-6" />,
    title: 'Ambient Lighting',
    description: 'Create the perfect atmosphere with our professional lighting design'
  },
  {
    icon: <Sparkles className="w-6 h-6" />,
    title: 'Special Effects',
    description: 'Dynamic lighting effects synchronized with your music and key moments'
  },
  {
    icon: <Zap className="w-6 h-6" />,
    title: 'LED Solutions',
    description: 'State-of-the-art LED technology for stunning visual displays'
  },
  {
    icon: <Settings className="w-6 h-6" />,
    title: 'Custom Design',
    description: 'Bespoke lighting schemes tailored to your venue and theme'
  }
];

const LightingProduction = () => {
  return (
    <ServiceLayout>
      <div className="relative">
        <div className="relative h-[40vh] bg-gradient-to-b from-black to-transparent">
          <div className="absolute inset-0 bg-[url('/images/lighting.jpg')] bg-cover bg-center opacity-50" />
          <div className="relative h-full flex items-center justify-center">
            <div className="text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-2">Lighting Production</h1>
              <p className="text-lg md:text-xl max-w-2xl mx-auto px-4">
                Transform your venue with spectacular lighting design
              </p>
            </div>
          </div>
        </div>

        <div className="container mx-auto px-4 py-6">
          <div className="max-w-3xl mx-auto mb-6">
            <h2 className="text-2xl md:text-3xl font-bold mb-3">Professional Lighting Solutions</h2>
            <p className="text-gray-300 mb-2">
              Our lighting production services combine technical expertise with creative design to transform any space.
            </p>
            <p className="text-gray-300">
              From subtle ambient lighting to dynamic effects, our solutions are tailored to complement your event's style.
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
            <h3 className="text-xl font-bold mb-2">Illuminate Your Event</h3>
            <p className="text-gray-300 mb-4">Contact us to discuss your lighting requirements</p>
            <button className="bg-gold text-black px-6 py-2 rounded-full font-semibold hover:bg-white transition-colors duration-300">
              Get in Touch
            </button>
          </div>
        </div>
      </div>
    </ServiceLayout>
  );
};

export default LightingProduction; 