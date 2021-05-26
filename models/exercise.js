const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const exerciseSchema = new Schema({
    name: {
        type: String,
        trim: true,
        required: 'Enter a name for your exercise'
    },
    type: {
        type: String,
        trim: true,
        required: 'Enter a type'
    },
    weight: {
        type: Number,
        required: 'Enter a weight'
    },
    sets: {
        type: Number,
        required: 'Enter an amount'
    },
    reps: {
        type: Number,
        required: 'Enter an amount'
    },
    duration: {
        type: Number,
        required: 'Enter an amount'
    }
});

const Exercise = mongoose.model('Exercise', exerciseSchema);

module.exports = Exercise;