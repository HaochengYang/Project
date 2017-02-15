app.factory('userFactory',function($http,$location){
  var factory ={};
  factory.create = function(user,cb){
    $http.post('/login', user).then(function(output){
      cb(output.data)
        $location.url('/dash')
    })
  }
  factory.checkStatus = function(cb){
    $http.get('/checkStatus').then(function(output) {
    cb(output.data)
     })
  }
  return factory;
})
