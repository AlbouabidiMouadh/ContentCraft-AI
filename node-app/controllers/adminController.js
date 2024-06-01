const Admin = require("../models/Admin");

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
      Admin.findOne({ email: req.body.email }).then((admin) => {
        if (!admin) {
          res.status(404).json({ message: "not found" });
        } else {
          bcrypt.compare(req.body.password, admin.password).then((isMatch) => {
            if (!isMatch) {
              return res.status(404).json({ message: "incorrect password" });
            } else {
              const payload = {
                id: admin._id,
                name: admin.firstName + " " + admin.lastName,
                email: admin.email,
                role: admin.role,
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
