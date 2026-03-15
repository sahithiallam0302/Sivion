const express = require('express');
const router = express.Router();
const Project = require('../models/Project');
const authMiddleware = require('../middleware/auth');
const { upload } = require('../config/cloudinary');

// Public: Get all published projects
router.get('/', async (req, res) => {
  try {
    const published = await Project.find({ isActive: true }).sort({ displayOrder: 1 });
    res.json({ success: true, data: published });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
});

// Admin: Get all projects
router.get('/admin/all', authMiddleware, async (req, res) => {
  try {
    const projects = await Project.find().sort({ displayOrder: 1 });
    res.json({ success: true, data: projects });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
});

// Admin: Create project with Cloudinary Upload
router.post('/admin', authMiddleware, upload.single('image'), async (req, res) => {
  try {
    const data = { ...req.body };
    if (req.file) data.coverImage = req.file.path; // Cloudinary URL
    if (data.technologies && typeof data.technologies === 'string') {
        data.technologies = data.technologies.split(',').map(t => t.trim());
    }
    const project = await Project.create(data);
    res.status(201).json({ success: true, data: project });
  } catch (err) {
    res.status(400).json({ success: false, message: err.message });
  }
});

// Admin: Update project
router.put('/admin/:id', authMiddleware, upload.single('image'), async (req, res) => {
  try {
    const data = { ...req.body };
    if (req.file) data.coverImage = req.file.path;
    if (data.technologies && typeof data.technologies === 'string') {
        data.technologies = data.technologies.split(',').map(t => t.trim());
    }
    const project = await Project.findByIdAndUpdate(req.params.id, data, { new: true });
    res.json({ success: true, data: project });
  } catch (err) {
    res.status(400).json({ success: false, message: err.message });
  }
});

// Admin: Delete project
router.delete('/admin/:id', authMiddleware, async (req, res) => {
  try {
    await Project.findByIdAndDelete(req.params.id);
    res.json({ success: true, message: 'Deleted' });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
});

module.exports = router;
