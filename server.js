const express = require("express");
const app = express();
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const { response } = require("express");

app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", function (req, res) {
  res.send("express is working");
});

app.listen(3000, function () {
  console.log("server is running on 3000");
});
