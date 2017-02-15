app.controller('session_controller',function($scope,session_factory){
  session_factory.checkStatus(function(data){
    $scope.curUser = data;
  })
  $scope.create = function(){
    if(!$scope.newUser.first_name || !$scope.newUser.last_name){
      alert("name must be 3 chars longs at min")
    }else {
      session_factory.create($scope.newUser)
    }
  }
})
