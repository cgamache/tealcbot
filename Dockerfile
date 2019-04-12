FROM ubuntu:latest
MAINTAINER ADDI

RUN apt-get update && apt-get install -y curl
RUN curl -sL https://deb.nodesource.com/setup_10.x | bash -
RUN apt-get update && apt-get install -y build-essential nodejs

RUN mkdir /app

ADD . /app

RUN cd /app ; npm ci 

CMD cd /app; /usr/bin/node index.js
