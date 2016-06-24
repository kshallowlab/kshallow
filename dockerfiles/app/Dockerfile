FROM alpine:3.3
MAINTAINER Miannay Nicolas

RUN apk --update --no-progress add nodejs bash git
RUN npm install -g sails grunt bower pm2 npm-check-updates vue-cli
RUN mkdir -p /usr/src/app

# WORKDIR /usr/src/app/assets/
# ADD ./assets/package.json /usr/src/app/assets/package.json
# RUN npm install

WORKDIR /usr/src/app/
# ADD ./package.json /usr/src/app/package.json
# RUN npm install

VOLUME ["/usr/src/app"]
EXPOSE 1337
