var mongoose = require('mongoose'),
	bcrypt = require('bcrypt'),
	User = mongoose.model('User');

module.exports = (function() { //exports an immediately invoked function to whoever imports this file
	return { //return this object upon invocation...
		index: function(req, res) {
			User.find({}, function(err, data) {
				if (err) console.log(err);
				else res.json(data);
			});
		},
		create: function(req, res) { //creates a user based on entered registration information
			var pwordReg =
				/(?=^.{8,}$)(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*()_+}{:;'?/><.;,])(?!.*\s).*$/; //regex for password validation
			if (req.body.password.match(pwordReg)) { //if the password meets the min requirements...
				req.body.password = bcrypt.hashSync(req.body.password, bcrypt.genSaltSync(
					8)); //hash the password
				User.findOne({ //attempt to find a user in the DB based on the entered email address
					email: req.body.email
				}, function(err, data) {
					if (err) { //if an error is returned...
						console.log(err);
					} else { //if there is no error...
						if (data) { //and a user is returned (data is not null)...
							res.json({
								'errorsFront': ['User already exists, please log in'] //return this error to the user in the form of JSON
							});
						} else { //if no user is returned (data is null)...
							var user = new User(req.body); //create a new user based on the entered information...
							user.save(function(err1, data1) { //save the user to the DB (used err1 and data1 to differentiate from the outer function)
								if (err1) { //if there is an error...
									res.json(err1); //sends this to user (runs validations in model!)
								} else { //if there is no error...
									res.json(data1); //send the new user information back to client-side
								} //user.save else
							});
						} //if no user is returned if/else
					} //if there is no error on User.findOne if/else
				}); //User.findOne
			} else { //if the password does not meet the min requirements...
				res.json({
					'errorsFront': ['Password does not meet minimum requirements'] //return this message to the client-side (there is also a client-side check, this is more for if they attempt to bypass the system)
				});
			}
		},
		show: function(req, res) { //retrieves a specific user based on id
			User.findOne({ //use entered id to find user
					_id: req.params.id
				})
				.populate({
					path: 'buckets',
					populate: {
						path: '_user'
					}
				})
				.exec(function(err, data) {
					if (err) { //if an error is thrown while searching...
						res.json(err); //send error to front
					} else { //if there is no error...
						res.json(data); //return user info to client-side
					}
				});
		},
		login: function(req, res) { //logs user in based on entered login information
			User.findOne({ //uses entered email to search for user in DB
				email: req.body.email
			}, function(err, data) {
				if (err) { //if an error is thrown (model validations, etc)...
					res.json(err); //return error to client-side
				} else { //if there is no error...
					if (!data) { //but no user information is retrieved...
						res.json({
							'errorsFront': ["Email or Password incorrect"] //return this error to client-side
						});
					} else { //if user information IS retrieved...
						if (bcrypt.compareSync(req.body.password, data.password)) { //assuming the password entered matches that in the DB for that user...
							res.json(data); //return the user information to client-side
						} else { //if password entered does NOT match that as retrieved from the DB...
							res.json({ //return this error to client-side
								'errorsFront': ["Email or Password incorrect"]
							});
						} //password no matchy else
					} //if user information is retrieved else
				} //if there is no error when searching for user else
			}); //User.findOne
		}
	};
})();
