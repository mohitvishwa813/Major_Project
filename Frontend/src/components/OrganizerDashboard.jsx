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

  useEffect(() => {
    console.log("OrganizerDashboard component rendered");
    console.log("userId:", userId);
    console.log("userData:", userData);
    fetchUserData();
    console.log(userData);
  }, [Id]); // Dependency array includes Id to refetch if it changes

  return (
    <div className="w-full h-full  ">
      <div className=" flex h-full">
        {/* left div */}
        <div
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
                {/* {userData.user.name} */}

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
            {/* <Link
              to="/"
              className=" px-4 py-2   hover:text-[#dbf3ff]   w-[290px] text-start  text-white  bg-[#292525]  rounded-2xl"
            >
              Bank Details
            </Link> */}
          </div>

          <div className="flex justify-center w-full pt-10">
            <Link to='/' className=" hover:text-red-600  px-4 py-2  w-[290px] text-center border border-black    rounded-[4rem] ">
              Logout
            </Link>
          </div>
        </div>
        {/* right div */}
        <div className="w-[75%] mt-14   h-[92%]   bg-[#ebebeb] flex justify-center flex-col rounded-[2rem]  border border-[#d7d7d7] ">
          <div className="w-[90%] h-[20%]   bg-[#ffffff] rounded-[2rem] mx-[5%] mb-2">
            <div className="flex justify-between px-20 pt-10 ">
              <div className="flex gap-5">
                {" "}
                <div className="w-[30px] h-[40px]">
                  <img src="/assets/home.png" alt="" className="w-full" />{" "}
                </div>{" "}
                <h1 className="text-[#272768] text-3xl font-semibold">
                  Dashboard
                </h1>
              </div>
              <div className="flex gap-5">
                {" "}
                <h1 className="text-[#272768] text-xl font-semibold">
                  Overview
                </h1>
                <div className="w-[20px] h-[40px]">
                  <img src="/assets/inspection.png" alt="" className="w-full" />{" "}
                </div>{" "}
              </div>
            </div>
          </div>
          <div className="w-full h-[70%] border">
            <div className="flex w-full border border-[#d7d7d7] rounded-t-[2rem] bg-white">
              <h1 className="w-1/2 flex justify-center py-4 border-[#d7d7d7] border-r-2 text-xl text-[#000000]">
                Chats
              </h1>
              <h1 className="w-1/2 flex justify-center text-xl py-4 text-[#000000]">
                Calls
              </h1>
            </div>

            <div className="flex-1 overflow-y-auto p-4">
              <ul className="divide-y divide-gray-300 h-full">
                {/* Chat List */}
                <li className="flex items-center p-2 hover:bg-blue-200 cursor-pointer transition duration-200">
                  <img
                    src="https://randomuser.me/api/portraits/men/1.jpg"
                    alt="User 1"
                    className="w-10 h-10 rounded-full mr-3"
                  />
                  <span className="font-medium">User 1: Hey there!</span>
                </li>
                <li className="flex items-center p-2 hover:bg-blue-200 cursor-pointer transition duration-200">
                  <img
                    src="https://randomuser.me/api/portraits/women/1.jpg"
                    alt="User 2"
                    className="w-10 h-10 rounded-full mr-3"
                  />
                  <span className="font-medium">User 2: Hey there!</span>
                </li>
                <li className="flex items-center p-2 hover:bg-blue-200 cursor-pointer transition duration-200">
                  <img
                    src="https://randomuser.me/api/portraits/men/2.jpg"
                    alt="User 3"
                    className="w-10 h-10 rounded-full mr-3"
                  />
                  <span className="font-medium">User 3: Hey there!</span>
                </li>
                <li className="flex items-center p-2 hover:bg-blue-200 cursor-pointer transition duration-200">
                  <img
                    src="https://randomuser.me/api/portraits/women/2.jpg"
                    alt="User 4"
                    className="w-10 h-10 rounded-full mr-3"
                  />
                  <span className="font-medium">User 4: Hey there!</span>
                </li>
                {/* Add more chat items as needed */}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrganizerDashboard;
