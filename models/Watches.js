const mongoose = require("mongoose");

const watchSchema = new mongoose.Schema({
  name: String,
  price: Number,
  image: String
});

module.exports = mongoose.model("Watch", watchSchema);
