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

  app.put("/api/workouts/:id", (req, res) => {
    console.log(req.body);
    db.Workout.updateOne(
      {
        _id: req.params.id,
      },
      {
        $push: {
          exercises: req.body,
        },
      }
    )
      .then((dbWorkout) => {
        res.json(dbWorkout);
      })
      .catch((err) => {
        res.status(400);
      });
  });

  app.post("/api/workouts", ({ body }, res) => {
    db.Workout.create(body)
      .then((dbWorkout) => {
        res.json(dbWorkout);
      })
      .catch((err) => {
        res.status(400);
      });
  });

  app.get("/api/workouts/range", (req, res) => {
    db.Workout.find({})
      .sort({ day: -1 })
      .limit(7)
      .sort({ day: 1 })
      .then((dbWorkout) => {
        res.json(dbWorkout);
      })
      .catch((err) => {
        res.status(400);
      });
  });
};
