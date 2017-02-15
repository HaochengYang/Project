app.factory('bucketFactory', function($http){
	var factory = {};
	factory.buckets = [];
	factory.getAll = function(cb){
		$http.get('/buckets/getall').then(function(output){
			cb(output.data)
		})
	}
	factory.addBucket = function(bucket, cb){
		$http.post('/buckets/add', bucket).then(function(output){
			factory.buckets.push(output.data)
			cb(output.data)
		})
	}
	return factory
})
