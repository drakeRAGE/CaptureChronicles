import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import SwiperCore from 'swiper';
import { Navigation } from 'swiper/modules';
import 'swiper/css/bundle';
import { FaShare, FaThumbsUp, FaThumbsDown, FaPlus, FaEllipsisH, FaUserCircle } from 'react-icons/fa';
import Event_map from '../components/Event_map';
import ImageGallery from '../components/ImageGallery';
import Footer from '../components/Footer';

SwiperCore.use([Navigation]);

export default function Listing() {
  const [listing, setListing] = useState(null);
  const [copied, setCopied] = useState(false);
  const [error, setError] = useState(false);
  const params = useParams();

  useEffect(() => {
    const fetchListing = async () => {
      try {
        const res = await fetch(`/api/listing/get/${params.listingId}`);
        const data = await res.json();
        if (data.success === false) {
          setError(true);
          return;
        }
        setListing(data);
        setError(false);
      } catch (error) {
        setError(true);
      }
    };
    fetchListing();
  }, [params.listingId]);
  if (error) {
    return (
    <div className="flex items-center justify-center h-screen">
  <div className="text-center text-red-600">Error loading event details</div>
</div>
)
  }

  if (!listing) {
    return null;
  }

  const images = listing.imageUrls.map((url, index) => ({
    src: url,
    alt: `Image ${index + 1}`,
    caption: `Image ${index + 1}`,
  }));

  const backgroundImageStyle = {
    backgroundImage: `url(${listing.imageUrls[0]})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    height: 'calc(100vh - 60px)',
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col items-center">
      {/* Hero Section */}
      <div
        style={backgroundImageStyle}
        className="relative w-full flex flex-col justify-center items-center"
      >
        {/* Subtle gradient overlay (so background still visible) */}
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 via-black/30 to-transparent"></div>

        {/* Share Button */}
        <button
          onClick={() => {
            navigator.clipboard.writeText(window.location.href);
            setCopied(true);
            setTimeout(() => setCopied(false), 2000);
          }}
          className="absolute top-[13%] right-[3%] bg-black/40 hover:bg-black/60 border border-gray-700 backdrop-blur-sm transition-all p-3 rounded-full z-20"
        >
          <FaShare className="text-white text-lg" />
        </button>

        {copied && (
          <p className="absolute top-[23%] right-[4%] bg-gray-800 px-3 py-1 rounded-md text-sm text-gray-200 shadow-md z-20">
            Link copied!
          </p>
        )}

        {/* Main Info */}
        <div className="relative z-10 text-center px-6 py-10 max-w-3xl">
          <h1 className="text-5xl md:text-6xl font-extrabold mb-4 drop-shadow-md tracking-tight">
            {listing.name}
          </h1>
          <p className="flex items-center justify-center text-gray-300 text-lg mb-3">
            <FaUserCircle className="mr-2 text-2xl text-gray-400" /> {listing.organizer_name}
          </p>

          <div className="flex flex-col md:flex-row items-center justify-center gap-4 mt-6">
            {listing.ticketfee > 0 ? (
              <button className="bg-emerald-500 hover:bg-emerald-600 transition-all text-white font-semibold px-6 py-2 rounded-lg shadow-md">
                Pay ₹{listing.ticketfee}
              </button>
            ) : (
              <span className="text-emerald-400 font-medium text-lg">Free Entry</span>
            )}
          </div>

          {/* Action Buttons */}
          <div className="flex flex-wrap justify-center gap-4 mt-10">
            {[
              { icon: <FaThumbsUp />, text: 'Upvote' },
              { icon: <FaThumbsDown />, text: 'Downvote' },
              { icon: <FaPlus />, text: 'Add to List' },
              { icon: <FaEllipsisH />, text: 'More' },
            ].map((btn, i) => (
              <button
                key={i}
                className="flex items-center gap-2 px-5 py-2 rounded-full bg-black/40 border border-gray-700 text-gray-200 hover:bg-gray-800/70 transition-all"
              >
                {btn.icon}
                <span>{btn.text}</span>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Gallery Section */}
      <div className="w-full bg-gray-900 py-12 px-6">
        <h2 className="text-3xl font-semibold mb-8 text-center text-gray-100">
          Event Gallery
        </h2>
        <ImageGallery images={images} eventName={listing.name} />
      </div>

      {/* Map Section */}
      <div className="w-full bg-gray-900 py-8">
        <Event_map location={listing.location} />
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
}
