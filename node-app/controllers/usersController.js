const User = require("../models/User");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const nodemailer = require("nodemailer");
const { authValidation } = require("../validators/authValidations");

const transporter = nodemailer.createTransport({
  service: "Gmail",
  host: "smtp.gmail.com",
  port: 465,
  secure: true,
  auth: {
    user: "albouabidimouadh@gmail.com",
    pass: "icjp hhnu uasj sgsg",
  },
});

const signinController = async (req, res) => {
  console.log(req.body);
  const value = await authValidation.schemaSignInValidation.validate(req.body);
  try {
    if (value && value?.error?.details?.length > 0) {
      return res.status(400).json(value.error.details);
    } else {
      User.findOne({ email: req.body.email }).then((user) => {
        if (!user) {
          res.status(404).json({ message: "not found" });
        } else {
          bcrypt.compare(req.body.password, user.password).then((isMatch) => {
            if (!isMatch) {
              return res.status(404).json({ message: "incorrect password" });
            } else {
              const payload = {
                id: user._id,
                name: user.firstname + " " + user.lastname,
                email: user.email,
                subscription: user.subscription,
                picture: user.picture,
              };
              var token = jwt.sign(payload, process.env.privateKey, {
                expiresIn: "1h",
              });
              res.status(200).json({
                message: "success",
                token: token,
                user: payload,
              });
            }
          });
        }
      });
    }
  } catch (error) {
    res.status(500).send("error");
  }
};
const signupController = async (req, res) => {
  console.log(req.body);
  const value = await authValidation.schemaSignUpValidation.validate(req.body);
  try {
    if (value?.error?.details?.length > 0) {
      return res.status(400).json(value.error.details);
    } else {
      const exist = await User.findOne({ email: req.body.email });
      if (exist) {
        res.status(506).json({ message: "user exist" });
      } else {
        const hash = await bcrypt.hash(req.body.password, 10);
        req.body.password = hash;
        const response = await User.create(req.body);
        const data = await User.findById(response._id).select("-password");
        return res.status(200).json({ message: "success", data });
      }
    }
  } catch (error) {
    res.status(504).json(error.message);
  }
};
const recoverController = (req, res) => {
  const mailOptions = {
    from: "your_email@gmail.com",
    to: req.body.email,
    subject: "New Password",
    text: "This is a your new password : " + "\nDo not share your password.",
  };
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error("Error sending email: ", error);
    } else {
      console.log("Email sent: ", info.response);
    }
  });
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
