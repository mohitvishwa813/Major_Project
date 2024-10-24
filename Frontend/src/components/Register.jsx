import React, { useState } from "react";
import "../App.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";
export default function AuthForm() {
  const [isLogin, setIsLogin] = useState(true);
  // const [userType, setUserType] = useState("");
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    role: "user", // Default role
  });
  const [loginFormData, setloginFormData] = useState({
    email: "",
    password: "",
    role: "user", // Default role
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };
  const handleChangeLogin = (event) => {
    const { name, value } = event.target;
    setloginFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };
  const handleRegister = async (event) => {
    event.preventDefault();
    console.log(formData);
    try {
      const response = await axios.post(
        "http://localhost:3000/api/users/register",
        formData
      );
      console.log(response.data);
      alert(response.data.message);
    } catch (error) {
      console.log(error);
    }
  };
  const handleLogin = async (event) => {
    event.preventDefault();
    console.log(loginFormData);
    try {
      const response = await axios.post(
        "http://localhost:3000/api/users/login",
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
      alert(" Invalid Login Credentials");
    }
  };
  // const handleUserTypeChange = (event) => {
  //   setUserType(event.target.value);
  // };
  return (
    <>
      <div className="container">
        <div className=" w-[550px] h-[650px] borde bg-[#7aad92]  flex justify-center items-center "></div>
        <div className=" w-[550px] h-[650px] bg-[#dddfde] flex justify-center items-center ">
          <div className="form-container shadow-2xl  ">
            <div className="form-toggle">
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
              <>
                <form className="form" onSubmit={handleLogin}>
                  {/* <h2>Login Now</h2> */}
                  <select
                    className="h-[42px] rounded-[5px] border  border-#c5c5c4"
                    name="role"
                    value={loginFormData.role}
                    onChange={handleChangeLogin}
                    required
                  >
                    <option value="" disabled selected>
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
                    placeholder="password"
                    name="password"
                    value={loginFormData.password}
                    onChange={handleChangeLogin}
                    required
                  />

                  {/* <a href="#">Forgot Password?</a> */}
                  <button type="submit">Login</button>

                  <p className="mt-8">
                    Don't have an Account?{" "}
                    <a href="#" onClick={() => setIsLogin()}>
                      Register now
                    </a>
                  </p>
                </form>
              </>
            ) : (
              <>
                <form className="form  " onSubmit={handleRegister}>
                  {/* <h2>Registrater Now</h2> */}
                  <select
                    className="h-[42px] rounded-[5px] border  border-#c5c5c4"
                    name="role"
                    value={formData.role}
                    onChange={handleChange}
                    required
                  >
                    <option value="" disabled selected>
                      Select User Type--
                    </option>
                    <option value="user" className="text-[#c5c5c4]-200">
                      User
                    </option>
                    <option value="organizer">Organizer</option>
                  </select>
                  <br></br>
                  <input
                    type="name"
                    placeholder="Username "
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
                    placeholder="password"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    required
                  />

                  <button type="submit">Register</button>

                  <p className="mt-8">
                    Already have an Account?{" "}
                    <a href="#" onClick={() => setIsLogin(true)}>
                      Login now
                    </a>
                  </p>
                </form>
              </>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
