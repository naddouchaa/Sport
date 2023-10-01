const mongoose=require("mongoose");
// create stadium Schema 
const stadiumSchema=mongoose.Schema({
name:String,
teamId:{type:mongoose.Schema.Types.ObjectId,ref:"Team"},

});
// affect stadium Schema to Model Name stadium
const stadium=mongoose.model("Stadium", stadiumSchema);
// Make stadium exportable
module.exports=stadium;