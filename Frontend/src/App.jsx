import "./App.css";
// import LandingPage from "./components/LandingPage";
import Register from "./components/Register";
import UserHome from './components/UserHome'
import OrganizerHome from './components/OrganizerHome'
import { Routes, Route } from "react-router-dom";
function App() {
  return (
    <>
      {/* <h1>Major Project</h1>
      <LandingPage /> */}
      <Routes>
        {/* Define your routes here */}
        <Route path="/" element={<Register />} />
        <Route path="/userhome" element={<UserHome />} />
      <Route path="/organizerhome" element={<OrganizerHome />} />
      </Routes>
    </>
  );
}

export default App;
