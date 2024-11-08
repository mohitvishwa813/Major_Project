// otpSend.js
const express = require("express");
const nodemailer = require("nodemailer");
const router = express.Router();
let otpStore = {}; // Store OTPs temporarily for each email

// Configure Nodemailer 
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "mohitvishwa813@gmail.com",
    pass: "fhxrzdnjkvzfpdhj",
  },
  debug: true, // Enable debugging
});

// Route to send OTP
router.post("/send", async (req, res) => {
  const { email } = req.body; // Extract email from req.body
  console.log(email);
  // Generate a random 6-digit OTP
  const otp = Math.floor(100000 + Math.random() * 900000).toString();
  console.log("Generated OTP:", otp);
  // Store the generated OTP in otpStore
  otpStore[email] = otp; // Store the OTP with the email key

  // Set up email options
  const mailOptions = {
    from: "mohitvishwa813@gmail.com",
    to: email,
    subject: "Your OTP Code",
    text: `Your OTP code is ${otp}. It is valid for a short time.`,
  };

  try {
    await transporter.sendMail(mailOptions); // Send the email
    console.log("OTP sent successfully");
    res.status(200).json({ message: "OTP sent successfully" });
  } catch (error) {
    console.error("Error sending OTP:", error);
    res.status(500).json({ message: "Failed to send OTP" });
  }
});
// Route to verify OTP
// Route to verify OTP
router.post("/verify", (req, res) => {
  const { email, otp } = req.body;
  console.log("Verifying OTP for:", email); // Log the email
  console.log("Stored OTP:", otpStore[email]); // Log the stored OTP
  console.log("Received OTP:", otp); // Log the received OTP

  if (otpStore[email] === otp) {
    delete otpStore[email]; // OTP is verified, remove from store
    res.status(200).json({ message: "OTP verified successfully" });
  } else {
    res.status(400).json({ message: "Invalid OTP" });
  }
});

module.exports = router;
