const mongoose = require('mongoose');

const siteSettingsSchema = new mongoose.Schema({
  companyName: { type: String, default: 'SiviOn Global Technologies' },
  tagline: { type: String },
  logoLight: { type: String },
  logoDark: { type: String },
  favicon: { type: String },
  contactEmail: { type: String },
  contactPhone: { type: String },
  whatsappNumber: { type: String },
  address: { type: String },
  socialLinks: {
    linkedin: String,
    twitter: String,
    facebook: String,
    instagram: String,
    youtube: String
  },
  seo: {
    metaTitle: String,
    metaDescription: String,
    keywords: [String]
  },
  heroSettings: {
    heading: String,
    subheading: String,
    ctaText: String,
    ctaLink: String
  }
}, { timestamps: true });

module.exports = mongoose.model('SiteSettings', siteSettingsSchema);
