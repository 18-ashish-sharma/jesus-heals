const mongoose = require("mongoose");
const User = mongoose.model(
  "Patient",
  new mongoose.Schema({
    username: String,
    email: String,
    password: String,
    phone: Number,
    roles: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Role"
      }
    ]
  })
);
module.exports = User;