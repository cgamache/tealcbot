FROM ubuntu
MAINTAINER ADDI

RUN apt-get update
RUN apt-get install -y nodejs
#RUN apt-get install -y nodejs=0.6.12~dfsg1-1ubuntu1
RUN mkdir /app

ADD . /app

RUN cd /app ; npm install 

CMD ["/usr/bin/node", "/app/index.js"] 
