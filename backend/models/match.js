// import mongoose mosule
const mongoose=require("mongoose");
// create Match Schema 
const matchSchema=mongoose.Schema({
    scoreOne: Number,
    scoreTwo: Number,
    teamOne: String,
    teamTwo: String,

});
// affect Match Schema to Mode Name Match
const match=mongoose.model("Match", matchSchema);
// Make match exportable
module.exports=match;