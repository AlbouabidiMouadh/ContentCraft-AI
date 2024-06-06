const User = require("../models/User");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const nodemailer = require("nodemailer");
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

// Controller for user sign-in
const signinController = async (req, res) => {
  console.log(req.body);
  const value = await authValidation.schemaSignInValidation.validate(req.body);
  try {
    if (value?.error?.details?.length > 0) {
      return res.status(400).json(value.error.details);
    } else {
      const user = await User.findOne({ email: req.body.email });
      if (!user) {
        return res.status(404).json({ message: "User not found" });
      } else {
        const isMatch = await bcrypt.compare(req.body.password, user.password);
        if (!isMatch) {
          return res.status(400).json({ message: "Incorrect password" });
        } else {
          const payload = {
            id: user._id,
            name: `${user.firstname} ${user.lastname}`,
            email: user.email,
            subscription: user.subscription,
            picture: user.picture,
          };
          const token = jwt.sign(payload, process.env.USER_PRIVATE_KEY, {
            expiresIn: "1h",
          });
          return res.status(200).json({
            message: "Success",
            token: token,
            user: payload,
          });
        }
      }
    }
  } catch (error) {
    console.error("Error during user sign-in: ", error);
    return res.status(500).send("Server error");
  }
};

// Controller for user sign-up
const signupController = async (req, res) => {
  console.log(req.body);
  const value = await authValidation.schemaSignUpValidation.validate(req.body);
  try {
    if (value?.error?.details?.length > 0) {
      return res.status(400).json(value.error.details);
    } else {
      const exist = await User.findOne({ email: req.body.email });
      if (exist) {
        return res.status(409).json({ message: "User already exists" });
      } else {
        const hash = await bcrypt.hash(req.body.password, 10);
        req.body.password = hash;
        const response = await User.create(req.body);
        const data = await User.findById(response._id).select("-password");
        return res
          .status(201)
          .json({ message: "User created successfully", data });
      }
    }
  } catch (error) {
    console.error("Error during user sign-up: ", error);
    return res.status(500).json({ message: "Server error" });
  }
};

// Controller for password recovery
const recoverController = async (req, res) => {
  try {
    const { email } = req.body;

    // Check if the email exists in the database
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    // Generate a temporary password
    const tempPassword = crypto.randomBytes(8).toString("hex");

    // Hash the temporary password before saving it to the database
    const hashedPassword = await bcrypt.hash(tempPassword, 10);

    // Update the user's password in the database
    user.password = hashedPassword;
    await user.save();

    // Send the temporary password to the user's email
    const mailOptions = {
      from: process.env.EMAIL_USER,
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

// Controller to get one user by ID
const getOneController = (req, res) => {
  const { id } = req.params;
  User.findById(id)
    .then((user) => {
      if (!user) {
        return res.status(404).json({ message: "User not found" });
      }
      res.status(200).json(user);
    })
    .catch((err) => {
      console.error("Error fetching user: ", err);
      res.status(500).json({ message: "Server error" });
    });
};

// Controller to get all users
const getAllController = (req, res) => {
  User.find()
    .then((users) => res.status(200).json(users))
    .catch((err) => {
      console.error("Error fetching users: ", err);
      res.status(500).json({ message: "Server error" });
    });
};

// Controller to update a user by ID
const updateController = (req, res) => {
  const { id } = req.params;
  console.log(id);
  console.log(req.body);
  User.findByIdAndUpdate(id, req.body.newUser, { new: true })
    .then((user) => {
      if (!user) {
        return res.status(404).json({ message: "User not found" });
      }
      res.status(200).json(user);
    })
    .catch((err) => {
      console.error("Error updating user: ", err);
      res.status(500).json({ message: "Server error" });
    });
};

// Controller to add a new user
const addController = (req, res) => {
  const newUser = new User(req.body);
  newUser
    .save()
    .then((result) => res.status(201).json(result))
    .catch((err) => {
      console.error("Error adding user: ", err);
      res.status(500).json({ message: "Server error" });
    });
};

const changePasswordController = async (req, res) => {
  const { id } = req.params;
  const { currentPassword, newPassword } = req.body;

  try {
    // Find the user by ID
    const user = await User.findById(id);
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    // Check if the current password matches the stored password
    const isMatch = await bcrypt.compare(currentPassword, user.password);
    if (!isMatch) {
      return res.status(400).json({ message: "Incorrect current password" });
    }

    // Hash the new password
    const hashedPassword = await bcrypt.hash(newPassword, 10);

    // Update the user's password in the database
    user.password = hashedPassword;
    await user.save();

    res.status(200).json({ message: "Password changed successfully" });
  } catch (error) {
    console.error("Error changing password:", error);
    res.status(500).json({ message: "Server error" });
  }
};

// Controller to remove a user by ID
const removeController = (req, res) => {
  const { id } = req.params;
  User.findByIdAndDelete(id)
    .then((result) => {
      if (!result) {
        return res.status(404).json({ message: "User not found" });
      }
      res.status(200).json({ message: "User removed" });
    })
    .catch((err) => {
      console.error("Error removing user: ", err);
      res.status(500).json({ message: "Server error" });
    });
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
  changePasswordController,
};
