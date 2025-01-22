import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

// eslint-disable-next-line react/prop-types
const OrganizerDashboard = ({ userId }) => {
  const [userData, setUserData] = useState(null);
  const [isCardVisible, setCardVisible] = useState(false);
  //for bank details
  const [showCard, setShowCard] = useState(false); // Changed variable name
  const [fullName, setFullName] = useState("");
  const [number, setNumber] = useState("");
  const [upiId, setUpiId] = useState("");

  const handleSave = () => {
    // Logic to save bank details
    console.log({ fullName, number, upiId });
    setShowCard(false); // Close the card after saving
  };
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
        `https://major-project9144.onrender.com/api/data/profile?userId=${Id}`
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

  useEffect(() => {
    console.log("OrganizerDashboard component rendered");
    console.log("userId:", userId);
    console.log("userData:", userData);
    fetchUserData();
    console.log(userData);
  }, [Id]); // Dependency array includes Id to refetch if it changes

  return (
    <>
      <div className="w-full">
        <div className="w-full h-full  ">
          <div className=" flex h-full">
            {/* left div */}
            {/* <div
              className="w-[25%]   bg-[#fffff] 
        "
              // style={{
              //   backgroundImage: `url('https://i.postimg.cc/c1n18ftF/Screenshot-623.png')`,
              //   backgroundSize: "cover",
              // }}
            >
              <div className="w-full h-1/3  border-b border-black flex justify-center flex-col items-center  pl-7">
                <div>
                  <img
                    src="/assets/boy.png"
                    alt=""
                    className="w-[8vw] h-[16vh] rounded-[50%]   border border-white"
                  />
                  <h1 className="text-[#272768] text-[3vh] font-[600] mt-4">
                  

                    <div>
                      <p className="text-[12px]">Uuid: {userId}</p>
                    </div>
                  </h1>
                </div>
              </div>

              <div className="h-1/2  flex flex-col  border-y border-white gap-8 pt-10 pl-4">
                <button
                  className="hover:text-[#dbf3ff]  px-4 py-2  w-[290px] text-start] text-start  text-white     bg-[#292525] rounded-2xl"
                  onClick={toggleCardVisibility}
                >
                  Profile
                </button>
                {isCardVisible && (
                  <div className="absolute top-[10rem] left-[3rem] w-[800px] min-h-[400px] h-auto bg-[#8b8b8b] shadow-lg rounded-lg p-4 z-50">
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
                 
                          <div className="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:pr-6">
                            <dt className="text-sm font-medium text-gray-500">
                              User ID :
                            </dt>
                            <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                              {userId}
                            </dd>
                        
                        </dl>
                      </div>
                    </div>
                  </div>
                )}
                <Link
                  to="/add-service"
                  state={{ userId }} // Pass userId here
                  className=" hover:text-[#dbf3ff]  px-4 py-2  w-[290px] text-start] text-start  text-white     bg-[#292525] rounded-2xl"
                >
                  Add Serivces
                </Link>
                <Link
                  to={`/manage-service?userId=${userId}`}
                  state={{ userId }}
                  className=" px-4 py-2  hover:text-[#dbf3ff]    w-[290px] text-start  text-white  bg-[#292525]  rounded-2xl"
                >
                  Manage Services
                </Link>
                <Link
                  to={`/manage-service?userId=${userId}`}
                  state={{ userId }}
                  className=" px-4 py-2  hover:text-[#dbf3ff]    w-[290px] text-start  text-white  bg-[#292525] rounded-2xl"
                >
                  Booking
                </Link>
                <div>
                  <button
                    onClick={() => setShowCard(true)} // Updated to new variable name
                    className="px-4 py-2 hover:text-[#dbf3ff] w-[290px] text-start text-white bg-[#292525] rounded-2xl"
                  >
                    Bank Details
                  </button>

                  {showCard && ( // Updated to new variable name
                    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
                      <div className="bg-white w-[500px] h-[400px] p-4 rounded-lg shadow-lg">
                        <h2 className="text-xl mb-4">Bank Details</h2>
                        <input
                          type="text"
                          placeholder="Full Name"
                          value={fullName}
                          onChange={(e) => setFullName(e.target.value)}
                          className="w-full mb-2 p-2 border border-gray-300 rounded"
                        />
                        <input
                          type="text"
                          placeholder="Number"
                          value={number}
                          onChange={(e) => setNumber(e.target.value)}
                          className="w-full mb-2 p-2 border border-gray-300 rounded"
                        />
                        <input
                          type="text"
                          placeholder="Merchant UPI ID"
                          value={upiId}
                          onChange={(e) => setUpiId(e.target.value)}
                          className="w-full mb-4 p-2 border border-gray-300 rounded"
                        />
                        <div className="flex justify-between">
                          <button
                            onClick={handleSave}
                            className="bg-blue-500 text-white px-4 py-2 rounded"
                          >
                            Save
                          </button>
                          <button
                            onClick={() => setShowCard(false)}
                            className="bg-red-500 text-white px-4 py-2 rounded"
                          >
                            Cancel
                          </button>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
           
              </div>

              <div className="flex justify-center w-full pt-10">
                <Link
                  to="/"
                  className=" hover:text-red-600  px-4 py-2  w-[290px] text-center border border-black    rounded-[4rem] "
                >
                  Logout
                </Link>
              </div>
            </div> */}
            <div className="w-full lg:w-1/5 bg-gray-800 text-white min-h-screen">
              <div className="p-6">
                <p className="text-sm">Event Organizer</p>
                <h1 className="text-lg font-bold">
                  {userData ? (
                    <p className="mt-1 max-w-2xl text-sm ">
                      Name: {userData.user.name}
                      <br />
                      Email: {userData.user.email}
                    </p>
                  ) : (
                    <p className="mt-1 max-w-2xl text-sm">Loading...</p>
                  )}
                </h1>
              </div>
              <nav className="mt-6">
                <ul className="flex flex-col">
                  <li className="p-3 hover:bg-gray-700 cursor-pointer">
                    Dashboard
                  </li>
                  <Link
                    to="/add-service"
                    state={{ userId }} // Pass userId here
                    className="p-3 hover:bg-gray-700 cursor-pointer"
                  >
                    Add Serivces
                  </Link>
                  <Link
                    to={`/manage-service?userId=${userId}`}
                    state={{ userId }}
                    className="p-3 hover:bg-gray-700 cursor-pointer"
                  >
                    Manage Services
                  </Link>
                  <Link
                    to={`/manage-service?userId=${userId}`}
                    state={{ userId }}
                    className="p-3 hover:bg-gray-700 cursor-pointer"
                  >
                    Booking
                  </Link>
                  <div>
                    <button
                      onClick={() => setShowCard(true)} // Updated to new variable name
                      className="p-3 hover:bg-gray-700 cursor-pointer"
                    >
                      Bank Details
                    </button>

                    {showCard && ( // Updated to new variable name
                      <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
                        <div className="bg-white w-[500px] h-[400px] p-4 rounded-lg shadow-lg">
                          <h2 className="text-xl mb-4">Bank Details</h2>
                          <input
                            type="text"
                            placeholder="Full Name"
                            value={fullName}
                            onChange={(e) => setFullName(e.target.value)}
                            className="w-full mb-2 p-2 border border-gray-300 rounded"
                          />
                          <input
                            type="text"
                            placeholder="Number"
                            value={number}
                            onChange={(e) => setNumber(e.target.value)}
                            className="w-full mb-2 p-2 border border-gray-300 rounded"
                          />
                          <input
                            type="text"
                            placeholder="Merchant UPI ID"
                            value={upiId}
                            onChange={(e) => setUpiId(e.target.value)}
                            className="w-full mb-4 p-2 border border-gray-300 rounded"
                          />
                          <div className="flex justify-between">
                            <button
                              onClick={handleSave}
                              className="bg-blue-500 text-white px-4 py-2 rounded"
                            >
                              Save
                            </button>
                            <button
                              onClick={() => setShowCard(false)}
                              className="bg-red-500 text-white px-4 py-2 rounded"
                            >
                              Cancel
                            </button>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                  <li className="p-3 hover:bg-gray-700 cursor-pointer">Chat</li>
                  <li className="p-3 hover:bg-gray-700 cursor-pointer">
                    Settings
                  </li>
                </ul>
              </nav>
              <div className="mt-auto p-3">
                <Link
                  to="/"
                  className="w-full bg-red-500 text-white p-2 rounded"
                >
                  Logout
                </Link>
              </div>
            </div>
            {/* right div */}
            <div className="w-full lg:w-4/5 p-6">
              {/* Header */}
              <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6">
                <h2 className="text-2xl font-bold flex gap-2">
                  Welcome back{" "}
                  {userData ? (
                    <p className="text-2xl font-bold flex  ">
                      {userData.user.name}
                    </p>
                  ) : (
                    <p className="mt-1 max-w-2xl text-sm">Loading...</p>
                  )}
                  ,
                </h2>
                <div className="flex items-center gap-4 mt-4 md:mt-0">
                  <div className="w-8 h-8 bg-gray-300 rounded-full"></div>
                  <div className="w-8 h-8 bg-gray-300 rounded-full"></div>
                </div>
              </div>

              {/* Statistics */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
                <div className="p-4 bg-white rounded shadow">
                  <h3 className="text-gray-600">Total Services</h3>
                  <p className="text-2xl font-bold">24</p>
                  <p className="text-sm text-green-500">↑ 12% vs last month</p>
                </div>
                <div className="p-4 bg-white rounded shadow">
                  <h3 className="text-gray-600">Total Bookings</h3>
                  <p className="text-2xl font-bold">156</p>
                  <p className="text-sm text-green-500">↑ 8% vs last month</p>
                </div>
                <div className="p-4 bg-white rounded shadow">
                  <h3 className="text-gray-600">Total Earnings</h3>
                  <p className="text-2xl font-bold">$12,426</p>
                  <p className="text-sm text-green-500">↑ 23% vs last month</p>
                </div>
                <div className="p-4 bg-white rounded shadow">
                  <h3 className="text-gray-600">Average Rating</h3>
                  <p className="text-2xl font-bold">4.8</p>
                  <p className="text-sm text-green-500">↑ 4% vs last month</p>
                </div>
              </div>

              {/* Recent Bookings */}
              {/* <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <div className="bg-white p-6 rounded shadow">
                  <h3 className="text-lg font-bold mb-4">Recent Bookings</h3>
                  <table className="w-full text-left text-gray-600">
                    <thead>
                      <tr>
                        <th className="py-2 text-sm">Booking ID</th>
                        <th className="py-2 text-sm">Customer</th>
                        <th className="py-2 text-sm">Service</th>
                        <th className="py-2 text-sm">Date</th>
                        <th className="py-2 text-sm">Status</th>
                        <th className="py-2 text-sm">Amount</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="py-2 text-sm">#BK-2401</td>
                        <td className="py-2 text-sm">Sarah Johnson</td>
                        <td className="py-2 text-sm">Wedding </td>
                        <td className="py-2 text-sm">Jan 15, 2025</td>
                        <td className="py-2 text-sm">
                          <span className="bg-green-100 text-green-600 px-2 py-1 rounded text-xs">
                            Confirmed
                          </span>
                        </td>
                        <td className="py-2 text-sm">$1,200</td>
                      </tr>
                      <tr>
                        <td className="py-2 text-sm">#BK-2402</td>
                        <td className="py-2 text-sm">Mike Peters</td>
                        <td className="py-2 text-sm">Birthday Party</td>
                        <td className="py-2 text-sm">Jan 18, 2025</td>
                        <td className="py-2 text-sm">
                          <span className="bg-yellow-100 text-yellow-600 px-2 py-1 rounded text-xs">
                            Pending
                          </span>
                        </td>
                        <td className="py-2 text-sm">$800</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

           
                <div className="bg-white p-6 rounded shadow">
                  <h3 className="text-lg font-bold mb-4">Popular Services</h3>
                  <div className="space-y-4">
                    <div className="flex justify-between">
                      <p className="text-sm">Wedding Photography</p>
                      <p className="font-bold text-sm">$1,200</p>
                    </div>
                    <div className="flex justify-between">
                      <p className="text-sm">Live Band</p>
                      <p className="font-bold text-sm">$800</p>
                    </div>
                  </div>
                </div>
              </div> */}

              {/* Recent Reviews */}
              <div className="bg-white p-6 rounded shadow mt-6">
                <h3 className="text-lg font-bold mb-4">Recent Reviews</h3>
                <div className="space-y-4">
                  <div>
                    <p className="font-bold text-sm">Emily White</p>
                    <p className="text-xs">⭐⭐⭐⭐⭐</p>
                    <p className="text-xs">
                      Amazing service! The photos turned out beautifully.
                    </p>
                  </div>
                  <div>
                    <p className="font-bold text-sm">James Cooper</p>
                    <p className="text-xs">⭐⭐⭐⭐⭐</p>
                    <p className="text-xs">
                      Great band performance at our wedding!
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default OrganizerDashboard;
