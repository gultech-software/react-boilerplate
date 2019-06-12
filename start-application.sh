#!/usr/bin/env bash

sudo docker rm -f boilerplate
if ! sudo docker build -t boilerplate . --pull; then
    exit 1
fi
sudo docker run -d -p 8080:8080 \
    --name boilerplate \
    boilerplate
sudo docker logs -f boilerplate
