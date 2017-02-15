var mongoose = require('mongoose');
var Schema = mongoose.Schema;
bucketSchema = new Schema({
  title:{type:String, required:true},
  description:{type:String, required:true},
  _user:{type:Schema.Types.ObjectId, ref:'user'}
})

mongoose.model('bucket', bucketSchema);
