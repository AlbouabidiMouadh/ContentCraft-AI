const { Schema, model } = require("mongoose");

const userSchema = new Schema({
  firstname: String,
  lastname: String,
  email: String,
  password: String,
  picture: {type: String, default: ""},
  subscription: {type: String, default: "Free"},
  googleAuth: {type: String, default: ""},
  appleAuth: {type: String, default: ""},
});

module.exports = model("User", userSchema);
