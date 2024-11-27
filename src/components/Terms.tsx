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
            <span className="text-xl font-semibold">+44 123 456 7890</span>
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
              <h2 className="text-3xl font-bold text-gold mb-6">1. Introduction</h2>
              <p className="text-gray-300">
                These Terms and Conditions govern your use of EQ Events' services and website. By accessing or using our services, you agree to be bound by these terms.
              </p>

              <h2 className="text-3xl font-bold text-gold mb-6 mt-12">2. Services</h2>
              <p className="text-gray-300">
                EQ Events provides professional DJ and event production services. The specific details of services will be outlined in individual booking agreements.
              </p>

              <h2 className="text-3xl font-bold text-gold mb-6 mt-12">3. Bookings & Payments</h2>
              <p className="text-gray-300">
                All bookings are subject to availability and confirmation. A deposit may be required to secure your booking date. Full payment terms will be specified in your booking agreement.
              </p>

              <h2 className="text-3xl font-bold text-gold mb-6 mt-12">4. Cancellation Policy</h2>
              <p className="text-gray-300">
                Cancellation policies vary depending on the type of event and notice period. Please refer to your booking agreement for specific terms.
              </p>

              <h2 className="text-3xl font-bold text-gold mb-6 mt-12">5. Equipment & Setup</h2>
              <p className="text-gray-300">
                We provide professional-grade equipment for all events. Specific requirements for setup and venue access should be discussed and agreed upon in advance.
              </p>

              <h2 className="text-3xl font-bold text-gold mb-6 mt-12">6. Liability</h2>
              <p className="text-gray-300">
                EQ Events maintains appropriate insurance coverage. However, we are not liable for circumstances beyond our reasonable control.
              </p>

              <h2 className="text-3xl font-bold text-gold mb-6 mt-12">7. Changes to Terms</h2>
              <p className="text-gray-300">
                We reserve the right to modify these terms at any time. Changes will be effective immediately upon posting to our website.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Terms;
