// import { useState } from "react";
// import "../App.css";
// import axios from "axios";
// import { useNavigate } from "react-router-dom";
// export default function AuthForm() {
//   const [isLogin, setIsLogin] = useState(true);
//   // const [userType, setUserType] = useState("");
//   const navigate = useNavigate();
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     password: "",
//     role: "user", // Default role
//   });
//   const [loginFormData, setloginFormData] = useState({
//     email: "",
//     password: "",
//     role: "user", // Default role
//   });

//   const handleChange = (event) => {
//     const { name, value } = event.target;
//     setFormData((prevData) => ({
//       ...prevData,
//       [name]: value,
//     }));
//   };
//   const handleChangeLogin = (event) => {
//     const { name, value } = event.target;
//     setloginFormData((prevData) => ({
//       ...prevData,
//       [name]: value,
//     }));
//   };
//   const handleRegister = async (event) => {
//     event.preventDefault();
//     console.log(formData);
//     try {
//       const response = await axios.post(
//         "http://localhost:3000/api/users/register",
//         formData
//       );
//       console.log(response.data);
//       alert(response.data.message);
//     } catch (error) {
//       console.log(error);
//     }
//   };
//   const handleLogin = async (event) => {
//     event.preventDefault();
//     console.log(loginFormData);
//     try {
//       const response = await axios.post(
//         "http://localhost:3000/api/users/login",
//         loginFormData
//       );
//       const userData = response.data;

//       console.log(">>", userData);

//       // Check if the user is an organizer
//       if (userData.organizer && userData.organizer.role === "organizer") {
//         navigate("/organizerhome", {
//           state: { userId: userData.organizer._id },
//         });
//       } else if (userData.user && userData.user.role === "user") {
//         navigate("/userhome", {
//           state: { userId: userData.user._id },
//         });
//       } else {
//         console.error("Role not found or invalid.");
//         alert("Login failed. Please check your credentials.");
//       }

//       alert(userData.message);
//     } catch (error) {
//       console.error("Login failed:", error);
//       alert(" Invalid Login Credentials");
//     }
//   };
//   // const handleUserTypeChange = (event) => {
//   //   setUserType(event.target.value);
//   // };
//   return (
//     <>
//       <div className="container">
//         <div className=" w-[550px] h-[650px] borde bg-[#7aad92]  flex justify-center items-center "></div>
//         <div className=" w-[550px] h-[650px] bg-[#dddfde] flex justify-center items-center ">
//           <div className="form-container shadow-2xl  ">
//             <div className="form-toggle">
//               <button
//                 className={isLogin ? "active" : ""}
//                 onClick={() => setIsLogin(true)}
//               >
//                 Login
//               </button>
//               <button
//                 className={!isLogin ? "active" : ""}
//                 onClick={() => setIsLogin(false)}
//               >
//                 Register
//               </button>
//             </div>
//             {isLogin ? (
//               <>
//                 <form className="form" onSubmit={handleLogin}>
//                   {/* <h2>Login Now</h2> */}
//                   <select
//                     className="h-[42px] rounded-[5px] border  border-#c5c5c4"
//                     name="role"
//                     value={loginFormData.role}
//                     onChange={handleChangeLogin}
//                     required
//                   >
//                     <option value="" disabled selected>
//                       Select User Type--
//                     </option>
//                     <option value="user">User</option>
//                     <option value="organizer">Organizer</option>
//                   </select>
//                   <input
//                     type="email"
//                     placeholder="Email"
//                     name="email"
//                     value={loginFormData.email}
//                     onChange={handleChangeLogin}
//                     required
//                   />
//                   <input
//                     type="password"
//                     placeholder="password"
//                     name="password"
//                     value={loginFormData.password}
//                     onChange={handleChangeLogin}
//                     required
//                   />

//                   {/* <a href="#">Forgot Password?</a> */}
//                   <button type="submit">Login</button>

//                   <p className="mt-8">
//                     Don&apos;t have an Account?{" "}
//                     <a href="#" onClick={() => setIsLogin()}>
//                       Register now
//                     </a>
//                   </p>
//                 </form>
//               </>
//             ) : (
//               <>
//                 <form className="form  " onSubmit={handleRegister}>
//                   {/* <h2>Registrater Now</h2> */}
//                   <select
//                     className="h-[42px] rounded-[5px] border  border-#c5c5c4"
//                     name="role"
//                     value={formData.role}
//                     onChange={handleChange}
//                     required
//                   >
//                     <option value="" disabled selected>
//                       Select User Type--
//                     </option>
//                     <option value="user" className="text-[#c5c5c4]-200">
//                       User
//                     </option>
//                     <option value="organizer">Organizer</option>
//                   </select>
//                   <br></br>
//                   <input
//                     type="name"
//                     placeholder="Username "
//                     name="name"
//                     value={formData.name}
//                     onChange={handleChange}
//                     required
//                   />
//                   <input
//                     type="email"
//                     placeholder="Email"
//                     name="email"
//                     value={formData.email}
//                     onChange={handleChange}
//                     required
//                   />
//                   <input
//                     type="password"
//                     placeholder="password"
//                     name="password"
//                     value={formData.password}
//                     onChange={handleChange}
//                     required
//                   />

//                   <button type="submit">Register</button>

//                   <p className="mt-8">
//                     Already have an Account?{" "}
//                     <a href="#" onClick={() => setIsLogin(true)}>
//                       Login now
//                     </a>
//                   </p>
//                 </form>
//               </>
//             )}
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }
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

  // const handleRegister = async (event) => {
  //   event.preventDefault();
  //   console.log(formData);
  //   try {
  //     const response = await axios.post(
  //       "http://localhost:3000/api/users/register",
  //       formData
  //     );
  //     console.log(response.data);
  //     alert(response.data.message);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  const handleSendOtp = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:3000/api/otp/send",
        { email: formData.email } // Send only the email
      );
      alert(response.data.message);
      setIsOtpSent(true); // Set the flag to true after sending OTP
    } catch (error) {
      console.log(error);
      alert("Failed to send OTP");
    }
  };

  // const handleVerifyOtp = async (event) => {
  //   event.preventDefault();
  //   try {
  //     const response = await axios.post(
  //       "http://localhost:3000/api/otp/verify",
  //       { email: formData.email, otp } // Send email and OTP for verification
  //     );
  //     alert(response.data.message);
  //     if (response.data.message === "OTP verified successfully") {
  //       await handleRegister(); // Call the register function if OTP is verified
  //     }
  //   } catch (error) {
  //     console.log(error);
  //     alert("Invalid OTP");
  //   }
  // };
  const handleVerifyOtp = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:3000/api/otp/verify",
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
        "http://localhost:3000/api/users/register",
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
      alert("Invalid Login Credentials");
    }
  };

  return (
    <div className="container">
      <div className="w-[550px] h-[650px] bg-[#dddfde] flex justify-center items-center">
        <div className="form-container shadow-2xl">
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
            <form className="form" onSubmit={handleLogin}>
              <select
                className="h-[42px] rounded-[5px] border border-#c5c5c4"
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
                className="h-[42px] rounded-[5px] border border-#c5c5c4"
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
  );
}
