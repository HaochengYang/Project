var mongoose = require('mongoose');
var schema = mongoose.schema;
var userSchema = new schema({
    name:{type:string, require:true, maxlength=20, minlength=2},
    age:age
}，{timestamps:true});
mongoose.model('user',userSchema);
