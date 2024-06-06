const express = require("express");
const router = express.Router();
const userController = require("../../controllers/usersController");
const passport = require("passport");

// Middleware to protect routes
const isAuthenticated = passport.authenticate('jwt-user', { session: false });

router.delete("/user/:id", isAuthenticated, userController.removeController);
router.get("/user/:id", isAuthenticated, userController.getOneController);
router.put("/user/:id", isAuthenticated, userController.updateController);
router.put("/user/:id/password", isAuthenticated, userController.changePasswordController);

module.exports = router;
