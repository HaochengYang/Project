var app = angular.module('app', ['ngRoute', 'ngCookies']);

app.config(function($routeProvider) {
	$routeProvider
		.when('/', {
			templateUrl: '/static/partials/logReg.html',
			controller: 'userController'
		})
		.when('/dash', {
			templateUrl: '/static/partials/dash.html'
		})
		.when('/user/:id', {
			templateUrl: '/static/partials/user.html'
		})
		.otherwise({
			redirectTo: '/'
		});
});
