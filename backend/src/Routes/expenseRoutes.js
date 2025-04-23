const express = require('express');
const router = express.Router();
const Expense = require('../Model/Expense');

// // Add Expense (POST)
router.post('/add', async (req, res) => {
  try {
    const expense = await Expense.create(req.body);
    res.status(201).json(expense);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// Get Expenses by Trip (GET)
router.get('/:tripId', async (req, res) => {
  try {
    const expenses = await Expense.find({ trip: req.params.tripId });
    res.status(200).json(expenses);
  } catch (err) {
    res.status(404).json({ error: 'Expenses not found' });
  }
});

// // Update Expense (PUT)
// router.put('/update/:id', async (req, res) => {
//   try {
//     const updated = await Expense.findByIdAndUpdate(req.params.id, req.body, { new: true });
//     res.status(200).json(updated);
//   } catch (err) {
//     res.status(400).json({ error: err.message });
//   }
// });

module.exports = router;
