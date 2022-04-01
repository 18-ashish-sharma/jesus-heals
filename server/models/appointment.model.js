const mongoose = require('mongoose');

const appointmentSchema = new mongoose.Schema(
  {
    email: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Patient"
    },
    date: {
      type: Date,
      required: true
    },
    timeslot: {
      type: String,
      required: true
    },
  },
  { timestamps: true }
)

export const Appointment = mongoose.model('Appointment', appointmentSchema)