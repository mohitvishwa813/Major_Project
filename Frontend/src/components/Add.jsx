import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import axios from "axios";
const Add = () => {
  const location = useLocation();
  const Id = location.state?.userId; // Accessing userId from state

  // State to hold form data
  const [formData, setFormData] = useState({
    description: "",
    title: "",
    price: "",
    image: "",
    category: "",
    location: "",
    userId: Id,
  });

  // Handle input changes
  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Handle form submission
  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log(formData);
    console.log(Id);
    try {
      const response = await axios.post("http://localhost:3000/api/user/add", {
        ...formData,
      });
      console.log(">>", response.data);
      alert("Service added successfully!");
      // Reset form or redirect as needed
      setFormData({
        description: "",
        title: "",
        price: "",
        image: "",
        category: "",
        location: "",
        userId: Id,
      });
    } catch (error) {
      console.error("Error adding service:", error);
      alert("Failed to add service. Please try again.");
    }
  };

  return (
    <>
      <Link to="/organizerhome" className="w-fit  text-[20px] ">
        <h1 className=" text-[20px]  pt-2  pl-14"> back</h1>
      </Link>
      <div className="container  px-6  flex flex-col justify-center gap-y-5 w-[1400px] -mt-5">
        <div className="w-[800px] flex justify-center ">
          <h1 className="text-3xl font-semibold text-center mb-6 ">
            Add Service
          </h1>
        </div>

        <form
          onSubmit={handleSubmit}
          className="bg-white shadow-2xl rounded-lg p-8 w-[800px]"
        >
          <div className="mb-4">
            <label
              htmlFor="title"
              className="block text-sm font-medium text-gray-700"
            >
              Title:
            </label>
            <input
              type="text"
              id="title"
              name="title"
              value={formData.title}
              onChange={handleChange}
              required
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:outline-none focus:ring focus:ring-blue-500"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="description"
              className="block text-sm font-medium text-gray-700"
            >
              Description:
            </label>
            <textarea
              id="description"
              name="description"
              value={formData.description}
              onChange={handleChange}
              required
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:outline-none focus:ring focus:ring-blue-500"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="price"
              className="block text-sm font-medium text-gray-700"
            >
              Price:
            </label>
            <input
              type="number"
              id="price"
              name="price"
              value={formData.price}
              onChange={handleChange}
              required
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:outline-none focus:ring focus:ring-blue-500"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="image"
              className="block text-sm font-medium text-gray-700"
            >
              Image URL:
            </label>
            <input
              type="text"
              id="image"
              name="image"
              value={formData.image}
              onChange={handleChange}
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:outline-none focus:ring focus:ring-blue-500"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="category"
              className="block text-sm font-medium text-gray-700"
            >
              Category:
            </label>
            <input
              type="text"
              id="category"
              name="category"
              value={formData.category}
              onChange={handleChange}
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:outline-none focus:ring focus:ring-blue-500"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="location"
              className="block text-sm font-medium text-gray-700"
            >
              Location:
            </label>
            <input
              type="text"
              id="location"
              name="location"
              value={formData.location}
              onChange={handleChange}
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:outline-none focus:ring focus:ring-blue-500"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition duration-200"
          >
            Add Service
          </button>
        </form>
      </div>
    </>
  );
};

export default Add;
