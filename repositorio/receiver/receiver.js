var express = require('express');
var bodyParser = require('body-parser');
var app = express();
var router = require('./router');
var pg = require('pg');
var AWS = require("aws-sdk");

var mqtt    = require('mqtt');
var client  = mqtt.connect(process.env.BASE_MQTT_URL);
var client_id = process.env.BASE_IOT_CLIENTID


//app.use(bodyParser.urlencoded({ extended: true }))
//app.use(bodyParser.json())

client.on('connect', function () {

app.get('/light', function(req, res) {
	temp = req.query.val;
	console.log('Light:' + temp)
	
		
		var jsonLight = {
			value : temp,
			clientid: client_id
		};
		message = JSON.stringify(jsonLight);
		console.log(message);
		client.publish('voltaje', message);


});
	});
//router(app);

console.log ('Salio')
app.listen(8080, () => {
  console.log('Express listening on port:', 8080);
})
