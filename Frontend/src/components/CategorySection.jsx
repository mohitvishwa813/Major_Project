import React from "react";

const CategorySection = () => {
  return (
    <>
    <div className="w-full h-[80px]  flex justify-center ">
      <div className="w-[90%] h-[80px]    flex justify-between border border-gray-200 px-10">
<div className="flex flex-col justify-center items-center">
    <div className="w-[34px] h-[34px]"><img src="/assets/tool.png" alt="" className="w-full h-full" /></div>
    <div>All</div>
</div>
<div className="flex flex-col justify-center  items-center">
<div className="w-[34px] h-[34px]"><img src="/assets/birthday-cake.png" alt="" className="w-full h-full" /></div>
    <div>Birthday Special</div>
</div>
<div className="flex flex-col justify-center  items-center">
<div className="w-[34px] h-[34px]"><img src="/assets/love-lock.png" alt="" className="w-full h-full" /></div>
    <div>Love Proposal</div>
</div>
<div className="flex flex-col justify-center  items-center">
<div className="w-[34px] h-[34px]"><img src="/assets/wedding-rings.png" alt="" className="w-full h-full" /></div>
    <div>Engagement</div>
</div>
<div className="flex flex-col justify-center  items-center">
<div className="w-[34px] h-[34px]"><img src="/assets/home-sweet-home.png" alt="" className="w-full h-full" /></div>
    <div>At Your Place</div>
</div>
      </div>


    </div>
        
 
    
    </>


    
  );
};

export default CategorySection;
