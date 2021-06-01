const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const cardioSchema = new Schema({

    name: {
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
    },
    date: { type: Date,
         default: Date.now 
        }
});

const resistanceSchema = new Schema({
    
    type: {
        type: String,
        trim: true,
        required: "Enter a type for Cardio"
    },
    name: {
        type: String,
        trim: true,
        required: "Enter a type for Cardio"
    },
    weight: {
        type: Number,
        required: "Enter an amount"
    },
    sets: {
        type: Number,
        required: "Enter an amount"
    },
    reps: {
        type: Number,
        required: "Enter an amount"
    },
    duration: {
        type: Number,
        required: "Enter an amount"
    },
    date: { 
        type: Date, 
        default: Date.now 
    }
});
// Mongoose virtual property, "totalDuration" which will not be stored in MongoDB.
cardioSchema.virtual("totallDuration").get(function(){
    let totalDuration = 0
    this.duration.forEach(duration => {
        totalDuration += this.duration;
    });
    return totalDuration
});
// Since virtuals are not included when passing a document to Express' res.json() function, the toJSON schema option needs to be set to { virtuals: true }.
cardioSchema.set('toJSON', { virtuals: true });

const Cardio = mongoose.model("cardioSchema", cardioSchema);

const Resistance = mongoose.model("resistanceSchema", resistanceSchema)


module.exports = Cardio, Resistance;