// import { useState } from "react";
// import { Link, useLocation } from "react-router-dom";
// import axios from "axios";

// const Add = () => {
//   const location = useLocation();
//   const Id = location.state?.userId; // Accessing userId from state

//   // State to hold form data
//   const [formData, setFormData] = useState({
//     description: "",
//     title: "",
//     price: "",
//     image: "",
//     category: "", // Initialize with an empty string
//     location: "",
//     userId: Id,
//   });

//   // Handle input changes
//   const handleChange = (event) => {
//     const { name, value } = event.target;
//     setFormData((prevData) => ({
//       ...prevData,
//       [name]: value,
//     }));
//   };

//   // Handle form submission
//   const handleSubmit = async (event) => {
//     event.preventDefault();
//     console.log(formData);
//     console.log(Id);
//     try {
//       const response = await axios.post(
//         "https://major-project9144.onrender.com/api/user/add",
//         {
//           ...formData,
//         }
//       );
//       console.log(">>", response.data);
//       alert("Service added successfully!");
//       setFormData({
//         description: "",
//         title: "",
//         price: "",
//         image: "",
//         category: "",
//         location: "",
//         userId: Id,
//       });
//     } catch (error) {
//       console.error("Error adding service:", error);
//       alert("Failed to add service. Please try again.");
//     }
//   };

//   return (
//     <>
//       <Link
//         to="/organizerhome"
//         state={{ userId: Id }}
//         className="w-fit text-[20px]"
//       >
//         <h1 className="text-[20px] pt-2 pl-14">Back</h1>
//       </Link>
//       <div className="container px-6 flex flex-col justify-center gap-y-5  bg-[#eaeaea]  mx-auto py-10">
//         <Link className="w-[80%] max-w-[800px] flex justify-center  mx-auto ">
//           <h1 className="text-3xl font-semibold text-center mb-6 ">
//             Add Service
//           </h1>
//         </Link>

//         <form
//           onSubmit={handleSubmit}
//           className="bg-white shadow-2xl rounded-lg p-8 w-[80%]  max-w-[800px] mx-auto"
//         >
//           <div className="mb-4">
//             <label
//               htmlFor="title"
//               className="block text-sm font-medium text-gray-700"
//             >
//               Title:
//             </label>
//             <input
//               type="text"
//               id="title"
//               name="title"
//               value={formData.title}
//               onChange={handleChange}
//               required
//               className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:outline-none focus:ring focus:ring-blue-500"
//             />
//           </div>
//           <div className="mb-4">
//             <label
//               htmlFor="description"
//               className="block text-sm font-medium text-gray-700"
//             >
//               Description:
//             </label>
//             <textarea
//               id="description"
//               name="description"
//               value={formData.description}
//               onChange={handleChange}
//               required
//               className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:outline-none focus:ring focus:ring-blue-500"
//             />
//           </div>
//           <div className="mb-4">
//             <label
//               htmlFor="price"
//               className="block text-sm font-medium text-gray-700"
//             >
//               Price:
//             </label>
//             <input
//               type="number"
//               id="price"
//               name="price"
//               value={formData.price}
//               onChange={handleChange}
//               required
//               className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:outline-none focus:ring focus:ring-blue-500"
//             />
//           </div>
//           <div className="mb-4">
//             <label
//               htmlFor="image"
//               className="block text-sm font-medium text-gray-700"
//             >
//               Image URL:
//             </label>
//             <input
//               type="text"
//               id="image"
//               name="image"
//               value={formData.image}
//               onChange={handleChange}
//               className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:outline-none focus:ring focus:ring-blue-500"
//             />
//           </div>
//           <div className="mb-4">
//             <label
//               htmlFor="category"
//               className="block text-sm font-medium text-gray-700"
//             >
//               Category:
//             </label>
//             <select
//               id="category"
//               name="category"
//               value={formData.category}
//               onChange={handleChange}
//               required
//               className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:outline-none focus:ring focus:ring-blue-500"
//             >
//               <option value="" disabled>
//                 Select a category
//               </option>
//               <option value="Birthday">Birthday</option>
//               <option value="Love_Proposal">Love Proposal</option>
//               <option value="Wedding">Wedding</option>
//               <option value="At_Your_Place">At Your Place</option>
//               <option value="Engagement">Engagement</option>
//             </select>
//           </div>
//           <div className="mb-4">
//             <label
//               htmlFor="location"
//               className="block text-sm font-medium text-gray-700"
//             >
//               Location:
//             </label>
//             <input
//               type="text"
//               id="location"
//               name="location"
//               value={formData.location}
//               onChange={handleChange}
//               className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:outline-none focus:ring focus:ring-blue-500"
//             />
//           </div>
//           <button
//             type="submit"
//             className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition duration-200"
//           >
//             Add Service
//           </button>
//         </form>
//       </div>
//     </>
//   );
// };

// // export default Add;
// import { useState, useEffect } from "react";
// import { Link, useLocation } from "react-router-dom";
// import axios from "axios";

// const Add = () => {
//   const location = useLocation();
//   const Id = location.state?.userId; // Accessing userId from state

//   // Store location separately before updating formData
//   const [latitude, setLatitude] = useState("");
//   const [longitude, setLongitude] = useState("");

//   // State to hold form data
//   const [formData, setFormData] = useState({
//     description: "",
//     title: "",
//     price: "",
//     image: "",
//     category: "",
//     latitude: "", // Auto-filled later
//     longitude: "", // Auto-filled later
//     userId: Id,
//   });

//   // Auto-fetch organizer location
//   useEffect(() => {
//     navigator.geolocation.getCurrentPosition(
//       (position) => {
//         const lat = position.coords.latitude;
//         const lng = position.coords.longitude;
//         setLatitude(lat);
//         setLongitude(lng);

//         // Now update formData after setting location
//         setFormData((prevData) => ({
//           ...prevData,
//           latitude: lat,
//           longitude: lng,
//         }));
//       },
//       (error) => {
//         console.error("Error fetching location:", error);
//       }
//     );
//   }, []);

//   // Handle input changes
//   const handleChange = (event) => {
//     const { name, value } = event.target;
//     setFormData((prevData) => ({
//       ...prevData,
//       [name]: value,
//     }));
//   };

//   // Handle form submission
//   const handleSubmit = async (event) => {
//     event.preventDefault();
//     console.log("Form Data:", formData);

//     try {
//       const response = await axios.post(
//         "http://localhost:3000/api/user/add",
//         //  "https://major-project9144.onrender.com/api/organizer/add"
//         formData
//       );
//       console.log("Response:==", response.data);
//       alert("Service added successfully!");

//       // Reset form except userId & location
//       setFormData({
//         description: "",
//         title: "",
//         price: "",
//         image: "",
//         category: "",
//         latitude: latitude, // Retain stored latitude
//         longitude: longitude, // Retain stored longitude
//         userId: Id,
//       });
//       console.log(
//         "Form reset, latitude and longitude should persist:",
//         latitude,
//         longitude
//       );
//     } catch (error) {
//       console.error("Error adding service:", error);
//       alert("Failed to add service. Please try again.");
//     }
//   };

//   return (
//     <>
//       <Link
//         to="/organizerhome"
//         state={{ userId: Id }}
//         className="w-fit text-[20px]"
//       >
//         <h1 className="text-[20px] pt-2 pl-14">Back</h1>
//       </Link>
//       <div className="container px-6 flex flex-col justify-center gap-y-5 bg-[#eaeaea] mx-auto py-10">
//         <h1 className="text-3xl font-semibold text-center mb-6">Add Service</h1>

//         <form
//           onSubmit={handleSubmit}
//           className="bg-white shadow-2xl rounded-lg p-8 w-[80%] max-w-[800px] mx-auto"
//         >
//           {/* Title */}
//           <div className="mb-4">
//             <label className="block text-sm font-medium text-gray-700">
//               Title:
//             </label>
//             <input
//               type="text"
//               name="title"
//               value={formData.title}
//               onChange={handleChange}
//               required
//               className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
//             />
//           </div>

//           {/* Description */}
//           <div className="mb-4">
//             <label className="block text-sm font-medium text-gray-700">
//               Description:
//             </label>
//             <textarea
//               name="description"
//               value={formData.description}
//               onChange={handleChange}
//               required
//               className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
//             />
//           </div>

//           {/* Price */}
//           <div className="mb-4">
//             <label className="block text-sm font-medium text-gray-700">
//               Price:
//             </label>
//             <input
//               type="number"
//               name="price"
//               value={formData.price}
//               onChange={handleChange}
//               required
//               className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
//             />
//           </div>

//           {/* Image */}
//           <div className="mb-4">
//             <label className="block text-sm font-medium text-gray-700">
//               Image URL:
//             </label>
//             <input
//               type="text"
//               name="image"
//               value={formData.image}
//               onChange={handleChange}
//               className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
//             />
//           </div>

//           {/* Category */}
//           <div className="mb-4">
//             <label className="block text-sm font-medium text-gray-700">
//               Category:
//             </label>
//             <select
//               name="category"
//               value={formData.category}
//               onChange={handleChange}
//               required
//               className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
//             >
//               <option value="" disabled>
//                 Select a category
//               </option>
//               <option value="Birthday">Birthday</option>
//               <option value="Love_Proposal">Love Proposal</option>
//               <option value="Wedding">Wedding</option>
//               <option value="At_Your_Place">At Your Place</option>
//               <option value="Engagement">Engagement</option>
//             </select>
//           </div>

//           {/* Auto-Filled Location Fields */}
//           <div className="mb-4">
//             <label className="block text-sm font-medium text-gray-700">
//               Latitude:
//             </label>
//             <input
//               type="text"
//               name="latitude"
//               value={formData.latitude}
//               readOnly
//               className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 bg-gray-100"
//             />
//           </div>

//           <div className="mb-4">
//             <label className="block text-sm font-medium text-gray-700">
//               Longitude:
//             </label>
//             <input
//               type="text"
//               name="longitude"
//               value={formData.longitude}
//               readOnly
//               className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 bg-gray-100"
//             />
//           </div>

//           <button
//             type="submit"
//             className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition duration-200"
//           >
//             Add Service
//           </button>
//         </form>
//       </div>
//     </>
//   );
// };

// export default Add;
import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import axios from "axios";

const Add = () => {
  const location = useLocation();
  const Id = location.state?.userId; // Accessing userId from state

  // Store location separately before updating formData
  const [latitude, setLatitude] = useState("");
  const [longitude, setLongitude] = useState("");

  // State to hold form data
  const [formData, setFormData] = useState({
    description: "",
    title: "",
    price: "",
    image: "",
    category: "",
    location: "", // Added location field
    latitude: "", // Auto-filled later
    longitude: "", // Auto-filled later
    userId: Id,
  });

  // Auto-fetch organizer location
  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const lat = position.coords.latitude;
        const lng = position.coords.longitude;
        setLatitude(lat);
        setLongitude(lng);

        // Now update formData after setting location
        setFormData((prevData) => ({
          ...prevData,
          latitude: lat,
          longitude: lng,
        }));
      },
      (error) => {
        console.error("Error fetching location:", error);
      }
    );
  }, []);

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
    console.log("Form Data:", formData);

    try {
      const response = await axios.post(
        "http://localhost:3000/api/user/add",
        //  "https://major-project9144.onrender.com/api/organizer/add"
        formData
      );
      console.log("Response:==", response.data);
      alert("Service added successfully!");

      // Reset form except userId & location
      setFormData({
        description: "",
        title: "",
        price: "",
        image: "",
        category: "",
        location: "", // Reset location field
        latitude: latitude, // Retain stored latitude
        longitude: longitude, // Retain stored longitude
        userId: Id,
      });
      console.log(
        "Form reset, latitude and longitude should persist:",
        latitude,
        longitude
      );
    } catch (error) {
      console.error("Error adding service:", error);
      alert("Failed to add service. Please try again.");
    }
  };

  return (
    <>
      <Link
        to="/organizerhome"
        state={{ userId: Id }}
        className="w-fit text-[20px]"
      >
        <h1 className="text-[20px] pt-2 pl-14">Back</h1>
      </Link>
      <div className="container px-6 flex flex-col justify-center gap-y-5 bg-[#eaeaea] mx-auto py-10">
        <h1 className="text-3xl font-semibold text-center mb-6">Add Service</h1>

        <form
          onSubmit={handleSubmit}
          className="bg-white shadow-2xl rounded-lg p-8 w-[80%] max-w-[800px] mx-auto"
        >
          {/* Title */}
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">
              Title:
            </label>
            <input
              type="text"
              name="title"
              value={formData.title}
              onChange={handleChange}
              required
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
            />
          </div>

          {/* Description */}
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">
              Description:
            </label>
            <textarea
              name="description"
              value={formData.description}
              onChange={handleChange}
              required
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
            />
          </div>

          {/* Price */}
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">
              Price:
            </label>
            <input
              type="number"
              name="price"
              value={formData.price}
              onChange={handleChange}
              required
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
            />
          </div>

          {/* Image */}
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">
              Image URL:
            </label>
            <input
              type="text"
              name="image"
              value={formData.image}
              onChange={handleChange}
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
            />
          </div>

          {/* Category */}
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">
              Category:
            </label>
            <select
              name="category"
              value={formData.category}
              onChange={handleChange}
              required
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
            >
              <option value="" disabled>
                Select a category
              </option>
              <option value="Birthday">Birthday</option>
              <option value="Love_Proposal">Love Proposal</option>
              <option value="Wedding">Wedding</option>
              <option value="At_Your_Place">At Your Place</option>
              <option value="Engagement">Engagement</option>
            </select>
          </div>

          {/* Location Field (User enters manually) */}
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">
              Location (City, Area, Address):
            </label>
            <input
              type="text"
              name="location"
              value={formData.location}
              onChange={handleChange}
              required
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
            />
          </div>

          {/* Auto-Filled Location Fields */}
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">
              Latitude:
            </label>
            <input
              type="text"
              name="latitude"
              value={formData.latitude}
              readOnly
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 bg-gray-100"
            />
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">
              Longitude:
            </label>
            <input
              type="text"
              name="longitude"
              value={formData.longitude}
              readOnly
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 bg-gray-100"
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
