require('dotenv').config();
const mongoose = require('mongoose');
const Admin = require('./models/Admin');

const seed = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log('Connected to MongoDB for seeding...');

    const adminExists = await Admin.findOne({ username: 'admin' });
    if (!adminExists) {
      await Admin.create({
        username: 'admin',
        email: 'admin@sivionglobal.com',
        password: 'sivion@admin123'
      });
      console.log('✅ Default admin created: admin / sivion@admin123');
    } else {
      console.log('ℹ️ Admin already exists.');
    }

    mongoose.disconnect();
  } catch (err) {
    console.error('Error seeding:', err);
  }
};

seed();
