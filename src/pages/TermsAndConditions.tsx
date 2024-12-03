import React from 'react';

const TermsAndConditions = () => {
  return (
    <section className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">Terms & Conditions</h2>
          <div className="h-1 w-24 bg-gold mx-auto"></div>
        </div>

        <div className="prose prose-lg prose-invert mx-auto">
          <div className="bg-gray-800 p-8 rounded-lg text-gray-300">
            <h3 className="text-2xl font-semibold text-white mb-6">1. Acceptance of Terms</h3>
            <p className="mb-6">
              By accessing and using EQ Events' services, you agree to be bound by these Terms and Conditions.
            </p>

            <h3 className="text-2xl font-semibold text-white mb-6">2. Services</h3>
            <p className="mb-6">
              EQ Events provides event production and music services. All services are subject to availability and confirmation.
            </p>

            <h3 className="text-2xl font-semibold text-white mb-6">3. Booking and Cancellation</h3>
            <p className="mb-6">
              Bookings are confirmed upon receipt of a deposit. Cancellation policies vary by service type and timing.
            </p>

            <h3 className="text-2xl font-semibold text-white mb-6">4. Payment Terms</h3>
            <p>
              Payment schedules and methods will be outlined in individual service agreements.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TermsAndConditions; 