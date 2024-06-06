const express = require("express");
const router = express.Router();
const fs = require("fs");
const path = require("path");
const upload = require("../../controllers/fileUploadController");
const passport = require("passport");

// Middleware to protect routes
const isAuthenticatedAdmin = passport.authenticate("jwt-admin", { session: false });
const isAuthenticatedUser = passport.authenticate("jwt-user", { session: false });

// Reusable function to handle file upload
const handleFileUpload = (req, res, targetDirectory) => {
  const file = req.file;
  if (!file) {
    return res.status(400).send("No file uploaded.");
  }

  const targetPath = path.join(__dirname, targetDirectory, file.originalname);
  
  // Ensure the directory exists
  fs.mkdirSync(path.dirname(targetPath), { recursive: true });

  fs.rename(file.path, targetPath, (err) => {
    if (err) {
      console.error("Error moving file:", err);
      // Clean up temporary file
      fs.unlinkSync(file.path);
      return res.status(500).send("Error moving file.");
    }
    res.send("File uploaded successfully.");
  });
};

// Route for uploading service picture
router.post(
  "/upload/service-picture",
  isAuthenticatedAdmin,
  upload.single("file"),
  (req, res) => {
    handleFileUpload(req, res, "../../public/service");
  }
);

// Route for uploading section picture
router.post(
  "/upload/section-picture",
  isAuthenticatedAdmin,
  upload.single("file"),
  (req, res) => {
    handleFileUpload(req, res, "../../public/section");
  }
);

// Route for uploading profile picture
router.post(
  "/upload/profile-picture",
  isAuthenticatedUser,
  upload.single("file"),
  (req, res) => {
    handleFileUpload(req, res, "../../public/profile");
  }
);

module.exports = router;
