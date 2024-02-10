
const express = require("express");
const { registerUser } = require("../controllers/appointmentController"); // Assuming you have the correct path to the controller
const router = express.Router();

router.route("/appointment").post(registerUser);

module.exports = router;
