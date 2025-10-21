import PropTypes from 'prop-types';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';

const ImageGallery = ({ images = [] }) => {
  return (
    <div className="p-5">
      <h3 className="text-4xl p-5">Featured Images :</h3>

      {/* PhotoProvider groups the images so viewer can navigate between them */}
      <PhotoProvider>
        <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-6">
          {images.map((img, index) => (
            <div
              key={index}
              className="relative group rounded-lg overflow-hidden shadow-lg bg-gray-900"
            >
              {/* PhotoView triggers the full-screen viewer when clicked */}
              <PhotoView src={img.full || img.src} key={index}>
                <button
                  type="button"
                  className="w-full h-60 p-0 m-0 block focus:outline-none"
                  aria-label={`Open image ${index + 1} in viewer`}
                >
                  <img
                    src={img.src}
                    alt={img.alt || `Image ${index + 1}`}
                    loading="lazy"
                    className="w-full h-60 object-cover transition-transform duration-300 transform group-hover:scale-110"
                    style={{ display: 'block' }}
                  />
                </button>
              </PhotoView>
            </div>
          ))}
        </div>
      </PhotoProvider>
    </div>
  );
};

ImageGallery.propTypes = {
  images: PropTypes.arrayOf(
    PropTypes.shape({
      src: PropTypes.string.isRequired,
      full: PropTypes.string,
      alt: PropTypes.string
    })
  )
};

export default ImageGallery;
