import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { FaCommentAlt, FaPhoneAlt } from "react-icons/fa";
const Postdetails = () => {
  const location = useLocation();
  const query = new URLSearchParams(location.search);
  const id = query.get("id"); // Extracting the ID from the query parameters
  console.log(id);
  const [service, setService] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchServiceDetails = async () => {
      if (!id) {
        setError("Service ID is required");
        setLoading(false);
        return;
      }

      try {
        const response = await fetch(
          `http://localhost:3000/d/postdetails?id=${id}`
        ); // Adjust the URL as necessary
        if (!response.ok) {
          throw new Error("Failed to fetch service details");
        }
        const data = await response.json();
        setService(data);
      } catch (error) {
        console.error(error);
        setError(error.message); // Set error message
      } finally {
        setLoading(false);
      }
    };

    fetchServiceDetails();
  }, [id]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;
  if (!service) return <div>Service not found</div>;

  return (
    <div className="w-[1400px]">
      <div className="container mx-auto mt-10 flex justify-center px-[10%] flex-col gap-y-3">
        <div className="bg-white shadow-lg rounded-lg p-6 min-w-[900px] w-full flex flex-col">
          <img
            src={service.image}
            alt={service.title}
            className="w-full h-[400px] rounded-lg mt-4"
          />
          <h1 className="text-3xl font-bold">{service.title}</h1>
          <p className="mt-4">{service.description}</p>
          <p className="mt-4">Price: Rs {service.price}</p>
          <p className="mt-4">Category: {service.category}</p>
          <p className="mt-4">Location: {service.location}</p>
        </div>
        <div className="flex space-x-4 mt-6 w-full mb-20">
          <div className=" flex gap-20 pl-[2%]">
            <button className="flex items-center bg-blue-500 text-white rounded-lg p-2 hover:bg-blue-600 transition">
              <FaCommentAlt className="mr-2" /> Chat
            </button>
            <button className="flex items-center bg-green-500 text-white rounded-lg p-2 hover:bg-green-600 transition">
              <FaPhoneAlt className="mr-2" /> Call
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Postdetails;
