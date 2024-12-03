import React from 'react';

const CookiePolicy = () => {
  return (
    <section className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">Cookie Policy</h2>
          <div className="h-1 w-24 bg-gold mx-auto"></div>
        </div>

        <div className="prose prose-lg prose-invert mx-auto">
          <div className="bg-gray-800 p-8 rounded-lg text-gray-300">
            <h3 className="text-2xl font-semibold text-white mb-6">What Are Cookies</h3>
            <p className="mb-6">
              Cookies are small text files that are stored on your device when you visit our website.
            </p>

            <h3 className="text-2xl font-semibold text-white mb-6">How We Use Cookies</h3>
            <p className="mb-6">
              We use cookies to enhance your browsing experience, analyze site traffic, and personalize content.
            </p>

            <h3 className="text-2xl font-semibold text-white mb-6">Managing Cookies</h3>
            <p>
              You can control and/or delete cookies as you wish through your browser settings.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CookiePolicy; 