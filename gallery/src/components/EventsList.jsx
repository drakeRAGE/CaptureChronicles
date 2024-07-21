
// import React from 'react';

// const EventList = ({ events }) => {
//   return (
//     <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-8">
//       {events.map((event) => (
//         <div
//           key={event.id}
//           className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 transform hover:scale-105"
//         >
//           <img
//             src={event.imageUrl}
//             alt={event.name}
//             className="w-full h-80 object-cover"
//           />
//           <div className="p-4">
//             <h2 className="text-2xl font-bold text-gray-800">{event.name}</h2>
//           </div>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default EventList;



// import React from 'react';

// const EventList = ({ events }) => {
//   return (
//     <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//       {events.map((event) => (
//         <div
//           key={event.id}
//           className="bg-gray-800 rounded-lg shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300 transform hover:scale-105"
//         >
//           <img
//             src={event.imageUrl}
//             alt={event.name}
//             className="w-full h-64 object-cover"
//           />
//           <div className="p-6">
//             <h2 className="text-2xl font-bold text-white">{event.name}</h2>
//           </div>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default EventList;





// import React from 'react';

// const EventList = ({ events }) => {
//   return (
//     <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
//       {events.map((event) => (
//         <div
//           key={event.id}
//           className="bg-gray-800 rounded-lg shadow-lg overflow-hidden transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl"
//         >
//           <img
//             src={event.imageUrl}
//             alt={event.name}
//             className="w-full h-64 object-cover"
//           />
//           <div className="p-6 bg-gray-850">
//             <h2 className="text-3xl font-semibold text-white">{event.name}</h2>
//           </div>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default EventList;





// import React from 'react';

// const EventList = ({ events }) => {
//   return (
//     <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
//       {events.map((event) => (
//         <div
//           key={event._id}
//           className="bg-gray-800 rounded-lg shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300 transform hover:scale-105"
//         >
//           <img
//             src={event.imageUrls}
//             alt={event.name}
//             className="w-full h-80 object-cover"
//           />
//           <div className="p-6">
//             <h2 className="text-2xl font-semibold text-white mb-2">{event.name}</h2>
//             <p className="text-gray-400">Details about the event go here...</p>
//           </div>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default EventList;


import React from 'react';
import { Link } from 'react-router-dom';

const EventList = ({ events }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
      {events.map((event) => (
        <Link to={`/listing/${event._id}`} key={event._id}>
          <div className="bg-gray-800 rounded-lg shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300 transform hover:scale-105">
            <img
              src={event.imageUrls}
              alt={event.name}
              className="w-full h-80 object-cover"
            />
            <div className="p-6">
              <h2 className="text-2xl font-semibold text-white mb-2">{event.name}</h2>
              <p className="text-gray-400">Details about the event go here...</p>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default EventList;

