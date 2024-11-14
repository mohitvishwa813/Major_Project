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
import ServiceCategory from "./components/ServiceCategory";
function Success() {
  return (
    <div className="flex items-center justify-center h-screen">
      <h1 className="text-2xl font-bold text-green-500">Payment Successful!</h1>
    </div>
  );
}

function Failure() {
  return (
    <div className="flex items-center justify-center h-screen">
      <h1 className="text-2xl font-bold text-red-500">Payment Failed!</h1>
    </div>
  );
}
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
        <Route path="/service-category" element={<ServiceCategory />} />{" "}
        <Route path="/payment-success" element={<Success />} />
        <Route path="/payment-failure" element={<Failure />} />
        {/* <Route path="/services/:id" component={<ServiceDetails/>} />  */}
        {/* <Route path="/services/" component={<ServiceDetails />} /> */}
      </Routes>
    </>
  );
}

export default App;
