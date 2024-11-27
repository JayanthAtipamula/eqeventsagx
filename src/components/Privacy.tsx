import React from 'react';
import { Phone } from 'lucide-react';

const Privacy = () => {
  return (
    <div className="relative">
      {/* Hero Section - Half Screen */}
      <section className="h-[50vh] relative overflow-hidden">
        <div 
          className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: 'url("https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&q=80")',
          }}
        />
        <div className="absolute inset-0 bg-black/60" />
        <div className="relative h-full flex items-center justify-center text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white">
            Privacy <span className="text-gold">Policy</span>
          </h1>
        </div>
      </section>

      {/* Contact Bar */}
      <div className="bg-gold py-8 px-4 relative z-20">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between text-center md:text-left">
          <div className="mb-4 md:mb-0">
            <h2 className="text-2xl font-semibold text-black">Data Protection</h2>
            <p className="text-black/80 mt-1">Your privacy is important to us</p>
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
              <h2 className="text-3xl font-bold text-gold mb-6">1. Information We Collect</h2>
              <p className="text-gray-300">
                We collect information that you provide directly to us, including names, contact information, and event details when you use our services or contact us.
              </p>

              <h2 className="text-3xl font-bold text-gold mb-6 mt-12">2. How We Use Your Information</h2>
              <p className="text-gray-300">
                We use the information we collect to provide and improve our services, communicate with you, and ensure the best possible event experience.
              </p>

              <h2 className="text-3xl font-bold text-gold mb-6 mt-12">3. Information Sharing</h2>
              <p className="text-gray-300">
                We do not sell or rent your personal information to third parties. We may share information with service providers who assist in our operations.
              </p>

              <h2 className="text-3xl font-bold text-gold mb-6 mt-12">4. Data Security</h2>
              <p className="text-gray-300">
                We implement appropriate security measures to protect your personal information from unauthorized access, alteration, or disclosure.
              </p>

              <h2 className="text-3xl font-bold text-gold mb-6 mt-12">5. Your Rights</h2>
              <p className="text-gray-300">
                You have the right to access, correct, or delete your personal information. Contact us to exercise these rights.
              </p>

              <h2 className="text-3xl font-bold text-gold mb-6 mt-12">6. Cookie Policy</h2>
              <p className="text-gray-300">
                Our website uses cookies to enhance your browsing experience. See our Cookie Policy for more information.
              </p>

              <h2 className="text-3xl font-bold text-gold mb-6 mt-12">7. Updates to Policy</h2>
              <p className="text-gray-300">
                We may update this Privacy Policy from time to time. We will notify you of any material changes by posting the new policy on this page.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Privacy;
