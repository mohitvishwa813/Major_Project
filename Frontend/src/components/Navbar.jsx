import { useState } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
const Navbar = ({ userId }) => {
  const [isCardVisible, setCardVisible] = useState(false);
  const [userData, setUserData] = useState(null);
  const Id = userId; // Replace with actual user ID or get it dynamically

  const toggleCardVisibility = () => {
    setCardVisible(!isCardVisible);

    // Fetch user data when the card is made visible
    if (!isCardVisible) {
      fetchUserData();
    }
  };

  const fetchUserData = async () => {
    try {
      const response = await fetch(
        `http://localhost:3000/api/data/profile?userId=${Id}`
      );
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const data = await response.json();
      console.log(data);
      setUserData(data); // Assuming the API returns an object with user data
    } catch (error) {
      console.error("Failed to fetch user data:", error);
    }
  };

  return (
    <div className="flex justify-between items-center border-b-2 mt-[1.4rem] w-full">
      <div className="w-[50vw]">   <div className="w-[120px] h-[50px] bg-cover ">EventFinder</div></div>
   
      {/* <div className="w-[120px] h-[50px] bg-cover mb-[2rem] mr-[20rem] rounded-[1.6rem]">
        <input
          type="text"
          className="w-[450px] border-2 px-8 py-4 rounded-[1.6rem] shadow-lg"
          placeholder="search here..."
        />
      </div> */}
      <div className="w-[120px] h-[50px] bg-cover drop-shadow-xl">Chats</div>
      <div className="w-[120px] h-[50px] bg-cover drop-shadow-xl">Booking</div>
      <div className="w-[120px] h-[50px] bg-cover drop-shadow-xl">Address</div>
      <div className="relative">
        <button
          className="w-[45px] h-[20px] bg-cover mb-[2rem]"
          onClick={toggleCardVisibility}
        >
          <img
            src="/assets/profile-user.png" // Replace with your profile icon path
            alt="profile-logo"
            className="shadow-xl rounded-[50%]"
          />
        </button>
        {isCardVisible && (
          <div className="absolute top-[-10px] right-[-10px] w-[400px] h-auto bg-white shadow-lg rounded-lg p-4 z-50">
            <button
              onClick={toggleCardVisibility}
              className="absolute top-2 right-2 bg-red-500 text-white rounded-full p-2"
            >
              X
            </button>
            <div className="bg-white overflow-hidden shadow rounded-lg border">
              <div className="px-4 py-5 sm:px-6">
                <h3 className="text-lg leading-6 font-medium text-gray-900">
                  Profile
                </h3>
                {userData ? (
                  <p className="mt-1 max-w-2xl text-sm text-gray-500">
                    {/* Displaying fetched user data */}
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
                <dl className="sm:divide-y sm:divide-gray-200 flex justify-center flex-col items-start  pl-5">
                  {/* Additional fields can be added here */}
                  <div className="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:pr-6">
                    <dt className="text-sm font-medium text-gray-500">
                      User ID :
                    </dt>
                    <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                      {userId}
                    </dd>
                  </div>
                  {/* Logout Button */}
                  <Link
                    to="/"
                    className="mt-2 px-6 w-[100px] py-2 border-2 border-black rounded-2xl  pl-5"
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
  );
};

// PropTypes validation for Navbar component
Navbar.propTypes = {
  userId: PropTypes.string.isRequired, // Validate that userId is a required string
};
export default Navbar;
