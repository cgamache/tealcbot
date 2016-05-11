FROM ubuntu
MAINTAINER ADDI

RUN apt-get update
RUN apt-get install -y nodejs npm
RUN mkdir /app

ADD . /app

RUN cd /app ; npm install 

CMD ["/usr/bin/node", "/app/index.js"] 
