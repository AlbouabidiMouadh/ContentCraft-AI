const express = require("express");
const router = express.Router();
const userController = require("../../controllers/usersController");

router.post("/user", userController.addController);
router.get("/user", userController.getOneController);
router.get("/user", userController.getAllController);
router.delete("/user", userController.removeController);
router.put("/user", userController.updateController);
router.post("/login", userController.signinController);
router.post("/signup", userController.signupController);
router.post("/user", userController.recoverController);

module.exports = router;
