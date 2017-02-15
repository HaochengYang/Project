var mongoose=require('mongoose')
var Schema = mongoose.Schema;

var friendSchema = new Schema({
  firstName:{
    type:String,
    minlength:2,
    required:true
  },
  lastName:{
    type:String,
    minlength:2,
    required:true
  },
  birthDate:{
    type:Date,
    required:true
  }
})

mongoose.model('friend',friendSchema)
