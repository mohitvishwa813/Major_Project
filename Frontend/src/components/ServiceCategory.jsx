import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useLocation } from "react-router-dom";
import Navbar from "./Navbar";

const ServiceCategory = () => {
  const [services, setServices] = useState([]); // State to hold services
  const [loading, setLoading] = useState(true); // State to handle loading state
  const [error, setError] = useState(null); // State to handle errors

  // Get the query parameters from the URL
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const category = queryParams.get("category"); // Extract the category from query string

  // Fetch services based on category when the component mounts
  useEffect(() => {
    const fetchServices = async () => {
      if (!category) {
        setError("Category is required");
        setLoading(false);
        return;
      }

      try {
        const response = await axios.get(
          `http://localhost:3000/c/postcategory?category=${category}`
        );
        setServices(response.data); // Set the fetched services to state
      } catch (err) {
        console.error("Error fetching services:", err);
        setError(err.message); // Set error message if fetch fails
      } finally {
        setLoading(false); // Set loading to false after fetch is complete
      }
    };

    fetchServices();
  }, [category]); // Dependency array includes category

  if (loading) {
    return <div>Loading...</div>; // Show loading state
  }

  if (error) {
    return <div>Error: {error}</div>; // Show error message if there is an error
  }

  return (
    <>
      {/* <Navbar /> */}
      <div className="w-[1500px] px-[6%]">
        <div className="grid grid-cols-3 gap-8 p-4 pt-20 ">
          {/* <h1 className="text-xl font-bold mb-4">Service Category: {category}</h1> */}
          {services.length > 0 ? (
            services.map((service) => (
              <div
                key={service._id}
                className="border rounded-lg shadow-lg w-[400px] h-[430px] overflow-hidden"
              >
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-[300px] object-cover"
                />
                <div className="p-4">
                  <p className="text-sm text-gray-600">{service.category}</p>
                  <h2 className="text-lg font-semibold">{service.title}</h2>
                  <div className="w-full flex justify-end">
                    <Link
                      to={`/postdetails?id=${service._id}`}
                      className="w-fit px-5 py-2 bg-black text-white rounded-[25px]"
                    >
                      Know More
                    </Link>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div>No services found for this category.</div>
          )}
        </div>
      </div>
    </>
  );
};

export default ServiceCategory;
