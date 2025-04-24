const express = require('express');
const router = express.Router();
const Trip = require('../Model/Trip');

// Create Trip (POST)
router.post('/create', async (req, res) => {
  try {
    const trip = await Trip.create(req.body);
    res.status(201).json(trip);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// Get all trips
router.get('/trip', async (req, res) => {
    const trips = await Trip.find();
    res.json(trips);
  });

// Get Trips by User (GET)
router.get('/user/:userId', async (req, res) => {
  try {
    const trips = await Trip.find({ user: req.params.userId });
    res.status(200).json(trips);
  } catch (err) {
    res.status(404).json({ error: 'Trips not found' });
  }
});

// Update a Trip (PUT)
router.put('/update/:id', async (req, res) => {
  try {
    const updatedTrip = await Trip.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.status(200).json(updatedTrip);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

module.exports = router;
