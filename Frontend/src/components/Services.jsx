import React, { useEffect, useState } from "react";

const Services = () => {
  const [servicesData, setServicesData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "http://localhost:3000/api/data/all-services"
        );
        const data = await response.json();

        // Accessing the services array from the response
        if (data && data.services) {
          setServicesData(data.services); // Set the services array to state
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []); // Empty dependency array means this runs once when the component mounts

  return (
    <div className="w-[90%] mx-auto mt-10 grid grid-cols-1 sm:grid-cols-2 gap-4">
      {servicesData.map((service) => (
        <div
          className="w-full h-[430px] border-2 border-gray-200 rounded-[0.4rem] p-8 shadow-2xl"
          key={service._id}
        >
          <img
            src={service.image} // Adjust according to your API response structure
            alt={service.title}
            className="w-full h-[70%] rounded-[1rem] shadow-2xl"
          />
          {/* title */}
          <div className="flex justify-between">
            <p className="text-2xl font-[400] mt-4">{service.title}</p>
            <button className="px-4 py-2 border-2 drop-shadow-lg shadow-inner mt-2 rounded-[1rem]">
              Know more
            </button>
          </div>
          {/* category */}
          <p className="text-lg font-[400] mt-4">{service.description}</p>
          {/* price */}
          <p className="text-sm font-[400] mt-4">Rs- {service.price}</p>
        </div>
      ))}
    </div>
  );
};

export default Services;
