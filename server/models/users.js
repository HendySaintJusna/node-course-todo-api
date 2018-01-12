//CHALL
var mongoose = require('mongoose');

var Users = mongoose.model('Users',{

name:{
type:String,
  require:true,
  minlength:1,
  trim:true
},

email:{
  type:String,
  require:true,
  minlength:1,
  trim:true
},

age:{
	type:Number,
	default:null
}




});


module.exports = {Users};
