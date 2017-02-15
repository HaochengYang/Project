var mongoose = require('mongoose');
var User = mongoose.model('User');
module.exports = (function(){
  return {
    login: function(req,res){
    newUser.findOne({name: req.body.name}, function(err,data){
      if(!data){
        var newUser = new User(req.body);
        newUser.save(function(err,data){
          req.session.newUser = data;
          req.session.save();
          res.json(data);
        })
      }else { req.session.newUser = data;
              req.seesion.save()
              res.json(data)
          }
    })
  },
  checkStatus: function(req,res){
    if(req.session.newUser){
      res.json(req.session.newUser)
    }else{
      res.json(null)
    }
  },
  logout: function(req,res){
    req.session.destroy();
    res.redirect('/')
  }
}
})()
