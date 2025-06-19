const express = require("express");
const router = express.Router();
const { cloneAndParse } = require("../controllers/parseController");

router.post("/", cloneAndParse);

module.exports = router;
