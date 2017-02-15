app.controller('friend_controller',[$scope,function($scope){
  $scope.friends =[{name:"Haocheng", age:18,gender:"male"}];
  $scope.create = function(){$scope.friends.push($scope.newfriend);
  $scope.newfriend ='';
  }
})
