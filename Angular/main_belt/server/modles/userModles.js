var mongoose = require('mongoose');
var Schema = mongoose.Schema;
userSchema =new Schema({
  name:{type:String, required:true}
})

mongoose.model('user', userSchema);
