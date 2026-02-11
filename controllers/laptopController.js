const Laptop = require("../models/Laptop");

exports.getAllLaptops = async (req, res) => {
  try {
    const laptops = await Laptop.find();
    res.json(laptops);
  } catch {
    res.status(500).json({ message: "Internal Server Error" });
  }
};
