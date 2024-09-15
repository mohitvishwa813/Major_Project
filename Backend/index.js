const express = require("express");
const mongoose = require("mongoose");

const userRoutes = require("./Routes/userSignin.js"); // Import user routes
const addservice = require("./Routes/allService.js");
const cors = require("cors");
require("dotenv").config();

const app = express();
app.use(express.json());

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
// Use user routes

// Middleware to verify JWT and extract user role
// const authenticateJWT = (req, res, next) => {
//   const token = req.headers["authorization"]?.split(" ")[1];

//   if (!token) {
//     return res.sendStatus(403); // Forbidden
//   }

//   jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
//     if (err) {
//       return res.sendStatus(403); // Forbidden
//     }
//     req.user = user; // Attach user information to request
//     next();
//   });
// };

app.use("/api/users", userRoutes);

app.use("/api/organizer", addservice);
app.use("/api/user/", addservice);

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});