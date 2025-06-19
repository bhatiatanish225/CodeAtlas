const express = require("express");
const router = express.Router();
const { readRepoFile } = require("../controllers/readFileController");

router.post("/", readRepoFile);

module.exports = router;
