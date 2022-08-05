#Creates a layer from node:alpine image.
FROM node:alpine

RUN mkdir -p /usr/src/app

ENV PORT 3000
WORKDIR /usr/src/app

COPY package.json /usr/src/app
COPY yarn.lock /usr/src/app

RUN npm install
COPY . /usr/src/app

RUN npm run build

EXPOSE 3000

#Allows you to configure a container that will run as an executable
ENTRYPOINT ["npm", "run", "start"]
