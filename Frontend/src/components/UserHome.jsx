import Navbar from "./Navbar";
import HeroSection from "./HeroSection";
import CategorySection from "./CategorySection";
import CatryCards from "./CatryCards";
import Services from "./Services";
import Footer from "./Footer";
import { useLocation } from "react-router-dom";
import StayUpdated from "./StayUpdated";
import HowItWorks from "./HowITWork";
import FAQ from "./FAQ";
const UserHome = () => {
  const location = useLocation();
  const userId = location.state?.userId; // Accessing userId from state
  return (
    <>
      <div className="mx-auto  ">
        <Navbar userId={userId} />

        <HeroSection userId={userId} />

        <CategorySection />
        {/* <CatryCards /> */}
        <div className=" mx-auto w-[90%] flex  h-fit  justify-center text-[40px]  py-20">
          <p className="drop-shadow-md"> Latest Events</p>
        </div>
        <Services />
      </div>
      <HowItWorks />

      <StayUpdated />
      <FAQ />
      <Footer />
    </>
  );
};

export default UserHome;
