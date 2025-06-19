const { parseDirectory } = require("../utils/parseRepo");
const simpleGit = require("simple-git");
const path = require("path");
const fs = require("fs-extra");
const { v4: uuidv4 } = require("uuid");

const TEMP_DIR = path.join(__dirname, "..", "repos");

const cloneAndParse = async (req, res) => {
  const { clone_url } = req.body;

  if (!clone_url) {
    return res.status(400).json({ error: "clone_url is required" });
  }

  try {
    const id = uuidv4();
    const repoPath = path.join(TEMP_DIR, id);

    await simpleGit().clone(clone_url, repoPath);

    const tree = parseDirectory(repoPath);

    // Clean up cloned repo after parsing (optional)
    await fs.remove(repoPath);

    return res.json({ tree });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ error: "Failed to clone or parse repo" });
  }
};

module.exports = { cloneAndParse };
