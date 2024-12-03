import React from 'react';

const About = () => {
  return (
    <section className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">About Us</h2>
          <div className="h-1 w-24 bg-gold mx-auto"></div>
        </div>

        <div className="prose prose-lg prose-invert mx-auto">
          <div className="bg-gray-800 p-8 rounded-lg text-gray-300">
            <h3 className="text-2xl font-semibold text-white mb-6">Our Story</h3>
            <p className="mb-6">
              EQ Events has been at the forefront of event production and music services, 
              delivering exceptional experiences that leave lasting impressions.
            </p>

            <h3 className="text-2xl font-semibold text-white mb-6">Our Mission</h3>
            <p className="mb-6">
              We strive to create unforgettable moments through innovative event production 
              and outstanding musical performances, exceeding our clients' expectations.
            </p>

            <h3 className="text-2xl font-semibold text-white mb-6">Our Values</h3>
            <p>
              Excellence, creativity, and reliability are at the core of everything we do. 
              We believe in building lasting relationships with our clients through 
              exceptional service and attention to detail.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About; 