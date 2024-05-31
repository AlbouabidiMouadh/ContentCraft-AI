const { Schema, model } = require("mongoose");

const applicationSchema = new Schema({
  name: String,
  description: String,
  picture: String,
  reviews: [{ likes: Number, review: String }],
  url: String,
  appsIds: [String],
});

module.exports = model("Application", applicationSchema);
