const Watch = require("../models/Watches");

exports.getAllWatches = async (req, res) => {
  try {
    const watches = await Watch.find();
    res.json(watches);
  } catch {
    res.status(500).json({ message: "Internal Server Error" });
  }
};
