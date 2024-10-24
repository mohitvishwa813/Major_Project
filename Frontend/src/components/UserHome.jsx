import React from "react";
import Navbar from "./Navbar";
import HeroSection from "./HeroSection";
import CategorySection from "./CategorySection";
import CatryCards from "./CatryCards";
import Services from "./Services";
import Footer from "./Footer";
import { useLocation } from "react-router-dom";
const UserHome = () => {
  const location = useLocation();
  const userId = location.state?.userId; // Accessing userId from state
  return (
    <>
      <div className="w-screen mx-auto  ">
        <div className="flex mx-auto w-[90%] ">
          <Navbar />
        </div>
        <div className="flex mx-auto w-[90%]  h-[550px] mt-10 ">
          <HeroSection userId={userId}/>
        </div>
        <div className=" mx-auto w-[90%]  h-fit mt-1">
          <CategorySection />
          <CatryCards/>
          <div  className=" mx-auto w-[90%] flex  h-fit mt-12 justify-center text-[40px] ">
            <p className="drop-shadow-md">  Our Services</p>
          </div>
          <Services/>
        </div>
      </div>


  <Footer/>
    </>
  );
};

export default UserHome;
