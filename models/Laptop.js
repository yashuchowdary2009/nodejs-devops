const mongoose = require("mongoose");

const laptopSchema = new mongoose.Schema({
  name: String,
  price: Number,
  image: String
});

module.exports = mongoose.model("Laptop", laptopSchema);
