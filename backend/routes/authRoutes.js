
const express = require("express");
const router = express.Router();
const { loginWithGitHub, handleCallback } = require("../controllers/authController");

router.get("/login", loginWithGitHub);
router.get("/callback", handleCallback);

module.exports = router;
