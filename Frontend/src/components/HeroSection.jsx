import React, { useEffect, useState } from "react";

const heroImages = [
  { id: 1, image: "/assets/birthday1.jfif" },
  { id: 2, image: "/assets/ring.jpg" },
  { id: 3, image: "/assets/love.jfif" },
  { id: 4, image: "/assets/engaged.jpg" },
];

const HeroSection = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % heroImages.length);
    }, 3000); // Change image every 3 seconds

    return () => clearInterval(interval); // Cleanup on unmount
  }, []);

  return (
    <div className="w-full h-full flex justify-center items-center">
      <div className="w-[70%] h-[90%] rounded-lg flex flex-col justify-center items-center">
        <img
          src={heroImages[currentImageIndex].image}
          alt=""
          className="rounded-lg w-[80%] h-full"
        />
        <div className="flex justify-center items-center mt-4 gap-2">
          {heroImages.map((_, index) => (
            <h1
              key={index}
              className={`w-[12px] h-[12px] border border-black rounded-[50%] ${
                currentImageIndex === index ? "bg-black" : "bg-transparent"
              }`}
            ></h1>
          ))}
        </div>
      </div>
      
    </div>
  );
};

export default HeroSection;
