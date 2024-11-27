import React from 'react';
import { MessageCircle } from 'lucide-react';

const CallToAction = () => {
  return (
    <section className="bg-gold py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-4xl font-bold text-white mb-6">Let's Get Creative</h2>
        <p className="text-white/90 text-xl mb-8 max-w-2xl mx-auto">
          Ready to make your event extraordinary? Book a free consultation with our team today.
        </p>
        <a
          href="https://wa.me/1234567890"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center bg-white text-gold px-8 py-3 rounded-full text-lg font-semibold hover:bg-gray-100 transition-colors duration-300"
        >
          <MessageCircle className="mr-2" />
          Chat on WhatsApp
        </a>
      </div>
    </section>
  );
};

export default CallToAction;