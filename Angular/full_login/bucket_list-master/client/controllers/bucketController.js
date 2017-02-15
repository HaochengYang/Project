app.controller('bucketController', ['$scope', '$location', '$cookies',
	'userFactory', 'bucketFactory',
	function($scope, $location, $cookies, userFactory, bucketFactory) { //creates dashController and passes these variables
		$scope.firstName = $cookies.get('firstName'); //creates the user variable and sets to an empty object
		$scope.lastName = $cookies.get('lastName'); //creates the user variable and sets to an empty object
		$scope.users = [];
		$scope.buckets = [];
		$scope.errors = [];
		$scope.createBucket = function() {
			$scope.errors = [];
			if (!$scope.newBucket || !$scope.newBucket.title || !$scope.newBucket.desc) {
				$scope.errors.push('Please enter a Bucket Title and Description');
			} else {
				$scope.newBucket._user = $cookies.get('id');
				bucketFactory.create($scope.newBucket, function(data) {
					if (data.errors) {
						for (var key in data.errors) {
							$scope.errors.push(data.errors[key].message);
						}
					}
					userFactory.getUser($cookies.get('id'), function(data) {
						if (data.errors) {
							console.log(data.errors);
						} else {
							$scope.buckets = data.buckets;
						}
					});
				});
				$scope.newBucket = {};
			}
		};
		userFactory.index(function(data) {
			if (data.errors) {
				console.log(data.errors);
			} else {
				$scope.users = data;
			}
		});
		userFactory.getUser($cookies.get('id'), function(data) {
			if (data.errors) {
				console.log(data.errors);
			} else {
				$scope.buckets = data.buckets;
			}
		});
		$scope.markDone = function(bucket) {
			if (!$scope.buckets[$scope.buckets.indexOf(bucket)].done) {
				bucketFactory.markDone(bucket._id, function(data) {
					if (data.errors) {
						console.log(data.errors);
					} else {
						userFactory.getUser($cookies.get('id'), function(data) {
							if (data.errors) {
								console.log(data.errors);
							} else {
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
								$scope.buckets = data.buckets;
							}
						});
					}
				});
			}
			delete $scope.checkBox;
		};
	}
]);
