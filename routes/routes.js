const router = require('express').Router();
const Workout = require("../models/workout.js");

router.get('/api/workouts', (req, res) => {
    Workout.find({})
      .then(dbTransaction => {
        res.json(dbTransaction);
      })
      .catch(err => {
        res.status(400).json(err.message);
      });
});

router.put('/api/workouts', ({ body }, res) => {
    Workout.updateOne({})
        .then()
        .catch(err => {
            res.status(400).json(err.message);
        })
});

router.post('/api/workouts', ({ body }, res) => {
    Workout.create(body)
      .then(dbTransaction => {
        res.json(dbTransaction);
      })
      .catch(err => {
        res.status(400).json(err.message);
      });
});

router.get('/api/workouts/range', (req, res) => {
    Workout.find({})
      .then(dbTransaction => {
        res.json(dbTransaction);
      })
      .catch(err => {
        res.status(400).json(err.message);
      });
});

module.exports = router;
