const simpleGit = require("simple-git");
const path = require("path");
const fs = require("fs-extra");
const { v4: uuidv4 } = require("uuid");

const TEMP_DIR = path.join(__dirname, "..", "repos");

const readRepoFile = async (req, res) => {
  const { clone_url, file_path } = req.body;

  if (!clone_url || !file_path) {
    return res.status(400).json({ error: "clone_url and file_path are required" });
  }

  try {
    const id = uuidv4();
    const repoPath = path.join(TEMP_DIR, id);

    // Clone repo
    await simpleGit().clone(clone_url, repoPath);

    // Resolve full path to file
    const fullPath = path.join(repoPath, file_path);

    // Read file content
    const content = await fs.readFile(fullPath, "utf-8");

    // Cleanup
    await fs.remove(repoPath);

    return res.json({ content });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ error: "Failed to read file" });
  }
};

module.exports = { readRepoFile };
