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
      <section className="bg-gray-900 text-white bg-[url(https://t3.ftcdn.net/jpg/08/23/80/04/240_F_823800460_B8q6XJ4KyrszbZWvESOwLsQ7Kk5AjIL3.jpg)] bg-cover bg-center bg-no-repeat">
        <div className="mx-auto max-w-screen-xl px-4 py-32 lg:flex lg:h-screen lg:items-center">
          <div className="mx-auto max-w-3xl gap-10 text-center">
            <h1
              className="bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 bg-clip-text text-3xl font-extrabold text-transparent sm:text-5xl"
            >
              Capture the Moment

              <span className="sm:block"> Create Lasting Memories </span>
            </h1>

            <p className="mx-auto mt-4 max-w-xl sm:text-xl/relaxed">
              Transforming moments into lasting memories with our expert photo and gallery event management
            </p>
          </div>
        </div>
      </section>


      <div className='max-w-6xl mx-auto p-3 flex flex-col gap-8 my-10'>
        {events['ongoing'] && events['ongoing'].length > 0 && (
          <div className='bg-slate-800 p-8 rounded-lg'>
            <div className='my-3 flex justify-between items-center'>
              <h2 className='text-2xl font-semibold text-gray-100'>Ongoing events</h2>
              <Link className='text-sm text-indigo-400 hover:underline' to={'/search?searchTerm='}>
                Show more events
              </Link>
            </div>
            <div className='flex flex-wrap gap-4'>
              {events['ongoing'].map((listing) => (
                <ListingItem listing={listing} key={listing._id} />
              ))}
            </div>
          </div>
        )}

        {events['previous'] && events['previous'].length > 0 && (
          <div className='bg-slate-800 p-8 rounded-lg'>
            <div className='my-3 flex justify-between items-center'>
              <h2 className='text-2xl font-semibold text-gray-100'>Featured events</h2>
              <Link className='text-sm text-indigo-400 hover:underline' to={'/search?searchTerm='}>
                Show more events
              </Link>
            </div>
            <div className='flex flex-wrap gap-4'>
              {events['previous'].slice(0,3).map((listing) => (
                <ListingItem listing={listing} key={listing._id} />
              ))}
            </div>

          </div>
        )}

        {events['upcoming'] && events['upcoming'].length > 0 && (
          <div className='bg-slate-800 p-8 rounded-lg'>
            <div className='my-3 flex justify-between items-center'>
              <h2 className='text-2xl font-semibold text-gray-100'>Upcoming events</h2>
              <Link className='text-sm text-indigo-400 hover:underline' to={'/search?searchTerm='}>
                Show more events
              </Link>
            </div>
            <div className='flex flex-wrap gap-4'>
              {events['upcoming'].map((listing) => (
                <ListingItem listing={listing} key={listing._id} />
              ))}
            </div>
          </div>
        )}
        
      </div>

      <Testimony />
      <Newsletter />
      <Footer />
    </div>
  );
}
