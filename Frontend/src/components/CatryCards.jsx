import React from "react";
import { Link } from "react-router-dom";

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
          <Link
            to="/service-category?category=Wedding"
            className="w-[32%] h-[330px] rounded-[1rem]"
          >
            <img
              src="https://th.bing.com/th/id/OIP.qmYnzsNFIxuMxpc2ws-oUQHaE9?w=342&h=187&c=7&r=0&o=5&dpr=1.3&pid=1.7"
              alt=""
              className="w-[100%] h-full  rounded-[1rem]"
            />
          </Link>
        </div>
      </div>
      {/* <div className="flex w-full h-full justify-between  rounded-[1rem] mt-4">
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
      </div> */}
      <div className="flex w-full h-full justify-between rounded-[1rem] mt-4">
        <Link
          to="/service-category?category=Birthday"
          className="w-[32%] h-[330px] rounded-[1rem]"
        >
          <img
            src="/assets/birthday1.jfif"
            alt="Birthday"
            className="w-[100%] h-full rounded-[1rem]"
          />
        </Link>
        <Link
          to="/service-category?category=Love_Proposal"
          className="w-[32%] h-[330px] border"
        >
          <img
            src="https://images.pexels.com/photos/4618539/pexels-photo-4618539.jpeg?auto=compress&cs=tinysrgb&w=600"
            alt="Love"
            className="w-[100%] h-full rounded-[1rem]"
          />
        </Link>
        <Link
          to="/service-category?category=Engagement"
          className="w-[32%] h-[330px] border"
        >
          <img
            src="https://images.pexels.com/photos/837254/pexels-photo-837254.jpeg?auto=compress&cs=tinysrgb&w=600"
            alt="Engagement"
            className="w-[100%] h-full rounded-[1rem]"
          />
        </Link>
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
