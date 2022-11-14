const express = require('express');
const router = express.Router();

// require the Drone model here

const Drone = require('../models/Drone.model');

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

router.get('/drones/:id/edit', async (req, res, next) => {
  const droneId = req.params.id;
  try {
    const drone = await Drone.findById(droneId);
    console.log(drone);
    res.render('drones/update-form', drone);
  } catch (err) {
    console.log(err.message);
    res.redirect('/');
  }
});

router.post('/drones/:id/edit', async (req, res, next) => {
  const droneId = req.params.id;
  const { name, propellers, maxSpeed } = req.body;
  try {
    await Drone.findByIdAndUpdate(droneId, {
      name,
      propellers,
      maxSpeed,
    });
    res.redirect('/drones');
  } catch (err) {
    console.log(err.message);
    res.redirect('/');
  }
});

router.post('/drones/:id/delete', (req, res, next) => {
  // Iteration #5: Delete the drone
  // ... your code here
});

module.exports = router;

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
