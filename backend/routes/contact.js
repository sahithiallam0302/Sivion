const express = require('express');
const router = express.Router();
const Submission = require('../models/Submission');
const authMiddleware = require('../middleware/auth');

// Public: Submit contact/enquiry
router.post('/', async (req, res) => {
  try {
    const submission = await Submission.create(req.body);
    res.status(201).json({ success: true, message: 'Message sent successfully.' });
  } catch (err) {
    res.status(400).json({ success: false, message: err.message });
  }
});

// Admin: Get all submissions
router.get('/', authMiddleware, async (req, res) => {
  try {
    const submissions = await Submission.find().sort({ createdAt: -1 });
    res.json({ success: true, data: submissions });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
});

// Admin: Get enquiries specifically
router.get('/enquiries', authMiddleware, async (req, res) => {
  try {
    const enquiries = await Submission.find({ type: 'enquiry' }).sort({ createdAt: -1 });
    res.json({ success: true, data: enquiries });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
});

// Admin: Update status
router.patch('/:id/status', authMiddleware, async (req, res) => {
  try {
    const submission = await Submission.findByIdAndUpdate(
      req.params.id, 
      { status: req.body.status }, 
      { new: true }
    );
    res.json({ success: true, data: submission });
  } catch (err) {
    res.status(400).json({ success: false, message: err.message });
  }
});

// Admin: Delete submission
router.delete('/:id', authMiddleware, async (req, res) => {
  try {
    await Submission.findByIdAndDelete(req.params.id);
    res.json({ success: true, message: 'Submission deleted.' });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
});

module.exports = router;
