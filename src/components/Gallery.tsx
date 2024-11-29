import React, { useState, useEffect } from 'react';

const images = [
  'https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?auto=format&fit=crop&w=800&q=75',
  'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&w=800&q=75',
  'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?auto=format&fit=crop&w=800&q=75',
  'https://images.unsplash.com/photo-1429962714451-bb934ecdc4ec?auto=format&fit=crop&w=800&q=75',
  'https://images.unsplash.com/photo-1506157786151-b8491531f063?auto=format&fit=crop&w=800&q=75',
  'https://images.unsplash.com/photo-1574879948818-1cfda7aa5b1a?auto=format&fit=crop&w=800&q=75'
];

const ImageCard = ({ src, index }: { src: string; index: number }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  return (
    <div className="rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300 bg-gray-800">
      {isLoading && (
        <div className="w-full h-full aspect-[4/3] animate-pulse bg-gray-700" />
      )}
      <img
        src={src}
        alt={`Event ${index + 1}`}
        className={`w-full h-full object-cover aspect-[4/3] transition-opacity duration-300 ${
          isLoading ? 'opacity-0' : 'opacity-100'
        }`}
        loading="lazy"
        onLoad={() => setIsLoading(false)}
        onError={() => {
          setIsLoading(false);
          setIsError(true);
        }}
      />
      {isError && (
        <div className="w-full h-full aspect-[4/3] flex items-center justify-center bg-gray-800 text-gray-400">
          Failed to load image
        </div>
      )}
    </div>
  );
};

const Gallery = () => {
  return (
    <section className="py-16 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-semibold text-white text-center mb-10">Event Gallery</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {images.map((image, index) => (
            <ImageCard key={index} src={image} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;