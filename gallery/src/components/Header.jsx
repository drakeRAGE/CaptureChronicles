import { useEffect, useState } from 'react';
import { FaSearch } from 'react-icons/fa';
import { useSelector } from 'react-redux';
import { Link, useNavigate, useLocation } from 'react-router-dom';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const { currentUser } = useSelector((state) => state.user);
  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate();
  const location = useLocation();
  const isActive = (path) =>
    location.pathname === path ? "text-blue-500 font-bold" : "";

  const handleSubmit = (e) => {
    e.preventDefault();

    const urlParams = new URLSearchParams(window.location.search);
    urlParams.set('searchTerm', searchTerm);
    const searchQuery = urlParams.toString();
    navigate(`/search?${searchQuery}`);
  };

  useEffect(() => {
    const urlParams = new URLSearchParams(location.search);
    const searchTermFromUrl = urlParams.get('searchTerm');
    if (searchTermFromUrl) {
      setSearchTerm(searchTermFromUrl);
    }
  }, [location.search]);

  return (
    <div className="w-full text-black-700 bg-slate-700 dark-mode:text-gray-200 dark-mode:bg-gray-800">
      <div className="flex flex-col max-w-screen-xl px-4 mx-auto md:items-center md:justify-between md:flex-row md:px-6 lg:px-8">
        <div className="p-4 flex flex-row items-center justify-between">
          <a href="/" className="text-lg font-semibold tracking-widest text-white uppercase rounded-lg dark-mode:text-white focus:outline-none focus:shadow-outline">
            Dragbos Corp
          </a>
          <button className="md:hidden rounded-lg focus:outline-none focus:shadow-outline" onClick={toggleMenu}>
            <svg fill="currentColor" viewBox="0 0 20 20" className="w-6 h-6">
              <path
                d={
                  menuOpen
                    ? 'M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z'
                    : 'M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM9 15a1 1 0 011-1h6a1 1 0 110 2h-6a1 1 0 01-1-1z'
                }
              />
            </svg>
          </button>
        </div>
        <form onSubmit={handleSubmit} className="hidden md:flex bg-gray-300 p-1 rounded-full items-center">
          <input
            onChange={(e) => setSearchTerm(e.target.value)}
            value={searchTerm}
            type="text"
            placeholder="Search..."
            className="bg-transparent text-gray-800 focus:outline-none px-4 py-2 w-24 sm:w-64"
          />
          <button className="ml-2 p-2 bg-black hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-300 rounded-full">
            <FaSearch className="text-white" />
          </button>
        </form>
        <nav
          className={`flex-col flex-grow pb-4 text-white md:pb-0 md:flex md:justify-end md:flex-row ${
            menuOpen ? 'flex' : 'hidden'
          }`}
        >
          <Link
            className={`px-4 ${isActive("/")}  py-2 mt-2 text-sm font-semibold bg-transparent rounded-lg dark-mode:bg-transparent dark-mode:hover:bg-gray-600 dark-mode:focus:bg-gray-600 dark-mode:focus:text-white dark-mode:hover:text-white dark-mode:text-gray-200 md:mt-0 md:ml-4 hover:text-gray-900  hover:bg-gray-200  focus:outline-none focus:shadow-outline`}
            to="/"
          >
            Home
          </Link>
          <Link
            className={`px-4 ${isActive("/about")} py-2 mt-2 text-sm font-semibold bg-transparent rounded-lg dark-mode:bg-transparent dark-mode:hover:bg-gray-600 dark-mode:focus:bg-gray-600 dark-mode:focus:text-white dark-mode:hover:text-white dark-mode:text-gray-200 md:mt-0 md:ml-4 hover:text-gray-900  hover:bg-gray-200  focus:outline-none focus:shadow-outline`}
            to="/about"
          >
            About 
          </Link>
          <Link
            className={`px-4 ${isActive("/contact")} py-2 mt-2 text-sm font-semibold bg-transparent rounded-lg dark-mode:bg-transparent dark-mode:hover:bg-gray-600 dark-mode:focus:bg-gray-600 dark-mode:focus:text-white dark-mode:hover:text-white dark-mode:text-gray-200 md:mt-0 md:ml-4 hover:text-gray-900  hover:bg-gray-200  focus:outline-none focus:shadow-outline`}
            to="/contact"
          >
            Contact
          </Link>
          <Link
            className={`px-4 ${isActive("/events")} py-2 mt-2 mr-4 text-sm font-semibold bg-transparent rounded-lg dark-mode:bg-transparent dark-mode:hover:bg-gray-600 dark-mode:focus:bg-gray-600 dark-mode:focus:text-white dark-mode:hover:text-white dark-mode:text-gray-200 md:mt-0 md:ml-4 hover:text-gray-900  hover:bg-gray-200  focus:outline-none focus:shadow-outline`}
            to="/events"
          >
            Events
          </Link>
          <Link to="profile">
            {currentUser ? (
              <img className="rounded-full pt-1 h-7 w-7 object-cover" src={currentUser.avatar || '/default-profile.png'} alt="profile" />
            ) : (
              <Link
                className="block px-4 py-2 mt-2 text-sm font-semibold rounded-lg  md:mt-0 md:ml-4 bg-blue-400 hover:bg-blue-700 text-white transition-all"
              >
                Log-in
              </Link>
            )}
          </Link>
        </nav>
      </div>
    </div>
  );
};

export default Header;
