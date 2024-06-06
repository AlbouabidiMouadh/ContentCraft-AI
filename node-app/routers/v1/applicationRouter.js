const express = require("express");
const router = express.Router();
const applicationController = require("../../controllers/applicationController");
const passport = require("passport");

// GET route for fetching a single application by ID
router.get("/application/:id", applicationController.getOneController);

// GET route for fetching a single application by name
router.get(
  "/applicationByName/:name",
  applicationController.getOneByNameController
);

// GET route for fetching all applications
router.get("/applications", applicationController.getAllController);

// GET route for fetching applications by section ID
router.get(
  "/applications/section/:sectionId",
  applicationController.getBySectionController
);

router.get("/applications/pack/:pack", applicationController.getByType);

module.exports = router;
