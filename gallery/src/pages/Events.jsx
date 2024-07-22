

import{ useState, useEffect } from 'react';
import EventList from '../components/EventsList';

const App = () => {
  const [selectedTab, setSelectedTab] = useState('upcoming');
  const [events, setEvents] = useState({ previous: [], ongoing: [], upcoming: [] });
  useEffect(() => {
    const savedTab = localStorage.getItem('selectedTab');
    if (savedTab) {
      setSelectedTab(savedTab);
    }

    const fetchEvents = async () => {
      try {
        // setLoading(true);
        const res = await fetch('/api/listing/get');
        if (!res.ok) {
          throw new Error('Failed to fetch events');
        }
        const data = await res.json();
        console.log('Fetched data:', data); // Log the fetched data to see its structure
        const categorizedEvents = categorizeEvents(data);
        setEvents(categorizedEvents);
      } catch (err) {
        console.error(err)
      }
    };

    fetchEvents();
  }, []);

  const handleTabClick = (tab) => {
    setSelectedTab(tab);
    localStorage.setItem('selectedTab', tab);
  };

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
  return (
    <div className="container mx-auto p-6 bg-gray-900 min-h-screen">
      <h1 className="text-5xl text-gray-400 font-extrabold text-center text-gradient mb-12">Event Page</h1>
      <div className="flex justify-center mb-12">
        {['previous', 'ongoing', 'upcoming'].map((tab) => (
          <button
            key={tab}
            className={`px-8 py-4 mx-2 rounded-full font-bold transition-transform duration-300 transform ${
              selectedTab === tab
                ? 'bg-blue-600 text-white shadow-xl border border-blue-700'
                : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
            }`}
            onClick={() => handleTabClick(tab)}
          >
            {`${tab.charAt(0).toUpperCase() + tab.slice(1)} Events`}
          </button>
        ))}
      </div>
      <EventList events={events[selectedTab]} />
    </div>
  )}


  export default App;