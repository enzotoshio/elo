FROM docker/ubuntu:trusty

RUN apt-get update

RUN apt-get install -y nodejs npm
