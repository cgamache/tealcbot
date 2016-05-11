FROM ubuntu
MAINTAINER ADDI

RUN curl -sL https://deb.nodesource.com/setup_4.x | sudo -E bash -
RUN apt-get update
RUN apt-get install -y build-essential nodejs

RUN mkdir /app

ADD . /app

RUN cd /app ; npm install 

CMD cd /app; /usr/bin/node index.js
