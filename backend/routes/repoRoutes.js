const express = require("express");
const router = express.Router();

const { getUserRepos } = require("../controllers/repoController");

router.get("/", getUserRepos); // <- this must be a function

module.exports = router;
