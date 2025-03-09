import { useState } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";

const Navbar = ({ userId }) => {
  const [isCardVisible, setCardVisible] = useState(false);
  const [userData, setUserData] = useState(null);
  const [isMobileEventsOpen, setIsMobileEventsOpen] = useState(false);
  const [showChatTooltip, setShowChatTooltip] = useState(false);

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const Id = userId;

  const toggleCardVisibility = () => {
    setCardVisible(!isCardVisible);
    if (!isCardVisible) {
      fetchUserData();
    }
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const fetchUserData = async () => {
    try {
      const response = await fetch(
        `https://major-project9144.onrender.com/api/data/profile?userId=${Id}`
      );
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const data = await response.json();
      console.log(data);
      setUserData(data);
    } catch (error) {
      console.error("Failed to fetch user data:", error);
    }
  };

  return (
    <div className="relative">
      <div className="flex justify-between items-center border-b-2 w-full px-4 md:px-[10vh] py-3 z-50 fixed bg-white">
        {/* Logo */}
        <a href="/userhome" className="w-full md:w-[40vw] ">
          <div className="min-w-[120px]  text-[#a32697] text-[3svh]">
            EventFinder
          </div>
        </a>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden  ">
          <button onClick={toggleMobileMenu} className="z-50">
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-4 ">
          {/* Featured Events Dropdown */}
          <div className="relative group  pr-12">
            <button className="text-[2.2vh]">Featured Events</button>
            <div className="absolute hidden group-hover:block bg-white shadow-md rounded-md mt-2 p-2 w-[300px]">
              <Link
                to="/service-category?category=Birthday"
                className="block px-4 py-2 hover:bg-gray-200 transition duration-200 rounded-md"
              >
                Birthday
              </Link>
              <Link
                to="/service-category?category=Wedding"
                className="block px-4 py-2 hover:bg-gray-200 transition duration-200 rounded-md"
              >
                Wedding
              </Link>
              <Link
                to="/service-category?category=Engagement"
                className="block px-4 py-2 hover:bg-gray-200 transition duration-200 rounded-md"
              >
                Engagement
              </Link>
              <Link
                to="/service-category?category=Love_Proposal"
                className="block px-4 py-2 hover:bg-gray-200 transition duration-200 rounded-md"
              >
                Love Proposal
              </Link>
              <Link
                to="/service-category?category=At_Your_Place"
                className="block px-4 py-2 hover:bg-gray-200 transition duration-200 rounded-md"
              >
                At Your Place
              </Link>
            </div>
          </div>
          {/* Chats with Hover Effect */}
          <div className="relative group pr-12">
            <div className="text-[2.2vh] cursor-pointer">Chats</div>
            <span className="absolute left-0 top-full hidden group-hover:block bg-black text-white text-xs px-2 py-1 rounded-md mt-1 w-[170px]">
              This feature is coming soon
            </span>
          </div>

          <div className="w-[120px]  bg-cover drop-shadow-xl text-[2.2vh]">
            Booking
          </div>
          <div className="w-[120px]  bg-cover drop-shadow-xl text-[2.2vh]">
            Address
          </div>

          {/* Profile Button */}
          <div className="relative">
            <button
              className="w-[30px] bg-cover "
              onClick={toggleCardVisibility}
            >
              <img
                src="/assets/profile-user.png"
                alt="profile-logo"
                className="shadow-xl rounded-[50%]"
              />
            </button>
            {isCardVisible && (
              <div className="absolute top-[-10px] right-[-10px] w-[400px] h-auto bg-white shadow-lg rounded-lg p-4 z-50">
                {/* Desktop Profile Card Content */}
                <button
                  onClick={toggleCardVisibility}
                  className="absolute top-2 right-2 bg-red-500 text-white rounded-full p-2"
                >
                  X
                </button>
                <div className="bg-white overflow-hidden shadow rounded-lg ">
                  {/* Profile card content remains the same */}
                  <div className="px-4 py-5 sm:px-6">
                    <h3 className="text-lg leading-6 font-medium text-gray-900">
                      Profile
                    </h3>
                    {userData ? (
                      <p className="mt-1 max-w-2xl text-sm text-gray-500">
                        Name: {userData.user.name}
                        <br />
                        Email: {userData.user.email}
                      </p>
                    ) : (
                      <p className="mt-1 max-w-2xl text-sm text-gray-500">
                        Loading...
                      </p>
                    )}
                  </div>
                  <div className="border-t border-gray-200 px-4 py-5 sm:p-0 mb-14">
                    <dl className="sm:divide-y sm:divide-gray-200 flex justify-center flex-col items-start pl-5">
                      <div className="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:pr-6">
                        <dt className="text-sm font-medium text-gray-500">
                          User ID :
                        </dt>
                        <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                          {userId}
                        </dd>
                      </div>
                      <Link
                        to="/"
                        className="mt-2 px-6 w-[100px] py-2 border-2 border-black rounded-2xl pl-5"
                      >
                        Logout
                      </Link>
                    </dl>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="absolute top-full left-0 w-full bg-white shadow-lg md:hidden z-50 ">
            <div className="flex flex-col items-center space-y-4 py-4 px-10 ">
              {/* Mobile Profile Section */}
              <div className="w-full text-left py-2 border-b border-black">
                <button
                  onClick={toggleCardVisibility}
                  className="w-[45px] h-[20px]"
                >
                  Profile
                </button>
              </div>

              {/* Chats (Click to Show Message) */}
              <div className="w-full text-left py-2 border-b border-black relative">
                <button onClick={() => setShowChatTooltip(!showChatTooltip)}>
                  Chats
                </button>
                {showChatTooltip && (
                  <span className="absolute left-0 top-full bg-black text-white text-xs px-2 py-1 rounded-md mt-1">
                    This feature is coming soon
                  </span>
                )}
              </div>
              <div className="w-full text-left py-2 border-b border-black">
                Booking
              </div>
              <div className="w-full text-left py-2 border-b border-black ">
                Address
              </div>
              <div className="w-full">
                <button
                  onClick={() => setIsMobileEventsOpen(!isMobileEventsOpen)}
                  className="w-full text-left py-2 border-b border-black flex justify-between items-center"
                >
                  Featured Events
                  <span>{isMobileEventsOpen ? "▲" : "▼"}</span>
                </button>

                {isMobileEventsOpen && (
                  <div className="flex flex-col bg-gray-100 p-2 rounded-md">
                    <Link
                      to="/service-category?category=Birthday"
                      className="block px-4 py-2 hover:bg-gray-200 transition duration-200 rounded-md"
                    >
                      Birthday
                    </Link>
                    <Link
                      to="/service-category?category=Wedding"
                      className="block px-4 py-2 hover:bg-gray-200 transition duration-200 rounded-md"
                    >
                      Wedding
                    </Link>
                    <Link
                      to="/service-category?category=Engagement"
                      className="block px-4 py-2 hover:bg-gray-200 transition duration-200 rounded-md"
                    >
                      Engagement
                    </Link>
                    <Link
                      to="/service-category?category=Love_Proposal"
                      className="block px-4 py-2 hover:bg-gray-200 transition duration-200 rounded-md"
                    >
                      Love Proposal
                    </Link>
                    <Link
                      to="/service-category?category=At_Your_Place"
                      className="block px-4 py-2 hover:bg-gray-200 transition duration-200 rounded-md"
                    >
                      At Your Place
                    </Link>
                  </div>
                )}
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Mobile Profile Card (Always visible when isCardVisible is true) */}
      {isCardVisible && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center border border-red-500 md:hidden">
          <div className="w-[90%] max-w-md bg-white shadow-lg rounded-lg p-4 relative">
            <button
              onClick={toggleCardVisibility}
              className="absolute top-2 right-2 bg-red-500 text-white rounded-full p-2"
            >
              X
            </button>
            <div className="bg-white overflow-hidden shadow rounded-lg border ">
              <div className="px-4 py-5 sm:px-6">
                <h3 className="text-lg leading-6 font-medium text-gray-900">
                  Profile
                </h3>
                {userData ? (
                  <p className="mt-1 max-w-2xl text-sm text-gray-500">
                    Name: {userData.user.name}
                    <br />
                    Email: {userData.user.email}
                  </p>
                ) : (
                  <p className="mt-1 max-w-2xl text-sm text-gray-500">
                    Loading...
                  </p>
                )}
              </div>
              <div className="border-t border-gray-200 px-4 py-5 sm:p-0 mb-14">
                <dl className="sm:divide-y sm:divide-gray-200 flex justify-center flex-col items-start pl-5">
                  <div className="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:pr-6">
                    <dt className="text-sm font-medium text-gray-500">
                      User ID :
                    </dt>
                    <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                      {userId}
                    </dd>
                  </div>
                  <Link
                    to="/"
                    className="mt-2 px-6 w-[100px] py-2 border-2 border-black rounded-2xl pl-5"
                  >
                    Logout
                  </Link>
                </dl>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

Navbar.propTypes = {
  userId: PropTypes.string.isRequired,
};

export default Navbar;
