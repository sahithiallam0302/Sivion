const mongoose = require('mongoose');
const dotenv = require('dotenv');
const Service = require('./models/Service');

dotenv.config();

const run = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    const services = await Service.find({});
    console.log('Total services:', services.length);
    services.forEach(s => {
      console.log(`- Title: ${s.title}, Slug: ${s.slug}, ID: ${s._id}`);
    });
    await mongoose.disconnect();
    process.exit(0);
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
};

run();
