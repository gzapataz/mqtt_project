#!/bin/bash

export BASE_MQTT_URL="mqtt://localhost"
export BASE_KAFKA_URL="127.0.0.1:9092"

cd  ./kafka_2.11-1.1.0 

bin/kafka-topics.sh --create --zookeeper localhost:2181 --replication-factor 1 --partitions 1 --topic humedad
bin/kafka-topics.sh --create --zookeeper localhost:2181 --replication-factor 1 --partitions 1 --topic temperatura
bin/kafka-topics.sh --create --zookeeper localhost:2181 --replication-factor 1 --partitions 1 --topic voltaje
