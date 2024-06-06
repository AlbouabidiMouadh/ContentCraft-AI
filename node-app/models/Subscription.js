const { Schema, model } = require("mongoose");

const subscriptionSchema = new Schema({
  name: String,
  type: String,
  price: Number,
  users: Number,
  startDate: Date,
  endDate : Date,
});

module.exports = model("Subscription", subscriptionSchema);
