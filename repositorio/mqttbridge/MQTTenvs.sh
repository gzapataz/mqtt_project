#!/bin/bash

export BASE_MQTT_URL="mqtt://localhost"
export BASE_KAFKA_URL="127.0.0.1:9092"

bin/kafka-topics.sh --create --zookeeper localhost:2181 --replication-factor 1 --partitions 1 --topic humedad
bin/kafka-topics.sh --create --zookeeper localhost:2181 --replication-factor 1 --partitions 1 --topic temperatura
bin/kafka-topics.sh --create --zookeeper localhost:2181 --replication-factor 1 --partitions 1 --topic voltaje

bin/kafka-console-consumer.sh --zookeeper localhost:2181 --topic temperatura --from-beginning
bin/kafka-console-consumer.sh --zookeeper localhost:2181 --topic voltaje --from-beginning
bin/kafka-console-consumer.sh --zookeeper localhost:2181 --topic humedad --from-beginning