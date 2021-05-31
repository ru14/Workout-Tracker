/*
0. install mongodb packages, express, 
1. fill out server.js with express boilerplate code
2. express will need to serve the public folder
3. you will write your routes on the express side, uysing the routes already written in the api.js file
4. write your schema and connection.js for mongo
5. write the mongodb code to take the res.json or whatever input you receive and send it to your mongodb database

*/

const express = require("express");
const mongoose = require("mongoose");
const logger = require("morgan");
const path = require("path");



const PORT = process.env.PORT || 3000;

const User = require("./model/userModel");
const app = express();

app.use(logger("dev"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));
app.use(require("./routes/api.js"));

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workoutdb", { useNewUrlParser: true});
const db = mongoose.connection;
db.on("error", error => {
  console.log("Database Error:", error);
});



app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});
