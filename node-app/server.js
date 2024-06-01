const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
const passport = require("passport");
const userPassportConfig = require("./config/user-passport-config");
const adminPassportConfig = require("./config/admin-passport-config");
const app = express();
require("dotenv").config();
const port = process.env.PORT || 4000;
const mongo_uri = process.env.MONGO_URI;

// routers call
const adminRouter = require("./routers/v1/adminRouter");
const userRouter = require("./routers/v1/userRouter");
const appleAuthRouter = require("./routers/v1/appleAuthRouter");
const googleAuthRouter = require("./routers/v1/googleAuthRouter");
const applicationRouter = require("./routers/v1/applicationRouter");
const subscriptionRouter = require("./routers/v1/subscriptionRouter");
const sectionRouter = require("./routers/v1/sectionRouter");
const fileUploadRouter = require("./routers/v1/fileUploadRouter");

// Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static("public"));
app.use(express.json());
app.use(cors());
// Initialize Passport for both user and admin
app.use(passport.initialize());
app.use(passport.session());

// Use user and admin Passport configurations
passport.use(userPassportConfig);
passport.use(adminPassportConfig);

// Connect to MongoDB
mongoose
  .connect(mongo_uri, {})
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((error) => {
    console.error("Error connecting to MongoDB:", error);
  });

// api routers middlewares
app.use("/api", adminRouter);
app.use("/api", appleAuthRouter);
app.use("/api", applicationRouter);
app.use("/api", fileUploadRouter);
app.use("/api", googleAuthRouter);
app.use("/api", subscriptionRouter);
app.use("/api", sectionRouter);
app.use("/api", userRouter);

app.get("/", (req, res) => {
  console.log("request body: ", req);
  res.send("hello world");
  console.log("hello from the root endpoint");
});

app.listen(port, () => {
  console.log(`started listening on ${port}`);
});
