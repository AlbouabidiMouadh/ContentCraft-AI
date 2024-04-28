const User = require("../models/User");

const signinController = (req, res) => {
  // this is the signin logic
  //   with the tokens logic
};
const signupController = (req, res) => {
  // this is the signup
  //   with the crypting and saving logic
  // with the tokens logic
};
const recoverController = (req, res) => {
  // the recover password logic
};
const getOneController = (req, res) => {
  // this is the get one logic
  const { id } = req.data;
  User.findById(id)
    .then((user) => {
      console.log(user);
      res.send(user);
    })
    .catch((err) => console.log(err));
};
const getAllController = (req, res) => {
  // this is the get all logic
  User.find()
    .then((user) => {
      console.log(user);
      res.send(user);
    })
    .catch((err) => console.log(err));
};
const updateController = (req, res) => {
  // this is the update logic
  const { newUser } = req.data;
  User.findById(newUser.id, newUser)
    .then((user) => {
      console.log(user);
      res.send(user);
    })
    .catch((err) => console.log(err));
};

const addController = (req, res) => {
  // this is the add logic
  const { newUser } = req.data;
  const user = new User(newUser);
  user
    .save()
    .then((result) => {
      console.log(result);
      res.send(result);
    })
    .catch((err) => console.log(err));
};
const removeController = (req, res) => {
  // this is the remove logic
  const { id } = req.data;
  User.findByIdAndDelete(id)
    .then((result) => {
      console.log(result);
      res.send(result);
    })
    .catch((err) => console.log(err));
};
module.exports = {
  addController,
  getAllController,
  getOneController,
  recoverController,
  removeController,
  signinController,
  signupController,
  updateController,
};
