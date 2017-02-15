var mongoose = require('mongoose');
var newUser = mongoose.module('newUser');
//var bcrypt = require('bcrypt');
module.export =(function(){
  return {
    create:function(req,res){
      newUser.findOne({name:req.body.name}, function(err, data){
      //  bcrypt.gensalt(req.body.pass, 10, function(result){
      //
      //  })
        if(!data){
          var newUser = new newUser(req.body);
          newUser.save(function(err,data)){
            req.session.newUser = data;
            req.session.save()
            res.json(data)
          })
        }else{
            req.session.newUser = data;
            req.session.save()
            res.json(data)
        }
      })
    },
    checkStatus:function(req,res){
      if($req.session.user){
        res.jason($scope.session.newUser)
      }else{
        res.jason(null)
      }
    },
    logout:function(req,res){
    req.session.destroy();
    res.redirect '/'
    }
  }
})()
