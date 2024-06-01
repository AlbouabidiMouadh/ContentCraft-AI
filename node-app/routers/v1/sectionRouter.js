const express = require("express");
const router = express.Router();
const sectionController = require("../controllers/sectionController");
const passport = require("passport");

require("../../config/admin-passport-config");

// Middleware to protect routes
const isAuthenticated = passport.authenticate("jwt", { session: false });

// Route for creating a new section
router.post("/section", isAuthenticated, sectionController.createSection);

// Route for getting all sections
router.get("/section", sectionController.getAllSections);

// Route for getting a section by ID
router.get("/section/:id", sectionController.getSectionById);

// Route for updating a section by ID
router.put("/section/:id", isAuthenticated, sectionController.updateSectionById);

// Route for deleting a section by ID
router.delete("/section/:id", isAuthenticated, sectionController.deleteSectionById);

module.exports = router;
