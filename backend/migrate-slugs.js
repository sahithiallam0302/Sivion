const mongoose = require('mongoose');
const dotenv = require('dotenv');
const Service = require('./models/Service');

dotenv.config();

const slugify = (text) => {
  return text
    .toLowerCase()
    .trim()
    .replace(/[^\w\s-]/g, '')
    .replace(/[\s_-]+/g, '-')
    .replace(/^-+|-+$/g, '');
};

const migrate = async () => {
  try {
    console.log('Connecting to MongoDB...');
    await mongoose.connect(process.env.MONGO_URI);
    console.log('Connected.');

    const services = await Service.find({});
    console.log(`Found ${services.length} services in total.`);
    
    for (const s of services) {
      if (!s.slug) {
        let slug = slugify(s.title);
        console.log(`Generating slug for: "${s.title}" -> "${slug}"`);
        
        // Handle uniqueness
        let slugExists = await Service.findOne({ slug: slug, _id: { $ne: s._id } });
        let counter = 1;
        let originalSlug = slug;
        while (slugExists) {
          slug = `${originalSlug}-${counter}`;
          slugExists = await Service.findOne({ slug: slug, _id: { $ne: s._id } });
          counter++;
        }

        await Service.updateOne({ _id: s._id }, { $set: { slug: slug } });
        console.log(`  -> Updated!`);
      } else {
        console.log(`Service "${s.title}" already has slug: "${s.slug}"`);
      }
    }

    await mongoose.disconnect();
    console.log('Done.');
    process.exit(0);
  } catch (err) {
    console.error('Migration error:', err);
    process.exit(1);
  }
};

migrate();
