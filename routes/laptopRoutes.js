
const express = require("express");
const router = express.Router();

const { getAllLaptops } = require("../controllers/laptopController");

router.get("/laptops", getAllLaptops);

module.exports = router;
