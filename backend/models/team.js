const mongoose=require("mongoose");
// create Team Schema 
const teamSchema=mongoose.Schema({
name:String,
stadium:String,
owner:String,
fondation:Number,
players:[{type:mongoose.Schema.Types.ObjectId,ref:"Player"}]

});
// affect Team Schema to Model Name Team
const team=mongoose.model("Team", teamSchema);
// Make team exportable
module.exports=team;