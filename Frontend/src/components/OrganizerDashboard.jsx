import { Link } from "react-router-dom";

// eslint-disable-next-line react/prop-types
const OrganizerDashboard = ({ userId }) => {
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
          <div className="w-full h-1/3  border-b border-black flex justify-center flex-col items-center ">
            <div>
              <img
                src="/assets/dp.jfif"
                alt=""
                className="w-[8vw] h-[16vh] rounded-[50%]   border border-white"
              />
              <h1 className="text-[#272768] text-[3vh] font-[600] mt-4">
                mohit Vishwa
                <div><p>Your User ID is: {userId}</p></div>
              </h1>
            </div>
          </div>

          <div className="h-1/2  flex flex-col  border-y border-white gap-8 pt-10 pl-4">
            <Link
              to="/add-service"
              state={{ userId }} // Pass userId here
              className=" hover:text-black  px-4 py-2  w-[290px] text-start] text-start  text-white    bg-[#919191] rounded-2xl"
            >
              Add Serivces
            </Link>
            <Link
            to={`/manage-service?userId=${userId}`}
            className=" px-4 py-2  hover:text-black   w-[290px] text-start  text-white bg-[#919191] rounded-2xl">
              Manage Services
            </Link>

            <button 
            className=" px-4 py-2   hover:text-black  w-[290px] text-start  text-white bg-[#919191] rounded-2xl">
              Logout
            </button>
          </div>

          <div className="flex justify-center w-full pt-10">
            <button className=" hover:text-red-600  px-4 py-2  w-[290px] text-center  text-white bg-[#824141] rounded-2xl ">
              Delete Account
            </button>
          </div>
        </div>
        {/* right div */}
        <div className="w-[75%] mt-14   h-[92%]   bg-[#ebebeb] flex justify-center flex-col rounded-[2rem]  border border-black ">
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
            <div className="flex w-full border border-black rounded-t-[2rem] bg-white">
              <h1 className="w-1/2 flex justify-center py-4 border-black border-r-2 text-xl text-[#000000]">
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
