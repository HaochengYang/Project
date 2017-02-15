var express = require('express'),
	path = require('path'),
	bp = require('body-parser'),
	app = express(),
	port = 7000;

app.use(bp.json());
app.use(express.static(path.join(__dirname, './client')));
app.use(express.static(path.join(__dirname, './client/bower_components')));

require('./server/config/mongoose');
require('./server/config/routes')(app);

app.listen(port, function() {
	console.log('Up on' + port + 'radio!');
});
