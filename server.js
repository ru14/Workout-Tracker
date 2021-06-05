
const express = require("express");
const mongoose = require("mongoose");
const logger = require("morgan");
const path = require("path");



const PORT = process.env.PORT || 8080;

//const User = require("./model/userModel");
const app = express();

app.use(logger("dev"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));
app.use(require("./routes/api.js"));
app.use(require("./routes/htmlRoutes.js"));

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workoutdb", { useNewUrlParser: true});
const db = mongoose.connection;
db.on("error", error => {
  console.log("Database Error:", error);
});



app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});
