const fs = require("fs");
const path = require("path");

const EXCLUDE_DIRS = [".git", "node_modules", ".vscode", ".idea"];

function parseDirectory(dirPath) {
  const structure = {
    name: path.basename(dirPath),
    type: "folder",
    children: [],
  };

  const items = fs.readdirSync(dirPath);

  for (const item of items) {
    const fullPath = path.join(dirPath, item);
    const stats = fs.statSync(fullPath);

    if (EXCLUDE_DIRS.includes(item)) continue; // ❌ Skip excluded folders

    if (stats.isDirectory()) {
      structure.children.push(parseDirectory(fullPath));
    } else {
      structure.children.push({
        name: item,
        type: "file",
      });
    }
  }

  return structure;
}

module.exports = { parseDirectory };
