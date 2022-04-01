const express = require('express');
const appointmentControllers = require("../controllers/appointment.controller");
const router = express.Router();

router.post(
  "/api/auth/create_appointment",
  appointmentControllers.create
);
router.patch(
  "/api/auth/update_appointment/:id",
  appointmentControllers.updateStatus
);
router.get(
  "/api/auth/find_appointment",
  appointmentControllers.findAppointment
);


module.exports = router;
