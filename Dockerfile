FROM ubuntu:trusty

RUN apt-get update

RUN curl -sL https://deb.nodesource.com/setup_4.x | sudo -E bash -

RUN apt-get install -y nodejs npm ruby

RUN apt-get install -y build-essential nodejs-legacy

RUN gem install sass

ADD . /src

RUN cd /src; npm install; npm rebuild node-sass

WORKDIR /src

EXPOSE 8080

CMD ./node_modules/.bin/grunt serve
