app.controller('User_controller',['$scope','User_factory',function($scope,User_factor){
  function SetUsers(data){
    $scope.Users = data;
    $scope.newUser = {};
  }
  $scope.Users = [];
  User_factory.index(SetUsers);
  User_factory.create= function(){
    $scope.Users.push($scope.newUser);
        $scope.newUser = '';
  }
  $scope.delete = function($index){
    User_factory.Users.delete($index);
  }
}])
