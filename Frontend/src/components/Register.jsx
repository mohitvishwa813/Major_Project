import { useState } from "react";
import "../App.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function AuthForm() {
  const [isLogin, setIsLogin] = useState(true);
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    role: "user", // Default role
  });

  const [loginFormData, setLoginFormData] = useState({
    email: "",
    password: "",
    role: "user", // Default role
  });

  const [otp, setOtp] = useState(""); // State to hold the OTP
  const [isOtpSent, setIsOtpSent] = useState(false); // State to track OTP sent status

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleChangeLogin = (event) => {
    const { name, value } = event.target;
    setLoginFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };
  const handleSendOtp = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post(
        // "http://localhost:3000/api/otp/send",
        "https://major-project9144.onrender.com/api/otp/send",
        { email: formData.email } // Send only the email
      );
      alert(response.data.message);
      setIsOtpSent(true); // Set the flag to true after sending OTP
    } catch (error) {
      console.log(error);
      alert("Failed to send OTP");
    }
  };

  const handleVerifyOtp = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post(
        // "http://localhost:3000/api/otp/verify",
        "https://major-project9144.onrender.com/api/otp/verify",
        { email: formData.email, otp } // Send email and OTP for verification
      );
      alert(response.data.message);
      if (response.data.message === "OTP verified successfully") {
        // Proceed to register after OTP verification
        handleRegister(event);
      }
    } catch (error) {
      console.log(error);
      alert("Invalid OTP");
    }
  };

  const handleRegister = async (event) => {
    event.preventDefault();
    console.log(formData);
    try {
      const response = await axios.post(
        // "http://localhost:3000/api/users/register",
        "https://major-project9144.onrender.com/api/users/register",
        formData
      );
      console.log(response.data);
      alert(response.data.message);
      if (response.data.success) {
        // Clear the form fields
        setFormData({
          name: "",
          email: "",
          password: "",
          role: "user",
        });
        setOtp(""); // Clear the OTP field
        setIsOtpSent(false); // Reset OTP sent status
        setIsLogin(true);
      }
    } catch (error) {
      console.log(error);
      alert("Registration failed");
    }
  };

  const handleLogin = async (event) => {
    event.preventDefault();
    console.log(loginFormData);
    try {
      const response = await axios.post(
        // "http://localhost:3000/api/users/login",
        "https://major-project9144.onrender.com/api/users/login",

        loginFormData
      );
      const userData = response.data;

      console.log(">>", userData);

      // Check if the user is an organizer
      if (userData.organizer && userData.organizer.role === "organizer") {
        navigate("/organizerhome", {
          state: { userId: userData.organizer._id },
        });
      } else if (userData.user && userData.user.role === "user") {
        navigate("/userhome", {
          state: { userId: userData.user._id },
        });
      } else {
        console.error("Role not found or invalid.");
        alert("Login failed. Please check your credentials.");
      }

      alert(userData.message);
    } catch (error) {
      console.error("Login failed:", error);
      alert("Invalid Login Credentials");
    }
  };

  return (
    <>
      <div
        className="flex flex-col md:flex-row h-screen justify-center items-center w-full  
    bg-[url('https://i.imgur.com/cr9Ld1Z.png')] bg-cover bg-no-repeat"
      >
        <div className="min-w-[120px]  text-[#a32697] text-[3vh] pb-10 md:hidden block">
          EventFinder
        </div>
        <div className="w-[30%] h-[70vh] rounded-l-[1vh] bg-[#273DB7] p-8 flex flex-col gap-y-3 justify-center md:block hidden ">
          <h1 className="text-[4vh] font-[500] text-white ">
            Find Your Perfect Event Oganizer.
          </h1>

          <p className="text-[2vh] text-white">
            join thousands of people discovering amazing events organizer every
            day.
          </p>
          <div className=" h-[37vh] pt-4">
            <img
              src="https://i.imgur.com/Rjpjafv.png"
              alt=""
              className="rounded-[1vh] bg-cover w-full h-full"
            />
          </div>

          {/* <img
          src="https://images.pexels.com/photos/1164985/pexels-photo-1164985.jpeg?auto=compress&cs=tinysrgb&w=600"
          alt=""
          className="w-full h-full  rounded-l-[1vh]"
        /> */}
        </div>

        <div className="w-full md:w-[30%] h-[70vh] rounded-r-[1vh]  flex justify-center items-center relative">
          <div className="w-full h-full bg-white p-8 pt-10  rounded-r-[1vh] shadow-2xl">
            <div className="form-toggle flex gap-3">
              <button
                className={isLogin ? "active" : ""}
                onClick={() => setIsLogin(true)}
              >
                Login
              </button>
              <button
                className={!isLogin ? "active" : ""}
                onClick={() => setIsLogin(false)}
              >
                Register
              </button>
            </div>
            {isLogin ? (
              <form className="form" onSubmit={handleLogin}>
                <select
                  className="h-[42px] rounded-[5px] border border-#c5c5c4 my-5"
                  name="role"
                  value={loginFormData.role}
                  onChange={handleChangeLogin}
                  required
                >
                  <option value="" disabled>
                    Select User Type--
                  </option>
                  <option value="user">User</option>
                  <option value="organizer">Organizer</option>
                </select>
                <input
                  type="email"
                  placeholder="Email"
                  name="email"
                  value={loginFormData.email}
                  onChange={handleChangeLogin}
                  required
                />
                <input
                  type="password"
                  placeholder="Password"
                  name="password"
                  value={loginFormData.password}
                  onChange={handleChangeLogin}
                  required
                />
                <button type="submit">Login</button>
                <p className="mt-8">
                  Don&apos;t have an Account?{" "}
                  <a href="#" onClick={() => setIsLogin(false)}>
                    Register now
                  </a>
                </p>
              </form>
            ) : (
              <form
                className="form"
                onSubmit={isOtpSent ? handleVerifyOtp : handleSendOtp}
              >
                <select
                  className="h-[42px] rounded-[5px] my-5 border border-#c5c5c4"
                  name="role"
                  value={formData.role}
                  onChange={handleChange}
                  required
                >
                  <option value="" disabled>
                    Select User Type--
                  </option>
                  <option value="user">User</option>
                  <option value="organizer">Organizer</option>
                </select>
                <input
                  type="name"
                  placeholder="Username"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
                <input
                  type="email"
                  placeholder="Email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
                <input
                  type="password"
                  placeholder="Password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  required
                />
                {isOtpSent ? (
                  <>
                    <input
                      type="text"
                      placeholder="Enter OTP"
                      value={otp}
                      onChange={(e) => setOtp(e.target.value)}
                      required
                    />
                    <button type="submit">Verify OTP</button>
                  </>
                ) : (
                  <button type="submit">Send OTP</button>
                )}
                <p className="mt-8">
                  Already have an Account?{" "}
                  <a href="#" onClick={() => setIsLogin(true)}>
                    Login now
                  </a>
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
