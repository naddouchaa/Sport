const mongoose=require("mongoose");
// create player Schema 
const playerSchema=mongoose.Schema({
name:String,
position:String,
nbr:Number,
teamId:{type:mongoose.Schema.Types.ObjectId,ref:"Team"},
avatar:String

});
// affect player Schema to Mode Name Team
const player=mongoose.model("Player", playerSchema);
// Make player exportable
module.exports=player;