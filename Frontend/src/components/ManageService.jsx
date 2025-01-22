import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

const ManageService = () => {
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Use useLocation to access the query parameters
  const location = useLocation();
  const Id = location.state?.userId;
  const queryParams = new URLSearchParams(location.search);
  const userId = queryParams.get("userId"); // Extract userId from query parameters

  useEffect(() => {
    const fetchServices = async () => {
      try {
        // Make API call to fetch services
        const response = await fetch(
          `https://major-project9144.onrender.com/api/user/manage-service?userId=${userId}`
        );

        if (!response.ok) {
          throw new Error("Failed to fetch services");
        }

        const data = await response.json();
        setServices(data.services); // Assuming your API returns { services: [...] }
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    if (userId) {
      fetchServices(); // Fetch services only if userId is available
    } else {
      setError("User ID is required");
      setLoading(false);
    }
  }, [userId]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <>
      {/* <div className="min-w-[1400px]">
        <Link
          to="/organizerhome"
          state={{ userId: Id }}
          className="w-fit  text-[20px] "
        >
          <h1 className=" text-[20px]  p-10 "> back</h1>
        </Link>
        <div className="flex justify-center items-center">
          <h1 className="py-10 text-[32px] text-[#3f1ba2]">Manage Services</h1>
        </div>

        {services.length === 0 ? (
          <p>No services available for this user.</p>
        ) : (
          <ul>
            {services.map((service) => (
              <li key={service._id}>
              
                <div className="min-w-[1400px] h-[20vh]  mx-[8vh] flex flex-col gap-y-5">
                  <div className="w-full  h-full flex justify-between ">
           
                    <div className="w-[25%]  h-full">
                      <img
                        src={service.image}
                        alt={service.title}
                        className="w-full  h-[90%]"
                      />
                    </div>
             
                    <div className="w-[30%] flex flex-col gap-y-5 justify-center items-center ">
                      <h2 className="text-[20px] font-semibold">
                        {service.title}
                      </h2>
                      <p className="text-[16px]">
                        {service.description.split(" ").length > 30
                          ? service.description
                              .split(" ")
                              .slice(0, 30)
                              .join(" ") + "..."
                          : service.description}
                      </p>
                    </div>
              
                    <div className="w-[30%]   flex justify-center items-center">
                      <p>Price: {service.price} -/Rs</p>
                    </div>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        )}
      </div> */}

      <div className="p-6 bg-gray-50 min-h-screen">
        <Link
          to="/organizerhome"
          state={{ userId: Id }}
          className="w-fit  text-[20px] "
        >
          <h1 className=" text-[20px]  py-4 "> back</h1>
        </Link>
        <div className="flex justify-between items-center mb-4">
          <h1 className="text-2xl font-bold">Manage Services</h1>
        </div>

        <div className="flex items-center gap-4 mb-4">
          <input
            type="text"
            placeholder="Search services..."
            className="border border-gray-300 rounded-lg px-4 py-2 w-full"
          />
          <select className="border border-gray-300 rounded-lg px-4 py-2">
            <option>All Categories</option>
          </select>
          <select className="border border-gray-300 rounded-lg px-4 py-2">
            <option>Price Range</option>
          </select>
          <select className="border border-gray-300 rounded-lg px-4 py-2">
            <option>All Locations</option>
          </select>
        </div>
        {services.length === 0 ? (
          <p>No services available for this user.</p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {services.map((service) => (
              <div
                key={service.id}
                className="border rounded-lg p-4 bg-white shadow-sm"
              >
                <div className="h-[40vh]">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full  h-[90%]"
                  />
                </div>
                <h2 className="text-xl font-semibold mb-2">{service.title}</h2>
                <p className="text-gray-700 mb-4">{service.description}</p>
                <p className="text-gray-500 text-sm mb-1 flex items-center">
                  <span className="material-icons text-gray-400 mr-1">
                    place
                  </span>
                  {service.location}
                </p>
                <p className="text-gray-500 text-sm mb-4 flex items-center">
                  <span className="material-icons text-gray-400 mr-1">
                    attach_money
                  </span>
                  {service.price}
                </p>
                <div className="flex justify-between items-center">
                  <select
                    className="border border-gray-300 rounded-lg px-2 py-1 text-sm"
                    defaultValue={service.status}
                  >
                    <option value="Active">Active</option>
                    <option value="Inactive">Inactive</option>
                  </select>
                  <div className="flex items-center gap-2">
                    <button className="text-blue-600 hover:text-blue-800">
                      <span className="material-icons">edit</span>
                    </button>
                    <button className="text-red-600 hover:text-red-800">
                      <span className="material-icons">delete</span>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        <div className="flex justify-center mt-6">
          <nav className="flex gap-2">
            <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
              1
            </button>
            <button className="px-4 py-2 bg-gray-200 rounded-lg hover:bg-gray-300">
              2
            </button>
            <button className="px-4 py-2 bg-gray-200 rounded-lg hover:bg-gray-300">
              3
            </button>
          </nav>
        </div>
      </div>
    </>
  );
};

export default ManageService;
