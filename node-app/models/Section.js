const { Schema, model } = require("mongoose");

const sectionSchema = new Schema({
  name: String,
  description: String,
  picture: String,
  url: String,
  appsIds: [String],
});

module.exports = model("Section", sectionSchema);
