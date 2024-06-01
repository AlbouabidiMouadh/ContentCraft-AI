const express = require("express");
const router = express.Router();
const adminController = require("../../controllers/adminController");

router.post("/admin/:id", adminController.addController);
router.get("/admin/:id", adminController.getOneController);
router.get("/admin/all", adminController.getAllController);
router.delete("/admin/:id", adminController.removeController);
router.put("/admin/:id", adminController.updateController);
router.post("/admin/login", adminController.signinController);
router.post("/admin/signup", adminController.signupController);
router.post("/admin/recover", adminController.recoverController);

module.exports = router;
