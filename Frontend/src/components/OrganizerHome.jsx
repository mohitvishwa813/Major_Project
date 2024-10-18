import OrganizerDashboard from "./OrganizerDashboard.jsx";

const OrganizerHome = () => {
  return (
    <div
      className="w-screen mx-auto h-[100vh] z-[-2]"
      // style={{
      //   backgroundImage: `url('https://i.postimg.cc/d3VVCxbp/Screenshot-622.png')`,
      //   backgroundSize: "cover",
      // }}
    >
      {" "}
      <div className="flex mx-auto h-[100vh] ">
        <OrganizerDashboard />
      </div>
    </div>
  );
};

export default OrganizerHome;
