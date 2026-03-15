const express = require('express');
const router = express.Router();
const { readDB, writeDB } = require('../utils/db');
const authMiddleware = require('../middleware/auth');

// Public: Get site settings (limited)
router.get('/', (req, res) => {
  const db = readDB();
  const { companyName, tagline, email, phone, whatsapp, address, workingHours,
    linkedin, twitter, facebook, instagram } = db.siteSettings;
  res.json({ success: true, data: { companyName, tagline, email, phone, whatsapp, address, workingHours, linkedin, twitter, facebook, instagram } });
});

// Admin: Get all settings
router.get('/admin', authMiddleware, (req, res) => {
  const db = readDB();
  res.json({ success: true, data: db.siteSettings });
});

// Admin: Update settings
router.put('/admin', authMiddleware, (req, res) => {
  const db = readDB();
  db.siteSettings = { ...db.siteSettings, ...req.body };
  writeDB(db);
  res.json({ success: true, message: 'Settings saved.', data: db.siteSettings });
});

module.exports = router;
