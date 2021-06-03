
const router = require("express").Router();
const path = require("path")

db.Workout.aggregate([
    { $match: { status: "A" } },
    { $group: { _id: "$cust_id", totalDutarion: { $sum: "$amount" } } }
 ])




router.get("/", (req, res) => {
    res.sendFile(path.join(__dirname + "./public/index.html"));
  });
  router.get("/exercise", function (req, res) {
    res.sendFile(path.join(__dirname, "../public/exercise.html"));
  });
  router.get("/stats", function (req, res) {
    res.sendFile(path.join(__dirname, "../public/stats.html"));
  });


  module.exports = router;