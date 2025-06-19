const axios = require("axios");
const pool = require("../db");

const loginWithGitHub = (req, res) => {
  const url = `https://github.com/login/oauth/authorize?client_id=${process.env.GITHUB_CLIENT_ID}&redirect_uri=${process.env.GITHUB_REDIRECT_URI}&scope=repo`;
  res.redirect(url);
};

const handleCallback = async (req, res) => {
  const { code } = req.query;

  const tokenRes = await axios.post("https://github.com/login/oauth/access_token", {
    client_id: process.env.GITHUB_CLIENT_ID,
    client_secret: process.env.GITHUB_CLIENT_SECRET,
    code
  }, {
    headers: { Accept: "application/json" }
  });

  const access_token = tokenRes.data.access_token;

  const userRes = await axios.get("https://api.github.com/user", {
    headers: { Authorization: `token ${access_token}` }
  });

  const user = userRes.data;

  // Save or update user in DB
  const dbRes = await pool.query(`
    INSERT INTO users (github_id, username, avatar_url, access_token)
    VALUES ($1, $2, $3, $4)
    ON CONFLICT (github_id) DO UPDATE
    SET username = $2, avatar_url = $3, access_token = $4
    RETURNING *;
  `, [user.id, user.login, user.avatar_url, access_token]);

  res.json({ message: "Login successful", user: dbRes.rows[0] });
};

module.exports = { loginWithGitHub, handleCallback };
