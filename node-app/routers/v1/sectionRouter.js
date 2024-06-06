const express = require("express");
const router = express.Router();
const sectionController = require("../../controllers/sectionController");
const passport = require("passport");

// Route for getting all sections
router.get("/section", sectionController.getAllSections);

// Route for getting a section by ID
router.get("/sectionById/:id", sectionController.getSectionById);

// Route for getting a section by name
router.get("/sectionByName/:name", sectionController.getSectionByName);
module.exports = router;
