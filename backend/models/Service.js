const mongoose = require('mongoose');

const serviceSchema = new mongoose.Schema({
  title: { type: String, required: true },
  slug: { type: String, unique: true },
  shortDescription: { type: String, required: true },
  longDescription: { type: String },
  iconName: { type: String, default: 'Zap' }, // Lucide icon name
  coverImage: { type: String },
  technologies: [String],
  displayOrder: { type: Number, default: 0 },
  isActive: { type: Boolean, default: true }
}, { timestamps: true });

// Pre-save middleware to generate slug
serviceSchema.pre('save', async function(next) {
  if (this.isModified('title') || !this.slug) {
    this.slug = this.title
      .toLowerCase()
      .trim()
      .replace(/[^\w\s-]/g, '')
      .replace(/[\s_-]+/g, '-')
      .replace(/^-+|-+$/g, '');
      
    // Handle uniqueness (optional but good for robustness if there are manual slug edits later)
    const Service = this.constructor;
    let slugExists = await Service.findOne({ slug: this.slug, _id: { $ne: this._id } });
    let counter = 1;
    let originalSlug = this.slug;
    while (slugExists) {
      this.slug = `${originalSlug}-${counter}`;
      slugExists = await Service.findOne({ slug: this.slug, _id: { $ne: this._id } });
      counter++;
    }
  }
  next();
});

module.exports = mongoose.model('Service', serviceSchema);
