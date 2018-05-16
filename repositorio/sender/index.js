var mqtt    = require('mqtt');
var client  = mqtt.connect(process.env.BASE_MQTT_URL);

console.log('start sender message');
var temp = 0;
var message ='';
var i=0;


// Connection to topics: Temperatura, Voltaje y Humedad in mosquitto
client.on('connect', function () {
	setInterval(function(){
		temp = newtempReading();
		var jsonTemp = {
			value : temp,
			client_id: 31231231231
		};
		message = JSON.stringify(jsonTemp);
		console.log(message);
		client.publish('temperatura', message);
	}, 1000)
	
		//client.publish('voltaje', true);
		//client.publish('humedad', true);
});

function newtempReading() {
	return Math.random()*10;
}
