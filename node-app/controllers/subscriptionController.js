const Subscription = require("../models/Subscription");

const getOneController = (req, res) => {
  // this is the get one logic
  const { id } = req.data;
  Subscription.findById(id)
    .then((subscription) => {
      console.log(subscription);
      res.send(subscription);
    })
    .catch((err) => console.log(err));
};
const getAllController = (req, res) => {
  // this is the get all logic
  Subscription.find()
    .then((subscription) => {
      console.log(subscription);
      res.send(subscription);
    })
    .catch((err) => console.log(err));
};
const updateController = (req, res) => {
  // this is the update logic
  const { newSubscription } = req.data;
  Subscription.findById(newSubscription.id, newSubscription)
    .then((subscription) => {
      console.log(subscription);
      res.send(subscription);
    })
    .catch((err) => console.log(err));
};

const addController = (req, res) => {
  // this is the add logic
  const { newSubscription } = req.data;
  const subscription = new Subscription(newSubscription);
  subscription
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
  Subscription.findByIdAndDelete(id)
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
