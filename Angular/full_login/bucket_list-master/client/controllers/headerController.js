app.controller('headerController', ['$scope', '$location', '$cookies', function(
	$scope, $location, $cookies) {
	$scope.checkSesh = function() { //runs the checkSesh method of userFactory (keeps user from bypassing login)
		if (!$cookies.get('id')) { //if the returned data is undefined or null...
			$location.url('/'); //return the user to the root
		}
	};
	$scope.logout = function() {
		$cookies.remove('id');
		$cookies.remove('firstName');
		$cookies.remove('lastName');
		$location.url('/'); //return the user to the root
	};
	$scope.checkSesh();
}]);
