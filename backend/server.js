const express = require("express");
const cors = require("cors");
require("dotenv").config();
const fs = require("fs");
const path = require("path");

const app = express();

// ✅ Ensure 'repos/' directory exists for cloned GitHub repos
const repoDir = path.join(__dirname, "repos");
if (!fs.existsSync(repoDir)) {
  fs.mkdirSync(repoDir);
  console.log("📁 Created /repos directory");
}

// ✅ Middlewares
app.use(cors());
app.use(express.json());

// ✅ Routes
const authRoutes = require("./routes/authRoutes");
app.use("/api/auth", authRoutes);

const repoRoutes = require("./routes/repoRoutes");
app.use("/api/repos", repoRoutes);

const parseRoutes = require("./routes/parseRoutes");
app.use("/api/parse", parseRoutes);

const readFileRoutes = require("./routes/readFileRoutes");
app.use("/api/read-file", readFileRoutes);

const aiRoutes = require("./routes/aiRoutes");
app.use("/api/ask", aiRoutes);

// ✅ Start Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});
