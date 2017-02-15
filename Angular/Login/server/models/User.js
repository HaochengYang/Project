var mongoose = require('mongoose');
var Schema = mongoose.Schema

var UserSchema = new Schema({
  First_name:{type:string, require:true, minlength:1},
  Last_name:{type:string, require:true, minlength:1},
  language:{type:string, require:true, minlength:3}
})

mongoose.model('newUser',UserSchema)
