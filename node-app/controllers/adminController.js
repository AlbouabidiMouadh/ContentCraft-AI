const Admin = require("../models/Admin");
const nodemailer = require("nodemailer");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const crypto = require("crypto");
const { authValidation } = require("../validators/authValidations");

const transporter = nodemailer.createTransport({
  service: "Gmail",
  host: "smtp.gmail.com",
  port: 465,
  secure: true,
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

// Controller for admin sign-in
const signinController = async (req, res) => {
  console.log(req.body);
  const value = await authValidation.schemaSignInValidation.validate(req.body);
  try {
    if (value && value?.error?.details?.length > 0) {
      return res.status(400).json(value.error.details);
    } else {
      Admin.findOne({ email: req.body.email }).then((admin) => {
        if (!admin) {
          console.log("Admin not found");
          return res.status(404).json({ message: "Admin not found" });
        } else {
          bcrypt.compare(req.body.password, admin.password).then((isMatch) => {
            if (!isMatch) {
              console.log("Incorrect password");
              return res.status(404).json({ message: "Incorrect password" });
            } else {
              const payload = {
                id: admin._id,
                name: admin.firstName + " " + admin.lastName,
                email: admin.email,
                role: admin.role,
              };
              var token = jwt.sign(payload, process.env.ADMIN_PRIVATE_KEY, {
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
    console.error("Error during admin sign-in: ", error);
    return res.status(500).send("Server error");
  }
};

// Controller for password recovery
const recoverController = async (req, res) => {
  try {
    const { email } = req.body;

    // Check if the email exists in the database
    const admin = await Admin.findOne({ email });
    if (!admin) {
      return res.status(404).json({ message: "Admin not found" });
    }

    // Generate a temporary password
    const tempPassword = crypto.randomBytes(8).toString("hex");

    // Hash the temporary password before saving it to the database
    const hashedPassword = await bcrypt.hash(tempPassword, 10);

    // Update the admin's password in the database
    admin.password = hashedPassword;
    await admin.save();

    // Send the temporary password to the admin's email
    const mailOptions = {
      from: "albouabidimouadh@gmail.com",
      to: email,
      subject: "Password Recovery",
      text: `This is your temporary password: ${tempPassword}\nPlease use this password to log in and reset your password immediately. Do not share your password.`,
    };

    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        console.error("Error sending email: ", error);
        return res.status(500).json({ message: "Error sending email" });
      } else {
        console.log("Email sent: ", info.response);
        return res.status(200).json({ message: "Recovery email sent" });
      }
    });
  } catch (error) {
    console.error("Error in password recovery: ", error);
    return res.status(500).json({ message: "Server error" });
  }
};

// Controller to get one admin by ID
const getOneController = (req, res) => {
  const { id } = req.params;
  Admin.findById(id)
    .then((admin) => {
      if (!admin) {
        return res.status(404).json({ message: "Admin not found" });
      }
      res.status(200).json(admin);
    })
    .catch((err) => res.status(500).json({ message: "Server error" }));
};

// Controller to get all admins
const getAllController = (req, res) => {
  Admin.find()
    .then((admins) => res.status(200).json(admins))
    .catch((err) => res.status(500).json({ message: "Server error" }));
};

// Controller to update an admin by ID
const updateController = (req, res) => {
  const { id } = req.params;
  Admin.findByIdAndUpdate(id, req.body, { new: true })
    .then((admin) => {
      if (!admin) {
        return res.status(404).json({ message: "Admin not found" });
      }
      res.status(200).json(admin);
    })
    .catch((err) => res.status(500).json({ message: "Server error" }));
};

// Controller to add a new admin
const addController = (req, res) => {
  const newAdmin = new Admin(req.body);
  newAdmin
    .save()
    .then((result) => res.status(201).json(result))
    .catch((err) => res.status(500).json({ message: "Server error" }));
};

// Controller to remove an admin by ID
const removeController = (req, res) => {
  const { id } = req.params;
  Admin.findByIdAndDelete(id)
    .then((result) => {
      if (!result) {
        return res.status(404).json({ message: "Admin not found" });
      }
      res.status(200).json({ message: "Admin removed" });
    })
    .catch((err) => res.status(500).json({ message: "Server error" }));
};

module.exports = {
  addController,
  getAllController,
  getOneController,
  recoverController,
  removeController,
  signinController,
  updateController,
};
