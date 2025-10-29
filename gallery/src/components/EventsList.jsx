import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const EventList = ({ events, category }) => {
  if (!events || events.length === 0) {
    return (
      <div className="text-center text-gray-400 text-md md:text-xl mt-12">
        No {category} events found.
      </div>
    );
  }

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
              <p className="text-gray-400">{event.description}</p>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
};

EventList.propTypes = {
  events: PropTypes.arrayOf(
    PropTypes.shape({
      _id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      imageUrls: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired
    })
  ).isRequired,
  category: PropTypes.string.isRequired,
};

export default EventList;

