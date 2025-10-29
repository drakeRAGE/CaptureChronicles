import { useState, useEffect } from 'react';
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
        const res = await fetch('/api/listing/get');
        if (!res.ok) throw new Error('Failed to fetch events');
        const data = await res.json();
        const categorizedEvents = categorizeEvents(data);
        setEvents(categorizedEvents);
      } catch (err) {
        console.error(err);
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
      console.error('Invalid data structure:', data);
      return { previous, ongoing, upcoming };
    }

    data.forEach((event) => {
      const startDate = new Date(event.startDate);
      const endDate = new Date(event.endDate);

      if (endDate < currentDate) previous.push(event);
      else if (startDate <= currentDate && endDate >= currentDate) ongoing.push(event);
      else if (startDate > currentDate) upcoming.push(event);
    });

    return { previous, ongoing, upcoming };
  };

  return (
    <div className="bg-gray-900 min-h-screen flex flex-col items-center px-4 py-8 md:px-8 lg:px-16">
      <h1 className="text-4xl md:text-5xl font-extrabold text-center text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500 mb-8 md:mb-12">
        Event Page
      </h1>

      {/* Tabs */}
      <div className="flex flex-wrap justify-center gap-3 md:gap-6 mb-10 md:mb-12">
        {['previous', 'ongoing', 'upcoming'].map((tab) => (
          <button
            key={tab}
            className={`px-6 py-3 md:px-8 md:py-4 rounded-full font-semibold text-sm md:text-base transition-all duration-300 shadow-lg ${selectedTab === tab
                ? 'bg-blue-600 text-white border border-blue-700 scale-105'
                : 'bg-gray-800 text-gray-300 hover:bg-gray-700 hover:scale-105'
              }`}
            onClick={() => handleTabClick(tab)}
          >
            {`${tab.charAt(0).toUpperCase() + tab.slice(1)} Events`}
          </button>
        ))}
      </div>

      {/* Events Section */}
      <div className="w-full max-w-6xl">
        <EventList events={events[selectedTab]} category={selectedTab} />
      </div>
    </div>
  );
};

export default App;
