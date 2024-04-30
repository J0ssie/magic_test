#!/bin/bash

declare CONTAINER_NAME="lks_binex__makan_pie"
#  Port from docker
declare -i EXPOSED_PORT=9999
# Port for connect
declare -i PUBLIC_PORT=35002

docker stop $CONTAINER_NAME
docker rm $CONTAINER_NAME
docker run -d -p $PUBLIC_PORT:$EXPOSED_PORT --rm --name $CONTAINER_NAME $(docker_id=$(docker build . | tail -n 1); echo ${docker_id:18};)
