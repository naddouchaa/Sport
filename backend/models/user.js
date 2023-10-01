// import mongoose mosule
const mongoose=require("mongoose");
const uniqueValidator = require('mongoose-unique-validator');
// create Match Schema 
const userSchema=mongoose.Schema({
    firstName: String,
    lastName: String,
    email:{ type: String, unique:true},
    pwd: String,
    role:String,
    avatar:String

});
userSchema.plugin(uniqueValidator);
// affect Match Schema to Mode Name Match
const user=mongoose.model("User", userSchema);
// Make match exportable
module.exports=user;