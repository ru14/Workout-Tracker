const router = require("express").Router();
const { db } = require("../model/userModel.js");
const userModel = require("../model/userModel.js");
const Workout = require("../model/workout.js")



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
  db.workout.find({})
    .then(dbworkout => {
      res.json(dbworkout);
    })
    .catch(err => {
      res.json(err);
    });
});

router.post("/api/workouts", ({ body }, res) => {
  db.workout.createOne(body)
    .then(dbWorkout => {
      res.json(dbWorkout);
    })
    .catch(err => {
      res.json(err)
    })
});

router.get("/api/workouts/range", (req, res) => {
  db.Workout.find({})
    .then(dbUser => {
      res.json(dbUser);
    })
    .catch(err => {
      res.json(err);
    });
});



router.post("/api/workouts/:id", (req, res) => {
  db.workout.findByIdAndUpdate(
    {
      _id: mongoose.ObjectId(req.params.id)
    },
    {
      $push: req.body
    },

    (error, data) => {
      if (error) {
        res.send(error);
      } else {
        res.send(data);
      }
    }
  );
});

router.delete("/delete/:id", (req, res) => {
  db.workout.remove(
    {
      _id: mongoose.ObjectID(req.params.id)
    },
    (error, data) => {
      if (error) {
        res.send(error);
      } else {
        res.send(data);
      }
    }
  );
});

router.delete("/clearall", (req, res) => {
  db.workout.remove({}, (error, response) => {
    if (error) {
      res.send(error);
    } else {
      res.send(response);
    }
  });
});


module.exports = router;
