const express = require('express');
const router = express.Router();
const multer = require('multer');
const path = require('path');
const { v4: uuidv4 } = require('uuid');
const { readDB, writeDB } = require('../utils/db');
const authMiddleware = require('../middleware/auth');

const storage = multer.diskStorage({
  destination: (req, file, cb) => cb(null, path.join(__dirname, '../uploads/blog')),
  filename: (req, file, cb) => cb(null, `${Date.now()}-${file.originalname}`)
});
const upload = multer({ storage, limits: { fileSize: 5 * 1024 * 1024 } });

// Public: Get all published posts
router.get('/', (req, res) => {
  const db = readDB();
  const published = db.blog.filter(p => p.status === 'published')
    .sort((a, b) => new Date(b.date) - new Date(a.date));
  res.json({ success: true, data: published });
});

// Public: Get single post by slug
router.get('/:slug', (req, res) => {
  const db = readDB();
  const post = db.blog.find(p => p.slug === req.params.slug && p.status === 'published');
  if (!post) return res.status(404).json({ success: false, message: 'Post not found.' });
  res.json({ success: true, data: post });
});

// Admin: Get all posts
router.get('/admin/all', authMiddleware, (req, res) => {
  const db = readDB();
  res.json({ success: true, data: db.blog });
});

// Admin: Create post
router.post('/admin', authMiddleware, upload.single('image'), (req, res) => {
  const db = readDB();
  const post = {
    id: uuidv4(),
    ...req.body,
    image: req.file ? `/uploads/blog/${req.file.filename}` : '',
    date: new Date().toISOString(),
    status: req.body.status || 'draft'
  };
  db.blog.push(post);
  writeDB(db);
  res.json({ success: true, data: post, message: 'Post created.' });
});

// Admin: Update post
router.put('/admin/:id', authMiddleware, upload.single('image'), (req, res) => {
  const db = readDB();
  const idx = db.blog.findIndex(p => p.id === req.params.id);
  if (idx === -1) return res.status(404).json({ success: false, message: 'Not found.' });
  db.blog[idx] = {
    ...db.blog[idx],
    ...req.body,
    image: req.file ? `/uploads/blog/${req.file.filename}` : db.blog[idx].image
  };
  writeDB(db);
  res.json({ success: true, message: 'Post updated.' });
});

// Admin: Delete post
router.delete('/admin/:id', authMiddleware, (req, res) => {
  const db = readDB();
  db.blog = db.blog.filter(p => p.id !== req.params.id);
  writeDB(db);
  res.json({ success: true, message: 'Post deleted.' });
});

module.exports = router;
