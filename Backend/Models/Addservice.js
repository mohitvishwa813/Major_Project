const mongoose = require("mongoose");

const AddServiceSchema = new mongoose.Schema({
  description: { type: String },
  title: { type: String },
  price: { type: Number },
  image: { type: String },
  category: { type: String },
  latitude: { type: Number, required: true }, // Added latitude field
  longitude: { type: Number, required: true }, // Added longitude field
  userId: { type: String },
});
//create model
// const AddService = mongoose.model("Addservice", AddServiceSchema);
const AddService =
  mongoose.models.AddService || mongoose.model("AddService", AddServiceSchema);
module.exports = AddService;
