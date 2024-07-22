import React from 'react';

const ImageGallery = ({ images }) => {
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
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImageGallery;
