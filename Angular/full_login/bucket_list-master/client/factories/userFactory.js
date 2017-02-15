app.factory('userFactory', ['$http', function($http) { //creates userFactory and passes parameters
	return {
		index: function(cb) { //retrieves all users from DB
			$http.get('/users').then(function(response) { //AJAX call to /users route (retrieves all users)
				if (typeof(cb) == 'function') { //if the cb parameter as passed is a function...
					cb(response.data); //invoke said function and pass the retrieved information
				}
			});
		},
		create: function(user, cb) { //creates new user
			var errors = [], //creates empty array to store errors
				nameRegex = /^[a-zA-Z\-\']{2,}$/, //regex to test first/last name against
				emailRegex = /^[a-zA-Z0-9.+_-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]+$/, //regex to test email against
				pwordRegex =
				/(?=^.{8,}$)(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*()_+}{:;'?/><.;,])(?!.*\s).*$/; //regex to test password against
			if (!user || !user.firstName || !user.lastName || !user.email ||
				!user.password || !user.conf) { //if any fields are left blank...
				errors.push('Please fill in all fields'); //push this error to the errors array
			} else { //if all fields are filled in...
				if (!user.firstName.match(nameRegex)) { //if the first name entered does not match regex...
					errors.push('First Name incorrect format'); //push error to errors array
				}
				if (!user.lastName.match(nameRegex)) { //if the last name entered does not match regex...
					errors.push('Last Name incorrect format'); //push error to errors array
				}
				if (!user.email.match(emailRegex)) { //if the email entered does not match regex...
					errors.push('Email incorrect format'); //push error to errors array
				}
				if (!user.password.match(pwordRegex)) { //if the password entered does not match regex...
					errors.push(
						'Password does not meet minimum requirements: Must be at least 8 characters in length and include at least 1 lowercase and 1 uppercase letter, 1 number, and 1 special character' //push error to errors array
					);
				}
				if (user.password != user.conf) { //if the password and confirm password do not match...
					errors.push('Password and Confirm Password must match'); //push error to errors array...
				}
				if (errors.length > 0) { //if there are errors in the errors array...
					if (typeof(cb) == 'function') { //and the cb parameter is a function...
						cb({
							'errorsFront': errors //invoke cb and pass the errors array
						});
					}
				} else { //if there are no errors in the errors array...
					delete user.conf; //delete confirm password from the user object
					$http.post('/users/register', user).then(function(response) { //send the user object to the /users route in a post request
						if (typeof(cb) == 'function') { //if the cb parameter is a function...
							cb(response.data); //invoke cb and pass the returned user data (newly created user)
						}
					}); //$http.post
				} //errors in errors array if/else
			} //fields left blank if/else
			if (typeof(cb) == 'function') { //if some fields were left blank and cb is a function...
				cb({
					'errorsFront': errors //invoke cb and pass the errors array
				});
			}
		},
		getUser: function(id, cb) { //gets a single user from the DB based on given id
			$http.get('/users/' + id).then(function(response) { //get request with passed id
				if (typeof(cb) == 'function') { //if cb is a function...
					cb(response.data); //invoke cb and pass retrieved information
				}
			});
		},
		login: function(user, cb) { //logs user in based on entered information
			var errors = []; //creates empty array to store errors
			if (!user || !user.email ||
				!user.password) { //if any fields are left blank...
				errors.push('Please fill in all fields'); //pushes error to errors array
			} else { //if all fields are filled in...
				$http.post('/users/login', user).then(function(response) { //execute post request passing user object
					if (typeof(cb) == 'function') { //if cb is a function...
						cb(response.data); //invoke cb and pass retrived information (logged in user)
					}
				}, function(err) { //if an error is thrown during post request...
					if (typeof(cb) == 'function') {
						cb(err); //invoke cb and pass error
					}
				});
			}
			if (errors.length > 0) { //if the errors array is not empty (fields were left empty)...
				if (typeof(cb) == 'function') { //and cb is a function...
					cb({
						'errorsFront': errors //invoke cb and pass errors array
					});
				}
			}
		}
	};
}]);
