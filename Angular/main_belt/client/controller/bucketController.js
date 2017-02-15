app.controller('bucketController', function($scope, bucketFactory){
	$scope.errors = [];
	bucketFactory.getAll(function(data){
		$scope.bucket = data
	})
	$scope.addBucket = function(id){
		$scope.errors = [];
		if(!$scope.newBucket|| !$scope.newBucket.title || !$scope.newBucket.description){
			$scope.errors.push('Please enter text into the title.')
		}else if($scope.newBucket.title.length < 4){
			$scope.errors.push('title must be at least 4 chars.')
		}else if($scope.newBucket.title.length > 144){
			$scope.errors.push('title is too long.')
		}else if($scope.newBucket.description.length < 10){
			$scope.errors.push('description must be at least 10 chars.')
		}else if($scope.newBucket.description.length > 250){
			$scope.errors.push('description is too long.')
		}
    else{
			$scope.newBucket._id = id;
			bucketFactory.addBucket($scope.newBucket, function(data){
				$scope.buckets.push(data)
			});
			$scope.newBucket = {};
		}
	}
})
