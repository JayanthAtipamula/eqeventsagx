import React from 'react';
import { Music, Star, Clock, Users } from 'lucide-react';
import ServiceLayout from './ServiceLayout';

const features = [
  {
    icon: <Music className="w-6 h-6" />,
    title: 'Professional DJs',
    description: 'Experienced wedding DJs who know how to read the crowd and keep your dance floor filled'
  },
  {
    icon: <Star className="w-6 h-6" />,
    title: 'Personalized Service',
    description: 'Custom playlists and music selection tailored to your preferences'
  },
  {
    icon: <Clock className="w-6 h-6" />,
    title: 'Full Day Coverage',
    description: 'From ceremony to last dance, we provide complete musical coverage'
  },
  {
    icon: <Users className="w-6 h-6" />,
    title: 'Guest Interaction',
    description: 'Professional MCs to coordinate with guests and make announcements'
  }
];

const UKWeddings = () => {
  return (
    <ServiceLayout>
      <div className="relative">
        <div className="relative h-[40vh] bg-gradient-to-b from-black to-transparent">
          <div className="absolute inset-0 bg-[url('/images/wedding-dj.jpg')] bg-cover bg-center opacity-50" />
          <div className="relative h-full flex items-center justify-center">
            <div className="text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-2">UK Weddings</h1>
              <p className="text-lg md:text-xl max-w-2xl mx-auto px-4">
                Creating unforgettable moments for your special day
              </p>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="container mx-auto px-4 py-6">
          <div className="max-w-3xl mx-auto mb-6">
            <h2 className="text-2xl md:text-3xl font-bold mb-3">Your Perfect Wedding Entertainment</h2>
            <p className="text-gray-300 mb-2">
              With over 15 years of experience in wedding entertainment, we understand that your wedding day is one of the most important days of your life. Our professional DJs and entertainment services are designed to make your celebration truly special.
            </p>
            <p className="text-gray-300">
              From the moment your guests arrive until the last dance, we ensure seamless musical entertainment that reflects your style and keeps your dance floor filled with joy and energy.
            </p>
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
            {features.map((feature, index) => (
              <div key={index} className="bg-gray-900 p-4 rounded-lg">
                <div className="text-gold mb-2">{feature.icon}</div>
                <h3 className="text-lg font-semibold mb-1">{feature.title}</h3>
                <p className="text-gray-400 text-sm">{feature.description}</p>
              </div>
            ))}
          </div>

          {/* Call to Action */}
          <div className="text-center">
            <h3 className="text-xl font-bold mb-2">Ready to Plan Your Wedding Entertainment?</h3>
            <p className="text-gray-300 mb-4">Contact us today to discuss your wedding plans</p>
            <button className="bg-gold text-black px-6 py-2 rounded-full font-semibold hover:bg-white transition-colors duration-300">
              Get in Touch
            </button>
          </div>
        </div>
      </div>
    </ServiceLayout>
  );
};

export default UKWeddings; 