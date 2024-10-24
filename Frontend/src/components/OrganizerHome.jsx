import OrganizerDashboard from "./OrganizerDashboard.jsx";
import { useLocation } from "react-router-dom";
const OrganizerHome = () => {
  const location = useLocation();
  const userId = location.state?.userId; // Accessing userId from state
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

        <OrganizerDashboard userId={userId}  />
      </div>
    </div>
  );
};

export default OrganizerHome;
