const { Schema, model } = require("mongoose");

const subscriptionSchema = new Schema({
  name: String,
  type: String,
  price: Number,
  users: Number,
  description: String,
  features: [String],
});

module.exports = model("Subscription", subscriptionSchema);
