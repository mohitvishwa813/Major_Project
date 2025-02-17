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
  },
];

const HeroSection = ({ userId }) => {
  const [currentImageIndices, setCurrentImageIndices] = useState([0, 0, 0]);

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
    <div className="flex justify-center items-center space-x-10 w-[1500px]">
      {heroImages.map((slider, sliderIndex) => (
        <Link
          to={slider.path}
          key={slider.id}
          className="w-[350px] h-[400px] rounded-lg overflow-hidden relative"
        >
          <img
            src={slider.images[currentImageIndices[sliderIndex]]}
            alt={`Slider ${sliderIndex + 1}`}
            className="rounded-lg w-full h-full object-cover transition-opacity duration-500"
          />
          <div className="absolute bottom-0 left-0 right-0 flex justify-center items-center mt-2 gap-2">
            {slider.images.map((_, index) => (
              <h1
                key={index}
                className={`w-[12px] h-[12px] border border-black rounded-full ${
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
  );
};

// PropTypes validation for HeroSection component
HeroSection.propTypes = {
  userId: PropTypes.string.isRequired, // Validate that userId is a required string
};

export default HeroSection;
