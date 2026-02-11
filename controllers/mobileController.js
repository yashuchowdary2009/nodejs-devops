const Mobile = require("../models/Mobile");

exports.getAllMobiles = async (req, res) => {
  try {
    const mobiles = await Mobile.find();
    res.json(mobiles);
  } catch {
    res.status(500).json({ message: "Internal Server Error" });
  }
};
