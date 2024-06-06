const express = require("express");
const router = express.Router();
const userController = require("../../controllers/usersController");
const adminController = require("../../controllers/adminController");

router.post("/admin/login", adminController.signinController);
router.post("/admin/recover", adminController.recoverController);

router.post("/login", userController.signinController);
router.post("/signup", userController.signupController);
router.post("/recover", userController.recoverController);

module.exports = router;
