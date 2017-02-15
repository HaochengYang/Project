app.controller('UserController', function($scope, UserFactory){
  UserFactory.checkStatus(function(data){
    $scope.curUser = data;
  })
  $scope.login = function(){
    if(!$scope.newUser || !$scope.newUser.name || $scope.newUser.name < 3){
      alert("name must be three characters long")
    }else {
     UserFactory.login($scope.newUser)
   }
  }
})
