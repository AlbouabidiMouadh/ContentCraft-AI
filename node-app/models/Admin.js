const { Schema, model } = require("mongoose");

const adminSchema = new Schema({
  firstName: String,
  lastName: String,
  email: String,
  password: String,
  role: String,
});

module.exports = model("Admin", adminSchema);
