import React from 'react';
import { Phone } from 'lucide-react';

const Terms = () => {
  return (
    <div className="relative">
      {/* Hero Section - Half Screen */}
      <section className="h-[50vh] relative overflow-hidden">
        <div 
          className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: 'url("https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&q=80")',
          }}
        />
        <div className="absolute inset-0 bg-black/60" />
        <div className="relative h-full flex items-center justify-center text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white">
            Terms & <span className="text-gold">Conditions</span>
          </h1>
        </div>
      </section>

      {/* Contact Bar */}
      <div className="bg-gold py-8 px-4 relative z-20">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between text-center md:text-left">
          <div className="mb-4 md:mb-0">
            <h2 className="text-2xl font-semibold text-black">Have Questions?</h2>
            <p className="text-black/80 mt-1">Contact us for any clarifications about our terms</p>
          </div>
          <div className="flex items-center space-x-2 text-black">
            <Phone size={24} />
            <span className="text-xl font-semibold">0207 459 4656</span>
          </div>
        </div>
      </div>

      {/* Simple Divider */}
      <div className="h-32 bg-gray-900 relative z-10" />

      {/* Content */}
      <section className="py-20 bg-gray-900 relative z-10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-12">
            <div className="prose prose-lg prose-invert max-w-none">
              <h2 className="text-3xl font-bold text-gold mb-6">1. Website Usage</h2>
              <p className="text-gray-300">
                By accessing and using the EQ Events website, you accept and agree to be bound by these terms and conditions of use.
              </p>

              <h2 className="text-3xl font-bold text-gold mb-6 mt-12">2. Services</h2>
              <p className="text-gray-300">
                EQ Events provides DJ and event production services. The specific details of services will be discussed and agreed upon directly with clients.
              </p>

              <h2 className="text-3xl font-bold text-gold mb-6 mt-12">3. Intellectual Property</h2>
              <p className="text-gray-300">
                All content on this website, including but not limited to text, graphics, logos, images, and software, is the property of EQ Events and is protected by copyright laws.
              </p>

              <h2 className="text-3xl font-bold text-gold mb-6 mt-12">4. Privacy</h2>
              <p className="text-gray-300">
                We respect your privacy and handle all personal information in accordance with UK data protection laws. For more details, please refer to our Privacy Policy.
              </p>

              <h2 className="text-3xl font-bold text-gold mb-6 mt-12">5. Changes to Terms</h2>
              <p className="text-gray-300">
                We may update these terms from time to time. Any changes will be posted on this page.
              </p>

              <h2 className="text-3xl font-bold text-gold mb-6 mt-12">6. Contact Us</h2>
              <p className="text-gray-300">
                For any questions about these terms, please contact us at:<br />
                Email: Contact@eqeventsuk.com<br />
                Phone: 0207 459 4656
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Terms;
