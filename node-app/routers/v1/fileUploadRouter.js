const express = require("express");
const router = express.Router();
const fs = require("fs");
const path = require("path");
const upload = require("../../controllers/fileUploadController");
const passport = require("passport");

// Ensure passport is configured before using it
require("../../config/user-passport-config");

// Middleware to protect routes
const isAuthenticated = passport.authenticate("jwt", { session: false });

// Reusable function to handle file upload
const handleFileUpload = (req, res, targetDirectory) => {
  const file = req.file;
  if (!file) {
    return res.status(400).send("No file uploaded.");
  }

  const targetPath = path.join(__dirname, targetDirectory, file.originalname);
  fs.rename(file.path, targetPath, (err) => {
    if (err) {
      console.error("Error moving file:", err);
      return res.status(500).send("Error moving file.");
    }
    res.send("File uploaded successfully.");
  });
};

// Route for uploading service picture
router.post("/upload/service-picture", isAuthenticated, upload.single("file"), (req, res) => {
  handleFileUpload(req, res, '../../public/service');
});

// Route for uploading profile picture
router.post("/upload/profile-picture", isAuthenticated, upload.single("file"), (req, res) => {
  handleFileUpload(req, res, '../../public/profile');
});

module.exports = router;
