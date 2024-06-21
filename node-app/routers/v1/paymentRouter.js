const express = require("express");
const router = express.Router();
const passport = require("passport");
const paymentController = require("../../controllers/paymentController");
// Get all payments
router.get(
  "/payments",
  passport.authenticate("jwt-admin", { session: false }),
  paymentController.getAllPayments
);

// Create a new payment
router.post(
  "/payments",
  passport.authenticate("jwt-user", { session: false }),
  paymentController.createPayment
);

// Update an existing payment
router.put(
  "/payments/:id",
  passport.authenticate("jwt-admin", { session: false }),
  paymentController.updatePayment
);

// Delete a payment
router.delete(
  "/payments/:id",
  passport.authenticate("jwt-admin", { session: false }),
  paymentController.deletePayment
);

module.exports = router;
