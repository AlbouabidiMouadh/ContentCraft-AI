const express = require("express");
const router = express.Router();
const subscriptionController = require("../../controllers/subscriptionController");

router.post("subscription", subscriptionController.addController);
router.get("subscription", subscriptionController.getOneController);
router.get("subscription", subscriptionController.getAllController);
router.delete("subscription", subscriptionController.removeController);
router.put("subscription", subscriptionController.updateController);

module.exports = router;
