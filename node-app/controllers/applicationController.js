const Application = require("../models/Application");

const getOneController = (req, res) => {
  // this is the get one logic
  const { id } = req.data;
  Application.findById(id)
    .then((application) => {
      console.log(application);
      res.send(application);
    })
    .catch((err) => console.log(err));
};
const getAllController = (req, res) => {
  // this is the get all logic
  Application.find()
    .then((application) => {
      console.log(application);
      res.send(application);
    })
    .catch((err) => console.log(err));
};
const updateController = (req, res) => {
  // this is the update logic
  const { newApplication } = req.data;
  Application.findById(newApplication.id, newApplication)
    .then((application) => {
      console.log(application);
      res.send(application);
    })
    .catch((err) => console.log(err));
};

const addController = (req, res) => {
  // this is the add logic
  const { newApplication } = req.data;
  const application = new Application(newApplication);
  application
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
  Application.findByIdAndDelete(id)
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
  removeController,
  updateController,
};
