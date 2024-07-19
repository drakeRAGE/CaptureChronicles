import React from 'react';
import image from './Screenshot 2024-06-01 182331 (1) (1) (1) (2).png';
import image1 from './photo-1583030225577-329fe6cc80d6.jpeg';
import image2 from './photo-1474433188271-d3f339f41911.jpeg';
import image4 from './Screenshot 2024-06-01 170512.png';

const images = [
  { src: image, alt: 'Beautiful Landscape 1', caption: 'Beautiful Landscape 1' },
  { src: image1, alt: 'Beautiful Landscape 2', caption: 'Beautiful Landscape 2' },
  { src: image2, alt: 'Beautiful Landscape 3', caption: 'Beautiful Landscape 3' },
  { src: image4, alt: 'Beautiful Landscape 4', caption: 'Beautiful Landscape 4' },
  { src: image, alt: 'Beautiful Landscape 5', caption: 'Beautiful Landscape 5' },
  { src: image1, alt: 'Beautiful Landscape 6', caption: 'Beautiful Landscape 6' },
  { src: image2, alt: 'Beautiful Landscape 7', caption: 'Beautiful Landscape 7' },
  { src: image2, alt: 'Beautiful Landscape 8', caption: 'Beautiful Landscape 8' },
  { src: image4, alt: 'Beautiful Landscape 9', caption: 'Beautiful Landscape 9' },
  { src: image, alt: 'Beautiful Landscape 10', caption: 'Beautiful Landscape 10' },
  { src: image1, alt: 'Beautiful Landscape 11', caption: 'Beautiful Landscape 11' },
  { src: image2, alt: 'Beautiful Landscape 12', caption: 'Beautiful Landscape 12' },
  { src: image2, alt: 'Beautiful Landscape 13', caption: 'Beautiful Landscape 13' },
  { src: image4, alt: 'Beautiful Landscape 14', caption: 'Beautiful Landscape 14' },
];

const ImageGallery = () => {
  return (
    <div className="p-5">
        <h3 className='text-4xl p-5'>Featured Images :</h3>
      <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-6">
        {images.map((img, index) => (
          <div key={index} className="relative group rounded-lg overflow-hidden shadow-lg">
            <img
              src={img.src}
              alt={img.alt}
              className="w-full h-60 object-cover transition-transform duration-300 transform group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
              <span className="text-white text-lg font-semibold">{img.caption}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImageGallery;
