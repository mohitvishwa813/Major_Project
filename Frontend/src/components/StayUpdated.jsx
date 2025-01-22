import React from "react";

const StayUpdated = () => {
  return (
    <>
      <div className="w-full min-h-[70vh] border border-black bg-[#342290] flex justify-center items-center">
        <div className="w-[80%] h-fit flex flex-col justify-center items-center  gap-y-10">
          <h1 className="text-[5vh] text-white ">
            Stay Updated on Event Trends!
          </h1>
          <p className="text-[2.9vh] text-white ">
            Subscribe to our newsletter for the latest event planning tips and
            inspiration
          </p>
          <div className=" w-full flex md:flex-row flex-col justify-center gap-3">
            <input
              type="text"
              placeholder="Enter your email "
              className="md:w-[40%] py-2 px-6 rounded-xl w-full"
            />
            <button className=" bg-black w-fit px-6 py-2 rounded-[3vh] text-[2.1vh] text-white s">
              Suscribe
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default StayUpdated;
