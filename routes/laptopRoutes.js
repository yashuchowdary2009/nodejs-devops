const express = require("express");
const { getAllLaptops } = require("../controllers/laptopController");
const router = express.Router();

// PUBLIC ACCESS - No token required
router.get("/laptops", getAllLaptops);

module.exports = router;
