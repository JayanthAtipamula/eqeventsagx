import React from 'react';
import { Star } from 'lucide-react';

const testimonials = [
  {
    name: 'Sarah Johnson',
    event: 'Wedding Reception',
    rating: 5,
    text: 'Absolutely amazing! The DJ read the crowd perfectly and kept everyone dancing all night. The lighting setup transformed our venue completely.'
  },
  {
    name: 'Michael Chen',
    event: 'Corporate Event',
    rating: 5,
    text: 'Professional service from start to finish. The team handled everything flawlessly, and our clients were thoroughly impressed.'
  },
  {
    name: 'Emma Williams',
    event: 'Birthday Party',
    rating: 5,
    text: 'The best decision we made for our event! The music selection was perfect, and the lighting effects created an incredible atmosphere.'
  }
];

const Testimonials = () => {
  return (
    <section className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-white text-center mb-12">Client Reviews</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-gray-800 p-8 rounded-lg"
            >
              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-gold fill-current" />
                ))}
              </div>
              <p className="text-gray-300 mb-4">{testimonial.text}</p>
              <div className="text-gold font-semibold">{testimonial.name}</div>
              <div className="text-gray-400 text-sm">{testimonial.event}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;