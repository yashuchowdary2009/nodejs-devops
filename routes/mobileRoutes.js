const express = require("express");
const router = express.Router();
const { getAllMobiles } = require("../controllers/mobileController");

router.get("/", getAllMobiles);

module.exports = router;
