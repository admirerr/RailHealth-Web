const express = require("express");
const { passengerDetail } = require("../controllers/passengerControllers");

const router = express.Router();
router.route("/passenger").post(passengerDetail);

module.exports = router;