const Admin = require("../models/Admin");

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
  Admin.findById(id)
    .then((admin) => {
      console.log(admin);
      res.send(admin);
    })
    .catch((err) => console.log(err));
};
const getAllController = (req, res) => {
  // this is the get all logic
  Admin.find()
    .then((admin) => {
      console.log(admin);
      res.send(admin);
    })
    .catch((err) => console.log(err));
};
const updateController = (req, res) => {
  // this is the update logic
  const { newAdmin } = req.data;
  Admin.findById(newAdmin.id, newAdmin)
    .then((admin) => {
      console.log(admin);
      res.send(admin);
    })
    .catch((err) => console.log(err));
};

const addController = (req, res) => {
  // this is the add logic
  const { newAdmin } = req.data;
  const admin = new Admin(newAdmin);
  admin
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
  Admin.findByIdAndDelete(id)
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
