const express = require('express');
const router = express.Router();
const TeamMember = require('../models/TeamMember');
const authMiddleware = require('../middleware/auth');

// Public: Get all team members
router.get('/', async (req, res) => {
  try {
    const team = await TeamMember.find({ isActive: true }).sort({ displayOrder: 1 });
    res.json({ success: true, data: team });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
});

// Admin: Get all team members
router.get('/admin/all', authMiddleware, async (req, res) => {
  try {
    const team = await TeamMember.find().sort({ displayOrder: 1 });
    res.json({ success: true, data: team });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
});

// Admin: Create team member
router.post('/admin', authMiddleware, async (req, res) => {
  try {
    const member = await TeamMember.create(req.body);
    res.status(201).json({ success: true, data: member });
  } catch (err) {
    res.status(400).json({ success: false, message: err.message });
  }
});

// Admin: Update team member
router.put('/admin/:id', authMiddleware, async (req, res) => {
  try {
    const member = await TeamMember.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!member) return res.status(404).json({ success: false, message: 'Not found' });
    res.json({ success: true, data: member });
  } catch (err) {
    res.status(400).json({ success: false, message: err.message });
  }
});

// Admin: Delete team member
router.delete('/admin/:id', authMiddleware, async (req, res) => {
  try {
    const member = await TeamMember.findByIdAndDelete(req.params.id);
    if (!member) return res.status(404).json({ success: false, message: 'Not found' });
    res.json({ success: true, message: 'Deleted' });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
});

module.exports = router;
