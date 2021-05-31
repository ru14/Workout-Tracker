const router = require("express").Router();
const { db } = require("../model/userModel.js");
const userModel = require("../models/userModel.js");


// router.post("/submit",({body},res)=>{
//   console.log(body)
//   const book = body
// })

router.get("/", (req, res) => {
    res.sendFile(path.join(__dirname + "./public/index.html"));
  });

  router.put("/api/workouts/:id", ({body, params}, res) =>{
    db.workouts.findOne(id = params.id, (error,data)=>{
      if(err)throw err;
      console.log(params.id+" updated")
    })
  })
  
  router.post("/api/workouts", ({ body }, res) => {
    db.notes.createOne({}, (error,data)=>{

    })
      
  });
  
  router.get("/all", (req, res) => {
    db.notes.find({}, (error, data) => {
      if (error) {
        res.send(error);
      } else {
        res.json(data);
      }
    });
  });
  
  
  
  router.post("/api/workouts/:id", (req, res) => {
    db.notes.update(
      {
        _id: mongoose.ObjectId(req.params.id)
      },
      {
        $set: {
          title: req.body.title,
          note: req.body.note,
          modified: Date.now()
        }
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
    db.notes.remove(
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
    db.notes.remove({}, (error, response) => {
      if (error) {
        res.send(error);
      } else {
        res.send(response);
      }
    });
  });
  

  module.exports = router;
