app.controller('sessionController', function($scope, sessionFactory){


	sessionFactory.checkStatus(function(data){
		$scope.curUser = data;
	})

	$scope.login = function(){
		if(!$scope.user || !$scope.user.name|| $scope.user.name.length < 3){
			alert('Name must be 3 chars longs at min.')
		}else{
			sessionFactory.login($scope.user)
		}
	}

})
