// Iteration #1
const mongoose = require('mongoose');
const Drone = require('../models/Drone.model');

require('dotenv/config');
const mongouri =
  process.env.MONGODB_URI || 'mongodb://localhost/lab-express-drones';
mongoose.connect(mongouri);

const drones = [
  { name: 'Creeper XL 500', propellers: 3, maxSpeed: 12 },
  { name: 'Racer 57', propellers: 4, maxSpeed: 20 },
  { name: 'Courier 3000i', propellers: 6, maxSpeed: 18 },
];

Drone.insertMany(drones)
  .then((dronesFromSeed) => {
    console.log(`Success - ${dronesFromSeed.length} drones got created`);
    mongoose.connection.close();
  })
  .catch((err) => console.log(err));
