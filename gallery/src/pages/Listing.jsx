// import { useEffect, useState } from 'react';
// import { useParams } from 'react-router-dom';
// import { Swiper, SwiperSlide } from 'swiper/react';
// import SwiperCore from 'swiper';
// import { Navigation } from 'swiper/modules';
// import 'swiper/css/bundle';
// import {FaShare} from 'react-icons/fa';
// // import { HiLightningBolt } from "react-icons/hi";
// // import { VscDebugBreakpointData, VscAzureDevops } from "react-icons/vsc";
// // import { SiAlpinelinux } from "react-icons/si";
// import { IoMan } from "react-icons/io5";
// import { useSelector } from 'react-redux';
// import Contact from '../components/Contacts';

// export default function Listing() {
//   SwiperCore.use([Navigation]);
//   const [listing, setListing] = useState(null);
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState(false);
//   const [copied, setCopied] = useState(false);
//   const {currentUser} = useSelector((state)=>state.user) //here we have to destructure it otherwise it will be just a user (not current user )
//   const [contact, setContact] = useState(false);
//   const params = useParams();

//   useEffect(() => {
//     const fetchListing = async () => {
//       try {
//         setLoading(true);
//         const res = await fetch(`/api/listing/get/${params.listingId}`);
//         const data = await res.json();
//         if (data.success === false) {
//           setError(true);
//           setLoading(false);
//           return;
//         }
//         setListing(data);
//         setLoading(false);
//         setError(false);
//       } catch (error) {
//         setError(true);
//         setLoading(false);
//       }
//     };
//     fetchListing();
//   }, [params.listingId]);

//   return (
//     <main>
//       {loading && <p className='text-center my-7 text-2xl'>Loading...</p>}
//       {error && (
//         <p className='text-center my-7 text-2xl'>Something went wrong!</p>
//       )}
//       {listing && !loading && !error && (
//         <div>
//           <Swiper navigation>
//             {listing.imageUrls.map((url) => (
//               <SwiperSlide key={url}>
//                 <div
//                   className='h-[550px]'
//                   style={{
//                     background: `url(${url}) center no-repeat`,
//                     backgroundSize: 'cover',
//                   }}
//                 ></div>
//               </SwiperSlide>
//             ))}
//           </Swiper>
//           <div className='fixed top-[13%] right-[3%] z-10 border rounded-full w-12 h-12 flex justify-center items-center bg-slate-100 cursor-pointer'>
//             <FaShare
//               className='text-slate-500'
//               onClick={() => {
//                 navigator.clipboard.writeText(window.location.href);
//                 setCopied(true);
//                 setTimeout(() => {
//                   setCopied(false);
//                 }, 2000);
//               }}
//             />
//           </div>
//           {copied && (
//             <p className='fixed top-[23%] right-[5%] z-10 rounded-md bg-slate-100 p-2'>
//               Link copied!
//             </p>
//           )}
//           <div className='flex flex-col max-w-4xl mx-auto p-3 my-7 gap-4'>
//             <p className='text-2xl font-semibold'>
//               {listing.name}
//             </p>
//             <p className='flex items-center mt-6 gap-2 text-slate-600  text-sm'>
//                 <IoMan className='text-lg'/>
//               <span className='font-bold'>Organizer </span> - {listing.organizer_name}
//             </p>
//             <p className='text-slate-800'>
//               <span className='font-semibold text-gray-700'>Description - </span>
//               {listing.description}
//             </p>
//             <p className='text-slate-800'>
//               <span className='font-semibold text-gray-700'>Ticket Fee - </span>
//               {listing.ticketfee}
//             </p>
//             <p className='text-slate-800'>
//               <span className='font-semibold text-gray-700'>sponsers_detail - </span>
//               {listing.sponsers_detail}
//             </p>
//             <p className='text-slate-800'>
//               <span className='font-semibold text-gray-700'>organizational_detail - </span>
//               {listing.organizational_detail}
//             </p>
//             <p className='text-slate-800'>
//               <span className='font-semibold text-gray-700'>startDate - </span>
//               {listing.startDate}
//             </p>
//             <p className='text-slate-800'>
//               <span className='font-semibold text-gray-700'>endDate - </span>
//               {listing.endDate}
//             </p>
//             {currentUser && listing.userRef !== currentUser._id && !contact && (
//             <button onClick={()=> setContact(true)} className='bg-slate-700 text-white rounded-lg uppercase hover:opacity-95 p-3'>Contact author</button>
//             )}
//             {contact && <Contact listing={listing} />}
//           </div>
//         </div>
//       )}
//     </main>
//   );
// }






// import React, { useEffect, useState } from 'react';
// import { useParams } from 'react-router-dom';
// import { Swiper, SwiperSlide } from 'swiper/react';
// import SwiperCore from 'swiper';
// import { Navigation } from 'swiper/modules';
// import 'swiper/css/bundle';
// import { FaShare, FaThumbsUp, FaThumbsDown, FaPlus, FaEllipsisH, FaUserCircle } from 'react-icons/fa';
// import { useSelector } from 'react-redux';
// import Contact from '../components/Contacts';
// import Event_map from '../components/Event_map';
// import ImageGallery from '../components/ImageGallery';
// import Footer from '../components/Footer';

// SwiperCore.use([Navigation]);

// export default function Listing() {
//   const [listing, setListing] = useState(null);
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState(false);
//   const [copied, setCopied] = useState(false);
//   const { currentUser } = useSelector((state) => state.user);
//   const [contact, setContact] = useState(false);
//   const params = useParams();

//   useEffect(() => {
//     const fetchListing = async () => {
//       try {
//         setLoading(true);
//         const res = await fetch(`/api/listing/get/${params.listingId}`);
//         const data = await res.json();
//         if (data.success === false) {
//           setError(true);
//           setLoading(false);
//           return;
//         }
//         setListing(data);
//         setLoading(false);
//         setError(false);
//       } catch (error) {
//         setError(true);
//         setLoading(false);
//       }
//     };
//     fetchListing();
//   }, [params.listingId]);

//   if (loading) {
//     return <div className="text-center text-white">Loading...</div>;
//   }

//   if (error) {
//     return <div className="text-center text-red-600">Error loading event details</div>;
//   }

//   if (!listing) {
//     return null;
//   }

//   return (
//     <div className="relative bg-cover bg-center text-white flex flex-col justify-center items-center text-center">

//       <div
//         style={{ backgroundImage: `url(${listing.imageUrls[0]})`, height: 'calc(100vh - 60px)' }}
//         className="bg-cover w-full bg-center text-white flex flex-col justify-center items-center text-center"
//       >
//         <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-60"></div>
//         <div className="relative z-10 p-4">
//           <h1 className="text-4xl md:text-6xl mb-4">{listing.name}</h1>
//           <p className="flex items-center justify-center text-lg md:text-xl mb-6">
//             <FaUserCircle className="mr-2" /> by {listing.organizer_name}
//           </p>
//           <div className="flex flex-col md:flex-row justify-center gap-4">
//             <button className="flex items-center gap-2 bg-transparent border-none text-white cursor-pointer text-lg md:text-xl hover:text-gray-300">
//               <FaThumbsUp /> Upvote
//             </button>
//             <button className="flex items-center gap-2 bg-transparent border-none text-white cursor-pointer text-lg md:text-xl hover:text-gray-300">
//               <FaThumbsDown /> Downvote
//             </button>
//             <button className="flex items-center gap-2 bg-transparent border-none text-white cursor-pointer text-lg md:text-xl hover:text-gray-300">
//               <FaPlus /> Add to List
//             </button>
//             <button className="flex items-center gap-2 bg-transparent border-none text-white cursor-pointer text-lg md:text-xl hover:text-gray-300">
//               <FaEllipsisH /> More
//             </button>
//           </div>
//         </div>
//       </div>

//       <ImageGallery images={listing.imageUrls} />
//       <Event_map location={listing.location} />
//       <Footer />
//     </div>
//   );
// }





// import React, { useEffect, useState } from 'react';
// import { useParams } from 'react-router-dom';
// import { Swiper, SwiperSlide } from 'swiper/react';
// import SwiperCore from 'swiper';
// import { Navigation } from 'swiper/modules';
// import 'swiper/css/bundle';
// import { FaShare, FaThumbsUp, FaThumbsDown, FaPlus, FaEllipsisH, FaUserCircle } from 'react-icons/fa';
// import { useSelector } from 'react-redux';
// import Contact from '../components/Contacts';
// import Event_map from '../components/Event_map';
// import ImageGallery from '../components/ImageGallery';
// import Footer from '../components/Footer';

// SwiperCore.use([Navigation]);

// export default function Listing() {
//   const [listing, setListing] = useState(null);
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState(false);
//   const [copied, setCopied] = useState(false);
//   const { currentUser } = useSelector((state) => state.user);
//   const [contact, setContact] = useState(false);
//   const params = useParams();

//   useEffect(() => {
//     const fetchListing = async () => {
//       try {
//         setLoading(true);
//         const res = await fetch(`/api/listing/get/${params.listingId}`);
//         const data = await res.json();
//         if (data.success === false) {
//           setError(true);
//           setLoading(false);
//           return;
//         }
//         setListing(data);
//         setLoading(false);
//         setError(false);
//       } catch (error) {
//         setError(true);
//         setLoading(false);
//       }
//     };
//     fetchListing();
//   }, [params.listingId]);

//   if (loading) {
//     return <div className="text-center text-white">Loading...</div>;
//   }

//   if (error) {
//     return <div className="text-center text-red-600">Error loading event details</div>;
//   }

//   if (!listing) {
//     return null;
//   }

//   const images = listing.imageUrls.map((url, index) => ({
//     src: url,
//     alt: `Image ${index + 1}`,
//     caption: `Image ${index + 1}`,
//   }));

//   return (
//     <div className="relative bg-cover bg-center text-white flex flex-col justify-center items-center text-center">
//       <div
//         style={{ backgroundImage: `url(${listing.imageUrls[0]})`, height: 'calc(100vh - 60px)' }}
//         className="bg-cover w-full bg-center text-white flex flex-col justify-center items-center text-center"
//       >
//         <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-60"></div>
//         <div className="relative z-10 p-4">
//           <h1 className="text-4xl md:text-6xl mb-4">{listing.name}</h1>
//           <p className="flex items-center justify-center text-lg md:text-xl mb-6">
//             <FaUserCircle className="mr-2" /> by {listing.organizer_name}
//           </p>
//           <div className="flex flex-col md:flex-row justify-center gap-4">
//             <button className="flex items-center gap-2 bg-transparent border-none text-white cursor-pointer text-lg md:text-xl hover:text-gray-300">
//               <FaThumbsUp /> Upvote
//             </button>
//             <button className="flex items-center gap-2 bg-transparent border-none text-white cursor-pointer text-lg md:text-xl hover:text-gray-300">
//               <FaThumbsDown /> Downvote
//             </button>
//             <button className="flex items-center gap-2 bg-transparent border-none text-white cursor-pointer text-lg md:text-xl hover:text-gray-300">
//               <FaPlus /> Add to List
//             </button>
//             <button className="flex items-center gap-2 bg-transparent border-none text-white cursor-pointer text-lg md:text-xl hover:text-gray-300">
//               <FaEllipsisH /> More
//             </button>
//           </div>
//         </div>
//       </div>

//       <ImageGallery images={images} />
//       <Event_map location={listing.location} />
//       <Footer />
//     </div>
//   );
// }





import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore from 'swiper';
import { Navigation } from 'swiper/modules';
import 'swiper/css/bundle';
import { FaShare, FaThumbsUp, FaThumbsDown, FaPlus, FaEllipsisH, FaUserCircle } from 'react-icons/fa';
import { useSelector } from 'react-redux';
import Contact from '../components/Contacts';
import Event_map from '../components/Event_map';
import ImageGallery from '../components/ImageGallery';
import Footer from '../components/Footer';

SwiperCore.use([Navigation]);

export default function Listing() {
  const [listing, setListing] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [copied, setCopied] = useState(false);
  const { currentUser } = useSelector((state) => state.user);
  const [contact, setContact] = useState(false);
  const params = useParams();

  useEffect(() => {
    const fetchListing = async () => {
      try {
        setLoading(true);
        const res = await fetch(`/api/listing/get/${params.listingId}`);
        const data = await res.json();
        if (data.success === false) {
          setError(true);
          setLoading(false);
          return;
        }
        setListing(data);
        setLoading(false);
        setError(false);
      } catch (error) {
        setError(true);
        setLoading(false);
      }
    };
    fetchListing();
  }, [params.listingId]);

  if (loading) {
    return <div className="text-center text-white">Loading...</div>;
  }

  if (error) {
    return <div className="text-center text-red-600">Error loading event details</div>;
  }

  if (!listing) {
    return null;
  }

  const images = listing.imageUrls.map((url, index) => ({
    src: url,
    alt: `Image ${index + 1}`,
    caption: `Image ${index + 1}`,
  }));

  return (
    <div className="relative bg-cover bg-center text-white flex flex-col justify-center items-center text-center">
      <div
        style={{ backgroundImage: `url(${listing.imageUrls[0]})`, height: 'calc(100vh - 60px)' }}
        className="bg-cover w-full bg-center text-white flex flex-col justify-center items-center text-center"
      >
        <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-60"></div>
        <div className="relative z-10 p-4">
          <h1 className="text-4xl md:text-6xl mb-4">{listing.name}</h1>
          <p className="flex items-center justify-center text-lg md:text-xl mb-6">
            <FaUserCircle className="mr-2" /> by {listing.organizer_name}
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
      <Event_map event={listing} />
      <Footer />
    </div>
  );
}
