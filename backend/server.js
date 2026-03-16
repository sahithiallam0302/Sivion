const dotenv = require('dotenv');
const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const rateLimit = require('express-rate-limit');
const path = require('path');
const fs = require('fs');
const connectDB = require('./config/db');

// Load env vars
dotenv.config();

// Connect to Database
connectDB();

const app = express();
const PORT = process.env.PORT || 5050;

// ─── Ensure upload dirs exist ───────────────────────────────────────────────
['uploads/resumes', 'uploads/blog', 'uploads/portfolio'].forEach(dir => {
  const full = path.join(__dirname, dir);
  if (!fs.existsSync(full)) fs.mkdirSync(full, { recursive: true });
});

// ─── Security & Middleware ───────────────────────────────────────────────────
app.use(helmet({
  crossOriginResourcePolicy: { policy: 'cross-origin' },
  contentSecurityPolicy: false // Disable CSP temporarily for easier debugging
}));

app.use(cors({
  origin: true, // Allow all origins for dev
  credentials: true
}));

// Request logger
app.use((req, res, next) => {
  console.log(`[${new Date().toISOString()}] ${req.method} ${req.url}`);
  next();
});

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
app.use('/api/auth', require('./routes/auth'));
app.use('/api/contact', require('./routes/contact'));
app.use('/api/careers', require('./routes/careers'));
app.use('/api/blog', require('./routes/blog'));
app.use('/api/portfolio', require('./routes/portfolio'));
app.use('/api/settings', require('./routes/settings'));
app.use('/api/services', require('./routes/services'));
app.use('/api/team', require('./routes/team'));
app.use('/api/testimonials', require('./routes/testimonials'));

// Basic stats endpoint
app.get('/api/admin/stats', require('./middleware/auth'), async (req, res) => {
  try {
    const [counts] = await Promise.all([
      Promise.all([
        require('./models/Project').countDocuments(),
        require('./models/BlogPost').countDocuments(),
        require('./models/Job').countDocuments({ isActive: true }),
        require('./models/Submission').countDocuments({ type: 'contact' }),
        require('./models/Submission').countDocuments({ type: 'contact', status: 'new' }),
        require('./models/Submission').countDocuments({ type: 'enquiry' })
      ])
    ]);

    const [totalProjects, totalBlogPosts, activeJobs, totalContacts, newContacts, totalApplications] = counts;

    res.json({
      success: true, data: {
        totalProjects,
        totalBlogPosts,
        activeJobs,
        totalContacts,
        newContacts,
        totalApplications
      }
    });
  } catch (err) {
    res.status(500).json({ success: false, message: 'Server error' });
  }
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
