// Set up Schema object
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//Define Schema
const WorkoutSchema = new Schema({
    day: {
        type: Number,
        default: new Date();
    },
    exercise: Array,
}, {
    versionKey: false,
});

//Link Schema
const Workout = mongoose.model('Workout', WorkoutSchema);

//Export Handle for Schema
module.exports = Workout;