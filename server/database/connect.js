const mongoose = require('mongoose');
// const rinkModel = require('../models/rink')
// const userModel = require('../models/user')
// const clubModel = require('../models/club')
require('dotenv').config()

// const url = 'mongodb://127.0.0.1:27017/BowlsBooking';
const url = process.env.DB_URL

async function connectToDB() {
  try {
    await mongoose.connect(url);
    console.log('Connected successfully to MongoDB using Mongoose');

    // Initialise models
    // await rinkModel.init();
    // await userModel.init();
    // await clubModel.init();

  } catch (error) {
    console.error('Error connecting to MongoDB:', error);
    process.exit(1);
  }
}

function closeConnection() {
  mongoose.connection.close(() => {
    console.log('Mongoose connection disconnected due to app termination');
    process.exit(0);
  });
}

// Handle graceful shutdown
process.on('SIGINT', closeConnection).on('SIGTERM', closeConnection);

module.exports = { connectToDB };
