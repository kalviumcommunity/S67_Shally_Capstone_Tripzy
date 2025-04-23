// models/Expense.js
const mongoose = require("mongoose");

const expenseSchema = new mongoose.Schema({
  trip: { type: mongoose.Schema.Types.ObjectId, ref: "Trip", required: true },
  category: { type: String, enum: ["Travel", "Food", "Stay", "Activity", "Other"], required: true },
  amount: { type: Number, required: true },
  description: { type: String },
  date: { type: Date, default: Date.now },
}, { timestamps: true });

module.exports = mongoose.model("Expense", expenseSchema);
