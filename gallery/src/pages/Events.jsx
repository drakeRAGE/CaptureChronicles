import React from 'react';
import { FaThumbsUp, FaThumbsDown, FaPlus, FaEllipsisH, FaUserCircle } from 'react-icons/fa';
import InfoSection from './NewEvent';

const HeroSection = () => {
  const defaultBackground = '';

  return (
    <div className="relative bg-cover bg-center text-white flex flex-col justify-center items-center text-center" >

      {/* Hero section */}
      <div style={{ backgroundImage: `url(${defaultBackground})`, height: 'calc(100vh - 60px)'}} className=' bg-cover bg-center text-white flex flex-col justify-center items-center text-center'>
        <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-60"></div>
        <div className="relative z-10">
          <h1 className="text-6xl mb-4">Grand Prismatic Spring</h1>
          <p className="flex items-center justify-center text-xl mb-6">
            <FaUserCircle className="mr-2" /> by Photo-Locations
          </p>
          <div className="flex justify-center gap-4">
            <button className="flex items-center gap-2 bg-transparent border-none text-white cursor-pointer text-xl hover:text-gray-300"><FaThumbsUp /> Upvote</button>
            <button className="flex items-center gap-2 bg-transparent border-none text-white cursor-pointer text-xl hover:text-gray-300"><FaThumbsDown /> Downvote</button>
            <button className="flex items-center gap-2 bg-transparent border-none text-white cursor-pointer text-xl hover:text-gray-300"><FaPlus /> Add to List</button>
            <button className="flex items-center gap-2 bg-transparent border-none text-white cursor-pointer text-xl hover:text-gray-300"><FaEllipsisH /> More</button>
          </div>
        </div>
      </div>

      <InfoSection />
    </div>
  );
}

export default HeroSection;
