const mongoose = require("mongoose");
const Appointment = mongoose.Schema({
  name: {
    type: String,
  },
  age: {
    type: Number,
  },
  gender: {
    type: String,
  },
  number: {
    type: Number,
  },
});
module.exports = mongoose.model("Appointment", Appointment);
