app.controller('userController', ['$scope', '$location', '$cookies',
	'$routeParams',
	'userFactory', 'bucketFactory',

	function($scope, $location, $cookies, $routeParams, userFactory,
		bucketFactory) { //creates the userController with these parameters...
		var pword = document.getElementById('password'), //password input
			conf = document.getElementById('confirm'), //confirm input
			pwordReg =
			/(?=^.{8,}$)(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*()_+}{:;'?/><.;,])(?!.*\s).*$/; //regex to test password against
		$scope.checkPword = function() { //allows the password error box to be dynamically rendered and adds a red or green border to the password input based on the password entered matching the given regex
			if (pword.value.match(pwordReg)) {
				pword.style.border = "3px solid green";
			} else {
				pword.style.border = "3px solid red";
			}
		};
		$scope.checkConf = function() { //outlines the confirm password input based on it matching the password input
			if (conf.value == pword.value && conf.value.match(pwordReg)) {
				conf.style.border = "3px solid green";
			} else {
				conf.style.border = "3px solid red";
			}
		};

		$scope.logErrors = []; //creates an empty array to store login errors

		$scope.regErrors = []; //creates an empty array to store registration errors

		$scope.register = function() { //when the user hits the registration button...
			$scope.regErrors = []; //clear out all previous registration errors
			userFactory.create($scope.registerUser, function(data) { //run the userFactory.create method and pass the entered user information and a callback function
				if (data.errors) { //if the returned data has an errors key...
					for (var key in data.errors) { //for every key in the data.errors...
						$scope.regErrors.push(data.errors[key].message); //push these errors to the regErrors array
					}
				} else if (data.errorsFront) { //if the returned data has the errorsFront key (custom)...
					$scope.regErrors = data.errorsFront; //set regErrors to equal the returned errors...
				} else { //if no errors are returned...
					var expireDate = new Date(); //create a new date (now)
					expireDate.setDate(expireDate.getDate() + 1); //add a day to that date/time
					$cookies.put('id', data._id, { //set the username cookie to the user's username
						'expires': expireDate //and set the cookie to expire in 24 hours
					});
					$cookies.put('firstName', data.firstName, { //set the username cookie to the user's username
						'expires': expireDate //and set the cookie to expire in 24 hours
					});
					$cookies.put('lastName', data.lastName, { //set the username cookie to the user's username
						'expires': expireDate //and set the cookie to expire in 24 hours
					});
					$location.url('/dash'); //send the user to the dashboard with their respective user id
				} //if/else
			}); //userFactory.create
		}; //$scope.register

		$scope.login = function() { //when the user hits the login button...
			$scope.logErrors = []; //clear out all previous login errors
			userFactory.login($scope.loginUser, function(data) { //run the userFactory.login method and pass the entered user information and a callback function
				if (data.errors) { //if the returned data has an errors key...
					for (var key in data.errors) { //for every key in the data.errors...
						$scope.logErrors.push(data.errors[key].message); //push these errors to the logErrors array
					}
					$scope.loginUser = {}; //clear the login input fields
				} else if (data.errorsFront) { //if the returned data has the errorsFront key (custom)...
					$scope.logErrors = data.errorsFront; //set logErrors to equal the returned errors...
				} else { //if no errors are returned...
					var expireDate = new Date(); //create a new date (now)
					expireDate.setDate(expireDate.getDate() + 1); //add a day to that date/time
					$cookies.put('id', data._id, { //set the username cookie to the user's username
						'expires': expireDate //and set the cookie to expire in 24 hours
					});
					$cookies.put('firstName', data.firstName, { //set the username cookie to the user's username
						'expires': expireDate //and set the cookie to expire in 24 hours
					});
					$cookies.put('lastName', data.lastName, { //set the username cookie to the user's username
						'expires': expireDate //and set the cookie to expire in 24 hours
					});
					$location.url('/dash'); //send the user to the dashboard with their respective user id
				} //if/else
			}); //userFactory.login
		}; //$scope.login

		$scope.checkSesh = function() {
			if ($location.url() == '/') {
				if ($cookies.get('id')) {
					$location.url('/dash');
				}
			}
		};
		$scope.checkSesh();

		$scope.user = {};
		$scope.buckets = [];

		userFactory.getUser($routeParams.id, function(data) {
			if (data.errors) {
				console.log(data.errors);
			} else {
				$scope.user = data;
				$scope.buckets = data.buckets;
			}
		});

		$scope.markDone = function(bucket) {
			console.log(bucket);
			if (!bucket.done) {
				bucketFactory.markDone(bucket._id, function(data) {
					if (data.errors) {
						console.log(data.errors);
					} else {
						userFactory.getUser($cookies.get('id'), function(data) {
							if (data.errors) {
								console.log(data.errors);
							} else {
								$scope.user = data;
								$scope.buckets = data.buckets;
							}
						});
					}
				});
			} else {
				bucketFactory.unmarkDone(bucket._id, function(data) {
					if (data.errors) {
						console.log(data.errors);
					} else {
						userFactory.getUser($cookies.get('id'), function(data) {
							if (data.errors) {
								console.log(data.errors);
							} else {
								$scope.user = data;
								$scope.buckets = data.buckets;
							}
						});
					}
				});
			}
		};

	} //userController function
]);
