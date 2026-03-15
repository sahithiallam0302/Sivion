const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI, {
      serverSelectionTimeoutMS: 5000 
    });
    console.log(`  ║ MongoDB Connected: ${conn.connection.host}`);
  } catch (error) {
    console.error(`  ║ ❌ Database Error: ${error.message}`);
    console.warn(`  ║ ⚠️ Warning: App is running without Database connection!`);
  }
};

module.exports = connectDB;
