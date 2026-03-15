const express = require('express');
const router = express.Router();
const SiteSettings = require('../models/SiteSettings');
const authMiddleware = require('../middleware/auth');

// Public: Get site settings
router.get('/', async (req, res) => {
  try {
    let settings = await SiteSettings.findOne();
    if (!settings) {
        settings = await SiteSettings.create({}); // Initialize if empty
    }
    res.json({ success: true, data: settings });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
});

// Admin: Get settings
router.get('/admin', authMiddleware, async (req, res) => {
  try {
    let settings = await SiteSettings.findOne();
    if (!settings) {
        settings = await SiteSettings.create({});
    }
    res.json({ success: true, data: settings });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
});

// Admin: Update settings
router.put('/admin', authMiddleware, async (req, res) => {
  try {
    let settings = await SiteSettings.findOneAndUpdate({}, req.body, { 
        new: true, 
        upsert: true 
    });
    res.json({ success: true, data: settings });
  } catch (err) {
    res.status(400).json({ success: false, message: err.message });
  }
});

module.exports = router;
