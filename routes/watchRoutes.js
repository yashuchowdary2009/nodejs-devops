
const express = require("express");
const router = express.Router();

const { getAllWatches } = require("../controllers/watchController");

router.get("/watches", getAllWatches);

module.exports = router;
