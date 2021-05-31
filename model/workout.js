const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const cardioSchema = new Schema({

    cardi_name: {
        type: String,
        trim: true,
        required: "Enter a type for Cardio"
    },
    distance: {
        type: Number,
        required: "Enter an amount"
    },
    duration: {
        type: Number,
        required: "Enter an amount"
    }
});


const resistanceSchema = new Schema({

    exercise_name: {
        type: String,
        trim: true,
        required: "Enter a type for Cardio"
    },
    weight: {
        type: Number,
        required: "Enter an amount"
    },
    num_sets: {
        type: Number,
        required: "Enter an amount"
    },
    num_reps: {
        type: Number,
        required: "Enter an amount"
    },
    duration: {
        type: Number,
        required: "Enter an amount"
    }
});
const Cardio = mongoose.model("cardioSchema", cardioSchema);

const Resistance = mongoose.model("resistanceSchema", resistanceSchema)


module.exports = Cardio, Resistance;