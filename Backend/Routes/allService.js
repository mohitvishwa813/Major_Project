const express = require("express");
const router = express.Router();
const jwt = require("jsonwebtoken");

const AddService = require("../Models/Addservice.js");
const User = require("../Models/User.js");
const Organizer = require("../Models/EventOrganizer.js"); // Ensure this is imported
//authenticateOrganizerJWT for   organizers ,,,,,,,to add-service ,,manage-service,

const authenticateOrganizerJWT = (req, res, next) => {
  const token = req.headers["authorization"]?.split(" ")[1];

  if (!token) {
    return res.sendStatus(403); // Forbidden
  }

  jwt.verify(token, "mohitttt", (err, user) => {
    // Use your secret key here
    if (err) {
      return res.sendStatus(403).json(err); // Forbidden
    }
    if (user.role !== "organizer") {
      return res
        .status(403)
        .json({ message: "Access denied. Not an organizer.", err });
    }
    req.user = user; // Attach user information to request
    next();
  });
};
//authenticateProfile for user and organizer details

const authenticateProfile = (req, res, next) => {
  const token = req.headers["authorization"]?.split(" ")[1];
  if (!token) {
    return res.sendStatus(403);
  }
  jwt.verify(token, "mohitttt", (err, user) => {
    if (err) {
      return res.status(403).json(err);
    }
    req.user = user;
    next();
  });
};

// Route for add-new-service
router.post("/add-service", authenticateOrganizerJWT, async (req, res) => {
  const { image, title, description, price, category, location } = req.body;
  const userId = req.user.userId; // Get the userId from the JWT
  console.log("userid ", userId);

  try {
    const addNewService = new AddService({
      image,
      title,
      description,
      price,
      category,
      location,
      userId,
    });
    const result = await addNewService.save();
    console.log(result);
    return res
      .status(200)
      .json({ message: "Successfuly added new service", service: result });
  } catch (error) {
    return res
      .status(400)
      .json({ message: "Failed to add new service", error: error.message });
  }
});

// Manager services
router.get("/manage-service", authenticateOrganizerJWT, async (req, res) => {
  const userId = req.user.userId; // Get the userId from the JWT
  console.log("User ID:", userId);

  try {
    const services = await AddService.find({ userId: userId });

    if (services.length === 0) {
      return res
        .status(404)
        .json({ message: "No services currently available." });
    }

    // Correctly format the response
    return res.status(200).json({ message: "Your listed services:", services });
  } catch (error) {
    console.error("Error fetching services:", error);
    return res
      .status(500)
      .json({ message: "Failed to fetch services", error: error.message });
  }
});
// Route for show-all-services
router.get("/all-services", async (req, res) => {
  try {
    const services = await AddService.find();
    return res
      .status(200)
      .json({ message: "Services fetched successfully", services: services });
  } catch (error) {
    return res.status(400);
  }
});

//user/organizer profile's

router.get("/profile", authenticateProfile, async (req, res) => {
  const userId = req.user.userId;
  console.log("Profileid --->", userId);

  try {
    let user = await User.findById(userId).select("name email");
    if (!user) {
      user = await Organizer.findById(userId).select("name email");
      if (!user) {
        return res.status(404).json({ message: "User not found" });
      }
      return res
        .status(200)
        .json({ message: "organizer data fetch successfully", user });
    }
    return res
      .status(200)
      .json({ message: "user data fetch successfully", user });
  } catch (error) {
    return res
      .status(500)
      .json({ message: "Server error", error: error.message });
  }
});

module.exports = router;
