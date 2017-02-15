app.factory('bucketFactory', ['$http', function($http) {
	return {
		create: function(bucket, cb) {
			bucket.done = false;
			$http.post('/buckets', bucket).then(function(response) {
				if (typeof(cb) == 'function') {
					cb(response.data);
				}
			});
		},
		markDone: function(id, cb) {
			$http.get('/buckets/markDone/' + id).then(function(response) {
				if (typeof(cb) == 'function') {
					cb(response.data);
				}
			});
		},
		unmarkDone: function(id, cb) {
			$http.get('/buckets/unmarkDone/' + id).then(function(response) {
				if (typeof(cb) == 'function') {
					cb(response.data);
				}
			});
		}
	};
}]);
