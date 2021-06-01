const router = require('express').Router();
const Workout = require("../models/workout.js");

//Add new workout
//db.ye.insert({...})

//Add new exercise to workout
//db.ye.insert

//Get total weight of workout
//db.workout.aggregate({$addFields: {totalWeight: {$sum: "$exercises.weight"}}}).pretty()

//Get total duration of workout
//db.workout.aggregate({$addFields: {totalDuration: {$sum: "$exercises.duration"}}}).pretty()

router.get('/api/workouts', (req, res) => {
  console.log('get api/workouts');
    Workout.aggregate({$addFields: {totalWeight: {$sum: "$exercises.weight"}}}).pretty()
      .then(dbWorkout => {
        res.json(dbWorkout);
      })
      .catch(err => {
        res.status(400).json(err.message);
      });
});

router.put('/api/workouts/:id', ({ body }, res) => {
  console.log('put api/workouts/:id');
    Workout.updateOne(body)
      .then(dbWorkout => {
        res.json(dbWorkout);
      })
      .catch(err => {
          res.status(400).json(err.message);
      })
});

router.post('/api/workouts', ({ body }, res) => {
  console.log('post api/workouts');
    Workout.create(body)
      .then(dbWorkout => {
        res.json(dbWorkout);
      })
      .catch(err => {
        res.status(400).json(err.message);
      });
});

router.get('/api/workouts/range', (req, res) => {
  console.log('get api/workouts/range');
    Workout.aggregate({$addFields: {totalDuration: {$sum: "$exercises.duration"}}}).pretty()
      .then(dbWorkout => {
        res.json(dbWorkout);
      })
      .catch(err => {
        res.status(400).json(err.message);
      });
});

module.exports = router;