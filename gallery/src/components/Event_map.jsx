
//currently we can have only 2500 requests per day and 1 req/sec
import { useState, useEffect } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import axios from 'axios';

// Fixing marker icon issue with Leaflet
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png',
  iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
});

const EVENT_MAP_API_KEY = '9145d9d11bfd4ed7a8440431d5a89bbf'; // OpenCage API key

const Event_map = ({ location }) => {
  const [coordinates, setCoordinates] = useState({ lat: 28.7041, lng: 77.1025 }); // Default coordinates
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Convert location to coordinates using OpenCage API
    const fetchCoordinates = async () => {
      try {
        const response = await axios.get(`https://api.opencagedata.com/geocode/v1/json`, {
          params: {
            q: location,
            key: EVENT_MAP_API_KEY,
          },
        });

        const { lat, lng } = response.data.results[0].geometry;
        setCoordinates({ lat, lng });
      } catch (error) {
        console.error("Error fetching coordinates:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchCoordinates();
  }, [location]);

  const tags = [
    'Prismatic', 'Geyser', 'Grand', 'Yellowstone', 'Spring', 'Wyoming',
    'Midway', 'Excelsior', 'Yellowstonenationalpark', 'Basin', 'Details',
    'Nationalpark', 'Steam', 'National', 'Park', 'Grandprismaticspring',
    'Hot', 'Landscape', 'Shadow', 'Thermal', 'Sunset'
  ];

  if (loading) {
    return <div>Loading map...</div>;
  }

  return (
    <div className="flex flex-col md:flex-row gap-6 p-6 pb-28">
      <div className="flex-1">
        <div className="h-96 relative">
          <h3 className='font-bold text-4xl'>LOCATION : {location}</h3>

          <MapContainer center={[coordinates.lat, coordinates.lng]} zoom={13} className="h-full w-full">
            <TileLayer
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            />
            <Marker position={[coordinates.lat, coordinates.lng]}>
              <Popup>
                {location}
              </Popup>
            </Marker>
          </MapContainer>
        </div>
      </div>
      <div className="w-full md:w-1/3 flex flex-col gap-4">
        <div>
          <h2 className="text-2xl font-semibold">...</h2>
        </div>
        <div>
          <h3 className="text-xl font-medium">Coordinates</h3>
          <p>{coordinates.lat}, {coordinates.lng}</p>
        </div>
        <div>
          <h3 className="text-xl font-medium">Tags</h3>
          <div className="flex flex-wrap gap-2">
            {tags.map((tag, index) => (
              <span key={index} className="bg-gray-200 text-gray-800 px-2 py-1 rounded-full">
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Event_map;
