const express = require("express");
const router = express.Router();
const applicationController = require("../../controllers/applicationController");
const passport = require("passport");

// Require admin passport configuration
require("../../config/admin-passport-config");

// Passport middleware for admin authentication
const authenticateAdmin = passport.authenticate("admin-local", { session: false });

// POST route for adding an application
router.post("/application", authenticateAdmin, applicationController.addController);

// GET route for fetching a single application by ID
router.get("/application/:id",  applicationController.getOneController);

// GET route for fetching all applications
router.get("/applications",  applicationController.getAllController);

// DELETE route for removing an application by ID
router.delete("/application/:id", authenticateAdmin, applicationController.removeController);

// PUT route for updating an application by ID
router.put("/application/:id", authenticateAdmin, applicationController.updateController);

module.exports = router;
