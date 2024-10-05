const OrganizerDashboard = () => {
  return (
    <div className="w-full h-[95vh]  mt-10 rounded-[2rem]">
      <div className=" flex ">
        {/* left div */}
        <div
          className="w-[30%]  rounded-[2rem]  bg-[#fffff] 
        "
          style={{
            backgroundImage: `url('https://i.postimg.cc/c1n18ftF/Screenshot-623.png')`,
            backgroundSize: "cover",
          }}
        >
          <div className="w-full h-1/3  border-y border-white flex justify-center flex-col items-center">
            <div>
              <img
                src="/assets/dp.jfif"
                alt=""
                className="w-[8vw] h-[16vh] rounded-[50%]   border border-white"
              />
              <h1 className="text-[#f3f3f3] text-[3vh] mt-4">mohit Vishwa</h1>
            </div>
          </div>

          <div className="h-1/2  flex flex-col  border-y border-white gap-8 pt-10 pl-4">
            <button className=" px-4 py-2  w-[290px] text-start] text-start  text-white    bg-[#919191] rounded-2xl">
              Add Serivces
            </button>
            <button className=" px-4 py-2  w-[290px] text-start  text-white bg-[#919191] rounded-2xl">
              Manage Services
            </button>

            <button className=" px-4 py-2  w-[290px] text-start  text-white bg-[#919191] rounded-2xl">
              Logout
            </button>
          </div>

          <div className="flex justify-center w-full pt-10">
            <button className=" px-4 py-2  w-[290px] text-center  text-white bg-[#824141] rounded-2xl ">
              Deleet Account
            </button>
          </div>
        </div>
        {/* right div */}
        <div className="w-[70%]   h-[84vh] rounded-[2rem]  bg-[#919191] flex justify-center flex-col  border-b-2">
          <div className="w-full h-1/3   border border-white rounded-[2rem]"></div>
          <div className="w-full h-[70%]  border border-white rounded-[2rem] ">
            <div className="flex w-full  border-b-2">
              <h1 className="w-1/2 flex justify-center  py-4   border-r-2 text-xl text-[#ffffff]   ">
                Chats
              </h1>

              <h1 className="w-1/2 flex justify-center  text-xl py-4 text-[#ffffff]">Calls</h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrganizerDashboard;
