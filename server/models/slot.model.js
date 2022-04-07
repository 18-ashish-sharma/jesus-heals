const mongoose = require("mongoose");
const Slots = mongoose.model(
  "Slot",
  new mongoose.Schema({
    time: String,
    booked: Boolean,
  })
);
module.exports = Slots;