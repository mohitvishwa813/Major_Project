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
          `http://localhost:3000/api/user/manage-service?userId=${userId}`
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
    <div className="min-w-[1400px]">
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
              {/* 
              <p>{service.description}</p>
             
               */}
              <div className="min-w-[1400px] h-[20vh]  mx-[8vh] flex flex-col gap-y-5">
                <div className="w-full  h-full flex justify-between ">
                  {/* image div */}
                  <div className="w-[25%]  h-full">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full  h-[90%]"
                    />
                  </div>
                  {/* title */}
                  <div className="w-[30%] flex flex-col gap-y-5 justify-center items-center ">
                    <h2 className="text-[20px] font-semibold">
                      {service.title}
                    </h2>
                    <p className="text-[16px]">{service.description}</p>
                  </div>
                  {/* price */}
                  <div className="w-[30%]   flex justify-center items-center">
                    <p>Price: {service.price} -/Rs</p>
                  </div>
                </div>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default ManageService;
