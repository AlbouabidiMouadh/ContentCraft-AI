require("dotenv").config(); // Load environment variables from .env file
const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
const passport = require("passport");
const userPassportConfig = require("./config/user-passport-config");
const adminPassportConfig = require("./config/admin-passport-config");

const port = process.env.PORT || 4000;
const mongo_uri = process.env.MONGO_URI;

// Initialize Express app
const app = express();

// Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static("public"));
app.use(cors());
app.use(passport.initialize());

// Use user and admin Passport configurations
userPassportConfig(passport);
adminPassportConfig(passport);

// Connect to MongoDB
mongoose
  .connect(mongo_uri, {})
  .then(() => console.log("Connected to MongoDB"))
  .catch((error) => console.error("Error connecting to MongoDB:", error));

// Routers
const adminRouter = require("./routers/v1/adminRouter");
const userRouter = require("./routers/v1/userRouter");
const appleAuthRouter = require("./routers/v1/appleAuthRouter");
const googleAuthRouter = require("./routers/v1/googleAuthRouter");
const applicationRouter = require("./routers/v1/applicationRouter");
const subscriptionRouter = require("./routers/v1/subscriptionRouter");
const sectionRouter = require("./routers/v1/sectionRouter");
const fileUploadRouter = require("./routers/v1/fileUploadRouter");
const mailerRouter = require("./routers/v1/mailerRouter");
const authRouter = require("./routers/v1/authRouter");
const paymentRouter = require("./routers/v1/paymentRouter");

// API routers middlewares
app.use("/api", adminRouter);
app.use("/api", userRouter);
app.use("/api", appleAuthRouter);
app.use("/api", googleAuthRouter);
app.use("/api", applicationRouter);
app.use("/api", fileUploadRouter);
app.use("/api", subscriptionRouter);
app.use("/api", sectionRouter);
app.use("/api", mailerRouter);
app.use("/api", authRouter);
app.use("/api", paymentRouter);

app.get("/", (req, res) => {
  res.send("Hello world");
});

app.listen(port, () => {
  console.log(`Server started listening on ${port}`);
});
