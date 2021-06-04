const router = require('express').Router();
const Workout = require("../models/workout.js");

//Retrieve information of all workouts
router.get('/api/workouts', (req, res) => {
    Workout.aggregate([{$addFields: {
      totalDuration: {$sum: "$exercises.duration"},
    }}],

    function(err, result) {
      if (err) {
        res.send(err.message);
      } else {
        res.json(result);
      }
    }
  )
});

//Add exercise to existing workout
router.put('/api/workouts/:id', (req, res) => {
  Workout.updateOne({_id: req.params.id}, {$push: {exercises: [req.body]}},

    function(err, result) {
      if (err) {
        res.send(err.message);
      } else {
        res.json(result);
      }
    }
  )
});

//Create new workout
router.post('/api/workouts', (req, res) => {
    Workout.create(req.body)
    .then(workout => {
      res.json(workout);
    })
    .catch(err => {
      res.status(400).json(err.message);
    });
});

//Retrieve information of all workouts with the calculated total duration of each workout
router.get('/api/workouts/range', (req, res) => {
  Workout.aggregate([{$addFields: {
    totalDuration: {$sum: "$exercises.duration"},
  }}],

    function(err, result) {
      if (err) {
        res.send(err.message);
      } else {
        res.json(result);
      }
    }
  )
});

module.exports = router;
