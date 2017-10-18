var Client = require('node-rest-client').Client;
var client = new Client();
var restClient = {};

restClient.get = (url) => {
    client.get(url, function (data, response) {
        // parsed response body as js object 
        console.log(data);
        // raw response 
        console.log(response);
    });
}

restClient.post = (url, args) => {
    client.post(url, args, function (data, response) {
        // parsed response body as js object 
        console.log(data);
        // raw response 
        console.log(response);
    });
}

module.exports = restClient;
