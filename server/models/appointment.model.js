// const mongoose = require('mongoose');

// const appointmentSchema = new mongoose.Schema(
//   {
//     email: {
//         type: mongoose.Schema.Types.ObjectId,
//         ref: "Patient"
//     },
//     timeslot: {
//       type: String,
//       required: true
//     },
//   },
//   { timestamps: true }
// )

// export const Appointment = mongoose.model('Appointment', appointmentSchema)
const mongoose = require("mongoose");
const Appointment = mongoose.model(
  "Appointment",
  new mongoose.Schema({
    date: String,
    time: String,
    userId: { type: mongoose.Schema.Types.ObjectId, ref : 'patients'}
  })
);
module.exports = Appointment;