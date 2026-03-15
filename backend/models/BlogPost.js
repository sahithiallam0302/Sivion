const mongoose = require('mongoose');

const blogPostSchema = new mongoose.Schema({
  title: { type: String, required: true },
  slug: { type: String, required: true, unique: true },
  author: { type: String, default: 'SiviOn Team' },
  category: { type: String },
  coverImage: { type: String },
  content: { type: String },
  metaTitle: { type: String },
  metaDescription: { type: String },
  tags: [String],
  status: { type: String, enum: ['draft', 'published'], default: 'draft' },
  publishedDate: { type: Date }
}, { timestamps: true });

module.exports = mongoose.model('BlogPost', blogPostSchema);
