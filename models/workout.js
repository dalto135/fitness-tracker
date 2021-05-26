const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const workoutSchema = new Schema({
    day: {
        type: Date,
        default: Date.now
    },
    exercises: [
        {
            type: {
                type: String,
                trim: true,
                required: 'Enter a type'
            },
            name: {
                type: String,
                trim: true,
                required: 'Enter a name for your exercise'
            },
            duration: {
                type: Number,
                required: 'Enter an amount'
            },
            weight: {
                type: Number,
                required: 'Enter a weight'
            },
            reps: {
                type: Number,
                required: 'Enter an amount'
            },
            sets: {
                type: Number,
                required: 'Enter an amount'
            }
        }
    ]
});

const Workout = mongoose.model('Workout', workoutSchema);

module.exports = Workout;