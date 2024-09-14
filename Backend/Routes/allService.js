const express = require("express");
const router = express.Router();

const AddService = require("../Models/Addservice.js");
// Route for add-new-service
router.post("/add-service", async (req, res) => {
  const { image, description, price, category, location } = req.body;
  try {
    const addNewService = new AddService({
      image,
      description,
      price,
      category,
      location,
    });
    const result = await addNewService.save();
    return res
      .status(200)
      .json({ message: "Successfuly added new service", service: result });
  } catch (error) {
    return res
      .status(400)
      .json({ message: "Failed to add new service", error: error.message });
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
    return res
      .status(400)
      .json({ message: "Failed to fetch services", error: error });
  }
});

module.exports = router;
