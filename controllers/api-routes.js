//API Route handler
var db = require("../models");

//API Routes
module.exports = function (app) {
  app.get("/api/workouts", (req, res) => {
    db.Workout.find({})
      .then((dbWorkout) => {
        res.json(dbWorkout);
      })
      .catch((err) => {
        res.status(400);
      });
  });

  app.put("/api/workouts/:id", (req, res) => {});
};
