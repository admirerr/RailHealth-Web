const mongoose = require("mongoose");
const PassengerSchema = mongoose.Schema({
  Berth: {
    type: Number,
  },
  Coach: {
    type: String,
  },
  BookingBerthNo: {
    type: String,
  },
  BookingBerthCode: {
    type: String,
  },
  BookingCoachId: {
    type: String,
  },
  BookingStatus: {
    type: String,
  },
  BookingStatusIndex: {
    type: String,
  },
  BookingStatusNew: {
    type: String,
  },
  CoachPosition: {
    type: String,
  },
  ConfirmTktStatus: {
    type: String,
  },
  CurrentBerthCode: {
    type: String,
  },
  CurrentBerthNo: {
    type: String,
  },
  CurrentCoachId: {
    type: String,
  },
  CurrentStatus: {
    type: String,
  },
  CurrentStatusIndex: {
    type: String,
  },
  CurrentStatusNew: {
    type: String,
  },
  Number: {
    type: Number,
  },
  Pnr: {
    type: String,
  },
  Prediction: {
    type: String,
  },
  PredictionPercentage: {
    type: String,
  },
  ReferenceId: {
    type: String,
  },
});
module.exports = mongoose.model("PassengerSchema", PassengerSchema);