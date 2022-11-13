const express = require('express');
const router = express.Router();

// require the Drone model here

const Drone = require('../models/Drone.model');

// Promise
// router.get('/drones', (req, res, next) => {
//   Drone.find()
//     .then((list) => {
//       res.render('drones/list', list);
//     })
//     .catch((err) => {
//       next(err);
//       console.log(err);
//     });
// }),

router.get('/drones', async (req, res, next) => {
  try {
    const list = await Drone.find();
    res.render('drones/list', list);
  } catch (err) {
    console.log(err.message);
    res.redirect('/');
  }
});

router.get('/drones/create', async (req, res, next) => {
  try {
    const form = await Drone.find();
    res.render('drones/create-form', form);
  } catch (err) {
    console.log(err.message);
    res.redirect('/');
  }
});

router.post('/drones/create', async (req, res, next) => {
  const { name, propellers, maxSpeed } = req.body;
  try {
    await Drone.create({ name, propellers, maxSpeed });
    res.redirect('/drones');
  } catch (err) {
    console.log(err.message);
    res.redirect('/drones/create');
  }
});

router.get('/drones/:id/edit', (req, res, next) => {
  // Iteration #4: Update the drone
  // ... your code here
});

router.post('/drones/:id/edit', (req, res, next) => {
  // Iteration #4: Update the drone
  // ... your code here
});

router.post('/drones/:id/delete', (req, res, next) => {
  // Iteration #5: Delete the drone
  // ... your code here
});

module.exports = router;
