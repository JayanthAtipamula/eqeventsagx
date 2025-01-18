import React from 'react';
import { Parallax } from 'react-scroll-parallax';
import { Sparkles, Palette, Wand2, Crown } from 'lucide-react';

const features = [
  {
    icon: <Crown className="w-6 h-6" />,
    title: 'Luxury Service',
    description: 'Premium, personalized entertainment solutions for discerning clients'
  },
  {
    icon: <Palette className="w-6 h-6" />,
    title: 'Custom Design',
    description: 'Tailored entertainment packages designed around your vision'
  },
  {
    icon: <Wand2 className="w-6 h-6" />,
    title: 'Special Requests',
    description: 'Unique entertainment elements crafted for your specific needs'
  },
  {
    icon: <Sparkles className="w-6 h-6" />,
    title: 'Exclusive Options',
    description: 'Access to our premium range of entertainment services'
  }
];

const BespokeServices = () => {
  return (
    <div className="min-h-screen bg-black text-white">
      <div className="relative h-[40vh] bg-gradient-to-b from-black to-transparent">
        <div className="absolute inset-0 bg-[url('/images/bespoke-services.jpg')] bg-cover bg-center opacity-50" />
        <div className="relative h-full flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-2">Bespoke Services</h1>
            <p className="text-lg md:text-xl max-w-2xl mx-auto px-4">
              Customized entertainment solutions for unique events
            </p>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-6">
        <Parallax speed={10}>
          <div className="max-w-3xl mx-auto mb-6">
            <h2 className="text-2xl md:text-3xl font-bold mb-3">Tailored to Your Vision</h2>
            <p className="text-gray-300 mb-2">
              Our bespoke services are designed for clients who seek something extraordinary. We work closely with you to understand your unique requirements and create custom entertainment solutions that perfectly match your vision.
            </p>
            <p className="text-gray-300">
              From exclusive DJ performances to specialized lighting designs and unique entertainment elements, we craft every detail to ensure your event stands out with distinctive style and elegance.
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
            <h3 className="text-xl font-bold mb-2">Create Something Unique</h3>
            <p className="text-gray-300 mb-4">Let's discuss your vision for a truly bespoke event</p>
            <button className="bg-gold text-black px-6 py-2 rounded-full font-semibold hover:bg-white transition-colors duration-300">
              Get in Touch
            </button>
          </div>
        </Parallax>
      </div>
    </div>
  );
};

export default BespokeServices; 