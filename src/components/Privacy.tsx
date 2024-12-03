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
              <h2 className="text-3xl font-bold text-gold mb-6">1. Overview</h2>
              <p className="text-gray-300">
                This Privacy Policy explains how EQ Events collects, uses, and protects your personal information. We are committed to ensuring your privacy is protected in accordance with UK data protection laws.
              </p>

              <h2 className="text-3xl font-bold text-gold mb-6 mt-12">2. Information We Collect</h2>
              <p className="text-gray-300">
                We may collect the following information:
              </p>
              <ul className="list-disc pl-6 mt-4 text-gray-300">
                <li>Name and contact details</li>
                <li>Event details and preferences</li>
                <li>Payment information</li>
                <li>Communication preferences</li>
                <li>Website usage information</li>
              </ul>

              <h2 className="text-3xl font-bold text-gold mb-6 mt-12">3. How We Use Your Information</h2>
              <p className="text-gray-300">
                Your information helps us to:
              </p>
              <ul className="list-disc pl-6 mt-4 text-gray-300">
                <li>Provide our DJ and event services</li>
                <li>Process your bookings</li>
                <li>Send you important updates about your event</li>
                <li>Improve our services</li>
                <li>Respond to your inquiries</li>
              </ul>

              <h2 className="text-3xl font-bold text-gold mb-6 mt-12">4. Data Storage</h2>
              <p className="text-gray-300">
                We keep your information only for as long as necessary to:
              </p>
              <ul className="list-disc pl-6 mt-4 text-gray-300">
                <li>Provide our services to you</li>
                <li>Comply with legal requirements</li>
                <li>Resolve any disputes</li>
              </ul>

              <h2 className="text-3xl font-bold text-gold mb-6 mt-12">5. Your Rights</h2>
              <p className="text-gray-300">
                Under data protection laws, you have the right to:
              </p>
              <ul className="list-disc pl-6 mt-4 text-gray-300">
                <li>Request access to your personal data</li>
                <li>Request correction of your personal data</li>
                <li>Request erasure of your personal data</li>
                <li>Object to processing of your personal data</li>
                <li>Request restriction of processing your personal data</li>
              </ul>

              <h2 className="text-3xl font-bold text-gold mb-6 mt-12">6. Website Usage</h2>
              <p className="text-gray-300">
                Our website uses cookies and similar technologies to enhance your browsing experience. You can control cookies through your browser settings. For more information, please see our Cookie Policy.
              </p>

              <h2 className="text-3xl font-bold text-gold mb-6 mt-12">7. Marketing Communications</h2>
              <p className="text-gray-300">
                If you have agreed to receive marketing communications, you may opt-out at any time. We will not share your information for marketing purposes with external companies.
              </p>

              <h2 className="text-3xl font-bold text-gold mb-6 mt-12">8. Changes to This Policy</h2>
              <p className="text-gray-300">
                We may update this policy from time to time by publishing a new version on our website. You should check this page occasionally to ensure you are happy with any changes.
              </p>

              <h2 className="text-3xl font-bold text-gold mb-6 mt-12">9. Contact Information</h2>
              <p className="text-gray-300">
                For any questions about this Privacy Policy, please contact us:<br />
                Email: Contact@eqeventsuk.com<br />
                Phone: 0207 459 4656
              </p>

              <p className="text-gray-300 mt-8">
                Last updated: {new Date().toLocaleDateString('en-GB')}
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Privacy;
