module.exports = function(app){
  app.get('/',function(request,response){
    request.json("yes");
  })
}


module.exports = function(app){
  app.get('/user/:name',function(request,response){
    console.log(req.params.name);
  })
}
