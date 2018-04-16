var mqtt    = require('mqtt');
var client  = mqtt.connect(process.env.BASE_MQTT_URL);
var Kafka   = require('no-kafka');
var producer = new Kafka.Producer();


console.log('start service bridge');

// Connection to topics: Temperatura, Voltaje y Humedad in mosquitto
client.on('connect', function () {
    client.subscribe('temperatura');
    client.subscribe('voltaje');
    client.subscribe('humedad');
    console.log('connected to mosquitto');
    startReceiverMosquitto()
});

function startReceiverMosquitto(){
    client.on('message', function (topic, message) {
	    console.log('Entregan	do ' + topic +": "+message.toString());
	    try {
		    switch (topic) {
			    case 'temperatura':
			    	publishKafka(topic, message.toString());
			    	break;
			    case 'voltaje':
			    	publishKafka(topic, message.toString());
			    	break;
			    case 'humedad':
			    	publishKafka(topic, message.toString());
			    	break;
		    }
        }
        catch(err) {
           console.log(err)
           console.log("Error sending message to kafka")
        }
    });
}

function publishKafka(topic, msg){
    producer.init().then(function(){
        console.log('Publish to kafka '+msg+' in topic '+topic);
        return producer.send({
            connectionString: process.env.BASE_KAFKA_URL,
            topic: topic,
            partition: 0,
            message: {
                value: msg
            }
        });
    });
}
