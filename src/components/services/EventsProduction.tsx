import React from 'react';
import { Cog, Users, Calendar, Headphones } from 'lucide-react';
import ServiceLayout from './ServiceLayout';

const features = [
  {
    icon: <Cog className="w-6 h-6" />,
    title: 'Technical Production',
    description: 'Complete audio-visual and technical event management'
  },
  {
    icon: <Users className="w-6 h-6" />,
    title: 'Event Planning',
    description: 'Comprehensive event coordination and logistics management'
  },
  {
    icon: <Calendar className="w-6 h-6" />,
    title: 'Timeline Management',
    description: 'Detailed scheduling and seamless execution of your event'
  },
  {
    icon: <Headphones className="w-6 h-6" />,
    title: 'Sound Engineering',
    description: 'Professional sound setup and management throughout your event'
  }
];

const EventsProduction = () => {
  return (
    <ServiceLayout>
      <div className="relative">
        <div className="relative h-[40vh] bg-gradient-to-b from-black to-transparent">
          <div className="absolute inset-0 bg-[url('/images/events-production.jpg')] bg-cover bg-center opacity-50" />
          <div className="relative h-full flex items-center justify-center">
            <div className="text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-2">Events Production</h1>
              <p className="text-lg md:text-xl max-w-2xl mx-auto px-4">
                Complete Technical and Production Solutions
              </p>
            </div>
          </div>
        </div>

        <div className="container mx-auto px-4 py-6">
          <div className="max-w-3xl mx-auto mb-6">
            <h2 className="text-2xl md:text-3xl font-bold mb-3">Comprehensive Event Solutions</h2>
            <p className="text-gray-300 mb-2">
              Our events production team brings together technical expertise and creative vision to deliver exceptional events. From intimate gatherings to large-scale productions, we handle every technical aspect to ensure flawless execution.
            </p>
            <p className="text-gray-300">
              We combine state-of-the-art equipment with experienced professionals to create seamless, memorable events that exceed expectations. Our team manages all technical elements, allowing you to focus on enjoying your event.
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
            <h3 className="text-xl font-bold mb-2">Ready to Plan Your Event?</h3>
            <p className="text-gray-300 mb-4">Contact us to discuss your event production needs</p>
            <button className="bg-gold text-black px-6 py-2 rounded-full font-semibold hover:bg-white transition-colors duration-300">
              Get in Touch
            </button>
          </div>
        </div>
      </div>
    </ServiceLayout>
  );
};

export default EventsProduction; 