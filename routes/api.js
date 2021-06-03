const router = require('express').Router();
const { db } = require('../models/workout.js');
const Workout = require("../models/workout.js");

//Add new workout
//db.workout.insert({...})

//Add new exercise to workout
//db.workout.insert

//Get total weight of workout
//db.workout.aggregate({$addFields: {totalWeight: {$sum: "$exercises.weight"}}}).pretty()

//Get total duration of workout
//db.workout.aggregate({$addFields: {totalDuration: {$sum: "$exercises.duration"}}}).pretty()

//Retrieve information of all workouts
router.get('/api/workouts', (req, res) => {
  console.log('get api/workouts');
  console.log(req.body);
  
    Workout.find({})
    .then(workout => {
      console.log('workout:');
      console.log(workout);
      res.json(workout);
    })
    .catch(err => {
      res.status(400).json(err.message);
    });
});

//Add exercise to existing workout
router.put('/api/workouts/:id', (req, res) => {
  console.log('put api/workouts/:id');
  console.log(req.body);
  console.log(req.params);
  
  Workout.updateOne({_id: req.params.id}, {$push: {exercises: [req.body]}},
    function(err, result) {
      if (err) {
        res.send(err.message);
      } else {
        console.log('result:');
        console.log(result);
        res.json(result);
      }
    }
  )
});

//Create new workout
router.post('/api/workouts', (req, res) => {
  console.log('post api/workouts');
  console.log(req.body);

    Workout.create(req.body)
    .then(workout => {
      console.log('workout:');
      console.log(workout);
      res.json(workout);
    })
    .catch(err => {
      res.status(400).json(err.message);
    });
});

//Retrieve information of all workouts with the calculated total duration of each workout
router.get('/api/workouts/range', (req, res) => {
  console.log('get api/workouts/range');

  Workout.aggregate([{$addFields: {totalDuration: {$sum: "$exercises.duration"}}}],
    function(err, result) {
      if (err) {
        res.send(err.message);
      } else {
        console.log('result:');
        console.log(result);
        res.json(result);
      }
    }
  )
});

module.exports = router;
