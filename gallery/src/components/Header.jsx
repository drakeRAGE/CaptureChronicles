import { useEffect, useState } from "react";
import { FaSearch } from "react-icons/fa";
import { useSelector } from "react-redux";
import { Link, useNavigate, useLocation } from "react-router-dom";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  const { currentUser } = useSelector((state) => state.user);
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();
  const location = useLocation();

  const isActive = (path) =>
    location.pathname === path
      ? "text-blue-400 underline underline-offset-4"
      : "text-gray-200";

  const handleSubmit = (e) => {
    e.preventDefault();
    const urlParams = new URLSearchParams(window.location.search);
    urlParams.set("searchTerm", searchTerm);
    navigate(`/search?${urlParams.toString()}`);
  };

  useEffect(() => {
    const urlParams = new URLSearchParams(location.search);
    const searchTermFromUrl = urlParams.get("searchTerm");
    if (searchTermFromUrl) setSearchTerm(searchTermFromUrl);
  }, [location.search]);

  return (
    <header className="w-full sticky top-0 z-50 backdrop-blur-md bg-gradient-to-r from-slate-800/90 via-slate-700/90 to-slate-800/90 border-b border-slate-600 shadow-lg">
      <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between px-5 py-3">
        {/* Logo */}
        <Link
          to="/"
          className="text-2xl font-bold tracking-widest text-white uppercase hover:text-blue-400 transition-all"
        >
          Dragbos<span className="text-blue-400">Corp</span>
        </Link>

        {/* Mobile Toggle */}
        <button
          onClick={toggleMenu}
          className="md:hidden text-gray-200 focus:outline-none"
          aria-label="Toggle navigation menu"
        >
          <svg
            fill="currentColor"
            viewBox="0 0 20 20"
            className={`w-7 h-7 transition-transform duration-300 ${
              menuOpen ? "rotate-180" : ""
            }`}
          >
            <path
              d={
                menuOpen
                  ? "M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                  : "M3 5h14M3 10h14M3 15h14"
              }
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
            />
          </svg>
        </button>

        {/* Nav Menu */}
        <div
          className={`w-full md:w-auto transition-all duration-500 ease-in-out overflow-hidden md:overflow-visible ${
            menuOpen
              ? "max-h-[500px] opacity-100 mt-4"
              : "max-h-0 opacity-0 md:max-h-full md:opacity-100"
          }`}
        >
          <div className="flex flex-col md:flex-row md:items-center md:space-x-5 bg-slate-800/90 md:bg-transparent rounded-2xl md:rounded-none p-4 md:p-0 border border-slate-700 md:border-0 shadow-lg md:shadow-none space-y-3 md:space-y-0">
            {/* Navigation Links */}
            <nav className="flex flex-col md:flex-row md:items-center space-y-2 md:space-y-0 md:space-x-4">
              {["/", "/about", "/contact", "/events"].map((path, i) => {
                const names = ["Home", "About", "Contact", "Events"];
                return (
                  <Link
                    key={path}
                    to={path}
                    onClick={() => setMenuOpen(false)}
                    className={`relative text-sm font-medium px-3 py-1 transition-all duration-200 ${isActive(
                      path
                    )} hover:text-blue-400 after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[2px] after:bg-blue-400 hover:after:w-full after:transition-all after:duration-300`}
                  >
                    {names[i]}
                  </Link>
                );
              })}
            </nav>

            {/* Search */}
            <form
              onSubmit={handleSubmit}
              className="flex items-center bg-slate-800/70 rounded-full p-1 mt-3 md:mt-0 border border-slate-600"
            >
              <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Search..."
                className="bg-transparent px-3 py-1 text-sm text-gray-200 focus:outline-none w-full md:w-48"
              />
              <button className="p-2 bg-blue-600 rounded-full hover:bg-blue-700 transition">
                <FaSearch className="text-white w-4 h-4" />
              </button>
            </form>

            {/* Profile / Login */}
            <div className="mt-3 md:mt-0 md:ml-2 flex justify-center">
              {currentUser ? (
                <Link to="/profile" onClick={() => setMenuOpen(false)}>
                  <img
                    src={currentUser.avatar || "/default-profile.png"}
                    alt="Profile"
                    className="h-9 w-9 rounded-full border-2 border-blue-500 hover:scale-105 transition"
                  />
                </Link>
              ) : (
                <Link
                  to="/sign-in"
                  onClick={() => setMenuOpen(false)}
                  className="bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-600 px-5 py-2 rounded-full text-sm font-semibold text-white shadow-md hover:shadow-lg transform hover:-translate-y-0.5 transition-all"
                >
                  Log in
                </Link>
              )}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
