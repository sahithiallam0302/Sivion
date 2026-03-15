require('dotenv').config();
const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const rateLimit = require('express-rate-limit');
const path = require('path');
const fs = require('fs');

const app = express();
const PORT = process.env.PORT || 5000;

// ─── Ensure upload dirs exist ───────────────────────────────────────────────
['uploads/resumes', 'uploads/blog', 'uploads/portfolio'].forEach(dir => {
  const full = path.join(__dirname, dir);
  if (!fs.existsSync(full)) fs.mkdirSync(full, { recursive: true });
});

// ─── Security & Middleware ───────────────────────────────────────────────────
app.use(helmet({ crossOriginResourcePolicy: { policy: 'cross-origin' } }));
app.use(cors({
  origin: [process.env.FRONTEND_URL || 'http://localhost:5173', 'http://localhost:5174'],
  credentials: true
}));
app.use(express.json({ limit: '10mb' }));
app.use(express.urlencoded({ extended: true, limit: '10mb' }));

// Rate limiting for public form endpoints
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 30,
  message: { success: false, message: 'Too many requests. Please try again later.' }
});
app.use('/api/contact', limiter);
app.use('/api/careers/apply', limiter);

// Static files for uploaded images
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

// Admin Panel HTML (served at /admin)
app.use('/admin', express.static(path.join(__dirname, 'admin-panel')));
app.get('/admin/*', (req, res) => {
  res.sendFile(path.join(__dirname, 'admin-panel', 'index.html'));
});

// ─── API Routes ──────────────────────────────────────────────────────────────
app.use('/api/auth',      require('./routes/auth'));
app.use('/api/contact',   require('./routes/contact'));
app.use('/api/careers',   require('./routes/careers'));
app.use('/api/blog',      require('./routes/blog'));
app.use('/api/portfolio', require('./routes/portfolio'));
app.use('/api/settings',  require('./routes/settings'));

// ─── Health Check ────────────────────────────────────────────────────────────
app.get('/api/health', (req, res) => {
  res.json({ status: 'ok', timestamp: new Date().toISOString(), server: 'SiviOn Global Backend' });
});

// ─── Dashboard Stats (Admin) ─────────────────────────────────────────────────
const authMiddleware = require('./middleware/auth');
const { readDB } = require('./utils/db');

app.get('/api/admin/stats', authMiddleware, (req, res) => {
  const db = readDB();
  res.json({
    success: true,
    data: {
      totalEnquiries: db.enquiries.length,
      newEnquiries: db.enquiries.filter(e => e.status === 'new').length,
      totalContacts: db.contacts.length,
      newContacts: db.contacts.filter(c => c.status === 'new').length,
      totalApplications: db.careers.length,
      newApplications: db.careers.filter(a => a.status === 'new').length,
      totalBlogPosts: db.blog.length,
      publishedPosts: db.blog.filter(p => p.status === 'published').length,
      totalProjects: db.portfolio.length,
      activeJobs: db.jobs.filter(j => j.status === 'active').length
    }
  });
});

// ─── 404 ─────────────────────────────────────────────────────────────────────
app.use((req, res) => {
  res.status(404).json({ success: false, message: 'Route not found.' });
});

// ─── Start Server ─────────────────────────────────────────────────────────────
app.listen(PORT, () => {
  console.log(`\n  ╔══════════════════════════════════════════════╗`);
  console.log(`  ║    SiviOn Global Technologies - Backend     ║`);
  console.log(`  ╠══════════════════════════════════════════════╣`);
  console.log(`  ║  API Server  →  http://localhost:${PORT}/api    ║`);
  console.log(`  ║  Admin Panel →  http://localhost:${PORT}/admin  ║`);
  console.log(`  ╚══════════════════════════════════════════════╝\n`);
});
