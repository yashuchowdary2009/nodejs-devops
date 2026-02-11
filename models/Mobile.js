const mongoose = require("mongoose");

const mobileSchema = new mongoose.Schema({
  name: String,
  price: Number,
  image: String
});

module.exports = mongoose.model("Mobile", mobileSchema);
