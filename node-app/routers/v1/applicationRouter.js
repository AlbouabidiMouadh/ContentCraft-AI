const express = require("express");
const router = express.Router();
const applicationController = require("../../controllers/applicationController");

router.post("application", applicationController.addController);
router.get("application", applicationController.getOneController);
router.get("application", applicationController.getAllController);
router.delete("application", applicationController.removeController);
router.put("application", applicationController.updateController);


module.exports = router;
