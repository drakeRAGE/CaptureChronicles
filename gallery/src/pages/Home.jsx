import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import 'swiper/css/bundle';
import ListingItem from '../components/ListingItem';
import Testimony from '../components/Testimony';
import Newsletter from '../components/Newsletter';
import Footer from '../components/Footer';

export default function Home() {
  const [events, setEvents] = useState({ previous: [], ongoing: [], upcoming: [] });
  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const res = await fetch('/api/listing/get');
        if (!res.ok) {
          throw new Error('Failed to fetch events');
        }
        const data = await res.json();
        // console.log('Fetched data:', data); // Log the fetched data to see its structure
        const categorizedEvents = categorizeEvents(data);
        setEvents(categorizedEvents);
      } catch (err) {
        console.log(err)
      }
    };

    fetchEvents();
  }, []);
  const categorizeEvents = (data) => {
    const currentDate = new Date();
    const previous = [];
    const ongoing = [];
    const upcoming = [];

    if (!data || !Array.isArray(data)) {
      console.error('Invalid data structure:', data); // Log an error if the data structure is invalid
      return { previous, ongoing, upcoming };
    }

    data.forEach((event) => {
      const startDate = new Date(event.startDate);
      const endDate = new Date(event.endDate);

      if (endDate < currentDate) {
        previous.push(event);
      } else if (startDate <= currentDate && endDate >= currentDate) {
        ongoing.push(event);
      } else if (startDate > currentDate) {
        upcoming.push(event);
      }
    });

    return { previous, ongoing, upcoming };
  };

  // console.log( 'Previous- ', events['previous'], 'Upcoming -', events['upcoming'], 'Ongoing-',  events['ongoing'])
  return (
    <div>
      {/* top */}
      <section className="relative bg-gray-900 text-white">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0">
          <img
            src="https://t3.ftcdn.net/jpg/08/23/80/04/240_F_823800460_B8q6XJ4KyrszbZWvESOwLsQ7Kk5AjIL3.jpg"
            alt="Photography Event"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/50 backdrop-blur-sm"></div>
        </div>

        <div className="relative z-10 mx-auto max-w-screen-xl px-4 py-32 lg:flex lg:h-screen lg:items-center">
          <div className="mx-auto max-w-3xl gap-6 text-center">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 bg-clip-text text-transparent animate-fadeIn">
              Capture the Moment
              <span className="sm:block mt-2">Create Lasting Memories</span>
            </h1>

            <p className="mx-auto mt-6 max-w-xl text-lg sm:text-xl text-gray-200 animate-fadeIn delay-200">
              Transforming moments into lasting memories with our expert photo and gallery event management
            </p>

            <div className="mt-8 flex justify-center gap-4 animate-fadeIn delay-400">
              <a
                href="/events"
                className="rounded-lg bg-gradient-to-r from-green-400 to-blue-500 px-6 py-3 font-semibold text-white shadow-lg hover:scale-105 transition-transform"
              >
                Explore Events
              </a>
              <a
                href="/contact"
                className="rounded-lg border border-white px-6 py-3 font-semibold text-white hover:bg-white hover:text-gray-900 transition-colors"
              >
                Contact Us
              </a>
            </div>
          </div>
        </div>
      </section>


      <div className='max-w-6xl mx-auto p-4 flex flex-col gap-10 my-12'>
        {['ongoing', 'previous', 'upcoming'].map((type) => {
          if (!events[type] || events[type].length === 0) return null;
          const title = type === 'previous' ? 'Featured Events' : `${type.charAt(0).toUpperCase() + type.slice(1)} Events`;

          return (
            <div key={type} className='bg-gradient-to-r from-gray-800 via-gray-900 to-gray-800 p-6 rounded-xl shadow-lg'>
              <div className='flex justify-between items-center mb-4'>
                <h2 className='text-2xl font-bold text-white border-b-2 border-indigo-500 inline-block pb-1'>
                  {title}
                </h2>
                <Link
                  className='text-sm text-indigo-400 hover:text-indigo-300 transition-colors'
                  to='/search?searchTerm='
                >
                  Show more
                </Link>
              </div>
              <div className='flex flex-wrap gap-6'>
                {(type === 'previous' ? events[type].slice(0, 3) : events[type]).map((listing) => (
                  <ListingItem listing={listing} key={listing._id} />
                ))}
              </div>
            </div>
          );
        })}
      </div>


      <Testimony />
      <Newsletter />
      <Footer />
    </div>
  );
}
