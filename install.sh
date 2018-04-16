#!/usr/bin/env bash

# ----------------------------------------------------------------------
# Este Script instala todos los paquetes necesarios para trabajar
# ----------------------------------------------------------------------

# Actualiza Aptitude
apt-get update

# Instala NodeJS el manejador de paquetes NPM
apt-get install -y nodejs
apt-get install -y npm

# Instala GIT
apt-get install -y git

# instala SBT

sudo apt-key adv --keyserver hkp://keyserver.ubuntu.com:80 --recv 642AC823
echo "deb https://dl.bintray.com/sbt/debian /" | sudo tee -a /etc/apt/sources.list.d/sbt.list
sudo apt-get update
sudo apt-get install -y sbt

# Instala ZIP y UNZIP
apt-get install zip
apt-get install unzip

# Java 
sudo add-apt-repository ppa:openjdk-r/ppa -y
sudo apt-get update
sudo apt-get install openjdk-8-jre -y

cd /home/vagrant



#instalar mosquitto
# debe ser automatico si no lo deja carpeta
wget http://mosquitto.org/files/source/mosquitto-1.4.8.tar.gz
tar xzf mosquitto-1.4.8.tar.gz

sudo apt-get install apt-file
#apt-file update
#apt-file search uuid/uuid.h


sudo apt-add-repository ppa:mosquitto-dev/mosquitto-ppa
sudo apt-get update
sudo apt-get install mosquitto mosquitto-clients python-mosquitto

#/home/vagrant

#mqqt kafka bridge///    mqqtt bridge mosquitto
wget http://www.us.apache.org/dist/maven/maven-3/3.3.9/binaries/apache-maven-3.3.9-bin.tar.gz
tar xzf apache-maven-3.3.9-bin.tar.gz
#unzip mqttKafkaBridge-master.zip

#kafka
#wget https://www.apache.org/dyn/closer.cgi?path=/kafka/0.9.0.1/kafka-0.9.0.1-src.tgz
wget http://www-us.apache.org/dist/kafka/1.1.0/kafka_2.11-1.1.0.tgz
tar xzf kafka_2.11-1.1.0.tgz

#spark
wget http://d3kbcqa49mib13.cloudfront.net/spark-1.6.0-bin-hadoop2.6.tgz
tar xzf spark-1.6.0-bin-hadoop2.6.tgz
#Paquetes de node

# Instala redis
sudo apt-get install tcl8.5 -y

wget http://download.redis.io/releases/redis-stable.tar.gz

tar xzf redis-stable.tar.gz

cd redis-stable

make

make test

sudo make install

#service iptables stop
#chkconfig iptables off





