app.controller('create-student', function($scope) {
    $scope.students =[{name:"Haocheng",age:23},{name:"cheng",age:28}];
    $scope.addStudent = function(){
      $scope.students.push($scope.newStudent);
      $scope.newStudent = {};
    }
    $scope.delete = function(idx){
      $scope.students.splice(idx,1);
    }
    $scope.update = function(idx, name){
      $scope.students[idx].name = name;
      $scope.update_student='';
    }
});
