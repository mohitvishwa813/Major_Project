import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useLocation } from "react-router-dom";
import Navbar from "./Navbar";
import StayUpdated from "./StayUpdated";
import Footer from "./Footer";

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
          `https://major-project9144.onrender.com/c/postcategory?category=${category}`
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
      <Navbar />
      <div className=" w-full bg-[#eaeaea]">
        <div className=" flex flex-wrap gap-5 justify-center py-10">
          {/* <h1 className="text-xl font-bold mb-4">Service Category: {category}</h1> */}
          {services.length > 0 ? (
            services.map((service) => (
              <div
                key={service._id}
                className="border  rounded-lg shadow-lg w-[300px] md:w-[400px]  md:h-[430px] overflow-hidden"
              >
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-[250px] md:h-[300px] object-cover"
                />
                <div className="p-4 relative">
                  <p className="text-sm text-gray-600">{service.category}</p>

                  <h2 className="text-lg font-semibold">{service.title}</h2>
                </div>
                <div className="w-full flex justify-end p-4 md:pr-4 ">
                  <Link
                    to={`/postdetails?id=${service._id}`}
                    className="w-fit px-3 text-[1.7vh] py-1 bg-black text-white rounded-[25px]"
                  >
                    Know More
                  </Link>
                </div>
              </div>
            ))
          ) : (
            <div>No services found for this category.</div>
          )}
        </div>
      </div>
      <StayUpdated />
      <Footer />
    </>
  );
};

export default ServiceCategory;
