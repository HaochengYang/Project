app.controller("List_controller",['$scope', 'User_factory', function($scope, User_factory){
   function setUsers(data){
      $scope.Users = data;
   }

   $scope.Users = [];

   //When this controller is loaded, fetch the user list
   User_factory.index(setUsers);
}])
