const mongoose = require("mongoose");

const Schema = mongoose.Schema;
const workoutSchemas = new Schema({
    day: {
        type: Date,
        default: () => new Date()
    },
    exercises: [{
        name: {
            type: String,
            trim: true,
            required: "Enter exercise name"
        },
        distance: {
            type: Number,

        },
        duration: {
            type: Number,
            required: "Enter exercise duration"
        },
        weight: {
            type: Number,

        },
        sets: {
            type: Number,

        },
        reps: {
            type: Number,

        },
        type: {
            type: String,
            trim: true,
            required: "Enter Exercise type"
        }
    }]
});



const Workout = mongoose.model("Workout", workoutSchemas)


module.exports = Workout