var app = angular.module('AddUser',['ngRoute']);

app.config(function($routeProvider){
  $routeProvider
  .when('/',{
    templateUrl:'static/partials/login.html'
  })
  .when('/dash',{
    templateUrl:'static/partials/dash.html'
  })
  .otherwise({
    redirectTo:'/'
  })
})
