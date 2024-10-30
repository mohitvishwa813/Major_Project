import "./App.css";
// import LandingPage from "./components/LandingPage";

import Register from "./components/Register";
import UserHome from "./components/UserHome";
import OrganizerHome from "./components/OrganizerHome";
import { Routes, Route } from "react-router-dom";
// import { AddService } from "./components/AddService";
import ManageService from "./components/ManageService";
import Add from "./components/Add";
import UserProfile from "./components/UserProfile";
import Postdetails from "./components/Postdetails";

// import ServiceDetails from "./components/ServiceDetails";
function App() {
  return (
    <>
      {/* <h1>Major Project</h1>
      <LandingPage /> */}
      <Routes>
        {/* Define your routes here */}
        <Route path="/" element={<Register />} />
        <Route path="/userhome" element={<UserHome />} />
        <Route path="/userProfile" element={<UserProfile />} />
        <Route path="/add-service" element={<Add />} />
        <Route path="/organizerhome" element={<OrganizerHome />} />
        <Route path="/manage-service" element={<ManageService />} />
        <Route path="/postdetails" element={<Postdetails />} />
        {/* <Route path="/services/:id" component={<ServiceDetails/>} />  */}
        {/* <Route path="/services/" component={<ServiceDetails />} /> */}
      </Routes>
    </>
  );
}

export default App;
