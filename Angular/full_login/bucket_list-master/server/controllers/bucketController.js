var mongoose = require('mongoose'),
	Bucket = mongoose.model('Bucket'),
	User = mongoose.model('User');

module.exports = (function() { //exports an immediately invoked function to whoever imports this file
	return { //return this object upon invocation...
		create: function(req, res) {
			var bucket = new Bucket(req.body);
			bucket.save(function(err, data) {
				if (err) {
					res.json(err);
				} else {
					if (req.body._tag) {
						User.update({
							_id: req.body._tag
						}, {
							$push: {
								'buckets': bucket._id
							},
						}, function(errTagUser, dataTagUser) {
							if (errTagUser) {
								console.log(errTagUser);
							} else {
								res.json(dataTagUser);
							}
						});
					}
					User.update({
						_id: bucket._user
					}, {
						$push: {
							'buckets': bucket._id
						},
					}, function(errUser, dataUser) {
						if (errUser) {
							console.log(errUser);
						} else {
							res.json(dataUser);
						}
					});
				}
			});
		},
		markDone: function(req, res) {
			Bucket.update({
				_id: req.params.id
			}, {
				$set: {
					'done': true
				}
			}, function(err, data) {
				if (err) {
					console.log(err);
				} else {
					res.json(data);
				}
			});
		},
		unmarkDone: function(req, res) {
			Bucket.update({
				_id: req.params.id
			}, {
				$set: {
					'done': false
				}
			}, function(err, data) {
				if (err) {
					console.log(err);
				} else {
					res.json(data);
				}
			});
		}
	};
})();
