import React from 'react';
import { Parallax } from 'react-scroll-parallax';
import { Square, Sparkles, Layout, Maximize } from 'lucide-react';

const features = [
  {
    icon: <Square className="w-6 h-6" />,
    title: 'LED Dancefloors',
    description: 'Interactive LED floors with customizable patterns and colors'
  },
  {
    icon: <Sparkles className="w-6 h-6" />,
    title: 'Classic Styles',
    description: 'Traditional wooden and starlit dancefloors for elegant events'
  },
  {
    icon: <Layout className="w-6 h-6" />,
    title: 'Custom Sizes',
    description: 'Flexible sizing options to suit your venue and guest count'
  },
  {
    icon: <Maximize className="w-6 h-6" />,
    title: 'Professional Setup',
    description: 'Expert installation and removal with minimal disruption'
  }
];

const Dancefloors = () => {
  return (
    <div className="min-h-screen bg-black text-white">
      <div className="relative h-[40vh] bg-gradient-to-b from-black to-transparent">
        <div className="absolute inset-0 bg-[url('/images/dancefloor.jpg')] bg-cover bg-center opacity-50" />
        <div className="relative h-full flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-2">Dancefloors</h1>
            <p className="text-lg md:text-xl max-w-2xl mx-auto px-4">
              Create the perfect space for your celebration
            </p>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-6">
        <Parallax speed={10}>
          <div className="max-w-3xl mx-auto mb-6">
            <h2 className="text-2xl md:text-3xl font-bold mb-3">Premium Dancefloor Solutions</h2>
            <p className="text-gray-300 mb-2">
              From stunning LED displays to elegant traditional styles, our dancefloors provide the perfect centerpiece for your event. Each installation is carefully planned and executed to ensure maximum impact and safety.
            </p>
            <p className="text-gray-300">
              Our range includes the latest in interactive LED technology, classic wooden floors, and stunning starlit options, all maintained to the highest standards and installed by our expert team.
            </p>
          </div>
        </Parallax>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
          {features.map((feature, index) => (
            <Parallax key={index} speed={5}>
              <div className="bg-gray-900 p-4 rounded-lg">
                <div className="text-gold mb-2">{feature.icon}</div>
                <h3 className="text-lg font-semibold mb-1">{feature.title}</h3>
                <p className="text-gray-400 text-sm">{feature.description}</p>
              </div>
            </Parallax>
          ))}
        </div>

        <Parallax speed={5}>
          <div className="text-center">
            <h3 className="text-xl font-bold mb-2">Choose Your Perfect Dancefloor</h3>
            <p className="text-gray-300 mb-4">Let's discuss the ideal dancefloor for your event</p>
            <button className="bg-gold text-black px-6 py-2 rounded-full font-semibold hover:bg-white transition-colors duration-300">
              Get in Touch
            </button>
          </div>
        </Parallax>
      </div>
    </div>
  );
};

export default Dancefloors; 