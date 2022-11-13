// Iteration #1
const { Schema, model } = require('mongoose');

const droneSchema = new Schema(
  {
    name: {
      type: String,
      require: true,
    },
    propellers: Number,
    maxSpeed: Number,
  },
  {
    timestamps: true,
  },
);

const Drone = model('Drone', droneSchema);

module.exports = Drone;
