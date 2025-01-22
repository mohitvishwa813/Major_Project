// import { useEffect, useState } from "react";
// import { Link } from "react-router-dom";

// const Services = () => {
//   const [servicesData, setServicesData] = useState([]);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await fetch(
//           "http://localhost:3000/api/data/all-services"
//         );
//         const data = await response.json();

//         // Accessing the services array from the response
//         if (data && data.services) {
//           setServicesData(data.services); // Set the services array to state
//         }
//       } catch (error) {
//         console.error("Error fetching data:", error);
//       }
//     };

//     fetchData();
//   }, []); // Empty dependency array means this runs once when the component mounts

//   return (
//     <div className="w-[90%] mx-auto mt-10 grid grid-cols-1 sm:grid-cols-2 gap-4">
//       {servicesData.map((service) => (
//         <div
//           className="w-full h-[430px] border-2 border-gray-200 rounded-[0.4rem] p-8 shadow-2xl"
//           key={service._id}
//         >
//           <img
//             src={service.image} // Adjust according to your API response structure
//             alt={service.title}
//             className="w-full h-[70%] rounded-[1rem] shadow-2xl"
//           />

//           {/* title */}
//           <div className="flex justify-between">
//             <p className="text-2xl font-[400] mt-4">{service.title}</p>
//             <Link
//               to={`/postdetails?id=${service._id}`}
//               className="px-4 py-2 border-2 drop-shadow-lg shadow-inner mt-2 rounded-[1rem]"
//             >
//               Know more
//             </Link>
//           </div>

//           {/* category */}
//           <p className="text-sm font-[400] mt-4">
//             {service.description.split(" ").length > 30
//               ? `${service.description.split(" ").slice(0, 20).join(" ")}...`
//               : service.description}
//           </p>
//           {/* price */}
//           <p className="text-sm font-[400] mt-4">Rs- {service.price}</p>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default Services;
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Services = () => {
  const [servicesData, setServicesData] = useState([]);
  const [itemsToShow, setItemsToShow] = useState(6); // Initial number of items to show

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://major-project9144.onrender.com/api/data/all-services",
          {
            method: "GET", // Make sure to set the correct HTTP method
            headers: {
              "Content-Type": "application/json",
            },
          }
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

  const handleLoadMore = () => {
    setItemsToShow((prev) => prev + 6); // Load 8 more items
  };

  return (
    <>
      <div className="mx-auto  flex flex-wrap gap-4 px-4 md:px-16">
        {servicesData.slice(0, itemsToShow).map((service) => (
          <div
            className="w-full relative max-w-[450px] min-h-[40vh] border-2 border-gray-200 rounded-[0.4rem] p-8 shadow-2xl "
            key={service._id}
          >
            <img
              src={service.image} // Adjust according to your API response structure
              alt={service.title}
              className="w-full rounded-[1rem] shadow-2xl h-[300px]"
            />

            {/* title */}
            <div className="flex justify-between">
              <p className="text-2xl font-[400] mt-4 ">{service.title}</p>
            </div>

            {/* category */}
            <p className="text-sm font-[400] mt-4">
              {service.description.split(" ").length > 30
                ? `${service.description.split(" ").slice(0, 20).join(" ")}...`
                : service.description}
            </p>

            {/* price */}
            <p className="text-sm font-[400] my-4 ">Rs- {service.price}</p>
            <div className="flex justify-end items-end absolute bottom-3 right-3">
              <Link
                to={`/postdetails?id=${service._id}`}
                className="px-4 py-2 border-2 drop-shadow-lg bg-[#e249dd] text-white  rounded-[1rem] w-fit"
              >
                Know more
              </Link>
            </div>
          </div>
        ))}
      </div>

      {/* Load More Button */}
      {itemsToShow < servicesData.length && (
        <div className="col-span-full text-center mt-14 pb-20">
          <button
            onClick={handleLoadMore}
            className="px-4 py-2 bg-[#342290] text-white rounded-lg shadow-md hover:bg-blue-600"
          >
            Load More
          </button>
        </div>
      )}
    </>
  );
};

export default Services;
