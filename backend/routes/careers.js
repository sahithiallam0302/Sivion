const express = require('express');
const router = express.Router();
const multer = require('multer');
const path = require('path');
const { v4: uuidv4 } = require('uuid');
const { readDB, writeDB } = require('../utils/db');
const authMiddleware = require('../middleware/auth');

const storage = multer.diskStorage({
  destination: (req, file, cb) => cb(null, path.join(__dirname, '../uploads/resumes')),
  filename: (req, file, cb) => cb(null, `${Date.now()}-${file.originalname}`)
});
const upload = multer({ storage, limits: { fileSize: 5 * 1024 * 1024 } });

// Public: Get active jobs
router.get('/', (req, res) => {
  const db = readDB();
  const active = db.jobs.filter(j => j.status === 'active');
  res.json({ success: true, data: active });
});

// Public: Get single job
router.get('/:id', (req, res) => {
  const db = readDB();
  const job = db.jobs.find(j => j.id === req.params.id);
  if (!job) return res.status(404).json({ success: false, message: 'Job not found.' });
  res.json({ success: true, data: job });
});

// Public: Submit application
router.post('/apply', upload.single('resume'), (req, res) => {
  const { name, email, phone, jobId, jobTitle, coverLetter } = req.body;
  if (!name || !email || !phone) {
    return res.status(400).json({ success: false, message: 'Name, email, and phone are required.' });
  }

  const db = readDB();
  const application = {
    id: uuidv4(),
    name, email, phone,
    jobId: jobId || '',
    jobTitle: jobTitle || 'General Application',
    coverLetter: coverLetter || '',
    resumeFile: req.file ? req.file.filename : null,
    status: 'new',
    date: new Date().toISOString()
  };
  db.careers.push(application);
  writeDB(db);

  res.json({ success: true, message: 'Application submitted! We will review and contact you soon.' });
});

// Admin: Get all jobs
router.get('/admin/all', authMiddleware, (req, res) => {
  const db = readDB();
  res.json({ success: true, data: db.jobs });
});

// Admin: Create job
router.post('/admin', authMiddleware, (req, res) => {
  const db = readDB();
  const job = { id: uuidv4(), ...req.body, status: 'active', postedDate: new Date().toISOString() };
  db.jobs.push(job);
  writeDB(db);
  res.json({ success: true, data: job, message: 'Job posted.' });
});

// Admin: Update job
router.put('/admin/:id', authMiddleware, (req, res) => {
  const db = readDB();
  const idx = db.jobs.findIndex(j => j.id === req.params.id);
  if (idx === -1) return res.status(404).json({ success: false, message: 'Not found.' });
  db.jobs[idx] = { ...db.jobs[idx], ...req.body };
  writeDB(db);
  res.json({ success: true, message: 'Job updated.' });
});

// Admin: Delete job
router.delete('/admin/:id', authMiddleware, (req, res) => {
  const db = readDB();
  db.jobs = db.jobs.filter(j => j.id !== req.params.id);
  writeDB(db);
  res.json({ success: true, message: 'Job deleted.' });
});

// Admin: Get all applications
router.get('/admin/applications', authMiddleware, (req, res) => {
  const db = readDB();
  const sorted = [...db.careers].sort((a, b) => new Date(b.date) - new Date(a.date));
  res.json({ success: true, data: sorted });
});

// Admin: Update application status
router.patch('/admin/applications/:id', authMiddleware, (req, res) => {
  const db = readDB();
  const idx = db.careers.findIndex(c => c.id === req.params.id);
  if (idx === -1) return res.status(404).json({ success: false, message: 'Not found.' });
  db.careers[idx].status = req.body.status;
  writeDB(db);
  res.json({ success: true, message: 'Application status updated.' });
});

module.exports = router;
