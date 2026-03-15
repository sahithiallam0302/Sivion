const mongoose = require('mongoose');

const jobSchema = new mongoose.Schema({
  title: { type: String, required: true },
  department: { type: String, enum: ['Engineering', 'Marketing', 'Design', 'Sales', 'Operations'], default: 'Engineering' },
  location: { type: String },
  jobType: { type: String, enum: ['Full-time', 'Part-time', 'Internship', 'Contract'], default: 'Full-time' },
  experience: { type: String },
  description: { type: String },
  responsibilities: [String],
  requirements: [String],
  isActive: { type: Boolean, default: true },
  applicationEmail: { type: String }
}, { timestamps: true });

module.exports = mongoose.model('Job', jobSchema);
