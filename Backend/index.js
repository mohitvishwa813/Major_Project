const express = require("express");
const mongoose = require("mongoose");

const userRoutes = require("./Routes/userSignin.js"); // Import user routes
const addservice = require("./Routes/allService.js");
const otpsend = require("./Routes/otpsend.js"); // Import the otpSend module
const paymentRoutes = require("./Routes/payment.js");
// const manage_services = require("./Routes/manage-service.js");
const cors = require("cors");
require("dotenv").config();

const app = express();
app.use(express.json());
app.use(
  cors({
    origin: [
      "http://localhost:5173",
      "https://flourishing-brigadeiros-f7f124.netlify.app",
      "https://major-project-vmp4-4a09eivid-mohits-projects-5de47686.vercel.app/",
      "https://major-project-vmp4-git-new-frontend-mohits-projects-5de47686.vercel.app/",
      "https://major-project-vmp4-git-new-frontend-mohits-projects-5de47686.vercel.app",
    ],
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
  })
);
app.options("*", cors());
// Connect to MongoDBtele
// const uri = "mongodb://127.0.0.1:27017/Major";
const uri =
  "mongodb+srv://mohitvishwa813:J3RjkM6TCanx93x0@cluster0.h2v73.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
mongoose
  .connect(uri, {
    useNewUrlParser: true,

    dbName: "Major",
  })
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.log("Database connectio eror", err));

//  route

app.use("/api/users", userRoutes);
//for orgainzer to list services
app.use("/api/organizer", addservice);
// //for user to show data
app.use("/api/data/", addservice);
// //for show orgainizer listed services
app.use("/api/show", addservice);
// //for profile
app.use("/api/data", addservice);
//
app.use("/api/user", addservice);
// post details
app.use("/d", addservice);
//category
app.use("/c", addservice);

//otp
app.use("/api/otp", otpsend);
app.use("/api/payment", paymentRoutes); // Use payment routes
// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
