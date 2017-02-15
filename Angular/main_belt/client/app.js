var  app = angular.module('belt-exam', ['ngRoute']);

app.config(function($routeProvider){
	$routeProvider
	.when('/login',{
		templateUrl: 'partials/login.html',
    controller:'userController.js'
	})
  .when('/dash',{
    templateUrl: 'partials/dash.html'
    controller:'userController.js'
  })
  .when('/user',{
    templateUrl: 'partials/user.html'
    controller:'userController.js'
  })
	.otherwise({
		redirectTo: '/login'
	})
})
