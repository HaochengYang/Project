var users = require('../controllers/userController'),
	buckets = require('../controllers/bucketController');

module.exports = function(app) {
	app.post('/users/register', users.create);
	app.post('/users/login', users.login);
	app.get('/users/:id', users.show);
	app.get('/users', users.index);
	app.post('/buckets', buckets.create);
	app.get('/buckets/markDone/:id', buckets.markDone);
	app.get('/buckets/unmarkDone/:id', buckets.unmarkDone);
};
