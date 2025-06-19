const axios = require("axios");

const getUserRepos = async (req, res) => {
  const token = req.headers.authorization;

  if (!token) {
    return res.status(400).json({ error: "Access token required in Authorization header" });
  }

  try {
    const response = await axios.get("https://api.github.com/user/repos", {
      headers: {
        Authorization: `token ${token}`,
      },
    });

    const repos = response.data.map(repo => ({
      name: repo.name,
      full_name: repo.full_name,
      private: repo.private,
      url: repo.html_url,
      clone_url: repo.clone_url,
    }));

    res.json({ repos });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

module.exports = { getUserRepos };
