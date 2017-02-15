var newUser =require('./../controller/session_controller.js')
module.export = function(app){
  app.post('/create',function(req,res){
    //console.log(body-req);
  })
  app.get('/checkStatus', function(req,res){
    newUser.checkStatus(res,req)
  })
}
