const { Schema, model } = require("mongoose");

const applicationSchema = new Schema({
  name: String,
  description: String,
  features: [String],
  picture: String,
  reviews: [{ stars: Number, review: String, user: String, userId: String }],
  url: String,
  inputType: String,
  outputType: String,
  sectionId: String,
  sectionName: String,
  pack: String,
});

module.exports = model("Application", applicationSchema);
