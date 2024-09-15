const mongoose = require("mongoose");

const AddServiceSchema = new mongoose.Schema({
  description: { type: String },
  title: { type: String },
  price: { type: Number },
  image: { type: String },
  category: { type: String },
  location: { type: String },
});
//create model
const AddService = mongoose.model("Addservice", AddServiceSchema);
module.exports = AddService;
