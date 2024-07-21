

// const events = [
//   {
//     id: 1,
//     name: "Event 1",
//     date: "2023-01-15",
//     status: "previous"
//   },
//   {
//     id: 2,
//     name: "Event 2",
//     date: "2023-07-20",
//     status: "ongoing"
//   },
//   {
//     id: 3,
//     name: "Event 3",
//     date: "2024-12-01",
//     status: "upcoming"
//   },
//   // Add more events here
// ];






// import React from 'react';

// const EventList = ({ events }) => {
//   return (
//     <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//       {events.map((event) => (
//         <div
//           key={event.id}
//           className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
//         >
//           <img
//             src={event.imageUrl}
//             alt={event.name}
//             className="w-full h-56 object-cover"
//           />
//           <div className="p-4">
//             <h2 className="text-2xl font-bold">{event.name}</h2>
//           </div>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default EventList;






// import React, { useState } from 'react';
// import EventList from '../components/EventsList';

// const App = () => {
//   const [selectedTab, setSelectedTab] = useState('upcoming');

//   const events = {
//     previous: [
//       { id: 1, name: 'Previous Event 1', imageUrl: 'https://images.unsplash.com/photo-1573320286044-b43a4168fb40?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
//       { id: 2, name: 'Previous Event 2', imageUrl:  'https://images.unsplash.com/photo-1573320286044-b43a4168fb40?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
//       { id: 3, name: 'Previous Event 1', imageUrl: 'https://images.unsplash.com/photo-1573320286044-b43a4168fb40?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
//       { id: 4, name: 'Previous Event 2', imageUrl:  'https://images.unsplash.com/photo-1573320286044-b43a4168fb40?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
//       { id: 5, name: 'Previous Event 1', imageUrl: 'https://images.unsplash.com/photo-1573320286044-b43a4168fb40?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
//       { id: 6, name: 'Previous Event 2', imageUrl:  'https://images.unsplash.com/photo-1573320286044-b43a4168fb40?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
//       { id: 7, name: 'Previous Event 1', imageUrl: 'https://images.unsplash.com/photo-1573320286044-b43a4168fb40?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
//       { id: 8, name: 'Previous Event 2', imageUrl:  'https://images.unsplash.com/photo-1573320286044-b43a4168fb40?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
//       { id: 9, name: 'Previous Event 1', imageUrl: 'https://images.unsplash.com/photo-1573320286044-b43a4168fb40?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
//       { id: 10, name: 'Previous Event 2', imageUrl:  'https://images.unsplash.com/photo-1573320286044-b43a4168fb40?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
//     ],
//     ongoing: [
//       { id: 11, name: 'Ongoing Event 1', imageUrl: 'https://images.unsplash.com/photo-1573320286044-b43a4168fb40?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
//     ],
//     upcoming: [
//       { id: 12, name: 'Upcoming Event 1', imageUrl: 'https://images.unsplash.com/photo-1573320286044-b43a4168fb40?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
//       { id: 13, name: 'Upcoming Event 2', imageUrl: 'https://images.unsplash.com/photo-1573320286044-b43a4168fb40?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
//     ],
//   };

//   return (
//     <div className="container mx-auto p-4 h-cal(100vh-60px)">
//       <h1 className="text-4xl text-gray-400 font-bold text-center mb-8">Event Page</h1>
//       <div className="flex justify-center mb-8">
//         {['previous', 'ongoing', 'upcoming'].map((tab) => (
//           <button
//             key={tab}
//             className={`px-6 py-3 mx-2 rounded-lg font-semibold transition-colors duration-300 transform hover:scale-105 ${
//               selectedTab === tab ? 'bg-blue-600 text-white' : 'bg-gray-200 hover:bg-gray-300'
//             }`}
//             onClick={() => setSelectedTab(tab)}
//           >
//             {`${tab.charAt(0).toUpperCase() + tab.slice(1)} Events`}
//           </button>
//         ))}
//       </div>
//       <EventList events={events[selectedTab]} />
//     </div>
//   );
// };

// export default App;




// import React, { useState, useEffect } from 'react';
// import EventList from '../components/EventsList';

// const App = () => {
//   const [selectedTab, setSelectedTab] = useState('upcoming');

//   useEffect(() => {
//     const savedTab = localStorage.getItem('selectedTab');
//     if (savedTab) {
//       setSelectedTab(savedTab);
//     }
//   }, []);

//   const handleTabClick = (tab) => {
//     setSelectedTab(tab);
//     localStorage.setItem('selectedTab', tab);
//   };

//   const events = {
//     previous: [
//       { id: 1, name: 'Previous Event 1', imageUrl: 'https://images.unsplash.com/photo-1573320286044-b43a4168fb40?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
//       { id: 2, name: 'Previous Event 2', imageUrl:  'https://images.unsplash.com/photo-1573320286044-b43a4168fb40?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
//       { id: 3, name: 'Previous Event 1', imageUrl: 'https://images.unsplash.com/photo-1573320286044-b43a4168fb40?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
//       { id: 4, name: 'Previous Event 2', imageUrl:  'https://images.unsplash.com/photo-1573320286044-b43a4168fb40?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
//       { id: 5, name: 'Previous Event 1', imageUrl: 'https://images.unsplash.com/photo-1573320286044-b43a4168fb40?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
//       { id: 6, name: 'Previous Event 2', imageUrl:  'https://images.unsplash.com/photo-1573320286044-b43a4168fb40?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
//       { id: 7, name: 'Previous Event 1', imageUrl: 'https://images.unsplash.com/photo-1573320286044-b43a4168fb40?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
//       { id: 8, name: 'Previous Event 2', imageUrl:  'https://images.unsplash.com/photo-1573320286044-b43a4168fb40?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
//       { id: 9, name: 'Previous Event 1', imageUrl: 'https://images.unsplash.com/photo-1573320286044-b43a4168fb40?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
//       { id: 10, name: 'Previous Event 2', imageUrl:  'https://images.unsplash.com/photo-1573320286044-b43a4168fb40?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
//     ],
//     ongoing: [
//       { id: 3, name: 'Ongoing Event 1', imageUrl: '/images/ongoing1.jpg' },
//     ],
//     upcoming: [
//       { id: 4, name: 'Upcoming Event 1', imageUrl: '/images/upcoming1.jpg' },
//       { id: 5, name: 'Upcoming Event 2', imageUrl: '/images/upcoming2.jpg' },
//     ],
//   };

//   return (
//     <div className="container mx-auto p-6 bg-gray-900 min-h-screen">
//       <h1 className="text-5xl font-extrabold text-center text-gradient mb-12">Event Page</h1>
//       <div className="flex justify-center mb-12">
//         {['previous', 'ongoing', 'upcoming'].map((tab) => (
//           <button
//             key={tab}
//             className={`px-8 py-4 mx-2 rounded-full font-bold transition-transform duration-300 transform ${
//               selectedTab === tab
//                 ? 'bg-blue-600 text-white shadow-xl border border-blue-700'
//                 : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
//             }`}
//             onClick={() => handleTabClick(tab)}
//           >
//             {`${tab.charAt(0).toUpperCase() + tab.slice(1)} Events`}
//           </button>
//         ))}
//       </div>
//       <EventList events={events[selectedTab]} />
//     </div>
//   );
// };

// export default App;



import React, { useState, useEffect } from 'react';
import EventList from '../components/EventsList';

const App = () => {
  const [selectedTab, setSelectedTab] = useState('upcoming');
  const [events, setEvents] = useState({ previous: [], ongoing: [], upcoming: [] });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const savedTab = localStorage.getItem('selectedTab');
    if (savedTab) {
      setSelectedTab(savedTab);
    }

    const fetchEvents = async () => {
      try {
        setLoading(true);
        const res = await fetch('/api/listing/get');
        if (!res.ok) {
          throw new Error('Failed to fetch events');
        }
        const data = await res.json();
        console.log('Fetched data:', data); // Log the fetched data to see its structure
        const categorizedEvents = categorizeEvents(data);
        setEvents(categorizedEvents);
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
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

  if (loading) {
    return <div style={{height: '92vh'}} className="text-center m-auto  text-white">Loading...</div>;
  }

  if (error) {
    return <div className="text-center h-calc(100vh-60px) text-red-600">Error: {error}</div>;
  }

  return (
    <div className="container mx-auto p-6 bg-gray-900 min-h-screen">
      <h1 className="text-5xl font-extrabold text-center text-gradient mb-12">Event Page</h1>
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