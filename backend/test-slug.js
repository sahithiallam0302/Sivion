const mongoose = require('mongoose');
const dotenv = require('dotenv');
const Service = require('./models/Service');

dotenv.config();

const test = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log('Connected to MongoDB');

    // Create a new service
    const title = 'Test Service ' + Date.now();
    const service1 = new Service({
      title: title,
      shortDescription: 'Short description',
      longDescription: 'Long description',
      iconName: 'Zap'
    });

    await service1.save();
    console.log('Saved Service 1 with slug:', service1.slug);

    // Create another service with the same title to test uniqueness handling
    const service2 = new Service({
      title: title,
      shortDescription: 'Another one',
      longDescription: 'Another long description',
      iconName: 'Cpu'
    });

    await service2.save();
    console.log('Saved Service 2 with slug:', service2.slug);

    // Cleanup
    await Service.deleteOne({ _id: service1._id });
    await Service.deleteOne({ _id: service2._id });
    console.log('Cleanup done');

    await mongoose.disconnect();
    process.exit(0);
  } catch (err) {
    console.error('Error during test:', err);
    process.exit(1);
  }
};

test();
