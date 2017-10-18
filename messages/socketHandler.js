
var config = require('../config.js');
var restClient = require('../restClient/restClientHandler.js');
var params = require('../restClient/params.js');

module.exports = (io) => {
	io.on('connection', socket => {
		console.log("User connected");
		var userId = socket.request._query['userId'];
		socket.on('location', (geoposition) => {
			console.log(JSON.stringify(geoposition));
			restClient.post(config.testUrl, params.get(geoposition, userId));
		});
		socket.on('disconnect', () => {
			console.log("User disconnected");
		});

	});
}