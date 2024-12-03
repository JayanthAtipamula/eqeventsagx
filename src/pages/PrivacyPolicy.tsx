import React from 'react';

const PrivacyPolicy = () => {
  return (
    <section className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">Privacy Policy</h2>
          <div className="h-1 w-24 bg-gold mx-auto"></div>
        </div>

        <div className="prose prose-lg prose-invert mx-auto">
          <div className="bg-gray-800 p-8 rounded-lg text-gray-300">
            <h3 className="text-2xl font-semibold text-white mb-6">Information We Collect</h3>
            <p className="mb-6">
              We collect information that you provide directly to us when using our services, including contact details and event preferences.
            </p>

            <h3 className="text-2xl font-semibold text-white mb-6">How We Use Your Information</h3>
            <p className="mb-6">
              Your information is used to provide and improve our services, communicate with you, and ensure the best possible event experience.
            </p>

            <h3 className="text-2xl font-semibold text-white mb-6">Information Sharing</h3>
            <p>
              We do not sell or share your personal information with third parties except as necessary to provide our services.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PrivacyPolicy; 