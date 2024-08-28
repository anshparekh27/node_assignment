const express = require('express');
const router = new express.Router();
const Bonus = require('../models/bonus');

// Route to get all bonuses
router.get('/bonuses', async (req, res) => {
    try {
        const bonuses = await Bonus.find({});
        console.log(bonuses); // Logs the bonuses to the console
        res.json(bonuses); // Sends the bonuses as JSON response
    } catch (error) {
        res.status(500).json({ message: error.message }); // Handles errors
    }
});

module.exports = router;
