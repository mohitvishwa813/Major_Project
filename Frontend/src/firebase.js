// // const firebaseConfig = {
// //     apiKey: "AIzaSyCef0TxkOdjsiWOi4a_6qOiuH3WHLVoN9c",
// //     authDomain: "event-finder-fb479.firebaseapp.com",
// //     projectId: "event-finder-fb479",
// //     storageBucket: "event-finder-fb479.appspot.com",
// //     messagingSenderId: "651146489203",
// //     appId: "1:651146489203:web:925de12e686f3395746906",
// //     measurementId: "G-Q12BSQEYZR",
// //   };
// // firebase.js
// import { initializeApp } from "firebase/app";
// import {
//   getAuth,
//   RecaptchaVerifier,
//   signInWithPhoneNumber,
//   PhoneAuthProvider,
// } from "firebase/auth";

// // Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey: "AIzaSyBpS8gDKJ_7DE0-YunVw3UEgMka05ohM3w",
//   authDomain: "finder-11f76.firebaseapp.com",
//   projectId: "finder-11f76",
//   storageBucket: "finder-11f76.appspot.com",
//   messagingSenderId: "436267285994",
//   appId: "1:436267285994:web:3edb31af6a443542664693",
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const auth = getAuth(app);

// // Function to send OTP
// export const sendOtp = (phoneNumber) => {
//   return new Promise((resolve, reject) => {
//     // Ensure reCAPTCHA verifier is correctly initialized
//     if (!window.recaptchaVerifier) {
//       window.recaptchaVerifier = new RecaptchaVerifier(
//         "recaptcha-container",
//         { size: "invisible" },
//         auth
//       );
//     }

//     signInWithPhoneNumber(auth, phoneNumber, window.recaptchaVerifier)
//       .then((confirmationResult) => {
//         resolve(confirmationResult.verificationId); // Return verification ID
//       })
//       .catch((error) => {
//         reject(error); // Handle errors
//       });
//   });
// };

// // Function to verify OTP
// export const verifyOtp = (verificationId, otp) => {
//   const credential = PhoneAuthProvider.credential(verificationId, otp);
//   return auth.signInWithCredential(credential);
// };

// export default auth;
// firebase.js

import { initializeApp } from "firebase/app";
import {
  getAuth,
  RecaptchaVerifier,
  signInWithPhoneNumber,
  PhoneAuthProvider,
} from "firebase/auth";

// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBpS8gDKJ_7DE0-YunVw3UEgMka05ohM3w",
  authDomain: "finder-11f76.firebaseapp.com",
  projectId: "finder-11f76",
  storageBucket: "finder-11f76.appspot.com",
  messagingSenderId: "436267285994",
  appId: "1:436267285994:web:3edb31af6a443542664693",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// Disable reCAPTCHA verification in development
// if (process.env.NODE_ENV === "development") {
//   auth.settings.appVerificationDisabledForTesting = true;
// }

// Function to send OTP
export const sendOtp = (phoneNumber) => {
  return new Promise((resolve, reject) => {
    if (window.recaptchaVerifier) {
      window.recaptchaVerifier.clear();
    }

    // Set up reCAPTCHA
    window.recaptchaVerifier = new RecaptchaVerifier(
      "recaptcha-container",
      {
        size: "invisible", // Use "normal" for visible reCAPTCHA
      },
      auth
    );

    // Send OTP
    signInWithPhoneNumber(auth, phoneNumber, window.recaptchaVerifier)
      .then((confirmationResult) => {
        resolve(confirmationResult.verificationId);
      })
      .catch((error) => {
        reject(error);
      });
  });
};

// Function to verify OTP
export const verifyOtp = (verificationId, otp) => {
  const credential = PhoneAuthProvider.credential(verificationId, otp);
  return auth.signInWithCredential(credential);
};

export default auth;
