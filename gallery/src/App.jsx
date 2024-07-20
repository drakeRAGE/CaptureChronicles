import { BrowserRouter , Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Profile from './pages/Profile'
import About from './pages/About'
import Signin from './pages/Signin'
import SignUp from './pages/SignUp'
import Header from './components/Header'
import PrivateRoute from './components/PrivateRoute'
import CreateListing from './pages/CreateListing'
import UpdateListing from './pages/UpdateListing'
import Listing from './pages/Listing'
import Search from './pages/Search'
import Single_Event from './pages/Single_Event'
// import NewHome from './pages/NewHome'
// import Darkhome from './pages/darkHome'
import Contact from './pages/Contact'
// import Footer from './components/Footer'
// import Newsletter from './components/Newsletter'
import Events from './pages/Events'



//This repo basic code is taken from my diff. repo of book-mern-stack
export default function App() {
  return (
    <BrowserRouter>
    <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sign-in" element={<Signin />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/about" element={<About />} />
        <Route path="/events/*" element={<Single_Event />} />
        <Route path="/event/*" element={<Events />} />
        {/* <Route path="/newHome" element={<NewHome/>} />
        <Route path="/darkHome" element={<Darkhome/>} /> */}
        <Route path="/contact" element={<Contact/>} />
        <Route path="/listing/:listingId" element={<Listing />} />
        <Route path="/search" element={<Search />} />
        <Route element={<PrivateRoute />}>
          <Route path="/profile" element={<Profile />} />
          <Route path="/create-listing" element={<CreateListing />} />
          <Route path="/update-listing/:listingId" element={<UpdateListing />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}







// import React, { useState } from 'react';
// import EventList from './pages/Events';

// const App = () => {
//   const [selectedTab, setSelectedTab] = useState('upcoming');

//   const events = {
//     previous: [
//       { id: 1, name: 'Previous Event 1', imageUrl: '/images/prev1.jpg' },
//       { id: 2, name: 'Previous Event 2', imageUrl: '/images/prev2.jpg' },
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
//     <div className="container mx-auto p-4">
//       <h1 className="text-4xl font-bold text-center mb-8">Event Page</h1>
//       <div className="flex justify-center mb-8">
//         {['previous', 'ongoing', 'upcoming'].map((tab) => (
//           <button
//             key={tab}
//             className={`px-6 py-3 mx-2 rounded-lg font-semibold transition-colors duration-300 ${
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







