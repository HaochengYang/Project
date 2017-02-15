var app = angular.module('User-app',['ngRoute']);

app.config(function($routeProvider){
  $routeProvider
  .when('/user'{
    templateurl:'partials/user.html'
  })
  .when('/list'{
    templateurl:'partials/list.html'
  })
  .otherwise({
    redirectTo:'/user'
  })
})
