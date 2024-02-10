const PassengerSchema = require("../models/passengerSchema");
const asyncHandler = require("express-async-handler");
const passengerDetail = asyncHandler(async (req, res) => {
  const { Berth, Coach, BookingBerthCode, CoachPosition } = req.body;
  const passengers = await PassengerSchema.create({
    Berth,
    Coach,
    BookingBerthCode,
    CoachPosition,
  });

  if (passengers) {
    res.status(201).json({
      _id: passengers._id,
      Berth: passengers.Berth,
      Coach: passengers.Coach,
      BookingBerthCode: passengers.BookingBerthCode,
      CoachPosition: passengers.CoachPosition,
    });
  } else {
    res.status(400);
    throw new Error("User not found");
  }
});
module.exports = { passengerDetail };