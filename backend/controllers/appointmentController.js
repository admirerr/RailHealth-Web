const asyncHandler = require("express-async-handler");
// const User = require("../models/userSchema");
const Appointment = require("../models/appointmentSchema");
// const generateToken = require("../config/generateToken");

const registerUser = asyncHandler(async (req, res) => {
  const { name, number, gender } = req.body;

  if (!name || !number || !gender) {
    res.status(400);
    throw new Error("Please Enter all the Feilds");
  }
  const user = await Appointment.create({
    name,
    // age,
    gender,
    number,
  });
  console.log(user);

  if (user) {
    res.status(201).json({
      _id: user._id,
      name: user.name,
      // age: user.age,
      number: user.number,
      gender: user.gender,
    });
  } else {
    res.status(400);
    throw new Error("User not found");
  }
});
module.exports = { registerUser };
