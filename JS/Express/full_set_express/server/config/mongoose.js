var mongoose = require("mongoose");
var fs = require('fs');
var path = require('path');
models.path= path.join(__dirname,'../models');
mongoose.connect('Mongodb//localhost/user');
fs.readdirSync(models.path).forEach(function(file){
  if(file.indexOf('fs')>=0){
    require(models.path+'/'+file);
    }
})
