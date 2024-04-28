const { Schema, model } = require("mongoose");

const subscriptionSchema = new Schema({
  name: String,
  type: String,
  price: Number | null,
  users: Number,
  description: String,
  features: List(String),
});

module.exports = model("Subscription", subscriptionSchema);
