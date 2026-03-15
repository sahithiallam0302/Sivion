const mongoose = require('mongoose');

const projectSchema = new mongoose.Schema({
  title: { type: String, required: true },
  clientName: { type: String },
  category: { type: String, enum: ['Web', 'Java', 'Digital Marketing', 'Mobile'], default: 'Web' },
  shortDescription: { type: String },
  longDescription: { type: String },
  coverImage: { type: String },
  galleryImages: [String],
  technologies: [String],
  liveUrl: { type: String },
  githubUrl: { type: String },
  isFeatured: { type: Boolean, default: false },
  isActive: { type: Boolean, default: true },
  displayOrder: { type: Number, default: 0 }
}, { timestamps: true });

module.exports = mongoose.model('Project', projectSchema);
