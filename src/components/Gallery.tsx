import React, { useState } from 'react';

// Import images directly from assets
import img1 from '../assets/eqimages/img1.jpg';
import img2 from '../assets/eqimages/img2.jpg';
import img3 from '../assets/eqimages/img3.jpg';
import img4 from '../assets/eqimages/img4.jpg';
import img5 from '../assets/eqimages/img5.jpg';
import img6 from '../assets/eqimages/img6.jpg';
import img7 from '../assets/eqimages/img7.jpg';

const images = [
  img1,
  img2,
  img3,
  img4,
  img5,
  img6
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
    <section className="py-8 md:py-12 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-5xl md:text-7xl font-bold text-white text-center mb-8 md:mb-16 opacity-0 animate-fade-up">
          Event Gallery <span className="text-gold"></span>
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {images.map((image, index) => (
            <ImageCard key={index} src={image} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;