const express = require("express");
const router = express.Router();
const passport = require("passport");

const adminController = require("../../controllers/adminController");
const subscriptionController = require("../../controllers/subscriptionController");
const applicationController = require("../../controllers/applicationController");
const userController = require("../../controllers/usersController");
const sectionController = require("../../controllers/sectionController");

router.put("/admin/:id", adminController.updateController);
router.post("/admin/login", adminController.signinController);
router.post("/admin/recover", adminController.recoverController);

// Middleware to protect routes
require("../../config/admin-passport-config");
const isAuthenticated = passport.authenticate("jwt-admin", { session: false });

// DELETE route for removing an application by ID
router.delete(
  "/application/:id",
  isAuthenticated,
  applicationController.removeController
);

// PUT route for updating an application by ID
router.put(
  "/application/:id",
  isAuthenticated,
  applicationController.updateController
);

// POST route for adding an application
router.post(
  "/application",
  isAuthenticated,
  applicationController.addController
);

router.get(
  "/subscriptions",
  isAuthenticated,
  subscriptionController.getAllController
);
router.put(
  "/subscription/:id",
  isAuthenticated,
  subscriptionController.updateController
);

// Route for creating a new section
router.post("/section", isAuthenticated, sectionController.createSection);

// Route for updating a section by ID
router.put(
  "/section/:id",
  isAuthenticated,
  sectionController.updateSectionById
);

// Route for deleting a section by ID
router.delete(
  "/section/:id",
  isAuthenticated,
  sectionController.deleteSectionById
);

router.post("/user/:id", isAuthenticated, userController.addController);
router.get("/user/all", isAuthenticated, userController.getAllController);
router.delete("/user/:id", isAuthenticated, userController.removeController);
// router.get("/user/:id", userController.getOneController);
// router.put("/user/:id", isAuthenticated, userController.updateController);

router.post("/admin/:id", isAuthenticated, adminController.addController);
router.get("/admin/:id", isAuthenticated, adminController.getOneController);
router.get("/admin/all", isAuthenticated, adminController.getAllController);
router.delete("/admin/:id", isAuthenticated, adminController.removeController);

module.exports = router;
