const express = require("express");
const router = express.Router();
const subscriptionController = require("../../controllers/subscriptionController");
const passport = require("passport");

// Ensure passport is configured before using it
require("../../config/user-passport-config");

// Middleware to protect routes
const isAuthenticated = passport.authenticate("jwt", { session: false });

// Protecting all subscription routes with passport authentication
router.post("/subscription", isAuthenticated, subscriptionController.addController);
router.get("/subscription/:id", isAuthenticated, subscriptionController.getOneController);
router.get("/subscriptions", isAuthenticated, subscriptionController.getAllController);
router.delete("/subscription/:id", isAuthenticated, subscriptionController.removeController);
router.put("/subscription/:id", isAuthenticated, subscriptionController.updateController);

module.exports = router;
