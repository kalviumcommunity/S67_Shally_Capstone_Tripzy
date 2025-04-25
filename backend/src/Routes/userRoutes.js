const express = require('express');
const router = express.Router();
const User = require('../Model/User');

// Register User
router.post('/register', async (req, res) => {
  try {
    const {name, email, password} = req.body
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: 'User already exists' });
    }
    const user = await User.create({name, email, password});
    res.status(201).json(user);
  } catch (err) {
    console.log(err);
    res.status(400).json({ message: "Internal Server Error", err });
  }
});

// Get all users
router.get('/user', async (req, res) => {
  try {
    const user = await User.find();
    res.status(200).json(user);
  } catch (err) {
    res.status(404).json({ error: 'User not found' });
  }
});

// Get User by ID
router.get('/user/:id', async (req, res) => {
    try {
      const user = await User.findById(req.params.id);
      res.status(200).json(user);
    } catch (err) {
      res.status(404).json({ error: 'User not found' });
    }
  });

module.exports = router;
