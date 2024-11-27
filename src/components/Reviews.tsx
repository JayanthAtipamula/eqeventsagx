import React, { useEffect, useRef } from 'react';
import { Phone, Quote } from 'lucide-react';

interface Review {
  text: string;
  author: string;
  role: string;
  event: string;
}

const reviews: Review[] = [
  {
    text: "EQ Events transformed our wedding into an absolute dream. The DJ read the crowd perfectly, and the music selection was spot on. Every single guest commented on how amazing the atmosphere was!",
    author: "Sarah & James Thompson",
    role: "Bride & Groom",
    event: "Wedding Reception"
  },
  {
    text: "We hired EQ Events for our corporate Christmas party, and they exceeded all expectations. The sound and lighting setup was professional, and they kept everyone dancing all night long.",
    author: "Michael Anderson",
    role: "Event Coordinator",
    event: "Corporate Event"
  },
  {
    text: "The team at EQ Events made my daughter's sweet 16 unforgettable. They were so attentive to her music preferences and created the perfect party atmosphere. Highly recommended!",
    author: "Emma Richardson",
    role: "Parent",
    event: "Sweet 16 Party"
  },
  {
    text: "As a venue owner, I've worked with many DJ services, but EQ Events stands out for their professionalism and reliability. They're now our go-to recommendation for all our clients.",
    author: "David Wilson",
    role: "Venue Owner",
    event: "Multiple Events"
  },
  {
    text: "The lighting and sound quality were exceptional. EQ Events helped create the perfect ambiance for our charity gala. Their attention to detail made all the difference.",
    author: "Claire Bennett",
    role: "Event Organizer",
    event: "Charity Gala"
  }
];

const Reviews = () => {
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

    const elements = document.querySelectorAll('.fade-up');
    elements.forEach((el) => observerRef.current?.observe(el));

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
            backgroundImage: 'url("https://images.unsplash.com/photo-1470225620780-dba8ba36b745?auto=format&fit=crop&q=80")',
          }}
        />
        <div className="absolute inset-0 bg-black/60" />
        <div className="relative h-full flex items-center justify-center text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white">
            Client <span className="text-gold">Reviews</span>
          </h1>
        </div>
      </section>

      {/* Contact Bar */}
      <div className="bg-gold py-8 px-4 relative z-20">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between text-center md:text-left">
          <div className="mb-4 md:mb-0">
            <h2 className="text-2xl font-semibold text-black">Share Your Experience</h2>
            <p className="text-black/80 mt-1">We'd love to hear about your event</p>
          </div>
          <div className="flex items-center space-x-2 text-black">
            <Phone size={24} />
            <span className="text-xl font-semibold">+44 123 456 7890</span>
          </div>
        </div>
      </div>

      {/* Simple Divider */}
      <div className="h-32 bg-gray-900 relative z-10" />

      {/* Reviews Content */}
      <section className="py-20 bg-gray-900 relative z-10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            {reviews.map((review, index) => (
              <div key={index} className="fade-up">
                <div className="relative">
                  <Quote className="absolute -top-4 -left-4 text-gold/20 w-12 h-12" />
                  <blockquote className="relative">
                    <p className="text-xl text-gray-300 leading-relaxed italic">
                      "{review.text}"
                    </p>
                    <footer className="mt-4">
                      <div className="text-gold font-semibold">{review.author}</div>
                      <div className="text-gray-400 text-sm">
                        {review.role} • {review.event}
                      </div>
                    </footer>
                  </blockquote>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Reviews;
