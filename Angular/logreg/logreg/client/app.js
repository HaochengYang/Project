var app = angular.module('app', ['ngRoute']);

app.config(function($routeProvider){
	$routeProvider
	.when('/',{
		templateUrl: 'static/partials/logreg.html'
	})
	.when('/dash',{
		templateUrl: 'static/partials/dash.html'
	})
	.when('/home',{
		templateUrl: 'static/partials/home.html'
	})
	.otherwise({
		redirectTo: '/'
	})
})
