const express = require('express');
const router = express.Router();
const multer = require('multer');
const path = require('path');
const { v4: uuidv4 } = require('uuid');
const { readDB, writeDB } = require('../utils/db');
const authMiddleware = require('../middleware/auth');

const storage = multer.diskStorage({
  destination: (req, file, cb) => cb(null, path.join(__dirname, '../uploads/portfolio')),
  filename: (req, file, cb) => cb(null, `${Date.now()}-${file.originalname}`)
});
const upload = multer({ storage, limits: { fileSize: 10 * 1024 * 1024 } });

// Public: Get all published projects
router.get('/', (req, res) => {
  const db = readDB();
  const published = db.portfolio.filter(p => p.status === 'published');
  res.json({ success: true, data: published });
});

// Admin: Get all projects
router.get('/admin/all', authMiddleware, (req, res) => {
  const db = readDB();
  res.json({ success: true, data: db.portfolio });
});

// Admin: Create project
router.post('/admin', authMiddleware, upload.single('image'), (req, res) => {
  const db = readDB();
  const project = {
    id: uuidv4(),
    ...req.body,
    technologies: req.body.technologies ? JSON.parse(req.body.technologies) : [],
    image: req.file ? `/uploads/portfolio/${req.file.filename}` : '',
    status: req.body.status || 'published'
  };
  db.portfolio.push(project);
  writeDB(db);
  res.json({ success: true, data: project, message: 'Project added.' });
});

// Admin: Update project
router.put('/admin/:id', authMiddleware, upload.single('image'), (req, res) => {
  const db = readDB();
  const idx = db.portfolio.findIndex(p => p.id === req.params.id);
  if (idx === -1) return res.status(404).json({ success: false, message: 'Not found.' });
  db.portfolio[idx] = {
    ...db.portfolio[idx],
    ...req.body,
    technologies: req.body.technologies ? JSON.parse(req.body.technologies) : db.portfolio[idx].technologies,
    image: req.file ? `/uploads/portfolio/${req.file.filename}` : db.portfolio[idx].image
  };
  writeDB(db);
  res.json({ success: true, message: 'Project updated.' });
});

// Admin: Delete project
router.delete('/admin/:id', authMiddleware, (req, res) => {
  const db = readDB();
  db.portfolio = db.portfolio.filter(p => p.id !== req.params.id);
  writeDB(db);
  res.json({ success: true, message: 'Project deleted.' });
});

module.exports = router;
