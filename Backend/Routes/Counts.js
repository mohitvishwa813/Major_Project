const express = require("express");
const router = express.Router();
const User = require("../Models/User");
const Organizer = require("../Models/EventOrganizer");
const AddService = require("../Models/AddService");

// Get total number of users
router.get("/total-users", async (req, res) => {
  try {
    const totalUsers = await User.countDocuments();
    res.json({ totalUsers });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Get total number of organizers
router.get("/total-organizers", async (req, res) => {
  try {
    const totalOrganizers = await Organizer.countDocuments();
    res.json({ totalOrganizers });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Get total number of promoted posts
router.get("/total-promoted-posts", async (req, res) => {
  try {
    const totalPromotedPosts = await AddService.countDocuments({
      promoted: true,
    });
    res.json({ totalPromotedPosts });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Get total number of all services
router.get("/total-services", async (req, res) => {
  try {
    const totalServices = await AddService.countDocuments();
    res.json({ totalServices });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});
router.get("/total-post", async (req, res) => {
  try {
    const services = await AddService.find({}, "title category"); // Fetch title & category
    res.json({ totalServices: services.length, services });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});
router.delete("/posts/delete/:id", async (req, res) => {
  try {
    await AddService.findByIdAndDelete(req.params.id);
    res.json({ success: true, message: "Post deleted successfully" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// 🟢 Get all users with booking count
router.get("/all-users", async (req, res) => {
  try {
    const users = await User.find({}, "name email"); // Fetch only name & email
    res.json(users);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// 🔴 Delete a user
router.delete("/delete-user/:id", async (req, res) => {
  try {
    await User.findByIdAndDelete(req.params.id);
    res.json({ success: true, message: "User deleted successfully" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// 🟢 Get all organizers
router.get("/all-organizers", async (req, res) => {
  try {
    const organizers = await Organizer.find({}, "name email");
    res.json(organizers);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// 🔴 Delete an organizer
router.delete("/delete-organizer/:id", async (req, res) => {
  try {
    await Organizer.findByIdAndDelete(req.params.id);
    res.json({ success: true, message: "Organizer deleted successfully" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// 🟢 Get all promoted posts
router.get("/all-promoted-posts", async (req, res) => {
  try {
    const promotedPosts = await AddService.find(
      { promoted: true },
      "title category"
    );
    res.json(promotedPosts);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// 🔴 Delete a promoted post
router.delete("/delete-promoted-post/:id", async (req, res) => {
  try {
    await AddService.findByIdAndDelete(req.params.id);
    res.json({ success: true, message: "Promoted post deleted successfully" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
