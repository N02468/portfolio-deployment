const express = require('express');
const router = express.Router();
const Contact = require('../models/Contact'); // Ensure the path is correct

// POST: Create a new contact entry
router.post('/', async (req, res) => {
  try {
    const { name, email, message } = req.body;

    // Validate inputs
    if (!name || !email || !message) {
      return res.status(400).json({ error: 'All fields are required' });
    }

    // Create and save new contact
    const newContact = new Contact({ name, email, message });
    await newContact.save();

    res.status(201).json({ message: 'Contact form submitted successfully!' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to submit contact form' });
  }
});

// Export the router
module.exports = router;
