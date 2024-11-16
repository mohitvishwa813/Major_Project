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
    },
    {
      icon: "/assets/birthday-cake.png",
      label: "Birthday Special",
      path: "/service-category?category=Birthday",
    },
    {
      icon: "/assets/love-lock.png",
      label: "Love Proposal",
      path: "/service-category?category=Love_Proposal",
    },
    {
      icon: "/assets/wedding-rings.png",
      label: "Engagement",
      path: "/service-category?category=Engagement",
    },
    {
      icon: "/assets/wedding.png",
      label: "Wedding",
      path: "/service-category?category=Wedding",
    },
    {
      icon: "/assets/home-sweet-home.png",
      label: "At Your Place",
      path: "/service-category?category=At_Your_Place",
    },
  ];

  return (
    <div className="w-full h-[80px] flex justify-center">
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
    </div>
  );
};

export default CategorySection;
