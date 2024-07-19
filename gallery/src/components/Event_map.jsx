import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

// Fixing marker icon issue with Leaflet
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png',
  iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
});

const Event_map = () => {
  const coordinates = { lat: 28.7041,  lng: 77.1025}; // here later put coordinates dynamically
  const tags = [
    'Prismatic', 'Geyser', 'Grand', 'Yellowstone', 'Spring', 'Wyoming',
    'Midway', 'Excelsior', 'Yellowstonenationalpark', 'Basin', 'Details',
    'Nationalpark', 'Steam', 'National', 'Park', 'Grandprismaticspring',
    'Hot', 'Landscape', 'Shadow', 'Thermal', 'Sunset'
  ];

  return (
    <div className="flex flex-col md:flex-row gap-6 p-6 pb-28">
      <div className="flex-1">
        <div className="h-96 relative">
          <h3 className='font-bold text-4xl'>LOCATION : </h3>
          <MapContainer center={[coordinates.lat, coordinates.lng]} zoom={13} className="h-full w-full">
            <TileLayer
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            />
            <Marker position={[coordinates.lat, coordinates.lng]}>
              <Popup>
                Grand Prismatic Spring
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
}

export default Event_map;
