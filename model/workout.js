const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const cardioSchema = new Schema({






});
const Cardio = mongoose.model("cardioSchema", cardioSchema);

const Resistance = mongoose.model("resistanceSchema")


module.exports = Cardio, Resistance;