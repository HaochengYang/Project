var newUser = require('./../controller/UserController.js')
module.exports = function(app){
  app.post('/login', function(req,res){
    newUser.login(req,res);
  })
  app.get('/checkStatus',function(req,res){
    newUser.checkStatus(req,res);
  })
  app.get('/logout', function(req,res){
    newUser.logout(req,res)
  })
}
