const express = require('express');
const router = express.Router();
const { v4: uuidv4 } = require('uuid');
const { readDB, writeDB } = require('../utils/db');
const authMiddleware = require('../middleware/auth');

// Public: Submit contact form
router.post('/', (req, res) => {
  const { name, email, phone, service, message } = req.body;
  if (!name || !email || !message) {
    return res.status(400).json({ success: false, message: 'Name, email and message are required.' });
  }

  const db = readDB();
  const entry = {
    id: uuidv4(),
    name, email, phone: phone || '',
    service: service || 'General',
    message,
    status: 'new',
    date: new Date().toISOString()
  };
  db.contacts.push(entry);
  writeDB(db);

  res.json({ success: true, message: 'Message received! We will get back to you soon.' });
});

// Public: Submit enquiry / get quote form
router.post('/enquiry', (req, res) => {
  const { name, mobile, email, company, service, budget, details } = req.body;
  if (!name || !mobile || !email) {
    return res.status(400).json({ success: false, message: 'Name, mobile and email are required.' });
  }

  const db = readDB();
  const entry = {
    id: uuidv4(),
    name, mobile, email,
    company: company || '',
    service: service || '',
    budget: budget || '',
    details: details || '',
    status: 'new',
    date: new Date().toISOString()
  };
  db.enquiries.push(entry);
  writeDB(db);

  res.json({ success: true, message: 'Enquiry submitted! Our team will contact you within 24 hours.' });
});

// Admin: Get all contacts
router.get('/', authMiddleware, (req, res) => {
  const db = readDB();
  const sorted = [...db.contacts].sort((a, b) => new Date(b.date) - new Date(a.date));
  res.json({ success: true, data: sorted });
});

// Admin: Get all enquiries
router.get('/enquiries', authMiddleware, (req, res) => {
  const db = readDB();
  const sorted = [...db.enquiries].sort((a, b) => new Date(b.date) - new Date(a.date));
  res.json({ success: true, data: sorted });
});

// Admin: Update status
router.patch('/:id/status', authMiddleware, (req, res) => {
  const db = readDB();
  const { status } = req.body;
  const idx = db.contacts.findIndex(c => c.id === req.params.id);
  if (idx === -1) return res.status(404).json({ success: false, message: 'Not found.' });
  db.contacts[idx].status = status;
  writeDB(db);
  res.json({ success: true, message: 'Status updated.' });
});

// Admin: Delete contact
router.delete('/:id', authMiddleware, (req, res) => {
  const db = readDB();
  db.contacts = db.contacts.filter(c => c.id !== req.params.id);
  writeDB(db);
  res.json({ success: true, message: 'Deleted.' });
});

module.exports = router;
