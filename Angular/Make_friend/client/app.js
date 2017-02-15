var app = angular.module('friend-app',['ngRoute']);

app.config(function($routeProvider){
    $routeProvider
    .when('/',{
      templateUrl:'partials/friend.html'
    })
    .when('/new',{
      templateUrl:'partials/new.html'
    })
    .when('/edit',{
      templateUrl:'partials/edit.html'
    })
    .when('/show',{
      templateUrl:'partials/show.html'
    })
    .otherwise({
      redirectTo:'/'
    })
})
