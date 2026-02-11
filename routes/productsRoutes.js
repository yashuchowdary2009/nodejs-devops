const express = require("express");
const router = express.Router();

const { getAllLaptops } = require("../controllers/laptopController");
const { getAllMobiles } = require("../controllers/mobileController");
const { getAllWatches } = require("../controllers/watchController");

// laptops
router.get("/laptops", getAllLaptops);

// mobiles
router.get("/mobiles", getAllMobiles);

// watches
router.get("/watches", getAllWatches);

module.exports = router;
