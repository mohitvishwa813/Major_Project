import React from "react";

const CatryCards = () => {
  return (
    <div className="w-[90%] h-full mt-20 mx-auto  bg-[#f0fef9] p-4">
      <div className="flex w-full h-full justify-between rounded-[1rem] ">
        <div className="w-[56%] h-[330px] rounded-[1rem] border border-gray-300">
          <img
            src="\assets\photo_6325482105764692818_y.jpg"
            alt=""
            className="w-[100%] h-full  rounded-[1rem]"
          />
        </div>
        <div className="w-[41%] h-[330px] rounded-[1rem]">
          <img
            src="/assets/ring.jpg"
            alt=""
            className="w-[100%] h-full  rounded-[1rem]"
          />
        </div>
      </div>
      <div className="flex w-full h-full justify-between  rounded-[1rem] mt-4">
        <div className="w-[32%] h-[330px]  rounded-[1rem]">
          <img
            src="/assets/birthday1.jfif"
            alt=""
            className="w-[100%] h-full  rounded-[1rem]"
          />
        </div>
        <div className="w-[32%] h-[330px] border">
          <img
            src="/assets/love.jfif"
            alt=""
            className="w-[100%] h-full  rounded-[1rem]"
          />
        </div>
        <div className="w-[32%] h-[330px] border ">
          <img
            src="/assets/engaged.jpg"
            alt=""
            className="w-[100%] h-full  rounded-[1rem]"
          />
        </div>
      </div>
    </div>
    //   { id: 1, image: "/assets/birthday1.jfif" },
    //   { id: 2, image: "/assets/ring.jpg" },
    //   { id: 3, image: "/assets/love.jfif" },
    //   { id: 4, image: "/assets/engaged.jpg" },
    // ];
  );
};

export default CatryCards;
