const express = require("express");
const Payment = require("../models/Payment");

// Get all payments
const getAllPayments = async (req, res) => {
  try {
    const payments = await Payment.find();
    res.json(payments);
  } catch (error) {
    res.status(500).json({ error: "Error fetching payments" });
  }
};

// Create a new payment
const createPayment = async (req, res) => {
  try {
    const payment = new Payment(req.body);
    await payment.save();
    res.json(payment);
  } catch (error) {
    res.status(500).json({ error: "Error creating payment" });
  }
};

// Update an existing payment
const updatePayment = async (req, res) => {
  try {
    const payment = await Payment.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    res.json(payment);
  } catch (error) {
    res.status(500).json({ error: "Error updating payment" });
  }
};

// Delete a payment
const deletePayment = async (req, res) => {
  try {
    await Payment.findByIdAndDelete(req.params.id);
    res.json({ message: "Payment deleted" });
  } catch (error) {
    res.status(500).json({ error: "Error deleting payment" });
  }
};

module.exports = {
  getAllPayments,
  updatePayment,
  deletePayment,
  createPayment,
};
