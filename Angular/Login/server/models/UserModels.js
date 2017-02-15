var mongoose = require('mongoose');
var Schema = mongoose.Schema

var UserSchema = new Schema({
    name: {type:String, rdequired:true, max_length: 3}
})
mongoose.model('User', UserSchema);
