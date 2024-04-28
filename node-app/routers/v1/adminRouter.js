const express = require("express");
const router = express.Router();
const adminController = require("../../controllers/adminController");

router.post("admin", adminController.addController);
router.get("admin", adminController.getOneController);
router.get("admin", adminController.getAllController);
router.delete("admin", adminController.removeController);
router.put("admin", adminController.updateController);
router.post("admin", adminController.signinController);
router.post("admin", adminController.signupController);
router.post("admin", adminController.recoverController);

module.exports = router;
