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
    height: 'calc(100vh - 60px)',
  };

  // console.log(images)
console.log(listing.imageUrls[0])
  return (
    <div className="relative bg-cover bg-center text-white flex flex-col justify-center items-center text-center">
      <div
        style={backgroundImageStyle}
        className="bg-cover w-full bg-center text-white flex flex-col justify-center items-center text-center"
      >
        
           <div className='fixed top-[13%] right-[3%] z-10 border rounded-full w-12 h-12 flex justify-center items-center bg-slate-100 cursor-pointer'>
             <FaShare
              className='text-slate-500'
              onClick={() => {
                navigator.clipboard.writeText(window.location.href);
                setCopied(true);
                setTimeout(() => {
                  setCopied(false);
                }, 2000);
              }}
            />
          </div>
          {copied && (
            <p className='fixed top-[23%] right-[5%] z-10 rounded-md bg-gray-400 p-2'>
              Link copied!
            </p>
          )}
        <div className="relative z-10 p-4">
          <h1 className="text-4xl md:text-6xl mb-4 font-bold">{listing.name}</h1>
          <p className="flex items-center justify-center text-lg md:text-xl mb-6">
            <FaUserCircle className="mr-2" /> by {listing.organizer_name}
          </p>
          <p className="flex items-center justify-center text-lg md:text-xl mb-6">
            Ticket - {listing.ticketfee } $
          </p>
          <div className="flex flex-col md:flex-row justify-center gap-4">
            <button className="flex items-center gap-2 bg-transparent border-none text-white cursor-pointer text-lg md:text-xl hover:text-gray-300">
              <FaThumbsUp /> Upvote
            </button>
            <button className="flex items-center gap-2 bg-transparent border-none text-white cursor-pointer text-lg md:text-xl hover:text-gray-300">
              <FaThumbsDown /> Downvote
            </button>
            <button className="flex items-center gap-2 bg-transparent border-none text-white cursor-pointer text-lg md:text-xl hover:text-gray-300">
              <FaPlus /> Add to List
            </button>
            <button className="flex items-center gap-2 bg-transparent border-none text-white cursor-pointer text-lg md:text-xl hover:text-gray-300">
              <FaEllipsisH /> More
            </button>
          </div>
        </div>
      </div>

      <ImageGallery images={images} eventName={listing.name} />
      <Event_map location={listing.location} />
      <Footer />
    </div>
  );
}
