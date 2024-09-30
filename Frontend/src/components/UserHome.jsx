import React from "react";
import Navbar from "./Navbar";
import HeroSection from "./HeroSection";
import CategorySection from "./CategorySection";
import CatryCards from "./CatryCards";

const UserHome = () => {
  return (
    <>
      <div className="w-screen mx-auto  ">
        <div className="flex mx-auto w-[90%] ">
          <Navbar />
        </div>
        <div className="flex mx-auto w-[90%]  h-[550px] mt-10 ">
          <HeroSection />
        </div>
        <div className=" mx-auto w-[90%]  h-fit mt-10 ">
          <CategorySection />
          <CatryCards/>
        </div>
      </div>
    </>
  );
};

export default UserHome;
