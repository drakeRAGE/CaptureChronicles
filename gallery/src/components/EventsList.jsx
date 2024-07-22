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
              <p className="text-gray-400">{events.description}</p>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default EventList;

