const router = require('express').Router();
const Workout = require("../models/workout.js");

//Add new workout
//db.workout.insert({...})

//Add new exercise to workout
//db.workout.insert

//Get total weight of workout
//db.workout.aggregate({$addFields: {totalWeight: {$sum: "$exercises.weight"}}}).pretty()

//Get total duration of workout
//db.workout.aggregate({$addFields: {totalDuration: {$sum: "$exercises.duration"}}}).pretty()

// router.get('/api/workouts', (req, res) => {
//   console.log('get api/workouts');
//     Workout.aggregate({$addFields: {totalWeight: {$sum: "$exercises.weight"}}}).pretty()
//       .then(dbWorkout => {
//         res.json(dbWorkout);
//       })
//       .catch(err => {
//         res.status(400).json(err.message);
//       });
// });
router.get('/api/workouts', (req, res) => {
  console.log('get api/workouts');
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

// router.put('/api/workouts/:id', ({ body }, res) => {
//   console.log('put api/workouts/:id');
//     Workout.updateOne(body)
//       .then(dbWorkout => {
//         res.json(dbWorkout);
//       })
//       .catch(err => {
//           res.status(400).json(err.message);
//       })
// });
router.put('/api/workouts/:id', ({ body }, res) => {
  console.log('put api/workouts/:id');
  console.log(body);
    Workout.updateOne(body)
      .then(workout => {
        console.log('workout:');
        console.log(workout);
        res.json(workout);
      })
      .catch(err => {
          res.status(400).json(err.message);
      })
});

// router.post('/api/workouts', ({ body }, res) => {
//   console.log('post api/workouts');
//     Workout.create(body)
//       .then(dbWorkout => {
//         res.json(dbWorkout);
//       })
//       .catch(err => {
//         res.status(400).json(err.message);
//       });
// });
router.post('/api/workouts', ({ body }, res) => {
  console.log('post api/workouts');
  console.log(body);
    Workout.create(body)
    .then(workout => {
      console.log('workout:');
      console.log(workout);
      res.json(workout);
    })
    .catch(err => {
      res.status(400).json(err.message);
    });
});

// router.get('/api/workouts/range', (req, res) => {
//   console.log('get api/workouts/range');
//     Workout.aggregate({$addFields: {totalDuration: {$sum: "$exercises.duration"}}}).pretty()
//       .then(dbWorkout => {
//         res.json(dbWorkout);
//       })
//       .catch(err => {
//         res.status(400).json(err.message);
//       });
// });
router.get('/api/workouts/range', (req, res) => {
  console.log('get api/workouts/range');
  console.log(req.body);
    
  Workout.aggregate(
    [
      {
        $group: {
          Workout: "$type",
          total: {
            $sum: "$duration"
          }
        }
      }
    ],
    function(err, result) {
      if (err) {
        res.send(err);
      } else {
        console.log('result:')
        console.log(result);
        res.json(result);
      }
    }
  );
});

module.exports = router;
