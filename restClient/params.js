
var config = require('../config.js');
var params = {};
var param = {
    headers: { "Content-Type": "application/json" }
};

params.get = (geoposition, userId) => {

    var location = {};
    var cordinates = {};
    var data = {
        "userId": userId,
        "locations": []
    };

    location.startTime = new Date().getTime();
    location.time = geoposition.timestamp;
    location.weight = config.weight;
    location.accuracyLevel = geoposition.coords.accuracy;
    cordinates.lat = geoposition.coords.latitude;
    cordinates.lng = geoposition.coords.longitude;
    location.cordinates = cordinates;
    data.locations.push(location);
    param.data = data;
    console.log(JSON.stringify(param));
    return param;
}

module.exports = params;