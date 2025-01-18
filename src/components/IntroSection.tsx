import React from 'react';
import { Parallax } from 'react-scroll-parallax';

const IntroSection = () => {
  return (
    <section className="bg-black text-white py-8">
      <div className="container mx-auto px-4">
        <Parallax speed={10}>
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-lg md:text-xl text-gray-300 mb-3">
              With over 15 years of experience in the events industry, we specialize in creating unforgettable experiences through exceptional entertainment and production services.
            </p>
            <p className="text-lg md:text-xl text-gray-300">
              From intimate weddings to large corporate events, our team of professionals ensures every detail is perfect, making your event truly memorable.
            </p>
          </div>
        </Parallax>
      </div>
    </section>
  );
};

export default IntroSection; 