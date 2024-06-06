const express = require("express");
const router = express.Router();
const mailerController = require("../../controllers/mailerController");

router.post("/contact", mailerController.submitContactForm);

module.exports = router;
