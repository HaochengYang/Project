app.factory('UserFactory',function($http, $location){
  var factory ={};
    factory.login = function(newUser){
      $http.post('/login',newUser).then(function(output){
        if(output.data){
          $location.url('/dash')
        }
      })
    }
    factory.checkStatus = function(cb){
      $http.get('checkStatus').then(function(output){
        if(!output.data){
          $location.url('/')
        }else {
          cb(output.data)
        }
      })
    }
  return factory
})
