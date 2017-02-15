var app =angular.module('Login-app',['ngRoute']);
app.config(function($routeProvider){
    $routeProvider
    .when('/',{
      templateurl:'partials/logreg.html'
    })
    .when('/dashbored',{
      templateurl:'partials/dashbored.html'
    })
    .otherwise({
      redirectTo:'/'
    })
})
