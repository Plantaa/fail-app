FROM node:alpine

WORKDIR /app

COPY package.json .

RUN npm install

COPY app.js .

EXPOSE 5000

CMD [ "npm", "start" ]