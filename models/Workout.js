// Set up Schema object
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//Define Schema
const WorkoutSchema = new Schema(
  {
    day: {
      type: Number,
      default: new Date(),
    },
    exercises: [
      {
        type: {
          type: String,
          required: true,
          enum: ["cardio", "resistance"],
        },
        name: {
          type: String,
          required: true,
        },
        duration: {
          type: Number,
          required: true,
        },
        weight: {
          type: Number,
          required: false,
        },
        reps: {
          type: Number,
          required: false,
        },
        sets: {
          type: Number,
          required: false,
        },
        distance: {
          type: Number,
          required: false,
        },
      },
    ],
  },
  {
    versionKey: false,
  }
);

//Link Schema
const Workout = mongoose.model("Workout", WorkoutSchema);

//Export Handle for Schema
module.exports = Workout;
