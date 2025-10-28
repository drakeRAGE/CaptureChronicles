import { Link } from 'react-router-dom';
import { MdLocationOn } from 'react-icons/md';
import PropTypes from 'prop-types';

export default function ListingItem({ listing }) {
  return (
    <div className='bg-white rounded-xl shadow-md hover:shadow-2xl transition-shadow transform hover:-translate-y-1 duration-300 w-full sm:w-[320px]'>
      <Link to={`/listing/${listing._id}`}>
        <div className='overflow-hidden rounded-t-xl h-[220px] sm:h-[250px]'>
          <img
            src={listing.imageUrls[0] || 'https://via.placeholder.com/400x250?text=No+Image'}
            alt={listing.name}
            className='w-full h-full object-cover hover:scale-105 transition-transform duration-300'
          />
        </div>
        <div className='p-4 flex flex-col gap-2'>
          <p className='text-lg font-semibold text-gray-800 truncate'>{listing.name}</p>
          <div className='flex items-center gap-1 text-gray-500'>
            <MdLocationOn className='text-green-600' />
            <p className='text-sm truncate'>{listing.location}</p>
          </div>
          <span className='inline-block bg-indigo-100 text-indigo-800 text-sm font-medium px-2 py-1 rounded-md w-fit'>
            {listing.ticketfee === 0 ? 'Free Entry' : `Ticket: ₹${listing.ticketfee}`}
          </span>
          <p className='text-sm text-gray-600 line-clamp-3 mt-2'>{listing.description}</p>
        </div>
      </Link>
    </div>
  );
}

ListingItem.propTypes = {
  listing: PropTypes.shape({
    _id: PropTypes.string.isRequired,
    imageUrls: PropTypes.arrayOf(PropTypes.string).isRequired,
    name: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    ticketfee: PropTypes.number.isRequired,
    description: PropTypes.string.isRequired
  }).isRequired
};
