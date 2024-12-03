import React, { useEffect, useRef } from 'react';
import { Phone } from 'lucide-react';

const AboutUs = () => {
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-up');
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: '50px',
      }
    );

    const paragraphs = document.querySelectorAll('.fade-up');
    paragraphs.forEach((el) => observerRef.current?.observe(el));

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, []);

  return (
    <div className="relative">
      {/* Hero Section - Half Screen */}
      <section className="h-[50vh] relative overflow-hidden">
        <div 
          className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: 'url("https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&q=80")',
          }}
        />
        <div className="absolute inset-0 bg-black/60" />
        <div className="relative h-full flex items-center justify-center text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white">
            About Us<span className="text-gold"></span>
          </h1>
        </div>
      </section>

      {/* Contact Bar */}
      <div className="bg-gold py-8 px-4 relative z-20">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between text-center md:text-left">
          <div className="mb-4 md:mb-0">
            <h2 className="text-2xl font-semibold text-black">Let's Talk About Your Event</h2>
            <p className="text-black/80 mt-1">We're here to make your special day unforgettable</p>
          </div>
          <div className="flex items-center space-x-2 text-black">
            <Phone size={24} />
            <span className="text-xl font-semibold">0207 459 4656</span>
          </div>
        </div>
      </div>

      {/* Simple Divider */}
      <div className="h-32 bg-gray-900 relative z-10" />

      {/* About Us Content */}
      <section className="py-20 bg-gray-900 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-4xl font-bold text-white mb-6">About <span className="text-gold">EQ Events UK</span></h2>
              <div className="prose prose-lg prose-invert">
                <p className="text-gray-300">
                  EQ Events UK Limited is a premier event production and entertainment company, specializing in creating extraordinary experiences for corporate events, weddings, and private celebrations. With our state-of-the-art technology and creative expertise, we transform ordinary occasions into unforgettable moments.
                </p>
                
                <h3 className="text-2xl font-bold text-gold mt-8 mb-4">Our Comprehensive Services</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-gray-300">
                  <div>
                    <h4 className="text-xl font-semibold text-white mb-3">Wedding Services</h4>
                    <ul className="list-disc pl-5 space-y-2">
                      <li>Full Service Asian Wedding Audio-Visual</li>
                      <li>Traditional & Contemporary Weddings</li>
                      <li>Destination Weddings</li>
                      <li>Luxury Wedding Productions</li>
                      <li>Wedding Entertainment</li>
                      <li>Wedding Photography & Videography</li>
                      <li>Bespoke Wedding Packages</li>
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="text-xl font-semibold text-white mb-3">Corporate Events</h4>
                    <ul className="list-disc pl-5 space-y-2">
                      <li>Corporate Entertainment</li>
                      <li>Corporate Event Management</li>
                      <li>Event Production Services</li>
                      <li>Corporate Gathering Solutions</li>
                      <li>Video Production</li>
                      <li>Custom Event Design</li>
                    </ul>
                  </div>
                </div>

                <h3 className="text-2xl font-bold text-gold mt-8 mb-4">Technical Excellence</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-gray-300">
                  <div>
                    <h4 className="text-xl font-semibold text-white mb-3">Audio-Visual Services</h4>
                    <ul className="list-disc pl-5 space-y-2">
                      <li>Professional DJ Services</li>
                      <li>Event Lighting Design</li>
                      <li>Intelligent Lighting Systems</li>
                      <li>Video Mapping</li>
                      <li>Live Performance Setup</li>
                      <li>Open Format DJs</li>
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="text-xl font-semibold text-white mb-3">Event Design</h4>
                    <ul className="list-disc pl-5 space-y-2">
                      <li>Custom Set Designs</li>
                      <li>Stage Design & Production</li>
                      <li>Lighting Design</li>
                      <li>Event Planning & Management</li>
                      <li>Bespoke Service Packages</li>
                    </ul>
                  </div>
                </div>

                <p className="text-gray-300 mt-8">
                  At EQ Events UK, we pride ourselves on delivering exceptional service and innovative solutions for every event. Our team of experienced professionals ensures that each project is executed with precision, creativity, and attention to detail, making your vision come to life.
                </p>
              </div>
            </div>

            <div className="space-y-8">
              <div className="bg-gray-800 rounded-lg p-8">
                <h3 className="text-2xl font-bold text-gold mb-4">Why Choose Us</h3>
                <ul className="space-y-4 text-gray-300">
                  <li className="flex items-start">
                    <span className="text-gold mr-2">✓</span>
                    <span>Comprehensive event production services</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-gold mr-2">✓</span>
                    <span>State-of-the-art equipment and technology</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-gold mr-2">✓</span>
                    <span>Experienced and professional team</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-gold mr-2">✓</span>
                    <span>Customized solutions for every event</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-gold mr-2">✓</span>
                    <span>Attention to detail and perfect execution</span>
                  </li>
                </ul>
              </div>

              <div className="bg-gray-800 rounded-lg p-8">
                <h3 className="text-2xl font-bold text-gold mb-4">Our Commitment</h3>
                <p className="text-gray-300">
                  We are committed to creating extraordinary experiences that exceed expectations. From intimate gatherings to grand celebrations, we bring creativity, technical expertise, and professional excellence to every event we produce.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;
