var mqtt    = require('mqtt');
var sensorLib = require('node-dht-sensor');
var gpio = require("pi-gpio");
var client  = mqtt.connect(process.env.BASE_MQTT_URL);
var client_id = process.env.BASE_IOT_CLIENTID

console.log('start sender message');
var temp = 0;
var tempLight = 0;
var message ='';
var i=0;

// Setup sensor, exit if failed
var sensorType = 22; // DHT22, AM2302
var sensorPin  = 4;  // The GPIO pin number for sensor signal
var ldr = 7;  //Light Sensor GPIO Pin


if (!sensorLib.initialize(sensorType, sensorPin)) {
    console.warn('No se inicializo el sensor');
    process.exit(1);
}

// Connection to topics: Temperatura, Voltaje y Humedad in mosquitto
client.on('connect', function () {
	setInterval(function(){
		
		temp = newtempReading();
		var jsonTemp = {
			value : temp.temperature,
			clientid: client_id
		};
		message = JSON.stringify(jsonTemp);
		console.log(message);
		client.publish('temperatura', message);
		var jsonHum = {
			value : temp.humidity,
			clientid: client_id
		};
		message = JSON.stringify(jsonHum);
		client.publish('humedad', message);
		
	}, 15000) //meke a sensor reading every 10 seconds
	
		//client.publish('voltaje', true);
		//client.publish('humedad', true);
});


// Read temperature sensor 
function newtempReading() {
	var readout = sensorLib.read();
    return readout;
	//return Math.random()*10; 
}


