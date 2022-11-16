FROM node:alpine

WORKDIR /paypal-adapter
ADD . .

RUN apk add --no-cache git
RUN npm install

ENV EA_PORT=8000

CMD npm start