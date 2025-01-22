// import React from "react";

// const CategorySection = () => {
//   return (
//     <>
//     <div className="w-full h-[80px]  flex justify-center  ">
//       <div className="w-[90%] h-[80px]    flex justify-between border border-gray-200 px-10 ">
// <div className="flex flex-col justify-center items-center">
//     <div className="w-[34px] h-[34px]"><img src="/assets/tool.png" alt="" className="w-full h-full" /></div>
//     <div>All</div>
// </div>
// <div className="flex flex-col justify-center  items-center">
// <div className="w-[34px] h-[34px]"><img src="/assets/birthday-cake.png" alt="" className="w-full h-full" /></div>
//     <div>Birthday Special</div>
// </div>
// <div className="flex flex-col justify-center  items-center">
// <div className="w-[34px] h-[34px]"><img src="/assets/love-lock.png" alt="" className="w-full h-full" /></div>
//     <div>Love Proposal</div>
// </div>
// <div className="flex flex-col justify-center  items-center">
// <div className="w-[34px] h-[34px]"><img src="/assets/wedding-rings.png" alt="" className="w-full h-full" /></div>
//     <div>Engagement</div>
// </div>
// <div className="flex flex-col justify-center  items-center">
// <div className="w-[34px] h-[34px]"><img src="/assets/home-sweet-home.png" alt="" className="w-full h-full" /></div>
//     <div>At Your Place</div>
// </div>
//       </div>

//     </div>

//     </>

//   );
// };

// export default CategorySection;

const CategorySection = () => {
  // Array of category items with paths
  const categories = [
    {
      icon: "/assets/tool.png",
      label: "All",
      path: "/userhome",
      para: "Discover all our services in one place, tailored to meet your event needs.",
    },
    {
      icon: "/assets/birthday-cake.png",
      label: "Birthday Special",
      path: "/service-category?category=Birthday",
      para: "Create unforgettable birthday celebrations with our premium services.",
    },
    {
      icon: "/assets/love-lock.png",
      label: "Love Proposal",
      path: "/service-category?category=Love_Proposal",
      para: "Plan the perfect proposal with our romantic and creative solutions.",
    },
    {
      icon: "/assets/wedding-rings.png",
      label: "Engagement",
      path: "/service-category?category=Engagement",
      para: "Make your engagement special with our comprehensive packages.",
    },
    {
      icon: "/assets/wedding.png",
      label: "Wedding",
      path: "/service-category?category=Wedding",
      para: "Celebrate your wedding day with elegance, joy, and meticulous planning.",
    },
    {
      icon: "/assets/home-sweet-home.png",
      label: "At Your Place",
      path: "/service-category?category=At_Your_Place",
      para: "Host memorable events in the comfort of your home with our tailored services.",
    },
  ];

  return (
    <>
      {/* <div className="w-full h-[80px] flex justify-center">
        <div className="w-[90%] h-[80px] flex justify-between border border-gray-200 px-10">
          {categories.map((category, index) => (
            <a
              href={category.path}
              key={index}
              className="flex flex-col justify-center items-center"
            >
              <div className="w-[34px] h-[34px]">
                <img
                  src={category.icon}
                  alt={category.label}
                  className="w-full h-full"
                />
              </div>
              <div>{category.label}</div>
            </a>
          ))}
        </div>
      </div> */}
      <div className="min-h-[40vh] py-20 flex flex-col justify-center items-center gap-y-10 bg-[#eaeaea]">
        <h1 className="text-[4vh] w-full justify-center flex">
          Popular Services
        </h1>
        <div className="md:min-h-[55vh]  flex md:flex-wrap md:justify-center gap-6 overflow-x-auto snap-x snap-mandatory w-full scroll-smooth pl-4 scrollbar-hide">
          {categories.map((category, index) => (
            <a
              href={category.path}
              key={index}
              className="min-w-[280px] snap-center max-w-[400px]  min-h-[38vh] bg-white h-fit flex flex-col justify-start items-start gap-y-3 rounded-lg shadow-lg border p-10"
            >
              <div className="w-[30px] h-[30px]">
                <img
                  src={category.icon}
                  alt={category.label}
                  className="w-full h-full"
                />
              </div>
              <h1 className="text-[3vh] font-semibold">{category.label}</h1>
              <p className="text-[2.3vh] font-semibold text-[#4D4C52]">
                {category.para}
              </p>
              <p className="text-[2vh] text-[#342290]">Explore Service →</p>
            </a>
          ))}
        </div>
      </div>
    </>
  );
};

export default CategorySection;
