var express = require('express');
var app = express();

var server = require('http').createServer(app);
var bodyParser = require('body-parser');
var config = require('./config.js');

var helmet = require('helmet');

//Protect using http headers
app.use(helmet());

//var logger = require('./lib/logging.js');
var io = require('socket.io')(server, {
	pingTimeout: config.pingTimeout,
	pingInterval: config.pingInterval
});

//Parse the http request body
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

require('./messages/socketHandler.js')(io);

//Serve public files from the template folder
app.use(express.static(__dirname + '/template'));

app.use((error, req, res, next) => {
	console.error(error);
	if (error)
		res.sendStatus(500);
	else
		return next();
});

server.listen(config.port, () => console.log("ma-asset-socket sever listing on port " + config.port));
