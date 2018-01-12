var mongoose = require('mongoose');



var Todo = mongoose.model('Todo', {
   
   text:{
      type:String,
      //obliger decrire quelquechose
      required:true,
      minlength:1,
      //enleve les expace innutile
      trim: true
   },

   completed:{
      type:Boolean,
      default:false
   },

   completedAt:{
   	  type:Number,
   	  default:null
   }


});


module.exports = {Todo};