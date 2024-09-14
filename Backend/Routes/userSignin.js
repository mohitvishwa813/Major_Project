// routes/userRoutes.js
const express = require("express");
const router = express.Router();
const User = require("../Models/User");
const Organizer = require("../Models/EventOrganizer.js");
//registration
router.post("/register", async (req, res) => {
  const { name, email, password, role } = req.body;

  try {
    if (role === "user") {
      // Create a new user
      const newUser = new User({ name, email, password, role });
      await newUser.save();
      return res
        .status(201)
        .json({ message: "User registered successfully", user: newUser });
    } else if (role === "organizer") {
      // Create a new organizer
      const newOrganizer = new Organizer({ name, email, password, role });
      await newOrganizer.save();
      return res.status(201).json({
        message: "Organizer registered successfully",
        organizer: newOrganizer,
      });
    } else {
      return res.status(400).json({ message: "Invalid role" });
    }
  } catch (error) {
    res
      .status(400)
      .json({ message: "Error registering user", error: error.message });
  }
});

//login

router.post("/login", async (req, res) => {
  const { email, password ,role} = req.body;

if(role=='user'){

  //check in user collection

  const user = await User.findOne({
    email,
    password,
  });
  if (!user) {
    return res.status(401).json({ message: "Invalid email or password" });
    }
  res.json({ message: "Login successful as user", user });

}

else if(role=="organizer"){

    const organizer = await Organizer.findOne({
      email,
      password,
    });
    if (!organizer) {
      return res.status(401).json({ message: "Invalid email or password" });
      }
    res.json({ message: "Login successful as organizer", organizer });
  
}
else{
  return res.status(401).json({ message: "Invalid credentials" });
}
 
});

module.exports = router;
