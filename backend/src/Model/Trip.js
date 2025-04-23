// models/Trip.js
const mongoose = require("mongoose");

const tripSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  title: { type: String, required: true },
  destination: { type: String, required: true },
  startDate: { type: Date, required: true },
  endDate: { type: Date, required: true },
  totalBudget: { type: Number, required: true },
}, { timestamps: true });

module.exports = mongoose.model("Trip", tripSchema);
