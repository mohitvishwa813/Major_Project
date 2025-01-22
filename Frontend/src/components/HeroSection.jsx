// import { useEffect, useState } from "react";
// import PropTypes from "prop-types";
// const heroImages = [
//   { id: 1, image: "/assets/birthday1.jfif" },
//   { id: 2, image: "/assets/ring.jpg" },
//   { id: 3, image: "/assets/love.jfif" },
//   { id: 4, image: "/assets/engaged.jpg" },
// ];

// const HeroSection = ({ userId }) => {
//   const [currentImageIndex, setCurrentImageIndex] = useState(0);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrentImageIndex((prevIndex) => (prevIndex + 1) % heroImages.length);
//     }, 3000); // Change image every 3 seconds

//     return () => clearInterval(interval); // Cleanup on unmount
//   }, []);
//   console.log(userId);
//   return (
//     <div className="w-full h-full flex justify-center items-center">
//       {/* {userId} */}
//       <div className="w-[70%] h-[90%] rounded-lg flex flex-col justify-center items-center">
//         <img
//           src={heroImages[currentImageIndex].image}
//           alt=""
//           className="rounded-lg w-[80%] h-full"
//         />
//         <div className="flex justify-center items-center mt-4 gap-2">
//           {heroImages.map((_, index) => (
//             <h1
//               key={index}
//               className={`w-[12px] h-[12px] border border-black rounded-[50%] ${
//                 currentImageIndex === index ? "bg-black" : "bg-transparent"
//               }`}
//             ></h1>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };
// // PropTypes validation for Navbar component
// HeroSection.propTypes = {
//   userId: PropTypes.string.isRequired, // Validate that userId is a required string
// };
// export default HeroSection;
// import { useEffect, useState } from "react";
// import PropTypes from "prop-types";

// const heroImages = [
//   {
//     id: 1,
//     images: [
//       "/assets/birthday1.jfif",
//       "/assets/ring.jpg",
//       "/assets/love.jfif",
//       "/assets/engaged.jpg",
//     ],
//   },
//   {
//     id: 2,
//     images: [
//       "/assets/birthday1.jfif",
//       "/assets/ring.jpg",
//       "/assets/love.jfif",
//       "/assets/engaged.jpg",
//     ],
//   },
//   {
//     id: 3,
//     images: [
//       "/assets/birthday1.jfif",
//       "/assets/ring.jpg",
//       "/assets/love.jfif",
//       "/assets/engaged.jpg",
//     ],
//   }
// ];

// const HeroSection = ({ userId }) => {
//   const [currentImageIndices, setCurrentImageIndices] = useState([0, 0, 0, 0]);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrentImageIndices((prevIndices) =>
//         prevIndices.map((index) => (index + 1) % heroImages[0].images.length)
//       );
//     }, 3000); // Change image every 3 seconds

//     return () => clearInterval(interval); // Cleanup on unmount
//   }, []);

//   console.log(userId);

//   return (
//     <div className="flex justify-center items-center space-x-10 w-[1500px]">
//       {heroImages.map((slider, sliderIndex) => (
//         <div
//           key={slider.id}
//           className="w-[350px] h-[400px] rounded-lg overflow-hidden relative "
//         >
//           <img
//             src={slider.images[currentImageIndices[sliderIndex]]}
//             alt={`Slider ${sliderIndex + 1}`}
//             className="rounded-lg w-full h-full object-cover transition-opacity duration-500"
//           />
//           <div className="absolute bottom-0 left-0 right-0 flex justify-center items-center mt-2 gap-2">
//             {slider.images.map((_, index) => (
//               <h1
//                 key={index}
//                 className={`w-[12px] h-[12px] border border-black rounded-full ${
//                   currentImageIndices[sliderIndex] === index
//                     ? "bg-black"
//                     : "bg-transparent"
//                 }`}
//               ></h1>
//             ))}
//           </div>
//         </div>
//       ))}
//     </div>
//   );
// };

// // PropTypes validation for HeroSection component
// HeroSection.propTypes = {
//   userId: PropTypes.string.isRequired, // Validate that userId is a required string
// };

// export default HeroSection;
import { useEffect, useState } from "react";
import { Search } from "lucide-react";

import PropTypes from "prop-types";
import { Link } from "react-router-dom"; // Import Link from react-router-dom

const heroImages = [
  {
    id: 1,
    images: [
      "/assets/birthday1.jfif",
      "/assets/b4.jfif",
      "/assets/b2.jpg",
      "/assets/b1.jpg",
    ],
    path: "/service-category?category=Birthday", // Added path for the first card
    eventname: "Birthday",
  },
  {
    id: 2,
    images: [
      "https://media.istockphoto.com/id/895859916/photo/man-open-a-ring-box-to-give-a-gift-to-his-girlfriend.jpg?s=612x612&w=0&k=20&c=Vd3cpMx1zjCLhv-Tj6v18rAnds_EAkgiKRBLhzc9joY=",
      "https://media.istockphoto.com/id/1346376055/photo/wedding-arch-with-glowing-garland-and-table-are-in-garden-among-lawn.jpg?s=612x612&w=0&k=20&c=V6KWZtpkP7tDsQL54D-6Hy6TRc8PKIFrdhkfK4dArrw=",
      "/assets/love.jfif",
      "/assets/engaged.jpg",
    ],
    path: "/service-category?category=Engagement", // Added path for the second card
    eventname: "Engagement",
  },
  {
    id: 3,
    images: [
      "https://media.istockphoto.com/id/1129868078/photo/wedding-couple-stage.jpg?b=1&s=612x612&w=0&k=20&c=LM5ghTzkAlKM9VSeEyFXSddn68Ip7kl4EydVr3MTItY=",
      "/assets/s2.jfif",
      "/assets/s3.jfif",
      "https://media.istockphoto.com/id/1177485677/photo/table-setting-for-an-event-party-or-wedding-reception.jpg?b=1&s=612x612&w=0&k=20&c=M56SXW_ADtNlSJDcaFOLI5EIqOBRvPZwOJCyHX8Vqnc=",
    ],
    path: "/service-category?category=Wedding", // Added path for the third card
    eventname: "Wedding",
  },
];

const HeroSection = ({ userId }) => {
  const [currentImageIndices, setCurrentImageIndices] = useState([0, 0, 0]);
  const [searchQuery, setSearchQuery] = useState("");
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndices((prevIndices) =>
        prevIndices.map((index) => (index + 1) % heroImages[0].images.length)
      );
    }, 3000); // Change image every 3 seconds

    return () => clearInterval(interval); // Cleanup on unmount
  }, []);

  console.log(userId);

  return (
    <>
      <div className="">
        <div className="min-h-screen relative flex items-center justify-center px-4">
          {/* Background Image with Overlay */}
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: 'url("/assets/nh.jpg")',
            }}
          >
            {/* Dark overlay for better text readability */}
            <div className="absolute inset-0 bg-black/50"></div>
          </div>

          {/* Content */}
          <div className="relative text-center text-white max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Your One-Stop Solution for Memorable Events!
            </h1>

            <p className="text-xl md:text-2xl mb-12 text-gray-200">
              Find and book the perfect event services for your special
              occasions
            </p>

            {/* Search Bar */}
            <div className="max-w-2xl mx-auto">
              <div className="flex md:flex-row flex-col gap-2">
                <div className="flex-1 relative">
                  <input
                    type="text"
                    placeholder="Search for services..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full px-6 py-4 rounded-lg bg-white/90 backdrop-blur-sm 
                text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 
                focus:ring-blue-500"
                  />
                  <Search className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
                </div>

                <button
                  className="px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white 
              font-semibold rounded-lg transition-colors duration-200 w-fit"
                >
                  Find Service Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full mx-auto text-center pt-14 flex justify-center items-center k">
        <h1 className="w-fit   text-[5vh]">Featured Events</h1>
      </div>
      <div className="flex w-full overflow-x-scroll md:justify-center md:px-0 px-10">
        <div className="flex space-x-4 md:space-x-10 py-8 md:py-32">
          {heroImages.map((slider, sliderIndex) => (
            <Link
              to={slider.path}
              key={slider.id}
              className="w-[250px] md:w-[450px] h-[300px] md:h-[400px] flex-shrink-0 rounded-lg overflow-hidden relative snap-center border"
            >
              <p className="z-30 absolute top-3 left-4 px-3 py-1 bg-white rounded-md bg-opacity-40 text-sm md:text-base">
                {slider.eventname}
              </p>
              <img
                src={slider.images[currentImageIndices[sliderIndex]]}
                alt={`Slider ${sliderIndex + 1}`}
                className="rounded-lg w-full h-full object-cover transition-opacity duration-500"
              />
              <div className="absolute bottom-0 left-0 right-0 flex justify-center items-center mt-2 gap-2 pb-2">
                {slider.images.map((_, index) => (
                  <h1
                    key={index}
                    className={`w-[10px] h-[10px] md:w-[12px] md:h-[12px] border border-black rounded-full ${
                      currentImageIndices[sliderIndex] === index
                        ? "bg-black"
                        : "bg-transparent"
                    }`}
                  ></h1>
                ))}
              </div>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
};

// PropTypes validation for HeroSection component
HeroSection.propTypes = {
  userId: PropTypes.string.isRequired, // Validate that userId is a required string
};

export default HeroSection;
