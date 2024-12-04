import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

const ServiceDetails = () => {
  const location = useLocation();
  const query = new URLSearchParams(location.search);
  const id = query.get("id"); // Extracting the ID from the query parameters

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
          `https://major-project9144.onrender.com/postdetails?id=${id}`
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
    <div className="container mx-auto mt-10">
      <h1 className="text-3xl font-bold">{service.title}</h1>
      <img
        src={service.image}
        alt={service.title}
        className="w-full h-auto rounded-lg"
      />
      <p className="mt-4">{service.description}</p>
      <p className="mt-4">Price: Rs {service.price}</p>
      <p className="mt-4">Category: {service.category}</p>
      <p className="mt-4">Location: {service.location}</p>
    </div>
  );
};

export default ServiceDetails;
