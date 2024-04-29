const express = require("express");
const mongoose = require("mongoose");
const app = express();
require("dotenv").config();
const port = process.env.PORT || 5000;
const mongo_uri = process.env.MONGO_URI;

// routers call
const adminRouter = require("./routers/v1/adminRouter");
const userRouter = require("./routers/v1/userRouter");
const appleAuthRouter = require("./routers/v1/appleAuthRouter");
const googleAuthRouter = require("./routers/v1/googleAuthRouter");
const applicationRouter = require("./routers/v1/applicationRouter");
const subscriptionRouter = require("./routers/v1/subscriptionRouter");
const fileUploadRouter = require("./routers/v1/fileUploadRouter");

// Connect to MongoDB
mongoose
  .connect(
    mongo_uri,
    {}
  )
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
app.use("/api", userRouter);

app.get("/", (req, res) => {
  console.log("request body: ", req);
  res.send("hello world");
  console.log("hello from the root endpoint");
});

app.listen(3000, () => {
  console.log(`started listening on ${port}`);
});
