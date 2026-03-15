const mongoose = require('mongoose');

const teamMemberSchema = new mongoose.Schema({
  fullName: { type: String, required: true },
  role: { type: String, required: true },
  department: { type: String },
  profilePhoto: { type: String },
  bio: { type: String },
  linkedInUrl: { type: String },
  githubUrl: { type: String },
  displayOrder: { type: Number, default: 0 },
  isActive: { type: Boolean, default: true }
}, { timestamps: true });

module.exports = mongoose.model('TeamMember', teamMemberSchema);
