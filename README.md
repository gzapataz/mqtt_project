# Configuración Vagrant dispositivos IOT
UNIVERSIDAD DE LOS ANDES
PROYECTO 2 - Grupo 6

Alex Chacon
Andres Sarmiento
Gabriel Zapata


Repositorio IOT para sensores de temperatura, voltaje, humedad

Repositorio/Sender

Los dispositivos IoT usados son Raspberry PI 3 corriendo sobre Debian Jessie con un sensor de humedad / temperatura modelo dht22 / am2302 el cual hace lecturas de los niveles de humedad y temperatura cada 15 segundos

Requiere la libreria:

Sensor Raspberry PI
wget http://www.airspayce.com/mikem/bcm2835/bcm2835-1.55.tar.gz
tar zxvf bcm2835-1.55.tar.gz
cd bcm2835-1.55
./configure
make
sudo make check
sudo make install
sudo npm install -g node-dht-sensor

Sensor dht22 / am2302 Conectado al GPIO Pin No 4 

Repositorio/Mqttbridge

Contiene el codigo Bridge entre Mosquitto MQTT y KAFKA para los topicos
Temperatura, Voltaje, Humedad

Repositorio/Arduino
Contiene el codigo para controlar un sensor LDR y enviar la informacion via ESP8266 a un servidor en Node JS via HTTP GET

Repositorio/Receiver
Modulo que recibe la informacion desde Arduino y envia a una cola MQTT
