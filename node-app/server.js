const express = require("express");
const app = express();
require("dotenv").config();
port = process.env.PORT || 5000;

app.get("/", (req, res) => {
  res.send("hello world");
  console.log("hello from the root endpoint");
});

app.listen(3000, () => {
  console.log(`started listening on ${port}`);
});
