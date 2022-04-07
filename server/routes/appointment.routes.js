// const express = require('express');
// const appointmentControllers = require("../controllers/appointment.controller");
// const router = express.Router();

// router.post(
//   "/api/auth/create_appointment",
//   appointmentControllers.create
// );
// router.patch(
//   "/api/auth/update_appointment/:id",
//   appointmentControllers.updateStatus
// );
// router.get(
//   "/api/auth/find_appointment",
//   appointmentControllers.findAppointment
// );
const controller = require("../controllers/appointment.controller");
module.exports = function (app) {
  app.post(
    "/api/auth/create_appointment",
    controller.create
  );
};


// module.exports = router;
