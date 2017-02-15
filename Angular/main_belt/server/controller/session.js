var mongoose = require('mongoose');
var user = mongoose.model('user');

module.exports = (function(){
  return {
     create : function(req,res){
       user.findOne({name: req.body.name}, function(err,user){
         if(err){
           console.log(err)
           res.json(err)
         }else{
           if(!user){
             var user = new user(req.body);
             user.save(function(err,data){
               req.session.user =user
               req.session.save()
               res.json(data)
             })
           }else{
             req.session.user =user
             req.session.save()
             res.json(user)
           }
         }
       })
     },
     checkStatus: function(req,res){
       if(req,session.user){
         res.json(req.session.user)
       }else{
         res.json(null)
       }
     },
     logout:function(req,res){
       req.session.destroy();
       res.redirect('/')
     }
  }
})()
