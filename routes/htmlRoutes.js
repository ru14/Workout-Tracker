
const router = require("express").Router();
const path = require("path")




router.get("/", (req, res) => {
    res.sendFile(path.join(__dirname + "./public/index.html", "build"));
  });
  router.get("/exercise", function (req, res) {
    res.sendFile(path.join(__dirname, "../public/exercise.html","build"));
  });
  router.get("/stats", function (req, res) {
    res.sendFile(path.join(__dirname, "../public/stats.html", "build"));
  });


  module.exports = router;