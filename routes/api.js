const router = require("express").Router();
const { db } = require("../model/workout.js");

const Workout = require("../model/workout.js")
const path = require("path")



db.Workout.aggregate([
  { $match: { dutation: "A" } },
  { $group: { _id: "$duration_id", totalDutarion: { $sum: "$dutation" } } }
])
//what is $ crust_id



router.get("/api/workouts", (req, res) => {
  Workout.find({})
    .then(dbworkout => {
      res.json(dbworkout);
    })
    .catch(err => {
      res.json(err);
    });
});

router.post("/api/workouts", ({ body }, res) => {
  Workout.create(body)
    .then(dbWorkout => {
      res.json(dbWorkout);
    })
    .catch(err => {
      res.json(err)
    })
});

router.get("/api/workouts/range", (req, res) => {
  Workout.find({})
    .then(dbUser => {
      res.json(dbUser);
    })
    .catch(err => {
      res.json(err);
    });
});



router.put("/api/workouts/:id", (req, res) => {
  //console.log("hit the routes")
  Workout.findByIdAndUpdate(
      req.params.id,
      {
          $push: {
              exercises: req.body
          }
      }
  )
  .then(dbWorkout => {
      res.json(dbWorkout);
  })
  .catch(err => {
      res.json(err);
  });
});

router.delete('/:id',(req, res) => {
  Workout.destroy({
      where: {
          id: req.params.id
      }
  }).then(dbWorkout => {
      if (!dbWorkout) {
          res.status(404).json({ message: 'No post found with this id' });
          return;
      }
      res.json(dbWorkout);
  }).catch(err => {
      console.log(err);
      res.status(500).json(err);
  });
});



module.exports = router;
