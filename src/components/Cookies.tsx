import React from 'react';
import { Phone } from 'lucide-react';

const Cookies = () => {
  return (
    <div className="relative">
      {/* Hero Section - Half Screen */}
      <section className="h-[50vh] relative overflow-hidden">
        <div 
          className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: 'url("https://images.unsplash.com/photo-1515879218367-8466d910aaa4?auto=format&fit=crop&q=80")',
          }}
        />
        <div className="absolute inset-0 bg-black/60" />
        <div className="relative h-full flex items-center justify-center text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white">
            Cookie <span className="text-gold">Policy</span>
          </h1>
        </div>
      </section>

      {/* Contact Bar */}
      <div className="bg-gold py-8 px-4 relative z-20">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between text-center md:text-left">
          <div className="mb-4 md:mb-0">
            <h2 className="text-2xl font-semibold text-black">Cookie Settings</h2>
            <p className="text-black/80 mt-1">Manage your cookie preferences</p>
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
              <h2 className="text-3xl font-bold text-gold mb-6">1. What Are Cookies</h2>
              <p className="text-gray-300">
                Cookies are small text files that are placed on your device when you visit our website. They help us provide you with a better website experience and understand how you use our site.
              </p>

              <h2 className="text-3xl font-bold text-gold mb-6 mt-12">2. Types of Cookies We Use</h2>
              <p className="text-gray-300">
                We use essential cookies for basic website functionality, analytics cookies to understand user behavior, and preference cookies to remember your settings.
              </p>

              <h2 className="text-3xl font-bold text-gold mb-6 mt-12">3. Essential Cookies</h2>
              <p className="text-gray-300">
                These cookies are necessary for the website to function properly. They enable basic functions like page navigation and access to secure areas of the website.
              </p>

              <h2 className="text-3xl font-bold text-gold mb-6 mt-12">4. Analytics Cookies</h2>
              <p className="text-gray-300">
                We use analytics cookies to understand how visitors interact with our website. This helps us improve our website's functionality and content.
              </p>

              <h2 className="text-3xl font-bold text-gold mb-6 mt-12">5. Marketing Cookies</h2>
              <p className="text-gray-300">
                These cookies track your online activity to help advertisers deliver more relevant advertising or to limit how many times you see an ad.
              </p>

              <h2 className="text-3xl font-bold text-gold mb-6 mt-12">6. Managing Cookies</h2>
              <p className="text-gray-300">
                You can control and/or delete cookies as you wish. You can delete all cookies that are already on your computer and you can set most browsers to prevent them from being placed.
              </p>

              <h2 className="text-3xl font-bold text-gold mb-6 mt-12">7. Updates to Policy</h2>
              <p className="text-gray-300">
                We may update this Cookie Policy from time to time. Any changes will be posted on this page with an updated revision date.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Cookies;
