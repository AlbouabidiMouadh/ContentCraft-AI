const express = require("express");
const router = express.Router();
const userController = require("../../controllers/usersController");

router.post("/user/:id", userController.addController);
router.get("/user/:id", userController.getOneController);
router.get("/user/all", userController.getAllController);
router.delete("/user/:id", userController.removeController);
router.put("/user/:id", userController.updateController);
router.post("/login", userController.signinController);
router.post("/signup", userController.signupController);
router.post("/recover", userController.recoverController);

module.exports = router;
