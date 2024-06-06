const { Schema, model } = require("mongoose");

const paymentSchema = new Schema({
  firstName: String,
  lastName: String,
  email: String,
  amount: Number,
  date: { type: Date, default: Date.now },
  method: String,
});

module.exports = model("Payment", paymentSchema);
