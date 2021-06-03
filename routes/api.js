const router = require("express").Router();
//const { db } = require("../model/userModel.js");
//const userModel = require("../model/userModel.js");
const Workout = require("../model/workout.js")
const path = require("path")


router.get("/", (req, res) => {
  res.sendFile(path.join(__dirname + "./public/index.html"));
});
router.get("/exercise", function (req, res) {
  res.sendFile(path.join(__dirname, "../public/exercise.html"));
});
router.get("/stats", function (req, res) {
  res.sendFile(path.join(__dirname, "../public/stats.html"));
});



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
  console.log("hit the routes")
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
