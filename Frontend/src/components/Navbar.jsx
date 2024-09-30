import React from "react";

const Navbar = () => {
  return (
    <div className="flex justify-between items-center border-b-2 mt-[1.4rem] w-full">
      <div className="w-[120px] h-[50px] bg-cover  ">EventFinder</div>
      <div className="w-[120px] h-[50px] bg-cover mb-[2rem]  mr-[20rem]   rounded-[1.6rem] ">
        <input
          type="text"
          className="w-[450px]  border-2 px-8 py-4 rounded-[1.6rem] shadow-lg   "
          placeholder="search here..."
        />
      </div>
      <div className="w-[45px] h-[20px] bg-cover mb-[2rem] ">
        <img src="/assets/profile-user.png" alt="profile-logo" className="shadow-xl rounded-[50%]"/>
      </div>
    </div>
  );
};

export default Navbar;
